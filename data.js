// data.js — Gedeelde data voor de Vraagstelling-applicatie

const CASUS_STAPPEN = [
  {
    id: 0,
    label: "Stap 0 — Beginvraag",
    vraag: "Hoe kan organisatie X de kwaliteit van haar employee journey verbeteren, zodat medewerkers meer tevreden zijn?",
    sterren: 1,
    niveau: "Onvoldoende",
    problemen: [
      "Actor te vaag: 'organisatie X' heeft geen specifiek mandaat",
      "Werkwoord eindig: 'verbeteren' suggereert een eindpunt",
      "Waardecreatie vaag en eindig: 'meer tevreden zijn'"
    ],
    uitleg: "De beginvraag heeft drie zwakke punten: de actor is niet specifiek genoeg, het werkwoord 'verbeteren' is eindig, en de waardecreatie is te vaag en eindig geformuleerd."
  },
  {
    id: 1,
    label: "Stap 1 — Actor aangescherpt",
    vraag: "Hoe kan de HR-afdeling van organisatie X de kwaliteit van haar employee journey verbeteren, zodat medewerkers meer tevreden zijn?",
    sterren: 2,
    niveau: "Zwak",
    verbeterd: "Actor aangescherpt: HR-afdeling heeft het mandaat",
    problemen: [
      "Werkwoord eindig: 'verbeteren' suggereert een eindpunt",
      "Waardecreatie nog eindig: 'meer tevreden zijn'"
    ],
    uitleg: "De actor is concreet gemaakt: de HR-afdeling heeft het mandaat voor de employee journey. Werkwoord en waardecreatie vragen nog verbetering."
  },
  {
    id: 2,
    label: "Stap 2 — Werkwoord verbeterd",
    vraag: "Welke maatregelen moet de HR-afdeling van organisatie X nemen om de employee journey in te richten, zodat medewerkers meer tevreden zijn?",
    sterren: 3,
    niveau: "Goed (eindig)",
    verbeterd: "Werkwoord 'inrichten' vervangt 'verbeteren'; standaard ontwerpende formulering",
    problemen: [
      "Waardecreatie nog eindig: 'meer tevreden zijn' is een meetbaar eindpunt"
    ],
    uitleg: "Het werkwoord 'inrichten' is ontwerpend en vraagt om structurele maatregelen. De standaardformulering 'welke maatregelen moet... nemen' is nu correct. De waardecreatie is echter nog eindig."
  },
  {
    id: 3,
    label: "Stap 3 — Waardecreatie oneindig",
    vraag: "Welke maatregelen moet de HR-afdeling van organisatie X nemen om de employee journey in te richten, zodat de organisatie een adaptieve capaciteit opbouwt voor blijvende medewerkerbetrokkenheid?",
    sterren: 5,
    niveau: "Excellent (oneindig)",
    verbeterd: "Waardecreatie oneindig: 'adaptieve capaciteit' en 'blijvende betrokkenheid'",
    problemen: [],
    uitleg: "De waardecreatie is nu oneindig: 'adaptieve capaciteit' en 'blijvende betrokkenheid' zijn geen meetbare eindpunten maar continue vermogens. Dit is een excellente, oneindige onderzoeksvraag (★★★★★)."
  }
];

