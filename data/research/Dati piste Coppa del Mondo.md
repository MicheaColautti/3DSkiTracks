# Trentaquattro piste ritrovano nomi, salti e traguardi

Delle 34 piste di Coppa del Mondo (23 località) usate nelle mappe 3D LiveSportArena, **16 hanno ora una sequenza completa di sezioni con nome reale**, **11 solo una copertura parziale** e **7 restano con etichette generiche**, perché nessuna fonte, ufficiale o di stampa, dà un nome ai tratti intermedi. Le discese classiche (Streif, Lauberhorn, Saslong, Stelvio, Olympia delle Tofane, Kandahar 2, Verte des Houches, Birds of Prey, Sun Valley) hanno toponomastica ricca e in gran parte confermata dagli organizzatori. I giganti di Adelboden e Sölden hanno nomi ufficiali completi. Gli slalom (Schladming, Flachau, Gurgl, Madonna di Campiglio) e il gigante dell'Erta non hanno nomi di tratto. Il confronto con `tracks.json` mostra che **l'archivio è generico per quasi tutte le piste**. Dove usa nomi veri, contiene errori di ordine gravi: Karussell e Steilhang invertiti a Kitzbühel, Golden Eagle, Harrier e Talon fuori posto a Beaver Creek, un "muro iniziale" inesistente a Sölden e a Levi, lo Schuss di Cortina messo al centro invece che in alto. Anche diverse metriche sono errate: Flachau 650 m invece di 530, Gurgl 650 m invece di 548, Adelboden 1,5 km invece di 1.290 m, Crans-Montana 4 km invece di 2,45. Garmisch e Les Houches condividono in archivio lo stesso template di POI. Per la fase 2 i traguardi si raggruppano in quattro modelli: **1 stadio su ghiacciaio** (Sölden), **15 stadi con tribune**, **4 arrivi di paese**, **14 conche/prati a fondo pista**. Restano aperte due lacune trasversali: quasi nessuna fonte pubblica distanze progressive o quote per sezione, quindi i valori di posizione s sono stime, e manca quasi ovunque la capienza delle tribune.

Le posizioni s (0 = partenza, 1 = arrivo) riportate nelle tabelle vengono dai JSON di ricerca e, salvo dove indicato, sono **stime** derivate dall'ordine delle sezioni o dalle quote, non distanze misurate. L'affidabilità usa la scala dei JSON: *ufficiale* (organizzatore/gestore), *FIS* (risultati o omologazione), *media* (stampa/Wikipedia come puntatore), *incerta*. Il "modello di traguardo" è una **proposta** di classificazione per la fase 2, derivata dal campo `finish_area` dei JSON e dalle descrizioni delle fonti.

## Panoramica: 16 piste complete, 11 parziali, 7 solo generiche

| Località | Pista (disciplina) | Copertura nomi | Modello traguardo proposto | Notturna |
|---|---|---|---|---|
| Kitzbühel | Streif (DH) | Completa (18 sezioni, ufficiali) | Stadio con tribune (vicino al centro) | No |
| Schladming | Planai (SL) | Solo generica (Zielhang) | Stadio con tribune, urbano | Sì |
| Schladming | Planai (GS) | Solo generica (Zielhang) | Stadio con tribune, urbano | Sì |
| Flachau | Hermann Maier Weltcupstrecke (SL) | Solo generica | Arrivo di paese (periferia) | Sì |
| Sölden | Rettenbach (GS) | Completa (6 sezioni) | Stadio su ghiacciaio | No |
| Gurgl | Kirchenkar (SL) | Solo generica | Conca d'alta quota | No |
| Wengen | Lauberhorn (DH) | Completa (15 sezioni ufficiali) | Prato (Innerwengen) | No |
| Adelboden | Chuenisbärgli (GS) | Completa (6 sezioni ufficiali) | Stadio con tribune (Zielarena) | No |
| Crans-Montana | Mont Lachaux (DH) | Completa (6 sezioni ufficiali) | Conca/prato con tribune | No |
| Crans-Montana | Mont Lachaux (SG) | Completa (mappata dalla DH) | Conca/prato con tribune | No |
| Bormio | Stelvio (DH) | Completa (ordine con conflitti) | Arrivo di paese con stadio | Pista illuminata |
| Cortina | Olympia delle Tofane (DH) | Completa | Conca/prato (Rumerlo) | No |
| Cortina | Olympia delle Tofane (SG) | Completa | Conca/prato (Rumerlo) | No |
| Val Gardena | Saslong (DH) | Completa (8 punti ufficiali + 3 di stampa) | Arrivo di paese con tribune | No |
| Alta Badia | Gran Risa (GS) | Parziale (1 nome + sequenza) | Arrivo di paese (La Villa) | No |
| Plan de Corones | Erta (GS) | Solo generica | Conca/prato a fondo pista | No |
| Madonna di Campiglio | Canalone Miramonti (SL) | Solo generica | Stadio con tribune (Ski Stadium) | Sì |
| Garmisch-Partenkirchen | Kandahar 2 (DH) | Completa (16 sezioni) | Conca/prato sotto il Freier Fall | No |
| Val d'Isère | Face de Bellevarde (GS) | Parziale | Stadio con tribune in paese | No |
| Val d'Isère | Stade Olympique (SL) | Parziale | Stadio con tribune in paese | No |
| Les Houches | La Verte des Houches (DH) | Completa (fonti di stampa) | Conca/prato con tribune | No |
| Levi | Levi Black (SL) | Parziale | Prato a fondo pista | Da verificare (LED) |
| Jasná | Luková–Koliesko (GS) | Parziale | Stadio con tribuna di neve | No |
| Kranjska Gora | Podkoren 3 (GS) | Parziale | Stadio con tribune (arena) | No |
| Kranjska Gora | Podkoren 3 (SL) | Parziale | Stadio con tribune (arena) | No |
| Beaver Creek | Birds of Prey (DH) | Completa (ordine da Wikipedia) | Stadio con tribune (Red Tail) | No |
| Beaver Creek | Birds of Prey (SG) | Completa (ordine da Wikipedia) | Stadio con tribune (Red Tail) | No |
| Beaver Creek | Birds of Prey (GS) | Parziale (assegnazione inferita) | Stadio con tribune (Red Tail) | No |
| Sun Valley | Challenger (DH) | Completa (11 sezioni) | Conca/prato (Greyhawk) | No |
| Sun Valley | Challenger (SG) | Completa | Conca/prato (Greyhawk) | No |
| Sun Valley | Greyhawk/Hemingway (GS) | Parziale | Conca/prato (Greyhawk) | No |
| Sun Valley | Greyhawk/Hemingway (SL) | Solo generica | Conca/prato (Greyhawk) | No |
| Killington | Superstar (GS) | Parziale (3 macro-sezioni) | Stadio con tribune (Festival Village) | No |
| Killington | Superstar (SL) | Parziale | Stadio con tribune (Festival Village) | No |

La copertura segue la disciplina più che il paese. Le discese hanno una toponomastica storica, e spesso commerciale, che gli organizzatori pubblicano. I giganti e gli slalom ne hanno una solo dove la pista è un luogo di culto (Adelboden, Sölden). Le piste tecniche brevi vengono descritte quasi sempre solo con numeri e con il nome del pendio d'arrivo.

