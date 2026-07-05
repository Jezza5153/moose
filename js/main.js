/* ==========================================================================
   Restaurant Moose — behaviour
   Language switching, content rendering, navigation, reserve modal, reveals.
   ========================================================================== */
(function () {
  "use strict";

  var LANGS = window.MOOSE_LANGS;
  var DICT = window.MOOSE_I18N;
  var INFO = window.MOOSE_INFO;
  var MENU = window.MOOSE_MENU;
  var SECTIONS = window.MOOSE_MENU_SECTIONS;
  var DAYS = window.MOOSE_DAYS;
  var HOURS = window.MOOSE_HOURS;
  var STORAGE_KEY = "moose-lang";
  var OG_LOCALE = { nl: "nl_NL", en: "en_GB", de: "de_DE" };

  var $ = function (sel, ctx) { return (ctx || document).querySelector(sel); };
  var $$ = function (sel, ctx) { return Array.prototype.slice.call((ctx || document).querySelectorAll(sel)); };

  /* --------------------------- Language handling --------------------------- */
  function detectLang() {
    try {
      var stored = localStorage.getItem(STORAGE_KEY);
      if (stored && LANGS.indexOf(stored) !== -1) return stored;
    } catch (e) {}
    var nav = (navigator.language || "nl").slice(0, 2).toLowerCase();
    return LANGS.indexOf(nav) !== -1 ? nav : window.MOOSE_DEFAULT_LANG;
  }

  function t(lang, key) {
    var d = DICT[lang] || {};
    return d[key] != null ? d[key] : (DICT[window.MOOSE_DEFAULT_LANG][key] || "");
  }

  function applyLang(lang) {
    if (LANGS.indexOf(lang) === -1) lang = window.MOOSE_DEFAULT_LANG;
    document.documentElement.lang = lang;

    // Text + attribute bindings
    $$("[data-i18n]").forEach(function (el) {
      var val = t(lang, el.getAttribute("data-i18n"));
      var attr = el.getAttribute("data-i18n-attr");
      if (attr) el.setAttribute(attr, val);
      else el.textContent = val;
    });

    // og:locale
    var ogLoc = $('meta[property="og:locale"]');
    if (ogLoc) ogLoc.setAttribute("content", OG_LOCALE[lang] || "nl_NL");

    // Active state on both language switchers
    $$(".lang-btn").forEach(function (b) {
      var on = b.getAttribute("data-lang") === lang;
      b.setAttribute("aria-current", on ? "true" : "false");
    });

    renderMenu(lang);
    renderHours(lang);
    wireDynamicLinks(lang);

    try { localStorage.setItem(STORAGE_KEY, lang); } catch (e) {}
  }

  /* ------------------------------ Menu render ------------------------------ */
  function renderMenu(lang) {
    var grid = $("#menuGrid");
    if (!grid) return;
    var perDish = t(lang, "menu.per_dish");
    var html = "";
    MENU.sections.forEach(function (section) {
      var title = (SECTIONS[section.id] || {})[lang] || section.id;
      html += '<div class="menu-section">';
      html += '<h3 class="menu-section-title">' + esc(title) +
        '<span class="menu-section-price">€' + esc(section.price) + " · " + esc(perDish) + "</span></h3>";
      section.items.forEach(function (item) {
        html += '<div class="dish">' +
          '<div class="dish-head">' +
          '<span class="dish-name">' + esc(item.name[lang]) + "</span>" +
          '<span class="dish-leader" aria-hidden="true"></span>' +
          '<span class="dish-price">€' + esc(section.price) + "</span>" +
          "</div>" +
          '<p class="dish-desc">' + esc(item.desc[lang]) + "</p>" +
          "</div>";
      });
      html += "</div>";
    });
    grid.innerHTML = html;

    var chefCourses = $("#chefCourses");
    if (chefCourses) chefCourses.textContent = MENU.chef.courses;
  }

  /* ------------------------------ Hours render ----------------------------- */
  function renderHours(lang) {
    var tbody = $("#hoursTable tbody");
    if (!tbody) return;
    var order = ["mon", "tue", "wed", "thu", "fri", "sat", "sun"];
    var closedLabel = t(lang, "visit.closed");
    var jsDay = new Date().getDay(); // 0=Sun..6=Sat
    var todayKey = ["sun", "mon", "tue", "wed", "thu", "fri", "sat"][jsDay];
    var rows = "";
    order.forEach(function (key) {
      var val = HOURS[key];
      var isClosed = val === "closed";
      var cls = isClosed ? "is-closed" : "is-open";
      if (key === todayKey) cls += " is-today";
      rows += '<tr class="' + cls + '"><td>' + esc(DAYS[key][lang]) + "</td><td>" +
        (isClosed ? esc(closedLabel) : esc(val)) + "</td></tr>";
    });
    tbody.innerHTML = rows;
  }

  /* --------------------------- Dynamic link wiring ------------------------- */
  function wireDynamicLinks(lang) {
    var mail = "mailto:" + INFO.email;
    var tel = "tel:" + INFO.phoneLink;

    setHref("#directionsLink", INFO.maps);
    setHref("#igLink", INFO.instagram);
    setHref("#fbLink", INFO.facebook);
    setHref("#igLinkF", INFO.instagram);
    setHref("#fbLinkF", INFO.facebook);
    setHref("#giftcardLink", INFO.giftcard);
    setHref("#telLink", tel);
    setHref("#mailLink", mail);
    setHref("#modalCall", tel);

    var groupsSubject = encodeURIComponent(t(lang, "groups.mail_subject"));
    setHref("#groupsCta", mail + "?subject=" + groupsSubject);
    var reserveSubject = encodeURIComponent(t(lang, "reserve.mail_subject"));
    setHref("#modalMail", mail + "?subject=" + reserveSubject);
  }

  function setHref(sel, href) { var el = $(sel); if (el) el.setAttribute("href", href); }
  function esc(s) {
    return String(s).replace(/[&<>"]/g, function (c) {
      return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c];
    });
  }

  /* ------------------------------ Sticky header ---------------------------- */
  function initHeader() {
    var header = $("#siteHeader");
    if (!header) return;
    var onScroll = function () {
      header.setAttribute("data-state", window.scrollY > 40 ? "scrolled" : "top");
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
  }

  /* ------------------------------ Mobile nav ------------------------------- */
  function initMobileNav() {
    var toggle = $("#navToggle");
    var drawer = $("#mobileNav");
    var scrim = $("#navScrim");
    if (!toggle || !drawer || !scrim) return;

    function open() {
      drawer.hidden = false; scrim.hidden = false;
      requestAnimationFrame(function () { drawer.setAttribute("data-open", "true"); });
      toggle.setAttribute("aria-expanded", "true");
      document.body.style.overflow = "hidden";
    }
    function close() {
      drawer.removeAttribute("data-open");
      toggle.setAttribute("aria-expanded", "false");
      document.body.style.overflow = "";
      window.setTimeout(function () { drawer.hidden = true; scrim.hidden = true; }, 400);
    }
    toggle.addEventListener("click", function () {
      toggle.getAttribute("aria-expanded") === "true" ? close() : open();
    });
    scrim.addEventListener("click", close);
    $$("[data-nav-close]", drawer).forEach(function (el) { el.addEventListener("click", close); });
    document.addEventListener("keydown", function (e) {
      if (e.key === "Escape" && toggle.getAttribute("aria-expanded") === "true") close();
    });
  }

  /* ------------------------------ Reserve modal ---------------------------- */
  function initModal() {
    var modal = $("#reserveModal");
    if (!modal) return;
    var dialog = $(".modal-dialog", modal);
    var lastFocus = null;

    // If a booking widget gets embedded later, reveal it and hide the fallback.
    var widget = $("#reservation-widget");
    var fallback = $("#reserveFallback");
    if (widget && widget.children.length > 0) {
      widget.removeAttribute("data-widget-empty");
      if (fallback) fallback.hidden = true;
    }

    function open() {
      lastFocus = document.activeElement;
      modal.hidden = false;
      document.body.style.overflow = "hidden";
      var focusable = dialog.querySelector("a[href], button:not([disabled]), input");
      if (focusable) focusable.focus();
    }
    function close() {
      modal.hidden = true;
      document.body.style.overflow = "";
      if (lastFocus && lastFocus.focus) lastFocus.focus();
    }

    $$("[data-reserve]").forEach(function (btn) {
      btn.addEventListener("click", function (e) { e.preventDefault(); open(); });
    });
    $$("[data-modal-close]", modal).forEach(function (el) { el.addEventListener("click", close); });

    document.addEventListener("keydown", function (e) {
      if (modal.hidden) return;
      if (e.key === "Escape") close();
      if (e.key === "Tab") trapFocus(e, dialog);
    });
  }

  function trapFocus(e, container) {
    var f = container.querySelectorAll('a[href], button:not([disabled]), input, [tabindex]:not([tabindex="-1"])');
    if (!f.length) return;
    var first = f[0], last = f[f.length - 1];
    if (e.shiftKey && document.activeElement === first) { e.preventDefault(); last.focus(); }
    else if (!e.shiftKey && document.activeElement === last) { e.preventDefault(); first.focus(); }
  }

  /* ------------------------------ Newsletter ------------------------------- */
  function initNewsletter() {
    var form = $("#newsletterForm");
    if (!form) return;
    form.addEventListener("submit", function (e) {
      e.preventDefault();
      var input = $("#newsEmail");
      var success = $("#newsSuccess");
      if (!input.value || !input.checkValidity()) { input.focus(); input.reportValidity && input.reportValidity(); return; }
      // No backend yet — this is where a signup endpoint / mailing-list embed connects.
      if (success) success.hidden = false;
      input.value = "";
    });
  }

  /* ------------------------------ Scroll reveal ---------------------------- */
  function initReveal() {
    var els = $$(".reveal");
    if (!("IntersectionObserver" in window)) { els.forEach(function (el) { el.classList.add("in"); }); return; }
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) { entry.target.classList.add("in"); io.unobserve(entry.target); }
      });
    }, { threshold: 0.12, rootMargin: "0px 0px -8% 0px" });
    els.forEach(function (el) { io.observe(el); });
  }

  /* ------------------------------ Language buttons ------------------------- */
  function initLangButtons() {
    $$(".lang-btn").forEach(function (btn) {
      btn.addEventListener("click", function () { applyLang(btn.getAttribute("data-lang")); });
    });
  }

  /* ------------------------------ Init ------------------------------------- */
  function init() {
    var yr = $("#year"); if (yr) yr.textContent = new Date().getFullYear();
    initLangButtons();
    applyLang(detectLang());
    initHeader();
    initMobileNav();
    initModal();
    initNewsletter();
    initReveal();
  }

  if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", init);
  else init();
})();
