/* ==========================================================================
   Restaurant Moose — content model
   All translatable copy (NL / EN / DE) + structured seasonal menu data.
   Edit text here; the DOM is wired via data-i18n keys in index.html.
   ========================================================================== */

window.MOOSE_LANGS = ["nl", "en", "de"];
window.MOOSE_DEFAULT_LANG = "nl";

/* Static facts — shared across languages (not translated) */
window.MOOSE_INFO = {
  name: "Restaurant Moose",
  street: "Kazernestraat 62",
  postcode: "2514 CV",
  city: "Den Haag",
  phoneDisplay: "06 42461104",
  phoneLink: "+31642461104",
  email: "info@restaurantmoose.nl",
  instagram: "https://www.instagram.com/restaurant.moose/",
  facebook: "https://www.facebook.com/profile.php?id=61554885102522",
  giftcard:
    "https://shop.zenchef.com/?active-collection=vouchers&collections=vouchers&shop-id=sh_da478628-5e04-4459-aebe-5c79d788bbf9&language=nl",
  maps:
    "https://www.google.com/maps/search/?api=1&query=Restaurant%20Moose%20Kazernestraat%2062%20Den%20Haag",
};

/* ==========================================================================
   Structured menu — currently published seasonal card.
   Prices are per dish. Descriptions mirror the components on each plate.
   ========================================================================== */
window.MOOSE_MENU = {
  chef: { courses: 4, price: "59", pairing: "30" },
  sections: [
    {
      id: "starters",
      price: "13",
      items: [
        {
          name: { nl: "Asperge", en: "Asparagus", de: "Spargel" },
          desc: {
            nl: "Witte asperge · Tofucrème · Daslook",
            en: "White asparagus · Tofu cream · Wild garlic",
            de: "Weißer Spargel · Tofucreme · Bärlauch",
          },
        },
        {
          name: { nl: "Varkensbout", en: "Pork", de: "Schweinebraten" },
          desc: {
            nl: "Dungesneden varkensbout · Gribiche · Venkel",
            en: "Thinly sliced pork · Gribiche · Fennel",
            de: "Dünn geschnittener Schweinebraten · Gribiche · Fenchel",
          },
        },
        {
          name: { nl: "Roodbaars", en: "Redfish", de: "Rotbarsch" },
          desc: {
            nl: "Roodbaars · Koolrabi · Komkommer",
            en: "Redfish · Kohlrabi · Cucumber",
            de: "Rotbarsch · Kohlrabi · Gurke",
          },
        },
      ],
    },
    {
      id: "mid",
      price: "15",
      items: [
        {
          name: { nl: "Erwten", en: "Peas", de: "Erbsen" },
          desc: {
            nl: "Erwten · Cantharel · Courgettebeignet",
            en: "Peas · Chanterelle · Courgette fritter",
            de: "Erbsen · Pfifferlinge · Zucchini-Krapfen",
          },
        },
        {
          name: { nl: "Parelhoen", en: "Guinea fowl", de: "Perlhuhn" },
          desc: {
            nl: "Parelhoenfilet · Maïscrème · Snijbiet",
            en: "Guinea fowl fillet · Corn cream · Chard",
            de: "Perlhuhnfilet · Maiscreme · Mangold",
          },
        },
        {
          name: { nl: "Makreel", en: "Mackerel", de: "Makrele" },
          desc: {
            nl: "Makreel · Dashi · Paksoi",
            en: "Mackerel · Dashi · Pak choi",
            de: "Makrele · Dashi · Pak Choi",
          },
        },
      ],
    },
    {
      id: "mains",
      price: "20",
      items: [
        {
          name: { nl: "Rode biet", en: "Beetroot", de: "Rote Bete" },
          desc: {
            nl: "Rode biet · Geroosterde aardpeer · Framboos",
            en: "Beetroot · Roasted Jerusalem artichoke · Raspberry",
            de: "Rote Bete · Gerösteter Topinambur · Himbeere",
          },
        },
        {
          name: { nl: "Lam", en: "Lamb", de: "Lamm" },
          desc: {
            nl: "Lamsfilet · Aardappel · Dillesaus",
            en: "Lamb fillet · Potato · Dill sauce",
            de: "Lammfilet · Kartoffel · Dillsauce",
          },
        },
        {
          name: { nl: "Leng", en: "Ling", de: "Leng" },
          desc: {
            nl: "Lengfilet · Gevulde kool · Saffraansaus",
            en: "Ling fillet · Stuffed cabbage · Saffron sauce",
            de: "Lengfilet · Gefüllter Kohl · Safransauce",
          },
        },
      ],
    },
    {
      id: "dessert",
      price: "12",
      items: [
        {
          name: {
            nl: "Nederlandse kazen",
            en: "Dutch cheeses",
            de: "Niederländische Käse",
          },
          desc: {
            nl: "Wisselende selectie",
            en: "Seasonal selection",
            de: "Wechselnde Auswahl",
          },
        },
        {
          name: { nl: "Chocolade", en: "Chocolate", de: "Schokolade" },
          desc: {
            nl: "Chocolademousse · Pindakaascrème · Duindoornbes",
            en: "Chocolate mousse · Peanut cream · Sea buckthorn",
            de: "Schokoladenmousse · Erdnusscreme · Sanddorn",
          },
        },
        {
          name: { nl: "Aardbei", en: "Strawberry", de: "Erdbeere" },
          desc: {
            nl: "Aardbei · Rabarber · Panna cotta",
            en: "Strawberry · Rhubarb · Panna cotta",
            de: "Erdbeere · Rhabarber · Panna cotta",
          },
        },
      ],
    },
  ],
};

