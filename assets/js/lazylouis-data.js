/* ==========================================================================
   Lazy Louis — shared content for all ten mock-ups.
   Every design reads from window.LL, so the menu, hours and contact details
   are identical across concepts. Source: lazylouis.nl (oktober 2026).
   ========================================================================== */
(function () {
  "use strict";

  var info = {
    name: "Lazy Louis",
    fullName: "Lazy Louis Jazzcafé & Eethuys",
    tagline: "Jazz, Food & Drinks Since 1991",
    since: 1991,
    street: "Arnhemsestraat 1-3",
    postcode: "3811 LE",
    city: "Amersfoort",
    phone: "033 – 461 36 38",
    phoneHref: "tel:+31334613638",
    email: "info@lazylouis.nl",
    jobsEmail: "kimberley@lazylouis.nl",
    jobsContact: "Kimberley Hoffstaetter",
    reserveUrl: "https://widget.thefork.com/63a9c0f2-62b5-449c-ae05-ae6fbbe3f000",
    mapsUrl: "https://www.google.com/maps/place/Lazy+Louis/@52.1535815,5.3850157,17z",
    instagram: "https://www.instagram.com/lazylouis_amersfoort/",
    instagramHandle: "@lazylouis_amersfoort",
    facebook: "https://www.facebook.com/lazylouiscafe/",
    nearby: "Op een steenworp van de Onze Lieve Vrouwetoren"
  };

  var intro = [
    "Lazy Louis Jazzcafé & Eethuys is sinds 1991 gevestigd in twee monumentale panden in het centrum van Amersfoort. Vrij vertaald is Lazy Louis vernoemd naar de legendarische jazz-artiest Louis Armstrong, waarbij “Lazy” staat voor de relaxte sfeer.",
    "Jazz & blues spelen in het café een belangrijke rol, zowel in de muziek als in het interieur. Veel instrumenten en schilderijen van o.a. Herman Brood met de welluidende naam “Lazy Louis stillevend” zorgen samen met de gezellige, lange bar, een ruim assortiment speciaalbieren en muziek voor een prettige sfeer.",
    "Voor een goed kopje koffie, een goed gevuld glas wijn en een heerlijk getapt biertje bent u hier aan het juiste adres. Het restaurant is comfortabel en fraai ingericht, sfeervol met een warme uitstraling.",
    "De menukaart is met zorg samengesteld en is een mooie mix van klassieke en moderne gerechten in het teken van het seizoen."
  ];

  /* Real facts from interviews with owner Angela Klarenbeek (Performers Magazine / Buma Stemra). */
  var story = {
    owner: "Angela Klarenbeek",
    timeline: [
      { year: "1895", title: "Twee monumentale panden", text: "Aan de Arnhemsestraat verrijzen de twee panden waar Lazy Louis nu in zit, midden in de oude binnenstad." },
      { year: "1991", title: "Lazy Louis opent", text: "Angela Klarenbeek begint het jazzcafé en eethuys, vernoemd naar Louis Armstrong. “Lazy” staat voor de relaxte sfeer." },
      { year: "Jaren ’90", title: "De muren vullen zich", text: "Na een expositie van een jazzportretschilder koopt het café de meeste schilderijen. Instrumenten komen binnen via ruilen en kleine aankopen." },
      { year: "Herman Brood", title: "“Lazy Louis stillevend”", text: "Herman Brood speelt in Amersfoort, strijkt neer aan de bar en betaalt zijn rekening met een tekening. Die hangt er nog steeds." },
      { year: "2008", title: "Angela aan het roer", text: "Sinds 2008 runt Angela de zaak zelf, met een vaste ploeg en vaste gasten." },
      { year: "2026", title: "Lazy Louis Lounge", text: "Elke tweede woensdag van de maand een avond voor 55-plussers: pubquiz, meezingen, spelletjes en gedichten." }
    ],
    quotes: [
      { text: "Een iconische figuur. Iedereen kent hem, ook jongeren weten wie dat was.", by: "Angela Klarenbeek over Louis Armstrong" },
      { text: "Dat klinkt gewoon lekker.", by: "Angela Klarenbeek over de naam Lazy Louis" }
    ],
    details: [
      { title: "De houten saxofonist", text: "Halverwege het café staat een levensgrote houten saxofonist, gekocht van een kunsthandelaar uit de buurt die vond dat hij hier thuishoorde." },
      { title: "De toiletdeuren", text: "Twee goudomlijste tekeningen wijzen de weg: een dame met klarinet en een heer met contrabas." },
      { title: "De muziek", text: "Rustig bij de lunch en het diner, meer tempo bij de borrel en na tienen gaat het volume omhoog. Armstrong, Etta James, Nina Simone, Brubeck, James Brown en tegen sluitingstijd soms Hendrix." }
    ],
    playlist: [
      { part: "Koffie", time: "10.30", artist: "Louis Armstrong", track: "What a Wonderful World" },
      { part: "Lunch", time: "12.00", artist: "Dave Brubeck Quartet", track: "Take Five" },
      { part: "Borrel", time: "17.00", artist: "James Brown", track: "I Got You (I Feel Good)" },
      { part: "Diner", time: "18.00", artist: "Etta James", track: "At Last" },
      { part: "Laat", time: "22.00", artist: "Jimi Hendrix", track: "Red House" }
    ]
  };

  /* ---------- Menu ----------
     price: number in euros · veg: dish is (or can be made) vegetarian (*)
     extras: variants with their own price · forTwo: price is for two people */
  var menu = {
    lunch: {
      title: "Lunch",
      served: "Overdag, dinsdag t/m zaterdag en op de open zondagen",
      notes: [
        "Onze lunchgerechten zijn ook met glutenvrij brood te bestellen.",
        "* Deze gerechten zijn vegetarisch of kunnen, op uw verzoek, ook vegetarisch bereid worden.",
        "Heeft u een allergie? Meld het ons, wij informeren u graag over de allergenen in onze gerechten."
      ],
      sections: [
        { title: "Meatlovers", items: [
          { name: "Amsterdammertje", price: 13.5, desc: "Broodje gehaktbal en satésaus (andere saus ook mogelijk)" },
          { name: "Texas Ribs", price: 15, desc: "Gegrild broodje met boneless ribs, gebakken uien en knoflooksaus" },
          { name: "Mr. Armstrong’s Spareribs", price: 29, desc: "Echte malse spareribs (500 gram), met salade, knoflooksaus en de keuze uit frietjes of brood", signature: true },
          { name: "Saté Lazy Louis", price: 23, desc: "Reuzespies naar keuze van kipfilet of varkenshaas met satésaus, atjar, kroepoek en keuze uit friet of rijst met gebakken uitjes", tag: "Wereldberoemd in heel Amersfoort", signature: true }
        ]},
        { title: "Burgers", items: [
          { name: "Louisiana Shrimp Burger", price: 13.5, desc: "Krokante garnalenburger op een briochebol met chilimayonaise, sla, komkommer, rode ui, salade en chips" },
          { name: "Big McLazy’s Hamburger", price: 16, desc: "100% runderburger van de grill op een briochebolletje met cheddar, spek, burgersaus, tomaat, augurk, ui en salade" },
          { name: "Honey Chicken Burger", price: 13.5, desc: "Krokante kipburger op een briochebol met bbq-saus, tomaat, rode ui, sla en tortillachips (kaas +1)" },
          { name: "Vega Burger", price: 13.5, veg: true, desc: "Krokante burger van avocado en mais op een briochebol met cheddar, tomaat, sla, ui, augurk en tortillachips" }
        ]},
        { title: "Chef’s Specials", items: [
          { name: "Holle Bolle Gijt", price: 14.5, veg: true, desc: "Meergranenbroodje met warme geitenkaas, honing en walnoten (ook mogelijk met brie)" },
          { name: "Smokey Salmon", price: 15, desc: "Meergranenbroodje met gerookte zalm, wasabimayonaise, komkommer en rode ui" },
          { name: "Ciao Bella", price: 15, desc: "Italiaanse bol met carpaccio van ossenhaas, Parmezaanse kaas, pijnboompitjes, truffelmayonaise en groene gezelligheid (ook mogelijk met groene pesto)" },
          { name: "Wall Street Crash", price: 13.5, desc: "Clubsandwich op een Italiaanse bol met gerookte kip, bacon, tomaat, sla, bbq-saus, mayonaise en chips (ook verkrijgbaar met guacamole)" },
          { name: "Van Dam’s Delicatesse", price: 12.5, desc: "Twee ambachtelijke rundvleeskroketten, mosterd en keuze uit bruin of wit brood (vega kroketten +1,50)" }
        ]},
        { title: "Tapas Tip", items: [
          { name: "Lazy’s Cantina", price: 14.5, veg: true, desc: "Mexicaanse nacho’s uit de oven met cheddar, jalapeñopepers en rundergehakt. Met guacamole en sour cream", signature: true },
          { name: "Nachoribs", price: 16.5, desc: "Nacho’s uit de oven met boneless ribs, uien, mais, cheddar en knoflooksaus" },
          { name: "¿Qué Pasa!", price: 29, forTwo: true, desc: "Lazy’s tapasplank: nacho’s met rundergehakt en cheddar, garnalenkroketjes, Parmaham, rendang van jackfruit en patatas bravas" }
        ]},
        { title: "Lazy’s Eggsclusive", intro: "Uitsmijters en omeletten met wit of bruin brood", items: [
          { name: "Uitsmijter kaas, ham of spek", price: 10.5, veg: true, desc: "Drie eieren met kaas, ham of spek naar keuze" },
          { name: "Uitsmijter ham & kaas", price: 11.5 },
          { name: "Uitsmijter ham, kaas & spek", price: 12.5 },
          { name: "Uitsmijter kipfilet", price: 11.5 },
          { name: "Uitsmijter Lazy Louis", price: 12.5, desc: "Al vele jaren een begrip, met rundvleesragout en bacon", signature: true },
          { name: "Omelet kaas, champignons of ham", price: 11, veg: true },
          { name: "Omelet ham & kaas", price: 11.5 },
          { name: "Omelet kaas & champignons", price: 11.5, veg: true },
          { name: "Omelet ham, kaas & champignons", price: 12.5 },
          { name: "Lazy’s 12-uurtje", price: 16.5, desc: "Een kopje soep naar keuze, een kleine uitsmijter met ham en een rundvleeskroket, met bruin of wit brood" }
        ]},
        { title: "Soep", items: [
          { name: "Simply Red", price: 7.5, veg: true, desc: "Een rijk gevulde tomatensoep met kip" },
          { name: "Lazy’s Choice", price: 7.5, desc: "Vraag gerust welke soep we vandaag serveren" }
        ]},
        { title: "Tosti’s", intro: "Wit of bruin brood", items: [
          { name: "Tosti kaas", price: 5.5, veg: true },
          { name: "Tosti brie, walnoten & honing", price: 7.5 },
          { name: "Tosti ham & kaas", price: 6 },
          { name: "Tosti kaas & tomaat", price: 6, veg: true },
          { name: "Tosti Hawaï", price: 7 }
        ]},
        { title: "Salades", items: [
          { name: "Comme ci, Comme Chèvre", price: 16.5, veg: true, desc: "Gemengde salade met warme geitenkaas, honing en walnoten" },
          { name: "Salmon Burke", price: 16.5, desc: "Gemengde salade met gerookte zalm, rodebietenmayonaise, komkommer en rode ui" },
          { name: "Salade Ciao Bella", price: 17, desc: "Carpaccio, Parmezaanse kaas, pijnboompitjes en truffelmayonaise (ook mogelijk met groene pesto)" }
        ]}
      ]
    },

    diner: {
      title: "Diner",
      served: "’s Avonds, dinsdag t/m zaterdag",
      notes: [
        "* Deze gerechten zijn vegetarisch óf kunnen, op uw verzoek, ook vegetarisch bereid worden.",
        "Heeft u een allergie? Meld het ons, wij informeren u graag over de allergenen in onze gerechten."
      ],
      sections: [
        { title: "Voorpret", items: [
          { name: "Simply Red", price: 7.5, veg: true, desc: "Een rijk gevulde tomatensoep met kip" },
          { name: "Lazy’s Choice", price: 7.5, veg: true, desc: "Vraag gerust welke soep we vandaag serveren" },
          { name: "Scampi", price: 14.5, desc: "In rode pesto gebakken garnalen op een bedje van smeuïge risotto" },
          { name: "Lazy’s Cantina", price: 14.5, veg: true, desc: "Mexicaanse nacho’s uit de oven met cheddar, jalapeñopepers, rundergehakt, guacamole en zure room", extras: [{ label: "Als Macho Nacho’s", price: 21.5 }], signature: true },
          { name: "¿Qué Pasa!", price: 29, forTwo: true, desc: "Lazy’s tapasplank: nacho’s met rundergehakt en cheddar, garnalenkroketjes, Parmaham, rendang van jackfruit en patatas bravas" },
          { name: "Carpaccio", price: 15.5, desc: "Carpaccio van ossenhaas met Parmezaanse kaas, pijnboompitjes, truffelmayonaise en groene gezelligheid (ook mogelijk met groene pesto)", extras: [{ label: "Als maaltijdsalade", price: 20.5 }] },
          { name: "Comme ci, Comme Chèvre", price: 15.5, veg: true, desc: "Gemengde salade met warme geitenkaas, honing en walnoten", extras: [{ label: "Als maaltijdsalade", price: 22 }] },
          { name: "Salmon Burke", price: 15.5, desc: "Gemengde salade met gerookte zalm, wasabimayonaise, komkommer en rode ui", extras: [{ label: "Als maaltijdsalade", price: 20.5 }] },
          { name: "Stokbrood", price: 7.5, veg: true, desc: "Met kruidenboter en aioli" },
          { name: "Breekbrood", price: 8.5, veg: true, desc: "Met kruidenboter en aioli" }
        ]},
        { title: "Hoofdmoot", items: [
          { name: "Carnivore Plateau", price: 57.5, forTwo: true, desc: "Speciaal voor onze vleesliefhebbers. Plateau met onze hardlopers: saté van kip of haas, spareribs en burger, met salade en frietjes", signature: true },
          { name: "Louisiana Shrimp Burger", price: 23, desc: "Krokante garnalenburger op een briochebol met chilimayonaise, sla, komkommer, rode ui, salade en frietjes" },
          { name: "Risotto Scampi", price: 28, desc: "Gebakken scampi in een romige rodepestosaus op een bedje van risotto met Parmezaanse kaas en pijnboompitjes" },
          { name: "Fat Canard", price: 29.5, desc: "Gekonfijte eendenbout van 400 gram met vijgensaus en een puree van aardappel, zuurkool en spekjes" },
          { name: "Jambalaya", price: 26.5, desc: "Zuidelijk rijstgerecht met chorizo en kippendijen in een cajun-tomatensaus, geserveerd met maisbrood" },
          { name: "Mr. Armstrong’s Spareribs", price: 29, desc: "Echte malse spareribs (500 gram), met salade, knoflooksaus en friet", signature: true },
          { name: "McLazy Burger", price: 23, desc: "Authentieke 100% runderburger van 200 gram op een briochebol met cheddar, baconjam, salade, ui, burgersaus en friet", extras: [{ label: "Dubbele burger (400 gram)", price: 28 }] },
          { name: "Vega Burger", price: 21, veg: true, desc: "Krokante burger van avocado en mais op een briochebol met cheddar, burgersaus en friet" },
          { name: "Saté Lazy Louis", price: 23, desc: "Reuzespies naar keuze van kipfilet of varkenshaas met satésaus, atjar, kroepoek en keuze uit friet of rijst met gebakken uitjes", tag: "Wereldberoemd in heel Amersfoort", signature: true },
          { name: "Is it Rendang?", price: 24, veg: true, desc: "Vegan rendang van jackfruit, zoetzure komkommer en ui, cassavekroepoek en rijst" }
        ]},
        { title: "Zoete Finale", items: [
          { name: "Skillet Cookie", price: 10, desc: "Vers gebakken salted-caramelkoekje met chocochips en een bol vanille-ijs. Bereidingstijd 10 minuutjes, maar dat is het zeer zeker waard!", signature: true },
          { name: "Frozen Romanoff", price: 11, desc: "Romanoff-parfait met een coulis van aardbei en Coebergh, aardbeien, meringue en koek" },
          { name: "Mac-O-Ron Pistache", price: 10.5, desc: "IJsmacaron van pistache met een bol ijs en slagroom" },
          { name: "Chocoholics", price: 9.5, desc: "De ultieme chocoladebrownie met een bol ijs en slagroom, voor de echte chocolover" },
          { name: "Cheesecake", price: 11, desc: "Heerlijke cheesecake met een bol ijs en slagroom" },
          { name: "Dame Blanche", price: 9.5, desc: "Drie bollen vanille-ijs met chocoladesaus en slagroom" },
          { name: "Mr. Moskowicz", price: 9.5, desc: "Drie bollen vanille-ijs met echte Oudhollandse advocaat en slagroom (chocolade-ijs ook mogelijk)" }
        ]},
        { title: "Lazy’s Dessert Tip", items: [
          { name: "Nectar Pedro Ximénez sherry", price: 7.4 },
          { name: "Presidential Porto White", price: 4.9 },
          { name: "Presidential Porto Ruby", price: 4.5 },
          { name: "Presidential Porto Tawny", price: 4.9 },
          { name: "Espresso Martini", price: 9, desc: "Espresso met Kahlúa en wodka" },
          { name: "Limoncello", price: 5.5 }
        ]}
      ]
    },

    dranken: {
      title: "Dranken",
      served: "De hele dag",
      notes: [
        "Wij hebben een seizoensgebonden speciaalbierkaart met wisselende bieren.",
        "Wij hebben ook een uitgebreide wijnkaart. Vraag ernaar aan de bar.",
        "Al onze koffies zijn ook cafeïnevrij te bestellen."
      ],
      sections: [
        { title: "Bier van het vat", items: [
          { name: "Amstel fluitje", price: 3.5 },
          { name: "Amstel vaasje", price: 3.8 },
          { name: "Amstel pul", price: 7.2 },
          { name: "Texelse Jutters Bock", price: 7.9 },
          { name: "Texelse Skuumkoppe", price: 6.4 },
          { name: "Texelse Tripel", price: 6.7 },
          { name: "Affligem Blond", price: 6.2 },
          { name: "Brand Weizen", price: 6.7 }
        ]},
        { title: "Alcoholvrij bier", items: [
          { name: "Heineken 0.0%", price: 3.9 },
          { name: "Amstel Radler 0.0%", price: 3.7 },
          { name: "Affligem Blond 0.0%", price: 5 },
          { name: "Brand IPA 0.0%", price: 4.8 },
          { name: "Texelse Skuumkoppe 0.0%", price: 6.3 },
          { name: "Erdinger 0.4%", price: 4.7 }
        ]},
        { title: "Open wijnen", items: [
          { name: "Sauvignon Blanc", price: 5.5, desc: "Wit" },
          { name: "Leafs Chardonnay", price: 5.4, desc: "Wit" },
          { name: "Crema Regala Pinot Grigio", price: 5.3, desc: "Wit" },
          { name: "Zoete witte wijn", price: 5.3, desc: "Wit" },
          { name: "Gamay Rosé", price: 5.5, desc: "Rosé" },
          { name: "Riddle Creek Shiraz", price: 5.5, desc: "Rood" },
          { name: "3 Passo Rosso biologisch", price: 7.5, desc: "Rood" }
        ]},
        { title: "Koffie & thee", items: [
          { name: "Koffie", price: 3.3 },
          { name: "Espresso", price: 3.3 },
          { name: "Dubbele espresso", price: 4.6 },
          { name: "Cappuccino", price: 3.7 },
          { name: "Latte macchiato", price: 4 },
          { name: "Koffie verkeerd", price: 4 },
          { name: "Flat white", price: 4.8 },
          { name: "Thee", price: 3.3 },
          { name: "Verse munt", price: 4.2 },
          { name: "Verse gember", price: 4.2 },
          { name: "Verse munt & gember", price: 4.6 },
          { name: "Verse gember & sinaasappel", price: 4.6 },
          { name: "Verse kruidenmix", price: 4.9 },
          { name: "Warme chocolademelk", price: 4.3, extras: [{ label: "Met slagroom", price: 4.8 }] }
        ]},
        { title: "Speciale koffies", items: [
          { name: "Irish Coffee", price: 8.5 },
          { name: "Spanish Coffee", price: 8.5 },
          { name: "French Coffee", price: 8.5 },
          { name: "Italian Coffee", price: 8.5 },
          { name: "American Coffee", price: 8.5 },
          { name: "Coffee Brazil", price: 8.5 },
          { name: "Coffee 43", price: 8.5 }
        ]},
        { title: "Fris", items: [
          { name: "Sourcy blauw of rood", price: 3, extras: [{ label: "Fles 75 cl", price: 7 }] },
          { name: "Pepsi Cola / Max", price: 3.4 },
          { name: "Seven Up", price: 3.4 },
          { name: "Sisi Orange", price: 3.4 },
          { name: "Royal Club cassis, tonic, bitter lemon of ginger beer", price: 3.4 },
          { name: "Royal Club appelsap", price: 3.6 },
          { name: "Rivella", price: 3.4 },
          { name: "Lipton Ice Tea / Green", price: 3.6 },
          { name: "Verse jus d’orange", price: 4, extras: [{ label: "Groot", price: 7 }] },
          { name: "Chocomel", price: 3.6 },
          { name: "Fristi", price: 3.6 }
        ]}
      ]
    }
  };

  var jobs = [
    { title: "Medewerker bediening", hours: "18 – 38 uur per week", text: "Horecavakman of -vrouw met oog voor detail en kwaliteit. Gastvrij, collegiaal en sociaal sterk, zodat onze gasten overdag én ’s avonds een geweldige horeca-ervaring hebben, in het café en in het restaurant. Je woont in Amersfoort of omgeving.", offer: ["Salaris conform de horeca-cao", "Een prettige werksfeer in een gezellig team", "Een tijdig bekend rooster met afwisselende diensten"] },
    { title: "Medewerker spoelkeuken", hours: "2 – 3 dagen per week", text: "De onmisbare kracht in de keuken: jij zorgt dat de vaat blinkt, houdt de keuken schoon en assisteert de koks.", offer: ["Een prettige werkomgeving", "Een gezellig team met leuke collega’s", "Goede arbeidsvoorwaarden en een prima salaris"] }
  ];

  var reserve = {
    lines: [
      "Reserveer online voor lunch en diner.",
      "Een tafel op het terras kunt u niet reserveren.",
      "Voor een drankje in het café hoeft u niet te reserveren: loop gewoon gezellig binnen.",
      "Op de open zondagen kunt u reserveren voor de lunch."
    ],
    confirm: "Uw online reservering is definitief na ontvangst van de bevestigingsmail."
  };

  var photos = {
    barFront:    { src: "assets/img/bar-front.jpg",       alt: "De lange bar van Lazy Louis met messing tapkranen en een saxofoon aan de muur" },
    barWide:     { src: "assets/img/bar-wide.jpg",        alt: "De bar met flessenwand en spiegels in goud omlijst" },
    barBeer:     { src: "assets/img/bar-beer.jpg",        alt: "Een vers getapt speciaalbier op de glanzende bar" },
    gramophone:  { src: "assets/img/bar-gramophone.jpg",  alt: "Een grammofoon met het hondje van His Master’s Voice op de bar" },
    tableSax:    { src: "assets/img/table-saxophone.jpg", alt: "Gedekte tafel met wijnglazen naast een gouden saxofoon" },
    tableWine:   { src: "assets/img/table-wine.jpg",      alt: "Een fles rode wijn en glazen op een gedekte tafel" },
    bartender:   { src: "assets/img/bartender-tap.jpg",   alt: "Een barman tapt een biertje aan de messing tapinstallatie" },
    foodTapas:   { src: "assets/img/food-tapas.jpg",      alt: "Tapasplank met Parmaham en kroketjes" },
    foodSandwich:{ src: "assets/img/food-sandwich.jpg",   alt: "Meergranenbroodje met kip, geroosterde paprika en ei" },
    foodDessert: { src: "assets/img/food-dessert.jpg",    alt: "Dessertbord met cake, sinaasappel en verse munt" }
  };

  var brand = {
    logo: "assets/brand/logo.png",           // black + grey wordmark, red trumpet (light backgrounds)
    logoLight: "assets/brand/logo-light.png",// cream + grey wordmark, red trumpet (dark backgrounds)
    logoWhite: "assets/brand/logo-white.png",// all white (coloured backgrounds)
    logoBlack: "assets/brand/logo-black.png",// all black
    trumpet: "assets/brand/trumpet.png",     // red trumpet icon; usable as CSS mask
    red: "#B2162A", ink: "#1E1E1C", grey: "#9B9B9B"
  };

  /* ---------- Opening hours (Europe/Amsterdam) ----------
     index 0 = zondag … 6 = zaterdag. Sundays: only the first and last Sunday of the month. */
  var week = [
    { day: "Zondag",    open: "12:00", close: "17:00", sundayRule: true },
    { day: "Maandag",   open: null,    close: null },
    { day: "Dinsdag",   open: "10:30", close: "22:00" },
    { day: "Woensdag",  open: "10:30", close: "22:00" },
    { day: "Donderdag", open: "10:30", close: "23:00" },
    { day: "Vrijdag",   open: "10:30", close: "23:00" },
    { day: "Zaterdag",  open: "10:30", close: "23:00" }
  ];

  function amsNow() {
    var parts = {};
    try {
      new Intl.DateTimeFormat("en-GB", { timeZone: "Europe/Amsterdam", year: "numeric", month: "2-digit", day: "2-digit", hour: "2-digit", minute: "2-digit", hour12: false })
        .formatToParts(new Date()).forEach(function (p) { parts[p.type] = p.value; });
      return { y: +parts.year, m: +parts.month, d: +parts.day, hh: +parts.hour % 24, mm: +parts.minute };
    } catch (e) {
      var n = new Date();
      return { y: n.getFullYear(), m: n.getMonth() + 1, d: n.getDate(), hh: n.getHours(), mm: n.getMinutes() };
    }
  }
  function dateOf(y, m, d) { return new Date(Date.UTC(y, m - 1, d, 12)); }
  function addDays(dt, n) { return new Date(dt.getTime() + n * 864e5); }
  function daysInMonth(y, m) { return new Date(Date.UTC(y, m, 0)).getUTCDate(); }
  function isOpenSunday(dt) {
    var d = dt.getUTCDate(), dim = daysInMonth(dt.getUTCFullYear(), dt.getUTCMonth() + 1);
    return dt.getUTCDay() === 0 && (d <= 7 || d + 7 > dim);
  }
  function slotFor(dt) {
    var w = week[dt.getUTCDay()];
    if (!w.open) return null;
    if (w.sundayRule && !isOpenSunday(dt)) return null;
    return { open: w.open, close: w.close };
  }
  function toMin(t) { var p = t.split(":"); return +p[0] * 60 + +p[1]; }
  function nl(t) { return t.replace(":", "."); }
  function fmtDate(dt, opts) {
    try { return new Intl.DateTimeFormat("nl-NL", Object.assign({ timeZone: "UTC" }, opts)).format(dt); }
    catch (e) { return dt.toISOString().slice(0, 10); }
  }

  /* status() → { open, label, short, detail } — e.g. "Nu open · tot 22.00 uur" */
  function status() {
    var n = amsNow(), today = dateOf(n.y, n.m, n.d), now = n.hh * 60 + n.mm;
    var s = slotFor(today);
    if (s && now >= toMin(s.open) && now < toMin(s.close)) {
      return { open: true, short: "Nu open", label: "Nu open · tot " + nl(s.close) + " uur", detail: "Vandaag open van " + nl(s.open) + " tot " + nl(s.close) + " uur" };
    }
    if (s && now < toMin(s.open)) {
      return { open: false, short: "Gesloten", label: "Vandaag open vanaf " + nl(s.open) + " uur", detail: "Vandaag geopend van " + nl(s.open) + " tot " + nl(s.close) + " uur" };
    }
    for (var i = 1; i <= 14; i++) {
      var dt = addDays(today, i), sl = slotFor(dt);
      if (sl) {
        var when = i === 1 ? "morgen" : fmtDate(dt, { weekday: "long" }) + (i > 6 ? " " + fmtDate(dt, { day: "numeric", month: "long" }) : "");
        return { open: false, short: "Gesloten", label: "Gesloten · " + when + " vanaf " + nl(sl.open) + " uur", detail: "We zijn weer open " + when + " vanaf " + nl(sl.open) + " uur" };
      }
    }
    return { open: false, short: "Gesloten", label: "Gesloten", detail: "" };
  }

  /* weekRows() → Monday-first rows for an opening-hours table */
  function weekRows() {
    var n = amsNow(), todayIdx = dateOf(n.y, n.m, n.d).getUTCDay();
    return [1, 2, 3, 4, 5, 6, 0].map(function (i) {
      var w = week[i];
      var hours = !w.open ? "Gesloten" : w.sundayRule ? "1e & laatste zondag " + nl(w.open) + " – " + nl(w.close) : nl(w.open) + " – " + nl(w.close);
      return { day: w.day, short: w.day.slice(0, 2), hours: hours, closed: !w.open, sunday: !!w.sundayRule, today: i === todayIdx };
    });
  }

  /* nextOpenSundays(3) → ["zondag 2 november", …] */
  function nextOpenSundays(count) {
    var n = amsNow(), dt = dateOf(n.y, n.m, n.d), out = [];
    for (var i = 0; i < 120 && out.length < (count || 2); i++) {
      var d = addDays(dt, i);
      if (isOpenSunday(d)) out.push(fmtDate(d, { weekday: "long", day: "numeric", month: "long" }));
    }
    return out;
  }

  /* nextLounge() → "woensdag 11 november" (2nd Wednesday, not in August/September) */
  function nextLounge() {
    var n = amsNow(), y = n.y, m = n.m;
    for (var k = 0; k < 14; k++) {
      if (m !== 8 && m !== 9) {
        var first = dateOf(y, m, 1), offset = (3 - first.getUTCDay() + 7) % 7, d = addDays(first, offset + 7);
        if (d >= dateOf(n.y, n.m, n.d)) return fmtDate(d, { weekday: "long", day: "numeric", month: "long" });
      }
      m++; if (m > 12) { m = 1; y++; }
    }
    return "";
  }

  var news = [
    { kind: "event", title: "Lazy Louis Lounge", when: "Elke 2e woensdag van de maand · 20.00 – 24.00 uur", text: "Een maandelijkse avond voor 55-plussers uit de regio Amersfoort, met een hapje en een drankje en wisselende thema’s: pubquiz, meezingavond, mini-presentatie, spelletjes of gedichten. Toegang is gratis. Niet in augustus en september.", next: nextLounge() },
    { kind: "info", title: "Open op zondag", when: "Eerste en laatste zondag van de maand · 12.00 – 17.00 uur", text: "Op de open zondagen kunt u bij ons lunchen, en daarvoor kunt u gewoon reserveren.", next: nextOpenSundays(1)[0] || "" },
    { kind: "info", title: "Seizoensbieren op de kaart", when: "Wisselend", text: "Naast onze vaste tapbieren hebben we een seizoensgebonden speciaalbierkaart met wisselende bieren. Vraag aan de bar wat er nu op de kaart staat." }
  ];

  function euro(n) { return (Math.round(n * 100) / 100).toFixed(2).replace(".", ","); }

  /* Fill any element with data-ll="status|statusShort|detail|loungeNext|sundayNext" automatically. */
  function fillLive(root) {
    root = root || document;
    var st = status();
    root.querySelectorAll("[data-ll]").forEach(function (el) {
      var k = el.getAttribute("data-ll");
      if (k === "status") el.textContent = st.label;
      else if (k === "statusShort") el.textContent = st.short;
      else if (k === "detail") el.textContent = st.detail;
      else if (k === "loungeNext") el.textContent = nextLounge();
      else if (k === "sundayNext") el.textContent = nextOpenSundays(1)[0] || "";
      el.classList.toggle("is-open", st.open);
      el.classList.toggle("is-closed", !st.open);
    });
  }
  if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", function () { fillLive(); });
  else fillLive();

  window.LL = {
    info: info, intro: intro, story: story, menu: menu, jobs: jobs, reserve: reserve, news: news,
    photos: photos, brand: brand, week: week,
    status: status, weekRows: weekRows, nextOpenSundays: nextOpenSundays, nextLounge: nextLounge,
    euro: euro, fillLive: fillLive
  };
})();