const DIMENSIES = {
  actor: {
    label: "Actor",
    icon: "👤",
    beschrijving: "Wie neemt de maatregelen? Heeft deze actor het mandaat?",
    stappen: [
      { stap: 0, status: "rood", tekst: "Te vaag", feedback: "Te vaag: 'organisatie X' heeft geen specifiek mandaat voor de employee journey. Wie heeft de bevoegdheid om dit in te richten?", aanpassing: "Aanscherpen naar een specifieke afdeling of rol met mandaat." },
      { stap: 1, status: "groen", tekst: "Goed", feedback: "De HR-afdeling is de juiste actor — zij heeft het mandaat en de expertise voor de employee journey." }
    ]
  },
  werkwoord: {
    label: "Werkwoord",
    icon: "⚙️",
    beschrijving: "Is het werkwoord ontwerpend? Vraagt het om maatregelen?",
    stappen: [
      { stap: 0, status: "rood", tekst: "Eindig werkwoord", feedback: "'Verbeteren' is een eindig werkwoord: het suggereert dat er een meting en eindpunt is. Gebruik een werkwoord dat vraagt om het ontwerpen van maatregelen.", aanpassing: "Vervang door een ontwerpend werkwoord: 'inrichten', 'ontwikkelen', 'opzetten', 'implementeren'." },
      { stap: 2, status: "groen", tekst: "Goed", feedback: "'Inrichten' is ontwerpend: het vraagt om structurele maatregelen, niet om een eenmalige verbetering. De formulering 'welke maatregelen moet... nemen' is correct." }
    ]
  },
  waardecreatie: {
    label: "Waardecreatie",
    icon: "🎯",
    beschrijving: "Wat is het effect? Eindig (KPI) of oneindig (vermogen)?",
    stappen: [
      { stap: 0, status: "rood", tekst: "Vaag & eindig", feedback: "'Meer tevreden zijn' is vaag en eindig: het is een subjectieve eindtoestand zonder richting voor blijvende waarde.", aanpassing: "Maak de waardecreatie concreter en overweeg of het oneindig gemaakt kan worden." },
      { stap: 2, status: "oranje", tekst: "Eindig eindpunt", feedback: "'Meer tevreden zijn' is nog steeds een eindig meetpunt. De vraag is goed (★★★), maar de waardecreatie kan oneindig gemaakt worden voor een excellent niveau.", aanpassing: "Vervang door een blijvend vermogen: 'adaptieve capaciteit', 'duurzame betrokkenheid'." },
      { stap: 3, status: "groen", tekst: "Oneindig", feedback: "'Adaptieve capaciteit voor blijvende medewerkerbetrokkenheid' is oneindig: het is een vermogen, geen meetbaar eindpunt. Dit is excellent (★★★★★)." }
    ]
  },
  eindigOneindig: {
    label: "Eindig / Oneindig",
    icon: "♾️",
    beschrijving: "Stuurt de vraag op een eindpunt (KPI) of op blijvend vermogen?",
    stappen: [
      { stap: 0, status: "rood", tekst: "Alles eindig", feedback: "De vraag is eindig op alle fronten: vage actor, eindig werkwoord, eindige waardecreatie. Niveau: ★ Onvoldoende." },
      { stap: 2, status: "oranje", tekst: "Gedeeltelijk oneindig", feedback: "Het werkwoord is nu ontwerpend, maar de waardecreatie is nog eindig. Niveau: ★★★ Goed (eindig)." },
      { stap: 3, status: "groen", tekst: "Oneindig ★★★★★", feedback: "De vraag stuurt op blijvend aanpassingsvermogen, niet op een meetbare eindtoestand. Niveau: ★★★★★ Excellent (oneindig)." }
    ]
  }
};

// --- Highlight-metadata per stap voor generieke Vraagkliniek-logica ---
// Elke entry: { tekst: "...", klasse: "highlight-actor|highlight-verb|highlight-value" }
const CASUS_HIGHLIGHTS = [
  [],  // stap 0: geen highlights
  [{ tekst: "de HR-afdeling van organisatie X", klasse: "highlight-actor" }],
  [
    { tekst: "de HR-afdeling van organisatie X", klasse: "highlight-actor" },
    { tekst: "Welke maatregelen moet", klasse: "highlight-verb" },
    { tekst: "om de employee journey in te richten", klasse: "highlight-verb" }
  ],
  [
    { tekst: "de HR-afdeling van organisatie X", klasse: "highlight-actor" },
    { tekst: "Welke maatregelen moet", klasse: "highlight-verb" },
    { tekst: "om de employee journey in te richten", klasse: "highlight-verb" },
    { tekst: "zodat de organisatie een adaptieve capaciteit opbouwt voor blijvende medewerkerbetrokkenheid?", klasse: "highlight-value" }
  ]
];