/* Section titles live in the dictionary so they translate cleanly */
window.MOOSE_MENU_SECTIONS = {
  starters: { nl: "Voorgerechten", en: "Starters", de: "Vorspeisen" },
  mid: { nl: "Tussengerechten", en: "Mid-courses", de: "Zwischengänge" },
  mains: { nl: "Hoofdgerechten", en: "Mains", de: "Hauptgänge" },
  dessert: { nl: "Dessert", en: "Desserts", de: "Dessert" },
};

/* Weekday labels for the opening-hours table */
window.MOOSE_DAYS = {
  mon: { nl: "Maandag", en: "Monday", de: "Montag" },
  tue: { nl: "Dinsdag", en: "Tuesday", de: "Dienstag" },
  wed: { nl: "Woensdag", en: "Wednesday", de: "Mittwoch" },
  thu: { nl: "Donderdag", en: "Thursday", de: "Donnerstag" },
  fri: { nl: "Vrijdag", en: "Friday", de: "Freitag" },
  sat: { nl: "Zaterdag", en: "Saturday", de: "Samstag" },
  sun: { nl: "Zondag", en: "Sunday", de: "Sonntag" },
};
window.MOOSE_HOURS = {
  mon: "closed",
  tue: "closed",
  wed: "17:00 – 23:00",
  thu: "17:00 – 23:00",
  fri: "17:00 – 23:00",
  sat: "17:00 – 23:00",
  sun: "17:00 – 23:00",
};

/* ==========================================================================
   Dictionary — flat dotted keys, matched by [data-i18n] in the HTML.
   ========================================================================== */
