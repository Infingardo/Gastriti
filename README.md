# 🔬 Tool OLGA/OLGIM per Refertazione Gastrite Cronica

**Versione 5.5** | SC Anatomia Patologica, ASST Fatebenefratelli-Sacco, Milano

---

## 📋 Descrizione

Tool web interattivo per la refertazione istologica strutturata della gastrite cronica secondo il Sydney System modificato, con staging del rischio OLGA/OLGIM e linee guida MAPS III (ESGE/ESP 2025).

Genera referti completi (brevi o estesi) per uso clinico quotidiano, con validazioni automatiche, alert clinici e gestione delle forme speciali di gastrite.

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
- **Quick fill**: precompilazione casi comuni (tutto negativo, H. pylori+)
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

## 📊 Changelog Versioni

### v5.5 (24 gennaio 2026)
**🆕 MAJOR UPDATE: PWA + Metaplasia per Sede**
- ✅ **PWA Support**: installabile come app su Android/iOS
  - Manifest.json completo
  - Service worker per cache offline
  - Prompt installazione con dismiss temporaneo
  - Meta tag iOS ottimizzati
- ✅ **Metaplasia intestinale per sede**: campo tipo MI specifico (antro, incisura, corpo)
  - Show/hide condizionale per ogni sede
  - Output intelligente pattern misto: "MI mista (antro: completa, corpo: incompleta)"
  - Migliore aderenza al workflow diagnostico reale
- ✅ **FIX CRITICO: Attività neutrofila nel referto breve**
  - Titolo con attività: "GASTRITE CRONICA (attiva)" vs "(quiescente)"
  - Riga dedicata attività nel referto esteso
- ✅ **LocalStorage migration**: compatibilità dati vecchia versione

### v5.1 FINAL (22 gennaio 2026)
**Rifiniture finali (code quality & medico-legale):**
- ✅ Centralizzazione stringhe cliniche
- ✅ Sezione "Cosa NON fa il tool": disclaimer espandibile
- ✅ Linguaggio uniforme forme speciali
- ✅ Code cleanup eliminazione duplicazioni

### v5.0 FINAL (22 gennaio 2026)
**Fix medico-legali critici:**
- ✅ Metodo composito blindato con disclaimer
- ✅ HGD prevale su staging: nota automatica
- ✅ Linguaggio forme speciali attenuato
- ✅ Alert stacking: max 3 alert con priorità

### v4.3 (21 gennaio 2026)
- Reset spostato in alto con stile rosso visibile
- Improved UX per cancellazione dati

### v4.2 (21 gennaio 2026)
- Referti specifici per forme speciali senza infiltrato cronico
- Output personalizzati per gastropatia, autoimmune, linfocitaria, eosinofila

### v3.9 (21 gennaio 2026)
- **FIX CRITICO**: Correzione matrice OLGA (Rugge 2007)

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
1. **Compilare campi Sydney** per antro, incisura, corpo
2. **Se metaplasia >0**: specificare tipo MI (completa/incompleta) per ogni sede
3. *Opzionale*: Usare **Quick Fill** per casi comuni
4. *Opzionale*: Compilare **forme speciali** se pattern suggestivo
5. *Opzionale*: Aggiungere **note libere**
6. Cliccare **"Calcola referto"**
7. Verificare **alert** e **badge** rischio
8. **Copiare referto** o **stampare PDF**

### Shortcuts Tastiera
- **Quick fill "Tutto negativo"**: setta tutti i campi a 0
- **Quick fill "H. pylori+"**: precompila pattern base antro-predominante
- **Reset completo**: cancella tutto e localStorage

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

## 📜 Licenza

**Uso interno ASST Fatebenefratelli-Sacco**

Il tool è sviluppato per uso clinico interno. La redistribuzione o uso commerciale richiede autorizzazione esplicita dell'autore.

Citazione consigliata in pubblicazioni:
> Bianchi F. Tool OLGA/OLGIM per refertazione gastrite cronica v5.5. SC Anatomia Patologica, ASST Fatebenefratelli-Sacco, Milano. 2026.

---

## 🏆 Stato del Progetto

✅ **Pronto per uso clinico**  
✅ Validato medico-legalmente  
✅ Conforme MAPS III (2025)  
✅ Audit-ready (versioning, disclaimer, tracciabilità)  
✅ **Installabile come PWA su mobile**

**Ultima revisione**: 24 gennaio 2026 - v5.5  
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
