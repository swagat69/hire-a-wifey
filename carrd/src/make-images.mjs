// Generates every image the Carrd page uses (book covers, gift box, hero
// background, share image, icon) as SVG, then renders each to PNG/JPG with
// Playwright so it can be uploaded to Carrd.
//
//   node carrd/src/make-images.mjs
//
// Edit the COVERS list to change titles, authors or colours.
import { chromium } from "playwright";
import { readFileSync, mkdirSync } from "node:fs";
import { execFileSync } from "node:child_process";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const OUT = join(dirname(fileURLToPath(import.meta.url)), "..", "images");
mkdirSync(OUT, { recursive: true });

// Fonts are loaded by the render page (see bottom), not embedded in the SVGs.
const FONT = "";
const FONT_LINK = `<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Bricolage+Grotesque:opsz,wght@12..96,800&family=Inter:wght@600;800&family=Caveat:wght@700&display=block">`;

/* ---------------------------------------------------------------- covers */
// Each cover: 400×600. `art` draws the illustration behind the title.
const COVERS = [
  {
    file: "cover-quiet-orchard", title: ["THE QUIET", "ORCHARD"], author: "MARA ELLISON",
    bg: "#1F4D3A", fg: "#FFE7A3",
    art: `<circle cx="200" cy="330" r="120" fill="#2F6B50"/>
          <circle cx="150" cy="300" r="22" fill="#F25C54"/><circle cx="250" cy="280" r="18" fill="#F25C54"/>
          <circle cx="215" cy="360" r="20" fill="#F25C54"/><circle cx="170" cy="380" r="14" fill="#FFB938"/>
          <rect x="190" y="420" width="20" height="110" fill="#5B3A29"/>`,
  },
  {
    file: "cover-salt-static", title: ["SALT &", "STATIC"], author: "THEO VANCE",
    bg: "#0E2A5C", fg: "#9FF0E6",
    art: `<path d="M0 380 Q100 330 200 380 T400 380 V600 H0Z" fill="#1F4C9A"/>
          <path d="M0 430 Q100 390 200 430 T400 430 V600 H0Z" fill="#2E6BD1"/>
          <path d="M0 480 Q100 450 200 480 T400 480 V600 H0Z" fill="#9FF0E6" opacity=".55"/>
          <circle cx="300" cy="250" r="46" fill="#FFD447"/>
          <path d="M80 200 l20 -30 l20 30 l20 -30 l20 30" stroke="#9FF0E6" stroke-width="6" fill="none"/>`,
  },
  {
    file: "cover-midnight-cartography", title: ["MIDNIGHT", "CARTO-", "GRAPHY"], author: "JUNE OKAFOR",
    bg: "#2A1B4D", fg: "#FFD447",
    art: `<g fill="#FFD447"><circle cx="60" cy="300" r="3"/><circle cx="120" cy="350" r="4"/><circle cx="330" cy="320" r="3"/>
          <circle cx="280" cy="400" r="5"/><circle cx="90" cy="470" r="3"/><circle cx="350" cy="500" r="4"/></g>
          <path d="M60 300 L120 350 L200 420 L280 400 L330 320" stroke="#B79CFF" stroke-width="3" fill="none" stroke-dasharray="8 8"/>
          <circle cx="200" cy="420" r="60" fill="none" stroke="#F23FCF" stroke-width="10"/>
          <path d="M200 380 L210 420 L200 460 L190 420Z" fill="#F23FCF"/>`,
  },
  {
    file: "cover-lighthouse-bones", title: ["BONES OF THE", "LIGHTHOUSE"], author: "R. K. LINDEN",
    bg: "#F2E3C6", fg: "#1C1A3A",
    art: `<path d="M170 560 L185 330 H215 L230 560Z" fill="#C8321E"/>
          <rect x="178" y="400" width="44" height="22" fill="#F2E3C6"/><rect x="174" y="470" width="52" height="22" fill="#F2E3C6"/>
          <rect x="180" y="300" width="40" height="30" fill="#1C1A3A"/>
          <path d="M220 312 L400 250 V380Z" fill="#FFD447" opacity=".8"/>
          <path d="M0 560 Q200 520 400 560 V600 H0Z" fill="#1C1A3A"/>`,
  },
  {
    file: "cover-small-infinity", title: ["A SMALL", "INFINITY"], author: "PRIYA SANDOVAL",
    bg: "#F23FCF", fg: "#1C1A3A",
    art: `<path d="M110 400 C 110 330 190 330 200 400 C 210 470 290 470 290 400 C 290 330 210 330 200 400 C 190 470 110 470 110 400Z"
             fill="none" stroke="#FFD447" stroke-width="26" stroke-linecap="round"/>
          <circle cx="70" cy="520" r="30" fill="#1C1A3A"/><circle cx="340" cy="290" r="18" fill="#9FF0E6"/>`,
  },
  {
    file: "cover-heatwave-hotel", title: ["HEATWAVE", "HOTEL"], author: "FELIX MOREAU",
    bg: "#FF7A3D", fg: "#FFF8EC",
    art: `<circle cx="200" cy="360" r="110" fill="#FFD447"/>
          <rect x="120" y="380" width="160" height="170" fill="#C8321E"/>
          <g fill="#FFD447"><rect x="140" y="400" width="30" height="30"/><rect x="185" y="400" width="30" height="30"/><rect x="230" y="400" width="30" height="30"/>
          <rect x="140" y="450" width="30" height="30"/><rect x="230" y="450" width="30" height="30"/></g>
          <rect x="185" y="490" width="30" height="60" fill="#1C1A3A"/>`,
  },
  {
    file: "cover-one-bad-night", title: ["ONE BAD", "NIGHT"], author: "SOPHIE ARDEN",
    bg: "#C8321E", fg: "#FFE7A3",
    art: `<circle cx="280" cy="300" r="70" fill="#FFE7A3"/><circle cx="305" cy="285" r="62" fill="#C8321E"/>
          <path d="M0 600 V470 L60 440 L100 470 L160 410 L220 460 L280 420 L340 470 L400 440 V600Z" fill="#1C1A3A"/>
          <g fill="#FFD447"><rect x="150" y="480" width="10" height="14"/><rect x="290" y="500" width="10" height="14"/></g>`,
  },
];

