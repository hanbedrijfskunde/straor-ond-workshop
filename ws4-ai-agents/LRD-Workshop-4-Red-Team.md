# Learner Requirement Document — Onderzoek, Sessie 4

**Module:** Strategie en Organisatieontwikkeling (STRAOR23)
**Onderdeel:** Onderzoeken (STRA0R23-OND)
**Sessie:** Werkcollege Onderzoek #4 — Aannames-killer: de chatbot als Red Team voor je onderzoeksontwerp
**Aansluitend bij:** Plan van Aanpak in uitvoering (na WS2 + WS3); enkele weken vóór PROMEF-eindassessment F-cluster
**Duur:** 90 minuten
**Werkvorm:** duo's (eigen projectgroep van 2)
**Toetsing:** uitsluitend formatief — geen cijfer; output voedt het PvA H4 én de Handin-reflectie (PROMEF-criterium 4)
**Docent:** Witek ten Hove
**Materialen-pakket:** vier losse bijlagen in [`materialen/`](materialen/) (rolprompt-kaarten · echo-kamer-demo-script · flip-over-template · PROMEF-zin-werkblad)

---

## 1. Context en positionering

WS2 introduceerde AI als *one-shot scan-prompt*: één artikel, één prompt, 15 minuten schermtijd. Studenten gebruiken AI sindsdien grotendeels **consumptief** (samenvattingen ophalen) — niet **kritisch** (eigen aannames toetsen). Deze sessie verschuift dat: van AI als zoekmachine naar AI als kritische tegenspeler.

**Drie patronen die we doorbreken:**

1. **De chatbot als ja-knikker.** Studenten formuleren prompts die om bevestiging vragen ("klopt het dat..."). De chatbot levert die bevestiging op, ook als de aanname zwak is. Het mechanisme heet **bias-amplificatie**: AI volgt het frame van de prompt. Hetzelfde model produceert een tegenovergesteld antwoord als je het frame omkeert.

