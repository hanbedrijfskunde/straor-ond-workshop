# WS4 — Drie ontwerpschetsen: "Professioneel inzetten van AI agents in onderzoek"

**Module:** Strategie en Organisatieontwikkeling (STRAOR23) — Onderzoeken (STRA0R23-OND)
**Doelgroep:** 3e/4e jaars HBO Bedrijfskunde
**Duur:** 90 minuten
**Vertrekpositie:** studenten gebruiken AI als chatbot (gratis ChatGPT). Geen API, geen Pro, geen plugins als verplichting.
**Toon:** confronterend op de inhoudelijke keuzes (delegatie/groei, bias, augmentatie) — ontspannen op de tooling zelf.

---

## Probleem dat WS4 oplost

WS2 introduceerde AI als *one-shot scan-prompt* (15 min, één artikel, één prompt). Studenten gebruiken AI nu vooral *consumptief* (artikelen samenvatten, antwoorden ophalen) en niet *agentisch* (meerstaps, doel-gericht, met checks). De grote denkfout die WS4 doorbreekt: **AI als zoekmachine** vs. **AI als onderzoeksassistent**.

Drie nieuwe spanningen die in het bestaande programma nog niet expliciet zijn:

1. **Augmentatie vs. automatisering** — Welke onderzoeksrollen kun je afgeven? Welke moet je zelf houden om je oordeel te ontwikkelen?
2. **Jagged frontier** — AI is briljant op X en hopeloos op Y, en het is vaak niet voorspelbaar waar de grens ligt. Studenten moeten leren dit empirisch te detecteren.
3. **Bias-amplificatie** — Een chatbot kan aannames van de opdrachtgever versterken in plaats van blootleggen. Wanneer is hij Red Team, wanneer echo-kamer?

## Twee leerdoelen

| # | Leerdoel | Aansluiting |
|---|----------|-------------|
| **LD-1** | **Onderzoeks-agentvaardigheid:** student kan voor zijn eigen onderzoeksvraag een meersprogige chatbot-workflow ontwerpen, kritisch testen, en gefundeerd kiezen welke onderzoeksrollen wel/niet uit handen worden gegeven. | Bouwt door op WS2 scan-prompt; voedt PvA-uitvoering |
| **LD-2** | **AI-native werkhouding:** student kan benoemen welke principes (rolprompt, geheugen, feedback-lus, augmentatie-grens) transfereerbaar zijn naar elke toekomstige AI-tool die hij in zijn werk tegenkomt. | Voorbereidt op werkveld; voedt PROMEF-criterium 4 (groei in een veranderend vakgebied) |

## Pedagogische DNA (overgenomen uit WS1/WS2/WS3)

- 90 min, 3–4 blokken, ~20% input / ~80% hands-on
- Papier-eerst; digitaal alleen bewust afgebakend (max 15–20 min schermtijd per blok)
- Werkmateriaal: eigen onderzoeksvraag/casus van de student
- Docentrol: Socratisch + confronterend, geen instructie-college
- Per blok één tastbare deliverable
- Afsluiting: persoonlijke oogst — *"wat is veranderd in je denken?"*
- Pink-motivatoren (Zingeving · Meesterschap · Autonomie) verdeeld over de blokken
- Geen vakjargon in studentmateriaal (*"harness"*, *"orchestration"* blijven in docent-LRD)

---

# Sketch A — "Van scan-prompt naar chatbot-recept: meersprogige onderzoeksworkflow"

**Centrale claim:** Een chatbot wordt pas een onderzoeksassistent als jij hem een rol, een geheugen en een check-stap geeft. Studenten verbouwen hun eenmalige WS2-scan-prompt tot een meerstap chatbot-recept dat ze in de gratis ChatGPT kunnen draaien.

**Aansluiting:** directe upgrade van WS2 (scan-prompt) — geschikt vlak ná WS2, vóór studenten met PvA-veldwerk beginnen.
**Pijler / motivator:** Meesterschap (techniek, maar laagdrempelig).
**Tooling-eis:** alles in één gratis ChatGPT-chat. Geen API, geen plugins.

## Activiteitenreeks

