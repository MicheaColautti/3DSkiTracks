# Limiti e fonti

## Da dove vengono i dati (fase 1 → fase 2)
- **Sezioni (POI)**: da `data/research/<id>.json`, raccolte su fonti ufficiali degli organizzatori, FIS e stampa (34 schede, ognuna con URL e affidabilità per dato), più le correzioni approvate in revisione (`data/research-overrides.json`, 7/11/2026). Il riepilogo completo è `data/research/Dati piste Coppa del Mondo.md`.
- **Dati tecnici in scheda** (lunghezza, dislivello, quote, pendenza massima): mostrati **solo se di fonte ufficiale o FIS**. Altrimenti la scheda dice che non sono disponibili.
- **Ogni sezione nella scheda dettaglio** riporta l'affidabilità del nome (fonte ufficiale / FIS / stampa / incerta).
- `data/tracks.json` (archivio originale) resta la base per anagrafica (località, nazione, genere); POI, metriche e fonti dell'archivio **non sono più usati** perché la ricerca li ha trovati in gran parte generici o errati.

## Cosa resta illustrativo
- **Geometria**: diorama didattico, non GPS. Le **posizioni lungo la pista sono stime** (quasi nessuna fonte pubblica progressive per sezione); il terreno traduce ogni sezione nel suo tipo (salto → dosso con stacco, muro → pendenza maggiore, compressione, curva con direzione documentata, scorrimento, gola…), con intensità esagerate per leggibilità.
- **Piste senza nomi documentati** (Planai SL/GS, Flachau, Erta, Gurgl, Sun Valley SL, parti di altre): le etichette sono descrittive e dichiarate come tali; **nessun nome inventato**.
- **Traguardi**: 4 modelli (stadio con tribune, arrivo in paese, prato/conca, stadio su ghiacciaio) assegnati in base alla ricerca; numero di tribune, tetti, maxischermi ed edifici sono stilizzati. Le capienze non sono rappresentate (pubblicate solo per Sölden e Jasná).
- **Elementi specifici modellati perché documentati**: Hundschopf (una roccia per lato) e ponte ferroviario della Wasserstation (Wengen); Salto della Rocca con Rifugio La Rocca e galleria sotto la Fontana Lunga (Stelvio); tre Gobbe del Cammello con tribuna e galleria stradale sotto il Tunnel Jump (Saslong); gola rocciosa del Tofana Schuss ed El Camineto (Cortina); arco d'acciaio e Nightrace (Planai); stadio unico, Gletscherstraße e cabinovia (Sölden); valle della Kreuzeckbahn (Garmisch). Gli edifici sono generici, non riproduzioni.
- Laghetti a Levi e Crans-Montana: puramente ornamentali.

## Piste, modelli e copertura

