# Test-aannames uit student-PvAs — WS4 Red Team

Vijf realistische aannames + twee reserves, geanonimiseerd uit de PvA-cohort 2026. Bestemd voor:
- **Primair:** docent-pre-test conform LRD §9 (drie aannames runnen op gratis ChatGPT om frame-effect te verifiëren).
- **Secundair:** reserve in de zaal als de student-aangedragen aanname in blok 1 niet bruikbaar blijkt voor de live demo.
- **Niet voor:** student-handout. Studenten gebruiken hun eigen WS2-aannames.

## Hoe te gebruiken

1. **Vóór de zaal:** kies drie van de vijf hoofdaannames die het dichtst bij de sector van de huidige cohort liggen. Test prompt-A en prompt-B (zie [`echo-kamer-demo-script.md`](echo-kamer-demo-script.md)) op elk. Markeer welke het frame-effect zichtbaar laten zien.
2. **In de zaal blok 1:** als de student-aanname te abstract is, val terug op de best-getest hoofdaanname. Reserve-aannames (R1, R2) zijn vangnet als pre-test op meerdere kandidaten faalt.
3. **In de zaal blok 2a:** mocht een duo geen drie aannames kunnen formuleren uit hun WS2-flip-over (komt voor bij studenten met dunne probleemstelling), bied dan één van deze aannames aan als oefen-aanname. Markeer dat ze een eigen aanname in de plaats moeten zetten zodra ze er een vinden.

## Belangrijk: de chatbot kent de specifieke organisatie NIET

De aannames bevatten een sector-tag (*"een internationale semiconductor-fabrikant"*, *"een MKB-restaurant in een middelgrote Nederlandse stad"*) maar geen organisatienaam. **Dat is bewust** — én relevant voor hoe je de prompts inricht.

De chatbot heeft geen feiten over de specifieke organisatie achter de aanname (dat zou ook niet kunnen — die staat niet in zijn trainingsdata). Wat hij wel heeft zijn **patronen**: wat in dit *type* situatie vaak voorkomt volgens openbare bronnen, theorieën, en case studies die hij heeft gezien. De prompts in [`echo-kamer-demo-script.md`](echo-kamer-demo-script.md) en de rolprompt-kaarten in [`rolprompt-kaarten.md`](rolprompt-kaarten.md) zijn daarom expliciet **patroon-georiënteerd** geformuleerd:

- ❌ NIET: *"Is het waar dat...?"* — vraagt om feit-controle waar de chatbot moet fabriceren.
- ✅ WEL: *"Op basis van algemeen bekende mechanismen in dit type situaties, geef de drie sterkste argumenten waarom..."* — vraagt om patroon-mobilisering waar de chatbot daadwerkelijk iets kan.

**Pedagogisch is dit een feature, geen bug.** Juist omdat de chatbot dezelfde patroon-set in twee richtingen kan mobiliseren (bevestigen + weerleggen) wordt zichtbaar dat zijn output **geen waarheid** is over de organisatie, maar **patronen-passend-bij-frame**. Dat is exact wat bias-amplificatie ís — en wat blok 1 demonstreert.

Dit verklaart ook waarom de aannames in dit bestand specifiek genoeg zijn (sector + type) maar niet té specifiek (geen organisatienaam, geen feitelijke cijfers): die balans laat de chatbot z'n patroon-werk doen zonder dat hij feiten moet verzinnen.

## Selectiecriteria toegepast

Alle aannames voldoen aan:
- ✅ Bevatten impliciete oorzaak-toewijzing (*"X gebeurt omdat Y"*) — het ideale frame voor Red Team
- ✅ Concreet genoeg om te debatteren (niet *"er is veel weerstand"*)
- ✅ Niet zo specifiek dat ze direct empirisch zijn te checken (geen *"5% daling"*-uitspraken)
- ✅ Anonimiseerbaar zonder verlies van realisme (sector + organisatie-type behouden)
- ✅ Verwacht frame-effect: ChatGPT kan beide kanten op argumenteren

---

## De 5 hoofdaannames

### Aanname 1 — HR / medewerker-retentie (internationale techsector)

> *"Bij een internationale semiconductor-fabrikant in Zuid-Nederland verlaten internationale medewerkers vroegtijdig de organisatie omdat de onboarding onvoldoende specifiek is ingericht op hun behoeften."*

**Originele PvA-context (in 1 zin):** een student-duo formuleerde dit als kernrisico bij de probleemstelling van een onboarding-onderzoek voor internationale medewerkers in Eindhoven.

**Parafrase-alternatief (compacter, voor pre-test):**
> *"Internationale medewerkers bij [internationale semiconductor-fabrikant] verlaten het bedrijf vroegtijdig omdat de onboarding niet aansluit op hun specifieke behoeften."*