function coverSVG(c) {
  // Shrink long lines so every title fits the 332px text box.
  const size = Math.min(54, Math.floor(332 / (Math.max(...c.title.map((t) => t.length)) * 0.62)));
  const lines = c.title
    .map((t, i) => `<text x="34" y="${40 + size + i * size * 1.05}" font-family="Bricolage Grotesque" font-weight="800" font-size="${size}" letter-spacing="-1.5" fill="${c.fg}">${t.replace("&", "&amp;")}</text>`)
    .join("");
  return `<svg xmlns="http://www.w3.org/2000/svg" width="400" height="600" viewBox="0 0 400 600">${FONT}
    <rect width="400" height="600" fill="${c.bg}"/>${c.art}${lines}
    <text x="34" y="570" font-family="Inter" font-weight="600" font-size="17" letter-spacing="3" fill="${c.fg}">${c.author}</text>
    <rect x="0" y="0" width="14" height="600" fill="#000" opacity=".12"/></svg>`;
}

/* ------------------------------------------------------------- gift box */
const BOX = `<svg xmlns="http://www.w3.org/2000/svg" width="1000" height="760" viewBox="0 0 1000 760">
  <defs>
    <pattern id="p" width="80" height="80" patternUnits="userSpaceOnUse" patternTransform="rotate(20)">
      <rect width="80" height="80" fill="#2A1B4D"/>
      <path d="M0 40 Q20 10 40 40 T80 40" stroke="#F23FCF" stroke-width="14" fill="none"/>
      <circle cx="60" cy="68" r="7" fill="#9FF0E6"/>
    </pattern>
  </defs>
  <ellipse cx="500" cy="690" rx="380" ry="40" fill="#000" opacity=".15"/>
  <path d="M150 330 L500 450 L500 690 L150 570Z" fill="url(#p)"/>
  <path d="M500 450 L850 330 L850 570 L500 690Z" fill="#F23FCF"/>
  <path d="M500 450 L850 330 L850 570 L500 690Z" fill="url(#p)" opacity=".55"/>
  <path d="M150 330 L500 210 L850 330 L500 450Z" fill="#B79CFF"/>
  <path d="M320 272 L670 392" stroke="#FFD447" stroke-width="40"/>
  <path d="M680 270 L330 390" stroke="#FFD447" stroke-width="40" opacity=".9"/>
  <path d="M325 389 L325 629" stroke="#FFD447" stroke-width="40"/>
  <path d="M675 389 L675 629" stroke="#FFD447" stroke-width="40"/>
  <path d="M500 330 C 420 230 330 260 380 320 C 410 355 470 345 500 330Z" fill="#FF7A3D"/>
  <path d="M500 330 C 580 230 670 260 620 320 C 590 355 530 345 500 330Z" fill="#FF7A3D"/>
  <circle cx="500" cy="330" r="22" fill="#C8321E"/>
</svg>`;