| Pista | Spec. | Archetipo | Traguardo | Sezioni | di cui generiche | Fonti |
|---|---|---|---|---|---|---|
| Adelboden / Chuenisbärgli | GS | `giant_slalom` | stadium | 8 | — | 5 |
| Alta Badia / Gran Risa | GS | `giant_slalom` | village | 7 | — | 2 |
| Beaver Creek / Birds of Prey | DH | `curvy_speed` | stadium | 17 | — | 8 |
| Beaver Creek / Birds of Prey | GS | `giant_slalom` | stadium | 8 | — | 8 |
| Beaver Creek / Birds of Prey | SG | `curvy_speed` | stadium | 16 | — | 8 |
| Bormio / Stelvio | DH | `extreme_steep` | village | 17 | — | 10 |
| Cortina d'Ampezzo / Olympia delle Tofane | DH | `long_speed` | meadow | 12 | — | 10 |
| Cortina d'Ampezzo / Olympia delle Tofane | SG | `curvy_speed` | meadow | 10 | — | 10 |
| Crans-Montana / Mont Lachaux | DH | `long_speed` | meadow | 9 | — | 8 |
| Crans-Montana / Mont Lachaux | SG | `curvy_speed` | meadow | 9 | — | 7 |
| Flachau / Hermann Maier Weltcupstrecke | SL | `stadium_finish` | village | 5 | 3 | 9 |
| Garmisch-Partenkirchen / Kandahar | DH | `extreme_steep` | meadow | 17 | — | 6 |
| Gurgl / Kirchenkar | SL | `narrow_slalom` | meadow | 4 | 4 | 6 |
| Jasná / Luková – Koliesko | GS | `giant_slalom` | stadium | 9 | 2 | 11 |
| Killington / Superstar | GS | `stadium_finish` | stadium | 7 | — | 4 |
| Killington / Superstar | SL | `stadium_finish` | stadium | 5 | — | 4 |
| Kitzbühel / Streif | DH | `extreme_steep` | stadium | 18 | — | 5 |
| Kranjska Gora / Podkoren | GS | `giant_slalom` | stadium | 7 | 3 | 9 |
| Kranjska Gora / Podkoren | SL | `narrow_slalom` | stadium | 4 | 1 | 9 |
| Kronplatz / Erta | GS | `giant_slalom` | meadow | 4 | 2 | 3 |
| Les Houches / La Verte des Houches | DH | `curvy_speed` | meadow | 14 | — | 4 |
| Levi / Levi Black | SL | `narrow_slalom` | meadow | 7 | 2 | 10 |
| Madonna di Campiglio / Canalone Miramonti | SL | `stadium_finish` | stadium | 4 | 2 | 4 |
| Schladming / Planai | GS | `stadium_finish` | stadium | 5 | 2 | 6 |
| Schladming / Planai | SL | `stadium_finish` | stadium | 4 | 1 | 5 |
| Sölden / Rettenbach | GS | `giant_slalom` | glacier | 6 | — | 8 |
| Sun Valley / Bald Mountain – Greyhawk | DH | `long_speed` | meadow | 13 | — | 5 |
| Sun Valley / Bald Mountain – Greyhawk | GS | `giant_slalom` | meadow | 7 | — | 5 |
| Sun Valley / Bald Mountain – Greyhawk | SG | `curvy_speed` | meadow | 11 | — | 5 |
| Sun Valley / Bald Mountain – Greyhawk | SL | `narrow_slalom` | meadow | 3 | — | 5 |
| Val d'Isère / Face de Bellevarde | GS | `giant_slalom` | stadium | 7 | — | 6 |
| Val d'Isère / Face de Bellevarde | SL | `narrow_slalom` | stadium | 5 | — | 6 |
| Val Gardena / Saslong | DH | `long_speed` | village | 13 | — | 5 |
| Wengen / Lauberhorn | DH | `long_speed` | meadow | 17 | — | 6 |

## Verifiche fatte
Tutte le 34 pagine aperte da `file://` in Chrome (headless, Linux) senza errori JavaScript; controllo visivo degli screenshot di: vista d'insieme per archetipo, traguardi dei 4 modelli (Streif, Stelvio, Lauberhorn, Sölden, Planai in notturna), Salto della Rocca, Gobbe del Cammello, Tunnel Jump.

**Non verificato** (manca un Mac): interazione reale con mouse/trackpad/touch in Safari e Chrome, fluidità su Mac, iPhone/iPad.

## Aggiornamento 8 novembre 2026: 34 nuove schede (38 gare)
- Fonte: `docs/LiveSportArena_Ricerca_Piste_3D_2026-27.md`. Nuove località: Kvitfjell, St. Moritz, Lenzerheide, Saalbach, Dachstein West, Val di Fassa, Chamonix (slalom), Courchevel, Soldeu, Åre, Copper Mountain, Tremblant; nuove varianti a Adelboden, Alta Badia, Bormio, Flachau, Garmisch (Kandahar 2 SG e Kandahar 1 femminile), Jasná, Kitzbühel (Streifalm, Ganslern), Val Gardena, Wengen.
- **Ogni variante è una scheda propria** (sede + genere + specialità): partenze, misure e passaggi della pista madre non vengono copiati su varianti diverse (es. la Streif non viene riusata per Streifalm/Ganslern, il Freier Fall non viene attribuito alla Kandahar 1 femminile).
- **Dati tecnici in scheda** solo se dell'organizzatore o FIS per la gara attuale; valori storici (FIS 2022 Lenzerheide, Mondiali 2025 Saalbach, FIS 2024 Jasná) restano nei file di ricerca con affidabilità "historic" e non vengono mostrati.
- **Posizioni lungo la pista**: a Kvitfjell (discesa maschile) ricavate dalle quote ufficiali dei settori; altrove stimate dall'ordine delle sezioni, perché non esistono progressive pubblicate. Sezioni la cui appartenenza alla variante non è provata sono marcate "incerte" nei file di ricerca.
- **Bandiere aggiunte**: Norvegia, Svezia, Andorra, Canada.
