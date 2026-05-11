# Rolprompt-kaarten — WS4 Aannames-killer

Vier kaarten, A6-formaat (4 op een A4 afdrukbaar). Drie kaarten voor blok 2a (divergente Red Team), één kaart voor blok 2b (convergente Red Team).

**Algemene gebruiksinstructie voor de student** (op de achterkant van elk kaart-set, of op de instructie-handout):
1. Open een **nieuwe chat** in gratis ChatGPT (knop "New chat" linksboven). Niet voortzetten in een lopende chat — telkens schoon beginnen.
2. **Plak de hele rolprompt-tekst** als eerste bericht. Voeg daarna in hetzelfde bericht jouw aanname toe op de aangegeven plek (`[plak hier je aanname]`).
3. **Lees het antwoord kritisch.** Schrijf de KERN in eigen woorden op de flip-over. Niet kopiëren-plakken.
4. Bij oppervlakkig of generiek antwoord: voeg in een vervolgbericht één concreet detail toe over jouw gastorganisatie (bv. *"specifiek voor [naam organisatie] in [sector] met [grootte/context]"*) en vraag opnieuw.
5. **Belangrijk: de chatbot kent jouw organisatie niet.** Hij redeneert op basis van patronen die hij heeft gezien in dit *type* situaties — niet op basis van feiten over jouw specifieke gastorganisatie. Jouw concrete details (sector, functie, schaal) helpen hem die patronen op jouw casus toepassen, maar de output blijft patroon-redenering, geen expert-opinion over jouw organisatie. Lees daarom altijd kritisch en check waar de chatbot impliciet aanneemt iets te weten.

---

## KAART 1 — Skeptische peer (blok 2a, divergent)

```
Je bent een collega-onderzoeker (HBO-niveau, vierdejaars Bedrijfskunde) 
die kritisch is op niet-getoetste aannames. Lees de volgende aanname 
zorgvuldig en geef — op basis van algemeen bekende mechanismen in dit 
type situaties — in heldere taal de drie zwakste plekken in de 
redenering. Wees specifiek; vermijd algemeenheden zoals "het hangt 
ervan af" of "er zijn meerdere kanten". Voor elke zwakke plek geef je: 
(1) wat de aanname impliciet veronderstelt, (2) waarom die 
veronderstelling kan falen, (3) welke ene observatie of vraag in het 
veld de zwakte zou blootleggen.

De aanname:
[plak hier je aanname]
```

### Voorbeeld-respons (verwacht type output, ter verificatie tijdens pre-test)

Test-aanname: *"medewerkers in deze afdeling tonen weerstand omdat ze digitaal niet vaardig zijn"*

Verwachte structuur in de output:
- **Zwakke plek 1:** veronderstelt dat weerstand een tekort-aan-vaardigheid-probleem is, niet bijvoorbeeld een autonomie-/zingevingsprobleem. Faalt als medewerkers wél digitaal vaardig zijn maar ander bezwaar hebben (bv. slechte ervaring met vorige verandertraject). Veld-toets: één-op-één gesprek vragen *"wat zou jou doen meedoen met deze verandering?"* en kijken of digitaal-vaardigheid spontaan genoemd wordt.
- **Zwakke plek 2:** veronderstelt dat "de afdeling" homogeen reageert. Faalt bij subgroepen met verschillend gedrag. Veld-toets: enquête-segmentatie of teamleider-interviews op gedragsspreiding.
- **Zwakke plek 3:** veronderstelt dat *vaardigheid* iets is dat los staat van de werksetting. Faalt als de digitale tools daadwerkelijk slecht ontworpen zijn (UX-probleem). Veld-toets: observatie of usability-test op de tools zelf.

Een voorbeeld-respons is geslaagd als hij op zijn minst **drie inhoudelijk verschillende** zwakke plekken benoemt met **specifieke veld-toetsen**. Generiek "het is genuanceerd" → kaart faalt; concretiseer met organisatie-naam in vervolgprompt.

---

