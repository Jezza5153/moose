# Restaurant Moose — website

A fast, multilingual (🇳🇱 NL · 🇬🇧 EN · 🇩🇪 DE) single-page website for
**Restaurant Moose**, Kazernestraat 62, Den Haag. Built with plain HTML, CSS and
vanilla JavaScript — no build step, no framework, no dependencies. Drops onto any
static host.

Brand: forest green `#144215` · cream `#E8DCCA` · warm sand `#E2CFA9` · ink
`#231F20`, with the restaurant's own photography and moose mark.

## Run locally

```bash
cd moose
python3 -m http.server 4321
# open http://localhost:4321
```

Any static server works (`npx serve`, VS Code Live Server, etc.).

## Project structure

```
moose/
├─ index.html            # page structure; text is wired via data-i18n="key"
├─ css/styles.css        # design tokens + all styling (mobile-first, responsive)
├─ js/
│  ├─ i18n.js            # ALL content: NL/EN/DE dictionary + menu + hours + facts
│  └─ main.js            # language switching, rendering, nav, modal, reveals
└─ assets/img/           # the restaurant's real photos + moose mark
```

## Editing content

**All copy lives in `js/i18n.js`** — you rarely need to touch the HTML.

- **Text**: edit the `nl` / `en` / `de` blocks in `window.MOOSE_I18N`. Each key
  (e.g. `hero.title`) must exist in all three languages.
- **Menu**: edit `window.MOOSE_MENU`. Prices are per-dish, per section. Each dish
  has `name` and `desc` objects with `nl`/`en`/`de`. The card re-renders itself.
- **Opening hours**: `window.MOOSE_HOURS` (use `"closed"` for closed days).
- **Contact / social / address**: `window.MOOSE_INFO`.

To add a language: add its code to `window.MOOSE_LANGS`, add a matching block to
`MOOSE_I18N`, add the `nl/en/de/…` field to every menu item + day, and add a
`<button class="lang-btn" data-lang="xx">XX</button>` to both `.lang-switch`
groups in `index.html`.

## Connecting the reservation app (later)

The **Reserveren / Book a table** buttons open a modal. Inside it is an empty
mount point:

```html
<div id="reservation-widget"></div>
```

Drop your booking app's embed/iframe/script into that element. `main.js` detects
when it has children and automatically shows the widget instead of the
phone/email fallback — no other change needed. Until then the modal shows a
graceful "call or email us" fallback so the button is never dead.

The newsletter form (`#newsletterForm` in `main.js`) is the other integration
point — wire it to your mailing-list endpoint where the comment marks it.

## Notes

- **SEO / GEO**: JSON-LD `Restaurant` schema (incl. the full menu with prices,
  hours, geo, `sameAs`), Open Graph + Twitter cards with absolute image URLs,
  `hreflang` alternates for NL/EN/DE (each language is crawlable via `?lang=`),
  plus `robots.txt` and a multilingual `sitemap.xml`. All absolute URLs point at
  `https://www.restaurantmoose.nl/` — update them if you deploy to another domain.
- **Accessibility**: keyboard-navigable, focus-trapped modal, skip link,
  reduced-motion support, labelled controls.
- **Language default** is Dutch; the visitor's browser language (EN/DE) is used
  on first visit if it matches, and their choice is remembered.
- Photography and the moose mark are the restaurant's own assets, pulled from the
  current site for this rebuild.