Il calendario 2026/27 incide su alcune scelte di fase 2. **Les Houches non ha discesa nel 2026/27** (solo SL uomini il 30 gennaio 2027) ([Wikipedia 2026–27](https://en.wikipedia.org/wiki/2026%E2%80%9327_FIS_Alpine_Ski_World_Cup)). **Killington torna** con GS e SL il 28–29 novembre 2026 ([Unofficial Networks](https://unofficialnetworks.com/2026/06/16/killington-cup-returns-this-november/)). **Flachau aggiunge un gigante notturno** il 4–5 gennaio 2027 ([organizzatore](https://skiweltcup-flachau.at/en/)). **Sun Valley riospita le Finali** dal 20 al 25 marzo 2027 ([Wikipedia 2026–27](https://en.wikipedia.org/wiki/2026%E2%80%9327_FIS_Alpine_Ski_World_Cup)).

## Schede per località: dove le fonti nominano ogni salto, muro e curva

### Austria

#### Kitzbühel – Streif (DH)

| # | Sezione | Tipo | s≈ | Nota | Affidabilità |
|---|---|---|---|---|---|
| 1 | Starthaus | partenza | 0,00 | 1.665 m sull'Hahnenkamm | ufficiale |
| 2 | Starthang | schuss | 0,03 | 160 m al 51 %, 100 km/h, Mausefalle dopo 8,5 s | ufficiale |
| 3 | Mausefalle | salto | 0,06 | salto più lungo (fino a 80 m), 110–120 km/h | ufficiale |
| 4 | Kompression | compressione | 0,09 | subito dopo l'atterraggio della Mausefalle | media |
| 5 | Karussell | curva 180° dx + sx | 0,12 | 3,1 g, "spesso decisivo" | ufficiale |
| 6 | Steilhang | muro, lunga curva dx | 0,17 | 85 % secondo HKR (vedi conflitti) | ufficiale |
| 7 | Brückenschuss | schuss | 0,24 | tratto piatto di scorrimento | ufficiale |
| 8 | Gleitstück / Gschöss | scorrimento | 0,32 | circa 20 s | ufficiale |
| 9 | Alte Schneise | diagonale | 0,40 | corridoio nel bosco, ingresso con piccolo salto | ufficiale |
| 10 | Seidlalmsprung | salto con rotazione a dx | 0,50 | dal 1994, "metà pista" (punto ancorato) | ufficiale |
| 11 | Seidlalmkurve | curva dx poi sx | 0,54 | de.wiki: lunga curva a sx | ufficiale |
| 12 | Lärchenschuss | schuss | 0,62 | dopo una curva di quasi 90°, tra i larici | ufficiale |
| 13 | Oberhausberg | curva dx + "S" | 0,70 | porte tecniche su tratto più piatto | ufficiale |
| 14 | Hausbergkante | salto + compressione, svolta sx | 0,78 | da qui si vede l'arrivo; 70 % (en.wiki) | ufficiale |
| 15 | Hausberg-Querfahrt | traverso sx, chiude a dx | 0,84 | 100–110 km/h | ufficiale |
| 16 | Zielschuss | schuss con compressione | 0,92 | oltre 140 km/h, record 153 km/h | ufficiale |
| 17 | Zielsprung | salto | 0,96 | fino a 150 km/h, addolcito nel 2010 | ufficiale |
| 18 | Rasmusleitn (Zielhang) | pendio d'arrivo | 0,99 | ultimo tratto davanti al pubblico | media |

**Dati tecnici.** Secondo il sito ufficiale la pista va da **1.665 a 805 m**, con **860 m di dislivello**, **3.315 m di lunghezza**, pendenza media del 27 %, massima dell'85 % e minima del 2 %. Omologazione 14579/09/22 ([HKR](https://hahnenkamm.com/rennstrecken/die-streif-abfahrt/)). Wikipedia e Austria-Forum riportano 3.312 m ([Wikipedia de](https://de.wikipedia.org/wiki/Streif)). Il record della pista è 1:51.58 di Strobl (1997). Nel 2026 la gara si è corsa sul tracciato integrale ed è stata vinta da Franzoni in 1:52.31 ([Wikipedia en](https://en.wikipedia.org/wiki/Streif)). Le partenze sono state abbassate nel 2016 e nel 2022 (di 45 m) per vento.

**Partenza.** Starthaus sull'Hahnenkamm, raggiunta dalla stazione a monte dell'Hahnenkammbahn. Il percorso Streif-Live passa da Kitz Panorama ([Kitzbühel Tourismus](https://www.kitzbuehel.com/touren/pdf/streif-live)).

**Traguardo – modello proposto: stadio con tribune vicino al centro.** Lo Zielgelände a 805 m è "vicino al centro" di Kitzbühel, ai piedi della Rasmusleitn. Contiene il Rasmushof e confina con il pendio Ganslern (slalom). Tra Zielhang e stadio si contano **40.000–50.000 spettatori** ([Wikipedia de](https://de.wikipedia.org/wiki/Streif); [Kitzbühel Tourismus](https://www.kitzbuehel.com/touren/pdf/streif-live)). Capienza delle tribune non trovata.

**Ambiente e attraversamenti.** La pista corre in gran parte nel bosco: l'Alte Schneise è un taglio nel bosco, il Lärchenschuss passa tra i larici. Punti di riferimento: Seidlalm, Speicherteich Seidlalmsee e Ganslernalm. Nessuna fonte documenta incroci con strade, ponti o impianti. Il nome "Brückenschuss" non basta a provare l'esistenza di un ponte.

**Correzioni all'archivio.** Karussell e Steilhang sono **in ordine invertito**: l'ordine giusto è Mausefalle → Kompression → Karussell → Steilhang. Il Karussell è una curva di 180°, non un "cambio di ritmo". Vanno aggiunti Starthang, Kompression, Gleitstück/Gschöss, Seidlalmkurve, Hausberg-Querfahrt, Zielsprung e Rasmusleitn. "Partenza" diventa Starthaus, "Arrivo" diventa Zielgelände/Rasmusleitn. L'85 % che l'archivio attribuisce alla Mausefalle è in conflitto con il sito ufficiale, che lo attribuisce allo Steilhang.

**Lacune.** Distanze e quote per sezione non pubblicate: solo Starthang (160 m) e Seidlalmsprung (metà pista) sono ancorati. Mancano il profilo di omologazione FIS e la capienza delle tribune.

#### Schladming – Planai (SL e GS)

| # | Sezione (SL) | Tipo | s≈ | Nota | Affidabilità |
|---|---|---|---|---|---|
| 1 | Start Slalom | partenza | 0,00 | 967 m, nessun nome proprio | FIS |
| 2 | Parte alta [GENERICO] | muro | 0,30 | posizione del max 54 % ignota | incerta |
| 3 | Zielhang | pendio d'arrivo | 0,75 | il pendio celebre dello slalom | ufficiale |
| 4 | Planai-Zielstadion | arrivo | 1,00 | 749 m | FIS |

| # | Sezione (GS) | Tipo | s≈ | Nota | Affidabilità |
|---|---|---|---|---|---|
| 1 | Start Riesentorlauf | partenza | 0,00 | 1.148 m, circa 180 m sopra lo SL | FIS |
| 2 | Parte alta [GENERICO] | muro | 0,25 | max 61 %, media 41 % sull'intera pista | incerta |
| 3 | Parte centrale [GENERICO] | altro | 0,45 | fino alla quota della partenza SL (967 m) | incerta |
| 4 | Zielhang | pendio d'arrivo | 0,80 | in comune con lo SL | ufficiale |
| 5 | Planai-Zielstadion | arrivo | 1,00 | 758 m | FIS |

**Dati tecnici.** SL del 28/01/2026: **967 → 749 m, 218 m**, omologazione 13633/09/20, porte 64/62 e 67/66 ([FIS PDF](https://medias1.fis-ski.com/pdf/2026/AL/0012/2026AL0012SLR2.pdf)). GS del 25/01/2023: **1.148 → 758 m, 390 m**, omologazione 13699/10/20 ([FIS PDF](https://www.fis-ski.com/DB/pdf/2023/AL/0052/2023AL0052RLR2.pdf)). Pendenze secondo Wikipedia: GS max 61 %, media 41 %, min 12 %; SL max 54 %, media 36,8 % ([Wikipedia](https://en.wikipedia.org/wiki/Planai_(ski_course))). Le lunghezze non sono pubblicate. Il valore "1.5 km circa" dell'archivio per il GS non ha fonte.

**Partenza.** Due cancelletti senza nome sul pendio inferiore della Planai.

**Traguardo – modello proposto: stadio con tribune, urbano e notturno.** Il Planai-Zielstadion si trova a ridosso del centro. È stato ricostruito e ampliato per i Mondiali 2013 con un **arco d'acciaio** e accoglie **fino a 50.000 spettatori**. Il Nightrace si corre dal 1997, il gigante in notturna dal 2023 ([Austria-Forum](https://austria-forum.org/af/AustriaWiki/Planai_(Skipiste)); [Planai](https://planai.at/en/planai-up-to-date/events/nightrace)). Edizione 2027: 26–27 gennaio. Nel 2026 hanno vinto Meillard (GS) e Kristoffersen (SL) ([Schladming-Dachstein](https://www.schladming-dachstein.at/de/events/top-events/nightrace)).

**Ambiente e attraversamenti.** Il pendio è delimitato dal bosco, che le fonti non descrivono. La Mautstraße della Planai esiste dal 1964, ma la sua posizione rispetto al tracciato non è documentata.

**Correzioni all'archivio.** Tutte le etichette sono generiche. "Compressione" e "Piatto" non trovano riscontro. "Hairpin" e "Verticale" sono figure di tracciatura, non elementi del terreno. Nel GS la compressione è modellata anche come salto in `scene.jumps`, senza fonte. "Muro finale" e "Ritmo finale" vanno rinominati Zielhang, "Arrivo" va rinominato Planai-Zielstadion.

**Lacune.** Mancano nomi propri per il pendio, lunghezze, dati FIS del GS 2026 (sono stati usati quelli del 2023), capienza delle tribune e posizione della Planai-Gondelbahn.

#### Flachau – Hermann Maier Weltcupstrecke / "Griessenkar" (SL)

| # | Sezione | Tipo | s≈ | Nota | Affidabilità |
|---|---|---|---|---|---|
| 1 | Start | partenza | 0,00 | 1.169 m, versante est del Grießenkar | FIS |
| 2 | Parte alta [GENERICO] | muro | 0,30 | nuovi piloni di illuminazione dal 2026/27 | incerta |
| 3 | Parte centrale [GENERICO] | altro | 0,60 | nessuna caratteristica documentata | incerta |
| 4 | Zielhang [GENERICO] | pendio d'arrivo | 0,90 | "Zielhang" usato in senso generico | incerta |
| 5 | Zielbereich | arrivo | 1,00 | 960 m, periferia di Flachau | FIS |

**Dati tecnici.** Nei risultati FIS del 13/01/2026 la pista è registrata come **"Griessenkar"**: 1.169 → 960 m, 209 m di dislivello, nuova omologazione 13835/11/20 ([FIS PDF, copia](https://www.sportsidioten.no/wp-content/uploads/2026/01/2026AL5007SLR1.pdf)). Nel 2019 risultava come "Hermann Maier Weltcupstrecke", 1.160 → 960 m, omologazione 9678/10/10 ([FIS PDF](https://www.fis-ski.com/DB/pdf/2019/AL/5010/2019AL5010SLR2.pdf)). La lunghezza è di **530 m** ([alpineskiworldcup.com](https://www.alpineskiworldcup.com/post/flachau-night-slalom-race-preview); [Amex](https://www.americanexpress.com/de-de/amexcited/travel/ab-auf-die-weltcuppiste-im-oesterreichischen-skigebiet-flachau-2046)). Le pendenze non sono pubblicate.

**Partenza.** Sul versante est del Grießenkar (Snow Space Salzburg), servita dalla Star Jet 1. La parte alta funge da zona di riscaldamento ([programma FIS](https://www.fis-ski.com/DB/v2/download/competition-attachment/c32ac03b-64da-11f1-b635-1866da7ef77e)).

**Traguardo – modello proposto: arrivo di paese (periferia), notturno.** Zielbereich a 960 m alla periferia di Flachau, con mixed zone, podio, Timing House e corridoio tecnici sul lato destro. Waldgasthof e Neureitalm fanno da hospitality. Gli spettatori sono **10.000–15.000** (circa 11.700 nel 2025) ([Salzburg24](https://www.salzburg24.at/news/salzburg/pongau/flachau-feiert-mit-nachtslalom-grosses-ski-spektakel-art-261216)). L'illuminazione viene estesa alla parte alta con nuovi piloni, per un investimento fino a 8 milioni di euro ([Salzburg24](https://www.salzburg24.at/sport/wintersport/flutlicht-erweiterung-an-weltcupstrecke-in-flachau-fix-art-281390)).

**Ambiente e attraversamenti.** La Star Jet 1 resta aperta durante la gara. La sua posizione esatta non è documentata.

**Correzioni all'archivio.** Lunghezza **650 m → 530 m**. Tutte le etichette sono generiche. "Compressione" e "Piatto" non trovano riscontro. Il nome FIS 2026 è "Griessenkar".

**Lacune.** Mancano nomi di sezione, pendenze, struttura e capienza delle tribune e dati del gigante notturno 2027. La quota di partenza varia tra le fonti (1.145/1.160/1.169 m) e l'omologazione è cambiata: possibile modifica del tracciato, non documentata.

#### Sölden – Rettenbach (GS)

| # | Sezione | Tipo | s≈ | Nota | Affidabilità |
|---|---|---|---|---|---|
| 1 | Rettenbachjoch | partenza | 0,00 | sella sommitale, circa 3.040 m | media |
| 2 | Gletschertisch | scorrimento | 0,10 | piatto, circa 232 m dal via | media |
| 3 | Gletscherkante | ciglio / cambio pendenza | 0,27 | circa 183 m, porta sul ciglio del muro | media |
| 4 | Eisfall | muro | 0,50 (da 0,35 a 0,66) | circa 370 m, **68,2 %**, è lo "Steilhang" ufficiale | media/ufficiale |
| 5 | Gletscherzunge | altro | 0,76 | circa 245 m, pendenza in calo | incerta |
| 6 | Elefantentränke | finale piatto | 0,93 | circa 168 m, "dove spesso si decide la gara" | media |

**Dati tecnici.** Dati ufficiali: **3.040 → 2.670 m, 1.198 m di lunghezza, 370 m di dislivello**, pendenza max 68,2 %, media 33 %, min 15,5 %, 41–56 porte, 65–80 km/h ([soelden.com](https://www.soelden.com/de/veranstaltungen-freizeittipps/events/audi-fis-skiweltcup-opening/weltcup-piste)). L'ordine delle sezioni viene da [Wikipedia](https://en.wikipedia.org/wiki/Rettenbach_(ski_slope)). Le lunghezze dei tratti vengono da un sito non ufficiale, ma sommate danno esattamente 1.198 m ([alpineskiworldcup.com](https://www.alpineskiworldcup.com/post/rettenbach-glacier-soelden-s-alpine-ski-world-cup-racecourse)). Questa è l'unica pista del lotto, insieme a quelle con quote di Wikipedia, ad avere posizioni quasi misurate. Opening 2026: vittorie di Moltzan (24/10) e Pinheiro Braathen (25/10) ([Reuters/The Star](https://www.thestar.com.my/sport/others/2026/10/25/alpine-skiing-brazil039s-pinheiro-braathen-wins-season-opening-men039s-giant-slalom)).

**Partenza.** Sul Rettenbachjoch, in cima al Rettenbachferner. Donne e uomini usano lo stesso pendio.

**Traguardo – modello proposto: stadio su ghiacciaio.** Lo Zielstadion am Rettenbachgletscher (circa 2.670 m) è **un unico edificio** con **1.500 posti a sedere**, servizi, centro stampa con 100 postazioni e 15 cabine TV ([soelden.com](https://www.soelden.com/de/veranstaltungen-freizeittipps/events/audi-fis-skiweltcup-opening/weltcup-piste)). Ci arriva la Ötztaler Gletscherstraße (circa 13 km), con parcheggi gratuiti. Da lì la strada prosegue verso il Tiefenbachferner attraverso il Rosi-Mittermaier-Tunnel (1,8 km) ([soelden.com Glacier Road](https://www.soelden.com/summer/hiking/mountain-lifts-uphill-facilities/oetztal-glacier-road.html)). La base della cabinovia Schwarze Schneid (2.673 → 3.250 m) è alla stessa quota dell'arrivo, quindi probabilmente adiacente. La premiazione delle donne si tiene al Giggijoch ([programma](https://www.soelden.com/en/events-leisure-tips/events/audi-fis-ski-world-cup-opening/program)).

**Ambiente.** Tutto il tracciato è su ghiacciaio, senza alberi e sopra il limite del bosco (inferenza dalle quote).

**Correzioni all'archivio.** Il "Muro iniziale" non esiste: la parte alta è piatta. Il "Muro tecnico" finale non esiste: esiste **un solo muro, l'Eisfall, al centro**. Il salto in `scene.jumps` non ha riscontro: da rimuovere. Lunghezza 1,5 km → 1.198 m, dislivello 370 m. Le corrispondenze: Ritmo alto = Gletschertisch, Cambio pendenza = Gletscherkante, Ritmo finale = Elefantentränke, Arrivo = Zielstadion am Rettenbachgletscher.

**Lacune.** Mancano direzione delle curve (dipende dal tracciatore), quote intermedie, omologazione FIS e posizione esatta dell'imbocco del tunnel e della Schwarze Schneid.

#### Gurgl – Kirchenkar (SL)

| # | Sezione | Tipo | s≈ | Nota | Affidabilità |
|---|---|---|---|---|---|
| 1 | Start [GENERICO] | partenza | 0,00 | 2.475 m | ufficiale |
| 2 | Tratto ripido [GENERICO] | muro | 0,45 | max 62 %, posizione ignota | incerta |
| 3 | Zielhang [GENERICO] | pendio d'arrivo | 0,90 | min 18 %, posizione ignota | incerta |
| 4 | Ziel Kirchenkar | arrivo | 1,00 | 2.265 m, a Hochgurgl | ufficiale |

**Dati tecnici.** Dati ufficiali: **2.475 → 2.265 m, 210 m, 548 m**, pendenze min 18 %, max 62 %, media 38,3 % ([Media kit Gurgl 2024](https://www.gurgl.com/local/gurgl_skiweltcup_mediakit_24_EN.pdf); [Eventübersicht 2023](https://www.gurgl.com/dam/Dokumente-PDF/oghg/winter/GURGL__SWC2023_Eventuebersicht.pdf)). Debutto il 18/11/2023. Nel 2026 sono in calendario lo SL donne il 21/11 e lo SL uomini il 22/11 ([Wikipedia](https://en.wikipedia.org/wiki/Kirchenkar)).

**Partenza.** Nella conca del Kirchenkar, zona Kirchenkarbahn.

**Traguardo – modello proposto: conca d'alta quota.** L'area d'arrivo è a Hochgurgl, **non a Obergurgl**. Ha fan zone e controllo biglietti, e vi si tengono le premiazioni. Si raggiunge a piedi in 15–20 minuti da Top Mountain Crosspoint (320 m di percorso, 110 m di dislivello) oppure sciando via Große Karbahn e pista 41 ([Media kit](https://www.gurgl.com/local/gurgl_skiweltcup_mediakit_24_EN.pdf); [Tirol presse](https://presse.tirol.at/app/uploads/2025/11/Gurgl_Ski-World-Cup_2025_EN.pdf)). La forma a conca è dedotta dal toponimo "Kar" (circo glaciale), non descritta dalle fonti. Non c'è ghiacciaio.

**Ambiente.** Impianti vicini: Kirchenkarbahn, Große Karbahn, Top Express, Hochgurglbahn I/II. Probabilmente sopra il limite del bosco (inferenza).

**Correzioni all'archivio.** Lunghezza 650 m → **548 m**, dislivello 210 m (in archivio "—"). Muro iniziale, Compressione, Piatto e Muro finale non trovano riscontro. Le altre etichette sono generiche.

**Lacune.** Nessun nome di sezione. Mancano la posizione del tratto più ripido, le tribune e la pagina "world-cup-slope" di gurgl.com, che non era raggiungibile.

### Svizzera

#### Wengen – Lauberhorn (DH)

| # | Sezione | Tipo | s≈ | Quota (Wiki) | Nota | Affidabilità |
|---|---|---|---|---|---|---|
| 1 | Start (Lauberhornschulter) | partenza | 0,00 | 2.315 | casetta in legno, vista su Eiger, Mönch e Jungfrau | ufficiale |
| 2 | Russisprung | salto | 0,13 | 2.180 | nato da un cumulo di neve di Russi; 40–50 m (Wiki) | ufficiale |
| 3 | Traversenschuss | traverso, curva sx | 0,19 | 2.120 | da 100 a oltre 130 km/h in 5 s | ufficiale |
| 4 | Hundschopf | salto/strettoia | 0,33 | 1.975 | **41°**, max 5 m tra roccia (sx) e rete (dx), volo di circa 40 m | ufficiale |
| 5 | Minschkante | curva dx con dosso | 0,39 | 1.915 | Joos Minsch, 1965 | ufficiale |
| 6 | Canadian Corner | curva | 0,41 | 1.890 | Irwin e Read, 1976; piattaforma hospitality | ufficiale |
| 7 | Alpweg | strettoia | 0,44 | 1.860 | stradina larga 3 m a oltre 100 km/h | ufficiale |
| 8 | Kernen-S (ex Brüggli-S) | chicane sopra un ponticello | 0,48 | 1.825 | uscita a 70–80 km/h | ufficiale |
| 9 | Wasserstation | sottopasso ferroviario | 0,53 | 1.770 | sotto il ponte della WAB, largo 9 m, 90–100 km/h | ufficiale |
| 10 | Langentrejen | scorrimento | 0,60 | — | piatto, cambi di direzione lunghi | incerta |
| 11 | Hanneggschuss | schuss nel bosco | 0,70 | 1.590 | oltre 140 km/h, record di 161,9 km/h (Clarey 2013) | ufficiale |
| 12 | Seilersboden | piano + curva piatta sx | 0,78 | — | breve respiro | incerta |
| 13 | Silberhornsprung | salto, leggera curva dx | 0,84 | 1.450 | ridisegnato nel 2003, Silberhorn sullo sfondo | ufficiale |
| 14 | Österreicherloch | (ex) compressione | 0,90 | 1.390 | le onde del 1954 non esistono più | ufficiale |
| 15 | Ziel-S | S stretta | 0,92 | 1.385 | tre curve ghiacciate | ufficiale |
| 16 | Zielschuss | schuss finale | 0,97 | 1.325 | solo Wikipedia, non è una sezione ufficiale | incerta |
| 17 | Ziel Innerwengen | arrivo | 1,00 | 1.287 | si frena entro 100 m da circa 100 km/h | ufficiale |

**Dati tecnici.** **2.315 → 1.287 m, 1.028 m di dislivello**, **4.480 m**: la discesa più lunga della Coppa. Pendenza massima 41° all'Hundschopf, velocità media 106,33 km/h, record della pista 2:22.58 ([lauberhorn.ch](https://www.lauberhorn.ch/rennen/abfahrt/); [jungfrau.ch](https://www.jungfrau.ch/de-ch/jungfrau-ski-region/grindelwald-wengen/lauberhorn-rennstrecke/)). Pendenza media 14,7°. SG: partenza a 2.025 m, 2.950 m ([Wikipedia](https://en.wikipedia.org/wiki/Lauberhorn_(downhill_ski_course))). Le s sono derivate dalle quote: nei tratti piatti (Langentrejen, Seilersboden) sottostimano la distanza percorsa.

**Partenza.** Casetta di legno permanente sulla spalla del Lauberhorn, sopra Kleine Scheidegg. Il primo tratto è poco pendente e serve a spingere.

**Traguardo – modello proposto: prato (Innerwengen).** Innerwengen è a circa 1 km a sud del paese, circa 20 minuti a piedi dalla stazione. Ha una **Zieltribüne temporanea con posti in piedi**, un maxischermo e un centro media permanente. Lo stesso arrivo serve per DH, SG e SL ([Factsheet Tribünenticket](https://www.lauberhorn.ch/fileadmin/user_upload/download/Factsheets_NEU/Factsheet_Tribuenenticket.pdf); [Wikipedia](https://en.wikipedia.org/wiki/Lauberhorn_(downhill_ski_course))). Fuori dall'arrivo ci sono altri due poli: la collina Girmschbiel presso Wengernalp, con oltre 10.000 spettatori e vista su Hundschopf, Minschkante e Canadian Corner, e il Weltcup-Dörfli in paese, con circa 4.500 posti ([plattformj](https://www.plattformj.ch/artikel/239538/)).

**Ambiente e attraversamenti.** È la pista con più attraversamenti reali documentati: il **sottopasso della Wengernalpbahn** alla Wasserstation, il **Brüggli** sotto la Kernen-S, la **roccia dell'Hundschopf**. La parte alta corre su pascoli aperti, la parte bassa nel bosco (Hanneggschuss).

**Correzioni all'archivio.** È l'archivio migliore del lotto: tutte le 14 sezioni sono confermate e nell'ordine giusto. Vanno corrette le descrizioni: origine del Russisprung, 100→130 km/h nel Traversenschuss, dettagli dell'Hundschopf, Minschkante come curva a destra con dosso, Canadian Corner legato alle cadute del 1976. Per la mappa conviene separare Alpweg e Kernen-S. La "forte compressione finale" dell'Hanneggschuss non è documentata. Lo Zielschuss è facoltativo.

**Lacune.** Distanze per sezione, direzione del Canadian Corner, capienza della tribuna, eventuali modifiche per il 2027. Resta da chiarire la "Panoramakurve" (circa 2.000 m) e l'Hundschopf "entschärft", citati solo da Wikipedia e da jungfrau.ch.

#### Adelboden – Chuenisbärgli (GS)

| # | Sezione | Tipo | s≈ | Nota | Affidabilità |
|---|---|---|---|---|---|
| 1 | Start | partenza | 0,00 | 1.730 m | ufficiale |
| 2 | Kanonenrohr | muro | 0,06 | ghiacciato e in ombra, "steilste Stelle" | ufficiale |
| 3 | Schnittenmedli | ondulato | 0,25 | più dolce ma mosso | ufficiale |
| 4 | Wintertal | contropendenza dx | 0,45 | sopra una strada e sentieri sepolti | ufficiale |
| 5 | Chäla | piatto | 0,62 | videowall, tendone, ristoro | ufficiale |
| 6 | Giisbrunni | transizione/frenata | 0,75 | ingresso nello Zielhang | ufficiale |
| 7 | Zielhang | muro finale | 0,86 | "il più ripido Zielhang della Coppa", ultime circa 8 porte | ufficiale |
| 8 | Zielarena ("Hexenkessel") | arrivo | 1,00 | 1.310 m | ufficiale |

**Dati tecnici.** **1.730 → 1.310 m, 1.290 m di lunghezza, 420 m di dislivello**, pendenza max 60 %, media 30 %, min 10 %, 50–55 porte. Lo slalom sullo stesso Zielhang va da 1.513 a 1.302 m su 622 m ([weltcup-adelboden.ch](https://www.weltcup-adelboden.ch/de/Info/Rennen/Rennstrecke)). La descrizione dei tratti e il soprannome "Hexenkessel" vengono da [nau.ch](https://www.nau.ch/sport/wintersport/das-sind-die-herausforderungen-am-chuenisbargli-65637984). L'edizione 2027 (71ª) prevede il GS il 9/1 e lo SL il 10/1. Odermatt ha vinto 5 GS consecutivi ([plattformj](https://www.plattformj.ch/artikel/247583/)).

**Partenza.** A 1.730 m, seguita subito dal Kanonenrohr.

**Traguardo – modello proposto: stadio con tribune (Zielarena "Boden").** Arena ai piedi del muro finale con tribuna, fan zone in piedi, maxischermi e tende VIP. Nel 2027 la tribuna cresce di **600 posti a capienza complessiva invariata** ([plattformj](https://www.plattformj.ch/artikel/247583/)). La cifra di "oltre 35.000 tifosi" viene da una guida commerciale ([alps2alps](https://www.alps2alps.com/blog/adelboden-ski-world-cup-2027-the-ultimate-giant-slalom-spectator-geneva-transfer-guide)).

**Ambiente e attraversamenti.** Nel **Wintertal** la pista passa sopra una strada e dei sentieri coperti di neve, che creano cambi di terreno. Bosco e pascoli non sono documentati.

**Correzioni all'archivio.** Le 8 etichette generiche vanno sostituite: Muro iniziale = Kanonenrohr, Ritmo alto = Schnittenmedli, Cambio pendenza = Wintertal, Tratto di scorrimento = Chäla. "Muro tecnico" va sdoppiato in Giisbrunni e Zielhang. "Compressione" e "Curvone" vanno eliminati o fusi. Metriche: **1.290 m (non 1,5 km), 420 m**.

**Lacune.** Quote e distanze per sezione, capienza ufficiale, grafia (Chäla/Chälä, Giisbrunni/Giisbruni). Il "50° Zielhang" del sito ufficiale è incompatibile con un massimo del 60 % (circa 31°).

#### Crans-Montana – Mont Lachaux (DH e SG)

| # | Sezione | Tipo | s≈ DH | s≈ SG | Nota | Affidabilità |
|---|---|---|---|---|---|---|
| 1 | Départ DH | partenza | 0,00 | — | 2.210 m, breve scorrimento iniziale | ufficiale |
| 1-SG | Départ super-G | partenza | — | 0,00 | 2.116 m (2024), spostata leggermente dopo il 2024 | FIS |
| 2 | Mur de Marius (La Face) | muro | 0,18 | 0,05 | primo muro; "Mur de Montan" 49 % su it.wiki, forse un sinonimo | ufficiale |
| 3 | Trou du Renard | curva sx stretta | 0,27 | 0,13 | la pista si restringe | ufficiale |
| 4 | Bosse du Président | salto/dosso | 0,45 | 0,35 | lancia sulla traversa | ufficiale |
| 5 | Traverse de Clavan | traversa piatta | 0,57 | 0,47 | conta lo scorrimento | ufficiale |
| 6 | Toboggan | curva dx stretta | 0,72 | 0,66 | ingresso nel muro finale; da qui parte lo slalom | ufficiale |
| 7 | Reck de Vermala | muro finale | 0,86 | 0,83 | 53 % (it.wiki), paragonato alla Face de Bellevarde | ufficiale |
| 8 | Saut final [senza nome] | salto artificiale | 0,95 | 0,94 | nome non documentato | incerta |
| 9 | Arrivée | arrivo | 1,00 | 1,00 | 1.545 m | ufficiale |

Nella tabella l'affidabilità si riferisce alla DH. Per il SG la mappatura sulle sezioni della DH è un'inferenza, segnata nel JSON come incerta.

**Dati tecnici.** DH: **2.210 → 1.545 m, 665 m, 2,45 km**, tempo stimato 1:26 ([CM2027 FR](https://www.cransmontana2027.ch/actualites/la-nationale-et-la-mont-lachaux-deux-pistes-de-renom-aux-caracteristiques-singulieres/)). Nella configurazione Coppa del 16/2/2024 la DH andava da 2.210 a 1.650 m su 2.171 m, omologazione 14750/11/22 ([FIS](https://medias1.fis-ski.com/pdf/2024/AL/5028/2024AL5028RLR0.pdf)). SG del 18/2/2024: **2.116 → 1.545 m, 571 m, 2.045 m**, omologazione 14751/11/22, 40 porte ([FIS/skicm](https://www.skicm-cransmontana.ch/media/350945/2024al5030rlr0-sg.pdf)). Le pendenze (53 %/28°) vengono solo da Wikipedia ([en.wiki](https://en.wikipedia.org/wiki/Mont_Lachaux); [it.wiki](https://it.wikipedia.org/wiki/Mont_Lachaux)). La DH del 30/1/2026 è stata annullata dopo 6 partenti e 3 cadute ([Blick](https://www.blick.ch/fr/sport/ski/ce-netait-pas-raisonnable-faux-depart-pour-les-courses-de-crans-montana-id21646836.html)).

**Partenza.** Vicino alla cima del Mont Lachaux, con un breve tratto di scorrimento fino alla partenza del SG.

**Traguardo – modello proposto: conca/prato con tribune.** L'arrivo è a 1.545 m, alla stessa quota di quello della Nationale. Secondo l'organizzatore **il pubblico segue tutta la pista dalle tribune** ([CM2027 piste](https://www.cransmontana2027.ch/competition/pistes/piste-mont-lachaux/)). Nome della località d'arrivo e capienza non trovati. Ai Mondiali 2027 la pista ospita DH e SG donne, gli slalom e la gara a squadre.

**Ambiente.** Bosco, limite degli alberi e impianti non sono documentati. "Vermala" è un toponimo. Avvertenza: **"Nationale" è una pista maschile separata** (Bella Lui 2.514/2.520 m → 1.545 m, 3,67–3,8 km) e non va confusa con la Mont Lachaux ([CM2027 news](https://www.cransmontana2027.ch/en/news/detail/the-legendary-nationale-piste-gets-a-green-light-from-the-fis/)).

**Correzioni all'archivio.** DH: Muro iniziale = Mur de Marius, Curvone = Trou du Renard (curva stretta), Zona di scorrimento = Traverse de Clavan, Curve finali = Toboggan + Reck de Vermala. Il salto finale va **dopo** il Reck de Vermala. Lunghezza **4 km → 2,45 km**, dislivello 665 m. SG: "Ingresso veloce" è in realtà un muro (Mur de Marius), "Curva lunga" è stretta (Trou du Renard). I salti reali sono Bosse du Président e il salto finale. Lunghezza **3 km → 2.045 m**, dislivello 571 m.

**Lacune.** Quota della nuova partenza SG. Non è chiaro se il Mur de Marius cada sopra o sotto la partenza del SG. Mancano distanze per sezione, nome dell'area d'arrivo e capienza.

### Italia

#### Bormio – Stelvio (DH)

| # | Sezione | Tipo | s≈ | Nota | Affidabilità |
|---|---|---|---|---|---|
| 1 | Partenza / Muro di partenza | muro | 0,00 | 2.255 m (2.268 m nel 2026, area Praimont), **63 %** | ufficiale |
| 2 | Doppia curva iniziale | S | 0,05 | due curve veloci verso la Rocca | ufficiale |
| 3 | Salto della Rocca | salto | 0,09 | circa 30 m, qui inizia il bosco | ufficiale |
| 4 | Canalino Sertorelli | canalino/diagonale | 0,18 | circa 300 m, ingresso allargato | ufficiale |
| 5 | Attraversamento Valdisotto | traverso | 0,24 | citato nel PDF ufficiale, natura ignota | incerta |
| 6 | Fontana Lunga | salto sopra un tunnel | 0,30 | circa 200 m, tunnel costruito in estate sotto la pista | ufficiale |
| 7 | Pian dell'Orso | curve e controcurve | 0,38 | 400 m e 100 m di dislivello; posizione contesa | incerta |
| 8 | Curvoni degli Ermellini | curvoni | 0,44 | immettono nella Carcentina | ufficiale |
| 9 | Carcentina | diagonale dx in contropendenza | 0,52 | "la più spettacolare", spesso decisiva | ufficiale |
| 10 | Doppia curva | S | 0,57 | nominata solo genericamente | media |
| 11 | Prati del Ciuk | pianoro | 0,61 (da quota) | **1.638 m**, circa 100 m | ufficiale |
| 12 | Salto / Muro di San Pietro | salto | 0,70 | **40–45 m** su pendenza del 50 %, oltre 140 km/h | ufficiale |
| 13 | Piana / Schuss di San Pietro | schuss | 0,77 | forte accelerazione | ufficiale |
| 14 | La Konta (muro finale) | muro | 0,85 | almeno 200 m, in ombra, oltre 100 km/h | ufficiale |
| 15 | Coston e Feleit | curve | 0,93 | solo Wikipedia (anche "Bosco Basso") | incerta |
| 16 | Salto finale (del Feleit) | salto | 0,97 | oltre 100 km/h | media |
| 17 | Arrivo – Stelvio Ski Stadium | arrivo | 1,00 | 1.245 m, visibile dal cancelletto | ufficiale |

**Dati tecnici.** Configurazione classica: **2.255 → 1.245 m, 3.250 m, 1.010 m**, circa 2 minuti ([Bormio Ski](https://www.bormioski.eu/pista-stelvio/)). Una seconda pagina di Bormio Ski dà 3.230 m e 986 m ([Bormio Ski EN](https://bormioski.eu/en/the-stelvio)). Configurazione 2024–26 e olimpica: **partenza a 2.268 m (Praimont), 3.442 m**, max 63 % ([Bormio Ski World Cup](https://skiworldcup.bormio.eu/en/technical-specifications)). Wikipedia riporta 1.023 m di dislivello, max 73 %, media 30,9 % e la vittoria olimpica di von Allmen in 1:51.61 ([Wikipedia EN](https://en.wikipedia.org/wiki/Stelvio_(ski_course))). Media 31 %. Rispetto al 1985 il tracciato ha l'ingresso del Sertorelli allargato e una curva di controllo in più ([Il Post](https://www.ilpost.it/2026/02/07/bormio-stelvio-pista-olimpiadi/)). La sequenza ufficiale dei nomi viene dalla [presentazione PDF](https://www.in-lombardia.it/sites/default/files/evento/attachments/144397/presentazione_pista_stelvio_compressed.pdf).

**Partenza.** Sul Monte Vallecetta, vicino all'arrivo della seggiovia Cimino, sopra La Rocca. Dal cancelletto si vede l'arrivo.

**Traguardo – modello proposto: arrivo di paese con stadio.** Lo Ski Stadium è ai margini del centro di Bormio. Rinnovato per i Giochi con **Family Lounge (360 m²) e Hospitality Lounge (800 m²)** in legno e pietra locali e fotovoltaico da 42 kW, per circa 5,4 milioni di euro ([QN Sport](https://sport.quotidiano.net/en/olimpiadi/olimpiadi-milano-cortina-2026-scopriamo-lo-ski-stadium-di-bormio-1cbe173a)). Alla base c'è lo Stelvio Olympic Ski Centre ([Bormio Ski 2026](https://www.bormioski.eu/en/2026-olympics/)). Pista illuminata dal 2007 ([Wikipedia IT](https://it.wikipedia.org/wiki/Pista_Stelvio)). Capienza delle tribune non trovata.

**Ambiente e attraversamenti.** Il bosco di pini, cembri e abeti inizia al Salto della Rocca. Sono documentati il **tunnel sotto la Fontana Lunga** e l'"Attraversamento Valdisotto", senza indicazione se si tratti di una strada o di una pista. Punti di riferimento: Rifugio La Rocca, seggiovie Cimino e Pian dei Larici.

**Correzioni all'archivio.** Tutti i nomi in archivio sono generici, ma si possono mappare: Primo salto = Rocca, Curvone = Ermellini, Schuss centrale = Sertorelli (oppure Schuss di San Pietro), Passaggio tecnico = Carcentina/Pian dell'Orso, Zona di scorrimento = Ciuk, Curve finali = La Konta + Coston/Feleit. Il "Salto finale" dell'archivio è **in posizione sbagliata**: il salto principale del finale è San Pietro (45 m), seguito da un vero salto finale (Feleit).

**Lacune.** Ordine Pian dell'Orso/Carcentina e posizione dell'Ermellino (vedi conflitti). Mancano quote per sezione oltre al Ciuk, la forma della Rocca, la natura dell'attraversamento Valdisotto e la capienza delle tribune.

#### Cortina d'Ampezzo – Olympia delle Tofane (DH e SG)

| # | Sezione | Tipo | s≈ DH | s≈ SG | Nota | Affidabilità |
|---|---|---|---|---|---|---|
| 1 | Partenza – Rifugio Pomedes | partenza | 0,00 | — | 2.320 m, anfiteatro di calcare | media |
| 1-SG | Partenza SG (zona Duca d'Aosta) | partenza | — | 0,00 | 2.160 m (FIS 2019) | FIS |
| 2 | Curva sx d'ingresso [GENERICO] | curva sx secca | 0,06 | — | nessun nome | media |
| 3 | Tofana Schuss | gola rocciosa | 0,14 | — | **64–65 %**, 135–140 km/h, circa 20 s dopo il via | ufficiale |
| 4 | Salto Duca d'Aosta | salto | 0,24 | 0,05 | accanto al rifugio | ufficiale |
| 5 | Delta | curva cieca sx | 0,31 | 0,12 | in estate decollano i deltaplani; ordine conteso | incerta |
| 6 | Zona del Gigante | curve ampie | 0,42 | 0,25 | settore centrale | ufficiale |
| 7 | Gran Curvone | curva | 0,53 | 0,40 | la più impegnativa tecnicamente | ufficiale |
| 8 | Scarpadon | cambio pendenza, uscita cieca | 0,63 | 0,52 | introduce il finale | ufficiale |
| 9 | Pale di Rumerlo | scorrimento ondulato | 0,80 | 0,75 | ondulazioni molto più grandi nel 2026 | ufficiale |
| 10 | Traverso finale [GENERICO] | traverso | 0,92 | 0,92 | nessun nome | incerta |
| 11 | Salto "dentino" (tooth) | salto artificiale | 0,97 | 0,97 | ultimo salto | ufficiale |
| 12 | Arrivo Rumerlo | arrivo | 1,00 | 1,00 | 1.560 m | FIS |

**Dati tecnici.** DH: **2.320 → 1.560 m, 2.560 m, 750–760 m**, max 64–65 % nello Schuss ([Olympics.com](https://milanocortina2026.olympics.com/en/news/the-queen-of-runs-olympia-delle-tofane); [Wikipedia EN](https://en.wikipedia.org/wiki/Olimpia_delle_Tofane)). Discesa olimpica 2026: 2.572 m, Breezy Johnson in 1:36.10 ([Wikipedia](https://en.wikipedia.org/wiki/Alpine_skiing_at_the_2026_Winter_Olympics_%E2%80%93_Women%27s_downhill)). SG: **2.160 → 1.560 m, 600 m, 2.150 m**, omologazione 12852/10/18 ([FIS](https://www.fis-ski.com/DB/pdf/2019/AL/5052/2019AL5052SLR0.pdf)). Il SG olimpico è stato vinto da Brignone in 1:23.41 ([Wikipedia](https://en.wikipedia.org/wiki/Alpine_skiing_at_the_2026_Winter_Olympics_%E2%80%93_Women%27s_super-G)). La sequenza ufficiale è Schuss → Duca d'Aosta → Delta → Gran Curvone → Scarpadon → salto finale. Gare il 15–17 gennaio 2027 ([Cortina Ski World Cup](https://www.cortinaskiworldcup.com/la-pista/)). Lo Schuss è una gola in ombra tra due pareti di roccia con reti di protezione, con uscita a destra nel sole ([Ski Racing](https://skiracing.com/your-helmet-whistles-through-cortinas-tofana-schuss/)).

**Partenza.** DH al Rifugio Pomedes, sotto la Tofana di Mezzo, servita dalla vecchia seggiovia triposto. SG al Rifugio Duca d'Aosta secondo it.wiki, in cima allo Schuss secondo Ski Racing ([Wikipedia IT](https://it.wikipedia.org/wiki/Olympia_delle_Tofane)).

**Traguardo – modello proposto: conca/prato (Rumerlo).** Rumerlo è il luogo tradizionale della festa. Il ristorante **El Camineto (1968)** domina l'arrivo dalla terrazza ([Il Foglio](https://www.ilfoglio.it/sport/2026/02/23/news/la-magia-dell-olympia-delle-tofane-8686805/)). Nel 1956 le tribune temporanee avevano 9.830 posti. Nel 2026 la sede si chiamava "Tofane Alpine Skiing Centre". Il salto artificiale "dentino" sta davanti al traguardo ([Reuters/The Star](https://www.thestar.com.my/sport/others/2026/02/07/olympics-alpine-skiing-cortinas-revered-olimpia-piste-prepares-for-spotlight)). Capienza 2026 non trovata.

**Ambiente.** In alto un anfiteatro di calcare chiaro sotto le Tofane. Il bosco parte dalla zona centrale (dedotto). Tra gli impianti è documentata solo la triposto adiacente allo Schuss.

**Correzioni all'archivio.** DH: lo **"Schuss centrale" è nell'ordine sbagliato**, perché lo Schuss è in alto (Muro iniziale = Tofana Schuss). Il Curvone è troppo in alto rispetto a Delta e Zona del Gigante. Corrispondenze: Compressione = Scarpadon, Zona di scorrimento = Pale di Rumerlo, Salto finale = dentino. "Curve finali" non esistono come tali: ci sono traverso finale e dentino. SG: "Cambio di pendenza" (Scarpadon) è messo **prima** di "Porta chiave" (Gran Curvone), ordine errato. "Vertigine" non risulta da nessuna fonte. Pomedes è la partenza, non un tratto.

**Lacune.** Ordine Delta/Duca d'Aosta e quota della partenza SG ai Giochi. Mancano la posizione di Primo Muro, Secondo Muro e Diagonale (citati da en.wiki senza ordine), il limite del bosco e la capienza delle tribune.

#### Val Gardena – Saslong (DH)

| # | Sezione | Tipo | s≈ (da quota) | Quota | Nota | Affidabilità |
|---|---|---|---|---|---|---|
| 1 | Partenza Ciampinoi | partenza | 0,00 | 2.249 | 45,54 %, salto subito dopo il via | ufficiale |
| 2 | Spinel | muro | 0,19 | 2.091 | **56,90 %**, si entra saltando, poi 1ª compressione | ufficiale |
| 3 | Saut dl Moro | salto | 0,28 | 2.018 | circa 40 m, verso la 2ª compressione | ufficiale |
| 4 | Looping | salto | 0,31 | — | ridimensionato nel tempo | media |
| 5 | Scorrimento [GENERICO] | scorrimento | 0,36 | — | quasi 500 m | media |
| 6 | Sochers / Muri di Sochers | salti + muri | 0,42 | 1.900 | 55,90 %; salto di 15–20 m, poi sx-dx-sx, salto di circa 35 m sul 2° muro | ufficiale |
| 7 | Scorrimento verso le Gobbe | schuss | 0,48 | — | circa 130 km/h | media |
| 8 | Gobbe del Cammello | 3 gobbe/salto | 0,52 | 1.813 | 51,27 %, oltre 80 m (record 88 m), fino a 6 m di altezza | ufficiale |
| 9 | Curva del Lago | curva | 0,58 | — | prima del Ciaslat | media |
| 10 | Ciaslat | prato a dossi | 0,63 | 1.720 | 30,18 %, 17 dossi, 4 curve | ufficiale |
| 11 | Nucia | curva + salto | 0,83 | 1.550 | 51,60 %, lancia nello schuss finale | ufficiale |
| 12 | Tunnel Jump e schuss | salto sopra una galleria | 0,91 | 1.489 | 39,04 %, galleria stradale del 2009 | ufficiale |
| 13 | Arrivo Santa Cristina | arrivo | 1,00 | 1.410 | quota solo da Wiki/OA Sport | media |

**Dati tecnici.** **3.446 m, 839 m di dislivello**, max 56 %, **9 salti e 17 dossi maggiori** ([saslong.org](https://www.saslong.org/en/news/detail/saslong-course-and-key-sections/)). Quote e pendenze degli 8 punti chiave vengono da [saslong.org Jumps and Bumps](https://www.saslong.org/en/news/detail/the-jumps-and-bumps-of-the-saslong/). Arrivo a 1.410 m, media 24,5 %, linea Girardelli (si assorbe la prima gobba, dalla seconda si salta oltre la terza) ([Wikipedia](https://en.wikipedia.org/wiki/Saslong)). Looping, Curva del Lago e lo scorrimento di 500 m vengono da [OA Sport](https://www.oasport.it/2022/12/sci-alpino-la-saslong-della-val-gardena-ai-raggi-x-una-pista-iconica-dalle-gobbe-del-cammello-fino-ai-prati-del-ciaslat/amp/). Le s sono calcolate come (2.249 − quota)/839: misurano la quota, non la distanza.

**Partenza.** Sul Ciampinoi, servito dalla cabinovia da Selva, sotto il Sassolungo (3.181 m).

**Traguardo – modello proposto: arrivo di paese con tribune.** Il parterre è a Santa Cristina. Il Ticket Point è **alla rotonda tra le due gallerie** della statale. Ci sono tre tribune: centrale (Happy Zone), Fan Club e FORST SasLounge. **Una quarta tribuna è alle Gobbe del Cammello**, lungo la pista ([Race guide](https://www.saslong.org/en/races/raceguide/)). Capienza non indicata.

**Ambiente e attraversamenti.** Il **Tunnel Jump** prende il nome dalla galleria della circonvallazione di Santa Cristina (2009), che passa **sotto** lo schuss finale: si salta sopra una galleria, non si attraversa una strada a raso. Il bosco della parte medio-bassa non è documentato tratto per tratto.

**Correzioni all'archivio.** L'archivio è corretto nell'ordine e nei nomi principali. Il Moro è il secondo salto, non il "primo grande salto". La direzione "sinistra" della Nucia non è confermata. **"Arrivo Ruacia" non risulta da nessuna fonte**: da rinominare "Arrivo Santa Cristina". Vanno aggiunti Looping, Curva del Lago e la tribuna delle Gobbe.

**Lacune.** Distanze progressive, spaziatura delle gobbe, direzione delle curve (tranne la sx-dx-sx di Sochers), quota ufficiale dell'arrivo, copertura forestale per tratto.

#### Alta Badia – Gran Risa (GS)

| # | Sezione | Tipo | s≈ | Nota | Affidabilità |
|---|---|---|---|---|---|
| 1 | Partenza Piz La Ila | partenza | 0,00 | sotto l'incrocio delle piste nera e rossa | ufficiale |
| 2 | Prima curva a dx [GENERICO] | curva dx | 0,12 | inizio ripido | media |
| 3 | Seconda curva a dx [GENERICO] | curva dx | 0,25 | | media |
| 4 | Terza curva a dx – primo muro [GENERICO] | muro | 0,38 | | media |
| 5 | Curva a sx e canalone (lungo muro) | gola stretta | 0,55 | cuore della "grande spaccatura" | ufficiale |
| 6 | Gobes dl giat | 2 gobbe | 0,85 | 150 m, oltre il 40 % | media |
| 7 | Arrivo La Villa | arrivo | 1,00 | 1.420 m | ufficiale |

**Dati tecnici.** Dati ufficiali: **1.868 → 1.420 m, 1.255 m, 448 m**, max **69 %**, media 36 %, esposizione nord, in ombra e a volte ghiacciata ([altabadia.org](https://www.altabadia.org/en/poi/what-to-do-in-alta-badia/detail/poi/the-gran-risa-slope)). OA Sport dà 1.871/1.423 m e max 53 %. Da OA Sport vengono anche la sequenza delle curve e la spiegazione del nome: "Gran Risa" significa "grande spaccatura", un canale per far scendere il legname ([OA Sport](https://www.oasport.it/2018/12/sci-alpino-gigante-alta-badia-2018-la-mitica-gran-risa-ai-raggi-x-un-pendio-tra-i-piu-difficili-al-mondo/amp/)).

**Partenza.** Sotto la confluenza delle piste nera e rossa del Piz La Ila, servita dalla cabinovia Piz La Ila.

**Traguardo – modello proposto: arrivo di paese (La Villa).** Arrivo a 1.420 m a La Villa, nel bosco ai piedi del Piz La Ila. Tribune e capienza non trovate.

**Ambiente.** Pista nel bosco. La cabinovia Piz La Ila collega La Villa alla partenza; il suo tracciato rispetto alla pista non è documentato.

**Correzioni all'archivio.** Il "Muro iniziale" è in ordine sbagliato: il primo vero muro viene dopo la terza curva a destra. Le "Gobbe centrali" sono **nel finale** (Gobes dl giat), non al centro. "Sezione cieca" e "Piatto corto" non trovano riscontro. Tratto tecnico = canalone ripido.

**Lacune.** Dove cada il 69 %, altri nomi ladini, tribune.

#### Plan de Corones – Erta (GS femminile)

| # | Sezione | Tipo | s≈ | Nota | Affidabilità |
|---|---|---|---|---|---|
| 1 | Partenza Piz de Plaies – Erta | partenza | 0,00 | 1.605 m; casetta alzata nel 2026 | ufficiale |
| 2 | Tratto alto [GENERICO] | muro | 0,30 | pendenze tra 22 % e 61 % | incerta |
| 3 | Tratto centrale [GENERICO] | muro | 0,60 | | incerta |
| 4 | Arrivo San Vigilio / Al Plan | arrivo | 1,00 | 1.200 m, aree VIP | ufficiale |

**Dati tecnici.** **1.605 → 1.200 m, 1.325 m, 405 m**, max 61 %, media 32 %, min 22 %. Partenze SL a 1.425 m (M) e 1.400 m (F). Certificato FIS GS/SL scaricabile ([alplanevents.it](https://alplanevents.it/en/piste)). Nel 2026 la casetta è stata alzata, ma la nuova quota non è pubblicata. Scheib ha vinto la decima gara dal 2017 ([comunicato Kronplatz 2026](https://www.kronplatzevents.com/kronplatz/events/audi%20fis%20worldcup/presse/eng/Kronplatz%202026.pdf)).

**Traguardo – modello proposto: conca/prato a fondo pista.** Arrivo a 1.200 m sopra San Vigilio di Marebbe, con aree VIP che si affacciano sul traguardo. Tribune non pubblicate.

**Correzioni all'archivio.** Le etichette restano generiche. Lunghezza "1.5 km circa" → 1.325 m (dato precedente al 2026). I nomi "Para Paulina, Soleseid, Spona, Sorega" compaiono su [Wikipedia](https://en.wikipedia.org/wiki/Erta) senza fonte né ordine: **non usarli**.

**Lacune.** Nomi ufficiali dei tratti, posizione del 61 %, struttura dell'arrivo, nuova quota di partenza. Il certificato di omologazione scaricabile non è stato letto ed è la prima verifica da fare.

#### Madonna di Campiglio – Canalone Miramonti (SL)

| # | Sezione | Tipo | s≈ | Nota | Affidabilità |
|---|---|---|---|---|---|
| 1 | Partenza [GENERICO] | partenza | 0,00 | 1.725 m | media |
| 2 | Canalone [GENERICO] | gola | 0,35 | "canalone" è il nome della pista intera | incerta |
| 3 | Muro [GENERICO] | muro | 0,65 | fino al 60 %, posizione ignota | incerta |
| 4 | Arrivo – Ski Stadium | arrivo | 1,00 | 1.545 m | media |

**Dati tecnici.** **1.725 → 1.545 m, 470 m, 180 m**, max 60 %, media dichiarata 27 %. Progettata da Bruno Detassis (1940). Nel 1967 vi si è corsa la prima gara di Coppa in Italia ([Sportface](https://www.sportface.it/sport-invernali/sci-alpino/slalom-notturna-madonna-campiglio-2025-71esima-edizione-celebre-3tre/2767581); [Racer Ready](https://www.racer-ready.co.uk/post/2024/12/19/canalone-miramonti-primed-for-3tre-night-slalom)). La media del 27 % è incoerente con 180/470 m, che dà circa il 38 %.

**Traguardo – modello proposto: stadio con tribune, notturno.** Lo Ski Stadium è a ridosso del paese. Nel 2026 è arrivato il nuovo impianto LED: **290 proiettori sulla pista e 30 LED dinamici nello stadio**, potenza raddoppiata, 1,2 milioni di euro. La 3Tre è il 23/12/2026, con manche alle 17:45 e alle 20:45 ([il Dolomiti](https://www.ildolomiti.it/sport/2026/la-3tre-regala-una-nuova-luce-al-canalone-miramonti-investimento-da-piu-di-1-milione-e-nuova-data-per-lo-slalom-in-notturna-un-evento-ancora-piu-di-qualita)). Le luci risalgono al 1998 secondo Sportface, al 1999 secondo [de.wikipedia](https://de.wikipedia.org/wiki/Canalone_Miramonti).

**Correzioni all'archivio.** Hairpin, Verticale, Compressione e Muro finale non trovano riscontro. "Canalone" è il nome della pista, non un tratto. "Arrivo" va rinominato Ski Stadium.

**Lacune.** Nomi dei tratti, tribune, capienza, bosco. Il sito 3trecampiglio.it non è stato consultato con esito.

### Germania

#### Garmisch-Partenkirchen – Kandahar 2 (DH)

| # | Sezione | Tipo | s≈ | Nota | Affidabilità |
|---|---|---|---|---|---|
| 1 | Starthang | muro | 0,02 | 1.690 m, sotto il Kreuzjoch | media |
| 2 | S-Kurve | S | 0,07 | dopo, circa 100 km/h | media |
| 3 | Tröglhang | muro + salto sullo spigolo | 0,14 | il più ripido fino al 2008 | ufficiale |
| 4 | Olympia-Kurve | curva | 0,21 | qui la Kandahar 2 si separa dal vecchio tracciato | media |
| 5 | Panorama-Sprung | salto | 0,27 | vista sulla valle | media |
| 6 | Schußanger | schuss | 0,34 | | incerta |
| 7 | Himmelreich | salto/passaggio | 0,41 | "markanter Abschnitt" | ufficiale |
| 8 | Alte Quelle | passaggio | 0,48 | | media |
| 9 | Bödele | passaggio | 0,55 | | media |
| 10 | Eishang | muro ghiacciato | 0,63 | | ufficiale |
| 11 | Seilbahnsprung | salto | 0,70 | 40–60 m ("Seilbahnstadelsprung") | ufficiale |
| 12 | Kramersprung | salto | 0,76 | 20–40 m, smussato dopo il 2017 | media |
| 13 | Padöls | passaggio | 0,81 | | media |
| 14 | Auf der Mauer | piatto sul ciglio | 0,85 | | media |
| 15 | Freier Fall | muro finale (Zielhang) | 0,90 | **92 %**, il più ripido della Coppa | ufficiale |
| 16 | Tauberschuss | schuss + salto di circa 20 m | 0,96 | | ufficiale |
| 17 | Ziel (Talstation Kreuzeckbahn) | arrivo | 1,00 | 770 m | ufficiale |

**Dati tecnici.** Il gestore indica **1.690 → 770 m, 920 m di dislivello, 3.330 m** per la variante 5b (uomini) e 2.920 m per la 5a ([zugspitze.de](https://zugspitze.de/de/Unsere-Bergwelten/Highlights/Kandahar-Abfahrt)). Nella stessa pagina un riquadro riporta "7 km / 1800 hm", incoerente con questi dati e probabilmente riferito all'intero comprensorio. L'ordine delle 16 sezioni viene da [Wikipedia](https://en.wikipedia.org/wiki/Kandahar_(ski_course)). I nomi principali sono confermati dal gestore. Gare: DH il 28/2/2026 (il SG è stato annullato per nebbia) ([skiweltcup-garmisch.com](https://www.skiweltcup-garmisch.com/en/)) e DH il 20/2/2027. Kramersprung e caduta di Guay al Seilbahnstadelsprung: [web.de](https://web.de/magazine/sport/wintersport/ski-alpin/kandahar-abfahrt-2018-garmisch-gefaehrlich-strecke-32769858).

**Partenza.** Stazione a monte della Kandahar-Express, sotto il Kreuzjoch, vicino alla Tröglhütte.

**Traguardo – modello proposto: conca/prato sotto il Freier Fall.** Arrivo a 770 m presso la stazione a valle della Kreuzeckbahn, direttamente ai piedi del muro del 92 %. Vicino c'è il locale "Kandahar 2". Tribune e capienza non trovate. **Il trampolino olimpico (Gudiberg) non è collegato all'arrivo da nessuna fonte**: non va modellato accanto al traguardo.

**Ambiente e attraversamenti.** Bosco e radure si alternano lungo tutto il tracciato ([Kandahar-Hike PDF](https://zugspitze.de/Downloads/Tourentipps/EN/2024_Kandahar-Hike_EN.pdf)). La seggiovia Kandahar-Express risale dalla zona dell'Eishang. La fermata della ferrovia della Zugspitze vicino all'arrivo **non è verificata**.

**Correzioni all'archivio.** I POI sono un template generico, **identico a quello di Les Houches**: vanno sostituiti per intero. Seilbahnkurve, Panoramakurve e Ruhestein non esistono: i nomi corretti sono Seilbahnsprung e Panorama-Sprung, mentre Ruhestein non risulta. **Hölle, Höllentor, FIS-Schneise, Waldeck e Ramwiesen appartengono alla Kandahar 1 femminile** e non vanno sulla DH maschile.

**Lacune.** Quote e distanze per sezione, direzione delle curve, tribune, conferma dell'ordine da un media guide FIS.

### Francia

#### Val d'Isère – Face de Bellevarde (GS) e Stade Olympique (SL)

| # | Sezione | Tipo | s≈ GS | s≈ SL | Nota | Affidabilità |
|---|---|---|---|---|---|---|
| 1 | Départ GS [nome non trovato] | partenza | 0,00 | — | circa 2.300 m | incerta |
| 2 | Passage de l'Aigle / Bec de l'Aigle | passaggio roccioso, lato dx | 0,20 | — | reti A; il Bec è uno sperone | incerta |
| 3 | Passage de l'Ancolie | goulet in contropendenza tra due blocchi di roccia | 0,40 | 0,03 | partenza della variante SL appena sotto (2.065 m) | FIS |
| 4 | Goulet de Bellevarde | strettoia / partenza SL | 0,50 | 0,00 | 2.062 m | FIS |
| 5 | Le Mur | muro | 0,68 | 0,45 | fino al 64–70 %, posizione stimata | incerta |
| 6 | Bosse à Cathiard | gobba | 0,85 | 0,90 | appena sopra l'arrivo SL | FIS |
| 7 | Stade Olympique (muro finale) | arrivo | 1,00 | 1,00 | 1.842–1.850 m, nel paese | FIS |

**Dati tecnici.** SL, omologazione 3129/11/14 (variante 3130/11/14): **2.062 → 1.842 m, 220 m, 591 m**, media 37,23 %, max 70 %, min 15 %, esposizione est ([Omologazione 3130/11/14](https://www.comiteskisavoie.fr/homologation/2022/3130_11_14.pdf)). GS: **2.300 → 1.850 m, 450 m**, max 64 %, media 46 %, min 24 %, dati solo da Wikipedia ([en.wikipedia](https://en.wikipedia.org/wiki/La_face_de_Bellevarde)). La Face intera, usata per la DH, va da 2.807 a 1.848 m su 2.988 m, max 71 % ([worldcup-valdisere.com](https://www.worldcup-valdisere.com/les-pistes/)). Il Passage de l'Aigle, il Bec de l'Aigle e il Rocher de Bellevarde (che devia il vento) vengono dall'omologazione della pista adiacente Joseray-Calabourdane ([3484/11/17](https://www.comiteskisavoie.fr/homologation/2022/3484_11_17.pdf)). La pista è di Bernhard Russi, costruita per i Giochi 1992. GS uomini il 12/12/2026. Lo SL non risulta nel calendario consultato.

**Partenza.** GS a circa 2.300 m, senza nome. SL nel goulet de Bellevarde. La partenza DH, su una rampa a più del 65 % in cima al Rocher, non interessa queste due gare ([fr.wikipedia](https://fr.wikipedia.org/wiki/Face_de_Bellevarde)).

**Traguardo – modello proposto: stadio con tribune in paese.** Lo **Stade Olympique de Bellevarde** è nel paese di Val d'Isère, **non a La Daille** (arrivo della OK). Sta accanto alla stazione a valle della funivia Olympique e al Centre Aquasportif, sul cui tetto può trovarsi la "raquette" d'arrivo. È sotto una zona di caduta massi, a sinistra del muro finale. Tribune e capienza non trovate.

**Ambiente.** Molta roccia (Rocher de Bellevarde, goulet dell'Ancolie, Bec de l'Aigle). La parte alta è sopra il limite del bosco. Ai lati dello stadio, lariceti radi (incerto).

**Correzioni all'archivio.** Tutte le etichette sono generiche. "Arrivo" va rinominato Stade Olympique de Bellevarde. La partenza SL va rinominata Goulet de Bellevarde. Lunghezza SL "650 m" → **591 m**. Lunghezza GS "1,5 km" non verificata. "Tratto di scorrimento" e "Piatto" non trovano riscontro: la Face è ripida e costante. "La Chute" non risulta.

**Lacune.** Omologazione GS, ordine Aigle/Ancolie, posizione di "Le Mur" (muro intermedio o muro finale dello stadio?). "La Flamme" e "Passage de la Rute" probabilmente stanno nella parte alta (DH). Tribune.

#### Les Houches – La Verte des Houches (DH)

| # | Sezione | Tipo | s≈ | Nota | Affidabilità |
|---|---|---|---|---|---|
| 1 | Départ – sommet du Prarion | partenza | 0,00 | 1.871 m | ufficiale |
| 2 | La Cassure | salto | 0,08 | cresta verso il Col de Voza, poi salto; maxischermo | media |
| 3 | Virage du Rocher Blanc | curva | 0,14 | "una delle più tecniche del circuito" | ufficiale |
| 4 | Secondo salto da 60 m [nome non trovato] | salto | 0,19 | | incerta |
| 5 | Forêt du Nant Jorland | curve sopraelevate nel bosco | 0,30 | oltre 130 km/h, la luce cambia | media |
| 6 | Le Goulet | salto nella strettoia | 0,40 | | media |
| 7 | Esses à Pessi | S | 0,52 | condizionano la parte bassa | media |
| 8 | Plat de la FIS | scorrimento | 0,60 | | media |
| 9 | Schuss Battendier | schuss | 0,67 | | media |
| 10 | La Rupe | gobbe | 0,75 | | media |
| 11 | Covagnet | gobbe | 0,82 | | media |
| 12 | Saut de la Route | salto (strada, per inferenza) | 0,88 | | media |
| 13 | Schuss final | schuss | 0,95 | ultimi circa 200 m in comune con lo SL | ufficiale |
| 14 | Arrivée | arrivo | 1,00 | 1.001 m | ufficiale |

**Dati tecnici.** **1.871 → 1.001 m, 3.343 m, 870 m**, velocità media circa 100 km/h, punta circa 140 km/h. Nella parte alta **due salti da 60 m intervallati dal virage du Rocher Blanc**. SL: 1.169 → 985 m, 624 m, max 45 % ([chamonixworldcup.com EN](https://chamonixworldcup.com/en/the-course/the-piste); [FR](https://chamonixworldcup.com/fr/la-course/la-piste)). L'ordine completo dei nomi viene da [Alpeo n.3](https://a-fond.typepad.fr/alpeo/files/alpeo_3_kandahar_piste_verte.pdf). Non risultano in nessuna fonte "Plan Sec", "Hôtel", "Saut du Grand Mur" e "Chute Bernard".

**Partenza.** In cima al Prarion, su una cresta rivolta al Col de Voza.

**Traguardo – modello proposto: conca/prato con tribune.** Arrivo a circa 1.000 m sopra il paese di Les Houches, condiviso con lo SL. La parte bassa è in gran parte visibile dalle tribune. Nome dell'area e capienza non trovati.

**Ambiente e attraversamenti.** Lungo tratto nel bosco di abeti del Nant Jorland. Il **Saut de la Route** suggerisce una strada nella parte bassa (inferenza). Tramway du Mont-Blanc e télécabine du Prarion sono plausibili ma non verificati.

**Correzioni all'archivio.** Template generico **identico a Garmisch**: va sostituito per intero. Va tenuto presente che **nel 2026/27 non c'è DH** (solo SL il 30/1/2027).

**Lacune.** Pendenze e posizioni per sezione. L'identificazione Cassure = primo salto da 60 m è un'inferenza. Non è stato letto l'articolo di chamonix.net sui circa 10 milioni di euro investiti nella Kandahar, che potrebbe riguardare modifiche recenti.

### Finlandia, Slovacchia, Slovenia

#### Levi – Levi Black (SL)

| # | Sezione | Tipo | s≈ | Nota | Affidabilità |
|---|---|---|---|---|---|
| 1 | Partenza slalom | partenza | 0,00 | 438 m; sopra c'è la partenza GS, usata solo in allenamento | FIS |
| 2 | Pumping house hill | dosso | 0,12 | subito sotto la partenza SL | ufficiale |
| 3 | Parte alta [GENERICO] | ritmo | 0,30 | | incerta |
| 4 | The steep one / jyrkänne | muro | 0,55 | dossi ("rollers") aggiunti nel 2019 | ufficiale |
| 5 | Lower Preston's Pitch | muro | 0,70 | nome **solo da Wikipedia**, non confermato | incerta |
| 6 | Tratto più piatto con dosso [GENERICO] | dosso | 0,85 | dosso più alto costruito nel 2019 | incerta |
| 7 | Arrivo Levi Black | arrivo | 1,00 | 258 m | FIS |

**Dati tecnici.** **438 → 258 m, 180 m**, omologazione 9324/11/09, 65/62 porte ([FIS PDF](https://www.fis-ski.com/DB/pdf/2019/AL/0027/2019AL0027SLR1.pdf)). Pendenza max 27,5° (52 %), media 17,1° (30,8 %). È l'arrivo più basso del circuito femminile ([Wikipedia](https://en.wikipedia.org/wiki/Levi_Black)). La sequenza partenza → pumping house hill → "the steep one" viene da [levi.fi](https://www.levi.fi/en/ski/training-groups/), le modifiche del 2019 da [FIS](https://www.fis-ski.com/alpine-skiing/news/2019-20/levi-black-is-ready-for-slalom-opening). Lunghezza non trovata. Gare il 14 e 15/11/2026.

**Traguardo – modello proposto: prato a fondo pista.** L'arrivo è alla base dei Front Slopes. Il vincitore riceve **una renna** (Shiffrin ne ha 9) ([AP/AOL](https://www.aol.com/articles/santa-mikaela-shiffrin-american-star-135926781.html)). La cerimonia d'apertura si tiene sul front slope, il gala alla Hullu Poro Areena. Il pendio di Coppa ha una nuova illuminazione LED e circa 90.000 m³ di neve stoccata ([Yle](https://yle.fi/a/74-20116277)). Non è confermato se la gara 2026 sia serale.

**Ambiente.** Nei Front Slopes salgono la seggiovia North, l'Express cabin lift e la Glacier Express. La relazione con la pista G.2 non è documentata. La foresta boreale non è verificata.

**Correzioni all'archivio.** Il **"Muro iniziale" è nell'ordine sbagliato**: il ripido sta nella parte medio-bassa. "Compressione" non trova riscontro (ci sono dossi). "Muro finale" corrisponde probabilmente a "the steep one". Lunghezza "650 m" senza fonte: non usarla.

**Lacune.** Lunghezza (serve il certificato 9324/11/09), nome finlandese del pumping house hill, conferma di "Lower Preston's Pitch", tribune.

#### Jasná – Luková–Koliesko (GS femminile)

| # | Sezione | Tipo | s≈ | Nota | Affidabilità |
|---|---|---|---|---|---|
| 1 | Štart Luková | partenza | 0,00 | 1.650 m | ufficiale |
| 2 | Prvá terénna vlna | onda di terreno obliqua | 0,16 | circa 200 m dal via | ufficiale |
| 3 | Parte alta [GENERICO] | | 0,30 | | incerta |
| 4 | Náhradný štart (partenza GS alternativa) | punto di riferimento | 0,40 | | incerta |
| 5 | Druhá terénna vlna | onda obliqua | 0,45 | tra la partenza alternativa e la partenza SL | ufficiale |
| 6 | Štart slalomu | punto di riferimento | 0,50 | quota non pubblicata | incerta |
| 7 | Parte centrale [GENERICO] | | 0,70 | | incerta |
| 8 | Tratto finale da Priehyba | pendio finale | 0,88 | visibile dalla tribuna | ufficiale |
| 9 | Cieľ Koliesko | arrivo | 1,00 | 1.250 m | ufficiale |

**Dati tecnici.** FIS "Lukova 2": **1.650 → 1.250 m, 400 m**, omologazione 11663/02/15, 51/49 porte ([FIS 2024](https://medias4.fis-ski.com/pdf/2024/AL/5073/2024AL5073SLR1.pdf)). La pista n. 1 "Petra Vlhová" misura 2.070 m sullo stesso dislivello ([Jasná trate 2025](https://jasna.sk/fileadmin/resort_upload/jasna/trate_a_zariadenia_a4_2025_en.pdf)). Lunghezza del GS: "1220", senza unità ([GOPASS](https://blog.gopass.travel/?p=18586)). Le onde di terreno sono descritte da [worldcupjasna.sk](https://www.worldcupjasna.sk/en/press-media/news/the-tracks-for-the-world-cup-in-jasna-should-suit-petra-vlhova). Pendenze non pubblicate. GS il 23/1/2027.

**Traguardo – modello proposto: stadio con tribuna di neve.** Arena di Koliesko da **12.000 spettatori**. La **tribuna naturale di neve, con più di 30 file**, è costruita sul pendio Majstrovská (pista 7, quasi 49 %) e guarda l'arrivo e il tratto finale da Priehyba ([WCJ 15.1.2024](https://www.worldcupjasna.sk/en/press-media/press-releases/15-1-2024-fine-tuning-the-details-in-jasna)). La fan zone è a Biela Púť. Gli spettatori salgono con la seggiovia Záhradky → Priehyba ([WCJ](https://www.worldcupjasna.sk/en/press-media/press-releases/24-10-2023-jasna-announces-its-sold-out)).

**Correzioni all'archivio.** Il nome "Luková–Koliesko" è corretto. "Paseky" non risulta. "Muro iniziale" e "Compressione" non trovano riscontro. Il **salto** in `scene.jumps` va rimosso: ci sono solo onde di terreno. Il 49 % riguarda la Majstrovská, non la pista di gara.

**Lacune.** Pendenze della pista di gara, quote della partenza SL e della partenza alternativa, nomi locali, unità del "1220".

#### Kranjska Gora – Podkoren 3 (GS e SL)

| # | Sezione | Tipo | s≈ GS | s≈ SL | Nota | Affidabilità |
|---|---|---|---|---|---|---|
| 1 | Start veleslaloma – strmina 59 % | partenza + muro | 0,00 | — | 1.278 m, **59 % subito dopo il cancelletto** | ufficiale |
| 2 | Parte alta [GENERICO] | terreno sospeso, curve cieche | 0,20 | — | diagramma con tratti al 42/51/41/56 % senza nomi | incerta |
| 3 | Tratto intermedio [GENERICO] | | 0,40 | — | | incerta |
| 4 | Start slaloma | partenza SL | 0,55 (da quota) | 0,00 | 1.035 m | ufficiale |
| 5 | Parte centrale [GENERICO] | curve cieche | 0,70 | 0,45 | SL 21–47 % | incerta |
| 6 | Zadnja strmina | ripido finale | 0,92 | 0,85 | terrazza VIP accanto | ufficiale |
| 7 | Cilj – ciljna arena Podkoren | arrivo | 1,00 | 1,00 | 836 m | ufficiale |

**Dati tecnici.** GS: **1.278 → 836 m, 442 m**, max 59 %, min 18 %, omologazione 13938/01/21. SL: **1.035 → 836 m, 199 m**, max 47 %, min 21 %, omologazione 13939/01/21 ([MediaPlan 2026](https://pokal-vitranc.com/media/files/imported/2026/MediaPlan-Vitranc-2026%20(8).pdf)). Il 59 % subito dopo la partenza è documentato da [pokal-vitranc.com](https://pokal-vitranc.com/en/news/characteristics-of-the-giant-slalom-race-track). Curve cieche e terreno sospeso da [race slope](https://pokal-vitranc.com/en/information/race-slope). Lunghezze non pubblicate. "Podkorenska strmina" e "Poligon" sono nomi dell'intero pendio ([RTV SLO](https://www.rtvslo.si/sport/zimski-sporti/pokal-vitranc-praznuje-castitljivih-50-let/251636)). Progettista Peter Lakota, apertura 1983 ([Wikipedia](https://en.wikipedia.org/wiki/Podkoren_3)). Gare: GS uomini il 2/1/2027, SL donne il 30/1/2027.

**Traguardo – modello proposto: stadio con tribune (arena).** Tribuna principale, aree in piedi lungo la via verso l'impianto, **nuova terrazza VIP accanto all'ultimo ripido**, Media Center a fianco dell'arena. Il sentiero Kranjska Gora–Velika dolina passa sotto la collina. Il vecchio arrivo era presso il distributore Petrol ([MediaPlan 2026](https://pokal-vitranc.com/media/files/imported/2026/MediaPlan-Vitranc-2026%20(8).pdf)). Capienza non trovata.

**Correzioni all'archivio.** "Muro iniziale" del GS confermato (59 %). "Ritmo finale"/"Muro finale" diventano Zadnja strmina. Il **salto** in `scene.jumps` va rimosso. La fonte d'archivio kranjska-gora.si è un itinerario turistico: va sostituita con il MediaPlan.

**Lacune.** Lunghezze, nomi intermedi, posizione dei tratti del diagramma (serve l'immagine del profilo), nome dell'impianto all'arrivo, capienza.

### Stati Uniti

#### Beaver Creek – Birds of Prey (DH, SG, GS)

| # | Sezione | Tipo | s≈ DH | s≈ SG | s≈ GS | Nota | Affidabilità |
|---|---|---|---|---|---|---|---|
| 1 | Partenza DH | partenza | 0,00 | — | — | 3.483 m, a ovest della Chair 8 | media |
| 2 | The Flyway | scorrimento | 0,05 | — | — | piatto, conta la sciolinatura (Wiki: "Flyaway") | ufficiale |
| 3 | The Brink | muro/salto cieco | 0,12 | 0,03 | — | il punto più duro secondo Russi; in cima, partenza "foul-weather" | ufficiale |
| 4 | The Talon | curva | 0,17 | 0,09 | — | subito dopo il Brink | media |
| 5 | Pete's Arena | sezione | 0,22 | 0,14 | — | solo Wikipedia | incerta |
| 6 | Peregrine | salto | 0,28 | 0,21 | — | | incerta |
| 7 | Rahlves' Roll | sezione | 0,33 | 0,26 | — | tra Peregrine e Russi's Ride | media |
| 8 | Russi's Ride | sezione | 0,38 | 0,32 | — | | media |
| 9 | Goshawk | salto | 0,45 | 0,40 | — | | incerta |
| 10 | Screech Owl | salto | 0,52 | 0,47 | — | | incerta |
| 10-GS | Pick 5 (partenza GS) | partenza | — | — | 0,00 | appena sotto la partenza SG tradizionale | ufficiale |
| 11 | Ligety's Legacy | sezione | 0,60 | 0,56 | 0,20 | intitolata nel 2021, posizione non indicata | incerta |
| 12 | Golden Eagle | salto (dosso nel GS) | 0,70 | 0,67 | 0,40 | | media |
| 13 | The Abyss | muro (presunto) | 0,75 | 0,73 | 0,50 | solo Wikipedia | incerta |
| 14 | Miller's Revenge | sezione | 0,82 | 0,80 | 0,64 | tra Golden Eagle e Harrier | media |
| 15 | Harrier | salto (dosso nel GS) | 0,90 | 0,89 | 0,80 | arrivo provvisorio nel 2025 | ufficiale |
| 16 | Red Tail | salto finale | 0,96 | 0,96 | 0,92 | fino a 70 m a circa 113 km/h | ufficiale |
| 17 | Arrivo – Red Tail Stadium | arrivo | 1,00 | 1,00 | 1,00 | 2.730 m | incerta |

**Dati tecnici.** DH secondo Wikipedia: **3.483 → 2.730 m, 753 m, 2.752 m**, max 63 % (il testo dice 68 %), media 31 %. SG: 3.400 → 2.730 m, 671 m, media 35 %. GS: 3.124 → 2.724 m, 400 m, max 50 %, media 31 % ([Wikipedia](https://en.wikipedia.org/wiki/Birds_of_Prey_(ski_course))). [alpineskiworldcup.com](https://www.alpineskiworldcup.com/post/birds-of-prey-beaver-creek-racecourse) dà 2.623 m. Il sito ufficiale descrive Flyway, Brink e Red Tail, indica una media di circa 60 mph e circa 35 porte ([bcworldcup.com](https://bcworldcup.com/fis-alpine-ski-racing-101/)). I confini di Rahlves' Roll e Miller's Revenge vengono da [Vail Daily](https://www.vaildaily.com/sports-and-outdoors/birds-of-prey-names-new-course-areas-for-miller-rahlves-2/), la dedica di Ligety's Legacy da [Ski Racing](https://skiracing.com/ligetys-legacy-cemented-into-the-fabric-of-birds-of-prey/). A dicembre 2025, con poca neve, la DH è partita dalla partenza tradizionale, il SG dalla partenza "foul-weather" in cima al Brink e il GS da Pick 5. **Tutte e tre sono arrivate all'Harrier** ([2025 Spectator's Guide](https://bcworldcup.com/2025-spectators-guide/)). Calendario 2026/27: DH uomini 3–4/12, SG 5/12, GS 6/12; donne 11–13/12.

**Traguardo – modello proposto: stadio con tribune (Red Tail).** Il **John and Karen Arnold Red Tail Stadium** (rinominato nell'ottobre 2024) si trova alla base del salto Red Tail, alla confluenza delle Chair 10 e 11. È circa 240 m sopra il villaggio. Le tribune sono gratuite, accanto c'è l'area pubblica "Public Perch" e l'accesso è con navette dal Covered Bridge ([bcworldcup.com](https://bcworldcup.com/vail-valley-foundation-dedicates-stifel-birds-of-prey-world-cup-race-finish-venue-at-beaver-creek-to-honor-an-extraordinary-gift-from-john-and-karen-arnold/)). Capienza non pubblicata. Conviene prevedere nella mappa un **arrivo alternativo all'Harrier**.

**Ambiente.** Pista tagliata nel bosco (il tipo di alberi non è verificato). Chair 8 alla partenza, Chair 10 e 11 all'arrivo. La pista femminile Raptor non è più rilevante: le gare femminili si corrono sulla Birds of Prey.

**Correzioni all'archivio.** DH: **Golden Eagle** non è il "primo muro" ma un salto nella parte bassa. **Harrier** è il penultimo salto, non la "prima parte". **Talon** va subito dopo il Brink. **Red Tail** è il salto finale, non una "fase di scorrimento". Screech Owl va tipizzato come salto. SG: Ingresso veloce = The Brink, Curva lunga = The Talon. GS: Partenza = Pick 5. Tutti gli altri POI sono generici.

**Lacune.** Fonte primaria per l'ordine di Pete's Arena, Goshawk, Screech Owl, Ligety's Legacy e The Abyss (il programma BOP 2021 su issuu non è stato letto). Quota della partenza SG (3.400 m contro "appena sopra Pick 5"). L'assegnazione delle sezioni al GS è un'inferenza da quote. Mancano direzioni delle curve, lunghezze dei salti e capienza.

#### Sun Valley – Challenger (DH, SG) e Greyhawk/Hemingway (GS, SL)

| # | Sezione | Tipo | s≈ DH | s≈ SG | s≈ GS | Nota | Affidabilità |
|---|---|---|---|---|---|---|---|
| 1 | Partenza (top of International) | partenza | 0,00 | — | — | dove piega la cat track I-80 | media |
| 2 | Sawtooth Jump | salto | 0,04 | — | — | 30–40 m nei test | media |
| 3 | Durrance Dive | compressione | 0,12 | — | — | International si tuffa in Upper Warm Springs, forti g | media |
| 3-SG | Partenza SG | partenza | — | 0,00 | — | subito sotto la Durrance Dive | media |
| 4 | The Legends | gola, "yo-yo" | 0,27 | 0,09 | — | pareti alte | media |
| 5 | Carol's Wagon Wheel | gola, "yo-yo" | 0,37 | 0,21 | — | canalone di Warm Springs | media |
| 6 | Steilhang Traverse | traverso | 0,47 | 0,34 | — | in cima a Upper Greyhawk, ridisegnato nel 2024 | media |
| 7 | The Frontier | salto | 0,55 | 0,44 | — | vista sulle Boulder Mountains | media |
| 7-GS | Partenza GS | partenza | — | — | 0,00 | sotto The Frontier | media |
| 8 | The Sluice | strettoia | 0,65 | 0,56 | 0,13 | | media |
| 9 | Rudi's Roll | salto in traverso | 0,74 | 0,68 | 0,35 | | media |
| 10 | Cowboy's Corner | curva di 180° (dx per inferenza) | 0,82 | 0,77 | 0,55 | piega di Lower Hemingway | media |
| 11 | The Redd | scorrimento | 0,89 | 0,86 | 0,73 | "l'unico tratto tranquillo" | media |
| 12 | Proctor Park | pendio aperto + piccolo salto | 0,96 | 0,95 | 0,90 | | media |
| 13 | Arrivo – Greyhawk finish area | arrivo | 1,00 | 1,00 | 1,00 | circa 1.847 m | media |

Nel GS le sezioni a valle della partenza sono segnate nel JSON come incerte, perché il JSON non conferma che il gigante percorra esattamente le stesse sezioni della DH. Per lo **SL** il JSON ha solo Partenza (posizione ignota), Proctor Park (s≈0,70, inclusione presunta) e Arrivo: copertura **solo generica**.

**Dati tecnici.** I nomi e l'ordine delle 11 sezioni, la pendenza media del 36,7 % (la più alta tra le discese di Coppa) e il progettista Tom "Cowboy" Johnston vengono da [Idaho Mountain Express](https://www.mtexpress.com/wood_river_journal/special_sections/brand-new-world-cup-finals-race-course-highlights-area-history/article_8f020ce2-fb97-11ef-936f-f36b7f51cef3.html). Le posizioni delle partenze SG e GS e di Cowboy's Corner, le 12 reti A e l'area d'arrivo ampliata vengono da [Eye on Sun Valley](https://eyeonsunvalley.com/Story_Reader/12443/Sun-Valley-Prepares-for-World-Cup-in-Fraction-of-Time-Others-Have). DH secondo Ski Racing: **2.681 → 1.847 m, 834 m, 2.278 m**, velocità di 117 e 114 km/h nell'unica prova ([Ski Racing](https://skiracing.com/2025-stifel-sun-valley-world-cup-finals-mens-womens-downhill-preview/)). Secondo Wikipedia: 2.677 → 1.852 m, 2.459 m, max 55 %. SG: 2.475 → 1.852 m, 1.876 m. Le DH 2025 sono state annullate per vento ([Wikipedia Challenger](https://en.wikipedia.org/wiki/Challenger_(ski_course))). Mancano tutti i dati di GS e SL.

**Traguardo – modello proposto: conca/prato (Greyhawk).** Area d'arrivo ai piedi di Lower Greyhawk, **non a River Run**, ampliata per le Finali. Ha un doppio maxischermo, e **dal fondo si vedono interamente GS e SL**. Il parcheggio Lower Greyhawk resta chiuso durante le Finali. Si arriva in navetta o sciando da River Run. Capienza non trovata.

**Ambiente e attraversamenti.** La cat track I-80 alla partenza. La stazione intermedia della seggiovia Challenger, chiusa durante il SG. Sul lato sinistro di Lower Greyhawk è stata rimossa terra per migliorare la visuale. Bosco di conifere (non verificato).

**Correzioni all'archivio.** Tutte le etichette sono generiche. Corrispondenze per la DH: Primo salto = Sawtooth, Compressione = Durrance Dive, "Curvone" in alto non esiste (sono canaloni a yo-yo), Schuss centrale = Steilhang Traverse, Zona di scorrimento = The Redd, Curve finali = Cowboy's Corner. Il salto prima del traguardo è il piccolo salto di Proctor Park; Frontier è a metà pista. "College" e "River Run" non sono piste di gara. Il nome "Bald Mountain – Greyhawk" va bene solo per GS e SL.

**Lacune.** Quote e lunghezze di GS e SL, nomi delle sezioni dello slalom, distanze in metri, capienza. Alcune zone "restano da nominare" (autunno 2024).

#### Killington – Superstar (GS e SL femminili)

| # | Sezione | Tipo | s≈ GS | s≈ SL | Nota | Affidabilità |
|---|---|---|---|---|---|---|
| 1 | Partenza GS (cima di Superstar) | partenza | 0,00 | — | | ufficiale |
| 2 | Top Headwall | muro | 0,15 | — | fino all'incrocio con Launch Pad (Wiki: "Upper Headwall") | ufficiale |
| 3 | Launch Pad (incrocio) | incrocio con un'altra pista | 0,30 | — | fine del muro alto | ufficiale |
| 3-SL | Partenza SL | partenza | — | 0,00 | circa 988 m, probabilmente nelle Fields | incerta |
| 4 | The Fields (Upper/Lower) | tratto più dolce | 0,45 | 0,20 | | ufficiale |
| 5 | High Road (incrocio) | incrocio con un'altra pista | 0,65 | 0,45 | inizio del muro finale | ufficiale |
| 6 | Lower Headwall – Preston's Pitch | muro finale | 0,82 | 0,72 | termina sulla linea d'arrivo | ufficiale |
| 7 | Arrivo – Festival Village | arrivo | 1,00 | 1,00 | circa 788 m, K-1 Lodge | ufficiale |

**Dati tecnici.** Il programma ufficiale indica una pista di 4.800 ft (1.463 m), 1.200 ft (366 m) di dislivello, base a circa 2.500 ft e un "pitch of 30 to 50 degrees" (dato dubbio). Circa 40 porte in GS e circa 60 in SL. Fino a 120 cannoni ([Programma Killington Cup 2024](https://mountaintimes.info/wp-content/uploads/2024/11/WC2024-Program-FINAL-cropped-reduced-size-2.pdf)). Secondo Wikipedia: GS **1.128 → 788 m, 340 m**, max 62 %, media 39 %; SL **988 → 788 m, 200 m**, max 58 %, media 41 % ([Wikipedia](https://en.wikipedia.org/wiki/Superstar_(ski_course))). Gare il 28–29/11/2026.

**Traguardo – modello proposto: stadio con tribune (Festival Village).** Davanti al K-1 Lodge: **due settori di tribune**, tenda VIP, maxischermi, ampio spazio in piedi anche sul pendio a destra (guardando a monte). Dal fondo si vede il 40–50 % dello SL e il 30–40 % del GS. Pubblico "spesso oltre 30.000" nel weekend ([Programma](https://mountaintimes.info/wp-content/uploads/2024/11/WC2024-Program-FINAL-cropped-reduced-size-2.pdf)).

**Ambiente e attraversamenti.** Gli **incroci con le piste Launch Pad e High Road** sono i confini ufficiali delle sezioni e vanno modellati come attraversamenti. Bosco non verificato.

**Correzioni all'archivio.** GS: Muro iniziale = Top Headwall, Cambio pendenza = incrocio Launch Pad, Tratto di scorrimento = The Fields, Muro tecnico = Preston's Pitch, Arrivo = Festival Village (K-1). SL: Ritmo medio = The Fields, Muro finale = Preston's Pitch. Il Top Headwall probabilmente non fa parte dello slalom. "The Knoll" non risulta.

**Lacune.** Quote incoerenti tra Wikipedia e programma, posizione della partenza SL, direzioni delle curve, capienza delle tribune, conferma FIS dell'assenza nel 2025/26.

## Modelli di traguardo: quattro famiglie coprono tutte le 34 piste

Il campo `finish_area.type` dei JSON usa quattro valori: `stadium`, `village`, `slope_base`, `meadow`. Per la fase 2 propongo di ricondurli ai quattro modelli 3D previsti. Due criteri guidano la scelta: se le fonti documentano **strutture costruite** (tribune, edifici, archi), e se l'arrivo sta **dentro il tessuto del paese**. La classificazione è una proposta basata sulle descrizioni delle fonti, non un dato delle fonti stesse.

**Stadio su ghiacciaio (1 pista).** **Sölden** è l'unico caso: un edificio unico con 1.500 posti, centro stampa e cabine TV, la strada del ghiacciaio con i parcheggi che arriva al traguardo, la base della Schwarze Schneid alla stessa quota e nessun albero ([soelden.com](https://www.soelden.com/de/veranstaltungen-freizeittipps/events/audi-fis-skiweltcup-opening/weltcup-piste)). Il modello ha bisogno di ghiaccio/neve senza bosco, un edificio-tribuna e la strada in arrivo.

**Stadio con tribune (15 piste).** Qui le fonti documentano tribune o arene costruite. Al loro interno conviene distinguere tre varianti. La prima è lo **stadio urbano**, a ridosso del centro: Kitzbühel (Zielgelände, 40.000–50.000 spettatori), Schladming SL/GS (arco d'acciaio, notturna), Val d'Isère GS/SL (Stade Olympique accanto alla funivia Olympique e al Centre Aquasportif), Madonna di Campiglio (Ski Stadium con LED dinamici, notturna). La seconda è l'**arena a fondo pendio**: Adelboden (Zielarena "Boden"/"Hexenkessel"), Kranjska Gora GS/SL (tribuna principale e terrazza VIP accanto alla Zadnja strmina), Killington GS/SL (Festival Village, 2 settori di tribune, K-1 Lodge). La terza è lo **stadio in quota sopra il paese**: Beaver Creek DH/SG/GS (Red Tail Stadium, 240 m sopra il villaggio, con arrivo alternativo all'Harrier) e Jasná (Koliesko, 12.000 posti con tribuna di neve sulla Majstrovská). Tre di queste piste sono notturne (Schladming SL e GS, Campiglio) e richiedono un set di illuminazione. Lo stesso set serve anche a due arrivi di paese: Flachau (slalom notturno, più il nuovo gigante notturno 2027) e Bormio (pista illuminata dal 2007).

**Arrivo di paese (4 piste).** Il traguardo è dentro o al bordo dell'abitato, con edifici e strade come contesto principale. **Bormio** (Stelvio Ski Stadium ai margini del centro, lounge in legno e pietra, pista illuminata). **Val Gardena** (Santa Cristina, Ticket Point alla rotonda tra due gallerie, tre tribune più una alle Gobbe, galleria stradale sotto lo schuss finale). **Alta Badia** (La Villa, nel bosco, senza tribune documentate). **Flachau** (periferia, Hermann-Maier-Platz, slalom notturno). Bormio e Val Gardena potrebbero usare anche il modello stadio. Li metto qui perché il paese è il segno più riconoscibile, e a Val Gardena la galleria stradale è parte della scena.

**Conca/prato a fondo pista (14 piste).** L'arrivo è uno spazio aperto alla base del pendio, con strutture temporanee o non documentate. **Wengen** (Innerwengen, prato con Zieltribüne temporanea e centro media, a 1 km dal paese). **Cortina** DH/SG (Rumerlo, terrazza di El Camineto, dentino davanti al traguardo). **Garmisch** (Talstation Kreuzeckbahn, ai piedi del Freier Fall al 92 %). **Crans-Montana** DH/SG (tribune non quantificate, pista visibile per intero). **Les Houches** (arrivo condiviso DH/SL circa 1.000 m sopra il paese, con tribune). **Erta** (aree VIP sopra San Vigilio). **Levi** (Front Slopes, premio renna). **Gurgl** (conca d'alta quota a Hochgurgl, senza bosco per inferenza). **Sun Valley** DH/SG/GS/SL (Greyhawk, doppio maxischermo, GS e SL visibili per intero). Gurgl è il caso limite: alta quota senza ghiacciaio, forma a conca dedotta solo dal toponimo.

| Modello | Piste | Elementi da modellare documentati |
|---|---|---|
| Stadio su ghiacciaio | Sölden | edificio-tribuna 1.500 posti, Gletscherstraße, Schwarze Schneid |
| Stadio con tribune (urbano) | Kitzbühel, Schladming SL/GS, Val d'Isère GS/SL, Campiglio | Rasmushof/Ganslern; arco d'acciaio e luci; funivia Olympique e Centre Aquasportif; LED |
| Stadio con tribune (arena) | Adelboden, Kranjska Gora GS/SL, Killington GS/SL | tribuna e VIP; terrazza VIP e Media Center; 2 settori e K-1 Lodge |
| Stadio con tribune (in quota) | Beaver Creek DH/SG/GS, Jasná | Red Tail Stadium, Chair 10/11; tribuna di neve con oltre 30 file |
| Arrivo di paese | Bormio, Val Gardena, Alta Badia, Flachau | lounge; gallerie e rotonda; cabinovia Piz La Ila; luci |
| Conca/prato | Wengen, Cortina DH/SG, Garmisch, Crans DH/SG, Les Houches, Erta, Levi, Gurgl, Sun Valley ×4 | tribuna temporanea; El Camineto; Talstation; maxischermi |

## Conflitti tra fonti: dove i numeri non coincidono

| Pista | Dato | Versione A | Versione B | Scelta nei JSON |
|---|---|---|---|---|
| Streif | Dove sta l'85 % | Steilhang ([HKR](https://hahnenkamm.com/rennstrecken/die-streif-abfahrt/)) | Mausefalle, Steilhang 72 % ([Wikipedia en](https://en.wikipedia.org/wiki/Streif)) | ufficiale (Steilhang), segnalato |
| Streif | Lunghezza | 3.315 m (HKR) | 3.312 m (Wikipedia) | 3.315 m |
| Streif | Seidlalmkurve | destra poi sinistra (HKR) | lunga curva a sinistra (de.wiki) | ufficiale |
| Lauberhorn | Pendenza Hundschopf | 41° ([lauberhorn.ch](https://www.lauberhorn.ch/rennen/abfahrt/)) | 42° ([Wikipedia](https://en.wikipedia.org/wiki/Lauberhorn_(downhill_ski_course))) | 41° |
| Lauberhorn | Panoramakurve | assente nell'elenco ufficiale | presente a circa 2.000 m (Wikipedia) | esclusa |
| Saslong | Punto di velocità massima | Sochers ([Race guide](https://www.saslong.org/en/races/raceguide/)) | piatto prima delle Gobbe ([Wikipedia](https://en.wikipedia.org/wiki/Saslong)) | entrambi annotati |
| Saslong | Quota arrivo / nome | 1.410 m (solo Wiki/OA Sport) | "Ruacia" (archivio, non trovato) | 1.410 m, "Santa Cristina" |
| Stelvio | Lunghezza/partenza | 3.250 m, 2.255 m ([Bormio Ski](https://www.bormioski.eu/pista-stelvio/)) | 3.442 m, 2.268 m ([Bormio WC](https://skiworldcup.bormio.eu/en/technical-specifications)); 3.230 m/986 m ([Bormio Ski EN](https://bormioski.eu/en/the-stelvio)) | classica, olimpica in nota |
| Stelvio | Pian dell'Orso | dopo la Carcentina (PDF ufficiale) | prima della Carcentina (it/en.wiki) | segnalato come incerto |
| Stelvio | Ermellino | Curvoni prima della Carcentina (bormioski, olympics.com) | Salto in alto (it.wiki) / dopo San Pietro (en.wiki) | Curvoni |
| Tofane | Ordine Duca d'Aosta / Delta | Duca poi Delta ([ufficiale](https://www.cortinaskiworldcup.com/la-pista/)) | Delta poi Duca ([Wikipedia EN](https://en.wikipedia.org/wiki/Olimpia_delle_Tofane)) | ufficiale |
| Tofane | Partenza DH | 2.320 m (Wikipedia) | 2.348 m, 2.600 m ([Montagna.tv](https://www.montagna.tv/46860/lolimpia-delle-tofane-e-la-pista-piu-amata-ditalia/amp/)) | 2.320 m |
| Tofane | Partenza SG | Rifugio Duca d'Aosta (it.wiki) | cima dello Schuss (Ski Racing) | 2.160 m FIS 2019 |
| Gran Risa | Pendenza massima | 69 % ([altabadia.org](https://www.altabadia.org/en/poi/what-to-do-in-alta-badia/detail/poi/the-gran-risa-slope)) | 53 % (OA Sport) | 69 % |
| Erta | Dati tecnici | 1.605/1.200 m, max 61 %, media 32 % (ufficiale) | 1.606/1.206 m, max 58 %, media 40 % (Wikipedia) | ufficiale |
| Campiglio | Pendenza media | 27 % (stampa) | circa 38 % calcolato da 180/470 m | segnalato |
| Campiglio | Primo impianto luci | 1998 (Sportface) | 1999 (de.wiki) | entrambi |
| Kandahar 2 | Lunghezza/dislivello | 3.330 m / 920 m | "7 km / 1800 hm" nella stessa pagina ([zugspitze.de](https://zugspitze.de/de/Unsere-Bergwelten/Highlights/Kandahar-Abfahrt)) | 3.330 m / 920 m |
| Adelboden | Arrivo e lunghezza | 1.310 m, 1.290 m (ufficiale) | 1.294 m, 1.430 m (Wiki); arrivo 1.290 m (nau.ch) | ufficiale |
| Adelboden | Punto più ripido | Kanonenrohr "steilste Stelle" | "50° Zielhang" (stesso sito), max 60 % | 60 %, "50°" trattato come marketing |
| Crans SG | Dati | 2.116 → 1.545 m, 2.045 m (FIS) | 2.130 → 1.560 m, 1.918 m (Wikipedia) | FIS |
| Sölden | Pendenza Eisfall | 68,2 % (ufficiale) | 65 % (alpineskiworldcup.com) | ufficiale |
| Sölden | Quota Rettenbach | 2.675 m | 2.830 m (stessa pagina della Gletscherstraße) | arrivo 2.670 m |
| Gurgl | Pendenze | 18/62/38,3 % (ufficiale) | 9/60/41 % (Wikipedia) | ufficiale |
| Flachau | Partenza | 1.145 m (alpineskiworldcup.com) | 1.160 m (FIS 2019) / 1.169 m (FIS 2026) | FIS 2026 |
| Levi | Arrivo | 258 m (FIS/Wiki) | 238 m (EssentiallySports, probabile refuso) | 258 m |
| Birds of Prey | Lunghezza DH | 2.752 m (Wiki) | 2.623 m (alpineskiworldcup.com) | 2.752 m, incerta |
| Birds of Prey | Pendenza max | 63 % (infobox) | 68 % (testo Wiki) | 63 %, incerta |
| Birds of Prey | Partenza SG | 3.400 m (Wiki) | "appena sopra Pick 5" (guida 2025) | 3.400 m, incerta |
| Sun Valley DH | Lunghezza/dislivello | 2.278 m / 834 m (Ski Racing) | 2.459 m / 825 m (Wikipedia) | Ski Racing |
| Killington | Quote | 1.128 → 788 m, 340 m (Wiki) | base circa 762 m, 366 m (programma) | Wiki, incerta |

Nella maggior parte dei casi il conflitto oppone il sito dell'organizzatore a Wikipedia. I JSON danno precedenza alla fonte ufficiale o FIS. Fanno eccezione Beaver Creek, Sun Valley GS/SL e Killington, dove l'unica fonte numerica completa è Wikipedia: lì la fiducia è marcata come incerta.

## Lacune e prossime verifiche: le posizioni s sono la debolezza principale

La lacuna più grave per la fase 2 è anche la più diffusa: **nessuna fonte pubblica distanze progressive per sezione**. Fanno eccezione Sölden (lunghezze dei tratti da fonte non ufficiale, coerenti con il totale ufficiale) e gli ancoraggi di Kitzbühel (Starthang 160 m, Seidlalmsprung a metà pista). Le quote per sezione esistono solo per Saslong (ufficiali), Lauberhorn (Wikipedia) e Stelvio (solo i Prati del Ciuk). Tutte le altre posizioni s sono interpolate dall'ordine. Per un modello che piazza POI e modificatori di terreno lungo la linea di gara, l'errore può arrivare a diversi punti percentuali di s, soprattutto dove si alternano tratti piatti e ripidi. Lauberhorn ne è l'esempio: Langentrejen e Seilersboden sono più lunghi di quanto suggerisca la loro quota.

La seconda lacuna trasversale è la **capienza delle tribune**: è pubblicata solo per Sölden (1.500 posti a sedere) e Jasná (12.000). Altrove ci sono solo stime di spettatori complessivi (Kitzbühel 40.000–50.000, Schladming 50.000, Killington oltre 30.000, Flachau 10.000–15.000) o variazioni (Adelboden, +600 posti). La terza è la **direzione delle curve**, documentata solo per Streif, Lauberhorn, Crans-Montana, Cortina (Delta), Stelvio (Carcentina) e Sochers. Nei giganti e negli slalom dipende comunque dal tracciatore.

Le verifiche più produttive, in ordine di resa attesa:

| Priorità | Verifica | Piste interessate | Cosa sblocca |
|---|---|---|---|
| 1 | Certificati di omologazione FIS (profili con quote e distanze) | Streif 14579/09/22, Levi 9324/11/09, Erta (PDF già linkato), Podkoren 13938-13939/01/21, Val d'Isère GS, Sun Valley GS/SL, Gurgl | posizioni s misurate, lunghezze mancanti, posizione delle pendenze massime |
| 2 | Media guide degli organizzatori | Kandahar 2, Birds of Prey (programma 2021 su issuu), Gran Risa, Campiglio (3trecampiglio.it) | ordine confermato, nomi dei tratti per le piste generiche |
| 3 | Immagine del profilo nel MediaPlan Vitranc | Podkoren | collocare i tratti al 42/51/41/56 % |
| 4 | Ortofoto/cartografia | Adelboden, Crans, Erta, Gurgl, Levi, Saslong | limite del bosco, posizione degli impianti, forma delle conche |
| 5 | Conferme puntuali | Saslong ("Ruacia" e quota d'arrivo), Lauberhorn (Panoramakurve), Levi ("Lower Preston's Pitch", gara serale), Tofane (partenza SG 2026), Crans (nuova partenza SG), Stelvio (Attraversamento Valdisotto), Garmisch (fermata Zugspitzbahn), Les Houches (Tramway du Mont-Blanc, lavori da circa 10 milioni di euro) | eliminare elementi incerti dalle scene |
| 6 | Calendario FIS ufficiale 2026/27 | Val d'Isère SL, Killington, Gurgl | quali varianti mostrare |

Per le 7 piste senza nomi (Schladming SL/GS, Flachau, Erta, Campiglio, Gurgl, Sun Valley SL), anche dopo queste verifiche è probabile che restino solo etichette descrittive. La raccomandazione è mostrarle nella mappa come tali, ad esempio "Parte alta" o "Zielhang", e **non inventare nomi propri**. L'archivio attuale lo fa implicitamente con etichette come "Hairpin" e "Verticale", che sono figure di tracciatura e non elementi del terreno.

## Conclusione

La ricerca ribalta l'impostazione dell'archivio. `tracks.json` trattava tutte le piste con lo stesso schema di 10–11 POI generici (muro iniziale, curvone, compressione, salto finale), ma il terreno reale non segue quello schema. Sölden ha un solo muro al centro e un finale piatto. Levi ha il ripido in basso. Cortina ha lo Schuss in alto. Adelboden ha due elementi distinti (Giisbrunni e Zielhang) dove l'archivio ne vedeva uno. Garmisch e Les Houches avevano addirittura POI identici. Per la fase 2 conviene quindi abbandonare il template fisso: le scene vanno costruite dal numero e dal tipo di sezioni realmente documentate, che vanno da 4 (Campiglio, Gurgl) a 18 (Streif). Dove le fonti tacciono, l'etichetta generica va dichiarata come tale.

Il secondo insegnamento riguarda i traguardi. Quasi metà delle piste (14 su 34) finisce in una conca o in un prato senza tribune documentate, non in uno stadio. Gli elementi che rendono riconoscibile un arrivo sono quasi sempre puntuali e verificati: l'arco d'acciaio di Schladming, la galleria sotto il Tunnel Jump, il ponte della Wengernalpbahn, la terrazza di El Camineto, la tribuna di neve della Majstrovská, l'edificio unico di Sölden. Pochi asset specifici per località renderanno le mappe più fedeli di quattro modelli generici più elaborati.