/* --------------------------------------------------- hero / bands blobs */
const BLOBS = `<svg xmlns="http://www.w3.org/2000/svg" width="1600" height="900" viewBox="0 0 1600 900" preserveAspectRatio="xMidYMid slice">
  <rect width="1600" height="900" fill="#FFD447"/>
  <path d="M-40 620 C 180 500 300 760 540 690 C 780 620 760 860 1010 850 C 1220 840 1250 720 1440 740 C 1560 752 1620 800 1660 820 V960 H-40Z" fill="#FFB938"/>
  <path d="M-40 760 C 160 680 270 860 480 820 C 660 785 720 920 920 940 H-40Z" fill="#F79A1B"/>
  <path d="M1150 -40 C 1120 110 1250 170 1380 150 C 1500 132 1530 260 1660 270 V-40Z" fill="#FFB938"/>
  <path d="M1320 -40 C 1320 50 1400 80 1480 66 C 1560 52 1600 112 1660 122 V-40Z" fill="#F79A1B"/>
  <path d="M70 110 C 130 50 230 80 240 150 C 250 220 160 260 110 230 C 60 200 30 150 70 110Z" fill="#FFE38A"/>
</svg>`;

/* ------------------------------------------------------- share + icon */
const SHARE = `<svg xmlns="http://www.w3.org/2000/svg" width="1200" height="630" viewBox="0 0 1200 630">${FONT}
  <rect width="1200" height="630" fill="#FFD447"/>
  <path d="M-20 470 C 200 380 330 600 560 540 C 780 480 800 650 1220 600 V650 H-20Z" fill="#FFB938"/>
  <text x="70" y="200" font-family="Bricolage Grotesque" font-weight="800" font-size="92" letter-spacing="-3" fill="#1C1A3A">Stories worth</text>
  <text x="70" y="300" font-family="Bricolage Grotesque" font-weight="800" font-size="92" letter-spacing="-3" fill="#1C1A3A">unboxing.</text>
  <rect x="70" y="350" width="330" height="72" rx="36" fill="#F23FCF"/>
  <text x="235" y="397" text-anchor="middle" font-family="Inter" font-weight="600" font-size="28" fill="#fff">Dog-Ear Book Club</text>
  <g transform="translate(880 100) rotate(8)"><rect width="250" height="375" fill="#2A1B4D"/><rect x="18" y="30" width="200" height="22" fill="#FFD447"/><rect x="18" y="64" width="150" height="22" fill="#FFD447"/><circle cx="125" cy="250" r="60" fill="none" stroke="#F23FCF" stroke-width="10"/></g>
  <g transform="translate(760 180) rotate(-10)"><rect width="230" height="345" fill="#C8321E"/><rect x="18" y="30" width="170" height="22" fill="#FFE7A3"/><rect x="18" y="64" width="110" height="22" fill="#FFE7A3"/><circle cx="160" cy="180" r="44" fill="#FFE7A3"/></g>
</svg>`;

const ICON = `<svg xmlns="http://www.w3.org/2000/svg" width="512" height="512" viewBox="0 0 512 512">${FONT}
  <rect width="512" height="512" rx="112" fill="#F23FCF"/>
  <path d="M136 120 H330 L380 170 V392 H136Z" fill="#FFD447"/>
  <path d="M330 120 V170 H380Z" fill="#FFB938"/>
  <text x="256" y="340" text-anchor="middle" font-family="Bricolage Grotesque" font-weight="800" font-size="170" fill="#1C1A3A">D</text>
</svg>`;

