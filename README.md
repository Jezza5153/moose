# Lazy Louis — Ontwerpboek

Ten clickable website mock-ups for **Lazy Louis Jazzcafé & Eethuys**, Arnhemsestraat 1-3, Amersfoort,
bound together in a little "book" the owner can browse and pick favourites from.

Plain HTML, CSS and vanilla JavaScript. No build step, no dependencies. Works on any static host.

## Run locally

```bash
python3 -m http.server 4321
# open http://localhost:4321
```

## What's here

```
index.html                  # the Ontwerpboek: cover page, ten previews, favourites + share
01-gouden-letters.html      # Klassiek · 1895 — gilded lettering on black glass
02-blue-note.html           # Grafisch · jazz record sleeve
03-het-podium.html          # Theatraal · velvet curtain and spotlight
04-affiche.html             # Speels · wood-type concert poster
05-draaitafel.html          # Interactief · the site follows the time of day
06-fris-modern.html         # Modern · bento grid
07-huisstijl-puur.html      # Praktisch · current brand, menu-first, built for the phone
08-groene-gezelligheid.html # Verhalend · long-read magazine
09-de-muur.html             # Sfeervol · the café wall of gold frames
10-lazy-days.html           # Licht · sunny terrace
assets/js/lazylouis-data.js # ALL content: menu (lunch/diner/dranken), hours, story, news, jobs
assets/img/                 # the restaurant's own photos (from lazylouis.nl)
assets/brand/               # logo in four colourways + the trumpet icon
book/book.js, book.css      # the page-flip bar on every mock-up (prev/next, favourite, ← →)
book/thumbs/                # preview screenshots used on the cover page
archive/restaurant-moose/   # the previous Restaurant Moose site, moved aside
```

## Editing content

Every mock-up reads its menu, prices, opening hours, news and vacancies from
`assets/js/lazylouis-data.js` (`window.LL`), so one change there updates all ten designs.
The open/closed indicator is live for Europe/Amsterdam and knows that Lazy Louis only opens on the
first and last Sunday of the month.

Favourites are stored per browser (localStorage). The cover page can share the choice via WhatsApp
or copy it as text.
