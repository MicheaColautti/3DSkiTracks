# LiveSportArena · Mappe 3D di sci alpino

Un atlante interattivo di **LiveSportArena** per esplorare 23 piste di Coppa del Mondo attraverso 34 diorami. Dall’Hundschopf di Wengen alle gobbe della Saslong, ogni mappa segue la pista dalla partenza al traguardo e permette di selezionare i passaggi lungo il percorso.

## Esplorare le piste

Apri `index.html` nel browser e scegli una pista. Puoi filtrare per discesa libera (DH), super-G (SG), slalom gigante (GS) o slalom speciale (SL). Le pagine funzionano anche offline.

- Trascina per ruotare il diorama e usa la rotella o il gesto a pizzico per regolare lo zoom.
- Seleziona un punto sulla pista per leggerne la scheda. Usa le frecce sinistra e destra per passare da una sezione all’altra.
- Passa alla vista dall’alto per seguire le curve o apri il profilo per osservare i cambi di pendenza.

Le geometrie sono illustrative e si basano su sei archetipi di terreno. Per i criteri di ricostruzione e la provenienza dei dati, consulta [Limiti e fonti](LIMITI_E_FONTI.md).

## Pubblicare su GitHub Pages

1. Crea un repository dedicato e carica il **contenuto** della cartella del progetto sul ramo `main`. Il file `index.html`, la cartella `maps/` e il file nascosto `.nojekyll` devono trovarsi alla radice.
2. Nel repository apri **Settings → Pages**. In **Build and deployment**, scegli **Deploy from a branch**.
3. Seleziona **main** e **/(root)**, quindi premi **Save**.
4. Al termine della pubblicazione, apri il sito dal collegamento mostrato in **Settings → Pages**.

GitHub Pages serve direttamente le pagine HTML già presenti nel repository. [Guida di GitHub Pages](https://docs.github.com/en/pages/getting-started-with-github-pages/configuring-a-publishing-source-for-your-github-pages-site)

## Aggiornare una mappa

Le schede delle piste e dei loro passaggi si trovano in `data/research/`. Il file `data/course-configs.json` associa ogni variante al suo archetipo e agli elementi del percorso. La cartella `src/` contiene il motore grafico, i comandi e il modello HTML condiviso.

Dopo aver modificato dati o sorgenti, rigenera le pagine dalla radice del progetto con Python 3.8 o successivo:

```sh
python3 build.py
```

Lo script usa la libreria standard di Python e aggiorna `index.html` e le 34 pagine in `maps/`. Per pubblicare le modifiche, includi anche queste pagine nel commit su `main`.