// Verbeteringen-lijst voor het completion-panel
const CASUS_VERBETERINGEN = [
  "Actor aangescherpt: HR-afdeling heeft het mandaat",
  "Werkwoord ontwerpend: 'inrichten' vraagt om structurele maatregelen",
  "Waardecreatie oneindig: adaptieve capaciteit in plaats van eindig eindpunt"
];

// ===================================================================
// CASUS 2 — Sales & Operations samenwerking
// ===================================================================

const CASUS_2_STAPPEN = [
  {
    id: 0,
    label: "Startpunt",
    vraag: "Hoe kan organisatie Y meer samenwerken?",
    sterren: 1,
    niveau: "Onvoldoende",
    problemen: [
      "Actor ontbreekt: wie is de aanwijsbare eigenaar van dit vraagstuk?",
      "Werkwoord richt zich op het leidend voorwerp, niet op de eigenaar",
      "Waardecreatie ontbreekt volledig"
    ],
    uitleg: "De beginvraag mist een duidelijke eigenaar, het werkwoord 'samenwerken' richt zich op de afdelingen zelf in plaats van op wie het moet aansturen, en er is geen waardecreatie geformuleerd."
  },
  {
    id: 1,
    label: "Iteratie 1 — Actor aangescherpt",
    vraag: "Hoe kan het MT van de afdelingen Sales en Operations van organisatie Y ervoor zorgen dat ze meer samenwerken?",
    sterren: 2,
    niveau: "Zwak",
    verbeterd: "Actor aangescherpt: het MT als eigenaar met mandaat",
    problemen: [
      "Werkwoord nog gericht op het leidend voorwerp ('samenwerken')",
      "Waardecreatie ontbreekt nog"
    ],
    uitleg: "Het MT is nu de eigenaar — zij hebben het mandaat om samenwerking te organiseren. Maar het werkwoord en de waardecreatie moeten nog verbeterd worden.",
    keuzes: {
      prompt: "Wie is de beste eigenaar van dit vraagstuk?",
      dimensie: "actor",
      opties: [
        { tekst: "afdelingen Sales en Operations", juist: false, feedback: "'Afdelingen Sales en Operations' is een collectief — geen aanwijsbare eigenaar met mandaat. Wie stuurt dit aan?" },
        { tekst: "het MT van de afdelingen Sales en Operations", juist: true, feedback: "Het MT heeft het mandaat om cross-departementale samenwerking te organiseren. Zij zijn de aanwijsbare eigenaar." }
      ]
    }
  },
  {
    id: 2,
    label: "Iteratie 2 — Werkwoord verbeterd",
    vraag: "Welke maatregelen moet het MT van de afdelingen Sales en Operations van organisatie Y nemen om duurzame cross-departementale verbindingen te ontwikkelen?",
    sterren: 3,
    niveau: "Goed",
    verbeterd: "Werkwoord 'ontwikkelen' vervangt 'samenwerken'; standaard ontwerpende formulering",
    problemen: [
      "Waardecreatie ontbreekt: voor wie en waartoe?"
    ],
    uitleg: "Het werkwoord 'ontwikkelen' is ontwerpend en vraagt om structurele maatregelen. De standaardformulering 'welke maatregelen moet... nemen' is nu correct. Er ontbreekt echter nog een waardecreatie.",
    keuzes: {
      prompt: "Welke formulering past het best bij een ontwerpende onderzoeksvraag?",
      dimensie: "werkwoord",
      opties: [
        { tekst: "ervoor zorgen dat ze meer samenwerken", juist: false, feedback: "'Samenwerken' richt zich op het leidend voorwerp (de afdelingen), niet op de eigenaar. Het werkwoord moet beschrijven wat de eigenaar moet doen." },
        { tekst: "maatregelen nemen om duurzame cross-departementale verbindingen te ontwikkelen", juist: true, feedback: "'Ontwikkelen' is een ontwerpend werkwoord — het vraagt om structurele maatregelen. De formulering 'welke maatregelen moet... nemen' is de standaard voor een ontwerpende vraag." }
      ]
    }
  },
  {
    id: 3,
    label: "Iteratie 3 — Waardecreatie oneindig",
    vraag: "Welke maatregelen moet het MT van de afdelingen Sales en Operations van organisatie Y nemen om duurzame cross-departementale verbindingen te ontwikkelen, zodat de organisatie continue unieke en innovatieve producten en services kan aanbieden die aansluiten bij de behoeften van de klant?",
    sterren: 5,
    niveau: "Excellent (oneindig)",
    verbeterd: "Waardecreatie oneindig: 'continue' producten en services die 'aansluiten bij de behoeften'",
    problemen: [],
    uitleg: "De waardecreatie is nu oneindig: 'continue unieke en innovatieve producten en services die aansluiten bij de behoeften van de klant' beschrijft een blijvend vermogen, geen meetbaar eindpunt. Dit is een excellente, oneindige onderzoeksvraag (★★★★★).",
    keuzes: {
      prompt: "Welke waardecreatie voeg je toe aan de vraag?",
      dimensie: "waardecreatie",
      opties: [
        { tekst: "zodat de klanttevredenheid stijgt en de time-to-market van gezamenlijke producten verkort wordt", juist: false, feedback: "'Klanttevredenheid stijgt' en 'time-to-market verkort' zijn eindige KPI's — meetbare eindpunten die je kunt afvinken. Dit stuurt op een eindresultaat, niet op een blijvend vermogen." },
        { tekst: "zodat de organisatie continue unieke en innovatieve producten en services kan aanbieden die aansluiten bij de behoeften van de klant", juist: true, feedback: "Dit is oneindig: 'continue' en 'aansluiten bij de behoeften' beschrijven een blijvend vermogen, geen meetbaar eindpunt. Dit is excellent (★★★★★)." }
      ]
    }
  }
];