**Verwachte richting van de drie rolprompts:**
- **Skeptische peer**: alternatieve oorzaken — woonsituatie/expat-gezin, salarisbench­markt, woningmarktdruk, taalbarrière buiten werk.
- **Domein-expert**: HR-theorie (Bauer's Four C's, Saks & Gruman's Socialization Resources Theory) wijst op meerdere factoren naast onboarding; literatuur kent ook *"realistic job preview"*-effecten.
- **Ethicus**: stakeholder-vraag — in hoeverre is "onboarding" het bedrijf z'n verantwoordelijkheid vs. integratie in de bredere Nederlandse samenleving (overheidstaak)?

**Type:** Medewerker / weerstand / cultuur · **Frame-effect-potentieel:** zeer hoog

---

### Aanname 2 — Klant / vindbaarheid (MKB-horeca)

> *"De website van een MKB-restaurant in een middelgrote Nederlandse stad is onvoldoende SEO-geoptimaliseerd, waardoor potentiële klanten het restaurant niet via online zoekopdrachten vinden."*

**Originele PvA-context (in 1 zin):** een duo identificeerde dit als hoofdoorzaak voor de "discrepantie tussen online zichtbaarheid en bedrijfskundige waarde" bij een lokaal restaurant.

**Parafrase-alternatief:**
> *"Het MKB-restaurant [naam] verliest klanten aan concurrenten omdat de website onvoldoende SEO-geoptimaliseerd is."*

**Verwachte richting van de drie rolprompts:**
- **Skeptische peer**: klanten ontdekken horeca tegenwoordig via Instagram / Google Maps / mond-tot-mond, niet via traditionele zoekopdrachten op website-keywords.
- **Domein-expert**: customer journey-literatuur (Kannan & Li 2017, Lemon & Verhoef 2016) toont dat 'vindbaarheid' meervoudig is; SEO is één touchpoint van vele.
- **Ethicus**: stakeholder-vraag — wie zegt dat *meer* klanten gewenst is? Wat over de huidige stamgasten en authenticiteit van een buurtrestaurant?

**Type:** Klant / markt / vraag · **Frame-effect-potentieel:** hoog

---

### Aanname 3 — Proces / systeemadoptie (zuivel-export)

> *"Bij een internationaal Nederlands zuivel-handelshuis worden de geïmplementeerde IT-systemen (ERP, CRM, BI) onvoldoende benut omdat medewerkers vasthouden aan handmatige Excel-lijsten en analoge werkwijzen."*

**Originele PvA-context (in 1 zin):** een duo benoemde dit als de kernverklaring voor "ondanks nieuwe systemen" voortdurende inconsistentie en fouten in exportdocumentatie.

**Parafrase-alternatief:**
> *"De export-afdeling van [zuivel-handelshuis] gebruikt nieuwe IT-systemen niet structureel omdat medewerkers nog vasthouden aan oude werkwijzen."*

**Verwachte richting van de drie rolprompts:**
- **Skeptische peer**: misschien is het systeem zelf slecht ontworpen (UX-probleem) of dekt het niet alle export-cases af — *"vasthouden aan Excel"* kan een rationele compensatie zijn voor systeemtekortkomingen.
- **Domein-expert**: change-management-literatuur (Kotter, Caluwé kleurendenken) wijst op meerdere oorzaken: gebrekkige sense-of-urgency, machts/belangenstructuren, training, leiderschap.
- **Ethicus**: medewerkers-perspectief — wie heeft besloten welke systemen worden geïmplementeerd? Zijn de eindgebruikers in design betrokken?

**Type:** Proces / operationele efficiëntie · **Frame-effect-potentieel:** hoog

---

### Aanname 4 — Strategie / transitie (industriële machine-fabrikant)

> *"Bij een Nederlandse fabrikant van industriële printing-machines stagneert de transitie naar voorspellend onderhoud (predictive maintenance) omdat de Technical Support-afdeling reactief en proactief is ingericht."*

**Originele PvA-context (in 1 zin):** een duo formuleerde dit als kernprobleem voor het onderzoek naar de organisatorische transitie naar data-gedreven onderhoudsmodellen.

**Parafrase-alternatief:**
> *"De service-afdeling van [industriële machine-fabrikant] kan niet doorgroeien naar predictive maintenance omdat de huidige inrichting reactief is."*

**Verwachte richting van de drie rolprompts:**
- **Skeptische peer**: de oorzaak kan ook liggen in datakwaliteit, ontbrekende ML-skills, klant-bereidheid om data te delen — *niet* in de inrichting van de afdeling.
- **Domein-expert**: predictive-maintenance-volwassenheid-modellen (zoals Industrie 4.0-frameworks) tonen meerdere parallelle assen — organisatie is één van vier of vijf factoren.
- **Ethicus**: klantperspectief — accepteren klanten in SSA-contracten een verschuiving van *"we komen als er iets stuk is"* naar *"we voorspellen wanneer iets stuk gaat"* (vertrouwen, controle, transparantie)?

**Type:** Strategie / positionering / capability-bouw · **Frame-effect-potentieel:** middel-hoog

---

### Aanname 5 — Technologie-adoptie / gedrag (medical devices)

> *"Bij een internationale fabrikant van orthopedische hulpmiddelen en sportprotheses gebruiken medewerkers Salesforce niet structureel omdat ze nog niet de gewoonte hebben gevormd om er duurzaam mee te werken."*

**Originele PvA-context (in 1 zin):** een duo identificeerde *"duurzame gedragsverandering"* als de hoofdinterventie om versnipperde klantdata in CRM op te lossen.

**Parafrase-alternatief:**
> *"Salesforce wordt bij [medical-devices-fabrikant] niet structureel gebruikt omdat het gedrag van medewerkers nog niet is veranderd."*

**Verwachte richting van de drie rolprompts:**
- **Skeptische peer**: misschien is *"gewoonte vormen"* het verkeerde frame — wellicht ervaren medewerkers Salesforce als bureaucratie boven hun reële werkstroom (klantgesprek, deal closen).
- **Domein-expert**: technology-acceptance-modellen (TAM, UTAUT) wijzen op *perceived usefulness* en *perceived ease of use* — niet alleen gedragsverandering. Als beide laag zijn, helpt geen change-management-traject.
- **Ethicus**: management-stakeholder-vraag — wordt CRM-gebruik gemeten en beloond? Bijv. via salescycle-completion-rates? Geen incentive = geen "duurzame gedragsverandering".

**Type:** Technologie / systeem / data · **Frame-effect-potentieel:** hoog

---

## De 2 reserve-aannames

### R1 — Onderwijs-context (middelbare school)

> *"Het min-advies bij de profielvakkeuze heeft een demotiverend effect op leerlingen op een Nederlandse middelbare school met havo/vwo-stroom."*

**Wanneer inzetten:** als de docent een non-corporate context wil voor variatie, of als de cohort PvAs uit publieke/onderwijsdomein bevat.

**Originele PvA-context:** signalen vanuit docenten over discussie over vormgeving (ontbreken +/- optie) en demotiverende effecten van negatieve adviezen.

**Verwachte richting:**
- **Skeptische peer**: demotiverend voor *welke* leerlingen? Misschien voor sommigen juist activerend (uitdaging om te bewijzen dat je het wél kan).
- **Domein-expert**: motivatietheorie (Deci & Ryan SDT) — autonomie/competentie/verbondenheid; min-advies kan competentie-gevoel raken maar niet noodzakelijk autonomie.
- **Ethicus**: rol van de docent — moet feedback altijd motiverend zijn, of is realistische diagnose ook een morele plicht?

**Type:** Medewerker (leerling) / cultuur · **Frame-effect-potentieel:** hoog

---

### R2 — Industriële service / klantbeleving

> *"Klanten van een Nederlandse vestiging van een internationale industriële service-organisatie ervaren onvoldoende toegevoegde waarde uit het serviceproces omdat de rapportage te weinig inzicht biedt in uitgevoerde werkzaamheden."*

**Wanneer inzetten:** alternatief klant/markt-type, in industriële (B2B) i.p.v. retail/horeca-context.

**Originele PvA-context:** een duo formuleerde dit bij een onderzoek naar de positionering van het bedrijf als *"Partner of Choice"* voor service-klanten.

**Verwachte richting:**
- **Skeptische peer**: misschien lezen klanten de rapportage simpelweg niet — frequentie, formaat, en *moment* van levering kunnen de oorzaak zijn, niet de inhoud.
- **Domein-expert**: service-dominant-logic (Vargo & Lusch) en customer-experience-literatuur wijzen op meervoudige value-touchpoints; rapportage is er één.
- **Ethicus**: wat verwachten klanten echt — gedetailleerd inzicht of vertrouwen dat het probleem opgelost is?

**Type:** Klant / B2B / markt · **Frame-effect-potentieel:** middel

---

## Verwachte spreiding zichtbaar gemaakt

| # | Aanname | Type | Sector | Org-grootte | Frame-effect |
|---|---------|------|--------|-------------|--------------|
| 1 | NXP-onboarding | Medewerker/HR | Tech (semiconductors) | Internationaal/groot | Zeer hoog |
| 2 | Coco73-SEO | Klant/markt | Horeca/MKB | Klein | Hoog |
| 3 | Hoogwegt-IT | Proces/efficiëntie | Zuivel/exportlogistiek | Internationaal/middel | Hoog |
| 4 | Contiweb-PdM | Strategie/transitie | Industriële machinebouw | Middel | Middel-hoog |
| 5 | Össur-Salesforce | Technologie/gedrag | Medical devices | Internationaal/groot | Hoog |
| R1 | Elzendaal-min-advies | Medewerker (leerling) | Onderwijs (vmbo/havo/vwo) | Middel | Hoog |
| R2 | BEUMER-rapportage | Klant/B2B-service | Industriële service | Internationaal | Middel |

## Risico's en mitigaties

**Risico 1 — Aanname 4 (Contiweb-PdM) is te technisch.** Predictive maintenance kennis is niet algemeen; rolprompt 2 (domein-expert) kan ChatGPT laten haperen. **Mitigatie:** als pre-test laat zien dat de domein-expert generieke output geeft, val terug op R2 of een van de andere vier.

**Risico 2 — De rolprompt-respons is op gratis ChatGPT te voorzichtig** (*"er zijn meerdere kanten..."* zonder duidelijk bevestigen of weerleggen). **Mitigatie:** voeg in vervolgprompt een rol-versterker toe: *"Wees stelliger. Schrijf alsof je deze peer-review aan een tijdschrift instuurt — geen *"hangt ervan af"*-formuleringen."*

**Risico 3 — Studenten herkennen "hun" PvA in een geanonimiseerde aanname.** Dit kan stiltes of ongemak veroorzaken. **Mitigatie:** kies voor de live-demo in blok 1 een aanname uit een sector die *niet* in het huidige cohort vertegenwoordigd is. De anonieme tags hieronder helpen de docent dat te bepalen.

**Risico 4 — De huidige cohort heeft heel andere sectoren.** Geanonimiseerde aanname klinkt vreemd. **Mitigatie:** docent kan met dezelfde **structuur** (impliciete causaal-aanname *"X omdat Y"*) een eigen sector-passende aanname formuleren. Dit bestand toont alleen het *type* en de *kwaliteit* die nodig zijn.

---

## Docent-bijlage: bron-mapping (NIET voor zaal)

Anonieme tags voor terugzoeken via `task-list.md`. Studentnamen en organisatienamen *bewust* niet opgenomen — docent kan via task-list.md zelf de tag-naar-project-mapping reconstrueren als hij dat zou willen.

| Aanname | Tag | Originele bron-categorie |
|---------|-----|---------------------------|
| 1 (HR-onboarding) | PvA-A | Internationale halfgeleider-fabrikant, Eindhoven-regio |
| 2 (SEO-restaurant) | PvA-B | MKB-horeca, 's-Hertogenbosch-regio |
| 3 (IT-systemen zuivel) | PvA-C | Internationale zuivel-handel, Nederland |
| 4 (Predictive maintenance) | PvA-D | Industriële printing-machinebouw, Nederland |
| 5 (Salesforce-adoptie) | PvA-E | Internationale medical-devices, Noord-Europa |
| R1 (min-advies leerling) | PvA-F | Middelbare school met havo/vwo, Zuid-Nederland |
| R2 (service-rapportage) | PvA-G | Industriële service-organisatie, Benelux-vestiging |

> **Bronvermelding-discipline:** dit bestand vermeldt geen studentnamen, geen organisatienamen, geen specifieke functienamen die herleidbaar zijn. De aannames zijn herschreven op basis van de probleemstellingen in de PvAs — niet woord-voor-woord overgenomen. Mocht een student in de zaal toch zijn eigen casus herkennen, dan kan de docent neutraal reageren met *"deze aanname is een sectorbreed patroon, niet specifiek aan één organisatie."*

---

## Volgende stap: pre-test op gratis ChatGPT

Voer per gekozen aanname uit (drie kandidaten, conform LRD §9):

1. **Echo-kamer-test (blok 1):** prompt-A en prompt-B uit `echo-kamer-demo-script.md` — verifieer dat het frame-effect zichtbaar is.
2. **Rolprompt-kaarten test (blok 2):** kaart 1 + 2 + 3 uit `rolprompt-kaarten.md` — verifieer dat de drie rollen *inhoudelijk verschillende* perspectieven leveren.
3. **Debat-prompt test (blok 2b):** kaart 4 — verifieer dat het debat minimaal 12 rondes doorloopt zonder herhaling, en dat de slotsynthese een *toetsbare* hypothese-lijst oplevert.

Documenteer welke aanname op welke kaart het sterkst frame-effect oproept. Dat is je shortlist voor de zaal.
