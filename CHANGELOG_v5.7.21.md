# CHANGELOG v5.7.21

## Versione 5.7.21 (09 Feb 2026)

### 🎨 MIGLIORAMENTI FORMATTAZIONE REFERTO

#### Intestazioni diagnostiche
- **Modificato**: Tutte le intestazioni ora usano solo la prima lettera maiuscola
  - `GASTRITE CRONICA HP-ASSOCIATA` → `Gastrite cronica HP-associata`
  - `GASTROPATIA REATTIVA` → `Gastropatia reattiva`
  - `GASTRITE LINFOCITICA` → `Gastrite linfocitica`
  - Etc.

#### Staging OLGA/OLGIM
- **Migliorato**: Gli acronimi OLGA e OLGIM ora appaiono in **grassetto** nel referto
  - `OLGA: stadio II` → `**OLGA**: stadio II`
  - `OLGIM: stadio I` → `**OLGIM**: stadio I`

#### Grading nel referto
- **Aggiunto**: Grading dell'atrofia ora incluso nella descrizione
  - Prima: `ATROFIA GHIANDOLARE: Presente (antro, corpo)`
  - Dopo: `ATROFIA GHIANDOLARE: Presente, moderata (antro, corpo)`
  - Pattern misti: `Presente, pattern misto (antro: lieve, corpo: moderata)`

- **Aggiunto**: Grading della metaplasia intestinale ora incluso con il tipo
  - Prima: `METAPLASIA INTESTINALE: Presente, completa (antro)`
  - Dopo: `METAPLASIA INTESTINALE: Presente, moderata e completa (antro)`

#### Emoji rimosse dal referto
- **Rimosso**: Tutte le emoji dal testo copiabile (problemi encoding LIS)
  - `⚠️ NOTA INTERPRETATIVA:` → `NOTA INTERPRETATIVA:`
  - `🔴 ATTENZIONE:` → `ATTENZIONE:`
  - `⚡ URGENZA:` → `URGENZA:`
  - `📋 NOTA:` → `NOTA:`
  - Note: Le emoji rimangono nell'interfaccia utente (bottoni, labels)

### 🔬 AUTO-FILL PATTERN TOPOGRAFICI

#### Gastrite autoimmune
- **Nuovo**: Selezione automatica del pattern topografico tipico
  - Corpo: atrofia grado 2 (moderata) - modificabile
  - Antro: atrofia 0 (bloccato)
  - Incisura: atrofia 0 (bloccato)
  - Rationale: Pattern tipo A con risparmio antrale

#### Gastropatia reattiva
- **Nuovo**: Blocco automatico dell'atrofia
  - Tutti i campi atrofia impostati a 0 e bloccati
  - Rationale: Per definizione la gastropatia chimica NON ha atrofia

### 🔧 DETTAGLI TECNICI
- Versione cache service-worker: `gastriti-v5.7.21`
- Modifiche funzioni: `getAtrophyText()`, `getMITypeText()`
- Nuovo listener: `gastrite_speciale` per auto-fill pattern

---

## COME AGGIORNARE

Per aggiornare alla v5.7.21:

1. Applica le modifiche JavaScript da `PATCH_v5.7.21_JavaScript.js`
2. Aggiorna `service-worker.js` con `PATCH_v5.7.21_ServiceWorker.js`
3. Committa: `git commit -am "v5.7.21: Formattazione referto + auto-fill pattern topografici"`
4. Pusha: `git push origin main`
5. Attendi 3-5 minuti per rebuild GitHub Pages

---

## INSERISCI QUESTO BLOCCO ALL'INIZIO DEL README.md (dopo titolo e descrizione)
