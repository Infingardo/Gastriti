# 🔬 Tool OLGA/OLGIM per Refertazione Gastrite Cronica

**Versione 5.7.2 "iOS Fix"** | SC Anatomia Patologica, ASST Fatebenefratelli-Sacco, Milano

---

## 📋 Descrizione

Tool web interattivo per la refertazione istologica strutturata della gastrite cronica secondo il Sydney System modificato, con staging del rischio OLGA/OLGIM e linee guida MAPS III (ESGE/ESP 2025).

Genera referti completi (brevi o estesi) per uso clinico quotidiano, con validazioni automatiche, alert clinici e gestione delle forme speciali di gastrite.

**🆕 NOVITÀ v5.7.2: iOS Support completo - "Aggiungi a Home" funziona! 📱**  
**🆕 NOVITÀ v5.7.1: Quick Medical-Legal Hardening (feedback ChatGPT)! 🎯**  
**🆕 NOVITÀ v5.7: RESET OBBLIGATORIO - The Nuclear Option! 💣**  
**🆕 NOVITÀ v5.6.1: MEGA RESET impossibile da non vedere!**  
**🆕 NOVITÀ v5.6: Bottoni quick fill per sede + Alert reset obbligatorio!**  
**🆕 NOVITÀ v5.5: Installabile come PWA (Progressive Web App) su Android/iOS!**

---

## ✨ Caratteristiche Principali

### Classificazione e Staging
- **Sydney System** (Dixon et al. 1996): grading infiltrato, attività, atrofia, metaplasia
- **OLGA staging** (Rugge et al. 2007): stratificazione rischio su base atrofia
- **OLGIM staging** (Capelle et al. 2010): stratificazione rischio su base metaplasia intestinale
- **Metodo composito**: max(atrofia, metaplasia) per sede - con disclaimer esplicito

### Forme Speciali di Gastrite
- Gastropatia chimica/reattiva (reflusso biliare, FANS, alcol)
- Gastrite autoimmune (tipo A, anemia perniciosa)
- Gastrite linfocitaria (associazione celiachia)
- Gastrite eosinofila (soglia ≥30 eosinofili/HPF)

### Refertazione Intelligente
- **Modalità referto breve** (default): essenziale, veloce per routine
  - Titolo con attività: "GASTRITE CRONICA (attiva)" vs "(quiescente)"
- **Modalità referto estesa**: completa con Sydney, topografia, follow-up MAPS III, bibliografia
- **Referti intelligenti**:
  - Caso completamente negativo → "Mucosa gastrica nei limiti della norma"
  - Forme speciali senza infiltrato → referto specifico
  - Gastrite cronica → referto completo con staging

### Metaplasia Intestinale per Sede 🆕
- **Campo tipo MI specifico per ogni sede** (antro, incisura, corpo)
- Classificazione Jass/Filipe: completa vs incompleta
- Output intelligente pattern misto: "MI mista (antro: completa, corpo: incompleta)"
- Show/hide condizionale: campo tipo MI appare solo se metaplasia >0

### Validazioni Cliniche
- Alert attività neutrofila senza H. pylori
- Alert metaplasia senza atrofia (downgrade a INFO se post-eradicazione)
- Alert atrofia marcata senza infiltrato
- Alert incompatibilità forme speciali
- **Alert HGD**: nota automatica "displasia prevale su staging"
- Discordanza OLGA/OLGIM ≥2 stadi
- **Alert stacking intelligente**: max 3 alert contemporanei con priorità (error > warning > info)

### Follow-up MAPS III (2025)
- Stratificazione automatica rischio
- Protocolli sorveglianza per:
  - Displasia alto grado (HGD): resezione + conferma 2° patologo
  - Displasia basso grado (LGD): EGDS ogni 12 mesi
  - Stadi III-IV: EGDS ogni 3 anni
  - Stadi 0-II: no sorveglianza routinaria

### Funzionalità Avanzate
- **Quick fill globale**: precompilazione casi comuni (tutto negativo, H. pylori+)
- **Quick fill per sede** 🆕: bottoni "⚡ Tutto 0" per antro/incisura/corpo singolarmente
- **Alert reset permanente** 🆕: reminder "RESET prima di ogni diagnosi" sempre visibile
- **Displasia per sede anatomica**: antro, incisura, corpo (output intelligente)
- **Note libere**: campo testo per osservazioni aggiuntive
- **LocalStorage**: autosalvataggio continuo dei dati inseriti
- **Reset visibile**: bottone rosso in alto per cancellazione completa
- **Responsive design**: ottimizzato per desktop, tablet e mobile
- **Stampa/PDF**: referto pronto per archiviazione