| Blok | Tijd | Activiteit | Deliverable |
|------|------|-----------|-------------|
| 1. **Eén prompt vs. een gesprek** | 20 min | Plenaire side-by-side demo: links de scan-prompt uit WS2 als one-shot, rechts dezelfde vraag opgelost als **gesprek in 4 stappen**: (1) rolprompt setten, (2) artikel plakken, (3) terugkoppelen aan eigen onderzoeksvraag, (4) snowball-zoekterm vragen. Docent benoemt expliciet de vier elementen die er bij komen: **rol · geheugen · check · stop**. Studenten markeren op een A4 print de vier momenten in het gesprek. | Geannoteerde gespreks-schets |
| 2. **Bouw je eigen chatbot-recept** | 35 min | Per duo: bouw een herbruikbaar recept voor de eigen vraag. A3-werkblad heeft vijf velden: **doel · rolprompt (zin 1) · stappen 1–N (kort) · per-stap check (wat controleer ik aan de output?) · stop-criterium**. Laptops 15 min open: één gerichte test-run met écht artikel of bron. Daarna laptops dicht en recept verfijnen op papier. | A3 "Mijn chatbot-recept" |
| 3. **Waar werkt het briljant, waar valt het door de mand?** | 25 min | Duo's wisselen recept met buurgroep en testen elkaars recept op één van *hun* eigen aannames uit WS2. Drie post-it kleuren op de A3 van de ander: 🟢 verrassend goed / 🔴 faalt zichtbaar / ⚠️ ziet er goed uit maar kan ik niet verifiëren. **Confronterende vraag:** *"Welke ⚠️ vertrouw je nu zonder te checken?"* | Gemarkeerde A3 + drie post-its |
| 4. **AI-native oogst** | 10 min | Plenaire ronde, twee zinnen per duo: (1) "Voor mijn onderzoek vertrouw ik de chatbot voor *X* en check ik altijd *Y*"; (2) "Het principe *rol/geheugen/check/stop* gebruik ik later ook in *toekomstige tool*". | Mondelinge oogst + foto van A3 |

## Verrijking uit wiki — docent-ankers

> Volledig research log: [`inspiration/2026-05-10-sketch-a-chatbot-recept-research-log.md`](../inspiration/2026-05-10-sketch-a-chatbot-recept-research-log.md)

**A1 (blok 1, mentaal model — Software 3.0).** Karpathy's framing geeft het brede mentale model dat we aan studenten kunnen geven zonder jargon: *"Software 3.0 is about your programming now turns to prompting and what's in the context window is your lever over the interpreter that is the LLM."* Vertaald: de eenmalige scan-prompt uit WS2 was een mini-programma; vandaag bouwen we een meerstapsprogramma — zelfde substraat, andere structuur. Kernidee voor de slide: *"De unit van werk verschuift van 'wat typ ik in' naar 'wat is het stukje tekst dat ik telkens naar mijn assistent kopieer'."*

**A2 (blok 2, vier elementen).** Het Chatterjee-model van een agent-harness (Context · Constraints · Contracts · Compounding) vertaalt 1-op-1 naar studententaal. Voor studenten:
- **Context** = rolprompt + geheugen (wat ik hem laat weten)
- **Constraints** = check-momenten (na elke stap: klopt dit?)
- **Contracts** = stop-criterium (wanneer is dit gesprek af?)
- **Compounding** = leren over tijd (wat werkte, wat niet — recept verbeteren)

**A3 (blok 2, waarschuwing tegen overbouwen — subtraction principle).** *"Mature harness work looks less like building structure up and more like pruning it down."* — Pan/Khattab synthese 2026. Empirisch: Warel verwijderde 80% van zijn tools en kreeg betere resultaten; Manus herschreef hun harness 5× in 6 maanden. Voor de Socratische rondgang in blok 2: *"Welke stap in jouw recept voegt iets toe en welke is bezigheidstherapie?"*

**A4 (blok 3, jagged frontier — empirische confrontatie).** Dell'Acqua et al. (Organization Science 2026, peer-reviewed, n=758 BCG-consultants):
- Binnen de frontier: AI-gebruikers **+12.2% completion, +25.1% sneller, +33.9% kwaliteit** (Cohen *d* ≈ 0.96)
- Buiten de frontier: AI-gebruikers **−19 procentpunten correctheid** (84.5% control → 60.0% AI-conditie)
- Subjective coherence persists: foute output is *overtuigender* dan menselijke output

Karpathy's mechanisme: AI vliegt waar (1) verifiable + (2) labs care; struikelt elders. Canonisch 2026-voorbeeld: *"Opus 4.7 refactort tegelijk een 100k-regel codebase en vertelt me dat ik 50 meter naar de carwash moet lopen omdat hij zo dichtbij is."* Voor blok 3: dit zijn de cijfers achter de ⚠️-post-it.

