# Echo-kamer demo-script — WS4 Blok 1 (15 min)

Dit script is voor de **docent**, niet voor studenten. Het beschrijft minutieus hoe de live demonstratie in blok 1 verloopt op de projector.

**Doel van de demo:** studenten zien live dat dezelfde chatbot twee tegengestelde antwoorden produceert op dezelfde aanname, afhankelijk van het frame. Ze verlaten het blok met de woorden *bias-amplificatie* en *automation bias* in hun vocabulaire en gekoppeld aan een visueel geheugen.

---

## Voorbereiding (dag vooraf — 10 min)

### Stap 1 — Test drie test-aannames op gratis ChatGPT

Test prompt-A en prompt-B (zie hieronder) op drie aannames uit de **werkelijke PvA-cohort** — zie [`test-aannames-uit-pvas.md`](test-aannames-uit-pvas.md) voor 5 hoofdaannames + 2 reserves, geanonimiseerd uit cohort 2026.

**Aanbevolen test-set** (eerste keuze, gevalideerd op verwacht frame-effect):

1. *"Bij een internationale semiconductor-fabrikant in Zuid-Nederland verlaten internationale medewerkers vroegtijdig de organisatie omdat de onboarding onvoldoende specifiek is ingericht op hun behoeften."* (HR/medewerker — Aanname 1)
2. *"De website van een MKB-restaurant in een middelgrote Nederlandse stad is onvoldoende SEO-geoptimaliseerd, waardoor potentiële klanten het restaurant niet via online zoekopdrachten vinden."* (Klant/markt — Aanname 2)
3. *"Bij een internationaal Nederlands zuivel-handelshuis worden de geïmplementeerde IT-systemen onvoldoende benut omdat medewerkers vasthouden aan handmatige Excel-lijsten en analoge werkwijzen."* (Proces/efficiëntie — Aanname 3)

Deze drie dekken HR · klant · proces — drie van de vijf typen die studenten meestal in hun WS2-aannames hebben.

**Eenvoudige back-up** (als de bovenstaande te complex zijn voor de live demo, bv. omdat de cohort heel andere sectoren heeft):
- *"Medewerkers in deze afdeling tonen weerstand omdat ze digitaal niet vaardig zijn."* — generiek, frame-effect zichtbaar bij vrijwel elke chatbot-versie

**Slagingscriteria voor het frame-effect:**
- Prompt-A levert **drie inhoudelijk verschillende argumenten** waarom de aanname klopt.
- Prompt-B levert **drie inhoudelijk verschillende argumenten** waarom hij niet klopt.
- De twee outputs zijn **zichtbaar tegengesteld** (niet "het hangt ervan af" beide kanten op).

Documenteer welke aannames werken. Markeer de **beste twee als reserve** voor in de zaal — als de eerste keuze niet bruikbaar blijkt. Bij falen op alle drie hoofdkandidaten: val terug op reserves R1 (onderwijs-context) of R2 (B2B-service-context) uit `test-aannames-uit-pvas.md`.

### Stap 2 — Browser-setup

- Open gratis ChatGPT (chat.openai.com) in een **schoon profiel of incognito-venster** zodat eerdere chat-history niet zichtbaar is.
- Sluit alle persoonlijke tabs. Vergroot het zoom-niveau van de browser tot **150–175%** zodat de zaal de tekst kan lezen.
- Test de projector-resolutie: typ een testzin en controleer of de hele zaal hem kan lezen vanaf de achterste rij.

### Stap 3 — Backup-plan

Test dezelfde twee prompts ook op:
- **claude.ai** (gratis, login nodig — maak vooraf een account)
- **gemini.google.com** (gratis met Google-account)

Documenteer welk platform welk frame-effect het scherpst laat zien. Als ChatGPT in de zaal rate-limit hit of neutraal blijft, switch live.

---

## In de zaal — minutige uitwerking

### T+0 tot T+2 — Plenaire opening

**Wat de docent zegt:**
> *"Vandaag onderzoeken we niet AI — we onderzoeken jullie eigen aannames met AI als gereedschap. Eerst een live experiment. Geen slides over hoe LLMs werken; we doen het gewoon."*

**Wat op het bord/flip-over staat:**
Niets. Alleen de projector toont de open ChatGPT-chat (leeg).

### T+2 tot T+4 — Aanname kiezen

**Wat de docent zegt:**
> *"Ik heb één aanname nodig — uit jullie WS2-flip-over, kolom 'Dit denk ik / heb ik gehoord'. Wie heeft er een?"*