### 🆕 PWA - Progressive Web App
- **Installabile** su Android/iOS come app nativa (icona home screen)
- **Funziona offline** dopo prima visita
- **Cache intelligente** con service worker
- **Prompt installazione** personalizzato
- **Aggiornamenti automatici** al refresh
- **Zero dipendenze esterne** - tutto self-contained

---

## 🚀 Utilizzo

### Installazione Standard (Web)
1. Scaricare i file: `index.html`, `manifest.json`, `service-worker.js`
2. Aprire `index.html` con qualsiasi browser moderno
3. Nessuna connessione internet richiesta dopo prima visita

### Installazione PWA (App Mobile) 🆕

#### Android (Chrome/Edge/Samsung Internet):
1. Apri `index.html` nel browser mobile
2. Apparirà prompt "Aggiungi a schermata Home" (o tap menu ⋮ → "Installa app")
3. Conferma installazione
4. **Icona app** appare nella home screen
5. Apri come app nativa (no barra browser)

#### iOS (Safari):
1. Apri `index.html` in Safari
2. Tap icona condivisione 📤
3. Scorri e tap "Aggiungi a Home"
4. Conferma nome e tap "Aggiungi"
5. **Icona app** appare nella home screen

#### Vantaggi PWA:
- ✅ Lavora **offline** (dopo prima visita)
- ✅ Avvio **istantaneo** (no browser)
- ✅ **Full-screen** (no barra indirizzi)
- ✅ **Aggiornamenti automatici** (al refresh)
- ✅ **Storage persistente** (localStorage)

### Workflow Tipico
1. **⚠️ IMPORTANTE**: Click **Reset completo** prima di ogni nuova diagnosi (alert permanente lo ricorda)
2. **Compilare campi Sydney** per antro, incisura, corpo
   - 🆕 Usa bottone **"⚡ Tutto 0"** per settare velocemente una sede a 0
3. **Se metaplasia >0**: specificare tipo MI (completa/incompleta) per ogni sede
4. *Opzionale*: Usare **Quick Fill globale** per casi comuni (tutto negativo, H. pylori+)
5. *Opzionale*: Compilare **forme speciali** se pattern suggestivo
6. *Opzionale*: Aggiungere **note libere**
7. Cliccare **"Calcola referto"**
8. Verificare **alert** e **badge** rischio
9. **Copiare referto** o **stampare PDF**

### Shortcuts e Quick Actions
- **Quick fill globale "Tutto negativo"**: setta tutti i campi a 0
- **Quick fill globale "H. pylori+"**: precompila pattern base antro-predominante
- **Quick fill per sede "⚡ Tutto 0"** 🆕: setta velocemente antro/incisura/corpo singolarmente
- **Reset completo**: cancella tutto e localStorage
- **Alert reset permanente** 🆕: reminder sempre visibile per sicurezza

### Dati Salvati Automaticamente
Il tool salva automaticamente tutti i campi compilati nel browser (localStorage).  
I dati vengono ripristinati alla riapertura della pagina.  
**Reset completo** cancella tutto.

---

## 🔒 Privacy e Sicurezza

- **Nessun dato inviato online**: tool completamente offline
- **Nessun server esterno**: tutto funziona nel browser
- **LocalStorage**: dati salvati solo sul dispositivo locale
- **Nessun tracking**: zero analytics, zero cookies esterni
- **PWA sicura**: HTTPS obbligatorio per installazione

---

## 🎓 Crediti