/* ------------------------------------------------- composites (phase 2) */
// These place the rendered covers onto coloured, tilted cards so the tilt and
// colour are baked into the image — Carrd needs no custom CSS to show them.
const NAVY = "#1C1A3A";
const img = (file) => `data:image/jpeg;base64,${readFileSync(join(OUT, file)).toString("base64")}`;
const shadow = `<filter id="s" x="-20%" y="-20%" width="140%" height="140%"><feDropShadow dx="0" dy="14" stdDeviation="14" flood-color="#1C1A3A" flood-opacity=".28"/></filter>`;

function bookTile({ cover, bg, tilt = -4, badge }) {
  const b = badge
    ? `<g transform="translate(470 92) rotate(10)"><circle r="62" fill="#FFF8EC" stroke="${NAVY}" stroke-width="5"/>
         <text y="-6" text-anchor="middle" font-family="Bricolage Grotesque" font-weight="800" font-size="34" fill="${NAVY}">${badge[0]}</text>
         <text y="28" text-anchor="middle" font-family="Inter" font-weight="800" font-size="20" letter-spacing="2" fill="#C8321E">${badge[1]}</text></g>`
    : "";
  return `<svg xmlns="http://www.w3.org/2000/svg" width="600" height="660" viewBox="0 0 600 660"><defs>${shadow}</defs>
    <rect x="10" y="10" width="580" height="640" rx="44" fill="${bg}"/>
    <g transform="rotate(${tilt} 300 330)" filter="url(#s)"><image href="${img(cover)}" x="150" y="105" width="300" height="450"/></g>${b}</svg>`;
}

const STEP_ICONS = {
  pick: `<g transform="translate(300 330)"><rect x="-120" y="-80" width="100" height="150" rx="6" fill="#F23FCF" transform="rotate(-10)"/><rect x="-40" y="-90" width="100" height="150" rx="6" fill="${NAVY}"/><rect x="40" y="-70" width="100" height="150" rx="6" fill="#9FF0E6" transform="rotate(9)"/></g>`,
  extras: `<g transform="translate(300 330)"><rect x="-110" y="-60" width="220" height="140" rx="10" fill="#F23FCF"/><rect x="-125" y="-95" width="250" height="45" rx="10" fill="${NAVY}"/><rect x="-14" y="-95" width="28" height="175" fill="#FFD447"/></g>`,
  unbox: `<g transform="translate(300 350)"><path d="M-130 -20 L0 30 L130 -20 L130 90 L0 140 L-130 90Z" fill="${NAVY}"/><path d="M-130 -20 L-60 -110 L60 -60 L0 30Z" fill="#B79CFF"/><path d="M130 -20 L60 -110 L-10 -80" fill="#F23FCF"/><circle cx="-10" cy="-150" r="12" fill="#FFD447"/><circle cx="50" cy="-170" r="8" fill="#F23FCF"/><circle cx="-60" cy="-180" r="7" fill="#9FF0E6"/></g>`,
  talk: `<g transform="translate(300 330)"><rect x="-140" y="-100" width="190" height="120" rx="30" fill="#F23FCF"/><path d="M-100 15 L-110 60 L-60 18Z" fill="#F23FCF"/><rect x="-40" y="0" width="190" height="110" rx="30" fill="${NAVY}"/><path d="M110 100 L125 140 L80 105Z" fill="${NAVY}"/><g fill="#FFD447"><circle cx="20" cy="55" r="10"/><circle cx="55" cy="55" r="10"/><circle cx="90" cy="55" r="10"/></g></g>`,
};
function stepTile({ n, bg, icon, tilt }) {
  return `<svg xmlns="http://www.w3.org/2000/svg" width="600" height="600" viewBox="0 0 600 600"><defs>${shadow}</defs>
    <g transform="rotate(${tilt} 300 300)" filter="url(#s)"><rect x="60" y="60" width="480" height="480" rx="36" fill="${bg}"/>
    <text x="300" y="160" text-anchor="middle" font-family="Caveat" font-weight="700" font-size="64" fill="${NAVY}">Step #${n}</text>
    ${STEP_ICONS[icon]}</g></svg>`;
}