**A5 (blok 4, transferability — LD-2-anker).** *"The model is rented from a vendor whose competitor will outperform them within the year; the harness is what we own and what compounds."* — Chatterjee 2026. Empirisch geanker: Khattab et al. tonen dat een geoptimaliseerde harness van één model **vijf andere modellen** verbetert zonder hertuning. Plus Karpathy's sluitclaim: *"You can outsource your thinking, but you can't outsource your understanding."* Voor de plenaire afsluiting van blok 4 — het LD-2-doel hard concreet.

---

# Sketch B — "Aannames-killer: de chatbot als Red Team voor je onderzoeksontwerp"

> **Volledige LRD beschikbaar:** [`LRD-Workshop-4-Red-Team.md`](LRD-Workshop-4-Red-Team.md) — uitgewerkt docent-bruikbaar werkcollege met fijnmazig draaiboek per blok, vier rolprompt-kaarten in [`materialen/`](materialen/), echo-kamer-demo-script, flip-over-templates, en PROMEF-zin-werkblad.

**Centrale claim:** Dezelfde chatbot kan je aannames bevestigen óf blootleggen — afhankelijk van hoe je hem instrueert. Studenten leren een chat als kritische tegenspeler te draaien in plaats van als ja-knikker. Direct uitvoerbaar in gratis ChatGPT.

**Aansluiting:** bouwt direct op WS2 (aannames-kolom) en WS3 (Red Team-spiegel). Geschikt vlak vóór studenten hun PvA finaliseren of tijdens uitvoering.
**Pijler / motivator:** Zingeving (eigen blinde vlek confronteren).
**Tooling-eis:** drie aparte chatvensters in gratis ChatGPT, één per rol. Geen Custom GPT's nodig — gewoon "New chat" en de rolprompt als eerste bericht.

## Activiteitenreeks

| Blok | Tijd | Activiteit | Deliverable |
|------|------|-----------|-------------|
| 1. **De echo-kamer demo** | 15 min | Docent toont *live* twee patroon-georiënteerde prompts in de gratis ChatGPT op dezelfde aanname: prompt-A vraagt om argumenten *vóór* de stelling vanuit een organisatieadviseur-rol, prompt-B vraagt om argumenten *tegen* vanuit een peer-reviewer-rol. Beide expliciet gebaseerd op *"algemeen bekende mechanismen in dit type situaties"* — niet op feiten over de specifieke organisatie (die de chatbot niet kent). Twee verschillende antwoorden, beide overtuigend. Plenair benoemen: **bias-amplificatie** + **automation bias** (we geloven het scherm). | Foto van twee chats naast elkaar |
| 2a. **Drie rolprompts op je top-3 aannames** (divergentie) | 20 min | Studenten nemen de top-3 aannames uit hun WS2-flip-over. Drie uitgedeelde **rolprompt-kaarten** (kant-en-klaar, getest op gratis ChatGPT): **Skeptische peer · Domein-expert · Ethicus**. Per aanname: open drie *aparte* nieuwe chats (één per rol), plak de rolprompt + de aanname, lees de antwoorden, schrijf de kern op flip-over. | Flip-over "Drie stemmen × drie aannames" |
| 2b. **Twee-agent debat op je meest-contested aanname** (convergentie) | 15 min | Duo's kiezen *één* aanname waarop in 2a de meeste tegenspraak ontstond. In één nieuwe chat geven ze de **debat-prompt** (kaart-3): twee personas (PRO + TEGEN), 15 rondes debat, sluitvraag *"wat zou er moeten gelden om de TEGEN-persona te overtuigen?"*. Output gaat als **toetsbare hypothese-lijst** op de flip-over. | Hypothese-lijst per aanname |
| 3. **Wat heb ik gemist?** | 25 min | Per duo: scoor jezelf — welke aanname is *zwakker geworden* na deze sessie? Welke is *sterker geworden* (heeft empirische steun)? Welke moet je nu écht in het veld toetsen? Update top-3 op A3 uit WS2. **Confronterende docent-vraag:** *"welke rolprompt heb je niet gegeven omdat het antwoord je niet uitkwam?"* | Bijgewerkt A3 |
| 4. **AI-native oogst: PROMEF-zin + transfer-zin** | 15 min | Twee zinnen per student: (1) PROMEF-criterium 4: *"Ik gebruik AI als Red Team door [concreet voorbeeld], zichtbaar in [aanname die ik heb laten vallen]"*; (2) transfer: *"In een toekomstige werksetting zet ik dezelfde drie rollen in op [welke beslissing]"*. Plenaire ronde, foto voor Handin. | PROMEF-zin + transfer-zin |