window.MOOSE_I18N = {
  nl: {
    "meta.title": "Restaurant Moose · Modern Europees restaurant in Den Haag",
    "meta.description":
      "Moose is een modern Europees buurtrestaurant in hartje Den Haag. Verse seizoenskeuken uit de houtoven en een bijzondere wijnkaart. Reserveer je tafel.",

    "lang.label": "Taal",
    "skip.link": "Naar hoofdinhoud",

    "nav.about": "Verhaal",
    "nav.menu": "Menu",
    "nav.groups": "Groepen",
    "nav.visit": "Bezoek",
    "nav.reserve": "Reserveren",
    "nav.open": "Menu openen",
    "nav.close": "Menu sluiten",

    "hero.eyebrow": "Buurtrestaurant · Houtoven · Den Haag",
    "hero.title": "Verse seizoenskeuken, recht uit de houtoven",
    "hero.subtitle":
      "Een modern Europees restaurant in hartje Den Haag. Simpel, seizoensgebonden en met een bijzondere wijnkaart — in een ontspannen sfeer.",
    "hero.cta_reserve": "Reserveren",
    "hero.cta_menu": "Bekijk het menu",
    "hero.hours": "Wo–Zo · 17:00–23:00",

    "about.eyebrow": "Ons verhaal",
    "about.title": "Een buurtrestaurant, simpel gehouden",
    "about.body1":
      "Moose ligt in hartje Den Haag, om de hoek van de Denneweg en het Lange Voorhout. Bij ons houden we het simpel: verse seizoensingrediënten bereid in een houtoven, met een unieke selectie wijnen in een casual setting.",
    "about.body2":
      "De kaart draait om groenten, aangevuld met zorgvuldig gekozen vlees en vis. Alles seizoensgebonden, veel lokaal, en met net dat beetje vuur en rook dat een gerecht bijzonder maakt.",
    "about.f1_title": "Uit de houtoven",
    "about.f1_body": "Vuur en rook geven elk gerecht smaak en karakter.",
    "about.f2_title": "Seizoensgericht",
    "about.f2_body": "Verse ingrediënten, lokaal en op hun best.",
    "about.f3_title": "Bijzondere wijnen",
    "about.f3_body": "Een persoonlijke selectie natuur- en klassieke wijnen.",

    "menu.eyebrow": "Onze kaart",
    "menu.title": "Het seizoensmenu",
    "menu.tag": "Wisselt met de seizoenen",
    "menu.intro":
      "Een greep uit onze huidige kaart. Alles is seizoensgebonden en wisselt regelmatig — vraag ons gerust naar de wijnen die erbij passen.",
    "menu.chef_label": "Chef’s menu",
    "menu.chef_desc": "Vier gangen, samengesteld door de keuken",
    "menu.chef_pairing": "Wijnarrangement +€30",
    "menu.per_dish": "per gerecht",
    "menu.allergy":
      "Allergie of dieetwens? Laat het ons weten — we denken graag mee.",

    "groups.eyebrow": "Groepen & privé",
    "groups.title": "Samen aan tafel",
    "groups.body":
      "Een groepsdiner, zakenlunch of een hapje vóór het theater? Moose is perfect voor groepen tot 35 gasten — een intieme ruimte, verse seizoensgerechten en een ontspannen sfeer.",
    "groups.capacity": "Tot 35 gasten",
    "groups.use1": "Groepsdiner",
    "groups.use2": "Zakenlunch",
    "groups.use3": "Borrel & theater",
    "groups.use4": "Privédiner",
    "groups.private_title": "Privé dineren",
    "groups.private_body":
      "Voor grotere groepen en lunchbijeenkomsten is het hele restaurant af te huren als privélocatie.",
    "groups.location":
      "Centraal in Den Haag, op loopafstand van het Binnenhof, Centraal Station en de ministeries.",
    "groups.cta": "Vraag een offerte aan",
    "groups.mail_subject": "Aanvraag groep / privédiner",

    "gallery.eyebrow": "Sfeer",
    "gallery.title": "Proef de sfeer",

    "visit.eyebrow": "Bezoek ons",
    "visit.title": "Tot snel bij Moose",
    "visit.address_label": "Adres",
    "visit.hours_label": "Openingstijden",
    "visit.contact_label": "Contact",
    "visit.transport":
      "5 minuten lopen vanaf Den Haag Centraal, om de hoek van de Denneweg.",
    "visit.directions": "Route",
    "visit.closed": "Gesloten",
    "visit.lunch": "Lunch op aanvraag",
    "visit.reserve": "Reserveren",

    "news.title": "Blijf op de hoogte",
    "news.body":
      "Schrijf je in en ontvang als eerste onze nieuwe menu’s, seizoensspecials en events.",
    "news.placeholder": "Je e-mailadres",
    "news.button": "Inschrijven",
    "news.success": "Bedankt! Je staat op de lijst.",

    "reserve.title": "Reserveren",
    "reserve.body":
      "Onze online reservering wordt binnenkort geactiveerd. Tot die tijd reserveer je eenvoudig telefonisch of per e-mail — we horen graag van je.",
    "reserve.call": "Bel 06 42461104",
    "reserve.email": "E-mail ons",
    "reserve.hours_note": "Woensdag t/m zondag · 17:00–23:00",
    "reserve.mail_subject": "Reservering",
    "reserve.close": "Sluiten",

    "footer.tagline": "Buurtrestaurant · Houtoven · Den Haag",
    "footer.explore": "Ontdek",
    "footer.visit": "Bezoek",
    "footer.follow": "Volg ons",
    "footer.giftcard": "Cadeaubon",
    "footer.rights": "Alle rechten voorbehouden.",
    "footer.top": "Naar boven",
  },

  en: {
    "meta.title": "Restaurant Moose · Modern European restaurant in The Hague",
    "meta.description":
      "Moose is a modern European neighbourhood restaurant in the heart of The Hague. Fresh seasonal cooking from the wood-fired oven and a distinctive wine list. Book your table.",

    "lang.label": "Language",
    "skip.link": "Skip to main content",

    "nav.about": "Story",
    "nav.menu": "Menu",
    "nav.groups": "Groups",
    "nav.visit": "Visit",
    "nav.reserve": "Book a table",
    "nav.open": "Open menu",
    "nav.close": "Close menu",

    "hero.eyebrow": "Neighbourhood restaurant · Wood-fired · The Hague",
    "hero.title": "Fresh seasonal cooking, straight from the fire",
    "hero.subtitle":
      "A modern European restaurant in the heart of The Hague. Simple, seasonal and with a distinctive wine list — in a relaxed setting.",
    "hero.cta_reserve": "Book a table",
    "hero.cta_menu": "View the menu",
    "hero.hours": "Wed–Sun · 17:00–23:00",

    "about.eyebrow": "Our story",
    "about.title": "A neighbourhood restaurant, kept simple",
    "about.body1":
      "Moose sits in the heart of The Hague, just around the corner from Denneweg and Lange Voorhout. We keep things simple: fresh seasonal ingredients cooked in a wood-fired oven, with a unique selection of wines in a casual setting.",
    "about.body2":
      "Our menu revolves around vegetables, complemented by carefully chosen meat and fish. Everything seasonal, much of it local, and with just enough fire and smoke to make a dish special.",
    "about.f1_title": "From the wood fire",
    "about.f1_body": "Fire and smoke give every dish flavour and character.",
    "about.f2_title": "Seasonal",
    "about.f2_body": "Fresh ingredients, local and at their best.",
    "about.f3_title": "Distinctive wines",
    "about.f3_body": "A personal selection of natural and classic wines.",

    "menu.eyebrow": "Our menu",
    "menu.title": "The seasonal menu",
    "menu.tag": "Changes with the seasons",
    "menu.intro":
      "A taste of our current menu. Everything is seasonal and changes regularly — do ask us about the wines to match.",
    "menu.chef_label": "Chef’s menu",
    "menu.chef_desc": "Four courses, composed by the kitchen",
    "menu.chef_pairing": "Wine pairing +€30",
    "menu.per_dish": "each",
    "menu.allergy":
      "Allergies or dietary needs? Let us know — we’re happy to help.",

    "groups.eyebrow": "Groups & private dining",
    "groups.title": "Gather around the table",
    "groups.body":
      "A group dinner, a business lunch, or a bite before the theatre? Moose is perfect for groups of up to 35 guests — an intimate space, fresh seasonal dishes and a relaxed atmosphere.",
    "groups.capacity": "Up to 35 guests",
    "groups.use1": "Group dinner",
    "groups.use2": "Business lunch",
    "groups.use3": "Drinks & theatre",
    "groups.use4": "Private dinner",
    "groups.private_title": "Private dining",
    "groups.private_body":
      "For larger groups and lunch gatherings, the entire restaurant is available as a private venue.",
    "groups.location":
      "Central in The Hague, within walking distance of the Binnenhof, Central Station and the ministries.",
    "groups.cta": "Request a quote",
    "groups.mail_subject": "Group / private dining enquiry",

    "gallery.eyebrow": "Atmosphere",
    "gallery.title": "A taste of the room",

    "visit.eyebrow": "Visit us",
    "visit.title": "See you soon at Moose",
    "visit.address_label": "Address",
    "visit.hours_label": "Opening hours",
    "visit.contact_label": "Contact",
    "visit.transport":
      "A 5-minute walk from The Hague Central Station, around the corner from Denneweg.",
    "visit.directions": "Get directions",
    "visit.closed": "Closed",
    "visit.lunch": "Lunch on request",
    "visit.reserve": "Reservations",

    "news.title": "Stay in the loop",
    "news.body":
      "Sign up and be the first to hear about new menus, seasonal specials and events.",
    "news.placeholder": "Your email address",
    "news.button": "Sign up",
    "news.success": "Thank you! You’re on the list.",

    "reserve.title": "Book a table",
    "reserve.body":
      "Our online booking will be live shortly. In the meantime, reserve easily by phone or email — we’d love to hear from you.",
    "reserve.call": "Call 06 42461104",
    "reserve.email": "Email us",
    "reserve.hours_note": "Wednesday to Sunday · 17:00–23:00",
    "reserve.mail_subject": "Reservation",
    "reserve.close": "Close",

    "footer.tagline": "Neighbourhood restaurant · Wood-fired · The Hague",
    "footer.explore": "Explore",
    "footer.visit": "Visit",
    "footer.follow": "Follow us",
    "footer.giftcard": "Gift card",
    "footer.rights": "All rights reserved.",
    "footer.top": "Back to top",
  },

  de: {
    "meta.title": "Restaurant Moose · Modernes europäisches Restaurant in Den Haag",
    "meta.description":
      "Moose ist ein modernes europäisches Nachbarschaftsrestaurant im Herzen von Den Haag. Frische, saisonale Küche aus dem Holzofen und eine besondere Weinkarte. Reservieren Sie Ihren Tisch.",

    "lang.label": "Sprache",
    "skip.link": "Zum Hauptinhalt",

    "nav.about": "Geschichte",
    "nav.menu": "Speisekarte",
    "nav.groups": "Gruppen",
    "nav.visit": "Besuch",
    "nav.reserve": "Reservieren",
    "nav.open": "Menü öffnen",
    "nav.close": "Menü schließen",

    "hero.eyebrow": "Nachbarschaftsrestaurant · Holzofen · Den Haag",
    "hero.title": "Frische, saisonale Küche direkt aus dem Holzofen",
    "hero.subtitle":
      "Ein modernes europäisches Restaurant im Herzen von Den Haag. Einfach, saisonal und mit einer besonderen Weinkarte — in entspannter Atmosphäre.",
    "hero.cta_reserve": "Reservieren",
    "hero.cta_menu": "Zur Speisekarte",
    "hero.hours": "Mi–So · 17:00–23:00",

    "about.eyebrow": "Unsere Geschichte",
    "about.title": "Ein Nachbarschaftsrestaurant, einfach gehalten",
    "about.body1":
      "Moose liegt im Herzen von Den Haag, gleich um die Ecke von Denneweg und Lange Voorhout. Wir halten es einfach: frische, saisonale Zutaten aus dem Holzofen und eine besondere Weinauswahl in entspannter Atmosphäre.",
    "about.body2":
      "Unsere Karte dreht sich um Gemüse, ergänzt durch sorgfältig ausgewähltes Fleisch und Fisch. Alles saisonal, vieles regional — und mit genau dem bisschen Feuer und Rauch, das ein Gericht besonders macht.",
    "about.f1_title": "Aus dem Holzofen",
    "about.f1_body": "Feuer und Rauch geben jedem Gericht Geschmack und Charakter.",
    "about.f2_title": "Saisonal",
    "about.f2_body": "Frische Zutaten, regional und auf dem Höhepunkt.",
    "about.f3_title": "Besondere Weine",
    "about.f3_body": "Eine persönliche Auswahl an Natur- und klassischen Weinen.",

    "menu.eyebrow": "Unsere Karte",
    "menu.title": "Das Saisonmenü",
    "menu.tag": "Wechselt mit den Jahreszeiten",
    "menu.intro":
      "Ein Einblick in unsere aktuelle Karte. Alles ist saisonal und wechselt regelmäßig — fragen Sie uns gern nach den passenden Weinen.",
    "menu.chef_label": "Küchenchef-Menü",
    "menu.chef_desc": "Vier Gänge, zusammengestellt von der Küche",
    "menu.chef_pairing": "Weinbegleitung +€30",
    "menu.per_dish": "pro Gericht",
    "menu.allergy":
      "Allergien oder Ernährungswünsche? Sagen Sie uns Bescheid — wir helfen gern.",

    "groups.eyebrow": "Gruppen & Privat",
    "groups.title": "Gemeinsam am Tisch",
    "groups.body":
      "Ein Gruppenessen, ein Geschäftsessen oder ein Bissen vor dem Theater? Moose ist perfekt für Gruppen bis zu 35 Gästen — ein intimer Raum, frische saisonale Gerichte und eine entspannte Atmosphäre.",
    "groups.capacity": "Bis zu 35 Gäste",
    "groups.use1": "Gruppenessen",
    "groups.use2": "Geschäftsessen",
    "groups.use3": "Drinks & Theater",
    "groups.use4": "Privatessen",
    "groups.private_title": "Privat dinieren",
    "groups.private_body":
      "Für größere Gruppen und Lunch-Treffen ist das gesamte Restaurant als private Location buchbar.",
    "groups.location":
      "Zentral in Den Haag, wenige Gehminuten vom Binnenhof, Hauptbahnhof und den Ministerien.",
    "groups.cta": "Angebot anfragen",
    "groups.mail_subject": "Anfrage Gruppe / Privatessen",

    "gallery.eyebrow": "Atmosphäre",
    "gallery.title": "Ein Gefühl für den Raum",

    "visit.eyebrow": "Besuchen Sie uns",
    "visit.title": "Bis bald bei Moose",
    "visit.address_label": "Adresse",
    "visit.hours_label": "Öffnungszeiten",
    "visit.contact_label": "Kontakt",
    "visit.transport":
      "5 Gehminuten vom Bahnhof Den Haag Centraal, um die Ecke vom Denneweg.",
    "visit.directions": "Route",
    "visit.closed": "Geschlossen",
    "visit.lunch": "Lunch auf Anfrage",
    "visit.reserve": "Reservierung",

    "news.title": "Bleiben Sie informiert",
    "news.body":
      "Melden Sie sich an und erfahren Sie als Erste von neuen Menüs, saisonalen Specials und Events.",
    "news.placeholder": "Ihre E-Mail-Adresse",
    "news.button": "Anmelden",
    "news.success": "Danke! Sie sind dabei.",

    "reserve.title": "Reservieren",
    "reserve.body":
      "Unsere Online-Reservierung ist in Kürze verfügbar. Bis dahin reservieren Sie einfach telefonisch oder per E-Mail — wir freuen uns auf Sie.",
    "reserve.call": "Anrufen: 06 42461104",
    "reserve.email": "E-Mail schreiben",
    "reserve.hours_note": "Mittwoch bis Sonntag · 17:00–23:00",
    "reserve.mail_subject": "Reservierung",
    "reserve.close": "Schließen",

    "footer.tagline": "Nachbarschaftsrestaurant · Holzofen · Den Haag",
    "footer.explore": "Entdecken",
    "footer.visit": "Besuch",
    "footer.follow": "Folgen Sie uns",
    "footer.giftcard": "Gutschein",
    "footer.rights": "Alle Rechte vorbehalten.",
    "footer.top": "Nach oben",
  },
};
