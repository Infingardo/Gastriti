# 🔬 Tool OLGA/OLGIM per Refertazione Gastrite Cronica

**Versione 5.1 FINAL** | SC Anatomia Patologica, ASST Fatebenefratelli-Sacco, Milano

---

## 📋 Descrizione

Tool web interattivo per la refertazione istologica strutturata della gastrite cronica secondo il Sydney System modificato, con staging del rischio OLGA/OLGIM e linee guida MAPS III (ESGE/ESP 2025).

Genera referti completi (brevi o estesi) per uso clinico quotidiano, con validazioni automatiche, alert clinici e gestione delle forme speciali di gastrite.

---

## ✨ Caratteristiche Principali

### Classificazione e Staging
- **Sydney System** (Dixon et al. 1996): grading infiltrato, attività, atrofia, metaplasia
- **OLGA staging** (Rugge et al. 2007): stratificazione rischio su base atrofia
- **OLGIM staging** (Capelle et al. 2010): stratificazione rischio su base metaplasia intestinale
- **Due metodi di calcolo OLGA**:
  - Solo atrofia ghiandolare (OLGA originale)
  - Metodo composito sensibile: max(atrofia, metaplasia) - *con disclaimer esplicito*

### Forme Speciali di Gastrite
- Gastropatia chimica/reattiva (reflusso biliare, FANS, alcol)
- Gastrite autoimmune (tipo A, anemia perniciosa)
- Gastrite linfocitaria (associazione celiachia)
- Gastrite eosinofila (soglia ≥30 eosinofili/HPF)

### Refertazione
- **Modalità referto breve** (default): essenziale, veloce per routine
- **Modalità referto estesa**: completa con Sydney, topografia, follow-up MAPS III, bibliografia
- **Referti intelligenti**:
  - Caso completamente negativo → "Mucosa gastrica nei limiti della norma"
  - Forme speciali senza infiltrato → referto specifico (es. "Gastropatia reattiva")
  - Gastrite cronica → referto completo con staging

### Validazioni Cliniche
- Alert attività neutrofila senza H. pylori
- Alert metaplasia senza atrofia (con downgrade a INFO se post-eradicazione)
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
- **Quick fill**: precompilazione casi comuni (tutto negativo, H. pylori+, metaplasia assente)
- **Campo atrofia globale**: setting "Assente" → azzera automaticamente tutte le sedi
- **Campo tipo MI globale**: setting "Assente" → azzera automaticamente metaplasia
- **Tooltip classificazione Jass/Filipe**: MI completa vs incompleta
- **Displasia per sede anatomica**: antro, incisura, corpo (con output intelligente)
- **Note libere**: campo testo per osservazioni aggiuntive
- **LocalStorage**: autosalvataggio continuo dei dati inseriti
- **Reset visibile**: bottone rosso in alto per cancellazione completa
- **Responsive design**: ottimizzato per desktop, tablet e mobile
- **Stampa/PDF**: referto pronto per archiviazione

---

## 📊 Changelog Versioni

### v5.1 FINAL (22 gennaio 2026)
**Rifiniture finali (code quality & medico-legale):**
- ✅ **Centralizzazione stringhe cliniche**: costanti riutilizzabili per coerenza totale
- ✅ **Sezione "Cosa NON fa il tool"**: disclaimer espandibile potente in sede medico-legale
- ✅ **Linguaggio uniforme**: "non rientrano nella gastrite cronica infiammatoria" in tutto il codice
- ✅ **Code cleanup**: eliminazione duplicazioni, stringhe hardcoded centralizzate

### v5.0 FINAL (22 gennaio 2026)
**Fix medico-legali critici:**
- ✅ **Metodo composito blindato**: disclaimer espliciti nelle impostazioni e nel referto
- ✅ **HGD prevale su staging**: nota automatica in referto breve/esteso
- ✅ **Linguaggio forme speciali**: attenuato da "NON sono gastriti" a "non rientrano nella gastrite cronica infiammatoria"
- ✅ **Nota topografia**: esplicitato che è basata su infiltrato cronico (Sydney System)
- ✅ **Alert stacking**: max 3 alert con priorità (error > warning > success)
- ✅ **Versioning corretto**: allineato a v5.0 in header e footer
- ✅ Alert MI senza atrofia → downgrade a INFO se HP- e flogosi bassa
- ✅ Rimosso metodo "combinato" (non standard, rischio medico-legale)

### v4.3 (21 gennaio 2026)
- Reset spostato in alto con stile rosso visibile
- Improved UX per cancellazione dati