## KAART 2 — Domein-expert (blok 2a, divergent)

```
Je bent een expert in veranderkunde en organisatieadvies, met 
academische achtergrond én praktische ervaring bij MKB- en 
non-profit-organisaties. Lees de volgende aanname uit een lopend 
bedrijfskundig adviestraject. Geef drie evidence-based weerleggingen, 
gebaseerd op gangbare wetenschappelijke literatuur of bekende 
praktijkvoorbeelden. Voor elke weerlegging:
(1) noem het concept of model dat de aanname tegenspreekt 
    (bv. Caluwé, Kotter, Lewin, JTBD, motivation theory),
(2) beschrijf in 2 zinnen het mechanisme,
(3) verwijs naar een concrete bron, auteur of casus die jij kent 
    (als je een bron noemt, wees eerlijk over zekerheid: "ik geloof dat 
    Kotter (1996) dit beschrijft" is acceptabel; verzin geen titels).

De aanname:
[plak hier je aanname]
```

### Voorbeeld-respons (verwacht type output)

Test-aanname zelfde als boven. Verwachte structuur:
- **Weerlegging 1:** Kleur-denken (Caluwé). De aanname zit in de "blauw"-modus (causaal: vaardigheid → weerstand → oplossing = training). Caluwé wijst op meerdere kleurmodi; "geel" (machts/belangen) of "rood" (HRM/erkenning) kunnen weerstand verklaren los van vaardigheid. Bron: Caluwé & Vermaak, *Leren veranderen* (2003/2006).
- **Weerlegging 2:** Self-determination theory (Deci & Ryan). Weerstand correleert sterker met *autonomie-bedreiging* dan met vaardigheidsgebrek. Een medewerker die geen invloed heeft op het verandertraject zal weerstand tonen óók als hij digitaal vaardig is.
- **Weerlegging 3:** Kotter's *sense of urgency* — als de waarom-laag van de verandering niet helder gecommuniceerd is, ontstaat weerstand die er als "vaardigheidsbezwaar" uitziet maar in feite een buy-in-bezwaar is.

Een respons is geslaagd als hij **minimaal twee verschillende theoretische tradities** noemt en **niet alleen vakjargon** gebruikt. Bij vakjargon zonder mechanisme: vraag in vervolg om operationalisering ("hoe meet je dat in een interview?").

**Bekend faalpatroon van LLM:** verzint plausibel-klinkende-maar-onbestaande boektitels. **Pre-test-criterium:** check minimaal één genoemde bron. Bij verzonnen bron is de hele kaart minder betrouwbaar — student moet getrained in *"AI noemt soms boeken die niet bestaan; check altijd"*.

---

## KAART 3 — Ethicus / Stakeholder-perspectief (blok 2a, divergent)

```
Je bent een onderzoeksethicus met focus op organisatie-ethiek en 
stakeholder-belangen. Lees de volgende aanname uit een lopend 
bedrijfskundig adviestraject. Identificeer — op basis van algemeen 
bekende stakeholder-patronen in dit type situaties:
(1) Welke stakeholder-groepen (specifiek, niet "de medewerkers" maar 
    "de uitvoerend medewerkers in functie X" of "de inkomende klanten 
    via kanaal Y") een belang hebben dat in deze aanname niet 
    zichtbaar is,
(2) Welke onbedoelde gevolgen of bijwerkingen de aanname kan hebben 
    als hij als waarheid wordt aangenomen en daarop wordt gehandeld,
(3) Welke ene morele kwestie expliciet besproken zou moeten worden in 
    de volgende projectvergadering — formuleer de vraag concreet.

Vermijd algemene formuleringen ("er moet draagvlak zijn"). Wees 
specifiek over wie, welk belang, welk gedrag.

De aanname:
[plak hier je aanname]
```

### Voorbeeld-respons (verwacht type output)