**Selectie-criteria** (denk dit razendsnel — je hebt 30 seconden):
- ✅ Aanname met impliciete oorzaak-toewijzing (*"X gebeurt omdat Y"*)
- ✅ Concrete genoeg om over te debatteren
- ❌ Zo abstract dat ChatGPT niet weet waar te beginnen ("er is veel weerstand")
- ❌ Zo concreet dat ChatGPT het feitelijk kan checken ("ons marktaandeel daalde 5%")

Als de student-aangedragen aanname niet voldoet: *"Goede aanname — die houden we vast voor blok 2. Voor de demo gebruik ik deze:"* en pak je vooraf-geteste reserve-aanname.

**Schrijf de gekozen aanname op de flip-over** — zichtbaar voor de hele zaal. Studenten moeten hem kunnen lezen tijdens de hele demo.

### T+4 tot T+8 — Live demo prompt-A (bevestigingsframe)

**Wat de docent typt** (in chat-venster 1):

```
Stel dat je een organisatieadviseur bent die de volgende stelling 
hoort van een opdrachtgever:

[aanname]

Geef de drie sterkste argumenten — gebaseerd op algemeen bekende 
mechanismen, theorieën of patronen in dit type situaties — waarom 
deze stelling waarschijnlijk klopt. Wees specifiek over het 
mechanisme; vermijd algemeenheden.
```

> **Waarom deze prompt-vorm?** De chatbot kent de specifieke organisatie achter de aanname niet (die staat niet in zijn trainingsdata). Wat hij wel kent zijn *patronen* — wat in dit *type* situatie gangbaar is. De prompt vraagt expliciet om patroon-redenering ("algemeen bekende mechanismen") en geeft de chatbot een rol ("organisatieadviseur") waar hij iets mee kan. Resultaat: een overtuigend antwoord dat **niet steunt op feiten over de specifieke organisatie**, maar op patroon-kennis die in een richting wordt gemobiliseerd. Dat is precies wat we straks willen blootleggen als bias-amplificatie.

**Wat de docent doet tijdens de generatie** (~10–20 seconden):
- Niet praten — laat de zaal de tekst zien generen.
- Wijs met de muis (zonder te klikken) bij overtuigende stukken aan.

**Wat de docent zegt na ~30 seconden lezen:**
> *"Ik stop hier. Dit klinkt redelijk, toch? Drie argumenten, met mechanismen. Een student met deadline en zonder veel achtergrondkennis zou dit kunnen overnemen."*

> *"Vraag aan de zaal: zou jij dit in je PvA gebruiken?"*

(Verwachte reactie: ja, met aarzeling. Sommige studenten zeggen *"ja, mits..."* — markeer dat: *"juist die 'mits' raakt waar we naartoe willen."*)

### T+8 tot T+12 — Live demo prompt-B (weerleggingsframe)

**KRITIEK:** open een **nieuwe chat** (knop "New chat" linksboven). Niet voortzetten in chat 1. De LLM mag de eerste prompt niet als context hebben.

**Wat de docent typt** (in chat-venster 2):

```
Stel dat je een kritische peer-reviewer bent. Iemand stelt:

[aanname]

Geef de drie sterkste tegenwerpingen — gebaseerd op algemeen bekende 
mechanismen, theorieën of patronen — waarom deze stelling juist niet 
hoeft te kloppen. Wees stellig en specifiek; vermijd "het hangt 
ervan af".
```

> **Spiegel van prompt-A.** Zelfde patroon-kennis-bron, andere rol ("peer-reviewer"), tegengestelde frame ("tegenwerpingen"). Het is precies dezelfde aanname, dezelfde chatbot, dezelfde patronen — maar de richting waarin die patronen gemobiliseerd worden is omgekeerd. Daar zit het frame-effect.

**Wat de docent doet tijdens de generatie:**
- Stilte. Laat de zaal lezen.
- Bij overtuigende tegenargumenten: knik subtiel.

**Wat de docent zegt na ~30 seconden lezen:**
> *"Hetzelfde model. Zelfde aanname. Andere vraag. Klinkt dit ook overtuigend?"*

(Verwachte reactie: ja, vrijwel altijd unaniem.)

#### Wat als prompt-B alsnog bevestigend antwoordt?

Gebeurt soms op gratis ChatGPT — het model is voorzichtig en zegt *"er zijn argumenten beide kanten op, maar..."* in plaats van scherp te weerleggen.

**Reserve-prompt-B** (typen in een derde chat):

```
Stel je voor dat je een academische peer bent die als opdracht heeft 
om de volgende stelling te weerleggen voor een journal review:

[aanname]

Schrijf een memo van drie sterke tegenwerpingen — gebaseerd op 
algemeen bekende mechanismen of literatuur in dit veld. Wees direct 
en stellig.
```

