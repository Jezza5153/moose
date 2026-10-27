/* ==========================================================================
   Het Ontwerpboek — the page-flip bar shown on every mock-up.
   Lists all ten designs, links previous / next / overview, keeps favourites
   (per browser) and supports ← / → on the keyboard.
   ========================================================================== */
(function () {
  "use strict";

  var DESIGNS = [
    { n: 1,  file: "01-gouden-letters.html",    name: "Gouden Letters",       mood: "Klassiek · 1895",        desc: "Vergulde letters op zwart glas, mahonie en messing. Zoals de gevel van een oud Eethuys.", palette: ["#140d09", "#3b1f14", "#c9a14a", "#efe3c8"] },
    { n: 2,  file: "02-blue-note.html",         name: "Blue Note",            mood: "Grafisch · platenhoes",  desc: "Gebouwd als een jazzplatenhoes uit de jaren ’60: grote letters, blauwe foto’s, de kaart als tracklist.", palette: ["#0d3b8e", "#0a0a0a", "#f4f1e8", "#b2162a"] },
    { n: 3,  file: "03-het-podium.html",        name: "Het Podium",           mood: "Theatraal · avond",      desc: "Het doek gaat op. Rood fluweel, een spotlight en het café als podium voor de avond.", palette: ["#2a0508", "#6e0f17", "#f2b45a", "#f6ead8"] },
    { n: 4,  file: "04-affiche.html",           name: "Affiche",              mood: "Speels · retro",         desc: "Een concertaffiche in houten letters: mosterdgeel, rood en zwart. De saté staat bovenaan het programma.", palette: ["#f2c230", "#b2162a", "#151515", "#fff8e2"] },
    { n: 5,  file: "05-draaitafel.html",        name: "Draaitafel",           mood: "Interactief · dagdelen", desc: "Van koffie tot laat: de site kleurt mee met het tijdstip, en de plaat op de draaitafel ook.", palette: ["#f0e2c8", "#2f5d62", "#e0892f", "#141a2e"] },
    { n: 6,  file: "06-fris-modern.html",       name: "Fris & Modern",        mood: "Modern · overzichtelijk",desc: "Strak, licht en direct: een raster van tegels met alles wat een gast wil weten in één oogopslag.", palette: ["#ecebe7", "#1e1e1c", "#b2162a", "#9b9b9b"] },
    { n: 7,  file: "07-huisstijl-puur.html",    name: "Huisstijl Puur",       mood: "Praktisch · mobiel",     desc: "Het huidige logo als uitgangspunt. De kaart eerst, met zoeken en filters voor vegetarisch en huisfavorieten. Gemaakt voor de telefoon.", palette: ["#ffffff", "#1e1e1c", "#b2162a", "#9b9b9b"] },
    { n: 8,  file: "08-groene-gezelligheid.html", name: "Groene Gezelligheid", mood: "Verhalend · magazine",   desc: "Een tijdschrift over 35 jaar Lazy Louis: Angela, Herman Brood, de houten saxofonist. Flessengroen en messing.", palette: ["#163a2c", "#0e241b", "#c8a15a", "#f1ead9"] },
    { n: 9,  file: "09-de-muur.html",           name: "De Muur",              mood: "Sfeervol · eigenzinnig", desc: "De muur van het café als website: elk onderdeel hangt in een gouden lijst op donker behang.", palette: ["#2b1416", "#4a2226", "#c6a052", "#efe6d2"] },
    { n: 10, file: "10-lazy-days.html",         name: "Lazy Days",            mood: "Licht · zomers terras",  desc: "De zonnige kant: koffie, lunch en het terras bij de Onze Lieve Vrouwetoren. Licht, luchtig, met een knipoog.", palette: ["#fbf6e9", "#7fb3d5", "#f4b63f", "#b2162a"] }
  ];

  var KEY = "lazylouis-favs";
  function readFavs() {
    try { var v = JSON.parse(localStorage.getItem(KEY) || "[]"); return Array.isArray(v) ? v : []; }
    catch (e) { return []; }
  }
  function writeFavs(list) {
    try { localStorage.setItem(KEY, JSON.stringify(list)); } catch (e) { /* storage blocked: favourites last for this visit only */ }
  }
  var memFavs = readFavs();
  function isFav(n) { return memFavs.indexOf(n) !== -1; }
  function toggleFav(n) {
    if (isFav(n)) memFavs = memFavs.filter(function (x) { return x !== n; });
    else memFavs = memFavs.concat([n]).sort(function (a, b) { return a - b; });
    writeFavs(memFavs);
    document.dispatchEvent(new CustomEvent("llbook:favs", { detail: memFavs.slice() }));
    return isFav(n);
  }

  window.LL_BOOK = { designs: DESIGNS, favs: function () { return memFavs.slice(); }, isFav: isFav, toggleFav: toggleFav };

  function currentDesign() {
    // Match "04-affiche.html" and the clean-URL form "04-affiche" (some hosts drop the extension).
    var path = decodeURIComponent(location.pathname.split("/").pop() || "").replace(/\.html$/, "");
    for (var i = 0; i < DESIGNS.length; i++) if (DESIGNS[i].file.replace(/\.html$/, "") === path) return DESIGNS[i];
    var forced = document.documentElement.getAttribute("data-design");
    if (forced) for (var j = 0; j < DESIGNS.length; j++) if (String(DESIGNS[j].n) === forced) return DESIGNS[j];
    return null;
  }

  function pad(n) { return (n < 10 ? "0" : "") + n; }

  function el(tag, attrs, html) {
    var e = document.createElement(tag);
    for (var k in attrs) e.setAttribute(k, attrs[k]);
    if (html != null) e.innerHTML = html;
    return e;
  }

  var ICON = {
    prev: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M15 5l-7 7 7 7" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"/></svg>',
    next: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M9 5l7 7-7 7" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"/></svg>',
    grid: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M4 4h6v6H4zM14 4h6v6h-6zM4 14h6v6H4zM14 14h6v6h-6z" fill="none" stroke="currentColor" stroke-width="2" stroke-linejoin="round"/></svg>',
    heart: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 20.5s-7.5-4.6-9.2-9.4C1.6 7.6 3.9 4.5 7.2 4.5c2 0 3.6 1.1 4.8 2.8 1.2-1.7 2.8-2.8 4.8-2.8 3.3 0 5.6 3.1 4.4 6.6-1.7 4.8-9.2 9.4-9.2 9.4z" fill="var(--llb-heart-fill)" stroke="currentColor" stroke-width="1.9" stroke-linejoin="round"/></svg>',
    min: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M6 12h12" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round"/></svg>',
    book: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M4 5.5C6.5 4.5 9.5 4.5 12 6c2.5-1.5 5.5-1.5 8-.5V19c-2.5-1-5.5-1-8 .5-2.5-1.5-5.5-1.5-8-.5z M12 6v13.5" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linejoin="round"/></svg>'
  };

  function mount() {
    var cur = currentDesign();
    if (!cur) return;
    var i = cur.n - 1;
    var prev = DESIGNS[(i - 1 + DESIGNS.length) % DESIGNS.length];
    var next = DESIGNS[(i + 1) % DESIGNS.length];

    var bar = el("nav", { "class": "llbook", "aria-label": "Ontwerpboek: bladeren tussen ontwerpen" });
    bar.innerHTML =
      '<a class="llbook-btn llbook-arrow" href="' + prev.file + '" title="Vorige: ' + prev.name + ' (←)" aria-label="Vorig ontwerp: ' + prev.name + '">' + ICON.prev + '</a>' +
      '<a class="llbook-title" href="index.html" title="Terug naar het ontwerpboek">' +
        '<span class="llbook-num">' + pad(cur.n) + '<span>/10</span></span>' +
        '<span class="llbook-name">' + cur.name + '</span>' +
      '</a>' +
      '<button type="button" class="llbook-btn llbook-fav" aria-pressed="false" title="Markeer als favoriet">' + ICON.heart + '<span class="llbook-sr">Favoriet</span></button>' +
      '<a class="llbook-btn" href="index.html" title="Alle ontwerpen" aria-label="Alle ontwerpen">' + ICON.grid + '</a>' +
      '<a class="llbook-btn llbook-arrow" href="' + next.file + '" title="Volgende: ' + next.name + ' (→)" aria-label="Volgend ontwerp: ' + next.name + '">' + ICON.next + '</a>' +
      '<button type="button" class="llbook-btn llbook-min" title="Balk verbergen" aria-label="Balk verbergen">' + ICON.min + '</button>';

    var pill = el("button", { type: "button", "class": "llbook-pill", title: "Ontwerpboek tonen", "aria-label": "Ontwerpboek tonen" }, ICON.book + '<span>' + pad(cur.n) + '/10</span>');
    pill.hidden = true;

    var spacer = el("div", { "class": "llbook-spacer", "aria-hidden": "true" });
    document.body.appendChild(spacer);
    document.body.appendChild(bar);
    document.body.appendChild(pill);

    var favBtn = bar.querySelector(".llbook-fav");
    function paintFav() {
      var on = isFav(cur.n);
      favBtn.setAttribute("aria-pressed", on ? "true" : "false");
      favBtn.classList.toggle("is-on", on);
      favBtn.title = on ? "Favoriet (klik om weg te halen)" : "Markeer als favoriet";
    }
    favBtn.addEventListener("click", function () {
      toggleFav(cur.n); paintFav();
      favBtn.classList.remove("pop"); void favBtn.offsetWidth; favBtn.classList.add("pop");
    });
    paintFav();

    function setMin(min) {
      bar.hidden = min; pill.hidden = !min;
      try { sessionStorage.setItem("llbook-min", min ? "1" : "0"); } catch (e) {}
    }
    bar.querySelector(".llbook-min").addEventListener("click", function () { setMin(true); pill.focus(); });
    pill.addEventListener("click", function () { setMin(false); });
    try { if (sessionStorage.getItem("llbook-min") === "1") setMin(true); } catch (e) {}

    document.addEventListener("keydown", function (e) {
      if (e.defaultPrevented || e.altKey || e.ctrlKey || e.metaKey || e.shiftKey) return;
      var t = e.target, tag = t && t.tagName;
      if (tag === "INPUT" || tag === "TEXTAREA" || tag === "SELECT" || (t && t.isContentEditable)) return;
      if (document.querySelector("dialog[open]")) return;
      if (e.key === "ArrowLeft") location.href = prev.file;
      else if (e.key === "ArrowRight") location.href = next.file;
    });
  }

  if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", mount);
  else mount();
})();