2. **Automation bias.** *We geloven het scherm.* Een goed-gestructureerd, vlot geformuleerd antwoord wordt sneller geaccepteerd dan een rommelig handmatig onderzoek — ook als het inhoudelijk fouter is. Empirische ondersteuning: in een gerandomiseerd experiment met 758 BCG-consultants leverde AI-gebruik **buiten de capability-frontier −19 procentpunten correctheid** terwijl de output *overtuigender* leek (Dell'Acqua et al., Organization Science 2026).

3. **Kritisch denken vs. AI vermijden.** Een hardnekkige misvatting in onderwijscontext: "wie kritisch wil blijven, moet AI vermijden." Het tegendeel is in 2026 academisch gangbaar geworden. De Vantage-rubric voor critical thinking (Globerson et al., Google Research 2026) neemt **"AI-Supported Exploration" en "AI-Supported Verification"** expliciet op als sub-skills *binnen* critical thinking, niet als een confounder. Wie AI als bevestiger gebruikt deskilt; wie AI als Red Team gebruikt upskilt. *Dezelfde chatbot, andere lotsbestemming voor je oordeelsvermogen.*

**Startpositie studenten:** afgeronde onderzoeksvraag uit WS1, gemarkeerde top-3 aannames uit WS2-flip-over, lopend uitvoeringstraject van het PvA. WS3 is afgerond — studenten zijn vertrouwd met Red Team-spiegel als werkvorm uit een mens-mens-context.

**Les uit WS1+WS2:** papier-eerst werkt aanzienlijk beter dan digitaal. Schermtijd in deze sessie is bewust afgebakend — 4 chats per duo (3 in blok 2a, 1 in blok 2b) — verder is alles analoog (flip-over, A3, post-its, werkblad).

---

## 2. Eindkwalificaties als uitgangspunt

**Leeruitkomst A:** *De junior organisatieadviseur voert een interne- en externe organisatieanalyse uit dat resulteert in een businessmodel...*

> *Relatie tot deze sessie:* studenten leren hun externe-bron-werk uit WS2 te verdiepen door AI-output kritisch te bevragen via tegengestelde rolprompts en gestuurd debat. Externe kennisopbouw wordt niet bevestigend, maar weerleggend georganiseerd.

**Leeruitkomst B:** *De junior organisatieadviseur begeleidt een organisatie bij veranderingsprocessen... en draagt zorg voor het realiseren en verankeren van de oplossing.*

> *Relatie tot deze sessie:* een onderzoek dat steunt op niet-getoetste aannames produceert oplossingen die niet verankeren. Studenten leren hun top-3 aannames te confronteren met AI-tegenspraak en daaruit een **toetsbare hypothese-lijst** voor het veld te destilleren.

---

## 3. Leerdoelen sessie

Twee leerdoelen — één discipline-specifiek, één AI-native werkhoudings-leerdoel.

| # | Bloom (revised) | Leerdoel | PROMEF-koppeling |
|---|-----------------|----------|------------------|
| L1 | Understand · Conceptual | Het mechanisme van **bias-amplificatie** en **automation bias** in AI-output benoemen, en herkennen in eigen chatbot-gesprekken. | Voorwaarde voor 4 |
| L2 | Apply · Procedural | Drie verschillende **rolprompts** (skeptische peer / domein-expert / ethicus) inzetten op de eigen top-3 aannames, en de output kritisch interpreteren in plaats van letterlijk overnemen. | 4 (gedrag) |
| L3 | Analyze · Conceptual | Een **twee-agent debat** opzetten waarvan de eindsynthese een toetsbare hypothese-lijst voor het veld oplevert. | 4 (beroepsproduct) |
| L4 | Evaluate · Metacognitive | De eigen top-3 aannames bijwerken op basis van de chatbot-tegenspraak: welke is *zwakker*, welke *sterker*, welke moet *écht* getoetst worden in het veld. | 4 (groei) |
| L5 | Create · Metacognitive | Een PROMEF-zin (criterium 4) **plus** een transfer-zin (LD-2 AI-native) formuleren die concreet gedrag laat zien — niet *"ik ben kritischer geworden"* maar *"ik gebruik AI als Red Team door X, zichtbaar in dat ik aanname Y heb laten vallen."* | 4 (groei zichtbaar) |

L1–L3 leveren de techniek; L4–L5 leveren de PROMEF-criterium-4-uitspraak.

**Tweede leerdoel (LD-2 AI-native werkhouding)**: studenten benoemen wat van deze techniek transfereerbaar is naar elke toekomstige AI-tool (Copilot, Claude, Gemini, agent-frameworks). Het principe **rolprompt → tegenspraak → synthese** is platform-onafhankelijk.

---

## 4. Ontwerpcriteria

### Daniel Pink's motivatiefactoren

| Blok | Motivator | Hoe |
|------|-----------|-----|
| Blok 1 (Echo-kamer demo) | **Zingeving** | Confrontatie met eigen vertrouwen in AI; *"jullie eigen aannames staan zo op het scherm"* maakt het persoonlijk |
| Blok 2a (Drie rolprompts) | **Meesterschap** | Stapsgewijs leren prompten met rol-instructies; direct toepasbare techniek |
| Blok 2b (Twee-agent debat) | **Meesterschap** | Convergente synthese-techniek; eindigt met direct gebruiksklare lijst |
| Blok 3 (Update top-3) | **Autonomie** | Eigen keuzes welke aanname te laten vallen of vasthouden; docent stelt vragen, schrijft niets voor |
| Blok 4 (PROMEF + transfer) | **Autonomie** + **Zingeving** | Eigen woorden voor PROMEF-zin; beroepsidentiteit-vorming |

### KISS

Vier blokken, vier kaarten, één doorlopende casus (eigen onderzoek). Géén theorie-introductie over bias of LLM-werking — die concepten landen via de live demo en de Socratische confrontatie. Volledig gericht op doen.

### Balans analoog vs. digitaal

| Activiteit | Medium | Reden |
|------------|--------|-------|
| Echo-kamer demo (Blok 1, plenair) | **Digitaal** — geprojecteerde laptop docent | Studenten moeten het frame-effect *live* zien, niet horen |
| Drie rolprompts runnen (Blok 2a, 15 min) | **Digitaal** — laptop/telefoon | Noodzakelijk; afgebakend op ~9 chats per duo binnen 15 min |
| Output op flip-over noteren (Blok 2a, slot) | **Analoog** — flip-over | Laptops dicht; eigen interpretatie op papier |
| Twee-agent debat runnen (Blok 2b, 10 min) | **Digitaal** — laptop | Noodzakelijk; één chat per duo |
| Hypothese-lijst noteren (Blok 2b, slot) | **Analoog** — flip-over | Synthese in eigen woorden |
| Top-3 aannames updaten (Blok 3) | **Analoog** — A3 uit WS2 | Hetzelfde A3 als WS2; continuïteit zichtbaar |
| PROMEF-zin schrijven (Blok 4) | **Analoog** — werkblad | Eigen handschrift = eigen woorden |

Totaal schermtijd: ~25 minuten (3 + 15 + 10 — niet aaneengesloten). Studenten zitten meer dan twee derde van de sessie zonder scherm.

---

## 5. Activiteitenreeks (90 min, 4 blokken — overzicht)

| # | Blok | Tijd | Bloom | PROMEF | Werkvorm |
|---|------|------|-------|--------|----------|
| 1 | **De echo-kamer demo** — docent toont live op de projector hoe twee tegengestelde prompts (bevestigen vs. weerleggen) op dezelfde aanname twee verschillende, beide overtuigende antwoorden produceren. Plenaire benoeming bias-amplificatie + automation bias. | 15 min | L1 | voorwaardelijk | Plenair |
| 2a | **Drie rolprompts × top-3 aannames** (divergentie) — duo's runnen kaart 1 (skeptische peer), 2 (domein-expert), 3 (ethicus) op hun top-3 aannames in drie aparte chats. Output op flip-over als matrix "Drie stemmen × drie aannames". | 20 min | L2 | 4 | Duo + docent |
| 2b | **Twee-agent debat** (convergentie) — duo's kiezen één meest-contested aanname; runnen kaart 4 (debat-prompt) in één chat (15 rondes); noteren de synthese-uitkomst als toetsbare hypothese-lijst. | 15 min | L3 | 4 | Duo |
| 3 | **Wat heb ik gemist?** — duo's updaten top-3 aannames op A3 uit WS2: wat is zwakker, sterker, écht-te-toetsen? Confronterende docent-rondgang. Kort plenair delen. | 25 min | L4 | 4 | Duo + docent + plenair |
| 4 | **PROMEF-zin + transfer-zin** — werkblad: één PROMEF-criterium-4-zin + één transfer-zin (LD-2). Plenaire ronde één zin per duo. Foto's voor Handin. | 15 min | L5 | 4 + LD-2 | Individueel + plenair |

Totaal: 15 + 20 + 15 + 25 + 15 = 90 min.

---

## 6. Sessieontwerp — fijnmazig docent-draaiboek

Klokmomenten zijn richtinggevend, niet absoluut. Bij rate-limit op gratis ChatGPT zie sectie *11 — Voorbereiding docent — pre-test* voor backup-plan.

### Blok 1 — De echo-kamer demo (15 min)

*Motivator: Zingeving | Vaardigheid: bias-amplificatie en automation bias herkennen*

**Doel:** studenten zien live dat dezelfde chatbot twee tegengestelde antwoorden produceert op dezelfde aanname, afhankelijk van het frame. Ze verlaten het blok met de woorden *bias-amplificatie* en *automation bias* in hun vocabulaire en gekoppeld aan een visueel geheugen.

**Materialen:** echo-kamer-demo-script (zie [`materialen/echo-kamer-demo-script.md`](materialen/echo-kamer-demo-script.md)) · projector + laptop docent met geopend gratis-ChatGPT-account · twee reserve-aannames (vooraf getest)

#### Klokmomenten

| T+ | Wie | Wat |
|----|-----|-----|
| 0–2 | Docent (plenair) | Opent de sessie. *"Vandaag onderzoeken we niet AI — we onderzoeken jullie eigen aannames met AI als gereedschap. Eerst een live experiment."* Geen slides over LLM-werking. |
| 2–4 | Docent (plenair) | Vraagt één student een aanname uit zijn/haar WS2-flip-over te noemen. Selecteert er één die zich leent voor frame-omkering (zie pre-test-criteria in §11). Schrijft de aanname op flip-over zichtbaar voor de zaal. |
| 4–8 | Docent (live demo) | Opent **chat 1** (gratis ChatGPT). Plakt **prompt-A** (bevestigingsframe, patroon-georiënteerd): *"Stel dat je een organisatieadviseur bent die de stelling [aanname] hoort. Geef de drie sterkste argumenten — gebaseerd op algemeen bekende mechanismen in dit type situaties — waarom deze stelling waarschijnlijk klopt."* Volledige prompt-tekst zie [`materialen/echo-kamer-demo-script.md`](materialen/echo-kamer-demo-script.md). Leest output mee — stopt na ~30 seconden. Vraagt zaal: *"klinkt dit overtuigend?"* (verwacht: ja) |
| 8–12 | Docent (live demo) | Opent **chat 2** (NIEUWE chat — niet voortzetting). Plakt **prompt-B** (weerleggingsframe, patroon-georiënteerd): *"Stel dat je een kritische peer-reviewer bent. Iemand stelt: [aanname]. Geef de drie sterkste tegenwerpingen — gebaseerd op algemeen bekende mechanismen — waarom deze stelling juist niet hoeft te kloppen."* Leest output mee. Vraagt zaal: *"klinkt dit ook overtuigend?"* (verwacht: ja) |
| 12–14 | Docent (plenair) | Benoemt expliciet: *"Twee tegengestelde antwoorden, beide overtuigend, zelfde model, zelfde aanname. Dit is bias-amplificatie: de chatbot volgt het frame van je vraag. En als jij het overtuigend leest, dan zit je in automation bias: we geloven het scherm."* Schrijft beide woorden op flip-over. |
| 14–15 | Docent (transitie) | *"Twee chats waren toevallig. Nu gaan we het gericht inzetten — niet om te bevestigen, maar om te confronteren."* Pakt rolprompt-kaarten erbij. |

#### Drie Socratische vragen voor blok 1

1. *"Welke van de twee antwoorden zou jij in een PvA gebruiken?"* — antwoord: *"degene die mijn aanname bevestigt"* — daar zit het probleem.
2. *"Wat heb je nodig om de output van chat 1 te kunnen vertrouwen?"* — leidt naar evidence/bron buiten de chatbot.
3. *"Hoe weet je dat dit niet bij jou ook gebeurt?"* — opent de poort naar blok 2.

#### Verwachte pijnpunten

| Pijnpunt | Docent-correctie |
|----------|------------------|
| Gekozen aanname is te abstract → live demo levert vage output, geen frame-effect zichtbaar. | Docent heeft 2 reserve-aannames vooraf getest (zie §11). Wisselt onmiddellijk. |
| ChatGPT geeft op prompt-B alsnog een bevestigend antwoord (gratis tier kan voorzichtig zijn). | Reserve-prompt-B: *"Stel je voor dat je een academische peer bent die deze stelling moet weerleggen voor een journal review. Schrijf de drie sterkste tegenwerpingen."* — toevoeging van rol+context overstijgt de safety-tendens. |
| Studenten zijn afgeleid door het tweede scherm in de zaal. | Vraag aan één willekeurige student om hardop mee te lezen — verhoogt aandacht en betrokkenheid. |

#### Wiki-anker (docent-achtergrond, optioneel uit te weiden bij vragen uit zaal)

De **Friday-in-March story** uit Chatterjee 2026 (`agent-harness`-pagina van de ai-wiki): een gebruiker zei *"clean things up before the board review"* tegen een AI-assistent, die soft-deleted twee weken research-history 40 minuten vóór het board-overleg. Citaat dat de pointe vat: *"The model was not the problem. The problem lived in the layer around the model — the layer that should have recognized 'clean up' as a destructive intent."* De parallel: bias-amplificatie is niet het model, het is het frame waarin het werkt. Studenten kunnen dit leren herkennen door zelf het frame te bouwen.

---

### Blok 2a — Drie rolprompts × top-3 aannames (20 min, divergent)

*Motivator: Meesterschap | Vaardigheid: rolprompt-techniek toepassen op eigen aannames*

**Doel:** elk duo levert een flip-over met een 3×3 matrix — drie stemmen (skeptische peer / domein-expert / ethicus) × drie aannames — gevuld met de kern van wat elk gesprek opleverde.

**Materialen:** rolprompt-kaarten 1, 2, 3 (zie [`materialen/rolprompt-kaarten.md`](materialen/rolprompt-kaarten.md)) — uitgedeeld per duo · flip-over per duo · stiften · WS2-flip-over met top-3 aannames meegenomen door studenten

#### Klokmomenten

| T+ | Wie | Wat |
|----|-----|-----|
| 0–2 | Docent (plenair) | Deelt rolprompt-kaarten 1+2+3 uit (per duo één set). Korte instructie: *"Per aanname drie verschillende chats: één per rol. Open dus negen chats totaal. Plak de rolprompt + één aanname; lees het antwoord; schrijf de kern op flip-over. Niet kopiëren-plakken — de KERN."* Toont de blanco flip-over-template (3 kolommen × 3 rijen) op één voorbeeld-flip. |
| 2–17 | Duo's (digitaal) | Runnen kaart 1, 2, 3 op aanname 1, dan op aanname 2, dan op aanname 3. ~1.5 min per chat. Docent loopt rond. |
| 17–20 | Duo's (analoog) | Laptops dicht. Op flip-over: 3×3 matrix invullen — KERN per cel in 1–2 zinnen. |

#### Cue-momenten voor docent (tijdsbewaking)

- **T+8 cue:** alle duo's moeten kaart 1 hebben gerund op aanname 1. Bij twijfel: *"jullie zitten waar?"* — als achter, vraag focus op aanname 1+2 (laat aanname 3 vallen indien nodig).
- **T+15 cue:** laatste 2 minuten chats; afronden, flip-over open zetten.

#### Drie Socratische vragen voor blok 2a

1. *"Welke rol gaf jou nieuwe informatie? Welke gaf alleen herhaling?"* — leidt tot inzicht dat één chatbot geen echte expert kan vervangen, alleen een rol-perspectief faken.
2. *"Welke chat overtuigde je het meest? Waarom?"* — triggert herkennen van eigen automation bias.
3. *"Wat schrijf je op de flip-over en wat niet?"* — dwingt tot interpretatie i.p.v. transcriptie.

#### Verwachte pijnpunten

| Pijnpunt | Docent-correctie |
|----------|------------------|
| Studenten kopiëren AI-output letterlijk op flip-over. | *"Wat is de KERN in jullie eigen woorden? Wat zou jullie peer hieruit halen in 30 seconden?"* — dwing reductie. |
| Oppervlakkige rolprompt-output — LLM blijft generiek. | *"Voeg één concreet detail toe vanuit je eigen gastorganisatie en run opnieuw."* — bv. "specifiek voor [naam organisatie] in de [type sector]". |
| Rate-limit op gratis ChatGPT (komt voor bij meer dan 4–5 simultane chats per account). | Backup vooraf afgesproken: claude.ai gratis of Gemini gratis (zie §11). Noteer welke duo's switchen. |
| Drie aannames × drie rollen = negen chats — sommige duo's komen niet rond. | Acceptabel — kwaliteit boven kwantiteit. Cue: minimaal aanname 1 + aanname 2 volledig. Aanname 3 mag onvolledig blijven. |
| Rolprompt-kaart 3 (ethicus) levert moralistische generieke uitspraken. | *"Vraag concreet: welke stakeholder verzwijgt iets in jullie casus? Welk belang? Geef NAMEN of FUNCTIES."* |

#### Wiki-anker (docent-achtergrond)

De rolprompt-techniek is empirisch ondersteund: Boussioux et al. (Organization Science 2024, peer-reviewed, n=300 evaluators × 3,900 evaluator-solution pairs) toonden dat **single-instance HAI met iteratieve rol-instructies** (waar onze drie kaarten een variant van zijn) significant betere kwaliteit (+0.159, p<0.001) en strategische haalbaarheid (+0.133, p<0.01) produceert dan multi-instance independent HAI. Cost-realisme: hun setup kostte $27 vs $2,555 voor menselijke crowd — direct reproduceerbaar op gratis ChatGPT.

---

### Blok 2b — Twee-agent debat (15 min, convergent)

*Motivator: Meesterschap | Vaardigheid: convergente synthese via geforceerd debat*

**Doel:** uit één aanname een toetsbare hypothese-lijst destilleren via een 15-rondes debat tussen twee tegengestelde personas in één chat.

**Materialen:** rolprompt-kaart 4 (zie [`materialen/rolprompt-kaarten.md`](materialen/rolprompt-kaarten.md)) — debat-prompt · flip-over per duo (kan zelfde als 2a, andere helft) · stiften

**Bron-attributie (docent-achtergrond):** de techniek is afgeleid van Marily Nika (AI Product Lead, Google) in *How I AI* podcast. Zie SKETCHES.md anker B6 voor de letterlijke prompt en het commentaar van Clarvo over de bias-correctie-werking.

#### Klokmomenten

| T+ | Wie | Wat |
|----|-----|-----|
| 0–2 | Docent (plenair) | *"Eén aanname uit jullie 3×3-matrix waar het meeste tegenspraak op kwam. Daar gaan we nu dieper op. Kaart 4 — twee personas, één chat, 15 rondes geforceerd debat. Aan het eind vraagt de prompt: wat zou er moeten gelden om de TEGEN-persona te overtuigen?"* Deelt kaart 4 uit. |
| 2–4 | Duo's | Kiezen meest-contested aanname uit blok 2a. Maakt expliciet welke. |
| 4–12 | Duo's (digitaal) | Plakken kaart 4 + de gekozen aanname in NIEUWE chat. Lezen het debat. Als debat na 5 rondes inhoudelijk verzwakt: vervolgprompt *"ga door, maak per ronde minstens één concreet nieuw argument"*. |
| 12–15 | Duo's (analoog) | Op flip-over: noteren de **synthese-uitkomst** als toetsbare hypothese-lijst — *"om mijn aanname overeind te houden in het veld moet gelden dat..."*. |

#### Drie Socratische vragen voor blok 2b

1. *"Welke ronde leverde het meest verrassende argument?"* — train herkennen van *interestingly wrong* output.
2. *"Wat staat in jullie hypothese-lijst dat je pas weet door dit debat?"* — maakt nieuwe kennis expliciet.
3. *"Welke hypothese kun je het snelst toetsen in je gastorganisatie?"* — bridge naar blok 3.

#### Verwachte pijnpunten

| Pijnpunt | Docent-correctie |
|----------|------------------|
| Debat valt na 5 rondes stil ("we agree to disagree"). | Vervolgprompt aanreiken: *"Ga door. Maak per ronde minstens één concreet nieuw argument. Verbied algemeenheden."* |
| Synthese-uitkomst is een lijst vage features ("meer transparantie", "beter draagvlak"). | *"Specificeer voor JULLIE gastorganisatie. Wat zou er CONCREET moeten gelden — welk gedrag, welke meting, welk besluit?"* |
| Duo kopieert de hele eindlijst zonder bewerking. | *"Welke punt is het meest urgent te toetsen? Wat is jullie beste kandidaat-onderzoeksmethode?"* — koppeling naar A3-update in blok 3. |

---

### Blok 3 — Wat heb ik gemist? (25 min)

*Motivator: Autonomie | Vaardigheid: top-3 aannames bijwerken op basis van AI-tegenspraak*

**Doel:** elk duo levert een **bijgewerkt A3** (uit WS2) met drie nieuwe markers: 🔻 zwakste aanname (laat vallen of herformuleren), 🔺 sterkste aanname (heeft nu inhoudelijke steun), ❗ urgent te toetsen aanname (de drie-kolom-A3 uit WS2 wordt geüpdatet, niet vervangen).

**Materialen:** WS2 A3 (meegenomen door studenten) · drie post-it-kleuren (rood/groen/geel) · stiften · flip-overs uit blok 2a en 2b open op tafel

#### Klokmomenten

| T+ | Wie | Wat |
|----|-----|-----|
| 0–3 | Docent (plenair) | *"Open jullie WS2-A3. Met je flip-overs uit blok 2 erbij. Drie vragen vandaag: welke aanname is na blok 2 zwakker geworden? Welke is sterker geworden? Welke moet je écht in het veld toetsen?"* Toont voorbeeld op een flip-over hoe de drie post-its op het A3 te plaatsen. |
| 3–18 | Duo's (analoog) | Update A3. Plakken 🔻🔺❗ post-its bij de relevante aannames met een korte motivering ernaast. Docent loopt rond Socratisch. |
| 18–22 | Docent (rondgang) | Stelt de **confronterende** vraag aan elk duo: *"welke rolprompt heb je niet gegeven omdat het antwoord je niet uitkwam?"* — dit is bias-amplificatie in actie, herkennen helpt. |
| 22–25 | Plenair | Eén duo per twee tafels deelt: *"onze sterkste aanname werd ons zwakste"* of *"we hadden zorg X niet zien aankomen"*. Geen discussie — alleen oogst. |

#### Cue-momenten

- **T+10 cue:** elk duo moet minstens één post-it geplakt hebben. Bij stilstand: *"begin met de zwakste — welke chat haalde een been onder een aanname uit?"*
- **T+20 cue:** rondgang afronden, plenair starten.

#### Drie Socratische vragen voor blok 3

1. *"Welke aanname overleeft het Red Team niet — en waarom kostte dat moeite om te accepteren?"* — bevestigt eigenaarschap van het inzicht.
2. *"Welke hypothese uit blok 2b past bij welk veld-instrument? (interview, observatie, document-analyse, enquête)"* — bridge naar PvA H4.
3. *"Wie in jullie projectgroep gaat dit als eerste toetsen, hoe, wanneer?"* — concreetheid afdwingen.

#### Verwachte pijnpunten

| Pijnpunt | Docent-correctie |
|----------|------------------|
| Studenten houden vast aan oorspronkelijke top-3, willen niets laten vallen. | *"Schrijf op WAAROM je deze aanname per se vasthoudt. Wie zegt dit? Welk belang heeft die persoon? Mag jullie peer dit lezen?"* — verbinding met WS2-patroon. |
| "Alle aannames zijn nu zwakker" — geen onderscheid. | Forceer rangschikking: *"plak één rode post-it, één groene, één gele. Geen vier rode."* |
| Studenten praten over wat AI zei in plaats van eigen oordeel. | *"Wat denk jij — niet wat de chatbot zei. Sluit je laptop. Welke aanname overleeft jouw eigen blik?"* |
| Duo kan de "rolprompt-die-je-niet-stelde"-vraag niet beantwoorden. | Reformuleer: *"als je nu eerlijk reflecteert: welke rol zou jullie aanname hebben gesloopt? Hebben jullie die rol bewust vermeden?"* |

#### Wiki-anker (docent-achtergrond)

De drie evaluatievragen *"wat werkte? wat faalde? wat was interessant fout?"* (Kiron & Schrage 2026, MIT Sloan Management Review) zijn een mogelijke verdiepingsvraag bij het rondlopen — vooral de derde: een output die fout is op een manier die je niet had benoemd, is nieuwe organisatie-kennis. *"That's where hidden value lives."*

---

### Blok 4 — PROMEF-zin + transfer-zin (15 min)

*Motivator: Autonomie + Zingeving | Vaardigheid: groei concreet articuleren in PROMEF-taal*

**Doel:** elke individuele student levert twee zinnen op het werkblad: één PROMEF-criterium-4-zin (groei zichtbaar in concreet gedrag) en één transfer-zin (LD-2 AI-native werkhouding).

**Materialen:** PROMEF-zin-werkblad (zie [`materialen/promef-zin-werkblad.md`](materialen/promef-zin-werkblad.md)) per student · pen · flip-overs en A3 zichtbaar op tafel

#### Klokmomenten

| T+ | Wie | Wat |
|----|-----|-----|
| 0–3 | Docent (plenair) | *"Twee zinnen, individueel. Eén PROMEF-zin: 'Ik gebruik AI als Red Team door [concreet voorbeeld], zichtbaar in [aanname die ik heb laten vallen]'. Eén transfer-zin: 'In een toekomstige werksetting zet ik dezelfde drie rollen in op [welke beslissing]'."* Toont het werkblad. Benoemt twee voorbeelden — één goed, één te abstract — uit het werkblad. |
| 3–10 | Studenten (analoog, individueel) | Schrijven beide zinnen op het werkblad. |
| 10–14 | Plenair | Eén student per duo deelt **één van de twee** zinnen hardop. Korte plenaire ronde. Docent reageert met één van: *"helder"* / *"concreter — wat is het GEDRAG?"* |
| 14–15 | Docent (afsluiting) | *"Foto van je werkblad → in je Handin als bijlage. Je zin van vandaag is een bouwsteen voor je criterium-4-uitspraak in het PROMEF-gesprek straks."* |

#### Drie Socratische vragen voor blok 4

1. *"Wat staat er in jouw zin dat een ander niet zou kunnen schrijven?"* — eigenheid afdwingen.
2. *"Als ik je zin lees over een half jaar — kan ik dan reconstrueren WAT je deed?"* — concreetheid-test.
3. *"Welke tool noemt jouw transfer-zin? En welk principe?"* — toetst LD-2 (principe boven tool).

#### Verwachte pijnpunten

| Pijnpunt | Docent-correctie |
|----------|------------------|
| PROMEF-zin blijft abstract: *"ik ben kritischer geworden"*. | *"Vervang 'kritischer' door een gedrag van vandaag. WELKE aanname heb je laten vallen, en HOE wist je dat het tijd was?"* |
| Transfer-zin noemt een tool, geen principe: *"ik gebruik altijd ChatGPT om..."*. | *"De tool wisselt over twee jaar. Wat is het PRINCIPE — wat is voor jou de kern, los van de tool?"* |
| Student noemt geen specifieke toekomstige situatie: *"in mijn werk ga ik..."*. | *"Welke beslissing? In welke functie? Bij wat voor gesprek?"* — afdwingen van concreetheid. |
| Twee zinnen klinken hetzelfde. | *"De PROMEF-zin gaat over GISTEREN-VANDAAG. De transfer-zin gaat over MORGEN-OVERMORGEN. Maak dat verschil zichtbaar."* |

---

## 7. Materialen

### Door de docent vooraf voor te bereiden

1. **Echo-kamer-demo-script** — zie [`materialen/echo-kamer-demo-script.md`](materialen/echo-kamer-demo-script.md). Bevat exacte prompts, projectie-cues, en drie reserve-aannames vooraf op gratis ChatGPT getest.
2. **Vier rolprompt-kaarten** — zie [`materialen/rolprompt-kaarten.md`](materialen/rolprompt-kaarten.md). A6-formaat, drukbaar. Elk met (a) rolprompt-tekst woord-voor-woord en (b) één voorbeeld-respons (verwacht type output) zodat de docent kan herkennen of een duo *zinvolle* output binnenhaalt of generieke ruis.
3. **Flip-over-templates** — zie [`materialen/handout-flipover-template.md`](materialen/handout-flipover-template.md). Twee templates: 3×3 matrix voor blok 2a, hypothese-lijst voor blok 2b. Optioneel als handout — kan ook live op flip-over getekend worden.
4. **PROMEF-zin-werkblad** — zie [`materialen/promef-zin-werkblad.md`](materialen/promef-zin-werkblad.md). A4 per student. Bevat zin-templates, twee voorbeeld-zinnen (één goed, één te abstract), en kwaliteitscriteria-tabel.

### Door de docent klaar te zetten in het lokaal

5. Flip-overbladen A1 (minimaal 2 per duo) — één voor blok 2a (3×3 matrix), één voor blok 2b (hypothese-lijst)
6. Drie kleuren post-its (rood/groen/geel) voor blok 3
7. Dikke stiften (minimaal 1 set per duo)
8. Plakband of magneten om flip-overs op te hangen
9. Projector + docent-laptop met geopend gratis-ChatGPT-account (en backup: claude.ai gratis vooraf getest)

### Studenten brengen mee

10. **WS2 A3-werkblad** met top-3 aannames gemarkeerd in de "Dit denk ik / heb ik gehoord"-kolom
11. **WS2 flip-over** of foto daarvan met kolommen "Dit weet ik zeker" en "Dit denk ik / heb ik gehoord"
12. **Onderzoeksvraag uit WS1** (afgeronde versie)
13. **Eén concrete situatie uit hun gastorganisatie** waar één van die top-3 aannames een rol speelde (in 1–2 zinnen, vooraf bedacht)
14. Laptop of telefoon met werkende gratis-ChatGPT-account (vooraf inloggen testen — zie pre-work)

---

## 8. Pre-work voor studenten

Verstuur uiterlijk 48 uur vooraf via LMS:

> **Voorbereiding WS4 (15 minuten)**
>
> 1. Open je WS2-flip-over of foto. **Markeer met dikke stift** je top-3 aannames in de kolom "Dit denk ik / heb ik gehoord". Als je deze al gemarkeerd had, herzie of het nog steeds dezelfde drie zijn.
> 2. **Bedenk in 1–2 zinnen** een concrete situatie uit je gastorganisatie waar één van die aannames een rol speelde. Wie was erbij, wat werd gezegd, wat ging je doen.
> 3. **Test je laptop**: log in op gratis ChatGPT (chat.openai.com). Als dat niet werkt: probeer claude.ai (gratis) of gemini.google.com (gratis) als backup. Kom NIET zonder werkende toegang.
> 4. **Neem mee naar de zaal**: WS2 A3 + foto van WS2 flip-over + WS1 onderzoeksvraag + laptop/telefoon.

Zonder deze voorbereiding is blok 2a niet uitvoerbaar — de student heeft dan geen aannames om de rolprompts op toe te passen.

---

## 9. Voorbereiding docent — pre-test (45 minuten, dag vooraf)

Een werkcollege dat live op de projector een demo doet kan flopppen. Deze pre-test verlaagt dat risico tot bijna nul.

### Pre-test 1: Echo-kamer-demo (10 min)

Test prompt-A en prompt-B uit `materialen/echo-kamer-demo-script.md` op **drie verschillende test-aannames** — kies aannames van het type dat studenten meebrengen. Hieronder staan de **5 hoofdaannames** uit de werkelijke PvA-cohort 2026, geanonimiseerd. Volledige uitwerking (verwachte rolprompt-richting per aanname, parafrase-alternatieven, 2 reserve-aannames, docent-bijlage met bron-tags) in [`materialen/test-aannames-uit-pvas.md`](materialen/test-aannames-uit-pvas.md).

#### De 5 hoofdaannames

**Aanname 1 — HR / medewerker-retentie · internationale semiconductor-fabrikant**

> *"Bij een internationale semiconductor-fabrikant in Zuid-Nederland verlaten internationale medewerkers vroegtijdig de organisatie omdat de onboarding onvoldoende specifiek is ingericht op hun behoeften."*

**Aanname 2 — Klant / vindbaarheid · MKB-horeca**

> *"De website van een MKB-restaurant in een middelgrote Nederlandse stad is onvoldoende SEO-geoptimaliseerd, waardoor potentiële klanten het restaurant niet via online zoekopdrachten vinden."*

**Aanname 3 — Proces / systeemadoptie · zuivel-export**

> *"Bij een internationaal Nederlands zuivel-handelshuis worden de geïmplementeerde IT-systemen (ERP, CRM, BI) onvoldoende benut omdat medewerkers vasthouden aan handmatige Excel-lijsten en analoge werkwijzen."*

**Aanname 4 — Strategie / transitie · industriële machine-fabrikant**

> *"Bij een Nederlandse fabrikant van industriële printing-machines stagneert de transitie naar voorspellend onderhoud (predictive maintenance) omdat de Technical Support-afdeling reactief en proactief is ingericht."*

**Aanname 5 — Technologie-adoptie / gedrag · medical devices**

> *"Bij een internationale fabrikant van orthopedische hulpmiddelen en sportprotheses gebruiken medewerkers Salesforce niet structureel omdat ze nog niet de gewoonte hebben gevormd om er duurzaam mee te werken."*

**Aanbevolen pre-test-set:** kies aannames 1, 2 en 3 — die dekken HR · klant · proces (drie van de vijf typen die studenten meestal in hun WS2-aannames hebben). Bij falen of bij een cohort uit niet-corporate sectoren: zie reserves R1 (onderwijs) en R2 (B2B-service) in `materialen/test-aannames-uit-pvas.md`.

**Slagingscriteria voor het frame-effect:**
- Prompt-A levert minimaal drie inhoudelijk verschillende argumenten waarom de aanname klopt.
- Prompt-B levert minimaal drie inhoudelijk verschillende argumenten waarom hij niet klopt.
- De twee outputs zijn **zichtbaar tegengesteld** (niet "het hangt ervan af" beide kanten op).

Als één van de drie aannames het frame-effect niet oproept (ChatGPT blijft homogeen voorzichtig of zegt "het is genuanceerd"), markeer hem als **niet bruikbaar** en gebruik een ander. Documenteer welke wel werken — die zijn je shortlist voor de live zaal.

### Pre-test 2: Vier rolprompt-kaarten (20 min)

Test alle vier kaarten op één testaanname. **Slagingscriteria:**
- Kaart 1, 2, 3 leveren elk een **inhoudelijk ander** perspectief op (geen drie keer hetzelfde antwoord met andere woorden).
- Kaart 4 (debat) draait minimaal 12 rondes door zonder dat het debat in herhaling vervalt. De synthese-eindstap levert een **toetsbare** hypothese-lijst op (concreet genoeg om in een interview te valideren).

Bij falen: de specifieke kaart lichten de [`materialen/rolprompt-kaarten.md`](materialen/rolprompt-kaarten.md) instructies dieptebijstelling toe (bv. concreter aanname, organisatienaam toevoegen).

### Pre-test 3: Backup-tooling (10 min)

Test alle vier kaarten + echo-kamer-demo op **claude.ai gratis** en **gemini.google.com gratis**. Documenteer per kaart per platform of het werkt. Als gratis ChatGPT op het werkcollege-moment rate-limited is voor meerderheid van de duo's, kun je gericht switchen.

### Pre-test 4: Eigen tijdsbewaking (5 min)

Loop het draaiboek van blok 1 mentaal door met een stopwatch. T+0–2, T+2–4, T+4–8, T+8–12, T+12–14, T+14–15. Live demo's hebben de neiging uit te lopen — repeteren scheelt 3–5 minuten in de zaal.

---

## 10. Toetsrelatie

De output van deze sessie voedt **twee** documenten direct:

### 10.1 Plan van Aanpak Hoofdstuk 4 (Projectontwerp)

- De **bijgewerkte top-3 aannames op het A3** (blok 3) scherpt de probleemstelling aan.
- De **toetsbare hypothese-lijst uit blok 2b** wordt vertaalbaar naar concrete onderzoeksmethoden in H4 (interview-vragen, observatie-criteria, enquête-items).
- De **🔺 sterkere aannames** worden onderdeel van het theoretisch kader (omdat ze nu inhoudelijke steun hebben uit chatbot-Red-Team-output, eventueel terug naar primaire bron via WS2-scan-techniek).

### 10.2 Handin-reflectie (PROMEF-criterium 4)

- De **PROMEF-zin** uit blok 4 wordt direct opgenomen als bijlage of letterlijk geciteerd in de Handin-reflectie. Dit is het **bewijs van groei in concreet gedrag** dat criterium 4 vraagt: *"heeft blijkens diens concrete gedrag tijdens de assessments aangetoond hoe te zijn gegroeid als professional."*
- De **transfer-zin** is geen formele PROMEF-input maar voedt de bredere reflectie op AI-native werkhouding — relevant voor het PROMEF-gesprek als de assessor doorvraagt op *"hoe blijf je je verder ontwikkelen?"*.
- Foto van het werkblad gaat als bijlage in Handin.

---

## 11. Formatieve evaluatie

Geen cijfer. Docent observeert per duo op drie indicatoren tijdens blok 3 (rondgang) en blok 4 (plenaire ronde).

| Indicator | Wat zoekt de docent? | Koppelt aan |
|-----------|---------------------|-------------|
| **Aannames-bewustzijn** | Kan duo expliciet benoemen WELKE aanname zwakker werd, GEBASEERD op concrete chatbot-tegenspraak (geen "we vonden alles minder overtuigend")? | L1 + L4 |
| **Rolbewust AI-gebruik** | Kunnen studenten benoemen welke rol welke output gaf, EN waarom rolverschil verschil maakt (geen "ja drie chats hebben we gedaan")? | L2 + L3 + LD-2 |
| **Groei-concreetheid** | Bevat de PROMEF-zin een zichtbaar gedragsvoorbeeld ("zichtbaar in *X*"), of blijft het abstract ("ik ben kritischer geworden")? | L5 + PROMEF-4 |

Docent geeft **mondeling signaal** in blok 4 plenair bij elk duo (kort: *"helder"* / *"concreter — wat is het GEDRAG?"* / *"die zin staat"*).

---

## 12. Verificatie — hoe weet je dat de workshop werkt?

1. **In-workshop check (eind blok 4):** bij één random gekozen student, vraag de PROMEF-zin hardop te zeggen ZONDER het werkblad voor zich. **Slagingscriterium:** zin bevat (a) concreet gedrag uit deze sessie, (b) een aanname die is bijgesteld, (c) géén abstracties als *"kritischer"* zonder voorbeeld.

2. **Werkblad-check (zelfde dag):** docent loopt door alle PROMEF-zinnen op de werkbladen (foto's of tijdens plenair). **Slagingscriterium:** ≥80% van de studenten heeft een zin met (a)+(b) en zonder (c). Kwaliteitsladder zie [`materialen/promef-zin-werkblad.md`](materialen/promef-zin-werkblad.md).

3. **Handin-check (+2 weken):** docent leest reflecties van studenten. **Slagingscriterium voor transfer:** komt het concept *"AI als Red Team"* of *"rolprompt"* terug in de reflectie? Is de PROMEF-zin verfijnd t.o.v. de werkblad-versie (of letterlijk overgenomen)? Wordt de bijgewerkte top-3 aannames verbonden aan H4-onderzoeksmethoden?

Als alle drie ja → de workshop heeft transfer opgeleverd richting PROMEF.

---

## 13. Lessen uit WS1, WS2, WS3 — verwerkt in dit ontwerp

| Les uit | Wat leerde we? | Hoe verwerkt in WS4 |
|---------|----------------|---------------------|
| WS1 | Papier werkt aanzienlijk beter dan digitaal voor reflectie | Schermtijd ~25 min op 90 min totaal; flip-overs centraal |
| WS1 | Niet te ambitieus plannen | Vier blokken, één centrale werkvorm per blok |
| WS2 | Duidelijke deliverables motiveren | Per blok een tastbaar artefact (flip-over, A3-update, werkblad) |
| WS2 | De onderzoeksvraag is al af; bouw daarop | WS2 top-3 aannames zijn input; sessie levert *update* van het A3, niet een nieuwe |
| WS2 | Direct toepasbare AI-techniek werkt motivationeel | Vier rolprompt-kaarten als kant-en-klare techniek studenten direct meenemen |
| WS3 | Schema-taal = PROMEF-taal | Directe zin-templates voor PROMEF-criterium 4; werkblad spiegelt PROMEF-formuleringsruimte |
| WS3 | Spiegelen boven instrueren | Geen college over LLM-werking; live demo + Socratisch rondlopen |
| WS3 | Pre-work is cruciaal | §8 Pre-work: ChatGPT-toegang testen + concrete situatie meenemen verplicht |
| WS3 | Capaciteit max 8 duo's per docent voor Socratisch rondlopen | Zelfde norm; bij grotere groep tweede facilitator nodig |

---

## 14. PROMEF-mapping (samenvattend)

| PROMEF-criterium | Aangeraakt door | Diepte |
|------------------|-----------------|--------|
| 1. Veranderen en evalueren (theoretisch concept uitleggen) | — (raakt eerder bij WS3) | Niet primair |
| 2. Sociaal communicatieve vaardigheden | Blok 4 plenaire ronde | Impliciet |
| 3. Schakelen en verbinden (weerstand → veranderbereidheid) | — | Niet geraakt |
| **4. Professionaliseren (groei zichtbaar in beroepsproducten en gedrag)** | **Blok 2 + 3 + 4** | **Primair** |
| 5. Intercultureel issue | — | Niet geraakt |
| 6. Handelen vanuit waarden | Blok 2a kaart 3 (ethicus) en blok 3 confronterende vraag | Impliciet |

---

## 15. Open punten voor iteratie

Items die na de eerste afname in de zaal mogelijk bijgesteld moeten worden:

- **Tijdsdruk in blok 2a** — negen chats in 15 min is krap. Overweeg na eerste afname: terug naar 6 chats (twee aannames × drie rollen) als de meerderheid het tempo niet aankon.
- **Kwaliteit van rolprompt-kaart 3 (ethicus)** — moralistische generiekheid is een bekend LLM-faalpatroon. Mogelijk vervangen door een vierde concrete-stakeholder-prompt (*"de directie / de uitvoerend medewerker / de klant"*) als ethicus structureel niet werkt.
- **Capacity-rate-limit op gratis ChatGPT** — als de meerderheid bij blok 2a een rate-limit hit, escaleer naar een **rotation-schema**: helft van de duo's start met blok 2b (1 chat), terwijl andere helft blok 2a doet (9 chats), wisselen. Vraagt herontwerp van de tijdslijn.
- **Toon van blok 1 (echo-kamer demo)** — de live demo is risicovol. Backup: een vooraf opgenomen video van de twee chats kan ook werken, maar verliest de *"oh, dit gebeurt nu echt"*-impact. Eerst in zaal proberen voordat je naar video grijpt.
- **Transfer-zin in blok 4** — bij eerste afname lijkt het waarschijnlijk dat veel transfer-zinnen tool-genoemd zijn ("ik gebruik altijd ChatGPT..."). Overweeg het werkblad strakker te scaffolden met expliciete invul-velden ("Het PRINCIPE...", "De TOOL...") als dat blijkt.
- **Verbinding met WS3-rolschema** — Sketch C uit SKETCHES.md (rolverdeling-canvas) raakt sterk aan WS4. Bij WS-cohort dat WS3 net heeft gehad, kan een korte verwijzing in blok 1 zinvol zijn ("denk aan het WS3-schema; daar deelden we rollen tussen mensen, vandaag delen we ze tussen jou en een chatbot"). Test of dat verheldert of verwart.

---

## 16. Kritische bronbestanden

- [`SKETCHES.md`](SKETCHES.md) — Sketch B sectie als blueprint en bredere WS4-context
- [`../inspiration/2026-05-10-sketch-b-red-team-rollen-research-log.md`](../inspiration/2026-05-10-sketch-b-red-team-rollen-research-log.md) — empirische ankers (Boussioux, Globerson, Anthropic Economic Index, Marily Nika)
- [`../background-docs/LRD-Workshop-2.md`](../background-docs/LRD-Workshop-2.md) — template voor Pink/KISS/analoog-digitaal en draaiboek-stijl
- [`../ws3-rollen/PRD_Workshop_Rollen_Adviestrajecten.md`](../ws3-rollen/PRD_Workshop_Rollen_Adviestrajecten.md) — Bloom+PROMEF-mapping en Verificatie-stijl
- [`../background-docs/Beoordelingsformulier PROMEF.pdf`](../background-docs/Beoordelingsformulier%20PROMEF.pdf) — exacte criterium-4-formuleringen voor de zin-templates
- [`../temp/kwaliteitscriteria-vraagstelling.md`](../temp/kwaliteitscriteria-vraagstelling.md) — rubric-stijl precedent voor PROMEF-zin-werkblad
