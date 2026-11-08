# Trentotto gare senza mappa: nuove schede documentate per le piste 3D LiveSportArena

**Ricerca sulle piste · Stagione 2026/27 · Aggiornamento 8 novembre 2026 · 21 località, 34 schede di pista/variante per 38 gare.**

Nel calendario locale `alpine.json` si contano **83 gare**: per **45** l’interfaccia ha già una mappa collegata e per **38** manca un collegamento. Il presente documento approfondisce **le piste e il terreno**, non la verifica generale del calendario: riporta dettagli per la costruzione futura di modelli 3D illustrativi, senza inventare geometrie o coordinate. Le 38 gare si distribuiscono in **9 località parzialmente coperte** e **12 senza alcuna gara con mappa**. Il rapporto integra la ricerca web di oggi con il precedente `Dati_piste_Coppa_del_Mondo_aggiornati(2).md`, sempre distinguendo ciò che è stato direttamente verificato dalle informazioni storiche o secondarie.

Le piste più promettenti ora includono **Kvitfjell** (quattro profili ufficiali e circa 17 toponimi sulla discesa uomini), **St. Moritz** (otto sezioni SG e partenza GS distinta), **Val di Fassa** (due profili e nomi/descrizioni dei settori), **Lenzerheide** (toponimi, creste e traversi), **Soldeu** (dati distinti GS/SL), **Kitzbühel** (SG Streifalm e SL Ganslern con omologazioni) e **Tremblant** (tre macrotratti ufficiali e Johansson Pitch). A Garmisch è essenziale non confondere **Kandahar 1 (donne)** con **Kandahar 2 (uomini)**.

**Metodologia e limiti.** Attendibilità: **ufficiale** = organizzatore/impianti; **FIS** = schede risultati o omologazione; **secondaria** = articolo/enciclopedia; **non verificata** = descrizione o corrispondenza non provata. La colonna `s≈` del vecchio MD è mantenuta, ma **qui vale `n.d.` quando non esistono distanze progressive misurate**. `s=0` e `s=1` sono per definizione partenza e arrivo, non una misura cartografica; non inseriamo numeri interpolati a caso. Se un numero risale al 2022, 2024 o 2025 è etichettato come storico. La linea geometrica, i confini del bosco, la posizione di tribune e le coordinate dei POI non vengono dedotti da soli toponimi.

**Distinzione fondamentale nel codice.** `tracks.json` (aggiornato 06/11/2026) ha **23 record `courses` con `geometry: null`**: può avere schede descrittive e associazioni di mappa nel sito pur non avendo coordinate georeferenziate nel JSON. Il dato «45 con mappa» è una **copertura di collegamenti/eventi riferita dall’utente**, non la dimostrazione che 45 geometrie reali siano archiviate in `tracks.json`. Nessun GPX/KML verificato per queste 34 varianti in questa ricerca.

## Panoramica: nove località parziali, dodici ancora prive di mappe

### Nove località con mappa per alcune gare ma non per le varianti qui ricercate
| Località | Gare con mappa già presente | Gare senza mappa |
|---|---|---|
| Adelboden | U GS | U SL |
| Alta Badia | U GS | U SL |
| Bormio | U DH | U SG |
| Flachau | D SL | D GS |
| Garmisch-Partenkirchen | U DH | U SG; D DH ×2 |
| Jasná | D GS | D SL |
| Kitzbühel | U DH | U SG, SL |
| Val Gardena / Gröden | U DH | U SG |
| Wengen | U DH | U SG, SL |

### Dodici località per cui non c’è alcuna gara collegata alla mappa
| Località | Gare da ricostruire |
|---|---|
| Åre | U GS, SL |
| Chamonix | U SL |
| Copper Mountain | U SG, GS |
| Courchevel | D SL |
| Dachstein West / Gosau | D GS, SL |
| Kvitfjell | U/D DH, SG |
| Lenzerheide | D SG ×2 |
| Saalbach | U DH, SG |
| Soldeu | D GS, SL |
| St. Moritz | D SG ×2, GS |
| Tremblant | D GS ×2 |
| Val di Fassa | D DH, SG |

### Dodici località interamente coperte nel calendario locale (escluse da questa ricerca)
| Località | Gare già con mappa |
|---|---|
| Beaver Creek | U DH ×2, SG, GS; D DH ×2, SG |
| Cortina d’Ampezzo | D DH ×2, SG |
| Gurgl | D/U SL |
| Killington | D GS, SL |
| Kranjska Gora | D/U GS, SL |
| Kronplatz | D GS |
| Levi | D/U SL |
| Madonna di Campiglio | U SL |
| Schladming | U GS, SL |
| Sölden | D/U GS |
| Sun Valley | D/U DH, SG, GS, SL |
| Val d’Isère | U GS, SL |