const DIMENSIES_2 = {
  actor: {
    label: "Actor",
    icon: "👤",
    beschrijving: "Wie is de aanwijsbare eigenaar? Heeft deze actor het mandaat?",
    stappen: [
      { stap: 0, status: "rood", tekst: "Ontbreekt", feedback: "Er is geen aanwijsbare eigenaar. 'Afdelingen Sales en Operations' is een collectief, geen actor met mandaat. Wie stuurt dit aan?" },
      { stap: 1, status: "groen", tekst: "Goed", feedback: "Het MT van de afdelingen Sales en Operations is de juiste actor — zij hebben het mandaat om cross-departementale samenwerking te organiseren." }
    ]
  },
  werkwoord: {
    label: "Werkwoord",
    icon: "⚙️",
    beschrijving: "Is het werkwoord ontwerpend? Richt het zich op de eigenaar?",
    stappen: [
      { stap: 0, status: "rood", tekst: "Verkeerd gericht", feedback: "'Samenwerken' richt zich op het leidend voorwerp (de afdelingen), niet op de eigenaar. Het werkwoord moet zich richten op wat de eigenaar moet doen." },
      { stap: 2, status: "groen", tekst: "Goed", feedback: "'Ontwikkelen' is ontwerpend en richt zich op wat het MT moet doen. De formulering 'welke maatregelen moet... nemen' is correct." }
    ]
  },
  waardecreatie: {
    label: "Waardecreatie",
    icon: "🎯",
    beschrijving: "Wat is het effect? Voor wie? Eindig (KPI) of oneindig (vermogen)?",
    stappen: [
      { stap: 0, status: "rood", tekst: "Ontbreekt", feedback: "Er is geen waardecreatie geformuleerd. De vraag zegt niet voor wie of waartoe de samenwerking moet leiden." },
      { stap: 3, status: "groen", tekst: "Oneindig", feedback: "'Continue unieke en innovatieve producten en services die aansluiten bij de behoeften van de klant' is oneindig: het beschrijft een blijvend vermogen, geen meetbaar eindpunt. Dit is excellent (★★★★★)." }
    ]
  },
  eindigOneindig: {
    label: "Eindig / Oneindig",
    icon: "♾️",
    beschrijving: "Stuurt de vraag op een eindpunt (KPI) of op blijvend vermogen?",
    stappen: [
      { stap: 0, status: "rood", tekst: "Geen richting", feedback: "De vraag heeft geen waardecreatie en stuurt nergens op. Niveau: ★ Onvoldoende." },
      { stap: 3, status: "groen", tekst: "Oneindig ★★★★★", feedback: "De vraag stuurt op een blijvend vermogen: continue waardecreatie voor de klant. Niveau: ★★★★★ Excellent (oneindig)." }
    ]
  }
};

