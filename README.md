# Hire a Wifey — Hervey Bay homepage

Next.js 16 (App Router, TypeScript, plain CSS + CSS Modules — no Tailwind).
All routes prerender as static HTML.

```bash
npm install
npm run dev      # http://localhost:3000
npm run build
```

---

## Before this goes live

Three things will bite if they ship as-is.

### 1. The enquiry form does not send anything

`app/actions.ts` validates every field server-side and then returns success
**without delivering the enquiry to anyone.** The integration point is marked
in that file. Wire it to `admin@hireawifeyaustralia.com.au` (Resend, Postmark,
SES, or the host's own form handler) and return an error state when delivery
fails. Until then the form tells customers "we'll be in contact soon" and
nobody is contacted.

### 2. The photography is licensed stand-in, not the brand

Every image in `public/images/` is a free-licence Pexels photo chosen to match
the composition and mood the brief asks for. **None of them show the Hire a
Wifey uniform**, which the brief explicitly requires wherever workers appear
(black polo, hot-pink collar and piping, logo visible).

Replace each file with the real shoot, keeping the same filename and aspect
ratio, and nothing in the code needs to change. `scripts/prepare-images.ps1`
re-crops a folder of source photos to the exact ratios the layout expects:

```powershell
./scripts/prepare-images.ps1 -Source "path/to/shoot"
```

Alt text lives in `lib/content.ts` alongside each image and should be updated
to describe the real photograph.

### 3. The brand has two different pinks

Sampled from the supplied assets:

| Source | Value | Used for |
|---|---|---|
| Logo (`Hire A Wifey Logo client one png-01.jpg`) | `#DF718A` dusty rose | the entire UI (`--rose`) |
| Uniform embroidery and piping | `#EA0470` hot magenta | photography only (`--magenta`, currently unused in UI) |
| Logo black | `#201E1F` | basis for `--ink` |

These are different hues, not variants. The build uses the **logo rose** for
all interface colour and reserves the magenta for the uniform in photography.
If the client wants the magenta as the interface colour instead, change
`--rose` in `app/globals.css` and re-check contrast — magenta on white is
brighter and will need `--rose-ink` re-derived for small text.

The supplied `.ai` file is a PDF-wrapped Illustrator document with no named
swatches, so there is no authoritative CMYK build in it. A proper vector
export would be better than the raster logos in `public/brand/`, which were
derived from the JPG by keying out the white background.

---

## How it is put together

```
app/
  layout.tsx          fonts, metadata, <html>
  page.tsx            section order (follows the spec's final hierarchy)
  actions.ts          enquiry server action  ← integration point
  globals.css         design tokens + base
  book/ become-a-wifey/ privacy/ terms/      route stubs
components/
  sections/           one component + CSS Module per page section
  ui/                 Button, Icons, Block, TimeWord, ServiceAreaMap
lib/
  content.ts          ALL copy, single source of truth
scripts/              image preparation
```

### Content

`lib/content.ts` holds every string on the page, taken verbatim from the
client brief. Nothing there is invented — no statistics, no response times,
no guarantees. Keep it that way when editing.

**Reviews are deliberately empty.** `REVIEWS` is an empty array, so the
testimonials section renders nothing in production rather than shipping
placeholder quotes. Add real entries (quote, name, suburb, rating) and the
section turns itself on.

### CTA routing

Set once in `lib/content.ts` and used everywhere:

- booking CTAs → `BOOKING_URL` (`/book`)
- enquiry CTAs → `ENQUIRY_ANCHOR` (`#enquiry`, on this page)
- recruitment CTAs → `RECRUITMENT_URL` (`/become-a-wifey`)

The four routes exist as stubs so no CTA 404s.

### Headings

One `h1` (the hero). The brief named
"Home Cleaning & Housekeeping Services in Hervey Bay" as the primary H1, but
also said conversion comes first — so that phrase is the `h2` directly under
the hero headline and the `<title>`, and the hero line is the `h1`.

### Services and FAQ accordions

Panels are `display: none` by default and forced open by a `min-width: 1024px`
media query. The server-rendered markup is therefore already correct at every
viewport — no hydration mismatch and no flash of expanded content on phones.
React state only drives the mobile open case, and a `<noscript>` block reveals
everything when JavaScript is off.

### Motion

One authored moment: the closing word in `FinalSales` resolves out of a wide,
blurred state (`components/ui/TimeWord.tsx`). Everything else is present when
you reach it. Hover states are the only other motion. All of it is disabled
under `prefers-reduced-motion`.

---

## Known deviations from the design spec

- **Header does not shrink on scroll.** The spec asked for 84px → 68px.
  Animating height on a sticky element thrashes layout on every frame of a
  long page, so the bar keeps a constant height and the scrolled state is
  carried by its border and shadow.
- **Logo is sized by height, not width.** The spec assumed a 155–175px wide
  lockup; the supplied logo is stacked (ratio 1.64), which would make it 99px
  tall inside an 84px bar. It is sized to 54px tall instead.
- **The "Build your own visit" checklist is real markup, not a photograph.**
  The spec called for a top-down photo of a handwritten list. Rendering it as
  text keeps the copy selectable, translatable and crisp, and the list content
  is the actual example from the brief.
- **The service-area map is a schematic, not a survey map.** The coastline is
  stylised; marker order west-to-east is real. Swap in a geocoded interactive
  map for production — `components/ui/ServiceAreaMap.tsx`, no layout change.
- **No section eyebrow labels.** Every heading carries its own context.