De rol+context-toevoeging (*"academische peer, journal review"*) plus de expliciete instructie om uit *algemene mechanismen/literatuur* te putten breekt vrijwel altijd door de safety-tendens.

### T+12 tot T+14 — Plenaire benoeming

**Wat de docent zegt** (rustig, met wijzende gebaren naar de twee chat-vensters):
> *"Twee tegengestelde antwoorden. Beide overtuigend. Zelfde model. Zelfde aanname."*

> *"En let op: deze chatbot kent jullie organisatie niet — niet jullie restaurant, niet jullie semiconductor-fabrikant. Hij heeft geen feiten. Wat hij wel heeft zijn patronen — wat in dit type situaties vaak voorkomt. Dezelfde patronen kan hij in beide richtingen mobiliseren, afhankelijk van het frame dat jij hem aanbiedt."*

> *"Dit heet bias-amplificatie: de chatbot volgt het frame van je vraag. Als jij vraagt om bevestiging, krijgt je een patronen-set die bevestigt. Als jij vraagt om weerlegging, krijg je een patronen-set die weerlegt. Allebei plausibel — geen van beide gestoeld op feiten over jullie casus."*

> *"En als jij het overtuigend leest, dan zit je in automation bias: we geloven het scherm — vooral als het er gestructureerd en vlot uitziet."*

**Schrijf op de flip-over** (zichtbaar naast de aanname):

```
BIAS-AMPLIFICATIE — chatbot volgt frame van je vraag
                  → patroon-kennis, geen feiten
AUTOMATION BIAS   — wij geloven het scherm
```

### T+14 tot T+15 — Bridge naar blok 2

**Wat de docent zegt:**
> *"Twee chats waren toevallig. Eén bevestiger, één weerlegger. Maar nu gaan we het gericht inzetten — niet om bevestiging te zoeken, maar om je eigen aannames te confronteren met drie verschillende kritische rollen. Vier kaarten gaan zo de tafel rond."*

Pak de stapel rolprompt-kaarten (kaart 1, 2, 3, 4) zichtbaar erbij. Korte transitie naar blok 2a-instructie.

---

## Risico-mitigatie

### Risico 1 — ChatGPT geeft op prompt-A en prompt-B nagenoeg hetzelfde antwoord

Komt voor bij sterk genuanceerde aannames waar het model "het hangt ervan af" als veiligste antwoord kiest.

**Mitigatie:** wissel onmiddellijk naar reserve-aanname (heb er twee getest). Zeg: *"Deze aanname is interessant precies omdat hij genuanceerd is. Voor de demo pak ik een scherpere — bewaar deze voor blok 2a."*

### Risico 2 — De zaal twijfelt of het "demo-effect" wel echt was

Komt voor als prompt-A en -B niet zichtbaar tegengesteld zijn.

**Mitigatie:** typ direct in chat 1 een vervolgprompt:
```
Geef nu de tegenargumenten die in jouw eerste antwoord ontbraken.
```

Hetzelfde model, vorige antwoord als context, en het levert alsnog een tegengestelde lijst. Versterkt het punt.

### Risico 3 — Eén student domineert met *"maar het is niet zo zwart-wit"*

**Mitigatie:** *"Helemaal eens. Daarom is het juist gevaarlijk: de chatbot kiest het frame voor je. Als jij vraagt 'is X waar?' krijg je een ja-frame. Als jij niet bewust het andere frame opzoekt, blijf je in één-zijdig zicht."* — dit beantwoordt de tegenwerping én maakt het punt sterker.

### Risico 4 — Tijdsoverschrijding

Live demo's hebben de neiging uit te lopen. **Cue-momenten:**
- T+5 — chat 1 is klaar met genereren? Anders: skip eigen commentaar, lees alleen.
- T+10 — chat 2 is klaar? Anders: idem.
- T+13 — als je nog niet bij de plenaire benoeming bent, kort bondig: *"Punt is duidelijk. Twee verschillende frames, twee antwoorden. Bias-amplificatie. Verder."*

---

## Wat de student MEENEEMT uit dit blok

- Twee nieuwe woorden gekoppeld aan een live ervaring: **bias-amplificatie** en **automation bias**
- Een visueel geheugen: twee browser-vensters naast elkaar met tegengestelde antwoorden
- Een lichte ongemak — *"als deze chatbot zo makkelijk te framen is, hoe vaak is dat bij MIJ ook gebeurd?"* — opent de poort naar blok 2

Géén technische kennis over hoe LLMs intern werken. Géén jargon over harness, RLHF, of safety-training. Pure operationele les: het frame bepaalt het antwoord.