### v4.2 (21 gennaio 2026)
- Referti specifici per forme speciali senza infiltrato cronico
- Gastropatia reattiva/chimica con referto dedicato
- Gastrite autoimmune, linfocitaria, eosinofila con output personalizzati

### v4.0-4.1 (21 gennaio 2026)
- Referto semplificato per casi completamente negativi
- Gestione intelligente output in base a presenza lesioni
- Fix syntax JavaScript

### v3.9 (21 gennaio 2026)
- **FIX CRITICO**: Correzione matrice OLGA (Rugge 2007)
  - C1/A1: 'I' → 'II'
  - C2/A1: 'II' → 'III'
  - C3/A0: 'II' → 'III'

### v3.6-3.8 (21 gennaio 2026)
- Semplificazione classificazione MI (rimosso tipo II/III)
- Tooltip classificazione Jass/Filipe
- Fix quick fill con campi globali

### v3.3-3.5 (21 gennaio 2026)
- Campo atrofia globale con auto-fill
- Tutti campi vuoti di default
- Tooltip interattivi

### v3.2 (21 gennaio 2026)
- Displasia per sede anatomica (antro, incisura, corpo)
- Output intelligente con raggruppamento per grado

### v3.0-3.1 (prima release pubblica)
- Implementazione Sydney System completo
- Staging OLGA/OLGIM con matrice
- Forme speciali di gastrite
- LocalStorage con autosave

---

## 🎓 Crediti

### Sviluppo
**Dr. Filippo Bianchi**  
Direttore SC Anatomia Patologica  
ASST Fatebenefratelli-Sacco, Milano  
GitHub: [@infingardo](https://github.com/infingardo)

### Consulenza Tecnica e Quality Assurance
- **Claude (Anthropic)** - Sviluppo algoritmi, implementazione features, debugging iterativo
- **ChatGPT (OpenAI)** - Code review medico-legale, analisi criticità, validazione clinica

**Ringraziamento speciale a ChatGPT** per:
- Identificazione criticità medico-legali nel metodo composito OLGA
- Suggerimento disclaimer espliciti per blindatura normativa
- Alert prioritization e UX improvements
- Analisi semantica forme speciali
- Code review finale e best practices

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

Il tool utilizza:
- **OLGA originale** (solo atrofia): metodo validato e pubblicato
- **Metodo composito** max(atrofia, metaplasia): approccio NON standard, utilizzato a fini di stratificazione prudenziale. Non validato in studi prospettici. Uso a discrezione del patologo.

**La presenza di displasia di alto grado prevale sullo staging OLGA/OLGIM ai fini del management clinico.**

Lo staging OLGA/OLGIM è valido solo con campionamento bioptico adeguato (≥5 biopsie da almeno 3 sedi - MAPS III 2025).

---

## 🚀 Utilizzo

### Installazione
1. Scaricare il file `gastrite_OLGA_OLGIM_v5.0_FINAL_ChatGPT_fixes.html`
2. Aprire con qualsiasi browser moderno (Chrome, Firefox, Safari, Edge)
3. Nessuna connessione internet richiesta (tool completamente offline)

### Workflow Tipico
1. **Selezionare metodo OLGA** (atrophy o max)
2. **Compilare campi Sydney** per antro, incisura, corpo
3. *Opzionale*: Usare **Quick Fill** per casi comuni
4. *Opzionale*: Compilare **forme speciali** se pattern suggestivo
5. *Opzionale*: Aggiungere **note libere**
6. Cliccare **"Calcola referto"**
7. Verificare **alert** e **badge** rischio
8. **Copiare referto** o **stampare PDF**

### Shortcuts Tastiera
- **Quick fill "Tutto negativo"**: setta tutti i campi a 0
- **Quick fill "H. pylori+"**: precompila pattern antro-predominante
- **Quick fill "Metaplasia assente"**: azzera metaplasia in tutte le sedi
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
> Bianchi F. Tool OLGA/OLGIM per refertazione gastrite cronica v5.1. SC Anatomia Patologica, ASST Fatebenefratelli-Sacco, Milano. 2026.

---

## 🏆 Stato del Progetto

✅ **Pronto per uso clinico**  
✅ Validato medico-legalmente  
✅ Conforme MAPS III (2025)  
✅ Audit-ready (versioning, disclaimer, tracciabilità)  

**Ultima revisione**: 22 gennaio 2026 - v5.1 FINAL  
**Prossimi sviluppi**: Integrazione con PDTA colorettale/gastrico, export HL7/FHIR

---

*Sviluppato con ❤️ e ☕ per migliorare la qualità diagnostica*