const STICKERS = [
  { t: "A genre for every mood", x: 430, y: 190, r: -6, bg: "#F23FCF", fg: "#fff" },
  { t: "Free shipping", x: 930, y: 215, r: 6, bg: "#2BB673", fg: "#fff" },
  { t: "Fair prices", x: 270, y: 350, r: 4, bg: "#B79CFF", fg: NAVY },
  { t: "Real hardcovers", x: 790, y: 345, r: -4, bg: NAVY, fg: "#FFD447" },
  { t: "Hand-picked reads", x: 560, y: 490, r: -2, bg: "#FF7A3D", fg: "#fff" },
];
const STICKERS_SVG = `<svg xmlns="http://www.w3.org/2000/svg" width="1200" height="580" viewBox="0 0 1200 580"><defs>${shadow}</defs>
  <text x="600" y="70" text-anchor="middle" font-family="Bricolage Grotesque" font-weight="800" font-size="64" fill="${NAVY}" transform="rotate(-4 600 70)">Why Dog-Ear?</text>
  ${STICKERS.map((s) => {
    const w = s.t.length * 27 + 90;
    return `<g transform="translate(${s.x} ${s.y}) rotate(${s.r})" filter="url(#s)"><rect x="${-w / 2}" y="-50" width="${w}" height="100" rx="50" fill="${s.bg}" stroke="#fff" stroke-width="8"/>
      <text y="17" text-anchor="middle" font-family="Bricolage Grotesque" font-weight="800" font-size="48" fill="${s.fg}">${s.t}</text></g>`;
  }).join("")}</svg>`;

const RIBBON_TEXT = "NEW BOOKS EVERY MONTH ✦ FREE SHIPPING ✦ JOIN THE CLUB ✦ ";
const RIBBON_SVG = `<svg xmlns="http://www.w3.org/2000/svg" width="1600" height="260" viewBox="0 0 1600 260">
  <g transform="rotate(3 800 130)"><rect x="-100" y="80" width="1800" height="92" fill="#B79CFF"/>
    <text x="-40" y="143" font-family="Bricolage Grotesque" font-weight="800" font-size="50" letter-spacing="2" fill="${NAVY}">${RIBBON_TEXT.repeat(3)}</text></g>
  <g transform="rotate(-3 800 130)"><rect x="-100" y="90" width="1800" height="92" fill="#F23FCF"/>
    <text x="-260" y="153" font-family="Bricolage Grotesque" font-weight="800" font-size="50" letter-spacing="2" fill="#FFD447">${RIBBON_TEXT.repeat(3)}</text></g>
</svg>`;

const HERO_BOOKS = () => `<svg xmlns="http://www.w3.org/2000/svg" width="900" height="900" viewBox="0 0 900 900"><defs>${shadow}</defs>
  <g transform="rotate(12 600 330)" filter="url(#s)"><image href="${img("cover-midnight-cartography.jpg")}" x="430" y="70" width="340" height="510"/></g>
  <g transform="rotate(-14 330 560)" filter="url(#s)"><image href="${img("cover-one-bad-night.jpg")}" x="140" y="300" width="340" height="510"/></g>
  <text x="640" y="720" font-family="Caveat" font-weight="700" font-size="54" fill="${NAVY}" transform="rotate(-6 640 720)">new picks</text>
  <text x="640" y="775" font-family="Caveat" font-weight="700" font-size="54" fill="${NAVY}" transform="rotate(-6 640 775)">on the 1st!</text>
  <path d="M600 680 C 560 640 560 610 590 590" stroke="${NAVY}" stroke-width="5" fill="none" stroke-linecap="round"/>
  <path d="M575 600 L590 588 L600 606" stroke="${NAVY}" stroke-width="5" fill="none" stroke-linecap="round"/>
</svg>`;

/* --------------------------------------------------------------- render */
const browser = await chromium.launch();
const page = await browser.newPage({ deviceScaleFactor: 1 });
// Behind a proxy Chromium can't reach Google Fonts; CURL_FONTS=1 fetches
// them with curl instead (which honours HTTPS_PROXY).
if (process.env.CURL_FONTS) {
  await page.route(/fonts\.(googleapis|gstatic)\.com/, (route) => {
    const body = execFileSync("curl", ["-sS", "-A", "Mozilla/5.0 Chrome/120", route.request().url()]);
    const css = route.request().url().includes("googleapis");
    route.fulfill({ body, contentType: css ? "text/css" : "font/ttf", headers: { "access-control-allow-origin": "*" } });
  });
}

