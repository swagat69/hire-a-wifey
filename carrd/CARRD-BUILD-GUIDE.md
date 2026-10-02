# Dog-Ear Book Club: Carrd build guide

`index.html` is a preview of the finished Carrd site. Open it in a browser to
see it. This guide explains how to rebuild it in the Carrd editor, one section
at a time.

> **Brand and copy are placeholders.** "Dog-Ear Book Club", the book titles,
> authors, blurbs, FAQ answers and claims such as "free shipping" and "only 500
> copies" are all made up for the layout. Swap in your real details before you
> publish (see [Placeholders to replace](#placeholders-to-replace)).

---

## Can Carrd handle this?

Yes. Carrd is built for one-page sites like this one. The layout uses only
things Carrd can do natively:

| The look | How it's done so Carrd can handle it |
|---|---|
| Tilted books, coloured book cards, winner badges, step cards, sticker pills, crossed ribbons | **Built into the images.** Carrd just shows a picture, so no custom code is needed. |
| Rounded colour blocks (How it works, gift box, Club exclusive) | Container, **Width: Default** (not Full), with a background colour and border radius |
| Full-bleed colour bands (hero, genres, why, favourites, footer) | Container, **Width: Full** |
| Yellow blob hero | Container background image (`hero-blobs.jpg`) |
| Big stacked genre list | One Text element with line breaks |
| Pill buttons with a hard shadow | Buttons element, rounded style, border and shadow |
| Mailing list | Form element (Pro) |

What Carrd **can't** do without custom code (Embeds, Pro):

- **Open/close FAQ accordion.** Use `embeds/faq-accordion.html`. Without it,
  use one plain Text element (see §08). It looks fine, just less compact.
- **Structured data (SEO).** Use `embeds/head-structured-data.html`. This is
  optional; the page works without it.
- **Sticky header, a scrolling marquee, a carousel that swipes.** These were
  deliberately left out. The ribbon is a static image.

**Page weight:** the page uses about 1.7 MB of images, most of which load only
when scrolled to. There is no JavaScript. This is light for Carrd.

**Which Carrd plan?** Custom domain, the Form element and Embed elements all
require a Pro plan. Check Carrd's pricing page for which Pro tier includes
which. If you skip the form and the two embeds, everything else is standard
Carrd elements.

---

## 1. Site settings (do these first)

**Settings → Page / Style**

| Setting | Value |
|---|---|
| Page background | `#FFFFFF` |
| Page width | about `78rem` (this sets the width of the rounded blocks) |
| Default font | **Inter** 400 |
| Heading font | **Bricolage Grotesque** 800. If it isn't in Carrd's font list, use **Archivo Black**. |
| Handwritten notes | **Caveat** 700 |
| Text colour | `#1C1A3A` |

**Settings → Metadata** (labels can vary slightly between Carrd versions)

| Field | Value |
|---|---|
| Title | `Dog-Ear Book Club \| New Hardcovers Delivered Every Month` |
| Description | `Pick a brand-new hardcover each month from hand-picked titles across every genre. Free shipping, fair prices and a club of readers to talk it over with.` |
| Share image | upload `images/share-image.jpg` (1200 × 630) |
| Icon / favicon | upload `images/icon.png` (512 × 512) |

Carrd builds the `og:` and `twitter:` share tags from these fields
automatically. The preview's `<head>` shows what they turn into.

### Colour palette

| Name | Hex | Used for |
|---|---|---|
| Navy | `#1C1A3A` | all text, footer, button borders and shadows |
| Yellow | `#FFD447` | hero, "Why" band |
| Pink | `#F23FCF` | genres band, primary buttons |
| Lilac | `#EBDDFF` | How it works block |
| Mint | `#9FF0E6` | gift box block |
| Lime | `#D9F27A` | Members' favourites band |
| Blush | `#FFB3D9` | Club exclusive block |
| Cream | `#FFF8EC` | footer text |

### Button style (set once, then duplicate)

Rounded / pill · background `#F23FCF` · text white, Inter 700 ·
border 2px `#1C1A3A` · shadow 0 × 4px, no blur, `#1C1A3A`.
The secondary button uses a white background with navy text.

---

## 2. Section by section

Each number matches a `CARRD:` comment in `index.html`. Give each container
the **ID** shown (Container → Settings → ID) so the menu links work.

| # | Section | Carrd container | Elements inside |
|---|---|---|---|
| 01 | Header | Columns (Auto / Fill / Auto) · Width Full · ID `top` | Image `icon.png` + Text "Dog-Ear" · Links (This Month → `#books`, How It Works → `#how`, Gifting → `#gift`, FAQ → `#faq`), pill outline style, hidden on mobile · Button "Join the Club" → `#join` |
| 02 | Hero | Columns 55 / 45 · Width Full · background image `hero-blobs.jpg` (cover) | Text H1 "Stories worth unboxing." · Text paragraph · Button "Pick your first book" · Image `hero-books.png` |
| 03 | This month's books | Default (centred) · ID `books` → then Columns ×5 | Text (Caveat, pink) · Text H2 · Text · each column: Image `pick-1…5.png` + Text (genre / title / blurb) |
| 04 | How it works | Columns (Fill / Auto) · Width Default · bg `#EBDDFF` · radius 2.5rem · ID `how` → then Columns ×4, same bg | Text H2 · Text (Caveat) · Button "Get started" · each column: Image `step-1…4.png` + Text |
| 05 | Gift box | Default · Width Default · bg `#9FF0E6` · radius 2.5rem | Image `gift-box.png` · Text (Caveat) |
| 06 | Genres | Default · Width Full · bg `#F23FCF` · centred | Text (Caveat) · Text "CHOOSE FROM" · one Text with each genre on its own line |
| 07 | Why Dog-Ear? | Default · Width Full · bg `#FFD447` | Image `why-stickers.png`; set its alt text to the five phrases |
| 08 | FAQ | Default · centred · ID `faq` | Text H2 · Embed `faq-accordion.html` **or** a plain Text element (see below) · Button "Still stuck? Email us" → `mailto:` |
| 09 | Gifting | Default · ID `gift` → then Columns 50 / 50 | Text (large H2) · Text · Button · Text (Caveat) · Image `gift-box.png` |
| 10 | Ribbon | Default · Width Full · padding 0 | Image `ribbon.png` at 100% width |
| 11 | Members' favourites | Default · Width Full · bg `#D9F27A` → then Columns ×4 | Text (Caveat) · Text H2 · Text · each column: Image `fav-1…4.png` + Text (title / author) |
| 12 | Club exclusive | Default · Width Default · bg `#FFB3D9` · radius 2.5rem → then Columns 1 / 1.3 / 1 | Text H2 · Text · Text (Caveat) · Image `exclusive.png` + Text + Button · Text (Caveat) |
| 13 | Footer | Columns 1.2 / 1 / 1.4 · Width Full · bg `#1C1A3A` · ID `join` | Image + Text · Text "Explore" + Links · Text H3 + Text + **Form** (Email field + Subscribe) · Divider · Text © line |

**FAQ without the Embed (§08):** use one Text element with the questions in
bold, for example:

```
**How does the membership work?**
Each month we announce a handful of new hardcovers…

**Can I skip a month?**
Yes. Skip any month before the deadline…
```

**Form (§13):** Carrd's Form element → add one **Email** field (placeholder
"Email address"), button label "Subscribe". Under the form's settings, choose
where submissions go: email, Mailchimp, a Google Sheet, etc.

**Mobile:** Carrd stacks columns into one at 736px wide, as the preview does.
Set the header's Links element to hide on mobile, and the two handwritten
notes in §12 too, if your Carrd version has that option.

---

## 3. Images to upload

All files are in `images/`. They are already sized and compressed.

| File | Where |
|---|---|
| `icon.png` | Metadata icon + header + footer |
| `share-image.jpg` | Metadata share image |
| `hero-blobs.jpg` | Hero container background |
| `hero-books.png` | Hero, right column |
| `pick-1.png` … `pick-5.png` | This month's books |
| `step-1.png` … `step-4.png` | How it works |
| `gift-box.png` | Gift box block and Gifting section |
| `why-stickers.png` | Why Dog-Ear? |
| `ribbon.png` | Ribbon strip |
| `fav-1.png` … `fav-4.png` | Members' favourites |
| `exclusive.png` | Club exclusive |
| `cover-*.jpg` | Plain covers, in case you want them on their own |

**Changing the books or text in the images:** edit the lists at the top of
`src/make-images.mjs` (titles, authors, colours, sticker words, ribbon
text) and run:

```bash
# from the repository root
npm i --no-save playwright
npx playwright install chromium   # once
node carrd/src/make-images.mjs
```

When you have real book covers, replace the `cover-*.jpg` files (400 × 600)
and re-run. The coloured cards, tilts and badges are rebuilt around your
covers.

---

## Placeholders to replace

- [ ] Brand name **Dog-Ear Book Club**, logo/icon (`icon.png`)
- [ ] `YOUR-DOMAIN.com` and `hello@YOUR-DOMAIN.com` (FAQ button, footer, head embed)
- [ ] `YOUR COUNTRY` in the "Where do you ship?" answer (page **and** head embed)
- [ ] Book titles, authors, genres and blurbs (§03, §11, §12, and the images)
- [ ] Offer claims: free shipping, skip/cancel policy, gift lengths, "only 500 copies", "signed first edition"
- [ ] Button links: "Join the Club", "Pick your first book", "Get started", "Give a membership", "Get it with your box" currently jump to the footer (`#join`). Point them at your real signup or checkout page.
- [ ] Privacy and Terms links in the footer