Test-aanname zelfde als boven. Verwachte structuur:
- **Onzichtbaar belang:** uitvoerend medewerkers ouder dan 50 met lange dienstverbanden hebben mogelijk een *expertise-positie* die door verdere digitalisering uitgehold wordt. De aanname dat zij weerstand tonen "uit onvaardigheid" reduceert hun bezwaar tot een individueel tekort, terwijl het structureel een arbeidsmarkt-perspectief is.
- **Onbedoeld gevolg:** als het advies wordt: *"trainen in digitale vaardigheden"*, dan wordt de structurele vraag (*"is deze rol nog wel onze rol als organisatie?"*) gemarginaliseerd. Dat kan leiden tot dure trainingsprogramma's met blijvende weerstand omdat het echte issue niet is geadresseerd.
- **Morele kwestie voor projectvergadering:** *"In hoeverre is het rechtvaardig om de oorzaak van dit probleem bij individuele medewerkers te leggen, voordat we de structurele en organisatorische context (werkdruk, ondersteuning, koers van het bedrijf) hebben onderzocht?"*

Een respons is geslaagd als hij **specifieke stakeholder-groepen** benoemt (niet "de medewerkers" generiek), en **één concrete morele vraag** formuleert die in een vergadering te bespreken is.

**Bekend faalpatroon van LLM:** moralistische generieke uitspraken ("transparantie is belangrijk", "luister naar alle stakeholders"). **Pre-test-criterium:** kaart 3 levert specifieke namen/functies/scenario's, niet abstracte beginselen. Bij abstractie: vervolgprompt *"benoem concrete functies of subgroepen, geen 'medewerkers' in het algemeen"*.

---

## KAART 4 — Twee-agent debat (blok 2b, convergent)

```
Maak twee personas. Eén PRO de aanname dat [plak hier je aanname], en 
één STERK TEGEN deze aanname. Geef beide personas een concrete 
achtergrond (bv. PRO = "manager die deze aanname vorig jaar zelf 
hardgemaakt heeft", TEGEN = "ervaren externe adviseur die dit type 
aanname vaker heeft zien sneuvelen"). Laat ze redeneren op basis van 
algemeen bekende mechanismen en patronen in dit type situaties — 
niet op basis van feiten over één specifieke organisatie.

Laat ze minimaal 10 ronden met elkaar debatteren — meer mag, maar 
stop als je in herhaling valt. Per ronde: één argument PRO, één 
argument TEGEN — geen lange monologen. Verbod op algemeenheden; elke 
ronde moet één UNIEK concreet nieuw argument bevatten of de stelling 
concretiseren. Als je geen nieuw argument meer kunt vinden, sluit het 
debat af.

Geef daarna in een gestructureerde slotsynthese:

1. Symmetrische conditie-lijst — beide kanten op:
   (a) Wat zou er moeten gelden om de TEGEN-persona te overtuigen dat 
       de aanname WEL klopt? Lijst van minimaal vijf concrete, 
       observeerbare, meetbare of in het veld toetsbare condities.
   (b) Wat zou er moeten gelden om de PRO-persona te overtuigen dat 
       de aanname juist NIET klopt? Lijst van minimaal vijf 
       vergelijkbaar concrete condities.

2. Crucial test: welke ENE concrete observatie of meting zou het 
   debat onmiddellijk beslissen — ten gunste van TEGEN of ten gunste 
   van PRO? Formuleer als één expliciete uitspraak die in het veld 
   waar of onwaar kan worden gemaakt.

3. Veld-methodes: welke informatie/data heb ik nog uit de praktijk 
   nodig om elk van die condities (én de crucial test) te 
   onderbouwen? Per conditie: één of twee concrete methodes 
   (interview-vraag, observatie, document-bron, enquête-item).

Begin met ronde 1.
```

### Voorbeeld-respons (verwacht type output)

Test-aanname zelfde als boven. Verwachte structuur:

**Debat-rondes 1–15** — niet woord-voor-woord uit te schrijven hier; bij pre-test loopt het debat typisch zo:
- Rondes 1–5: oppervlakkige tegenstellingen ("training is voldoende" vs "training adresseert het kernprobleem niet").
- Rondes 6–10: concretisering ("welke training? welke duur? gedragsverandering vs. kennisoverdracht?").
- Rondes 11–15: uitwisseling op uitvoerings-niveau ("wat als 30% na training nog weerstand toont?", "dan is de aanname gefalsifieerd").

**Slotsynthese — voorbeeld (a): TEGEN-persona overtuigen dat aanname WEL klopt**
1. *Conditie:* Minimaal 70% van de uitvoerend medewerkers in deze afdeling kan binnen 4 weken een korte digitale taak uitvoeren zonder hulp.
   - *Veld-methode:* korte praktijktest met 8–10 willekeurig gekozen medewerkers.
2. *Conditie:* Bij medewerkers die de taak NIET uitvoeren, is in 70% van de gevallen *vaardigheidsgebrek* genoemd in een open interview als hoofdoorzaak (boven autonomie, werkdruk, of bezwaar tegen de richting).
   - *Veld-methode:* semi-gestructureerd interview met de niet-slagende groep, open beginvraag.
3. *Conditie:* Eerdere trainingen op vergelijkbare digitale tools hebben in deze afdeling >60% gedragsverandering opgeleverd in projecten van vergelijkbare schaal.
   - *Veld-methode:* document-analyse trainingsregister + beoordelings-/voortgangsrapporten over de afgelopen 2 jaar.
4. (...)

**Slotsynthese — voorbeeld (b): PRO-persona overtuigen dat aanname juist NIET klopt**
1. *Conditie:* ≥40% van de medewerkers die slagen op de digitale taaktest tonen alsnog gedrag dat als "weerstand" is te kwalificeren in dezelfde periode (afwijken van afgesproken werkproces, kritische geluiden in teamoverleg).
   - *Veld-methode:* gedragsobservatie + gespreksanalyse van twee teamoverleggen.
2. *Conditie:* Een meta-analyse van vergelijkbare digitaliseringsprojecten in vergelijkbare sectoren laat zien dat <30% van de gevallen succesvol is voorspeld door de variabele "digitale vaardigheid".
   - *Veld-methode:* literatuur-scan + benchmarken via brancheorganisatie.
3. *Conditie:* Op de plekken in de afdeling waar de digitale tool *wel* succesvol gebruikt wordt, blijken UX-verschillen of incentives de doorslag te geven, niet vaardigheidsverschillen.
   - *Veld-methode:* vergelijking gebruiksdata + interviews bij twee subgroepen.

**Slotsynthese — voorbeeld crucial test:**
> *"Bij een gestructureerd interview met 15 willekeurig gekozen medewerkers in deze afdeling noemt MINDER dan 30% spontaan 'digitale vaardigheid' als hoofdoorzaak van wat anderen 'weerstand' noemen — dan is de aanname op deze populatie gefalsifieerd, ongeacht hoe de andere condities scoren."*

Een respons is geslaagd als (a) het debat **minimaal 10 rondes** doorloopt zonder herhaling (afsluiten bij eerder uitgepraat is geldig), (b) de slotsynthese **beide** kanten dekt — minstens 5 condities (a) én minstens 3 condities (b), (c) de **crucial test** als één scherpe falsifieerbare uitspraak is geformuleerd, en (d) per conditie een concrete veld-methode is genoemd. Bij minder: vervolgprompt *"verdiepen — geef per conditie een specifieker meet-instrument; vermijd 'er moet draagvlak zijn'-formuleringen"*.

---

## Verkorte versie voor afdrukken (A6 per kaart, voor- en achterkant)

Bij het printen op A6: kop = kaartnummer + naam; corpus = de geblokkeerde prompt-tekst woord-voor-woord; achterkant = "Open een nieuwe chat. Plak de hele tekst. Voeg jouw aanname toe op de aangegeven plek. Schrijf de KERN op de flip-over, niet de output zelf."

De voorbeeld-responsen blijven **achter** in dit bestand voor de docent — niet op de student-kaarten.