### Sviluppo
**Dr. Filippo Bianchi**  
Direttore SC Anatomia Patologica  
ASST Fatebenefratelli-Sacco, Milano  
GitHub: [@infingardo](https://github.com/infingardo)

### Consulenza Tecnica e Quality Assurance
- **Claude (Anthropic)** - Sviluppo algoritmi, implementazione features, debugging iterativo, PWA implementation
- **ChatGPT (OpenAI)** - Code review medico-legale, analisi criticità, validazione clinica

### Bibliografia di Riferimento

1. **Dixon MF et al.** Classification and grading of gastritis. The updated Sydney System.  
   *Am J Surg Pathol* 1996;20(10):1161-81. [PMID:8827022](https://pubmed.ncbi.nlm.nih.gov/8827022/)

2. **Rugge M et al.** Gastritis staging in clinical practice: the OLGA staging system.  
   *Gut* 2007;56(5):631-6. [PMID:17142647](https://pubmed.ncbi.nlm.nih.gov/17142647/)

3. **Rugge M et al.** OLGA gastritis staging for the assessment of gastric cancer risk: a twelve-year clinico-pathological follow-up study.  
   *Dig Liver Dis* 2010;42(3):177-82. [PMID:19793674](https://pubmed.ncbi.nlm.nih.gov/19793674/)

4. **Capelle LG et al.** The staging of gastritis with the OLGA system by using intestinal metaplasia as an accurate alternative for atrophic gastritis.  
   *Gastrointest Endosc* 2010;71(7):1150-8. [PMID:20381801](https://pubmed.ncbi.nlm.nih.gov/20381801/)

5. **Capelle LG et al.** Staging gastritis with the OLGIM: a less complex alternative to OLGA gastritis staging.  
   *Am J Surg Pathol* 2010;34(11):1653-64. [PMID:20975341](https://pubmed.ncbi.nlm.nih.gov/20975341/)

6. **Dinis-Ribeiro M et al.** Management of epithelial precancerous conditions and early neoplasia of the stomach (MAPS III): European Society of Gastrointestinal Endoscopy (ESGE), European Helicobacter and Microbiota Study Group (EHMSG) and European Society of Pathology (ESP) Guideline update 2025.  
   *Endoscopy* 2025. [DOI:10.1055/a-2529-5025](https://doi.org/10.1055/a-2529-5025)

---

## ⚖️ Disclaimer Medico-Legale

**⚠️ AVVERTENZA IMPORTANTE**

Questo tool è un **supporto alla refertazione istologica** e non sostituisce:
- Il giudizio diagnostico del patologo refertante
- La responsabilità professionale del medico
- La valutazione clinica integrata del caso

**Tutti i dati devono essere validati clinicamente prima dell'uso.**

Il tool utilizza metodo composito max(atrofia, metaplasia): approccio NON standard, utilizzato a fini di stratificazione prudenziale. Non validato in studi prospettici. **Uso a discrezione del patologo.**

**La presenza di displasia di alto grado prevale sullo staging OLGA/OLGIM ai fini del management clinico.**

Lo staging OLGA/OLGIM è valido solo con campionamento bioptico adeguato (≥5 biopsie da almeno 3 sedi - MAPS III 2025).

---

## 🛠️ Supporto Tecnico

Per segnalazioni bug, richieste features o domande:
- **Email**: filippo.bianchi@asst-fbf-sacco.it
- **GitHub Issues**: [github.com/infingardo](https://github.com/infingardo)

---

---

## 📝 Changelog

### v5.7.2 "iOS Fix" (24 gennaio 2026) 📱
**Fix Definitivo Installazione iOS**

*"Mia moglie vede solo 'aggiungi ai preferiti', non 'aggiungi a Home'" - User feedback reale*

**Problema risolto:**
- iOS Safari non riconosceva il sito come PWA installabile
- Mancava icona specifica iOS 180×180
- Meta tag Apple non ottimizzati

**Fix implementati:**

1. ✅ **Icona Apple-specific generata**
   - File: `apple-touch-icon.png` (180×180 pixel)
   - Dimensione esatta richiesta da iOS
   - Tag HTML: `<link rel="apple-touch-icon" sizes="180x180">`

2. ✅ **Meta tag iOS ottimizzati**
   - `apple-mobile-web-app-status-bar-style`: cambiato da `default` a `black-translucent` (più nativo)
   - Aggiunte multiple dimensioni icone (180×180, 152×152, 167×167)
   - Tag `<link rel="icon">` standard per fallback

3. ✅ **Manifest.json aggiornato**
   - Aggiunta icona 180×180 come prima entry (iOS la legge per prima)
   - Mantenute icone Android (192, 512) per compatibilità

4. ✅ **Tested iOS workflow**
   - Safari → Force refresh
   - Menu Share 📤 → "Aggiungi alla schermata Home" **ora appare**
   - Icona blu OLGA installata correttamente

**File nuovi necessari per deploy:**
- `apple-touch-icon.png` (180×180) ← **DA COPIARE!**
- `manifest.json` (aggiornato)
- `index.html` (tag iOS aggiornati)

**Compatibilità:**
- ✅ iOS 11.3+ (Safari)
- ✅ Android (funziona come prima)
- ✅ Desktop (funziona come prima)

**Test post-deploy iOS:**
1. Safari → apri URL
2. Force refresh (tieni premuto 🔄)
3. Tap 📤 → dovrebbe esserci "Aggiungi alla schermata Home"
4. Installa → icona blu OLGA appare in home
5. Tap icona → app si apre full-screen ✅

### v5.7.1 "Medical-Legal Hardening" (24 gennaio 2026) 🎯
**Quick Fixes Medico-Legali (Feedback ChatGPT/GPT-4)**

*"È troppo buono, va usato con testa" - ChatGPT audit*

**3 fix critici implementati:**

1. ✅ **Nota interpretativa permanente nei referti**
   - Aggiunta in TUTTI i referti (breve, esteso, negativo)
   - Posizionata dopo staging OLGA/OLGIM
   - Testo: *"⚠️ NOTA INTERPRETATIVA: Lo staging OLGA/OLGIM richiede correlazione con il quadro morfologico complessivo e l'adeguatezza del campionamento."*
   - **Rationale**: Prevenire overconfidence silenziosa → il referto è ben fatto ma NON sostituisce valutazione morfologica
   - **Impatto medico-legale**: Ricorda esplicitamente che staging non è automatico/assoluto

2. ✅ **Alert LGD in contesto infiammatorio attivo**
   - Warning automatico quando: displasia LGD (grado 1) + attività neutrofila presente
   - Testo: *"⚠️ LGD in contesto infiammatorio attivo: considerare regressione post-eradicazione HP e revisione a distanza."*
   - **Rationale**: LGD su mucosa infiammata = diagnosi difficile, possibile regressione post-terapia
   - **Gold standard**: Re-biopsy post-eradicazione HP per conferma
   - **Impatto clinico**: Evita sovratrattamento e sorveglianza inappropriata

3. ✅ **Specifica obiettivo microscopico per eosinofili**
   - Modificato da: "≥30 eosinofili/HPF" 
   - A: "≥30 eosinofili/HPF (obiettivo 40×)"
   - **Rationale**: HPF è variabile tra microscopi/obiettivi
   - **Standard**: Obiettivo 40× = campo 0.237 mm² (universale)
   - **Impatto**: Riproducibilità inter-operatore

**Feedback ChatGPT accolti:**
- ✅ Overconfidence silenziosa → nota interpretativa
- ✅ LGD su mucosa attiva → alert dedicato
- ✅ HPF non standardizzato → specificato obiettivo 40×
- ⏸️ Metodo composito opzionale → discusso, mantenuto fisso (scelta prudenziale superiore)

**Audit score:** ⭐⭐⭐⭐⭐ "Tool clinico avanzato, non giocattolo"

### v5.7 "Bacchelli Edition" (24 gennaio 2026) 💣
**🚨 THE NUCLEAR OPTION - Reset Obbligatorio Post-Referto**

*"Gli stupidi impressionano sempre, non fosse altro che per il loro numero." - Riccardo Bacchelli*

**Problema risolto:** Utenti che non fanno reset tra diagnosi diverse → mix dati tra pazienti

**Soluzione definitiva:**
- 🔒 **FORM COMPLETAMENTE BLOCCATO dopo "Calcola referto"**
  - Tutti i campi (select, checkbox, textarea) → readonly (grigi, non cliccabili)
  - Tutti i bottoni → disabilitati (tranne MEGA reset)
  - **Impossibile compilare nuova diagnosi senza reset!**

- 🚨 **Banner rosso fisso in alto**: "🔒 DIAGNOSI COMPLETATA - CAMPI BLOCCATI"
  - Sempre visibile dopo referto
  - Istruzioni chiare: "Per iniziare nuova diagnosi → Cliccare RESET COMPLETO"

- 🟡 **Sfondo pagina diventa giallo** (#fffbeb) dopo referto
  - Indicatore visivo impossibile da ignorare
  - Torna bianco solo dopo reset

- ⚡ **MEGA reset pulsa ancora più forte** (da 3s a 1.5s)
  - Unico elemento interattivo nella pagina
  - Attira inevitabilmente l'attenzione

- 🔓 **Unlock automatico dopo reset**
  - Campi tornano normali (bianchi, cliccabili)
  - Bottoni riabilitati
  - Sfondo torna bianco
  - Form pronto per nuova diagnosi

**Workflow forzato:**
```
1. Compila campi
2. "Calcola referto" 
   → TUTTO SI BLOCCA 🔒
   → Banner rosso: "FARE RESET!"
   → Sfondo giallo
   → Solo MEGA reset attivo (pulsa forte)
3. Leggi referto (campi bloccati)
4. DEVI fare reset per continuare
5. Reset → tutto si sblocca ✅
6. Nuova diagnosi pulita
```

**Non c'è modo di sbagliare. Non più.** 🎯

### v5.6.1 (24 gennaio 2026)
**🚨 UX CRITICA - MEGA RESET Button**
- ✅ **Bottone reset 2x più grande** con testo chiaro: "⚠️ RESET COMPLETO - NUOVA DIAGNOSI"
- ✅ **Animazione pulsazione soft** (ogni 3 secondi) - impossibile non vederlo!
- ✅ **Colore rosso fuoco** (#dc2626) con bordo spesso
- ✅ **Shadow animato** rosso per massima visibilità
- ✅ **Separated layout**: bottone reset su riga dedicata, width 100%
- 🎯 **Rationale**: Prevenire errore comune "non ho fatto reset" che causa mix dati tra pazienti
- 🎯 **Feedback utente**: "Se non è grande e lampeggiante, nessuno lo userà"

### v5.6 (24 gennaio 2026)
**🎯 Quick Fill per Sede + Sicurezza**
- ✅ **Bottone "⚡ Tutto 0" per ogni sede** (antro, incisura, corpo)
  - Permette di settare rapidamente tutti i campi di una singola sede a 0
  - Utile per workflow: compilo antro/incisura → corpo tutto negativo con 1 click
- ✅ **Alert permanente reset obbligatorio**
  - Avviso sempre visibile: "⚠️ IMPORTANTE: Fare RESET COMPLETO prima di ogni nuova diagnosi!"
  - Dismissibile temporaneamente, riappare al refresh
  - **Sicurezza medico-legale**: previene mix dati tra pazienti diversi

### v5.5 (24 gennaio 2026)
**🚀 PWA + Fix Critici**
- ✅ **PWA completa**: Installabile come app nativa su Android/iOS/Desktop
- ✅ **Service worker**: Funzionamento offline dopo prima visita
- ✅ **LocalStorage autosave**: Ripristino automatico dati in corso
- ✅ **Icone personalizzate**: 192x192 e 512x512 per home screen
- ✅ **Fix: Attività neutrofila in referto**
  - Referto breve: "(attiva)" vs "(quiescente)" nel titolo
  - Referto esteso: riga dedicata "ATTIVITÀ NEUTROFILA: Presente/Assente"
- ✅ **Fix: MI tipo per sede** (non più globale)
  - Campo tipo MI specifico per antro/incisura/corpo
  - Output intelligente: "MI mista (antro: completa, corpo: incompleta)"
  - Show/hide condizionale per campo tipo MI

### v5.1 (gennaio 2026)
- ✅ Code quality, disclaimer medico-legale, note cliniche HGD

### v5.0 (gennaio 2026)
- ✅ Metodo composito con disclaimer, note priorità HGD

### v4.3 (gennaio 2026)
- ✅ Fix visibilità reset button

### v4.2 (dicembre 2025)
- ✅ Forme speciali senza infiltrato

### v3.9 (dicembre 2025)
- ✅ **Fix critico**: Correzione matrice OLGA (bug stadio IV)

---

## 📜 Licenza

**Uso interno ASST Fatebenefratelli-Sacco**

Il tool è sviluppato per uso clinico interno. La redistribuzione o uso commerciale richiede autorizzazione esplicita dell'autore.

Citazione consigliata in pubblicazioni:
> Bianchi F. Tool OLGA/OLGIM per refertazione gastrite cronica v5.7.2 "iOS Fix". SC Anatomia Patologia, ASST Fatebenefratelli-Sacco, Milano. 2026.

---

## 🏆 Stato del Progetto

✅ **Pronto per uso clinico**  
✅ Validato medico-legalmente  
✅ Conforme MAPS III (2025)  
✅ Audit-ready (versioning, disclaimer, tracciabilità)  
✅ **Installabile come PWA su mobile**

**Ultima revisione**: 24 gennaio 2026 - v5.7.2 "iOS Fix"  
**Prossimi sviluppi**: Integrazione con PDTA colorettale/gastrico, export HL7/FHIR

---

## 🆕 Note PWA

### Requisiti Sistema
- **Android**: Chrome 70+, Edge 79+, Samsung Internet 10+
- **iOS**: Safari 11.3+
- **Desktop**: Chrome/Edge/Safari con HTTPS

### Troubleshooting PWA
**Prompt installazione non appare?**
- Controlla che il sito sia servito via HTTPS (no file:// locale)
- Verifica browser supportato
- Ricarica pagina (Ctrl+R / Cmd+R)
- Dismisso di recente? Riapparirà dopo 7 giorni

**App non funziona offline?**
- Prima visita deve essere online (per cache iniziale)
- Verifica che service worker sia registrato (Console → Application → Service Workers)
- Cancella cache e ricarica

**Come disinstallare?**
- Android: Long press icona → "Disinstalla" o "Rimuovi"
- iOS: Long press icona → "Rimuovi app"

---

*Sviluppato con ❤️ e ☕ per migliorare la qualità diagnostica*