## Verrijking uit wiki — docent-ankers

> Volledig research log: [`inspiration/2026-05-10-sketch-b-red-team-rollen-research-log.md`](../inspiration/2026-05-10-sketch-b-red-team-rollen-research-log.md)

**B1 (blok 1, twee mechanismen tegelijk).**
- *Implicit bias persists*: zelfs grondig unbiased modellen (GPT-4, Claude 3 Sonnet) tonen op implicit-association probes nog steeds disproportionele negatieve associaties met zwarte personen, women-with-humanities, men-as-leaders. Bron: AI Index 2025 §3.
- *Subjective coherence persists* (Dell'Acqua 2026): *"AI improves presentation irrespective of substance, which can mask poor performance from supervisors and clients."*
- Trend-cijfer voor de slide: **AI-incidenten 2024: 233 (+56.4% YoY); 2025: 362** — geen *small risk*, maar een trend.

**B2 (blok 2, rolprompt-recept — empirisch ondersteund).** Boussioux et al. (Organization Science 2024, peer-reviewed, n=300 evaluators × 3,900 evaluator-solution pairs) testten **differentiated search**: één initiële prompt + iteratieve diversificatie-instructies *"Make sure to tackle a different problem than the previous ones and propose a different solution."* Mixed-effects model resultaten:
- Single-instance HAI: **+0.159 op kwaliteit (p<0.001)**, **+0.133 op strategische haalbaarheid (p<0.01)**, behoudt novelty
- Multi-instance HAI: −0.217 op novelty (p<0.001)
- Cost-realisme: $27 vs $2,555 (94× goedkoper) — **direct reproduceerbaar op gratis ChatGPT**

Drie failure modes om naar te zoeken:
1. *Formal-rationality bias* — LLM mist context-afhankelijke perspectieven
2. *Training-data confinement* — outputs *retrospective and ultimately confined* tot trainingscorpus
3. *Confabulation* — kan novelty boosten maar produceert ook vertekende reflecties

Auteurs-quote die het leerdoel letterlijk samenvat: *"The novelty and value of HAI outputs will depend on how humans engage with AI to guide its solution search behaviors."*

### Concept rolprompt-kaarten — divergente Red Team (blok 2a)

> *Kaart 1 — Skeptische peer:* "Je bent een collega-onderzoeker die kritisch is op niet-getoetste aannames. Geef de drie zwakste plekken in deze redenering. Wees specifiek; vermijd algemeenheden."
>
> *Kaart 2 — Domein-expert:* "Je bent een expert in [veranderkunde / organisatieadvies / het vakgebied]. Welke drie evidence-based weerleggingen ken je? Citeer concreet onderzoek of best practice waar je op bouwt."
>
> *Kaart 3 — Ethicus:* "Je bent een ethicus. Welke onbedoelde gevolgen of stakeholder-belangen worden over het hoofd gezien? Wat zou de gastorganisatie verzwijgen of niet doorzien?"

**B6 (blok 2b, twee-agent debate-prompt — convergente Red Team).** Aanvullend op de drie divergente rolprompts: een **convergente** techniek waarin twee tegengestelde personas in één chat met elkaar debatteren en de chatbot de minimale eisen synthetiseert om de skeptic te overtuigen. Bron: Marily Nika (AI Product Lead, Google) in *How I AI* podcast, oktober 2025.[^marily] Marily demonstreert de techniek voor product-marktonderzoek; de verplaatsing naar onderzoeksaannames is een direct analoge toepassing.

#### Concept debat-kaart — convergente Red Team (blok 2b)

> *Kaart 4 — Twee-agent debat:* "Maak twee personas. Eén PRO mijn aanname dat *[plak hier je aanname]*, en één TEGEN. Laat ze minimaal 15 keer met elkaar debatteren op basis van wat je weet over [vakgebied / context]. Geef daarna in één lijst: **wat zou er moeten gelden om de TEGEN-persona te overtuigen?** En: welke informatie heb ik nog uit de praktijk nodig om dat te onderbouwen?"

**Pedagogische waarde** — de divergente kaarten 1–3 leveren *breedte* (verschillende invalshoeken). De convergente kaart 4 levert *diepte* + een **direct toetsbare lijst** ("wat zou moeten gelden om...") die de student in blok 3 als top-3 aannames-update gebruikt en in zijn A3 onderzoeksontwerp als methode-aanleiding. Daarmee sluit de keten **WS2 (aanname-kolom) → WS4 blok 2b (debat-prompt) → A3 (toetsmethoden) → veld** in één doorgaande lijn.

**Verschil met Boussioux's differentiated search** — Boussioux's iteratieve diversificatie-instructies stellen exact één LLM telkens *meer divers* te zijn; Marily's debat-prompt zet *twee* personas tegenover elkaar in één chat. Beide horen bij dezelfde familie ("rol-gestuurde HAI"); de Marily-vorm is robuuster bij gratis ChatGPT omdat het in één gesprek blijft (geen context-overdracht tussen sessies) en eindigt op een direct gebruiksklare synthese.

[^marily]: *"How I AI"*-podcast met Marily Nika, AI Product Lead bij Google. Citaat uit transcript: *"Create two items. One that is pro [smart fridge] and one that is against [smart fridge]. Use everything you read and have these two agents debate at least 20 times about it and give me the minimum set of features I would need in order to convince the against agent."* Demo en context: Nika gebruikte Perplexity met Reddit-filter als bron, daarna Vzero voor prototype-iteratie, Veo/Sora voor video. Voor onze workshop is alleen de debat-prompt relevant — uitvoerbaar op gratis ChatGPT zonder Perplexity Pro.

**B3 (blok 3, Friday-in-March als vingerwijzing).** Chatterjee's worked example uit het wiki: een gebruiker zei *"clean things up before the board review"* en de agent — *competent, helpful, working exactly as designed* — soft-deleted twee weken research-history 40 minuten vóór een board meeting. *"The model was not the problem. The problem lived in the layer around the model — the layer that should have recognized 'clean up' as a destructive intent."* Voor de Socratische rondgang: bias-amplificatie werkt zelfde — niet het model is fout, maar de context (frame) waarin het werkt.

**B4 (blok 4, AI-native LD-2-quote).** Globerson et al. (Google Research, april 2026) maken een opmerkelijke keuze: hun **Vantage assessment platform** voor critical thinking neemt *"AI-Supported Exploration"* en *"AI-Supported Verification"* op **als sub-skills van critical thinking zelf**. Sleutelquote: *"The paper treats AI fluency as a sub-component of critical thinking in 2026, not a confounder."* Validatie: Pearson r = 0.88 autorater vs human experts; 188 deelnemers, 373 conversaties.

Voor de transfer-zin: dit kantelt het frame. Niet *"AI vermijden om kritisch te blijven"*, maar *"AI gericht inzetten ALS uitdrukking van kritisch denken"*. Voorbeeld voor docent: *"Wie AI als bevestiger gebruikt, deskilt op critical thinking. Wie AI als Red Team gebruikt, upskilt op critical thinking. Dezelfde chatbot — andere lotsbestemming voor jouw oordeelsvermogen."*

**Bonus B5 (deskilling-waarschuwing voor de plenaire afsluiting).** Anthropic Economic Index Q4 2025: AI-bedekte taken hebben gemiddeld **14.4 jaar** voorspelde onderwijsinhoud; alle taken economy-wide **13.2 jaar**. Meest geraakte beroepen: technical writers, travel agents, **teachers**. Eerste-orde signaal (geen forecast): wie AI laat instromen in cognitief-zware taken, zonder evaluatie-discipline, ziet de eigen vaardigheidsbasis verschuiven naar lagere onderwijsinhoud. Voor de docent als afsluitende waarschuwing — *"jullie zijn over een paar jaar in het werkveld; deze keuze maak je nu."*

---

# Sketch C — "Onderzoeksteam in vier rollen: wat doe jij, wat doet de chatbot?"

**Centrale claim:** Goed onderzoek bestaat uit meerdere rollen (Onderzoeker, Analist, Synthesemaker, Communicator — uit het WS3-schema). Een professional kiest bewust welke taken hij aan de chatbot uitbesteedt en welke hij zelf doet om te groeien. Studenten oefenen deze rolverdeling.

**Aansluiting:** verlengt WS3-schema. Geschikt voor studenten met goedgekeurd PvA in uitvoering (zelfde voorwaarde als WS3). Voedt PROMEF-1 (theorie) + PROMEF-4 (groei).
**Pijler / motivator:** Autonomie (eigen rolverdeling kiezen).
**Tooling-eis:** gratis ChatGPT — vier aparte chats (één per rol) of één chat waarin je expliciet rolwisselt. Beide werken.

## Activiteitenreeks

| Blok | Tijd | Activiteit | Deliverable |
|------|------|-----------|-------------|
| 1. **Het schema als rolverdeling-schema** | 20 min | Docent presenteert het WS3-rollenschema opnieuw, nu door AI-bril: elke rol kan een mens, een chatbot, of mens+chatbot zijn. Plenaire vraag: *"wie bepaalt welke?"*. Theoretisch concept: de **Regisseur** (mens) blijft, anderen zijn deels delegeerbaar. Centrale spanning: **wat je delegeert, daar groei je niet in** — koppeling naar PROMEF-criterium 4. | Geannoteerd schema op flip |
| 2. **Vul je rolverdeling in** | 30 min | Per duo: A3 "Onderzoeksteam-canvas" — vier kolommen (Onderzoeker, Analist, Synthesemaker, Communicator). Plak per rol: 🤖 chatbot · 👤 ik · 🤝 samen. Verplicht: één concrete taak per kolom uit hun eigen lopende onderzoek. Docent loopt rond, vraagt Socratisch: *"waarom houd je dit vast? wat groei je dan? wat verlies je als je dit weggeeft?"* | A3 "Onderzoeksteam-canvas" |
| 3. **Mini-experiment in de praktijk** | 25 min | Duo's kiezen één 🤖-cel en voeren het uit: open chat, schrijf rolprompt, doe de taak, evalueer output. Documenteer op A3 in een vier-kolommentabel: **prompt → output → wat ik ermee deed → wat ik anders wist dan de chatbot**. Plus de drie evaluatievragen onderaan: *wat werkte / wat faalde / wat was interessant fout?* | Vier-kolommentabel + drie evaluatie-zinnen |
| 4. **Twee PROMEF-zinnen + AI-native zin** | 15 min | Drie zinnen per student: (1) PROMEF-1: *"Het schema, gelezen door de [3-staps-]flywheel-lens, helpt mij theoretisch om uit te leggen welke rollen ik delegeer en welke ik vasthoud"*; (2) PROMEF-4: *"Ik ben gegroeid in de rol [X] zichtbaar in dat ik [taak Y] niet meer aan de chatbot uitbesteed"*; (3) transfer: *"In mijn toekomstige werk verdeel ik rollen tussen mij en AI op basis van het principe 'wat ik delegeer, daar groei ik niet in'."* | Drie zinnen per student |

## Verrijking uit wiki — docent-ankers

> Volledig research log: [`inspiration/2026-05-10-sketch-c-rolverdeling-canvas-research-log.md`](../inspiration/2026-05-10-sketch-c-rolverdeling-canvas-research-log.md)

**C1 (blok 1, tacit-dimension breach als opener).** *"Tacit expertise was a moat. The model breached that moat — not by codifying tacit knowledge but by inferring it from behavioral traces at scale."* — Kiron & Schrage 2026 (MIT Sloan Management Review). Mechanisme: LLM's absorberen *hoe experts werken* uit gedragssporen, inclusief kennis die experts zelf nooit articuleerden. Anekdote om in te brengen: Boris Cherny (Anthropic, Claude Code lead) gaf Claude tools om met zijn filesystem te interacteren — *"It was mind-blowing — the model began exploring the system on its own. He had not programmed that capability."*

Voor blok 1: dit motiveert de centrale spanning. Niet langer: "wat kan AI nog niet?" — maar: "**wat moet ik vasthouden om te blijven groeien?"**.

**C2 (blok 2, de 3-staps-flywheel als rolverdelings­kompas).** Kiron & Schrage's *verification → evaluation → learning capture* werkt als directe bron voor het canvas:

| Rol | Wat de chatbot kan doen (🤖) | Wat de mens (student) moet doen (👤) |
|-----|-----------------------------|--------------------------------------|
| **Onderzoeker** (zoeken, scannen) | Verification van bronnen tegen bestaande standaarden | Evaluation: wat onthult deze bron over mijn aanname? + Capture |
| **Analist** (data structureren) | Verification van patronen tegen verwachtingen | Evaluation: wat is *interestingly wrong*? Welke nieuwe vraag rijst? |
| **Synthesemaker** (verbanden leggen) | Verification van consistency over verschillende formuleringen | Evaluation = mens-vast (oordeel over wat de output onthult) |
| **Communicator** (afstemmen op publiek) | Verification van toon/registratie | Evaluation = mens-vast (wat resoneert in deze context?) |

Sleutel-quote voor de Socratische rondgang: *"Without that prior work, only two moves exist: Accept or reject. With it, a third move opens up: Stay in the encounter and learn."* — Kiron & Schrage 2026. Confronterende vraag bij elk 🤖-cel: *"Heb jij al de expertise om deze output te evalueren? Of accepteer/verwerp je alleen?"*

**C3 (blok 3, de drie evaluatievragen).** *"After every significant AI interaction, users should ask three questions: What worked? What failed? **What was *interestingly* wrong**?"* — Kiron & Schrage 2026. *"The third question is where hidden value lives. An output that fails in a way the expert noticed but had not yet named becomes new organizational knowledge."*

Toepassing in blok 3: de vier-kolommentabel (prompt → output → wat ik ermee deed → wat ik anders wist) wordt verrijkt met deze drie vragen onderaan. Kolom 4 (jouw expertise) krijgt operationele invulling: *"Wat zat er in deze output dat de chatbot niet kon weten omdat ik het zelf was tegengekomen in mijn gastorganisatie?"* Plus bonus: *"Welke vraag riep deze output op die ik vooraf niet had?"* — dat is de *nieuwe standaard* die in evaluation ontstaat.

Cherny's CLAUDE.md-pattern als minimale studentvariant: een eigen "AI-leerlogboek" — Word-document of papier — waar de student na elke chatbot-interactie kort de drie vragen beantwoordt. *"The cycle is the point."*

**C4 (blok 4, twee absolute citaten voor PROMEF-zinnen).**
- **Voor PROMEF-criterium 4:** *"The expert as evaluator is not a transitional role."* — Kiron & Schrage 2026
- **Voor de transfer-zin:** *"AI fluency as a sub-component of critical thinking in 2026, not a confounder."* — Globerson et al. 2026
- **Voor de eight-words-shift Jaana Dogan-stijl:** *"It's not perfect and I'm iterating on it."* (Dogan, principal engineer Google Gemini API, via Kiron-Schrage)

Voor de docent: bovenstaande quotes geven de studenten taal om PROMEF-criterium 4 hard te maken zonder vaag *"ik ben kritischer geworden"*. Concreet: *"Ik ben gegroeid in de rol Evaluator: zichtbaar in dat ik mijn chatbot-output niet meer accepteer/verwerp, maar er na elk gesprek de drie vragen op stel — wat werkte, wat faalde, wat was interessant fout — en dat ik daar [concreet voorbeeld uit eigen onderzoek] uit heb geleerd."*

**Bonus C5 (statistische onderbouwing voor de plenaire afsluiting).** Ransbotham et al. (MIT SMR × BCG, n=3,467 wereldwijd):
- Orgs met systematische human-AI feedback-loops zijn **6× vaker** financieel succesvol
- *Learning with AI* orgs zijn **73% vaker** significant succesvol
- Combinatie org-learning + AI-specifiek leren = **tot 80% effectiever** bij onbekendheidsmanagement
- Slechts **15%** van organisaties zijn *Augmented Learners* (combinatie); 59% zijn *Limited Learners*

Voor de student in opmaat naar PROMEF en werkveld: *"Dit is geen academische luxe. Dit is het verschil tussen consumeren en compounderen — tussen depreciëren en appreciëren als professional."*

---

## Vergelijking schetsen op één pagina

| Dimensie | Sketch A — Chatbot-recept | Sketch B — Red Team-rollen | Sketch C — Rolverdeling-canvas |
|----------|--------------------------|----------------------------|-------------------------------|
| **Bouwt op** | WS2 scan-prompt | WS2 aannames + WS3 Red Team | WS3 rollenschema |
| **Plek in programma** | direct na WS2 | tijdens PvA-uitvoering | na WS3, voor PROMEF |
| **Pink-motivator** | Meesterschap | Zingeving | Autonomie |
| **Eindproduct studenten** | A3 chatbot-recept | Bijgewerkt A3 + PROMEF-zin | A3 team-canvas + 3 zinnen |
| **PROMEF-koppeling** | impliciet | criterium 4 (groei) | criterium 1 + 4 |
| **Tooling-eis** | gratis ChatGPT, 1 chat | gratis ChatGPT, 3 chats (divergent) + 1 chat (convergent debat) | gratis ChatGPT, 1–4 chats |
| **Tech-drempel student** | midden | laag | laag |
| **Voorwaarde** | WS2 afgerond | WS2-output meenemen | WS3 + goedgekeurd PvA |
| **Centrale spanning** | One-shot vs. gesprek | Bevestiging vs. weerlegging | Wat delegeren, wat groeien |
| **Kern-wikibron** | Karpathy + Chatterjee + Dell'Acqua | Boussioux + Globerson | Kiron-Schrage + Globerson |
| **Sleutelquote** | *"You can outsource your thinking, but you can't outsource your understanding."* | *"AI fluency as a sub-component of critical thinking in 2026, not a confounder."* | *"The expert as evaluator is not a transitional role."* |
| **AI-native transfer (LD-2)** | rol/geheugen/check/stop werkt op elke chatbot | rolprompts werken bij elke beslissing | rolverdeling = vaardigheid voor elk AI-werkproces |

---

## Verificatie tegen acceptatiecriteria

Voor elke sketch:

| Criterium | A | B | C |
|-----------|---|---|---|
| 90 min strikt verdeeld over 3–4 blokken | ✅ 4 blokken (20+35+25+10) | ✅ 4 blokken (15+20+15+25+15) — blok 2 gesplitst in 2a (divergent) + 2b (convergent) | ✅ 4 blokken (20+30+25+15) |
| Per blok één tastbare deliverable | ✅ | ✅ | ✅ |
| Pink-motivator expliciet benoemd | ✅ Meesterschap | ✅ Zingeving | ✅ Autonomie |
| Werkt op eigen onderzoeksvraag van de student | ✅ vraag + bron | ✅ top-3 aannames uit WS2 | ✅ lopend onderzoek |
| Eindigt met persoonlijke oogst gekoppeld aan PvA/PROMEF | ✅ PvA + tool-transfer | ✅ PROMEF-4 + transfer | ✅ PROMEF-1+4 + transfer |
| Voldoet aan analoog/digitaal-balans (max 15–20 min schermtijd per blok) | ✅ 15 min in blok 2 | ✅ ~20 min in blok 2 | ✅ 15 min in blok 3 |
| Bevat minstens twee inhoudelijke ankers uit wiki-research log | ✅ A1–A5 (5 ankers) | ✅ B1–B5 (5 ankers) | ✅ C1–C5 (5 ankers) |
| Volledig uitvoerbaar op gratis ChatGPT | ✅ 1 chat | ✅ 3 nieuwe chats per aanname | ✅ 1–4 chats |
| Tweede leerdoel (LD-2 AI-native) zichtbaar in de oogst | ✅ blok 4 transfer-zin | ✅ blok 4 transfer-zin | ✅ blok 4 transfer-zin |
| Studentmateriaal gebruikt geen technisch jargon | ✅ "rol/geheugen/check/stop" i.p.v. "harness" | ✅ "rolprompt-kaart" | ✅ "🤖/👤/🤝" i.p.v. "orchestration" |

---

## Eindleveringen

1. **Deze SKETCHES.md** — drie sketches met wiki-verrijking
2. Drie research logs in `../inspiration/`:
   - `2026-05-10-sketch-a-chatbot-recept-research-log.md`
   - `2026-05-10-sketch-b-red-team-rollen-research-log.md`
   - `2026-05-10-sketch-c-rolverdeling-canvas-research-log.md`

## Volgende stap (optioneel)

Wanneer één sketch geselecteerd wordt voor uitwerking tot volledige LRD (à la `LRD-Workshop-2.md` of `PRD_Workshop_Rollen_Adviestrajecten.md`):
- Ontwikkel docentslides + handout per blok
- Test rolprompt-kaarten (Sketch B) op gratis ChatGPT vóór de zaal
- Maak A3-werkbladen (Sketches A en C) als printbare PDF
- Eventueel een gerichte tweede iterative-wiki-query op het specifieke uitvoeringsvraagstuk dat overblijft (bijv. *"hoe ontwerp je rolprompts die robuust zijn op de gratis ChatGPT-tier?"* of *"welke evaluatie-rubric werkt voor 19-jarige studenten zonder pedagogiek-achtergrond?"*).