**Tre mappe nell’indice prive di una gara attuale corrispondente:** Crans-Montana D DH, Crans-Montana D SG, Les Houches U DH. Lo **SL Chamonix** usa il **segmento basso della Verte des Houches**, non la DH da 3.343 m: la mappa DH esistente non equivale alla scheda SL. [fonte](https://chamonixworldcup.com/fr/la-course/la-piste)

## Schede per località: dove le fonti nominano salti, muri, curve e traguardi

La struttura ricalca il vecchio Markdown: schede per paese, tabella delle sezioni, quindi **Dati tecnici, Partenza, Traguardo, Ambiente, Correzioni all’archivio e Lacune**. Le voci dichiarate *generiche* non sono toponimi inventati. Le informazioni su una pista madre sono marcate come tali e non assegnate arbitrariamente alle gare di disciplina diversa.

### Norvegia

#### Kvitfjell — Olympiabakken / corso olimpico — discesa uomini

| Campo | Valore |
|---|---|
| Gare locali (data · sesso/disciplina · ID) | 2027-03-06 · U DH · FIS [131746](https://www.fis-ski.com/DB/general/results.html?seasoncode=2027&sectorcode=AL&raceid=131746) |
| Nome pista / variante | Kvitfjell Olympiabakken, profilo ufficiale DH uomini |
| Corrispondenza al 2026/27 | **Confermato per profilo ufficiale; possibili modifiche di gate/stagione** |
| Start house DH uomini | 1.020 m — [fonte](https://worldcupkvitfjell.no/en/courses) |
| Stazione/cresta Kvitfjelleggen | 1.027 m, NON quota start — [fonte](https://worldcupkvitfjell.no/en/courses) |
| Arrivo | dopo Mæhlumsgeilen (184 m); quota di finish esatta da profilo grafico non trascritta — [fonte](https://worldcupkvitfjell.no/en/courses) |
| Lunghezza/dislivello DH 2027 | da leggere nella figura dedicata, non ricavati dalle quote narrative — [fonte](https://worldcupkvitfjell.no/en/courses) |
| Max pendenza di sezione | 64% Wintherhogget — [fonte](https://worldcupkvitfjell.no/en/courses) |
| GPX / KML / GeoJSON verificato | **Non trovato**: non inventare centerline o coordinate |

| # | Sezione | Tipo | s≈ | Nota e fonte | Affidabilità |
|---:|---|---|---|---|---|
| 1 | Kvitfjelleggen | partenza / cresta | 0 (relativo) | start DH uomini, starthouse 1.020 m; la cresta ha quota nominativa 1.027 m — [fonte](https://worldcupkvitfjell.no/en/courses) | ufficiale, descrizione di percorso |
| 2 | Gaupereksla | primo tratto / curva destra | n.d. | 1.020–900 m, prima curva a destra — [fonte](https://worldcupkvitfjell.no/en/courses) | ufficiale, descrizione di percorso |
| 3 | Orresvingen | curva | n.d. | circa 900 m, vicino alla partenza DH femminile secondo la descrizione generale — [fonte](https://worldcupkvitfjell.no/en/courses) | ufficiale, descrizione di percorso |
| 4 | Wintherhogget | muro | n.d. | 870–810 m, fino al 64% di pendenza — [fonte](https://worldcupkvitfjell.no/en/courses) | ufficiale, descrizione di percorso |
| 5 | Sletten | scorrimento | n.d. | 870–700 m, settore più distensivo tra due punti tecnici — [fonte](https://worldcupkvitfjell.no/en/courses) | ufficiale, descrizione di percorso |
| 6 | Russispranget | salto | n.d. | 700–645 m, salti di 70–80 m in condizioni favorevoli — [fonte](https://worldcupkvitfjell.no/en/courses) | ufficiale, descrizione di percorso |
| 7 | Jansrudhoppet | salto | n.d. | circa 644 m, dopo Russispranget — [fonte](https://worldcupkvitfjell.no/en/courses) | ufficiale, descrizione di percorso |
| 8 | Elgtraversen | traverso | n.d. | 640–580 m — [fonte](https://worldcupkvitfjell.no/en/courses) | ufficiale, descrizione di percorso |
| 9 | S-Svingen | S | n.d. | 580–500 m — [fonte](https://worldcupkvitfjell.no/en/courses) | ufficiale, descrizione di percorso |
| 10 | Bukkerittet | traverso irregolare | n.d. | 500–440 m — [fonte](https://worldcupkvitfjell.no/en/courses) | ufficiale, descrizione di percorso |
| 11 | Bøygen | curva / restringimento | n.d. | 440–390 m — [fonte](https://worldcupkvitfjell.no/en/courses) | ufficiale, descrizione di percorso |
| 12 | Tommy Moe-kanalen | canale tecnico | n.d. | 390–310 m — [fonte](https://worldcupkvitfjell.no/en/courses) | ufficiale, descrizione di percorso |
| 13 | Løftet | ciglio | n.d. | circa 310 m — [fonte](https://worldcupkvitfjell.no/en/courses) | ufficiale, descrizione di percorso |
| 14 | Klemma | compressione / strettoia | n.d. | circa 270 m — [fonte](https://worldcupkvitfjell.no/en/courses) | ufficiale, descrizione di percorso |
| 15 | Tunnelhoppet | salto / attraversamento | n.d. | circa 230 m, presso attraversamento strada pubblica — [fonte](https://worldcupkvitfjell.no/en/courses) | ufficiale, descrizione di percorso |
| 16 | Mæhlumsgeilen | tratto finale | n.d. | 230–184 m — [fonte](https://worldcupkvitfjell.no/en/courses) | ufficiale, descrizione di percorso |
| 17 | Målhoppet | salto finale | n.d. | circa 190 m, in prossimità della linea ferroviaria e del finish — [fonte](https://worldcupkvitfjell.no/en/courses) | ufficiale, descrizione di percorso |

**Dati tecnici.** Vedi tabella della variante: ogni quota, lunghezza, pendenza e omologazione è riferita alla propria fonte e stagione. Quando i numeri provengono da una pista madre o da una gara precedente **non sono da interpretare come specifiche della gara 2026/27**.

**Partenza.** Start house uomini a 1.020 m, su una cresta. [fonte](https://worldcupkvitfjell.no/en/courses)

**Traguardo – modello proposto.** Mæhlumsgeilen e Målhoppet al fondo; saltino finale in relazione all’attraversamento ferroviario. [fonte](https://worldcupkvitfjell.no/en/courses)

**Ambiente e attraversamenti.** Boschi tagliati dal Wintherhogget, cresta, traversi, compressioni, strada pubblica al Tunnelhoppet e ferrovia al Målhoppet. Questi sono i POI più utilizzabili per illustrazione. [fonte](https://worldcupkvitfjell.no/en/courses)

**Correzioni all’archivio.** Nuova pista per `tracks.json`; non assegnare senza prova gli stessi 17 POI alle 3 varianti alternative.

**Materiale cartografico e geometrico.** Pagina «Courses» con quattro profili (immagini) e sezioni [fonte](https://worldcupkvitfjell.no/en/courses); PDF non individuato, immagini non certificate georeferenziate.

**Lacune.** Rilettura numeri nelle immagini dei 4 profili e dimensioni 2027, GPX reali; la descrizione è di un corso storicamente maschile.

**Fonti dirette principali.** [KV](https://worldcupkvitfjell.no/en/courses) · [KVS](https://worldcupkvitfjell.no/en/courses) · [KVH](https://worldcupkvitfjell.no/en/om-oss).

#### Kvitfjell — Olympiabakken — Super-G uomini

| Campo | Valore |
|---|---|
| Gare locali (data · sesso/disciplina · ID) | 2027-03-07 · U SG · FIS [131747](https://www.fis-ski.com/DB/general/results.html?seasoncode=2027&sectorcode=AL&raceid=131747) |
| Nome pista / variante | Kvitfjell, variante Super-G uomini, profilo grafico ufficiale dedicato |
| Corrispondenza al 2026/27 | **Confermato un profilo autonomo; dettagli 2027 da verificare** |
| Start SG uomini | 860 m presso Wintherhogget, secondo descrizione dell’organizzatore — [fonte](https://worldcupkvitfjell.no/en/courses) |
| Quota arrivo SG 2027 | non trovata |
| Lunghezza/dislivello 2027 | non trovati nel testo, consultare grafica dedicata — [fonte](https://worldcupkvitfjell.no/en/courses) |
| Max pendenza vicino al via | Wintherhogget 64%, dato della pista — [fonte](https://worldcupkvitfjell.no/en/courses) |
| GPX / KML / GeoJSON verificato | **Non trovato**: non inventare centerline o coordinate |

| # | Sezione | Tipo | s≈ | Nota e fonte | Affidabilità |
|---:|---|---|---|---|---|
| 1 | Wintherhogget / Start SG | partenza sul muro | 0 (relativo) | La partenza SG è circa 860 m secondo descrizione — [fonte](https://worldcupkvitfjell.no/en/courses) | ufficiale, pista |
| 2 | Sletten | scorrimento | n.d. | Settore di alleggerimento verso il salto — [fonte](https://worldcupkvitfjell.no/en/courses) | ufficiale, settore |
| 3 | Russispranget | salto | n.d. | Salto sotto Sletten, presenza SG specifica da ricontrollare sul profilo — [fonte](https://worldcupkvitfjell.no/en/courses) | ufficiale, settore generale |
| 4 | Jansrudhoppet | salto | n.d. | Punto in quota circa 644 m, transito preciso SG da verificare — [fonte](https://worldcupkvitfjell.no/en/courses) | ufficiale, settore |
| 5 | Elgtraversen–S-Svingen | traverso e S | n.d. | Parte del percorso olimpico inferiore, ancora da verificare sul profilo SG — [fonte](https://worldcupkvitfjell.no/en/courses) | ufficiale, percorso generale |
| 6 | Tommy Moe-kanalen / Klemma | canale + compressione | n.d. | Settori bassi, da controllare sul profilo SG — [fonte](https://worldcupkvitfjell.no/en/courses) | ufficiale, percorso generale |
| 7 | Tunnelhoppet / Målhoppet | salti / arrivo | 1 (relativo) | Passaggi presso strada e ferrovia nel corso generale, da verificare per SG — [fonte](https://worldcupkvitfjell.no/en/courses) | ufficiale, percorso generale |

**Dati tecnici.** Vedi tabella della variante: ogni quota, lunghezza, pendenza e omologazione è riferita alla propria fonte e stagione. Quando i numeri provengono da una pista madre o da una gara precedente **non sono da interpretare come specifiche della gara 2026/27**.

**Partenza.** Start storico sulla quota 860 m, non 1.020 m della DH. [fonte](https://worldcupkvitfjell.no/en/courses)

**Traguardo – modello proposto.** Arrivo nel settore comune inferiore del corso olimpico, non estrarre una quota da POI adiacente. [fonte](https://worldcupkvitfjell.no/en/courses)

**Ambiente e attraversamenti.** Wintherhogget, Sletten, canale e compressioni: scena da costruire solo per i settori confermati dal profilo SG. [fonte](https://worldcupkvitfjell.no/en/courses)

**Correzioni all’archivio.** Scheda SG indipendente: non trasferire la partenza della DH; segnalare quali POI sono candidati ma non provati per il 2027.

**Materiale cartografico e geometrico.** Profilo SG uomini e toponimi [fonte](https://worldcupkvitfjell.no/en/courses)

**Lacune.** Riconciliare immagini SG uomini e elenco narrativo, misure reali, distanza degli attraversamenti.

**Fonti dirette principali.** [KV](https://worldcupkvitfjell.no/en/courses) · [KVS](https://worldcupkvitfjell.no/en/courses).

#### Kvitfjell — Olympiabakken — discesa donne

| Campo | Valore |
|---|---|
| Gare locali (data · sesso/disciplina · ID) | 2027-03-12 · D DH · FIS [131683](https://www.fis-ski.com/DB/general/results.html?seasoncode=2027&sectorcode=AL&raceid=131683) |
| Nome pista / variante | Kvitfjell, profilo DH donne ufficiale dedicato (non identificata con la DH uomini) |
| Corrispondenza al 2026/27 | **Fonte ufficiale pubblica un profilo donne; corrispondenza stagionale di start/linea 2027 da confermare** |
| Partenza DH donne | non trascritta: figura ufficiale da consultare — [fonte](https://worldcupkvitfjell.no/en/courses) |
| Arrivo/length/dislivello donne | non trascritti: figura ufficiale da consultare — [fonte](https://worldcupkvitfjell.no/en/courses) |
| Pendenza/larghezza | non trovate |
| GPX / KML / GeoJSON verificato | **Non trovato**: non inventare centerline o coordinate |

| # | Sezione | Tipo | s≈ | Nota e fonte | Affidabilità |
|---:|---|---|---|---|---|
| 1 | Start DH donne | partenza | 0 (relativo) | Posizione distinta da DH uomini, figura dedicata; non usare 1.020 m — [fonte](https://worldcupkvitfjell.no/en/courses) | ufficiale, profilo visivo |
| 2 | Orresvingen | settore vicino alla partenza | n.d. | L’organizzatore menziona osservazioni presso la partenza della discesa donne; non stabilisce distanza — [fonte](https://worldcupkvitfjell.no/en/courses) | ufficiale, contesto |
| 3 | Wintherhogget / Sletten | muro / scorrimento | n.d. | Presenti nel corso generale, appartenenza specifica da verificare con immagine — [fonte](https://worldcupkvitfjell.no/en/courses) | non verificata per donne |
| 4 | Settore inferiore e finish | pendio/arrivo | 1 (relativo) | La pagina mostra profilo DH donne ma non tabella di coordinate — [fonte](https://worldcupkvitfjell.no/en/courses) | ufficiale, profilo visivo |

**Dati tecnici.** Vedi tabella della variante: ogni quota, lunghezza, pendenza e omologazione è riferita alla propria fonte e stagione. Quando i numeri provengono da una pista madre o da una gara precedente **non sono da interpretare come specifiche della gara 2026/27**.

**Partenza.** Start DH donne nel profilo ufficiale: la misura deve essere letta dalla figura prima dell’implementazione. [fonte](https://worldcupkvitfjell.no/en/courses)

**Traguardo – modello proposto.** Arrivo riportato nel profilo visivo ufficiale, misura testuale non trovata. [fonte](https://worldcupkvitfjell.no/en/courses)

**Ambiente e attraversamenti.** La pagina elenca i toponimi del corso olimpico, ma è soprattutto descrizione maschile; non copiare la sequenza completa. [fonte](https://worldcupkvitfjell.no/en/courses)

**Correzioni all’archivio.** Nuovo record DH donne, distinto per genere, senza importazione automatica dei 17 POI uomini.

**Materiale cartografico e geometrico.** Profilo e fonte ufficiale [fonte](https://worldcupkvitfjell.no/en/courses); foto necessaria per quote.

**Lacune.** Numericamente leggere profilo DH donne, identità esatta della pista/linea, start 2027 e relazione con Orresvingen.

**Fonti dirette principali.** [KV](https://worldcupkvitfjell.no/en/courses) · [KVS](https://worldcupkvitfjell.no/en/courses).

#### Kvitfjell — Olympiabakken — Super-G donne

| Campo | Valore |
|---|---|
| Gare locali (data · sesso/disciplina · ID) | 2027-03-13 · D SG · FIS [131684](https://www.fis-ski.com/DB/general/results.html?seasoncode=2027&sectorcode=AL&raceid=131684) |
| Nome pista / variante | Kvitfjell, profilo Super-G donne ufficiale dedicato |
| Corrispondenza al 2026/27 | **Profilo ufficiale presente; lunghezza testuale corretta confermata, altre misure da rileggere** |
| Lunghezza SG donne corretta dall’organizzatore | 2.170 m, corregge la scritta sull’immagine — [fonte](https://worldcupkvitfjell.no/en/courses) |
| Partenza/arrivo/dislivello SG donne | non trascritti dalla figura ufficiale — [fonte](https://worldcupkvitfjell.no/en/courses) |
| Max pendenza/larghezza | non trovate |
| GPX / KML / GeoJSON verificato | **Non trovato**: non inventare centerline o coordinate |

| # | Sezione | Tipo | s≈ | Nota e fonte | Affidabilità |
|---:|---|---|---|---|---|
| 1 | Start SG donne | partenza | 0 (relativo) | Partenza propria, rappresentata nel profilo femminile; quota non riportata nel testo — [fonte](https://worldcupkvitfjell.no/en/courses) | ufficiale, figura |
| 2 | Settori intermedi SG donne | muri e traverse | n.d. | Non dimostrato che tutti i punti del corso maschile siano percorsi — [fonte](https://worldcupkvitfjell.no/en/courses) | non verificata |
| 3 | Finish SG donne | arrivo | 1 (relativo) | Zona finale del profilo visivo, quota da estrarre con verifica — [fonte](https://worldcupkvitfjell.no/en/courses) | ufficiale, figura |

**Dati tecnici.** Vedi tabella della variante: ogni quota, lunghezza, pendenza e omologazione è riferita alla propria fonte e stagione. Quando i numeri provengono da una pista madre o da una gara precedente **non sono da interpretare come specifiche della gara 2026/27**.

**Partenza.** Start quota SG femminile non trovata nel testo; non usare 860 m del SG maschile. [fonte](https://worldcupkvitfjell.no/en/courses)

**Traguardo – modello proposto.** Arrivo del profilo ufficiale SG donne, estensione e quota da verificare. [fonte](https://worldcupkvitfjell.no/en/courses)

**Ambiente e attraversamenti.** Scheda importante perché il gestore corregge espressamente il dato grafico a 2.170 m. Non affidarsi ciecamente al disegno; nessuna georeferenziazione. [fonte](https://worldcupkvitfjell.no/en/courses)

**Correzioni all’archivio.** Nuovo record SG donne, non copia della DH donne né del SG uomini.

**Materiale cartografico e geometrico.** Fonte ufficiale con 4 profili e correzione 2.170 m [fonte](https://worldcupkvitfjell.no/en/courses)

**Lacune.** Verificare altimetria, topologia completa e passaggi, eventuali cambi 2027 e numero di omologazione.

**Fonti dirette principali.** [KV](https://worldcupkvitfjell.no/en/courses) · [KVS](https://worldcupkvitfjell.no/en/courses).

### Germania

#### Garmisch-Partenkirchen — Kandahar 2 — Super-G uomini

| Campo | Valore |
|---|---|
| Gare locali (data · sesso/disciplina · ID) | 2027-02-21 · U SG · FIS [131738](https://www.fis-ski.com/DB/general/results.html?seasoncode=2027&sectorcode=AL&raceid=131738) |
| Nome pista / variante | Kandahar, variante SG maschile; possibile uso di tratti 5b, non DH integrale |
| Corrispondenza al 2026/27 | **Pista Kandahar e disciplina confermate; geometria specifica SG 2027 non verificata** |
| DH maschile 5b, NON SG — start/finish | 1.690 → 770 m — [fonte](https://zugspitze.de/de/Unsere-Bergwelten/Highlights/Kandahar-Abfahrt) |
| DH maschile 5b, NON SG — lunghezza | 3.330 m — [fonte](https://zugspitze.de/de/Unsere-Bergwelten/Highlights/Kandahar-Abfahrt) |
| SG 2027 — start/finish/lunghezza | non trovati |
| Pendenza 92% Freier Fall | caratteristica di un settore della Kandahar, NON certificata per SG — [fonte](https://zugspitze.de/de/Unsere-Bergwelten/Highlights/Kandahar-Abfahrt) |
| GPX / KML / GeoJSON verificato | **Non trovato**: non inventare centerline o coordinate |

| # | Sezione | Tipo | s≈ | Nota e fonte | Affidabilità |
|---:|---|---|---|---|---|
| 1 | Start SG Kandahar | partenza | 0 (relativo) | Non identificato; non usare lo Starthang DH alto — [fonte](https://zugspitze.de/de/Unsere-Bergwelten/Highlights/Kandahar-Abfahrt) | non verificata |
| 2 | Eishang / Himmelreich | muro / passaggio | n.d. | Sezioni della Kandahar descritte dal gestore, inclusione SG da dimostrare — [fonte](https://zugspitze.de/de/Unsere-Bergwelten/Highlights/Kandahar-Abfahrt) | ufficiale, pista generale |
| 3 | Seilbahnsprung | salto | n.d. | Fino a 60 m secondo gestore, attribuibile al SG solo dopo conferma — [fonte](https://zugspitze.de/de/Unsere-Bergwelten/Highlights/Kandahar-Abfahrt) | ufficiale per Kandahar |
| 4 | Freier Fall | muro finale | n.d. | Tratto DH ripido 92%, appartenenza al SG non verificata — [fonte](https://zugspitze.de/de/Unsere-Bergwelten/Highlights/Kandahar-Abfahrt) | ufficiale per variante |
| 5 | Tauber-Schuss | schuss | n.d. | Tratto terminale della Kandahar nella descrizione del gestore — [fonte](https://zugspitze.de/de/Unsere-Bergwelten/Highlights/Kandahar-Abfahrt) | ufficiale, generale |
| 6 | Kreuzeckbahn Talstation | arrivo | 1 (relativo) | Fondo pista, quota di riferimento 770 m — [fonte](https://zugspitze.de/de/Unsere-Bergwelten/Highlights/Kandahar-Abfahrt) | ufficiale, pista |

**Dati tecnici.** Vedi tabella della variante: ogni quota, lunghezza, pendenza e omologazione è riferita alla propria fonte e stagione. Quando i numeri provengono da una pista madre o da una gara precedente **non sono da interpretare come specifiche della gara 2026/27**.

**Partenza.** Cancelletto SG 2027 non localizzato; evitare partenza 1.690 m DH. [fonte](https://zugspitze.de/de/Unsere-Bergwelten/Highlights/Kandahar-Abfahrt)

**Traguardo – modello proposto.** Area Kreuzeckbahn ai piedi della Kandahar; tribune durante evento. [fonte](https://www.skiweltcup-garmisch.com/kandahar-race-women/)

**Ambiente e attraversamenti.** Bosco e radure lungo Kandahar; punti generali elencati dal gestore. La variante 5b non esaurisce automaticamente il SG. [fonte](https://zugspitze.de/de/Unsere-Bergwelten/Highlights/Kandahar-Abfahrt)

**Correzioni all’archivio.** `tracks.json` course-15 è Kandahar DH maschile con POI generici, non SG; mantenere solo i passaggi realmente comuni dopo verifica.

**Materiale cartografico e geometrico.** Zugspitze Kandahar [fonte](https://zugspitze.de/de/Unsere-Bergwelten/Highlights/Kandahar-Abfahrt); comitato locale [fonte](https://www.skiweltcup-garmisch.com/kandahar-race-women/)

**Lacune.** Omologazione e profilo SG; quota partenza/arrivo SG, eventuale attraversamento del Freier Fall; mappe/varianti 5a/5b.

**Fonti dirette principali.** [GM](https://zugspitze.de/de/Unsere-Bergwelten/Highlights/Kandahar-Abfahrt) · [GWO](https://www.skiweltcup-garmisch.com/kandahar-race-women/).

#### Garmisch-Partenkirchen — Kandahar 1 (5a) — discesa donne (due gare)

| Campo | Valore |
|---|---|
| Gare locali (data · sesso/disciplina · ID) | 2027-02-27 · D DH · FIS [131676](https://www.fis-ski.com/DB/general/results.html?seasoncode=2027&sectorcode=AL&raceid=131676)<br>2027-02-28 · D DH · FIS [131677](https://www.fis-ski.com/DB/general/results.html?seasoncode=2027&sectorcode=AL&raceid=131677) |
| Nome pista / variante | Kandahar 1 / 5a, variante storica donne |
| Corrispondenza al 2026/27 | **Probabile: comitato conferma DH femminile sulla Kandahar, ma il mapping esatto con 5a nel 2027 deve essere verificato** |
| Variante 5a — lunghezza | 2.920 m — [fonte](https://zugspitze.de/de/Unsere-Bergwelten/Highlights/Kandahar-Abfahrt) |
| Partenza DH donne storica, secondaria | circa 1.490 m — [fonte](https://de.wikipedia.org/wiki/Kandahar-Abfahrt_Garmisch) |
| Arrivo della pista complessiva | 770 m, dato del gestore per Kandahar — [fonte](https://zugspitze.de/de/Unsere-Bergwelten/Highlights/Kandahar-Abfahrt) |
| Dislivello DH donne 2027 | non trovato; NON usare 920 m della pista 5b |
| Pendenza max 92% Freier Fall | NON attribuibile alla Kandahar 1 donne — [fonte](https://zugspitze.de/de/Unsere-Bergwelten/Highlights/Kandahar-Abfahrt) |
| GPX / KML / GeoJSON verificato | **Non trovato**: non inventare centerline o coordinate |

| # | Sezione | Tipo | s≈ | Nota e fonte | Affidabilità |
|---:|---|---|---|---|---|
| 1 | Partenza Kandahar 1 | partenza | 0 (relativo) | Tröglhang storico a circa 1.490 m, da Wikipedia e NON FIS 2027 — [fonte](https://de.wikipedia.org/wiki/Kandahar-Abfahrt_Garmisch) | secondaria, storica |
| 2 | Schußanger | curve / schuss | n.d. | Due curve nella prima parte riportate nella descrizione storica donne — [fonte](https://de.wikipedia.org/wiki/Kandahar-Abfahrt_Garmisch) | secondaria |
| 3 | Himmelreich | salto / passaggio | n.d. | Cambio di terreno dopo Schußanger; zona partenza SG storica — [fonte](https://de.wikipedia.org/wiki/Kandahar-Abfahrt_Garmisch) | secondaria |
| 4 | Waldeck | traverso ripido | n.d. | Storicamente il tratto a maggior pendenza della variante femminile — [fonte](https://de.wikipedia.org/wiki/Kandahar-Abfahrt_Garmisch) | secondaria |
| 5 | Ramwiesen | deviazione | n.d. | Aggira Eishang nella variante post-2008 — [fonte](https://de.wikipedia.org/wiki/Kandahar-Abfahrt_Garmisch) | secondaria |
| 6 | Höllentor | strettoia | n.d. | Riporta sul tracciato originario — [fonte](https://de.wikipedia.org/wiki/Kandahar-Abfahrt_Garmisch) | secondaria |
| 7 | Hölle | muro | n.d. | Tratto buio, molto mosso; conferma qualitativa anche dal gestore — [fonte](https://zugspitze.de/de/Unsere-Bergwelten/Highlights/Kandahar-Abfahrt) | ufficiale, generale |
| 8 | FIS-Schneise | diagonale | n.d. | Traverso successivo a Hölle — [fonte](https://zugspitze.de/de/Unsere-Bergwelten/Highlights/Kandahar-Abfahrt) | secondaria + nome ufficiale |
| 9 | Tauber-Schuss | schuss / innesto | n.d. | Convergenza sul percorso maschile prima dell’arrivo — [fonte](https://de.wikipedia.org/wiki/Kandahar-Abfahrt_Garmisch) | secondaria |
| 10 | Finish Kandahar | arrivo | 1 (relativo) | Area Kreuzeckbahn, non traguardo Gudiberg — [fonte](https://zugspitze.de/de/Unsere-Bergwelten/Highlights/Kandahar-Abfahrt) | ufficiale venue |

**Dati tecnici.** Vedi tabella della variante: ogni quota, lunghezza, pendenza e omologazione è riferita alla propria fonte e stagione. Quando i numeri provengono da una pista madre o da una gara precedente **non sono da interpretare come specifiche della gara 2026/27**.

**Partenza.** La fonte secondaria storica colloca la partenza delle donne al Tröglhang; la quota ufficiale attuale non è stata trovata. [Kandahar 1, ricostruzione storica](https://de.wikipedia.org/wiki/Kandahar-Abfahrt_Garmisch)

**Traguardo – modello proposto.** Kandahar-Arena accanto alla Kreuzeckbahn; il sito organizzatore presenta due appuntamenti DH femminili ma non il profilo di gara. [fonte](https://www.skiweltcup-garmisch.com/kandahar-race-women/)

**Ambiente e attraversamenti.** La Kandahar 1 passa per Waldeck, Ramwiesen, Höllentor, Hölle, FIS-Schneise e si innesta al Tauber-Schuss; non collocare il Freier Fall maschile. Bosco e tratti in ombra. [fonte](https://de.wikipedia.org/wiki/Kandahar-Abfahrt_Garmisch) / [fonte](https://zugspitze.de/de/Unsere-Bergwelten/Highlights/Kandahar-Abfahrt)

**Correzioni all’archivio.** Nel database course-15 è maschile DH: questo documento obbliga una seconda geometria donna, non una semplice rietichettatura.

**Materiale cartografico e geometrico.** Organizzatore DH donne [fonte](https://www.skiweltcup-garmisch.com/kandahar-race-women/); gestore varianti 5a/5b [fonte](https://zugspitze.de/de/Unsere-Bergwelten/Highlights/Kandahar-Abfahrt); ricostruzione della linea donne [fonte](https://de.wikipedia.org/wiki/Kandahar-Abfahrt_Garmisch) (secondaria).

**Lacune.** Verificare dal race notice 2027 l’uso di 5a e il tracciato dei due giorni; quote e lunghezza reali; versione del 28 febbraio eventualmente modificata.

**Fonti dirette principali.** [GWO](https://www.skiweltcup-garmisch.com/kandahar-race-women/) · [GM](https://zugspitze.de/de/Unsere-Bergwelten/Highlights/Kandahar-Abfahrt) · [GW](https://de.wikipedia.org/wiki/Kandahar-Abfahrt_Garmisch).

### Svizzera

#### Adelboden — Chuenisbärgli — slalom uomini

| Campo | Valore |
|---|---|
| Gare locali (data · sesso/disciplina · ID) | 2027-01-10 · U SL · FIS [131719](https://www.fis-ski.com/DB/general/results.html?seasoncode=2027&sectorcode=AL&raceid=131719) |
| Nome pista / variante | Chuenisbärgli, variante slalom sul Zielhang Giisbrunni |
| Corrispondenza al 2026/27 | **Confermata per la pista e la disciplina; configurazione altimetrica documentata nel programma ufficiale 2026, da riconfermare per gennaio 2027** |
| Partenza SL | 1.513 m — [fonte](https://weltcup-adelboden.ch/wp-content/uploads/2026/01/WC26_Programm_Website-1.pdf) |
| Arrivo SL | 1.302 m — [fonte](https://weltcup-adelboden.ch/wp-content/uploads/2026/01/WC26_Programm_Website-1.pdf) |
| Dislivello SL | 211 m — [fonte](https://weltcup-adelboden.ch/wp-content/uploads/2026/01/WC26_Programm_Website-1.pdf) |
| Lunghezza SL | 622 m — [fonte](https://weltcup-adelboden.ch/wp-content/uploads/2026/01/WC26_Programm_Website-1.pdf) |
| Pendenza massima/media/minima | 60% / 30% / 10% (programma 2026) — [fonte](https://weltcup-adelboden.ch/wp-content/uploads/2026/01/WC26_Programm_Website-1.pdf) |
| Larghezza | non trovata |
| GPX / KML / GeoJSON verificato | **Non trovato**: non inventare centerline o coordinate |

| # | Sezione | Tipo | s≈ | Nota e fonte | Affidabilità |
|---:|---|---|---|---|---|
| 1 | Partenza slalom | partenza | 0 (relativo) | Parte intermedia del Chuenisbärgli, non la partenza GS a 1.730 m — [fonte](https://weltcup-adelboden.ch/wp-content/uploads/2026/01/WC26_Programm_Website-1.pdf) | ufficiale, programma 2026 |
| 2 | Zielhang Giisbrunni | muro finale | n.d. | Settore ripido identificato come unità nella mappa; fino al 60% nel profilo — [fonte](https://weltcup-adelboden.ch/wp-content/uploads/2026/01/WC26_Programm_Website-1.pdf) | ufficiale, programma 2026 |
| 3 | Zielarena / Hexenkessel | arrivo | 1 (relativo) | Fondo pendio e arena degli spettatori; arrivo SL a 1.302 m — [fonte](https://weltcup-adelboden.ch/wp-content/uploads/2026/01/WC26_Programm_Website-1.pdf) | ufficiale, programma 2026 |

**Dati tecnici.** Vedi tabella della variante: ogni quota, lunghezza, pendenza e omologazione è riferita alla propria fonte e stagione. Quando i numeri provengono da una pista madre o da una gara precedente **non sono da interpretare come specifiche della gara 2026/27**.

**Partenza.** Cancelletto SL sul settore medio-basso; il percorso GS a monte (Kanonenrohr, Schnittenmedli) NON va attribuito allo SL. [Programma 2026, p. 17](https://weltcup-adelboden.ch/wp-content/uploads/2026/01/WC26_Programm_Website-1.pdf)

**Traguardo – modello proposto.** Zielarena di Boden, con pubblico ai piedi del muro. [fonte](https://weltcup-adelboden.ch/wp-content/uploads/2026/01/WC26_Programm_Website-1.pdf)

**Ambiente e attraversamenti.** Mappa 2026 mostra pendio e profilo, con partenza SL distinta dalla GS; bosco/impianti e attraversamenti per il segmento SL non misurati. [fonte](https://weltcup-adelboden.ch/wp-content/uploads/2026/01/WC26_Programm_Website-1.pdf)

**Correzioni all’archivio.** `tracks.json` contiene la pista GS (course-09), non il collegamento specifico SL; riutilizzare soltanto la zona finale documentata, non la lunghezza GS di 1.290 m.

**Materiale cartografico e geometrico.** Profilo e cartina nel programma ufficiale 2026, pag. 17; illustrativi, NON GPX/KML: [fonte](https://weltcup-adelboden.ch/wp-content/uploads/2026/01/WC26_Programm_Website-1.pdf)

**Lacune.** Coordinate e progressiva reale del settore Zielhang; planimetria omologazione SL 2027; larghezza e posizione delle porte.

**Fonti dirette principali.** [AD](https://weltcup-adelboden.ch/wp-content/uploads/2026/01/WC26_Programm_Website-1.pdf) · [AD WEB](https://www.weltcup-adelboden.ch/de/Info/Rennen/Rennstrecke).

#### St. Moritz — Engiadina — Super-G donne (due gare)

| Campo | Valore |
|---|---|
| Gare locali (data · sesso/disciplina · ID) | 2026-12-18 · D SG · FIS [131604](https://www.fis-ski.com/DB/general/results.html?seasoncode=2027&sectorcode=AL&raceid=131604)<br>2026-12-19 · D SG · FIS [131605](https://www.fis-ski.com/DB/general/results.html?seasoncode=2027&sectorcode=AL&raceid=131605) |
| Nome pista / variante | Engiadina, partenza Berthod-Kante |
| Corrispondenza al 2026/27 | **Confermata dall’organizzatore per dicembre 2026** |
| Quota partenza | 2.590 m — [fonte](https://www.skiweltcup-stmoritz.ch/de/race-info/rennstrecke) |
| Quota arrivo | non specificata nell’attuale descrizione 2026; 2.040 m sulla mappa dell’edizione 2025 (solo riferimento storico) — [fonte](https://api.skiweltcup-stmoritz.ch/fileadmin/user_upload/ski-world-cup-stmoritz/pdf/pistenplan-wc-stmoritz2025-pr.pdf) |
| Dislivello SG 2026 | non verificato; NON ricavare dalla quota di arrivo storica |
| Lunghezza | 1.950 m indicati nella pagina «Rennstrecke 2026» — [fonte](https://www.skiweltcup-stmoritz.ch/de/race-info/rennstrecke) |
| Pendenza media | 28% indicati nella pagina — [fonte](https://www.skiweltcup-stmoritz.ch/de/race-info/rennstrecke) |
| Larghezza | non trovata |
| GPX / KML / GeoJSON verificato | **Non trovato**: non inventare centerline o coordinate |

| # | Sezione | Tipo | s≈ | Nota e fonte | Affidabilità |
|---:|---|---|---|---|---|
| 1 | Berthod-Kante | partenza/ciglio | 0 (relativo) | Partenza SG sulla cresta a quota 2.590 m — [fonte](https://www.skiweltcup-stmoritz.ch/de/race-info/rennstrecke) | ufficiale 2026 |
| 2 | Lanigiro | passaggio | n.d. | Passaggio alto dopo la Berthod-Kante — [fonte](https://www.skiweltcup-stmoritz.ch/de/race-info/rennstrecke) | ufficiale 2026 |
| 3 | Mauritius-Hang | muro | n.d. | Segue Lanigiro — [fonte](https://www.skiweltcup-stmoritz.ch/de/race-info/rennstrecke) | ufficiale 2026 |
| 4 | Panoramakurve / Mauer | curva attorno a muro | n.d. | La curva panoramica aggira la Mauer — [fonte](https://www.skiweltcup-stmoritz.ch/de/race-info/rennstrecke) | ufficiale 2026 |
| 5 | Weisses Band | schuss | n.d. | Settore successivo, in direzione del Reinaltersprung — [fonte](https://www.skiweltcup-stmoritz.ch/de/race-info/rennstrecke) | ufficiale 2026 |
| 6 | Reinaltersprung | salto | n.d. | Salto citato nel tratto inferiore della pista 2026 — [fonte](https://www.skiweltcup-stmoritz.ch/de/race-info/rennstrecke) | ufficiale 2026 |
| 7 | Engnis / Lärchenweg | strettoia / passaggio | n.d. | Strettoia e settore dei larici prima dell’arrivo — [fonte](https://www.skiweltcup-stmoritz.ch/de/race-info/rennstrecke) | ufficiale 2026 |
| 8 | Salastrains | arrivo | 1 (relativo) | Area d’arrivo collegata al tracciato — [fonte](https://www.skiweltcup-stmoritz.ch/de/race-info/rennstrecke) | ufficiale 2026 |

**Dati tecnici.** Vedi tabella della variante: ogni quota, lunghezza, pendenza e omologazione è riferita alla propria fonte e stagione. Quando i numeri provengono da una pista madre o da una gara precedente **non sono da interpretare come specifiche della gara 2026/27**.

**Partenza.** Berthod-Kante; non confondere con l’antica partenza Britannia DH 2.745 m né con SG2 2.490 m del disegno 2025. [fonte](https://www.skiweltcup-stmoritz.ch/de/race-info/rennstrecke)

**Traguardo – modello proposto.** Salastrains: stadio d’arrivo sui pendii di Corviglia; l’organizzatore rappresenta sul materiale storico seggiovia, piloni e aree pubblico. [fonte](https://api.skiweltcup-stmoritz.ch/fileadmin/user_upload/ski-world-cup-stmoritz/pdf/pistenplan-wc-stmoritz2025-pr.pdf)

**Ambiente e attraversamenti.** Terreno di alta quota, muretti, ondulazioni, strettoia, rocce e larici nominati dalla fonte; non attribuire ai POI coordinate senza rilievo. [fonte](https://www.skiweltcup-stmoritz.ch/de/race-info/rennstrecke)

**Correzioni all’archivio.** Nessuna scheda SG in `tracks.json`; la descrizione 2026 è più aggiornata della planimetria 2025, che parla anche di Romingersprung e Lärchensprung: non trasferirli automaticamente.

**Materiale cartografico e geometrico.** Descrizione ufficiale della pista 2026: [fonte](https://www.skiweltcup-stmoritz.ch/de/race-info/rennstrecke); [mappa ufficiale 2025, PDF (storico)](https://api.skiweltcup-stmoritz.ch/fileadmin/user_upload/ski-world-cup-stmoritz/pdf/pistenplan-wc-stmoritz2025-pr.pdf) con quote, piloni, tracciato schematico, non georiferito.

**Lacune.** Quota arrivo e dislivello 2026; inizio/fine di ogni sezione; variante precisa delle due gare; GPX/KML.

**Fonti dirette principali.** [ST](https://www.skiweltcup-stmoritz.ch/de/race-info/rennstrecke) · [ST25](https://api.skiweltcup-stmoritz.ch/fileadmin/user_upload/ski-world-cup-stmoritz/pdf/pistenplan-wc-stmoritz2025-pr.pdf).

#### St. Moritz — Engiadina — gigante donne

| Campo | Valore |
|---|---|
| Gare locali (data · sesso/disciplina · ID) | 2026-12-20 · D GS · FIS [131606](https://www.fis-ski.com/DB/general/results.html?seasoncode=2027&sectorcode=AL&raceid=131606) |
| Nome pista / variante | Engiadina, variante gigante con partenza presso il pilone 11 |
| Corrispondenza al 2026/27 | **Confermata dall’organizzatore per dicembre 2026; quote intermedie 2026 non pubblicate** |
| Quota partenza | 2.385 m — [fonte](https://www.skiweltcup-stmoritz.ch/de/race-info/rennstrecke) |
| Quota arrivo | Salastrains; numero 2026 non trovato |
| Dislivello | non verificato |
| Lunghezza specifica GS | non trovata |
| Pendenza | non trovata per la variante GS |
| Larghezza | non trovata |
| GPX / KML / GeoJSON verificato | **Non trovato**: non inventare centerline o coordinate |

| # | Sezione | Tipo | s≈ | Nota e fonte | Affidabilità |
|---:|---|---|---|---|---|
| 1 | Pilone 11 / Départ GS | partenza | 0 (relativo) | Inizio appena prima della Mauer, a 2.385 m — [fonte](https://www.skiweltcup-stmoritz.ch/de/race-info/rennstrecke) | ufficiale 2026 |
| 2 | Mauer | muro / settore | n.d. | La partenza è poco prima della Mauer; verificare il preciso lato di ingresso — [fonte](https://www.skiweltcup-stmoritz.ch/de/race-info/rennstrecke) | ufficiale 2026 |
| 3 | Tratto parallelo alla seggiovia | pendio | n.d. | L’organizzatore lo descrive come prosecuzione diretta fino al traguardo — [fonte](https://www.skiweltcup-stmoritz.ch/de/race-info/rennstrecke) | ufficiale 2026 |
| 4 | Salastrains | arrivo | 1 (relativo) | Settore d’arrivo condiviso, ma linea di gara e distanza non confermate identiche al SG — [fonte](https://www.skiweltcup-stmoritz.ch/de/race-info/rennstrecke) | ufficiale 2026 |

**Dati tecnici.** Vedi tabella della variante: ogni quota, lunghezza, pendenza e omologazione è riferita alla propria fonte e stagione. Quando i numeri provengono da una pista madre o da una gara precedente **non sono da interpretare come specifiche della gara 2026/27**.

**Partenza.** Poco prima della Mauer, presso il pilone n. 11; non si parte dalla Berthod-Kante dei SG. [fonte](https://www.skiweltcup-stmoritz.ch/de/race-info/rennstrecke)

**Traguardo – modello proposto.** Salastrains, stesso settore del SG; allestimento e quota della linea di arrivo GS non specificati. [fonte](https://www.skiweltcup-stmoritz.ch/de/race-info/rennstrecke)

**Ambiente e attraversamenti.** Passaggio sul pendio inferiore che corre parallelamente alla seggiovia. La configurazione delle porte di due manche non definisce il terreno fisso. [fonte](https://www.skiweltcup-stmoritz.ch/de/race-info/rennstrecke)

**Correzioni all’archivio.** Aggiungere record GS autonomo, non copiare lo sviluppo 1.950 m o pendenza 28% dell’intero SG.

**Materiale cartografico e geometrico.** Fonte descrittiva 2026 [fonte](https://www.skiweltcup-stmoritz.ch/de/race-info/rennstrecke); mappa 2025 [fonte](https://api.skiweltcup-stmoritz.ch/fileadmin/user_upload/ski-world-cup-stmoritz/pdf/pistenplan-wc-stmoritz2025-pr.pdf) solo contesto, con diversa gara/stagione.

**Lacune.** Lunghezza, dislivello, pendenza GS, quota arrivo e disposizione piloni in relazione alla linea di gara; omologazione.

**Fonti dirette principali.** [ST](https://www.skiweltcup-stmoritz.ch/de/race-info/rennstrecke) · [ST25](https://api.skiweltcup-stmoritz.ch/fileadmin/user_upload/ski-world-cup-stmoritz/pdf/pistenplan-wc-stmoritz2025-pr.pdf).

#### Lenzerheide — Silvano Beltrametti — Super-G donne (due gare)

| Campo | Valore |
|---|---|
| Gare locali (data · sesso/disciplina · ID) | 2027-02-20 · D SG · FIS [131672](https://www.fis-ski.com/DB/general/results.html?seasoncode=2027&sectorcode=AL&raceid=131672)<br>2027-02-21 · D SG · FIS [131673](https://www.fis-ski.com/DB/general/results.html?seasoncode=2027&sectorcode=AL&raceid=131673) |
| Nome pista / variante | Silvano Beltrametti Weltcup Strecke, settore Heimberg/Motta |
| Corrispondenza al 2026/27 | **Confermata per la pista; dimensioni SG da FIS 2022 come riferimento storico, non 2027** |
| SG femminile del 05/03/2022 — partenza | 2.160 m — [fonte](https://www.fis-ski.com/DB/general/results.html?raceid=109001&sectorcode=AL) |
| SG 2022 — arrivo | 1.560 m — [fonte](https://www.fis-ski.com/DB/general/results.html?raceid=109001&sectorcode=AL) |
| SG 2022 — dislivello/lunghezza | 600 m / 1.867 m — [fonte](https://www.fis-ski.com/DB/general/results.html?raceid=109001&sectorcode=AL) |
| SG 2022 — omologazione | 12021/02/16 — [fonte](https://www.fis-ski.com/DB/general/results.html?raceid=109001&sectorcode=AL) |
| Pista DH completa, NON SG — partenza/arrivo | 2.257 / 1.560 m — [fonte](https://www.weltcup-lenzerheide.ch/en/Race-track) |
| DH completa — lunghezza/dislivello | 2.272 m / 697 m — [fonte](https://www.weltcup-lenzerheide.ch/en/Race-track) |
| Pendenze pubblicate per la pista completa | media 35%, max 84%, min 18% — [fonte](https://www.weltcup-lenzerheide.ch/en/Race-track) |
| SG 2027 — partenza, lunghezza e omologazione | non confermate |
| GPX / KML / GeoJSON verificato | **Non trovato**: non inventare centerline o coordinate |

| # | Sezione | Tipo | s≈ | Nota e fonte | Affidabilità |
|---:|---|---|---|---|---|
| 1 | Hemmi-Kuppe / Super-G-Start | partenza e dosso | 0 (relativo) | Ciglio della partenza SG; l’imbocco e la linea devono evitare di uscire troppo larghi — [fonte](https://www.weltcup-lenzerheide.ch/en/Race-track) | ufficiale, descrizione pista |
| 2 | Heimbergkante | ciglio ripido | n.d. | Il gestore associa il settore al GS e a pendenze fino al 70%; non prova che SG attraversi identico passaggio — [fonte](https://www.weltcup-lenzerheide.ch/en/Race-track) | ufficiale, percorso generale |
| 3 | Älpli-S | S e traverso | n.d. | Pendio inclinato a destra, terreno irregolare e cambi di luce — [fonte](https://www.weltcup-lenzerheide.ch/en/Race-track) | ufficiale, percorso generale |
| 4 | Micken-Querfahrt | traverso | n.d. | Tratto intitolato a Michelle Gisin nel 2022; posizione rispetto al SG da confermare — [fonte](https://www.weltcup-lenzerheide.ch/en/Race-track) | ufficiale, percorso generale |
| 5 | Ziel Heimberg / Parpan | arrivo | 1 (relativo) | Area d’arrivo FIS a quota 1.560 m per SG 2022 — [fonte](https://www.fis-ski.com/DB/general/results.html?raceid=109001&sectorcode=AL) | FIS 2022 |

**Dati tecnici.** Vedi tabella della variante: ogni quota, lunghezza, pendenza e omologazione è riferita alla propria fonte e stagione. Quando i numeri provengono da una pista madre o da una gara precedente **non sono da interpretare come specifiche della gara 2026/27**.

**Partenza.** Hemmi-Kuppe è denominazione della partenza SG secondo la pagina tecnica del comitato. [fonte](https://www.weltcup-lenzerheide.ch/en/Race-track)

**Traguardo – modello proposto.** Fondo pendio al margine di Parpan / Heimberg; quote FIS storiche 1.560 m, non quelle della pista turistica 1.530 m. [fonte](https://www.fis-ski.com/DB/general/results.html?raceid=109001&sectorcode=AL) / [Svizzera Turismo](https://www.myswitzerland.com/en-ch/experiences/silvano-beltrametti-piste/)

**Ambiente e attraversamenti.** La fonte ufficiale indica un nuovo tratto scorrevole aggiunto dopo le Finali 2021, un ripido dell’Heimberg e un traverso Älpli-S che cade lateralmente; non usare il 65% del percorso turistico come max SG. [fonte](https://www.weltcup-lenzerheide.ch/en/Race-track)

**Correzioni all’archivio.** `tracks.json` non ha una scheda Lenzerheide; predisporre POI con fonti ma verificare quali sono inclusi in SG. Dimensioni di 2.272 m della DH non vanno copiate.

**Materiale cartografico e geometrico.** Organizzatore con descrizione passaggi [fonte](https://www.weltcup-lenzerheide.ch/en/Race-track); FIS 05.03.2022 [fonte](https://www.fis-ski.com/DB/general/results.html?raceid=109001&sectorcode=AL); descrizione turistica discrepante [fonte](https://www.myswitzerland.com/en-ch/experiences/silvano-beltrametti-piste/)

**Lacune.** Profilo tecnico SG 2027, quote effettive del cancelletto, posizione Micken-Querfahrt/Älpli-S sul SG, larghezza, curve, cartina 2027.

**Fonti dirette principali.** [LE](https://www.weltcup-lenzerheide.ch/en/Race-track) · [LE 22](https://www.fis-ski.com/DB/general/results.html?raceid=109001&sectorcode=AL) · [LE CH](https://www.myswitzerland.com/en-ch/experiences/silvano-beltrametti-piste/) · [LE ST](https://www.weltcup-lenzerheide.ch/de).

#### Wengen — Lauberhorn — Super-G uomini

| Campo | Valore |
|---|---|
| Gare locali (data · sesso/disciplina · ID) | 2027-01-15 · U SG · FIS [131723](https://www.fis-ski.com/DB/general/results.html?seasoncode=2027&sectorcode=AL&raceid=131723) |
| Nome pista / variante | Lauberhorn, variante SG maschile (non DH integrale) |
| Corrispondenza al 2026/27 | **Confermata la località e la disciplina, specifica linea 2027 non documentata in fonti tecniche lette** |
| Partenza SG storica riportata in fonte secondaria | circa 2.025 m, da verificare — [fonte](https://en.wikipedia.org/wiki/Lauberhorn_(downhill_ski_course)) |
| Lunghezza SG storica riportata in fonte secondaria | circa 2.950 m, da verificare — [fonte](https://en.wikipedia.org/wiki/Lauberhorn_(downhill_ski_course)) |
| Arrivo | Innerwengen, se confermata la configurazione consueta — [fonte](https://www.lauberhorn.ch/rennen/) |
| Quote/pendenze/omologazione 2027 | non trovate |
| GPX / KML / GeoJSON verificato | **Non trovato**: non inventare centerline o coordinate |

| # | Sezione | Tipo | s≈ | Nota e fonte | Affidabilità |
|---:|---|---|---|---|---|
| 1 | Partenza Super-G | partenza | 0 (relativo) | Sul Lauberhorn, quota e posizione esatte non confermate per 2027 — [fonte](https://www.lauberhorn.ch/rennen/) | non verificata |
| 2 | Settori intermedi SG | passaggi | n.d. | Quali dei POI della DH (Hundschopf, Canadian Corner, ecc.) sono effettivamente inclusi non verificato — [fonte](https://www.lauberhorn.ch/rennen/abfahrt/) | non verificata |
| 3 | Innerwengen | arrivo | 1 (relativo) | Zona d’arrivo usata per gare Lauberhorn, ma linea SG da verificare — [fonte](https://www.lauberhorn.ch/rennen/) | ufficiale, contesto |

**Dati tecnici.** Vedi tabella della variante: ogni quota, lunghezza, pendenza e omologazione è riferita alla propria fonte e stagione. Quando i numeri provengono da una pista madre o da una gara precedente **non sono da interpretare come specifiche della gara 2026/27**.

**Partenza.** Non usare la partenza DH a 2.315 m; l’eventuale partenza SG inferiore va cercata in un race notice specifico. [fonte](https://www.lauberhorn.ch/rennen/abfahrt/)

**Traguardo – modello proposto.** Zielarena Innerwengen, tribune temporanee e zona media descritte dall’organizzatore. [fonte](https://www.lauberhorn.ch/tickets/uebersicht/kategorien/)

**Ambiente e attraversamenti.** La DH include rocce al Hundschopf, ponte ferroviario a Wasserstation, bosco nella zona Hanneggschuss: nessuno di questi elementi è attribuibile con certezza allo SG senza un profilo della variante. [fonte](https://www.lauberhorn.ch/rennen/abfahrt/)

**Correzioni all’archivio.** `tracks.json` (course-02) contiene solo DH, con Mausefalle inesistente qui evitata; per SG occorre un record indipendente.

**Materiale cartografico e geometrico.** DH e contesto [fonte](https://www.lauberhorn.ch/rennen/abfahrt/); fonte SG storica secondaria [fonte](https://en.wikipedia.org/wiki/Lauberhorn_(downhill_ski_course)). Nessun GPX/KML verificato.

**Lacune.** Profilo ufficiale SG 2027 e relativa partenza; sezioni condivise con DH; longitudine/latitudine affidabili, non trovate.

**Fonti dirette principali.** [WE](https://www.lauberhorn.ch/rennen/abfahrt/) · [WE S](https://www.lauberhorn.ch/rennen/) · [WE T](https://www.lauberhorn.ch/tickets/uebersicht/kategorien/) · [WE O](https://en.wikipedia.org/wiki/Lauberhorn_(downhill_ski_course)).

#### Wengen — Lauberhorn — slalom uomini

| Campo | Valore |
|---|---|
| Gare locali (data · sesso/disciplina · ID) | 2027-01-17 · U SL · FIS [131725](https://www.fis-ski.com/DB/general/results.html?seasoncode=2027&sectorcode=AL&raceid=131725) |
| Nome pista / variante | Slalom Lauberhorn, settore tecnico inferiore di Innerwengen (denominazione specifica da confermare) |
| Corrispondenza al 2026/27 | **Gara presso Wengen confermata; nome preciso della pista SL e dettagli tecnici 2027 non verificati** |
| Partenza / arrivo SL | non trovati |
| Lunghezza / dislivello SL | non trovati |
| Pendenze / omologazione | non trovate |
| GPX / KML / GeoJSON verificato | **Non trovato**: non inventare centerline o coordinate |

| # | Sezione | Tipo | s≈ | Nota e fonte | Affidabilità |
|---:|---|---|---|---|---|
| 1 | Start SL | partenza | 0 (relativo) | Settore tecnico differente dalla partenza DH, non identificato con una quota ufficiale — [fonte](https://www.lauberhorn.ch/rennen/) | non verificata |
| 2 | Pendio tecnico SL | muro | n.d. | Sezione locale da cartografare; i POI della discesa non sono automaticamente applicabili — [fonte](https://www.lauberhorn.ch/rennen/) | non verificata |
| 3 | Zielarena Innerwengen | arrivo | 1 (relativo) | Area di pubblico e arrivo generale Lauberhorn — [fonte](https://www.lauberhorn.ch/tickets/uebersicht/kategorien/) | ufficiale, contesto |

**Dati tecnici.** Vedi tabella della variante: ogni quota, lunghezza, pendenza e omologazione è riferita alla propria fonte e stagione. Quando i numeri provengono da una pista madre o da una gara precedente **non sono da interpretare come specifiche della gara 2026/27**.

**Partenza.** Non trovato il cancelletto SL 2027. [fonte](https://www.lauberhorn.ch/rennen/)

**Traguardo – modello proposto.** Area d’arrivo nel settore Innerwengen, da confrontare con la posizione esatta del finish SL. [fonte](https://www.lauberhorn.ch/tickets/uebersicht/kategorien/)

**Ambiente e attraversamenti.** Nessuna prova di attraversamento della ferroviaria a Wasserstation o dei salti DH nella breve variante SL. [fonte](https://www.lauberhorn.ch/rennen/abfahrt/)

**Correzioni all’archivio.** `tracks.json` (course-02) è DH, non riutilizzabile per SL come geometria.

**Materiale cartografico e geometrico.** Pagina Lauberhorn gare [fonte](https://www.lauberhorn.ch/rennen/); ticket/arena [fonte](https://www.lauberhorn.ch/tickets/uebersicht/kategorien/)

**Lacune.** Nome esatto pista slalom, quota partenza, lunghezza, dislivello, planimetria pista SL e successive eventuali due manche.

**Fonti dirette principali.** [WE S](https://www.lauberhorn.ch/rennen/) · [WE T](https://www.lauberhorn.ch/tickets/uebersicht/kategorien/).

### Austria

#### Kitzbühel — Streifalm — Super-G uomini

| Campo | Valore |
|---|---|
| Gare locali (data · sesso/disciplina · ID) | 2027-01-22 · U SG · FIS [131729](https://www.fis-ski.com/DB/general/results.html?seasoncode=2027&sectorcode=AL&raceid=131729) |
| Nome pista / variante | Streifalm, variante Super-G distinta dalla Streif DH |
| Corrispondenza al 2026/27 | **Confermata dall’organizzatore per la gara 2027** |
| Partenza | 1.345 m — [fonte](https://hahnenkamm.com/rennstrecken/streifalm-super-g/) |
| Arrivo | 805 m — [fonte](https://hahnenkamm.com/rennstrecken/streifalm-super-g/) |
| Dislivello | 540 m — [fonte](https://hahnenkamm.com/rennstrecken/streifalm-super-g/) |
| Lunghezza | 2.150 m — [fonte](https://hahnenkamm.com/rennstrecken/streifalm-super-g/) |
| Pendenza media / max / min sulla pagina 2027 | 24% / 69% / 8% — [fonte](https://hahnenkamm.com/rennstrecken/streifalm-super-g/) |
| Pendenza media / max / min nel bando 2025 | 26% / 76% / 2%; CONFLITTO ufficiale — [fonte](https://cdn.hahnenkamm.com/site/assets/files/67649/2024-10-24-ausschreibung-hkr2025-web.pdf) |
| Omologazione | 14580/09/22 — [fonte](https://hahnenkamm.com/rennstrecken/streifalm-super-g/) |
| GPX / KML / GeoJSON verificato | **Non trovato**: non inventare centerline o coordinate |

| # | Sezione | Tipo | s≈ | Nota e fonte | Affidabilità |
|---:|---|---|---|---|---|
| 1 | Start Streifalm / Seidlalmsee | partenza | 0 (relativo) | Partenza sotto gli invasi Seidlalmsee, creata nel 2011 — [fonte](https://hahnenkamm.com/rennstrecken/streifalm-super-g/) | ufficiale |
| 2 | Starthang | muro | n.d. | 250 m con quasi il 50% di pendenza secondo descrizione attuale — [fonte](https://hahnenkamm.com/rennstrecken/streifalm-super-g/) | ufficiale |
| 3 | Neue Schneise / combinazione S | S e cambio terreno | n.d. | Prima dei primi salti: destra-sinistra su ciglio — [fonte](https://hahnenkamm.com/rennstrecken/streifalm-super-g/) | ufficiale |
| 4 | Seidlalmsprung | salto | n.d. | Innesto sul percorso classico DH della Streif — [fonte](https://hahnenkamm.com/rennstrecken/streifalm-super-g/) | ufficiale |
| 5 | Hausbergkante | salto e muro | n.d. | Seguito dalla difficile Querfahrt — [fonte](https://hahnenkamm.com/rennstrecken/streifalm-super-g/) | ufficiale |
| 6 | Hausberg-Querfahrt | traverso | n.d. | I cambi dx/sx sono tecnicamente importanti — [fonte](https://hahnenkamm.com/rennstrecken/streifalm-super-g/) | ufficiale |
| 7 | Zielschuss | schuss | n.d. | Accelerazione in linea di massima pendenza — [fonte](https://hahnenkamm.com/rennstrecken/streifalm-super-g/) | ufficiale |
| 8 | Rasmusleitn / Zielgelände | pendio e arrivo | 1 (relativo) | Arrivo a 805 m vicino al centro di Kitzbühel — [fonte](https://hahnenkamm.com/rennstrecken/streifalm-super-g/) | ufficiale |

**Dati tecnici.** Vedi tabella della variante: ogni quota, lunghezza, pendenza e omologazione è riferita alla propria fonte e stagione. Quando i numeri provengono da una pista madre o da una gara precedente **non sono da interpretare come specifiche della gara 2026/27**.

**Partenza.** Start adiacente agli invasi Seidlalmsee, ben più in basso della partenza DH a 1.665 m. [fonte](https://hahnenkamm.com/rennstrecken/streifalm-super-g/)

**Traguardo – modello proposto.** Zielgelände/Rasmusleitn, area centrale con tribune. [fonte](https://hahnenkamm.com/rennstrecken/streifalm-super-g/)

**Ambiente e attraversamenti.** Seidlalmsee e «Neue Schneise» tra bosco e radure, passaggio alla Streif dopo il Seidlalmsprung; pendenze ufficiali discrepanti tra le fonti. [fonte](https://hahnenkamm.com/rennstrecken/streifalm-super-g/)

**Correzioni all’archivio.** `tracks.json` course-01 è DH Streif: NON trasferire Mausefalle/Karussell/Starthang della DH al SG; il SG si innesta più tardi.

**Materiale cartografico e geometrico.** Sito Streifalm [fonte](https://hahnenkamm.com/rennstrecken/streifalm-super-g/); bando tecnico 2025 [fonte](https://cdn.hahnenkamm.com/site/assets/files/67649/2024-10-24-ausschreibung-hkr2025-web.pdf); prospetto 2026 [fonte](https://cdn.hahnenkamm.com/site/assets/files/29082/kenndaten-hkr-2026_de.pdf)

**Lacune.** Chiarire perché pagina 2027 e bando 2025 danno massimi diversi (69/76%) e medie diverse (24/26%); quote intermedie e cartografia per singolo anno.

**Fonti dirette principali.** [KI SG](https://hahnenkamm.com/rennstrecken/streifalm-super-g/) · [KI 25](https://cdn.hahnenkamm.com/site/assets/files/67649/2024-10-24-ausschreibung-hkr2025-web.pdf) · [KI 26](https://cdn.hahnenkamm.com/site/assets/files/29082/kenndaten-hkr-2026_de.pdf).

#### Kitzbühel — Ganslern — slalom uomini

| Campo | Valore |
|---|---|
| Gare locali (data · sesso/disciplina · ID) | 2027-01-24 · U SL · FIS [131731](https://www.fis-ski.com/DB/general/results.html?seasoncode=2027&sectorcode=AL&raceid=131731) |
| Nome pista / variante | Ganslern |
| Corrispondenza al 2026/27 | **Confermata dall’organizzatore per la gara 2027** |
| Partenza | 1.004 m — [fonte](https://hahnenkamm.com/rennstrecken/der-ganslern-slalom/) |
| Arrivo | 811 m — [fonte](https://hahnenkamm.com/rennstrecken/der-ganslern-slalom/) |
| Dislivello | 193 m — [fonte](https://hahnenkamm.com/rennstrecken/der-ganslern-slalom/) |
| Lunghezza | 590 m — [fonte](https://hahnenkamm.com/rennstrecken/der-ganslern-slalom/) |
| Pendenza media / max / min | 35% / 70% / 20% — [fonte](https://hahnenkamm.com/rennstrecken/der-ganslern-slalom/) |
| Omologazione | 12647/12/17 — [fonte](https://hahnenkamm.com/rennstrecken/der-ganslern-slalom/) |
| GPX / KML / GeoJSON verificato | **Non trovato**: non inventare centerline o coordinate |

| # | Sezione | Tipo | s≈ | Nota e fonte | Affidabilità |
|---:|---|---|---|---|---|
| 1 | Start Ganslern | partenza | 0 (relativo) | La pista appare poco ripida ma cambia continuamente terreno — [fonte](https://hahnenkamm.com/rennstrecken/der-ganslern-slalom/) | ufficiale |
| 2 | Goasweg | ciglio/attraversamento sentiero | n.d. | Passaggio evidente dopo le prime porte nel ripido — [fonte](https://hahnenkamm.com/rennstrecken/der-ganslern-slalom/) | ufficiale |
| 3 | Hinterganslern | curvone | n.d. | Curve lunghe verso destra prima di un brusco calo di pendenza — [fonte](https://hahnenkamm.com/rennstrecken/der-ganslern-slalom/) | ufficiale |
| 4 | Steilhang | muro | n.d. | Settore fino al 70% — [fonte](https://hahnenkamm.com/rennstrecken/der-ganslern-slalom/) | ufficiale |
| 5 | Höhenweg | attraversamento | n.d. | Passaggio dopo lo Steilhang — [fonte](https://hahnenkamm.com/rennstrecken/der-ganslern-slalom/) | ufficiale |
| 6 | Doppelwelle | due onde | n.d. | Dosso doppio caratteristico — [fonte](https://hahnenkamm.com/rennstrecken/der-ganslern-slalom/) | ufficiale |
| 7 | Querfahrt Hohenegg | traverso | n.d. | Traverso inclinato — [fonte](https://hahnenkamm.com/rennstrecken/der-ganslern-slalom/) | ufficiale |
| 8 | Stadl-Kurve | curva a 90° | n.d. | Cambio di direzione marcato verso sinistra — [fonte](https://hahnenkamm.com/rennstrecken/der-ganslern-slalom/) | ufficiale |
| 9 | Talei | tratto finale | n.d. | Settore finale più dolce, minimo pubblicato 20% — [fonte](https://hahnenkamm.com/rennstrecken/der-ganslern-slalom/) | ufficiale |
| 10 | Ziel Ganslern | arrivo | 1 (relativo) | 811 m, vicino all’area del traguardo della Streif ma su pista differente — [fonte](https://hahnenkamm.com/rennstrecken/der-ganslern-slalom/) | ufficiale |

**Dati tecnici.** Vedi tabella della variante: ogni quota, lunghezza, pendenza e omologazione è riferita alla propria fonte e stagione. Quando i numeri provengono da una pista madre o da una gara precedente **non sono da interpretare come specifiche della gara 2026/27**.

**Partenza.** Start sopra la parte storica Ganslern; tracciato completamente separato dalla Streifalm SG. [fonte](https://hahnenkamm.com/rennstrecken/der-ganslern-slalom/)

**Traguardo – modello proposto.** Arrivo del Ganslern vicino allo Zielgelände di Kitzbühel, quota 811 m. [fonte](https://hahnenkamm.com/rennstrecken/der-ganslern-slalom/)

**Ambiente e attraversamenti.** Numerose variazioni del terreno e passaggi su sentiero; il loro nome non dimostra un attraversamento con strada carrabile. [fonte](https://hahnenkamm.com/rennstrecken/der-ganslern-slalom/)

**Correzioni all’archivio.** Creare un record SL indipendente; i POI generici e 3.315 m della Streif non appartengono al Ganslern.

**Materiale cartografico e geometrico.** Organizzatore Ganslern [fonte](https://hahnenkamm.com/rennstrecken/der-ganslern-slalom/); dati di omologazione coerenti con [fonte](https://cdn.hahnenkamm.com/site/assets/files/67649/2024-10-24-ausschreibung-hkr2025-web.pdf)

**Lacune.** Larghezza, distanze progressive dei dieci passaggi, posizione curve di 1a e 2a manche e cartina quotata.

**Fonti dirette principali.** [KI SL](https://hahnenkamm.com/rennstrecken/der-ganslern-slalom/) · [KI 25](https://cdn.hahnenkamm.com/site/assets/files/67649/2024-10-24-ausschreibung-hkr2025-web.pdf).

#### Flachau — Hermann Maier Weltcupstrecke / Grießenkar — gigante donne

| Campo | Valore |
|---|---|
| Gare locali (data · sesso/disciplina · ID) | 2027-01-04 · D GS · FIS [131654](https://www.fis-ski.com/DB/general/results.html?seasoncode=2027&sectorcode=AL&raceid=131654) |
| Nome pista / variante | Hermann Maier Weltcupstrecke / settore Grießenkar; variante GS 2027 |
| Corrispondenza al 2026/27 | **Località e pista principale probabili; prima configurazione GS 2027 non ancora accompagnata da dati tecnici propri** |
| GS 2027 — partenza/arrivo/lunghezza | non trovati |
| GS 2027 — pendenza/dislivello/omologazione | non trovati |
| SL FIS 2019 — partenza/arrivo | 1.160 → 960 m, SOLO SL — [fonte](https://www.fis-ski.com/DB/pdf/2019/AL/5010/2019AL5010SLR2.pdf) |
| SL storico — lunghezza | 530 m da fonti secondarie, NON dato GS |
| GPX / KML / GeoJSON verificato | **Non trovato**: non inventare centerline o coordinate |

| # | Sezione | Tipo | s≈ | Nota e fonte | Affidabilità |
|---:|---|---|---|---|---|
| 1 | Start gigante | partenza | 0 (relativo) | Previsto più in alto della zona tradizionale SL? NON verificato — [fonte](https://www.flachau.salzburg.at/Audi_FIS_Ski_Weltcup_Flachau) | non verificata |
| 2 | Pendio Grießenkar / Hermann Maier | muro tecnico | n.d. | Nome di pista madre; non ci sono toponimi per passaggi GS — [fonte](https://skiweltcup-flachau.at/en/) | probabile |
| 3 | Settore basso presso Star Jet 1 | pendio | n.d. | Impianto nei pressi della pista, posizione esatta rispetto al GS ignota — [fonte](https://skiweltcup-flachau.at/en/) | ufficiale, comprensorio |
| 4 | Zielbereich | arrivo | 1 (relativo) | Per lo SL è a valle presso il paese, traguardo GS 2027 da verificare — [fonte](https://www.flachau.salzburg.at/Audi_FIS_Ski_Weltcup_Flachau) | probabile, inferita |

**Dati tecnici.** Vedi tabella della variante: ogni quota, lunghezza, pendenza e omologazione è riferita alla propria fonte e stagione. Quando i numeri provengono da una pista madre o da una gara precedente **non sono da interpretare come specifiche della gara 2026/27**.

**Partenza.** Nuova partenza GS 2027 non ancora documentata; impossibile estrapolarla da SL. [fonte](https://www.flachau.salzburg.at/Audi_FIS_Ski_Weltcup_Flachau)

**Traguardo – modello proposto.** Proposta scenografica: arena di paese in notturna sul Grießenkar, compatibilmente con il sito di evento. [fonte](https://skiweltcup-flachau.at/en/)

**Ambiente e attraversamenti.** Settore del Grießenkar e impianto Star Jet 1, luci notturne; i nomi «compressione», «piatto», «muro finale» non risultano passaggi ufficiali. [fonte](https://skiweltcup-flachau.at/en/)

**Correzioni all’archivio.** `tracks.json` course-20 è SL, quindi non fornisce POI GS specifici. Le cifre SL 530 m / 209 m non sono trasferibili.

**Materiale cartografico e geometrico.** Organizzatore [fonte](https://skiweltcup-flachau.at/en/); comunicazione comune [fonte](https://www.flachau.salzburg.at/Audi_FIS_Ski_Weltcup_Flachau); FIS vecchia omologazione SL [fonte](https://www.fis-ski.com/DB/pdf/2019/AL/5010/2019AL5010SLR2.pdf)

**Lacune.** Profilo, start quota e omologazione del nuovo GS 2027; forma del versante e collocazione del sistema di illuminazione.

**Fonti dirette principali.** [FL](https://skiweltcup-flachau.at/en/) · [FL M](https://www.flachau.salzburg.at/Audi_FIS_Ski_Weltcup_Flachau) · [FL OLD](https://www.fis-ski.com/DB/pdf/2019/AL/5010/2019AL5010SLR2.pdf).

#### Saalbach — Zwölferkogel / Schneekristall — discesa uomini

| Campo | Valore |
|---|---|
| Gare locali (data · sesso/disciplina · ID) | 2027-02-27 · U DH · FIS [131741](https://www.fis-ski.com/DB/general/results.html?seasoncode=2027&sectorcode=AL&raceid=131741) |
| Nome pista / variante | Schneekristall, variante DH uomini sullo Zwölferkogel |
| Corrispondenza al 2026/27 | **Nome Schneekristall documentato per mondiali 2025 e confermata la sede Zwölferkogel 2027; stessa linea di gara non verificata** |
| DH uomini mondiali 2025 — partenza | 1.984 m — [fonte](https://press.austria.info/fileadmin/user_upload/Imported/uk/Winter_2024_25/Saalbach/Media_Kit_FIS_Alpine_World_Ski_Championships_Saalbach_2025.pdf) |
| DH uomini mondiali 2025 — arrivo | 1.060 m nel media kit 2025, 1.072 m nel risultato FIS 2025 — [fonte](https://press.austria.info/fileadmin/user_upload/Imported/uk/Winter_2024_25/Saalbach/Media_Kit_FIS_Alpine_World_Ski_Championships_Saalbach_2025.pdf) |
| DH uomini — dislivello 2025 | 924 m media kit / 912 m FIS — [fonte](https://press.austria.info/fileadmin/user_upload/Imported/uk/Winter_2024_25/Saalbach/Media_Kit_FIS_Alpine_World_Ski_Championships_Saalbach_2025.pdf) |
| DH uomini FIS 2025 — lunghezza | 2.918 m — [fonte](https://www.fis-ski.com/DB/general/results.html?raceid=122890&seasoncode=2025&sectorcode=AL) |
| DH 2027 — dimensioni | non trovate |
| GPX / KML / GeoJSON verificato | **Non trovato**: non inventare centerline o coordinate |

| # | Sezione | Tipo | s≈ | Nota e fonte | Affidabilità |
|---:|---|---|---|---|---|
| 1 | Start Schneekristall DH | partenza | 0 (relativo) | Partenza in quota nella zona Zwölferkogel, 1.984 m nel profilo 2025 — [fonte](https://press.austria.info/fileadmin/user_upload/Imported/uk/Winter_2024_25/Saalbach/Media_Kit_FIS_Alpine_World_Ski_Championships_Saalbach_2025.pdf) | ufficiale, storico |
| 2 | Settore superiore Schneekristall | pendio | n.d. | Il profilo 2025 rappresenta i tracciati maschili; passaggi nominati non identificati — [fonte](https://press.austria.info/fileadmin/user_upload/Imported/uk/Winter_2024_25/Saalbach/Media_Kit_FIS_Alpine_World_Ski_Championships_Saalbach_2025.pdf) | ufficiale, mappa storica |
| 3 | Settore tecnico intermedio | terreno | n.d. | Non trovati nomi ufficiali di salti e curve per la specifica pista DH — [fonte](https://press.austria.info/fileadmin/user_upload/Imported/uk/Winter_2024_25/Saalbach/Media_Kit_FIS_Alpine_World_Ski_Championships_Saalbach_2025.pdf) | non trovato |
| 4 | Finish Zwölferkogel | arrivo | 1 (relativo) | Arena di arrivo del 2025 a circa 1.060–1.072 m nelle fonti discordanti — [fonte](https://press.austria.info/fileadmin/user_upload/Imported/uk/Winter_2024_25/Saalbach/Media_Kit_FIS_Alpine_World_Ski_Championships_Saalbach_2025.pdf) | ufficiale, storico |

**Dati tecnici.** Vedi tabella della variante: ogni quota, lunghezza, pendenza e omologazione è riferita alla propria fonte e stagione. Quando i numeri provengono da una pista madre o da una gara precedente **non sono da interpretare come specifiche della gara 2026/27**.

**Partenza.** Start sullo Zwölferkogel; il 2027 può avere start principale e di riserva riconsiderati dalla FIS nella ricognizione 2026. [fonte](https://media.saalbach.com/news-successful-summer-inspection-at-the-zwoelferkogel-for-the-audi-fis-ski-world-cup-saalbach-2027?id=249800&l=english&menueid=10050)

**Traguardo – modello proposto.** Finish stadium Zwölferkogel, pubblico lungo il tracciato, impianti operativi durante l’evento. [fonte](https://www.saalbach.com/skiworldcup)

**Ambiente e attraversamenti.** Panorama alpino di Hinterglemm; le fonti forniscono una cartina dei percorsi del 2025 e non coordinate della centerline 2027. [fonte](https://press.austria.info/fileadmin/user_upload/Imported/uk/Winter_2024_25/Saalbach/Media_Kit_FIS_Alpine_World_Ski_Championships_Saalbach_2025.pdf)

**Correzioni all’archivio.** Nuovo record di pista. Non attribuire alla DH maschile la pista Ulli Maier femminile che è distinta.

**Materiale cartografico e geometrico.** Media kit ufficiale 2025 [fonte](https://press.austria.info/fileadmin/user_upload/Imported/uk/Winter_2024_25/Saalbach/Media_Kit_FIS_Alpine_World_Ski_Championships_Saalbach_2025.pdf); FIS DH 2025 [fonte](https://www.fis-ski.com/DB/general/results.html?raceid=122890&seasoncode=2025&sectorcode=AL); ricognizione 2026 [fonte](https://media.saalbach.com/news-successful-summer-inspection-at-the-zwoelferkogel-for-the-audi-fis-ski-world-cup-saalbach-2027?id=249800&l=english&menueid=10050)

**Lacune.** Conflitto quota arrivo 1.060/1.072 m tra media kit e FIS, lunghezza e profilo 2027; nomi di curve/salti.

**Fonti dirette principali.** [SA 25](https://press.austria.info/fileadmin/user_upload/Imported/uk/Winter_2024_25/Saalbach/Media_Kit_FIS_Alpine_World_Ski_Championships_Saalbach_2025.pdf) · [SA FIS](https://www.fis-ski.com/DB/general/results.html?raceid=122890&seasoncode=2025&sectorcode=AL) · [SA 27](https://media.saalbach.com/news-successful-summer-inspection-at-the-zwoelferkogel-for-the-audi-fis-ski-world-cup-saalbach-2027?id=249800&l=english&menueid=10050) · [SA](https://www.saalbach.com/skiworldcup).

#### Saalbach — Zwölferkogel / Schneekristall — Super-G uomini

| Campo | Valore |
|---|---|
| Gare locali (data · sesso/disciplina · ID) | 2027-02-28 · U SG · FIS [131742](https://www.fis-ski.com/DB/general/results.html?seasoncode=2027&sectorcode=AL&raceid=131742) |
| Nome pista / variante | Schneekristall, variante SG uomini |
| Corrispondenza al 2026/27 | **Pista madre 2027 confermata sullo Zwölferkogel, SG 2025 come riferimento tecnico storico** |
| SG maschile 2025 — partenza | 1.780 m — [fonte](https://press.austria.info/fileadmin/user_upload/Imported/uk/Winter_2024_25/Saalbach/Media_Kit_FIS_Alpine_World_Ski_Championships_Saalbach_2025.pdf) |
| SG maschile 2025 — arrivo | 1.060 m — [fonte](https://press.austria.info/fileadmin/user_upload/Imported/uk/Winter_2024_25/Saalbach/Media_Kit_FIS_Alpine_World_Ski_Championships_Saalbach_2025.pdf) |
| SG maschile 2025 — dislivello | 720 m — [fonte](https://press.austria.info/fileadmin/user_upload/Imported/uk/Winter_2024_25/Saalbach/Media_Kit_FIS_Alpine_World_Ski_Championships_Saalbach_2025.pdf) |
| SG 2025 — lunghezza | non trovata nel profilo consultato |
| SG 2027 — quote e lunghezza effettive | non trovate |
| GPX / KML / GeoJSON verificato | **Non trovato**: non inventare centerline o coordinate |

| # | Sezione | Tipo | s≈ | Nota e fonte | Affidabilità |
|---:|---|---|---|---|---|
| 1 | Start SG Schneekristall | partenza | 0 (relativo) | Start più basso della DH, 1.780 m nel profilo 2025 — [fonte](https://press.austria.info/fileadmin/user_upload/Imported/uk/Winter_2024_25/Saalbach/Media_Kit_FIS_Alpine_World_Ski_Championships_Saalbach_2025.pdf) | ufficiale, storico |
| 2 | Sezioni alte SG | pendio | n.d. | Tracciato storico indicato separatamente nella grafica 2025, senza nomi per le curve — [fonte](https://press.austria.info/fileadmin/user_upload/Imported/uk/Winter_2024_25/Saalbach/Media_Kit_FIS_Alpine_World_Ski_Championships_Saalbach_2025.pdf) | ufficiale, cartina |
| 3 | Zona di scorrimento / muri | passaggio | n.d. | Non trovati toponimi affidabili o ordine preciso per il SG — [fonte](https://press.austria.info/fileadmin/user_upload/Imported/uk/Winter_2024_25/Saalbach/Media_Kit_FIS_Alpine_World_Ski_Championships_Saalbach_2025.pdf) | non trovati |
| 4 | Finish Zwölferkogel | arrivo | 1 (relativo) | Area comune, storicamente circa 1.060 m — [fonte](https://press.austria.info/fileadmin/user_upload/Imported/uk/Winter_2024_25/Saalbach/Media_Kit_FIS_Alpine_World_Ski_Championships_Saalbach_2025.pdf) | ufficiale, storico |

**Dati tecnici.** Vedi tabella della variante: ogni quota, lunghezza, pendenza e omologazione è riferita alla propria fonte e stagione. Quando i numeri provengono da una pista madre o da una gara precedente **non sono da interpretare come specifiche della gara 2026/27**.

**Partenza.** Start SG separato e inferiore alla DH; 2027 da riconfermare. [fonte](https://media.saalbach.com/news-successful-summer-inspection-at-the-zwoelferkogel-for-the-audi-fis-ski-world-cup-saalbach-2027?id=249800&l=english&menueid=10050)

**Traguardo – modello proposto.** Arena dello Zwölferkogel; modello con tribune e fan zone, descritte dall’organizzatore. [fonte](https://www.saalbach.com/skiworldcup)

**Ambiente e attraversamenti.** Pendii con salto, creste e scenario di Hinterglemm; non quantificare la lunghezza dell’intero SG senza un risultato FIS 2027. [fonte](https://www.saalbach.com/skiworldcup)

**Correzioni all’archivio.** Separare DH e SG già nella definizione dei POI, usando la cartina 2025 solo come riferimento temporaneo.

**Materiale cartografico e geometrico.** Media kit e profilo 2025 [fonte](https://press.austria.info/fileadmin/user_upload/Imported/uk/Winter_2024_25/Saalbach/Media_Kit_FIS_Alpine_World_Ski_Championships_Saalbach_2025.pdf); organizzatore [fonte](https://www.saalbach.com/skiworldcup); ispezione [fonte](https://media.saalbach.com/news-successful-summer-inspection-at-the-zwoelferkogel-for-the-audi-fis-ski-world-cup-saalbach-2027?id=249800&l=english&menueid=10050)

**Lacune.** Lunghezza 2025/2027, altimetria SG definitiva, nomi sezioni, modifiche dopo ispezione FIS settembre 2026.

**Fonti dirette principali.** [SA 25](https://press.austria.info/fileadmin/user_upload/Imported/uk/Winter_2024_25/Saalbach/Media_Kit_FIS_Alpine_World_Ski_Championships_Saalbach_2025.pdf) · [SA](https://www.saalbach.com/skiworldcup) · [SA 27](https://media.saalbach.com/news-successful-summer-inspection-at-the-zwoelferkogel-for-the-audi-fis-ski-world-cup-saalbach-2027?id=249800&l=english&menueid=10050).

#### Dachstein West / Gosau — Hornspitz — gigante donne

| Campo | Valore |
|---|---|
| Gare locali (data · sesso/disciplina · ID) | 2026-12-28 · D GS · FIS [131608](https://www.fis-ski.com/DB/general/results.html?seasoncode=2027&sectorcode=AL&raceid=131608) |
| Nome pista / variante | Hornspitz, area Talabfahrt Hornspitz 1 (attribuzione di dettaglio ancora da verificare) |
| Corrispondenza al 2026/27 | **Confermata la sede Hornspitz; linea e quota del GS non verificate** |
| Partenza/arrivo GS 2026 | non trovati |
| Lunghezza/dislivello/pendenze GS | non trovati |
| Omologazione/larghezza GS | non trovate |
| GPX / KML / GeoJSON verificato | **Non trovato**: non inventare centerline o coordinate |

| # | Sezione | Tipo | s≈ | Nota e fonte | Affidabilità |
|---:|---|---|---|---|---|
| 1 | Start GS Hornspitz | partenza | 0 (relativo) | Punto di partenza sul versante Hornspitz non quantificato — [fonte](https://www.dachstein.at/en/skiweltcup) | non verificata |
| 2 | Talabfahrt Hornspitz 1 | pista di collegamento | n.d. | Fonte locale indica questa pista chiusa durante l’evento; non prova che sia l’intera linea GS — [fonte](https://www.sein-salzkammergut.at/audi-fis-ski-weltcup-dachstein-west-gosau/) | secondaria, indizio |
| 3 | Pendio finale Hornspitz | arrivo | n.d. | Arrivo nell’area Hornspitz Gosau — [fonte](https://www.dachstein.at/en/skiweltcup) | ufficiale, area |
| 4 | Area pubblico | stadio temporaneo | n.d. | Impianti e tribune progettati/ispezionati da FIS e Ski Austria — [fonte](https://www.skiaustria-ooe.at/de/news/fis-sommerinspektion-in-dachstein-west) | ufficiale, sopralluogo |

**Dati tecnici.** Vedi tabella della variante: ogni quota, lunghezza, pendenza e omologazione è riferita alla propria fonte e stagione. Quando i numeri provengono da una pista madre o da una gara precedente **non sono da interpretare come specifiche della gara 2026/27**.

**Partenza.** Start e tracciato GS non trovati; cercare la «race run» sulle mappe per squadre. [fonte](https://www.dachstein.at/en/skiweltcup/team-info-ski-world-cup)

**Traguardo – modello proposto.** Arrivo Hornspitz/Gosau, zona di spettatori ispezionata il 02.07.2026. [fonte](https://www.skiaustria-ooe.at/de/news/fis-sommerinspektion-in-dachstein-west)

**Ambiente e attraversamenti.** Boschi e panorama su Gosaukamm e Dachstein documentati per la sede; non ricostruire le linee dal nome Talabfahrt. [fonte](https://www.dachstein.at/en/skiweltcup)

**Correzioni all’archivio.** Nessuna scheda Dachstein in `tracks.json`; la pista 18b Marcel Hirscher Rennstrecke di altra zona non va assegnata automaticamente al WC.

**Materiale cartografico e geometrico.** Organizzatore [fonte](https://www.dachstein.at/en/skiweltcup); mappe per team [fonte](https://www.dachstein.at/en/skiweltcup/team-info-ski-world-cup); sopralluogo [fonte](https://www.skiaustria-ooe.at/de/news/fis-sommerinspektion-in-dachstein-west); Hotel vicino alla pista (secondario) [fonte](https://www.sein-salzkammergut.at/audi-fis-ski-weltcup-dachstein-west-gosau/)

**Lacune.** Tracciato 2026 con partenza, quote, lunghezza, profilo omologazione; cartina fotografica per training e gare indicata su pagina ufficiale.

**Fonti dirette principali.** [DA](https://www.dachstein.at/en/skiweltcup) · [DA TEAMS](https://www.dachstein.at/en/skiweltcup/team-info-ski-world-cup) · [DA SKI](https://www.skiaustria-ooe.at/de/news/fis-sommerinspektion-in-dachstein-west) · [DA TAL](https://www.sein-salzkammergut.at/audi-fis-ski-weltcup-dachstein-west-gosau/).

#### Dachstein West / Gosau — Hornspitz — slalom donne

| Campo | Valore |
|---|---|
| Gare locali (data · sesso/disciplina · ID) | 2026-12-29 · D SL · FIS [131609](https://www.fis-ski.com/DB/general/results.html?seasoncode=2027&sectorcode=AL&raceid=131609) |
| Nome pista / variante | Hornspitz, variante SL |
| Corrispondenza al 2026/27 | **Confermata la sede; differenza geometrica GS/SL e parametri tecnici non trovati** |
| SL 2026 — quote/length/dislivello | non trovati |
| SL 2026 — pendenze e larghezza | non trovate |
| GPX / KML / GeoJSON verificato | **Non trovato**: non inventare centerline o coordinate |

| # | Sezione | Tipo | s≈ | Nota e fonte | Affidabilità |
|---:|---|---|---|---|---|
| 1 | Start SL Hornspitz | partenza | 0 (relativo) | Deve essere distinta dalla partenza GS, ma posizione esatta non verificata — [fonte](https://www.dachstein.at/en/skiweltcup) | non verificata |
| 2 | Pendio SL Hornspitz | pendio tecnico | n.d. | Aree di gara e training rappresentate nella mappa team ufficiale — [fonte](https://www.dachstein.at/en/skiweltcup/team-info-ski-world-cup) | ufficiale, ma senza misure lette |
| 3 | Zielbereich Hornspitz | arrivo | 1 (relativo) | Zona d’arrivo descritta nel programma del comprensorio — [fonte](https://www.dachstein.at/en/skiweltcup) | ufficiale |

**Dati tecnici.** Vedi tabella della variante: ogni quota, lunghezza, pendenza e omologazione è riferita alla propria fonte e stagione. Quando i numeri provengono da una pista madre o da una gara precedente **non sono da interpretare come specifiche della gara 2026/27**.

**Partenza.** Start SL distinto dal GS; non assumere quota inferiore specifica senza documento. [fonte](https://www.dachstein.at/en/skiweltcup)

**Traguardo – modello proposto.** Zona Hornspitz 1, accesso spettatori e impianti limitrofi. [fonte](https://www.dachstein.at/en/skiweltcup/team-info-ski-world-cup)

**Ambiente e attraversamenti.** L’area di evento è stata ispezionata con posizioni previste per telecamere e tribune; la forma del percorso slalom non documentata. [fonte](https://www.skiaustria-ooe.at/de/news/fis-sommerinspektion-in-dachstein-west)

**Correzioni all’archivio.** Non duplicare la scheda GS, segnare i passaggi SL come descrittivi e non toponimi.

**Materiale cartografico e geometrico.** Fonte venue [fonte](https://www.dachstein.at/en/skiweltcup); cartina squadre [fonte](https://www.dachstein.at/en/skiweltcup/team-info-ski-world-cup); ispezione [fonte](https://www.skiaustria-ooe.at/de/news/fis-sommerinspektion-in-dachstein-west)

**Lacune.** Quote, omologazione e tracciato SL; mappa con partenza SL e profilo alla data evento.

**Fonti dirette principali.** [DA](https://www.dachstein.at/en/skiweltcup) · [DA TEAMS](https://www.dachstein.at/en/skiweltcup/team-info-ski-world-cup) · [DA SKI](https://www.skiaustria-ooe.at/de/news/fis-sommerinspektion-in-dachstein-west).

### Italia

#### Alta Badia — Gran Risa — slalom uomini

| Campo | Valore |
|---|---|
| Gare locali (data · sesso/disciplina · ID) | 2026-12-21 · U SL · FIS [131714](https://www.fis-ski.com/DB/general/results.html?seasoncode=2027&sectorcode=AL&raceid=131714) |
| Nome pista / variante | Gran Risa, variante slalom breve |
| Corrispondenza al 2026/27 | **Pista probabile in base all’organizzatore e contesto; quote SL 2027 non confermate con scheda FIS specifica** |
| GS della pista completa, NON SL — quote | 1.868 → 1.420 m — [fonte](https://www.altabadia.org/en/poi/what-to-do-in-alta-badia/detail/poi/the-gran-risa-slope) |
| GS pista intera — lunghezza/dislivello | 1.255 m / 448 m — [fonte](https://www.altabadia.org/en/poi/what-to-do-in-alta-badia/detail/poi/the-gran-risa-slope) |
| SL — quote indicative da fonti secondarie pregresse | circa 1.610 → 1.420 m; 190 m; 602 m: NON verificato per 2027 — [fonte](https://www.oasport.it/2018/12/sci-alpino-gigante-alta-badia-2018-la-mitica-gran-risa-ai-raggi-x-un-pendio-tra-i-piu-difficili-al-mondo/amp/) |
| Max GS intero | 69%, NON attribuire allo SL — [fonte](https://www.altabadia.org/en/poi/what-to-do-in-alta-badia/detail/poi/the-gran-risa-slope) |
| SL — larghezza/pendenze/omologazione | non trovate |
| GPX / KML / GeoJSON verificato | **Non trovato**: non inventare centerline o coordinate |

| # | Sezione | Tipo | s≈ | Nota e fonte | Affidabilità |
|---:|---|---|---|---|---|
| 1 | Start SL | partenza | 0 (relativo) | Da localizzare nel settore inferiore della Gran Risa; non alla partenza GS presso Piz La Ila — [fonte](https://www.altabadia.org/en/poi/what-to-do-in-alta-badia/detail/poi/the-gran-risa-slope) | probabile, non misurata |
| 2 | Settore inferiore nel bosco | muro / canalone | n.d. | Pista ripida nel bosco; esatta sequenza delle porte non pubblicata — [fonte](https://www.altabadia.org/en/poi/what-to-do-in-alta-badia/detail/poi/the-gran-risa-slope) | ufficiale, per pista GS |
| 3 | Gobes dl giat | due gobbe | n.d. | Toponimo del finale del GS, inclusione nello SL da confermare — [fonte](https://www.oasport.it/2018/12/sci-alpino-gigante-alta-badia-2018-la-mitica-gran-risa-ai-raggi-x-un-pendio-tra-i-piu-difficili-al-mondo/amp/) | secondaria / incerta |
| 4 | La Villa | arrivo | 1 (relativo) | Arrivo tradizionale della Gran Risa a quota di riferimento 1.420 m — [fonte](https://www.altabadia.org/en/poi/what-to-do-in-alta-badia/detail/poi/the-gran-risa-slope) | ufficiale per pista completa |

**Dati tecnici.** Vedi tabella della variante: ogni quota, lunghezza, pendenza e omologazione è riferita alla propria fonte e stagione. Quando i numeri provengono da una pista madre o da una gara precedente **non sono da interpretare come specifiche della gara 2026/27**.

**Partenza.** Partenza slalom separata dal GS. [fonte](https://www.altabadia.org/en/poi/what-to-do-in-alta-badia/detail/poi/the-gran-risa-slope)

**Traguardo – modello proposto.** La Villa, bordo paese sotto Piz La Ila. [fonte](https://www.altabadia.org/en/poi/what-to-do-in-alta-badia/detail/poi/the-gran-risa-slope)

**Ambiente e attraversamenti.** Bosco sui pendii della Gran Risa; nessuna prova di curve singole nello SL 2027. [fonte](https://www.altabadia.org/en/poi/what-to-do-in-alta-badia/detail/poi/the-gran-risa-slope)

**Correzioni all’archivio.** `tracks.json` course-05 descrive il GS, non lo SL; non trasferire le tre curve a destra e la lunghezza 1.255 m.

**Materiale cartografico e geometrico.** Gestore Gran Risa [fonte](https://www.altabadia.org/en/poi/what-to-do-in-alta-badia/detail/poi/the-gran-risa-slope); descrizione storica GS della stampa [fonte](https://www.oasport.it/2018/12/sci-alpino-gigante-alta-badia-2018-la-mitica-gran-risa-ai-raggi-x-un-pendio-tra-i-piu-difficili-al-mondo/amp/) (secondaria).

**Lacune.** Scheda tecnica SL FIS con dimensioni definitive; immagine che evidenzi la differenza rispetto al GS; quote intermedie e nomi dei tratti specifici.

**Fonti dirette principali.** [AL](https://www.altabadia.org/en/poi/what-to-do-in-alta-badia/detail/poi/the-gran-risa-slope) · [AL GS](https://www.oasport.it/2018/12/sci-alpino-gigante-alta-badia-2018-la-mitica-gran-risa-ai-raggi-x-un-pendio-tra-i-piu-difficili-al-mondo/amp/).

#### Bormio — Stelvio — Super-G uomini

| Campo | Valore |
|---|---|
| Gare locali (data · sesso/disciplina · ID) | 2026-12-29 · U SG · FIS [131839](https://www.fis-ski.com/DB/general/results.html?seasoncode=2027&sectorcode=AL&raceid=131839) |
| Nome pista / variante | Stelvio, variante Super-G |
| Corrispondenza al 2026/27 | **Pista confermata nella località per la gara SG 2026; variante e dimensioni SG non pubblicate nella fonte tecnica consultata** |
| DH classica, NON SG — partenza/arrivo | 2.255 → 1.245 m — [fonte](https://www.bormioski.eu/pista-stelvio/) |
| DH classica, NON SG — dislivello/lunghezza | 1.010 m / 3.250 m — [fonte](https://www.bormioski.eu/pista-stelvio/) |
| DH 2024–26 variante olimpica, NON SG — partenza/lunghezza | 2.268 m / 3.442 m — [fonte](https://skiworldcup.bormio.eu/en/technical-specifications) |
| SG — quota partenza/dislivello/lunghezza | non trovati |
| SG — pendenza/larghezza/omologazione | non trovati |
| GPX / KML / GeoJSON verificato | **Non trovato**: non inventare centerline o coordinate |

| # | Sezione | Tipo | s≈ | Nota e fonte | Affidabilità |
|---:|---|---|---|---|---|
| 1 | Start SG | partenza | 0 (relativo) | Punto inferiore rispetto alla DH da accertare: non utilizzare Praimont senza prova — [fonte](https://www.bormioski.eu/coppa-del-mondo-bormio) | non verificata |
| 2 | Fontana Lunga / Ermellini | salto e curve | n.d. | Sezioni documentate per la DH, inclusione SG non dimostrata — [fonte](https://www.bormioski.eu/pista-stelvio/) | ufficiale, DH |
| 3 | Carcentina | traverso | n.d. | Diagonale classica della Stelvio, attribuzione al SG da verificare — [fonte](https://www.bormioski.eu/pista-stelvio/) | ufficiale, DH |
| 4 | Prati del Ciuk | pianoro | n.d. | Settore storico a quota circa 1.638 m; inclusione SG da provare — [fonte](https://www.bormioski.eu/pista-stelvio/) | ufficiale, DH |
| 5 | San Pietro / Konta | muro, salto | n.d. | Settori di velocità della parte inferiore della DH, non prova del percorso SG — [fonte](https://www.bormioski.eu/pista-stelvio/) | ufficiale, DH |
| 6 | Stelvio Ski Stadium | arrivo | 1 (relativo) | Area di arrivo della pista di gara — [fonte](https://www.bormioski.eu/coppa-del-mondo-bormio) | ufficiale, venue |

**Dati tecnici.** Vedi tabella della variante: ogni quota, lunghezza, pendenza e omologazione è riferita alla propria fonte e stagione. Quando i numeri provengono da una pista madre o da una gara precedente **non sono da interpretare come specifiche della gara 2026/27**.

**Partenza.** Start SG non trovato; nella vista 3D distinguere una possibile partenza bassa dal cancelletto DH. [fonte](https://www.bormioski.eu/coppa-del-mondo-bormio)

**Traguardo – modello proposto.** Stelvio Ski Stadium, ai margini del paese. [fonte](https://www.bormioski.eu/pista-stelvio/)

**Ambiente e attraversamenti.** Bosco, salto Rocca e tunnel Fontana Lunga appartengono alla pista madre; evitare di collocarli arbitrariamente sul SG. [fonte](https://www.bormioski.eu/pista-stelvio/)

**Correzioni all’archivio.** `tracks.json` (course-03) solo DH e descrizione Carcentina/San Pietro; i numeri DH non sono quelli SG.

**Materiale cartografico e geometrico.** Pista Stelvio [fonte](https://www.bormioski.eu/pista-stelvio/); versione olimpica [fonte](https://skiworldcup.bormio.eu/en/technical-specifications); evento 2026 [fonte](https://www.bormioski.eu/coppa-del-mondo-bormio)

**Lacune.** Profilo e race notice SG 2026/27, coordinate degli estremi, sezioni attraversate. Contrasto tra versioni DH 3.250/3.442 m registrato ma irrilevante per la misura SG.

**Fonti dirette principali.** [BO](https://www.bormioski.eu/pista-stelvio/) · [BO OL](https://skiworldcup.bormio.eu/en/technical-specifications) · [BO EVT](https://www.bormioski.eu/coppa-del-mondo-bormio).

#### Val Gardena / Gröden — Saslong — Super-G uomini

| Campo | Valore |
|---|---|
| Gare locali (data · sesso/disciplina · ID) | 2026-12-18 · U SG · FIS [131711](https://www.fis-ski.com/DB/general/results.html?seasoncode=2027&sectorcode=AL&raceid=131711) |
| Nome pista / variante | Saslong, partenza SG distinta dalla DH |
| Corrispondenza al 2026/27 | **Pista e disciplina confermate. Parametri SG da media kit ufficiale 2024 (riferimento, non prova di identica linea 2026)** |
| Partenza SG | 2.000 m (media kit 2024) — [fonte](https://www.saslong.org/fileadmin/template/files/pdf/news/2024/it-media-kit-audi-fis-skiweltcup-groeden-2024.pdf) |
| Arrivo SG | 1.410 m (Ruacia) — [fonte](https://www.saslong.org/fileadmin/template/files/pdf/news/2024/it-media-kit-audi-fis-skiweltcup-groeden-2024.pdf) |
| Dislivello SG | 590 m — [fonte](https://www.saslong.org/fileadmin/template/files/pdf/news/2024/it-media-kit-audi-fis-skiweltcup-groeden-2024.pdf) |
| Lunghezza SG | 2.365 m — [fonte](https://www.saslong.org/fileadmin/template/files/pdf/news/2024/it-media-kit-audi-fis-skiweltcup-groeden-2024.pdf) |
| Pendenza max/media/min SG | 55,9% / 24,9% / 11,4% (media kit 2024) — [fonte](https://www.saslong.org/fileadmin/template/files/pdf/news/2024/it-media-kit-audi-fis-skiweltcup-groeden-2024.pdf) |
| Partenza DH, NON SG | 2.249 m — [fonte](https://www.saslong.org/fileadmin/template/files/pdf/news/2024/it-media-kit-audi-fis-skiweltcup-groeden-2024.pdf) |
| GPX / KML / GeoJSON verificato | **Non trovato**: non inventare centerline o coordinate |

| # | Sezione | Tipo | s≈ | Nota e fonte | Affidabilità |
|---:|---|---|---|---|---|
| 1 | Start Super-G | partenza | 0 (relativo) | 2.000 m nel media kit ufficiale; circa dopo il Moro lungo la Saslong — [fonte](https://www.saslong.org/fileadmin/template/files/pdf/news/2024/it-media-kit-audi-fis-skiweltcup-groeden-2024.pdf) | ufficiale 2024 |
| 2 | Sochers / Muri di Sochers | muri + curve | n.d. | 1.900 m, fino al 55,9%, complesso di muri e cambi direzione — [fonte](https://www.saslong.org/fileadmin/template/files/pdf/news/2024/it-media-kit-audi-fis-skiweltcup-groeden-2024.pdf) | ufficiale per pista madre |
| 3 | Gobbe del Cammello | gobbe / salto | n.d. | Tratto a quota 1.813 m; transito del SG da verificare nella specifica edizione — [fonte](https://www.saslong.org/fileadmin/template/files/pdf/news/2024/it-media-kit-audi-fis-skiweltcup-groeden-2024.pdf) | ufficiale per pista madre |
| 4 | Ciaslat | dossi e curve | n.d. | Tratto ondulato con 17 dossi documentati dal gestore — [fonte](https://www.saslong.org/en/races/) | ufficiale generale |
| 5 | Nucia | curva + salto | n.d. | Settore basso che lancia verso lo schuss finale — [fonte](https://www.saslong.org/en/races/) | ufficiale generale |
| 6 | Tunnel Jump | salto sopra galleria | n.d. | Galleria stradale sotto lo schuss finale a Santa Cristina — [fonte](https://www.saslong.org/en/races/) | ufficiale generale |
| 7 | Ruacia | arrivo | 1 (relativo) | Stadio di arrivo a Santa Cristina, 1.410 m — [fonte](https://www.saslong.org/fileadmin/template/files/pdf/news/2024/it-media-kit-audi-fis-skiweltcup-groeden-2024.pdf) | ufficiale |

**Dati tecnici.** Vedi tabella della variante: ogni quota, lunghezza, pendenza e omologazione è riferita alla propria fonte e stagione. Quando i numeri provengono da una pista madre o da una gara precedente **non sono da interpretare come specifiche della gara 2026/27**.

**Partenza.** Media kit segna SG a 2.000 m, non Ciampinoi DH 2.249 m. [fonte](https://www.saslong.org/fileadmin/template/files/pdf/news/2024/it-media-kit-audi-fis-skiweltcup-groeden-2024.pdf)

**Traguardo – modello proposto.** Arrivo a Ruacia (Santa Cristina), settore di tribune; non chiamare solo generico «Santa Cristina». [fonte](https://www.saslong.org/en/races/)

**Ambiente e attraversamenti.** Boschi e galleria sotto lo schuss finale, colline e salti; 2024 mappa indica quote per Sochers/Ciaslat/Nucia. [fonte](https://www.saslong.org/fileadmin/template/files/pdf/news/2024/it-media-kit-audi-fis-skiweltcup-groeden-2024.pdf)

**Correzioni all’archivio.** `tracks.json` course-04 è DH: corretto creare record SG 2.365 m e solo POI inferiori con percorso provato; segnalare la sequenza tecnica da ricontrollare.

**Materiale cartografico e geometrico.** Media kit ufficiale 2024 [fonte](https://www.saslong.org/fileadmin/template/files/pdf/news/2024/it-media-kit-audi-fis-skiweltcup-groeden-2024.pdf); organizzatore Saslong [fonte](https://www.saslong.org/en/races/); percorso spettatori [fonte](https://www.saslong.org/en/tickets/ticket-action/)

**Lacune.** Variazioni della partenza 2026 e conferma per gara; posizioni metriche reali della linea SG e dettaglio traiettoria su Camel Humps.

**Fonti dirette principali.** [VG PDF](https://www.saslong.org/fileadmin/template/files/pdf/news/2024/it-media-kit-audi-fis-skiweltcup-groeden-2024.pdf) · [VG](https://www.saslong.org/en/races/) · [VG TC](https://www.saslong.org/en/tickets/ticket-action/).

#### Val di Fassa — La VolatA — discesa donne

| Campo | Valore |
|---|---|
| Gare locali (data · sesso/disciplina · ID) | 2027-01-09 · D DH · FIS [131658](https://www.fis-ski.com/DB/general/results.html?seasoncode=2027&sectorcode=AL&raceid=131658) |
| Nome pista / variante | La VolatA, Col Margherita–Passo San Pellegrino, variante DH |
| Corrispondenza al 2026/27 | **Confermata con scheda tecnica specifica dall’organizzatore** |
| Partenza DH | 2.510 m — [fonte](https://skiworldcup.fassa.com/la-volata) |
| Arrivo DH | 1.880 m — [fonte](https://skiworldcup.fassa.com/la-volata) |
| Dislivello DH | 630 m — [fonte](https://skiworldcup.fassa.com/la-volata) |
| Lunghezza DH | 2.500 m — [fonte](https://skiworldcup.fassa.com/la-volata) |
| Pendenza massima pista | 47% (non localizzata per ciascuna disciplina) — [fonte](https://skiworldcup.fassa.com/la-volata) |
| Larghezza | non trovata |
| GPX / KML / GeoJSON verificato | **Non trovato**: non inventare centerline o coordinate |

| # | Sezione | Tipo | s≈ | Nota e fonte | Affidabilità |
|---:|---|---|---|---|---|
| 1 | Stazione a monte Col Margherita / partenza DH | partenza | 0 (relativo) | Start presso l’impianto a 2.510 m — [fonte](https://skiworldcup.fassa.com/la-volata) | ufficiale |
| 2 | Muro Alberto | muro con curva dx | n.d. | 190 m; lieve curva a destra, alla partenza generale della sequenza tecnica descritta — [fonte](https://skiworldcup.fassa.com/it/ski-world-cup/news/la-coppa-del-mondo-di-sci-torna-in-val-di-fassa) | ufficiale, descrizione pista |
| 3 | Pian del Fabion | scorrimento | n.d. | 200 m nella descrizione 2026; subito dopo Muro Alberto — [fonte](https://skiworldcup.fassa.com/it/ski-world-cup/news/la-coppa-del-mondo-di-sci-torna-in-val-di-fassa) | ufficiale, descrizione |
| 4 | Muro Manfroi | muro/cambio pendenza | n.d. | 280 m, svolta a sinistra — [fonte](https://skiworldcup.fassa.com/it/ski-world-cup/news/la-coppa-del-mondo-di-sci-torna-in-val-di-fassa) | ufficiale, descrizione |
| 5 | La Piana | scorrimento / lieve curva | n.d. | 410 m, ingresso verso i Muri del Poeta — [fonte](https://skiworldcup.fassa.com/it/ski-world-cup/news/la-coppa-del-mondo-di-sci-torna-in-val-di-fassa) | ufficiale, descrizione |
| 6 | Muri del Poeta | muri e traversi | n.d. | Settore più tecnico, descritto come circa 1.000 m — [fonte](https://skiworldcup.fassa.com/it/ski-world-cup/news/la-coppa-del-mondo-di-sci-torna-in-val-di-fassa) | ufficiale, descrizione |
| 7 | Dosso del Camoscio | dosso e avvallamenti | n.d. | Seguito dallo schuss conclusivo — [fonte](https://skiworldcup.fassa.com/la-volata) | ufficiale |
| 8 | Schuss finale / Passo San Pellegrino | finale e arrivo | 1 (relativo) | Arrivo 1.880 m; comunicato cita gli ultimi ~880 m dalla zona Dosso — [fonte](https://skiworldcup.fassa.com/it/ski-world-cup/news/la-coppa-del-mondo-di-sci-torna-in-val-di-fassa) | ufficiale |

**Dati tecnici.** Vedi tabella della variante: ogni quota, lunghezza, pendenza e omologazione è riferita alla propria fonte e stagione. Quando i numeri provengono da una pista madre o da una gara precedente **non sono da interpretare come specifiche della gara 2026/27**.

**Partenza.** Partenza vicino alla stazione a monte Col Margherita. [fonte](https://skiworldcup.fassa.com/la-volata)

**Traguardo – modello proposto.** Arrivo Passo San Pellegrino, tribuna/parterre e ampliamento logistico documentati. [fonte](https://skiworldcup.fassa.com/race-schedule) / [fonte](https://skiworldcup.fassa.com/it/ski-world-cup/news/le-modifiche-sulla-pista-la-volata)

**Ambiente e attraversamenti.** Ambiente dolomitico con terrazza di porfido in partenza, muri, dossi e cambi ritmici; interventi 2026 su salti e neve possono alterare dettagli della linea. [fonte](https://skiworldcup.fassa.com/it/ski-world-cup/news/le-modifiche-sulla-pista-la-volata)

**Correzioni all’archivio.** Nuova pista non contenuta in `tracks.json`; non creare la DH come copia del SG: partenze 30 m differenti e differenza di lunghezza 100 m.

**Materiale cartografico e geometrico.** Scheda DH e profilo grafico ufficiali [fonte](https://skiworldcup.fassa.com/la-volata); descrizione dei settori [fonte](https://skiworldcup.fassa.com/it/ski-world-cup/news/la-coppa-del-mondo-di-sci-torna-in-val-di-fassa); lavori [fonte](https://skiworldcup.fassa.com/it/ski-world-cup/news/le-modifiche-sulla-pista-la-volata)

**Lacune.** Progressive reali dei POI: le lunghezze 190+200+280+410+1000+880 ecc. in testi narrativi non vanno sommate automaticamente alla DH da 2.500 m; configurazione reale delle sezioni può cambiare.

**Fonti dirette principali.** [VF](https://skiworldcup.fassa.com/la-volata) · [VF SE](https://skiworldcup.fassa.com/it/ski-world-cup/news/la-coppa-del-mondo-di-sci-torna-in-val-di-fassa) · [VF MOD](https://skiworldcup.fassa.com/it/ski-world-cup/news/le-modifiche-sulla-pista-la-volata) · [VF EVENT](https://skiworldcup.fassa.com/race-schedule).

#### Val di Fassa — La VolatA — Super-G donne

| Campo | Valore |
|---|---|
| Gare locali (data · sesso/disciplina · ID) | 2027-01-10 · D SG · FIS [131659](https://www.fis-ski.com/DB/general/results.html?seasoncode=2027&sectorcode=AL&raceid=131659) |
| Nome pista / variante | La VolatA, variante Super-G |
| Corrispondenza al 2026/27 | **Confermata da scheda tecnica specifica dell’organizzatore** |
| Partenza SG | 2.480 m — [fonte](https://skiworldcup.fassa.com/la-volata) |
| Arrivo SG | 1.880 m — [fonte](https://skiworldcup.fassa.com/la-volata) |
| Dislivello SG | 600 m — [fonte](https://skiworldcup.fassa.com/la-volata) |
| Lunghezza SG | 2.400 m — [fonte](https://skiworldcup.fassa.com/la-volata) |
| Pendenza massima pista madre | 47% (max generale, non specifico del SG) — [fonte](https://skiworldcup.fassa.com/la-volata) |
| Larghezza | non trovata |
| GPX / KML / GeoJSON verificato | **Non trovato**: non inventare centerline o coordinate |

| # | Sezione | Tipo | s≈ | Nota e fonte | Affidabilità |
|---:|---|---|---|---|---|
| 1 | Terrazza porfirica / start SG | partenza | 0 (relativo) | Partenza sulla terrazza panoramica verso Pale di San Martino, 2.480 m — [fonte](https://skiworldcup.fassa.com/it/ski-world-cup/news/la-coppa-del-mondo-di-sci-torna-in-val-di-fassa) | ufficiale |
| 2 | Muro Alberto | muro | n.d. | Passaggio a partire dalla zona alta; 190 m secondo descrizione storica — [fonte](https://skiworldcup.fassa.com/it/ski-world-cup/news/la-coppa-del-mondo-di-sci-torna-in-val-di-fassa) | ufficiale, descrizione SG |
| 3 | Pian del Fabion | scorrimento | n.d. | Circa 200 m di scorrimento — [fonte](https://skiworldcup.fassa.com/it/ski-world-cup/news/la-coppa-del-mondo-di-sci-torna-in-val-di-fassa) | ufficiale |
| 4 | Muro Manfroi | cambio pendenza | n.d. | 280 m con svolta significativa a sinistra — [fonte](https://skiworldcup.fassa.com/it/ski-world-cup/news/la-coppa-del-mondo-di-sci-torna-in-val-di-fassa) | ufficiale |
| 5 | La Piana | scorrimento | n.d. | Circa 410 m e successiva curva a sinistra verso il settore chiave — [fonte](https://skiworldcup.fassa.com/it/ski-world-cup/news/la-coppa-del-mondo-di-sci-torna-in-val-di-fassa) | ufficiale |
| 6 | Muri del Poeta | muri | n.d. | Settore complesso di circa 1.000 m, maggior dislivello del percorso — [fonte](https://skiworldcup.fassa.com/it/ski-world-cup/news/la-coppa-del-mondo-di-sci-torna-in-val-di-fassa) | ufficiale |
| 7 | Dosso del Camoscio | dossi | n.d. | Serie di ondulazioni che introduce il finale — [fonte](https://skiworldcup.fassa.com/la-volata) | ufficiale |
| 8 | Schuss finale / Passo San Pellegrino | finale | n.d. | Arrivo a 1.880 m — [fonte](https://skiworldcup.fassa.com/la-volata) | ufficiale |

**Dati tecnici.** Vedi tabella della variante: ogni quota, lunghezza, pendenza e omologazione è riferita alla propria fonte e stagione. Quando i numeri provengono da una pista madre o da una gara precedente **non sono da interpretare come specifiche della gara 2026/27**.

**Partenza.** A quota 2.480 m, differente dalla DH 2.510 m; il documento ufficiale prevede partenze di riserva. [fonte](https://skiworldcup.fassa.com/it/ski-world-cup/news/le-modifiche-sulla-pista-la-volata)

**Traguardo – modello proposto.** Area arrivo al Passo San Pellegrino con parterre e tribuna. [fonte](https://skiworldcup.fassa.com/race-schedule)

**Ambiente e attraversamenti.** Toponimi e sequenza reali, ma alcuni descritti per la pista madre. Gli interventi 2026 prevedono nuovi salti/deformazioni per ridurre velocità: non fissarli in coordinate. [fonte](https://skiworldcup.fassa.com/it/ski-world-cup/news/le-modifiche-sulla-pista-la-volata)

**Correzioni all’archivio.** Modello separato rispetto alla DH: 2.400 m, 600 m, quota di partenza 2.480.

**Materiale cartografico e geometrico.** Scheda tecnica SG [fonte](https://skiworldcup.fassa.com/la-volata); sequenza dei tratti e lavori [fonte](https://skiworldcup.fassa.com/it/ski-world-cup/news/la-coppa-del-mondo-di-sci-torna-in-val-di-fassa) / [fonte](https://skiworldcup.fassa.com/it/ski-world-cup/news/le-modifiche-sulla-pista-la-volata)

**Lacune.** Omologazione specifica SG 2027, larghezza e progressiva metrica di Muri del Poeta/Dosso del Camoscio.

**Fonti dirette principali.** [VF](https://skiworldcup.fassa.com/la-volata) · [VF SE](https://skiworldcup.fassa.com/it/ski-world-cup/news/la-coppa-del-mondo-di-sci-torna-in-val-di-fassa) · [VF MOD](https://skiworldcup.fassa.com/it/ski-world-cup/news/le-modifiche-sulla-pista-la-volata).

### Francia

#### Chamonix — La Verte des Houches — slalom uomini

| Campo | Valore |
|---|---|
| Gare locali (data · sesso/disciplina · ID) | 2027-01-30 · U SL · FIS [131734](https://www.fis-ski.com/DB/general/results.html?seasoncode=2027&sectorcode=AL&raceid=131734) |
| Nome pista / variante | Verte des Houches, SOLO segmento basso dello slalom |
| Corrispondenza al 2026/27 | **Confermata dall’organizzatore per la pista SL; misure dalla pagina tecnica** |
| Partenza SL | 1.169 m — [fonte](https://chamonixworldcup.com/fr/la-course/la-piste) |
| Arrivo SL | 985 m — [fonte](https://chamonixworldcup.com/fr/la-course/la-piste) |
| Dislivello SL | 184 m — [fonte](https://chamonixworldcup.com/fr/la-course/la-piste) |
| Lunghezza SL | 624 m — [fonte](https://chamonixworldcup.com/fr/la-course/la-piste) |
| Pendenza min/media/max | 10% / 31% / 45% — [fonte](https://chamonixworldcup.com/fr/la-course/la-piste) |
| Larghezza | non trovata |
| DH completa NON SL — lunghezza | 3.343 m — [fonte](https://chamonixworldcup.com/fr/la-course/la-piste) |
| GPX / KML / GeoJSON verificato | **Non trovato**: non inventare centerline o coordinate |

| # | Sezione | Tipo | s≈ | Nota e fonte | Affidabilità |
|---:|---|---|---|---|---|
| 1 | Start slalom, parte bassa Verte | partenza | 0 (relativo) | Quota 1.169 m; non in cima al Prarion 1.871 m — [fonte](https://chamonixworldcup.com/fr/la-course/la-piste) | ufficiale |
| 2 | Settore vallonato basso | dossi | n.d. | Parte bassa della Verte descritta come ondulata, ma nomi dei singoli dossi non localizzati — [fonte](https://chamonixworldcup.com/fr/la-course/la-piste) | ufficiale, descrizione |
| 3 | Schuss final | schuss | n.d. | Passaggio conclusivo della zona bassa descritto dall’organizzatore — [fonte](https://chamonixworldcup.com/fr/la-course/la-piste) | ufficiale, contesto |
| 4 | Arrivée slalom | arrivo | 1 (relativo) | Traguardo dello slalom a 985 m, differente dal DH storico a 1.001 m — [fonte](https://chamonixworldcup.com/fr/la-course/la-piste) | ufficiale |

**Dati tecnici.** Vedi tabella della variante: ogni quota, lunghezza, pendenza e omologazione è riferita alla propria fonte e stagione. Quando i numeri provengono da una pista madre o da una gara precedente **non sono da interpretare come specifiche della gara 2026/27**.

**Partenza.** Partenza del segmento basso a 1.169 m. [fonte](https://chamonixworldcup.com/fr/la-course/la-piste)

**Traguardo – modello proposto.** Zona finale visibile quasi interamente dalle tribune, secondo l’organizzatore. [fonte](https://chamonixworldcup.com/fr/la-course/la-piste)

**Ambiente e attraversamenti.** Tratti vallonati inferiori e schuss finale; i nomi La Cassure/Rocher Blanc/Goulet della DH alta non vanno copiati nello SL. [testo storico DH](https://a-fond.typepad.fr/alpeo/files/alpeo_3_kandahar_piste_verte.pdf)

**Correzioni all’archivio.** `tracks.json` course-21 è DH storica Les Houches; mantenere la mappa DH orfana nell’indice senza associarla allo SL.

**Materiale cartografico e geometrico.** Organizzatore pista e metriche [fonte](https://chamonixworldcup.com/fr/la-course/la-piste); programma [fonte](https://chamonixworldcup.com/fr/la-course/programme); descrizione DH storica [fonte](https://a-fond.typepad.fr/alpeo/files/alpeo_3_kandahar_piste_verte.pdf)

**Lacune.** Progressive e toponimi dei dossi dello SL, posizione delle 2 manche, linea 3D misurata, larghezza.

**Fonti dirette principali.** [CH](https://chamonixworldcup.com/fr/la-course/la-piste) · [CH PROG](https://chamonixworldcup.com/fr/la-course/programme) · [CH H](https://a-fond.typepad.fr/alpeo/files/alpeo_3_kandahar_piste_verte.pdf).

#### Courchevel — Stade Émile-Allais — slalom donne

| Campo | Valore |
|---|---|
| Gare locali (data · sesso/disciplina · ID) | 2026-12-22 · D SL · FIS [131607](https://www.fis-ski.com/DB/general/results.html?seasoncode=2027&sectorcode=AL&raceid=131607) |
| Nome pista / variante | Stade Émile-Allais, Courchevel 1850, settore Loze |
| Corrispondenza al 2026/27 | **Confermata dal gestore/organizzatore come pista tecnica SL; verifica in loco del preciso start 2026 resta necessaria** |
| Partenza SL | 2.015 m — [fonte](https://ski.worldcupcourchevel.com/en/stade-emile-allais/) |
| Arrivo SL | 1.795 m — [fonte](https://ski.worldcupcourchevel.com/en/stade-emile-allais/) |
| Dislivello SL | 220 m — [fonte](https://ski.worldcupcourchevel.com/en/stade-emile-allais/) |
| Lunghezza SL | 614 m — [fonte](https://ski.worldcupcourchevel.com/en/stade-emile-allais/) |
| Omologazione | 13407/12/19 — [fonte](https://ski.worldcupcourchevel.com/en/stade-emile-allais/) |
| Larghezza/pendenza | non trovate |
| GS non SL — 2.175→1.801 m / 1.039 m | versione GS; NON trasferire — [fonte](https://ski.worldcupcourchevel.com/en/stade-emile-allais/) |
| GPX / KML / GeoJSON verificato | **Non trovato**: non inventare centerline o coordinate |

| # | Sezione | Tipo | s≈ | Nota e fonte | Affidabilità |
|---:|---|---|---|---|---|
| 1 | Départ Stade Émile-Allais | partenza | 0 (relativo) | Start SL a 2.015 m nel settore Loze — [fonte](https://ski.worldcupcourchevel.com/en/stade-emile-allais/) | ufficiale |
| 2 | Pente du stade | muro tecnico | n.d. | Il sito non nomina curve e ripidi intermedi con toponimi ufficiali — [fonte](https://ski.worldcupcourchevel.com/en/stade-emile-allais/) | non trovati |
| 3 | Arrivée Émile-Allais | stadio | n.d. | Traguardo a 1.795 m, vicino al centro 1850 — [fonte](https://ski.worldcupcourchevel.com/en/stade-emile-allais/) | ufficiale |

**Dati tecnici.** Vedi tabella della variante: ogni quota, lunghezza, pendenza e omologazione è riferita alla propria fonte e stagione. Quando i numeri provengono da una pista madre o da una gara precedente **non sono da interpretare come specifiche della gara 2026/27**.

**Partenza.** Stadio Émile-Allais nella zona La Loze, e non una pista casuale di Courchevel. [fonte](https://ski.worldcupcourchevel.com/en/stade-emile-allais/)

**Traguardo – modello proposto.** Arrivo vicino a Croisette, accesso pedonale tramite ascensori INEOS Club House (150 m), accesso sci da La Loze/Plantrey/Chenus. [fonte](https://ski.worldcupcourchevel.com/en/stade-emile-allais/)

**Ambiente e attraversamenti.** Impianto di illuminazione installato nel 2020, quindi rappresentazione notturna possibile; l’impianto Loze è riservato ad atleti/tecnici durante le gare. [fonte](https://ski.worldcupcourchevel.com/en/stade-emile-allais/)

**Correzioni all’archivio.** Non c’è alcuna pista Courchevel in `tracks.json`: aggiungere scheda SL con quote coerenti; non duplicare il GS.

**Materiale cartografico e geometrico.** Organizzatore Courchevel, Stade Émile-Allais [fonte](https://ski.worldcupcourchevel.com/en/stade-emile-allais/)

**Lacune.** Profilo e mappa con sezione più ripida, larghezza, variazioni della partenza effettiva 2026.

**Fonti dirette principali.** [CO](https://ski.worldcupcourchevel.com/en/stade-emile-allais/).

### Andorra

#### Soldeu — Avet — gigante donne

| Campo | Valore |
|---|---|
| Gare locali (data · sesso/disciplina · ID) | 2027-03-06 · D GS · FIS [131678](https://www.fis-ski.com/DB/general/results.html?seasoncode=2027&sectorcode=AL&raceid=131678) |
| Nome pista / variante | Avet, settore Soldeu di Grandvalira |
| Corrispondenza al 2026/27 | **Confermata specificamente da Grandvalira per 2027** |
| Partenza GS | 2.265 m — [fonte](https://www.grandvalira.com/en/resort/slopes/avet) |
| Arrivo GS | 1.837 m — [fonte](https://www.grandvalira.com/en/resort/slopes/avet) |
| Dislivello GS | 428 m — [fonte](https://www.grandvalira.com/en/resort/slopes/avet) |
| Lunghezza GS | 1.242 m — [fonte](https://www.grandvalira.com/en/resort/slopes/avet) |
| Pendenze media/max/min GS | 37% / 65% / 17% — [fonte](https://www.grandvalira.com/en/resort/slopes/avet) |
| Esposizione | NE — [fonte](https://www.grandvalira.com/en/resort/slopes/avet) |
| Conflitto in fonte ufficiale | altra pagina riporta 416 m dislivello GS — [fonte](https://events.grandvalira.com/en/worldcupandorra/slopes) |
| GPX / KML / GeoJSON verificato | **Non trovato**: non inventare centerline o coordinate |

| # | Sezione | Tipo | s≈ | Nota e fonte | Affidabilità |
|---:|---|---|---|---|---|
| 1 | Start Avet GS | partenza | 0 (relativo) | 2.265 m, sopra il tratto SL — [fonte](https://www.grandvalira.com/en/resort/slopes/avet) | ufficiale |
| 2 | Parte alta ripida | muro | n.d. | Tracciato tecnico ad alta pendenza, massimo 65% riferito all’intera pista — [fonte](https://www.grandvalira.com/en/resort/slopes/avet) | ufficiale, generale |
| 3 | Parte centrale Avet | pendio | n.d. | Passaggio con esposizione NE e geometria puntuale non quantificata — [fonte](https://www.grandvalira.com/en/resort/slopes/avet) | ufficiale, generale |
| 4 | Settore basso condiviso con SL | muro tecnico | n.d. | Condivisione geografica evidente dalle quote, non prova della stessa linea di porte — [fonte](https://www.grandvalira.com/en/resort/slopes/avet) | probabile, da verificare |
| 5 | Arrivo Soldeu | arrivo di paese | 1 (relativo) | 1.837 m, settore Soldeu — [fonte](https://www.grandvalira.com/en/resort/slopes/avet) | ufficiale |

**Dati tecnici.** Vedi tabella della variante: ogni quota, lunghezza, pendenza e omologazione è riferita alla propria fonte e stagione. Quando i numeri provengono da una pista madre o da una gara precedente **non sono da interpretare come specifiche della gara 2026/27**.

**Partenza.** Partenza GS Avet 2.265 m, non 2.047 m SL. [fonte](https://www.grandvalira.com/en/resort/slopes/avet)

**Traguardo – modello proposto.** Arrivo Avet nel settore Soldeu, con contesto vicino agli impianti e pubblico. [fonte](https://events.grandvalira.com/en/noticia/soldeu-will-host-womens-alpine-skiing-world-cup-march-2027)

**Ambiente e attraversamenti.** Pista con esposizione nord-est, ripidi fino al 65%; curve singole e punti rocciosi non documentati. [fonte](https://www.grandvalira.com/en/resort/slopes/avet)

**Correzioni all’archivio.** Nuova pista per `tracks.json`; mantenere profilo GS distinto da SL.

**Materiale cartografico e geometrico.** Dati ufficiali specifici [fonte](https://www.grandvalira.com/en/resort/slopes/avet); annuncio pista 2027 [fonte](https://events.grandvalira.com/en/noticia/soldeu-will-host-womens-alpine-skiing-world-cup-march-2027); descrizione alternativa [fonte](https://events.grandvalira.com/en/worldcupandorra/slopes)

**Lacune.** Contraddizione GS 428 m vs 416 m su due siti Grandvalira; planimetria e progressiva, omologazione aggiornata, larghezza.

**Fonti dirette principali.** [SO](https://www.grandvalira.com/en/resort/slopes/avet) · [SO 27](https://events.grandvalira.com/en/noticia/soldeu-will-host-womens-alpine-skiing-world-cup-march-2027) · [SO DIFF](https://events.grandvalira.com/en/worldcupandorra/slopes).

#### Soldeu — Avet — slalom donne

| Campo | Valore |
|---|---|
| Gare locali (data · sesso/disciplina · ID) | 2027-03-07 · D SL · FIS [131679](https://www.fis-ski.com/DB/general/results.html?seasoncode=2027&sectorcode=AL&raceid=131679) |
| Nome pista / variante | Avet, variante SL |
| Corrispondenza al 2026/27 | **Confermata specificamente da Grandvalira per marzo 2027** |
| Partenza SL | 2.047 m — [fonte](https://www.grandvalira.com/en/resort/slopes/avet) |
| Arrivo SL | 1.837 m — [fonte](https://www.grandvalira.com/en/resort/slopes/avet) |
| Dislivello SL | 210 m — [fonte](https://www.grandvalira.com/en/resort/slopes/avet) |
| Lunghezza SL | 609 m — [fonte](https://www.grandvalira.com/en/resort/slopes/avet) |
| Pendenze media/max/min | 37% / 65% / 17% (pagina in inglese) — [fonte](https://www.grandvalira.com/en/resort/slopes/avet) |
| Esposizione | NE — [fonte](https://www.grandvalira.com/en/resort/slopes/avet) |
| GPX / KML / GeoJSON verificato | **Non trovato**: non inventare centerline o coordinate |

| # | Sezione | Tipo | s≈ | Nota e fonte | Affidabilità |
|---:|---|---|---|---|---|
| 1 | Start SL Avet | partenza | 0 (relativo) | 2.047 m, sotto il cancelletto GS — [fonte](https://www.grandvalira.com/en/resort/slopes/avet) | ufficiale |
| 2 | Settore ripido inferiore | muro | n.d. | Massimo pendenza 65% indicato per la pista; posizione esatta non trovata — [fonte](https://www.grandvalira.com/en/resort/slopes/avet) | ufficiale, generale |
| 3 | Arrivo Avet Soldeu | arrivo | 1 (relativo) | 1.837 m, non con la partenza del GS — [fonte](https://www.grandvalira.com/en/resort/slopes/avet) | ufficiale |

**Dati tecnici.** Vedi tabella della variante: ogni quota, lunghezza, pendenza e omologazione è riferita alla propria fonte e stagione. Quando i numeri provengono da una pista madre o da una gara precedente **non sono da interpretare come specifiche della gara 2026/27**.

**Partenza.** Start a quota 2.047 m, dislivello 210 m; non ricopiare i numeri GS. [fonte](https://www.grandvalira.com/en/resort/slopes/avet)

**Traguardo – modello proposto.** Stadio di arrivo nel settore Soldeu. [fonte](https://events.grandvalira.com/en/noticia/soldeu-will-host-womens-alpine-skiing-world-cup-march-2027)

**Ambiente e attraversamenti.** Pista di competizione con esposizione NE; grafica di quote e porte non disponibile nei dati letti. [fonte](https://www.grandvalira.com/en/resort/slopes/avet)

**Correzioni all’archivio.** Creare record SL autonomo; registrare differenze 609 m contro 1.242 m GS.

**Materiale cartografico e geometrico.** Avet dati gestore [fonte](https://www.grandvalira.com/en/resort/slopes/avet); 2027 [fonte](https://events.grandvalira.com/en/noticia/soldeu-will-host-womens-alpine-skiing-world-cup-march-2027); conflitto denominazione max/min da confrontare.

**Lacune.** Larghezza, planimetria, sezioni nomiate; la versione spagnola del sito inverte per errore «pendiente mínima» e «máxima» nella scheda SL: seguire testo inglese salvo ulteriori conferme.

**Fonti dirette principali.** [SO](https://www.grandvalira.com/en/resort/slopes/avet) · [SO 27](https://events.grandvalira.com/en/noticia/soldeu-will-host-womens-alpine-skiing-world-cup-march-2027).

### Slovacchia

#### Jasná — Luková–Koliesko / Luková 2 — slalom donne

| Campo | Valore |
|---|---|
| Gare locali (data · sesso/disciplina · ID) | 2027-01-24 · D SL · FIS [131866](https://www.fis-ski.com/DB/general/results.html?seasoncode=2027&sectorcode=AL&raceid=131866) |
| Nome pista / variante | Luková–Koliesko (area), Luková 2 nei risultati FIS 2024 |
| Corrispondenza al 2026/27 | **Sede confermata nel programma 2027; identificazione tecnica «Luková 2» deriva dai risultati 2024 e resta da verificare per 2027** |
| Partenza SL FIS 2024 | 1.450 m — [fonte](https://www.worldcupjasna.sk/fileadmin/resort_upload/wcj/pdf/Startovacie_listiny/Startovacia_listina_2.kolo_slalom.pdf) |
| Arrivo SL FIS 2024 | 1.250 m — [fonte](https://www.worldcupjasna.sk/fileadmin/resort_upload/wcj/pdf/Startovacie_listiny/Startovacia_listina_2.kolo_slalom.pdf) |
| Dislivello SL FIS 2024 | 200 m — [fonte](https://www.worldcupjasna.sk/fileadmin/resort_upload/wcj/pdf/Startovacie_listiny/Startovacia_listina_2.kolo_slalom.pdf) |
| Omologazione SL FIS 2024 | 11664/02/15 — [fonte](https://www.worldcupjasna.sk/fileadmin/resort_upload/wcj/pdf/Startovacie_listiny/Startovacia_listina_2.kolo_slalom.pdf) |
| Lunghezza SL | non trovata |
| Larghezza/pendenza | non trovate |
| GPX / KML / GeoJSON verificato | **Non trovato**: non inventare centerline o coordinate |

| # | Sezione | Tipo | s≈ | Nota e fonte | Affidabilità |
|---:|---|---|---|---|---|
| 1 | Start Luková 2 | partenza | 0 (relativo) | 1.450 m nei documenti 2024, non certa per 2027 — [fonte](https://www.worldcupjasna.sk/fileadmin/resort_upload/wcj/pdf/Startovacie_listiny/Startovacia_listina_2.kolo_slalom.pdf) | FIS 2024 |
| 2 | Tratto Luková 2 | pendio SL | n.d. | La fonte storica non nomina sezioni intermedie — [fonte](https://www.worldcupjasna.sk/fileadmin/resort_upload/wcj/pdf/Startovacie_listiny/Startovacia_listina_2.kolo_slalom.pdf) | non trovato |
| 3 | Koliesko | arrivo / arena | 1 (relativo) | 1.250 m nel documento SL 2024; programma 2027 indica area Luková–Koliesko — [fonte](https://www.worldcupjasna.sk/en/schedule) | FIS 2024 + ufficiale 2027 |

**Dati tecnici.** Vedi tabella della variante: ogni quota, lunghezza, pendenza e omologazione è riferita alla propria fonte e stagione. Quando i numeri provengono da una pista madre o da una gara precedente **non sono da interpretare come specifiche della gara 2026/27**.

**Partenza.** Partenza della versione SL storica a 1.450 m; da non confondere col gigante che parte più in alto. [fonte](https://www.worldcupjasna.sk/fileadmin/resort_upload/wcj/pdf/Startovacie_listiny/Startovacia_listina_2.kolo_slalom.pdf)

**Traguardo – modello proposto.** Koliesko area pubblico, non assumere la capacità numerica delle tribune dal numero complessivo spettatori. [fonte](https://www.worldcupjasna.sk/en/schedule)

**Ambiente e attraversamenti.** Pendio sul versante nord di Chopok/Jasná nel comprensorio; cartografia per sezione non verificata. [fonte](https://www.worldcupjasna.sk/en/schedule)

**Correzioni all’archivio.** `tracks.json` course-18 è GS, non lo SL 2027. Non copiare i 1.220 m di lunghezza del GS del vecchio MD.

**Materiale cartografico e geometrico.** Organizzatore 2027 [fonte](https://www.worldcupjasna.sk/en/schedule); start list FIS 21/01/2024, corso Luková 2 [fonte](https://www.worldcupjasna.sk/fileadmin/resort_upload/wcj/pdf/Startovacie_listiny/Startovacia_listina_2.kolo_slalom.pdf) (storico).

**Lacune.** Omologazione SL 2027, lunghezza, sequenza di passaggi e tracciato delle manche, eventuali movimenti della partenza.

**Fonti dirette principali.** [JA](https://www.worldcupjasna.sk/en/schedule) · [JA OLD](https://www.worldcupjasna.sk/fileadmin/resort_upload/wcj/pdf/Startovacie_listiny/Startovacia_listina_2.kolo_slalom.pdf).

### Svezia

#### Åre — Arena nazionale — gigante uomini

| Campo | Valore |
|---|---|
| Gare locali (data · sesso/disciplina · ID) | 2027-03-13 · U GS · FIS [131748](https://www.fis-ski.com/DB/general/results.html?seasoncode=2027&sectorcode=AL&raceid=131748) |
| Nome pista / variante | Sveriges alpina nationalarena — variante GS (nome della pista specifica non identificato) |
| Corrispondenza al 2026/27 | **Sede di gara confermata, nome specifico tracciato GS 2027 non verificato** |
| GS di gara FIS 08/02/2026 (non WC) — partenza | 722 m — [fonte](https://www.fis-ski.com/DB/general/results.html?raceid=127719&sectorcode=AL) |
| GS 2026 (non WC) — arrivo | 396 m — [fonte](https://www.fis-ski.com/DB/general/results.html?raceid=127719&sectorcode=AL) |
| GS 2026 (non WC) — dislivello/lunghezza | 326 m / 1.030 m — [fonte](https://www.fis-ski.com/DB/general/results.html?raceid=127719&sectorcode=AL) |
| Omologazione in gara 2026 non WC | 15923/10/25 — [fonte](https://www.fis-ski.com/DB/general/results.html?raceid=127719&sectorcode=AL) |
| GS WC 2027 — dimensioni | non trovate |
| GPX / KML / GeoJSON verificato | **Non trovato**: non inventare centerline o coordinate |

| # | Sezione | Tipo | s≈ | Nota e fonte | Affidabilità |
|---:|---|---|---|---|---|
| 1 | Start GS National Arena | partenza | 0 (relativo) | Gara GS 2027 nella National Arena, quota esatta WC non verificata — [fonte](https://worldcupare.com/en/info-programme/) | ufficiale, venue |
| 2 | Pendio GS | muro e curve | n.d. | FIS 2026 su arena Åre ha parametri tecnici, ma non prova identità della configurazione WC — [fonte](https://www.fis-ski.com/DB/general/results.html?raceid=127719&sectorcode=AL) | FIS altra gara |
| 3 | Ziel National Arena | arrivo | 1 (relativo) | Settore pubblico nazionale presso Åre, quota specifica WC non trovata — [fonte](https://worldcupare.com/en/info-programme/) | ufficiale, venue |

**Dati tecnici.** Vedi tabella della variante: ogni quota, lunghezza, pendenza e omologazione è riferita alla propria fonte e stagione. Quando i numeri provengono da una pista madre o da una gara precedente **non sono da interpretare come specifiche della gara 2026/27**.

**Partenza.** National Arena, non è dimostrato il nome di una pista specifica GS 2027. [fonte](https://worldcupare.com/en/info-programme/)

**Traguardo – modello proposto.** Stadio nazionale di Åre, con zona spettatori; non attribuire un traguardo numerico da altra gara. [fonte](https://www.skistar.com/en/ski-destinations/are/winter-in-are/events/world-cup/)

**Ambiente e attraversamenti.** Pendio alpino con illuminazione e impianti nell’arena; nessun dato di posizione per boschi, rocce, attraversamenti. [fonte](https://worldcupare.com/en/info-programme/)

**Correzioni all’archivio.** Nessuna pista di Åre in `tracks.json`.

**Materiale cartografico e geometrico.** Programma arena [fonte](https://worldcupare.com/en/info-programme/); FIS GS 2026 di altro livello [fonte](https://www.fis-ski.com/DB/general/results.html?raceid=127719&sectorcode=AL)

**Lacune.** Nome piste GS, mappa arena con linea 2027 e geometria, altimetria e start; il 722/396 m è un evento FIS giovanile, non la gara WC.

**Fonti dirette principali.** [AR](https://worldcupare.com/en/info-programme/) · [AR FIS](https://www.fis-ski.com/DB/general/results.html?raceid=127719&sectorcode=AL) · [AR ST](https://www.skistar.com/en/ski-destinations/are/winter-in-are/events/world-cup/).

#### Åre — Arena nazionale — slalom uomini

| Campo | Valore |
|---|---|
| Gare locali (data · sesso/disciplina · ID) | 2027-03-14 · U SL · FIS [131749](https://www.fis-ski.com/DB/general/results.html?seasoncode=2027&sectorcode=AL&raceid=131749) |
| Nome pista / variante | Sveriges alpina nationalarena, variante SL non identificata nominalmente |
| Corrispondenza al 2026/27 | **Sede confermata, tracciato slalom 2027 non verificato** |
| Partenza/arrivo SL WC 2027 | non trovati |
| Lunghezza/dislivello SL | non trovati |
| Pendenza/larghezza/omologazione SL | non trovate |
| GPX / KML / GeoJSON verificato | **Non trovato**: non inventare centerline o coordinate |

| # | Sezione | Tipo | s≈ | Nota e fonte | Affidabilità |
|---:|---|---|---|---|---|
| 1 | Start SL Åre | partenza | 0 (relativo) | Da distinguere dalla partenza GS — [fonte](https://worldcupare.com/en/info-programme/) | non verificata |
| 2 | Parte ripida SL | muro | n.d. | L’organizzatore non nomina sezioni del pendio tecnico — [fonte](https://worldcupare.com/en/info-programme/) | non verificata |
| 3 | Finish National Arena | arrivo | 1 (relativo) | Zona dell’arena; quota e linea effettiva non pubblicate — [fonte](https://worldcupare.com/en/info-programme/) | ufficiale venue |

**Dati tecnici.** Vedi tabella della variante: ogni quota, lunghezza, pendenza e omologazione è riferita alla propria fonte e stagione. Quando i numeri provengono da una pista madre o da una gara precedente **non sono da interpretare come specifiche della gara 2026/27**.

**Partenza.** La National Arena è confermata come sede; quota SL non trovata. [fonte](https://worldcupare.com/en/info-programme/)

**Traguardo – modello proposto.** Zona pubblico della National Arena. [fonte](https://www.skistar.com/en/ski-destinations/are/winter-in-are/events/world-cup/)

**Ambiente e attraversamenti.** Non è verificato se la pista SL attraversi il punto più ripido di un GS precedente; i numeri 722→396 m non vanno usati per SL. [fonte](https://www.fis-ski.com/DB/general/results.html?raceid=127719&sectorcode=AL)

**Correzioni all’archivio.** Scheda SL autonoma e generica finché non emerga cartina ufficiale; niente coordinate inventate.

**Materiale cartografico e geometrico.** Organizzatore [fonte](https://worldcupare.com/en/info-programme/); comprensorio [fonte](https://www.skistar.com/en/ski-destinations/are/winter-in-are/events/world-cup/)

**Lacune.** Nome ufficiale pendio, quote/lunghezza, profilo FIS, passaggi intermedi, posizione illuminazione.

**Fonti dirette principali.** [AR](https://worldcupare.com/en/info-programme/) · [AR ST](https://www.skistar.com/en/ski-destinations/are/winter-in-are/events/world-cup/).

### Stati Uniti

#### Copper Mountain — Stifel Copper Cup — Super-G uomini

| Campo | Valore |
|---|---|
| Gare locali (data · sesso/disciplina · ID) | 2026-11-28 · U SG · FIS [131697](https://www.fis-ski.com/DB/general/results.html?seasoncode=2027&sectorcode=AL&raceid=131697) |
| Nome pista / variante | Copper Mountain East Village, tratto finale Rosi’s Run; il nome dell’intera linea SG resta da verificare |
| Corrispondenza al 2026/27 | **Venue e finale Rosi’s Run confermati dal comprensorio; intero corso SG 2026 non delimitato** |
| Speed Center training — dislivello massimo | 2.300 ft (campo di allenamento), NON misure SG gara — [fonte](https://www.coppercolorado.com/copper-cup/athletes-mountain/alpine-ski-racing/) |
| Speed Center training — lunghezza massima | 2 miglia (campo di allenamento), NON lunghezza SG gara — [fonte](https://www.coppercolorado.com/copper-cup/athletes-mountain/alpine-ski-racing/) |
| SG World Cup 2026 — start/finish/lunghezza | non trovati |
| GPX / KML / GeoJSON verificato | **Non trovato**: non inventare centerline o coordinate |

| # | Sezione | Tipo | s≈ | Nota e fonte | Affidabilità |
|---:|---|---|---|---|---|
| 1 | Speed Center / East Village | area di partenza | 0 (relativo) | L’area Speed Center è un campo di allenamento, non prova del cancelletto SG — [fonte](https://www.coppercolorado.com/copper-cup/athletes-mountain/alpine-ski-racing/) | ufficiale, training |
| 2 | Settore intermedio SG | pendio | n.d. | Non trovata mappa precisa del percorso di gara — [fonte](https://www.coppercolorado.com/copper-cup/athletes-mountain/alpine-ski-racing/) | non verificata |
| 3 | Rosi’s Run | pendio finale | n.d. | Il comprensorio afferma che questa pista costituisce il finale del venue Copper Cup — [fonte](https://www.coppercolorado.com/copper-cup/athletes-mountain/alpine-ski-racing/) | ufficiale 2026 |
| 4 | East Village finish | arrivo | 1 (relativo) | Hub pubblico con tribune di gara — [fonte](https://www.townoffrisco.com/event/copper-mountain-events/copper-cup/) | ufficiale venue |

**Dati tecnici.** Vedi tabella della variante: ogni quota, lunghezza, pendenza e omologazione è riferita alla propria fonte e stagione. Quando i numeri provengono da una pista madre o da una gara precedente **non sono da interpretare come specifiche della gara 2026/27**.

**Partenza.** Partenza Super-G da identificare; il dato «2 miglia» descrive il percorso massimo d’allenamento. [fonte](https://www.coppercolorado.com/copper-cup/athletes-mountain/alpine-ski-racing/)

**Traguardo – modello proposto.** East Village e zona di pubblico; tribune e VIP offerti per Copper Cup. [fonte](https://www.townoffrisco.com/event/copper-mountain-events/copper-cup/)

**Ambiente e attraversamenti.** Rosi’s Run pista n. 8, dedicata a Rosi Mittermaier, nella zona East Village. [fonte](https://www.coppercolorado.com/copper-cup/athletes-mountain/alpine-ski-racing/)

**Correzioni all’archivio.** Nessuna scheda Copper in `tracks.json`; non confondere i tracciati di allenamento Copper Tech Center con la corsa WC.

**Materiale cartografico e geometrico.** Copper Mountain centro gare [fonte](https://www.coppercolorado.com/copper-cup/athletes-mountain/alpine-ski-racing/); dettagli area pubblica [fonte](https://www.townoffrisco.com/event/copper-mountain-events/copper-cup/)

**Lacune.** Esatto start, quale tratto dello Speed Center è usato, quota/lunghezza SG e mappe segnaletiche.

**Fonti dirette principali.** [CU](https://www.coppercolorado.com/copper-cup/athletes-mountain/alpine-ski-racing/) · [CU EVENT](https://www.townoffrisco.com/event/copper-mountain-events/copper-cup/).

#### Copper Mountain — Stifel Copper Cup — gigante uomini

| Campo | Valore |
|---|---|
| Gare locali (data · sesso/disciplina · ID) | 2026-11-29 · U GS · FIS [131698](https://www.fis-ski.com/DB/general/results.html?seasoncode=2027&sectorcode=AL&raceid=131698) |
| Nome pista / variante | Copper Mountain, East Village; pista GS specifica non verificata |
| Corrispondenza al 2026/27 | **Venue confermato; Andy’s Encore/Ore Deal NON identificate come gara GS 2026** |
| Giant Slalom Alpine Tech Center — dislivello massimo set | 450 m per allenamento, NON dato della gara — [fonte](https://www.coppercolorado.com/copper-cup/athletes-mountain/alpine-ski-racing/) |
| GS WC 2026 — quote/lunghezza/dislivello | non trovati |
| Pendenza/omologazione/larghezza | non trovate |
| GPX / KML / GeoJSON verificato | **Non trovato**: non inventare centerline o coordinate |

| # | Sezione | Tipo | s≈ | Nota e fonte | Affidabilità |
|---:|---|---|---|---|---|
| 1 | Start GS Copper | partenza | 0 (relativo) | Non indicato nella descrizione della gara — [fonte](https://www.coppercolorado.com/copper-cup/athletes-mountain/alpine-ski-racing/) | non verificata |
| 2 | Andy’s Encore / Ore Deal | piste centro tecnico | n.d. | Due piste di training GS/SL, non dimostrato che ospitino la gara — [fonte](https://www.coppercolorado.com/copper-cup/athletes-mountain/alpine-ski-racing/) | ufficiale, training |
| 3 | Rosi’s Run | settore finale venue | n.d. | Dichiarato finale del venue Copper Cup; inclusione precisa nel GS va verificata — [fonte](https://www.coppercolorado.com/copper-cup/athletes-mountain/alpine-ski-racing/) | ufficiale, area |
| 4 | East Village Finish | arrivo | 1 (relativo) | Settore organizzativo generale — [fonte](https://www.townoffrisco.com/event/copper-mountain-events/copper-cup/) | ufficiale, area |

**Dati tecnici.** Vedi tabella della variante: ogni quota, lunghezza, pendenza e omologazione è riferita alla propria fonte e stagione. Quando i numeri provengono da una pista madre o da una gara precedente **non sono da interpretare come specifiche della gara 2026/27**.

**Partenza.** Partenza GS ignota; non assegnare Andy’s Encore senza prova. [fonte](https://www.coppercolorado.com/copper-cup/athletes-mountain/alpine-ski-racing/)

**Traguardo – modello proposto.** East Village, area di tribune dell’evento. [fonte](https://www.townoffrisco.com/event/copper-mountain-events/copper-cup/)

**Ambiente e attraversamenti.** Due piste tecniche Andy’s Encore e Ore Deal a ovest dello Speed Center, ma potrebbero essere solo training venues. [fonte](https://www.coppercolorado.com/copper-cup/athletes-mountain/alpine-ski-racing/)

**Correzioni all’archivio.** Creare un record GS indipendente dal SG, in attesa della race map 2026.

**Materiale cartografico e geometrico.** Centro tecnico e speed [fonte](https://www.coppercolorado.com/copper-cup/athletes-mountain/alpine-ski-racing/); sede gara [fonte](https://www.townoffrisco.com/event/copper-mountain-events/copper-cup/)

**Lacune.** Pista esatta scelta, partenza, arrivo, misure e contorno 3D.

**Fonti dirette principali.** [CU](https://www.coppercolorado.com/copper-cup/athletes-mountain/alpine-ski-racing/) · [CU EVENT](https://www.townoffrisco.com/event/copper-mountain-events/copper-cup/).

### Canada

#### Tremblant — Flying Mile — gigante donne (due gare)

| Campo | Valore |
|---|---|
| Gare locali (data · sesso/disciplina · ID) | 2026-12-05 · D GS · FIS [131597](https://www.fis-ski.com/DB/general/results.html?seasoncode=2027&sectorcode=AL&raceid=131597)<br>2026-12-06 · D GS · FIS [131598](https://www.fis-ski.com/DB/general/results.html?seasoncode=2027&sectorcode=AL&raceid=131598) |
| Nome pista / variante | Flying Mile, parte finale Johansson Pitch |
| Corrispondenza al 2026/27 | **Confermata dal comitato 2026 con descrizione dettagliata delle macrosezioni** |
| Quota partenza/arrivo | non trovate |
| Lunghezza/dislivello GS | non trovati |
| Pendenza/larghezza/omologazione | non trovate |
| GPX / KML / GeoJSON verificato | **Non trovato**: non inventare centerline o coordinate |

| # | Sezione | Tipo | s≈ | Nota e fonte | Affidabilità |
|---:|---|---|---|---|---|
| 1 | Start Flying Mile | partenza | 0 (relativo) | Settore alto ripido, angoli mutevoli, richiede precisione — [fonte](https://coupedumonde.tremblant.ca/en/why-flying-mile/) | ufficiale 2026 |
| 2 | Upper steep pitches | muri / cambi pendenza | n.d. | Sequenza alta tecnicamente severa, senza toponimi singoli pubblicati — [fonte](https://coupedumonde.tremblant.ca/en/why-flying-mile/) | ufficiale 2026 |
| 3 | Middle flatter terrain | scorrimento + rollers | n.d. | Sezione centrale più piatta, con gobbe e cambi del terreno — [fonte](https://coupedumonde.tremblant.ca/en/why-flying-mile/) | ufficiale 2026 |
| 4 | Johansson pitch | muro finale | n.d. | Ultimo ripido nominato prima della linea d’arrivo — [fonte](https://coupedumonde.tremblant.ca/en/why-flying-mile/) | ufficiale 2026 |
| 5 | Village finish | arrivo | 1 (relativo) | Arrivo nel centro pedonale di Mont-Tremblant — [fonte](https://coupedumonde.tremblant.ca/en/why-flying-mile/) | ufficiale 2026 |

**Dati tecnici.** Vedi tabella della variante: ogni quota, lunghezza, pendenza e omologazione è riferita alla propria fonte e stagione. Quando i numeri provengono da una pista madre o da una gara precedente **non sono da interpretare come specifiche della gara 2026/27**.

**Partenza.** Start sulla parte alta della Flying Mile secondo descrizione ufficiale; quota non trovata. [fonte](https://coupedumonde.tremblant.ca/en/why-flying-mile/)

**Traguardo – modello proposto.** Traguardo direttamente nel villaggio pedonale, con pubblico vicino al pendio. [fonte](https://coupedumonde.tremblant.ca/en/why-flying-mile/)

**Ambiente e attraversamenti.** La fonte ufficiale descrive tre macrosezioni: ripido alto, tratto mediano mosso e più piatto, ripido finale Johansson. Nessun nome proprio di curva/ponti. [fonte](https://coupedumonde.tremblant.ca/en/why-flying-mile/)

**Correzioni all’archivio.** Nessuna scheda Tremblant in `tracks.json`; le due gare GS condividono il nome Flying Mile, ma mantenere ID gara distinti.

**Materiale cartografico e geometrico.** Organizzatore 29.09.2026 [fonte](https://coupedumonde.tremblant.ca/en/why-flying-mile/); prospettiva ex atleta [fonte](https://coupedumonde.tremblant.ca/en/inside-giant-slalom-peter-duncan/); programma pubblico [fonte](https://coupedumonde.tremblant.ca/en/program-announcement/)

**Lacune.** Numeri ufficiali di partenza/arrivo/omologazione, progressiva e mappa percorso; capire se i due GS hanno set identici (non necessariamente).

**Fonti dirette principali.** [TR](https://coupedumonde.tremblant.ca/en/why-flying-mile/) · [TR P](https://coupedumonde.tremblant.ca/en/inside-giant-slalom-peter-duncan/) · [TR 26](https://coupedumonde.tremblant.ca/en/program-announcement/).

## Modelli di traguardo: quattro famiglie per le nuove piste

Come nel file storico, questa è una **proposta per la scena 3D**, NON una classificazione ufficiale delle strutture. Una località può cambiare categoria se vengono pubblicate nuove foto/cartografie:

| Modello 3D | Località / varianti del nuovo lotto | Elementi realmente documentati | Limiti |
|---|---|---|---|
| Stadio su ghiacciaio | **Nessuna delle 21 nuove località** | Il modello esiste già a Sölden nel vecchio MD; non riutilizzarlo per Kvitfjell o St. Moritz soltanto perché sono in quota. | Nessun nuovo stadio di ghiacciaio trovato. |
| Stadio con tribune | Adelboden, Kitzbühel, Courchevel, Garmisch, Lenzerheide, Copper Mountain, Jasná, Saalbach, Dachstein West | Zielarena, Ganslern, Stade Émile-Allais, Kreuzeckbahn, Heimberg, East Village, Koliesko, Zwölferkogel, Hornspitz. | Strutture permanenti e temporanee da distinguere; capienze quasi sempre non certificate. |
| Arrivo di paese | Alta Badia, Bormio, Flachau, Val Gardena, Soldeu, Tremblant | La Villa, Stelvio Stadium, Grießenkar/Flachau, Ruacia/Santa Cristina, Soldeu, villaggio pedonale Tremblant. | Alcuni hanno stadio e tribune, classificazione non esclusiva. |
| Conca/prato a fondo pista | Wengen, St. Moritz, Kvitfjell, Val di Fassa, Chamonix, Åre | Innerwengen, Salastrains, arrivo del corso olimpico, Passo San Pellegrino, parte bassa Verte, National Arena. | Alcune arene hanno tribune, l’asset 3D può aggiungerle solo dove documentate. |

## Conflitti tra fonti e separazioni che impediscono errori nella scena

| Pista / tema | Fonte A | Fonte B / divergenza | Regola per LiveSportArena |
|---|---|---|---|
| Kitzbühel Streifalm SG | Pagina attuale [fonte](https://hahnenkamm.com/rennstrecken/streifalm-super-g/) media 24%, max 69%, min 8% | Bando 2025 [fonte](https://cdn.hahnenkamm.com/site/assets/files/67649/2024-10-24-ausschreibung-hkr2025-web.pdf) media 26%, max 76%, min 2% | Conservare entrambe le versioni, nessuna forzatura; verificare omologazione e variante 2027. |
| St. Moritz SG/GS | Pagina 2026 [fonte](https://www.skiweltcup-stmoritz.ch/de/race-info/rennstrecke) start SG 2.590, GS 2.385 | Mappa 2025 [fonte](https://api.skiweltcup-stmoritz.ch/fileadmin/user_upload/ski-world-cup-stmoritz/pdf/pistenplan-wc-stmoritz2025-pr.pdf) mostra ulteriori partenze e finish 2.040 | Non derivare dislivello 2026 da arrivo storico e non modellare il GS come SG accorciato senza nuova linea. |
| Garmisch donne vs uomini | Gestore [fonte](https://zugspitze.de/de/Unsere-Bergwelten/Highlights/Kandahar-Abfahrt) 5a 2.920 m, 5b 3.330 m; DH generale 1.690/770 | Fonte storica [fonte](https://de.wikipedia.org/wiki/Kandahar-Abfahrt_Garmisch) avvio donne circa 1.490 m e differente sequenza | Kandahar 1 femminile distinta da Kandahar 2 maschile; no Freier Fall femminile automatico. |
| Kvitfjell SG donne | Grafica ufficiale [fonte](https://worldcupkvitfjell.no/en/courses) contiene quattro profili | Correzione testuale SG donne **2.170 m** sullo stesso sito | La rettifica testuale prevale sulla cifra errata in immagine. Le quattro piste hanno schede distinte. |
| Saalbach DH uomini | Media kit mondiali [fonte](https://press.austria.info/fileadmin/user_upload/Imported/uk/Winter_2024_25/Saalbach/Media_Kit_FIS_Alpine_World_Ski_Championships_Saalbach_2025.pdf) 1.984→1.060 m, 924 m | Risultati FIS 2025 [fonte](https://www.fis-ski.com/DB/general/results.html?raceid=122890&seasoncode=2025&sectorcode=AL) 1.984→1.072 m, 912 m, 2.918 m | Entrambi storici; attendere FIS 2027, non scegliere una quota a priori. |
| Lenzerheide SG | FIS 2022 [fonte](https://www.fis-ski.com/DB/general/results.html?raceid=109001&sectorcode=AL) 2.160→1.560 m, 600 m, 1.867 m | Gestore [fonte](https://www.weltcup-lenzerheide.ch/en/Race-track) pista DH completa 2.257→1.560 m, 697 m, 2.272 m; turismo [fonte](https://www.myswitzerland.com/en-ch/experiences/silvano-beltrametti-piste/) 2.450 m e finish 1.530 | Non scambiare DH completa/turistica e SG FIS 2022, né presentare entrambi come 2027. |
| Soldeu Avet GS | Grandvalira scheda GS [fonte](https://www.grandvalira.com/en/resort/slopes/avet) 2.265→1.837, 428 m | Comitato [fonte](https://events.grandvalira.com/en/worldcupandorra/slopes) indica 416 m per GS | Conservare conflitto 428/416, niente media arbitraria. SL ufficiale 210 m. |
| Chamonix/Les Houches | Organizzatore SL [fonte](https://chamonixworldcup.com/fr/la-course/la-piste) 1.169→985 m, 624 m | DH storica 1.871→1.001 m, 3.343 m nel vecchio MD | Non associare la mappa della DH all’evento SL. |
| Bormio Stelvio | Gestore pista classica [fonte](https://www.bormioski.eu/pista-stelvio/) 3.250 m e 2.255 m | Variante olimpica [fonte](https://skiworldcup.bormio.eu/en/technical-specifications) 3.442 m e 2.268 m | Entrambe DH: nessuna è automaticamente la misura del SG. |
| Val Gardena Saslong | Media kit [fonte](https://www.saslong.org/fileadmin/template/files/pdf/news/2024/it-media-kit-audi-fis-skiweltcup-groeden-2024.pdf) SG 2.365 m, 590 m | DH 3.446 m, 839 m nello stesso media kit | Conservare due record e partenza diversa (2.000 vs 2.249 m). |
| Dachstein/Gosau | Comitato [fonte](https://www.dachstein.at/en/skiweltcup) Hornspitz; [fonte](https://www.dachstein.at/en/skiweltcup/team-info-ski-world-cup) cartina training/race | Fonte locale [fonte](https://www.sein-salzkammergut.at/audi-fis-ski-weltcup-dachstein-west-gosau/) pista Talabfahrt Hornspitz 1 chiusa | La pista chiusa è un indizio, non la centerline ufficiale GS/SL. |
| Copper Mountain | Gestore [fonte](https://www.coppercolorado.com/copper-cup/athletes-mountain/alpine-ski-racing/) Rosi’s Run finale e Tech Center con Andy’s Encore/Ore Deal | Mancano mappe che provino Andy’s Encore come GS WC | Non assegnare il training trail al GS e non copiare 2.300 ft dal Speed Center al SG. |
| Garmisch programma | Local `alpine.json`: D DH il 27 e 28 febbraio | Il sito donne [fonte](https://www.skiweltcup-garmisch.com/kandahar-race-women/) usa «Downhill» per entrambi, ma sezione eventi cita poi Super-G | Conservare il calendario locale come base, rilevare ambiguità; non cambia la ricerca geometrica delle DH. |

## Riepilogo finale delle 21 località e 38 gare ancora da collegare

**Sufficiente** = fonti per disegnare *un modello illustrativo caratterizzato*, NON coordinate georeferenziate. **Parziale** = solo nomi/poche dimensioni o non risulta identificata la singola variante. Nessuna località è classificata «nessun dato affidabile» sull’evento, ma molte non hanno dati geometrici affidabili della pista particolare.

| Località | Gare prive di mappa | Schede distinte | Valutazione delle informazioni sulla PISTA |
|---|---:|---:|---|
| Adelboden | 1 | 1 | **Dati sufficienti (illustrativi)** |
| Alta Badia | 1 | 1 | Dati parziali |
| Åre | 2 | 2 | Dati parziali |
| Bormio | 1 | 1 | Dati parziali |
| Chamonix | 1 | 1 | **Dati sufficienti (illustrativi)** |
| Copper Mountain | 2 | 2 | Dati parziali |
| Courchevel | 1 | 1 | **Dati sufficienti (illustrativi)** |
| Dachstein West / Gosau | 2 | 2 | Dati parziali |
| Flachau | 1 | 1 | Dati parziali |
| Garmisch-Partenkirchen | 3 | 2 | Dati parziali |
| Jasná | 1 | 1 | Dati parziali |
| Kitzbühel | 2 | 2 | **Dati sufficienti (illustrativi)** |
| Kvitfjell | 4 | 4 | **Sufficienti per DH uomini**; parziali per altre 3 varianti |
| Lenzerheide | 2 | 1 | **Sufficienti sui POI**, SG 2027 parziale |
| Saalbach | 2 | 2 | Dati parziali |
| Soldeu | 2 | 2 | **Dati sufficienti (illustrativi)** |
| St. Moritz | 3 | 2 | **Sufficienti per SG**; parziali per GS |
| Tremblant | 2 | 1 | **Sufficienti sui macrosettori**, quote assenti |
| Val Gardena / Gröden | 1 | 1 | **Sufficienti storici**; 2026 da riconfermare |
| Val di Fassa | 2 | 2 | **Dati sufficienti (illustrativi)** |
| Wengen | 2 | 2 | Dati parziali |
| **Totale** | **38** | **34** | **21 località** |

## Dati più promettenti per la ricostruzione illustrativa e ricerche ancora aperte

| Ordine per valore atteso | Località e risultato documentato | Cosa si può modellare senza fingere precisione | Ricerca residua |
|---:|---|---|---|
| 1 | **Kvitfjell** — 4 profili ufficiali, elenco di 17 sezioni, quota start DH maschile, 64% Wintherhogget, salti, strada e ferrovia | Cresta iniziale, alternanza muro/salti/traversi/compressioni in ordine; 4 varianti da separare | Leggere le 4 immagini in alta risoluzione e cercare omologazioni/quote 2027 |
| 2 | **St. Moritz** — Engiadina SG 2.590 m e GS 2.385 m con Lanigiro, Mauritius, Mauer, Weisses Band, Reinaltersprung, Lärchenweg | Modello unico dei pendii Engiadina con due diverse partenze e POI documentati | Cartina ufficiale 2026 e quote arrivo 2026; distinguere Rominger/Reinalter |
| 3 | **Val di Fassa** — La VolatA DH/SG separati; 7 macrosezioni in sequenza e quote dei due percorsi | Due partenze, muri, due piane, dossi finali e area Passo San Pellegrino | Profilo georeferenziato e posizione dei salti introdotti nel 2026 |
| 4 | **Kitzbühel** — Streifalm SG e Ganslern SL con quote, lunghezze, pendenze e omologazioni | Due piste differenti nello stesso ambiente, senza riusare la Streif DH | Chiarire pendenza massima SG 69%/76%, cartina Ganslern e progressive |
| 5 | **Lenzerheide** — Micken Traverse, Hemmi-Kuppe SG, Heimbergkante, Älpli-S, FIS 2022 2.160/1.560 m | Muro/cresta/traversi in sequenza descrittiva e traguardo Heimberg | Capire esattamente i settori attraversati dal SG 2027 |
| 6 | **Soldeu** — Avet: quote/lunghezze distinte per GS 1.242 m e SL 609 m, pendenze | Pendio nord-est con due start e arrivo Soldeu | Profili e dislivello GS 428/416 m |
| 7 | **Courchevel** — SL 614 m e 220 m, stadio illuminato e accessi | Stadio notturno, tribuna e connessione Croisette in prospettiva | Passaggi specifici e mappa quotata |
| 8 | **Tremblant** — Flying Mile: steep upper, rollers middle, Johansson Pitch e villaggio | Tre zone del percorso distinte con pendio finale più ripido | Dati dimensionali ufficiali |
| 9 | **Garmisch** — Kandahar 5a/5b, donne Hölle–FIS-Schneise e uomini Freier Fall | Due scenografie differenti, bosco e diversi innesti nel finale | Profili donne e SG uomini 2027 con partenza e misura |
| 10 | **Val Gardena** — Saslong SG 2.365 m/590 m con 8+ macro-passaggi e galleria | Spaccato del basso Saslong e tunnel sotto finale | Profilo 2026 che delimiti i passaggi esatti SG |
| 11 | **Adelboden** — SL 622 m, Zielhang Giisbrunni 60%, arena Hexenkessel | Breve muro finale con pubblico attorno e quota specifica | Omologazione 2027 e centerline SL |
| 12 | **Tutte le altre** — Pista identificata (o area) e alcuni elementi singoli | Modello 3D genericamente ambientato, passaggi etichettati generici | Race notices FIS, profili altimetrici, cartografie ufficiali |

### Ricerca geospaziale ancora necessaria

- **Nessun GPX/KML/GeoJSON delle 34 varianti è stato validato**. Se in futuro si scarica una traccia da OSM/OpenSkiMap o un’attività GPS, archiviarla separatamente come traccia **non ufficiale** e verificare che non sia pista turistica, training slope o disciplina differente.
- Le fotografie di discesa, immagini promozionali e profili schematici sono **riferimenti visivi**, non centerline con coordinate. Non derivare automaticamente raggio delle curve, larghezza del pendio o latitudine/longitudine.
- Per ogni pista, il passo decisivo è ottenere **race invitation/race notice**, omologazione FIS con planimetria e **coordinate degli estremi**; solo dopo si potrà fissare un tracciato geometricamente vincolato.
- I valori percentuali di pendenza forniti dagli organizzatori vanno riportati come tali: **non** dedurre la pendenza media come `dislivello / lunghezza del pendio`; la percentuale di pendenza usa la proiezione orizzontale.

## Conclusione

Le 38 gare senza mappa ora sono descritte da **34 schede di tracciato/variante per 21 località**, con riferimenti FIS e organizzatori dove disponibili. L’archivio deve essere centrato sulla combinazione `venue + gender + discipline` e, dove necessario, anche su una **specifica variante di pista**; il campo `geometry` resta `null` finché non esista una ricostruzione esplicitamente *illustrativa* oppure una geometria reale verificata. Un pendio 3D morbido in stile LiveSportArena può essere genericamente illustrativo e allo stesso tempo fedele all’ordine dei passaggi documentati. **Il punto da non oltrepassare è attribuire al terreno reale coordinate, distanze progressive o forme mai pubblicate.**

**File di confronto letti integralmente/analizzati localmente:** `ISTRUZIONI-RICERCA-PISTE-3D.md`, `alpine.json` (83 gare), `tracks.json` (23 course records), `Dati_piste_Coppa_del_Mondo_aggiornati(2).md` (struttura e ricerche storiche). Documenti originali invariati.

**Nota redazionale sulle verifiche:** sono stati esaminati i risultati web delle fonti ufficiali e PDF citati. Per alcuni PDF il servizio di visualizzazione delle pagine ha restituito un errore: le informazioni utilizzate provengono dal testo indicizzato, mentre la mappa visuale non è stata presentata come digitalizzata. Alcune misure testuali 2025/2026 sono storiche e non certificano il disegno di gara 2027.