async function render({ name, svg, w, h, type }) {
  await page.setViewportSize({ width: w, height: h });
  await page.setContent(`<html><head>${FONT_LINK}</head><body style="margin:0;background:transparent">${svg}</body></html>`, { waitUntil: "networkidle" });
  await page.evaluate(async () => {
    await document.fonts.load('800 50px "Bricolage Grotesque"');
    await document.fonts.load('600 20px "Inter"');
    await document.fonts.load('800 20px "Inter"');
    await document.fonts.load('700 40px "Caveat"');
    await document.fonts.ready;
  });
  const ext = type === "jpeg" ? "jpg" : "png";
  await page.screenshot({
    path: join(OUT, `${name}.${ext}`),
    type,
    ...(type === "jpeg" ? { quality: 84 } : { omitBackground: true }),
    clip: { x: 0, y: 0, width: w, height: h },
  });
  console.log("wrote", `${name}.${ext}`);
}

// Phase 1 — stand-alone artwork.
for (const c of COVERS) await render({ name: c.file, svg: coverSVG(c), w: 400, h: 600, type: "jpeg" });
await render({ name: "gift-box", svg: BOX, w: 1000, h: 760, type: "png" });
await render({ name: "hero-blobs", svg: BLOBS, w: 1600, h: 900, type: "jpeg" });
await render({ name: "share-image", svg: SHARE, w: 1200, h: 630, type: "jpeg" });
await render({ name: "icon", svg: ICON, w: 512, h: 512, type: "png" });

// Phase 2 — composites that reuse the covers.
await render({ name: "hero-books", svg: HERO_BOOKS(), w: 900, h: 900, type: "png" });

const PICKS = [
  ["cover-quiet-orchard.jpg", "#D9F27A", -4],
  ["cover-salt-static.jpg", "#FFD447", 3],
  ["cover-midnight-cartography.jpg", "#B79CFF", -3],
  ["cover-lighthouse-bones.jpg", "#9FF0E6", 4],
  ["cover-heatwave-hotel.jpg", "#FFB3D9", -3],
];
for (const [i, [cover, bg, tilt]] of PICKS.entries())
  await render({ name: `pick-${i + 1}`, svg: bookTile({ cover, bg, tilt }), w: 600, h: 660, type: "png" });

const FAVS = [
  ["cover-small-infinity.jpg", "#FFF8EC", -3, ["SEP", "WINNER"]],
  ["cover-one-bad-night.jpg", "#FFF8EC", 3, ["AUG", "WINNER"]],
  ["cover-salt-static.jpg", "#FFF8EC", -2, ["JUL", "WINNER"]],
  ["cover-heatwave-hotel.jpg", "#FFF8EC", 4, ["JUN", "WINNER"]],
];
for (const [i, [cover, bg, tilt, badge]] of FAVS.entries())
  await render({ name: `fav-${i + 1}`, svg: bookTile({ cover, bg, tilt, badge }), w: 600, h: 660, type: "png" });

await render({ name: "exclusive", svg: bookTile({ cover: "cover-one-bad-night.jpg", bg: "#FFD447", tilt: 5, badge: ["ONLY", "HERE"] }), w: 600, h: 660, type: "png" });

const STEPS = [
  { n: 1, bg: "#FFD447", icon: "pick", tilt: -5 },
  { n: 2, bg: "#B79CFF", icon: "extras", tilt: 4 },
  { n: 3, bg: "#FFD447", icon: "unbox", tilt: -3 },
  { n: 4, bg: "#B79CFF", icon: "talk", tilt: 5 },
];
for (const s of STEPS) await render({ name: `step-${s.n}`, svg: stepTile(s), w: 600, h: 600, type: "png" });

await render({ name: "why-stickers", svg: STICKERS_SVG, w: 1200, h: 580, type: "png" });
await render({ name: "ribbon", svg: RIBBON_SVG, w: 1600, h: 260, type: "png" });

await browser.close();