const CASUS_2_HIGHLIGHTS = [
  [],  // stap 0: geen highlights
  [{ tekst: "het MT van de afdelingen Sales en Operations van organisatie Y", klasse: "highlight-actor" }],
  [
    { tekst: "het MT van de afdelingen Sales en Operations van organisatie Y", klasse: "highlight-actor" },
    { tekst: "Welke maatregelen moet", klasse: "highlight-verb" },
    { tekst: "om duurzame cross-departementale verbindingen te ontwikkelen", klasse: "highlight-verb" }
  ],
  [
    { tekst: "het MT van de afdelingen Sales en Operations van organisatie Y", klasse: "highlight-actor" },
    { tekst: "Welke maatregelen moet", klasse: "highlight-verb" },
    { tekst: "om duurzame cross-departementale verbindingen te ontwikkelen", klasse: "highlight-verb" },
    { tekst: "zodat de organisatie continue unieke en innovatieve producten en services kan aanbieden die aansluiten bij de behoeften van de klant?", klasse: "highlight-value" }
  ]
];

const CASUS_2_VERBETERINGEN = [
  "Actor aangescherpt: het MT als eigenaar met mandaat",
  "Werkwoord ontwerpend: 'ontwikkelen' richt zich op de eigenaar",
  "Waardecreatie oneindig: blijvend vermogen voor de klant"
];

// ===================================================================
// Casus-bundel voor eenvoudige selectie
// ===================================================================

const CASUSSEN = [
  {
    id: "hr",
    label: "Employee Journey (HR)",
    stappen: CASUS_STAPPEN,
    dimensies: DIMENSIES,
    highlights: CASUS_HIGHLIGHTS,
    verbeteringen: CASUS_VERBETERINGEN
  },
  {
    id: "sales-ops",
    label: "Sales & Operations",
    stappen: CASUS_2_STAPPEN,
    dimensies: DIMENSIES_2,
    highlights: CASUS_2_HIGHLIGHTS,
    verbeteringen: CASUS_2_VERBETERINGEN
  }
];

const SIGNAALWOORDEN_EINDIG = [
  "verbeteren", "verhogen", "verlagen", "met x%", "binnen", "maanden",
  "kpi", "target", "scoren", "behalen", "overtreffen", "winnen",
  "meer tevreden", "minder verzuim", "groei", "resultaat", "bereiken",
  "realiseren", "halen", "voltooien"
];

const SIGNAALWOORDEN_ONEINDIG = [
  "blijvend", "continu", "duurzaam", "adaptief", "aanpassingsvermogen",
  "lerende organisatie", "structureel", "cultuur", "inspelen op",
  "anticiperen", "experimenteren", "vermogen", "capaciteit", "betrokkenheid",
  "inzetbaar", "emergent", "groeien als", "in staat stellen"
];
