# 🔬 OLGA/OLGIM Tool per Refertazione Gastrite Cronica

**Versione:** 5.7.11 "Terminologia Fix"  
**Autore:** Dr. Filippo Bianchi  
**SC Anatomia Patologica, ASST Fatebenefratelli-Sacco, Milano**

---

## 📋 Indice

- [Filosofia del Tool](#filosofia-del-tool)
- [Cosa Fa (e Cosa NON Fa)](#cosa-fa-e-cosa-non-fa)
- [Caratteristiche Principali](#caratteristiche-principali)
- [Scelte Cliniche Chiave](#scelte-cliniche-chiave)
- [Installazione e Uso](#installazione-e-uso)
- [Changelog](#changelog)
- [Riferimenti Bibliografici](#riferimenti-bibliografici)

---

## 🎯 Filosofia del Tool

### Non Automazione della Diagnosi, Ma della Prudenza

Questo tool **non** sostituisce il giudizio diagnostico del patologo. Piuttosto:

> *"Tu non stai automatizzando la diagnosi. Stai automatizzando la prudenza."*  
> — ChatGPT-4 (analisi codice v5.7.7)

**Cosa significa in pratica:**

- ✅ **OLGA/OLGIM non è mai sovrano** → HGD prevale su staging
- ✅ **Forme speciali relativizzano lo staging** → Note metodologiche esplicite
- ✅ **Discordanza genera warning** → Non fa media, segnala incongruenza
- ✅ **Linguaggio graduato** → "Compatibile con" vs "diagnostico per"
- ✅ **Lock post-referto** → Previene contaminazione dati tra casi

### Perché Solo i Patologi Possono Scrivere Questo Software

Un software commerciale (LIS) **deve** essere:
- Neutro
- Universale
- Non interpretativo

Questo tool invece:
- **Prende posizione clinica** (es: IEL borderline = NON diagnostico)
- **Segnala incoerenze** (es: MI senza atrofia)
- **Usa giudizio contestuale** (es: OLGIM "a fini descrittivi" per forme speciali)

Questo è possibile solo se chi lo scrive:
- Ha refertato centinaia di biopsie gastriche
- Ha discusso casi borderline in MDT
- Sa dove l'automazione **deve fermarsi**

---

## 📊 Cosa Fa (e Cosa NON Fa)

### ✅ Cosa FA

- Calcola staging OLGA/OLGIM secondo linee guida internazionali
- Identifica forme speciali (autoimmune, chimica, linfocitaria, eosinofila)
- Genera referto strutturato con linguaggio medico-legalmente sicuro
- Valida input e segnala incoerenze cliniche
- Fornisce note metodologiche contestuali
- Suggerisce correlazioni necessarie
- **Protegge da errori umani** (lock, alert, validazione)

### ❌ Cosa NON FA

- Sostituisce esame microscopico diretto
- Interpreta artefatti o qualità campione
- Diagnostica neoplasie (adenocarcinoma, NET, linfoma)
- Valuta margini resezione o invasione vascolare
- Integra dati clinici/endoscopici/laboratoristici
- Fornisce indicazioni terapeutiche
- Genera referto firmato digitalmente
- Garantisce accuratezza senza campionamento adeguato (≥5 biopsie, 3 sedi)

**Il referto generato richiede SEMPRE revisione, integrazione e firma del patologo responsabile.**

---

## 🌟 Caratteristiche Principali

### 1. Intestazioni Diagnostiche Differenziate (v5.7.7)

**Non più:**
```
GASTRITE CRONICA (attiva)
```

**Ma specifiche per tipo:**
- `GASTRITE CRONICA HP-ASSOCIATA (attiva)`
- `GASTRITE CRONICA AUTOIMMUNE`
- `GASTROPATIA REATTIVA (chimica/farmacologica)`
- `GASTRITE LINFOCITARIA`
- `INCREMENTO BORDERLINE LINFOCITI INTRAEPITELIALI`
- `GASTRITE EOSINOFILA`

**Rationale:** Evita appiattimento nosologico, migliora precisione diagnostica.

---

### 2. Linguaggio Medico-Legalmente Sicuro

#### Graduazione Linguistica
- **"Compatibile con"** → Pattern istologico suggestivo, richiede correlazione
- **"Suggestivo ma NON diagnostico"** → Befindlichkeit borderline (es: IEL 15-25/100)
- **"Diagnostico per"** → Solo quando il pattern è patognomonico

#### Esempio IEL Borderline (v5.7.7)
```
INCREMENTO BORDERLINE LINFOCITI INTRAEPITELIALI

Incremento borderline dei linfociti intraepiteliali (15-25/100 cellule epiteliali).

Quadro suggestivo ma NON diagnostico per gastrite linfocitaria.
Correlazione clinica ed endoscopica raccomandata.
DD: celiachia, farmaci (PPI), H. pylori pregresso, variante normale.
```

**Rationale:** Borderline ≠ diagnosi. Linguaggio esplicito previene falsi positivi.

---

### 3. OLGIM Contestualizzato per Forme Speciali (v5.7.7)

Per gastropatia chimica, gastrite autoimmune, linfocitaria, eosinofila:

```
OLGA: stadio II
OLGIM: stadio I

⚠️ NOTA METODOLOGICA:
OLGA/OLGIM calcolati a fini descrittivi; rilevanza prognostica limitata
nel contesto di gastropatia reattiva (meccanismo non atrofico classico).
```

**Rationale:** Il numero resta (documentazione), ma viene relativizzato (contesto clinico).

---

### 4. Sistema Alert Intelligente

#### Alert Clinici
- **MI senza atrofia** → Possibile campionamento limitato / post-eradicazione HP
- **Attività senza HP** → Verificare tecniche aggiuntive / altri agenti
- **LGD + attività marcata** → Considerare regressione post-eradicazione
- **Discordanza OLGA/OLGIM ≥2 stadi** → Considerare stadio più alto per sorveglianza

#### Alert Pattern Speciali
- **Gastropatia chimica + attività** → Verificare HP (pattern inconsueto)
- **Gastrite autoimmune + HP** → Coesistenza rara
- **Eosinofili ≥30/HPF** → DD critica (parassitosi, farmaci, IBD)

---

### 5. Lock Post-Referto (v5.7)

**Problema:** Caso 1 → Referto generato → Reset dimenticato → Caso 2 eredita dati Caso 1 → Referto ibrido catastrofico

**Soluzione:** Dopo generazione referto:
- 🔒 Tutti i campi vengono **bloccati**
- 🔴 Banner rosso: "DIAGNOSI COMPLETATA - CAMPI BLOCCATI"
- ⚡ Mega-reset button pulsante: "⚠️ RESET COMPLETO - NUOVA DIAGNOSI"

**Rationale:** Feature antropologica. Riconosce che i patologi sono umani, stanchi, interrotti. Previene errori umani in contesto reale.

---

### 6. Clipboard Ultra-Robusto (v5.7.7)

**Escalation automatica a 3 livelli:**

1. **Livello 1:** Clipboard API moderna (HTTPS/localhost)
2. **Livello 2:** ContentEditable + execCommand + retry logic (compatibilità)
3. **Livello 3:** Selezione manuale assistita (highlight giallo + istruzioni Ctrl+C)

**Funziona sempre**, anche su domini con policy restrittive (es: claude.ai preview).

---

### 7. Validazione Input Intelligente

- **Campi obbligatori evidenziati** → Border rosso
- **Alert prioritizzati** → Error > Warning > Success (max 3 contemporanei)
- **Quick fill shortcuts** → "Tutto negativo", "H. pylori+"
- **Reset per sede** → Antro/Incisura/Corpo separatamente

---

### 8. PWA (Progressive Web App)

- ✅ **Installabile** su mobile/desktop
- ✅ **Offline-ready** (service worker, cache strategico)
- ✅ **Responsive design** (tablet, smartphone)
- ✅ **Auto-save localStorage** (ripristino automatico dati)

---

## 🔬 Scelte Cliniche Chiave

### A. Metaplasia Intestinale Senza Atrofia

```javascript
const hasMetaplasiaWithoutAtrophy = 
  (metaplasia > 0 && atrophy === 0);
```

**Comportamento:**
- 🔍 Alert informativo se HP– e infiltrato cronico minimo
- ⚠️ Alert warning se HP+ o infiltrato cronico marcato
- 📋 Nota permanente nel referto

**Rationale:** MI senza atrofia è **insolita ma possibile** (campionamento limitato, post-eradicazione). Non forza diagnosi, segnala incongruenza.

---

### B. Gastrite Autoimmune "Burned-Out"

```javascript
if (atrophy >= 2 && chronic < 2) {
  showAlert('warning', 
    'Atrofia elevata con scarso infiltrato cronico. ' +
    'Pattern compatibile con gastrite autoimmune avanzata (burned-out) ' +
    'o esito post-eradicazione.'
  );
}
```

**Rationale:** Riconosce **cicatrice storica** della malattia. Non interpreta come errore input.

---

### C. IEL Borderline (15-25/100)

**Badge UI:**
- 🔵 "IEL aumentati (borderline)" (colore info azzurro)

**Referto:**
```
INCREMENTO BORDERLINE LINFOCITI INTRAEPITELIALI

Quadro suggestivo ma NON diagnostico per gastrite linfocitaria.
```

**Rationale:** Scelta **etica**, non solo tecnica. Previene sovradiagnosi su pattern equivoco.

---

### D. HGD Prevale su Staging

```javascript
if (dysplasiaMax === 2) {
  hgdNote = '⚠️ NOTA CLINICA: La presenza di displasia di alto grado ' +
            'prevale sullo staging OLGA/OLGIM ai fini del management ' +
            '(priorità a resezione/sorveglianza stretta).';
}
```

**Rationale:** HGD è **lesione precancerosa avanzata**. Lo staging diventa secondario per il management.

---

### E. Discordanza OLGA/OLGIM (≥2 Stadi)

**Comportamento:**
- 🟡 Badge warning "Discordanza OLGA/OLGIM"
- ⚠️ Alert: "Considerare stadio più alto per sorveglianza"
- 📋 Nota permanente nel referto

**Rationale:** **Non fa media** (non è matematica), segnala incongruenza che richiede attenzione clinica.

---

## 🚀 Installazione e Uso

### Deployment GitHub Pages

1. **Repository:** `https://github.com/infingardo/olga-olgim`
2. **URL pubblico:** `https://infingardo.github.io/olga-olgim/`
3. **Installazione PWA:** Click su banner installazione (mobile/desktop)

### Uso Base

1. **Compilare campi obbligatori** → Antro, Incisura, Corpo (infiltrato, attività, atrofia, MI, HP)
2. **Forme speciali** (opzionale) → Espandere sezione se pattern suggestivo
3. **Note aggiuntive** (opzionale) → Campo libero per osservazioni
4. **Calcola referto** → Genera staging + referto strutturato
5. **Copia referto** → Clipboard automatico (o manuale se bloccato)
6. **⚠️ RESET COMPLETO** → Prima di ogni nuova diagnosi!

### Shortcuts Rapidi

- **✅ Tutto negativo** → Setta tutti i campi a 0
- **🦠 H. pylori+** → Pattern base antro-predominante
- **⚡ Tutto 0 [sede]** → Reset singola sede (antro/incisura/corpo)

---

## 📚 Changelog

### v5.7.11 "Terminologia Fix" (2026-01-27)

**Fix Terminologico: "Linfocitaria" → "Linfocitica"**
- Corretto termine in tutto il tool: gastrite **linfocitica** (non linfocitaria)
- Aggiornate 8 occorrenze in:
  - Titolo sezione form
  - Badge risultati
  - Diagnostica header
  - Testo referto
  - Note pattern sovrapposti
- Terminologia corretta secondo nomenclatura WHO/Sydney System

---

### v5.7.10 "Triple Fix" (2026-01-27) 🚨 HIGH PRIORITY

**Fix #1: "ATROFIA GHIANDOLARE" Scomparsa dal Referto** 🐛 CRITICAL
- **PROBLEMA:** Voce "ATROFIA GHIANDOLARE" NON compariva nel referto gastrite cronica
- **IMPATTO:** Impossibile vedere distribuzione atrofia nel referto copiato
- **FIX:** Aggiunta funzione `getAtrophyText()` + voce nel referto
- **OUTPUT:** "ATROFIA GHIANDOLARE: Presente (antro, incisura)" o "Assente"
- **POSIZIONE:** Tra "H. PYLORI" e "METAPLASIA INTESTINALE" (ordine logico)

**Fix #2: Funzione "Copia Referto" Non Funzionava**
- **PROBLEMA:** Bottone "📋 Copia Referto" non copiava correttamente
- **CAUSA:** textContent non preserva newline in alcuni contesti
- **FIX:** Cambiato `textContent` → `innerText` (rispetta white-space: pre-wrap)
- **RISULTATO:** Copia funzionante con newline preservate

**Fix #3: Ctrl+C Manuale Perdeva Formattazione**
- **PROBLEMA:** Copia manuale (Ctrl+C sul box) perdeva newline in LIS/Word
- **CAUSA:** textContent ignora CSS white-space in alcuni browser
- **FIX:** innerText rispetta rendering CSS → newline preservate
- **BONUS:** CSS già aveva `white-space: pre-wrap` (era solo problema JS)

**Riepilogo Fix:**
1. ✅ ATROFIA ora visibile nel referto
2. ✅ Copia referto funziona (bottone)
3. ✅ Ctrl+C manuale preserva formattazione

**Deploy urgente consigliato** - Fix #1 è critico per completezza referto!

---

### v5.7.9 "iOS Clipboard Fix" (2026-01-27)

**Fix: Clipboard iOS-Friendly**
- **PROBLEMA:** Funzione "Copia Referto" non funzionava su iOS/Safari
- **CAUSA:** contentEditable nascosto non copiabile su iOS, Clipboard API richiede secure context
- **FIX APPLICATO:**
  - Textarea VISIBILE temporaneamente (iOS non copia elementi hidden)
  - Focus esplicito con setSelectionRange
  - Fallback manuale assistito con box istruzioni visibile
  - Check window.isSecureContext per Clipboard API
- **UX:** Se copia auto fallisce, textarea rimane visibile 10sec con istruzioni "Premi Ctrl+C"

---

### v5.7.8 "Matrix Fix" (2026-01-27) 🚨 CRITICAL

**Fix Critico: Matrice OLGA Invertita**
- **BUG IDENTIFICATO:** Matrice usava [corpus][antrum] invece di [antrum][corpus]
- **IMPATTO:** Gastrite corpo-predominante (tipo A) veniva SOTTOSTIMATA
- **FIX:** Ricostruita matrice secondo standard Rugge 2007 (Antrum=righe, Corpus=colonne)
- **ESEMPIO CRITICO FIXATO:**
  - Corpus severo (3) + Antrum normale (0):
    - PRIMA (bug): Stadio II ❌
    - DOPO (fix): Stadio III ✅
- **Deploy urgente consigliato per tutti gli utenti**

---

### v5.7.7 "Nosological Precision" (2026-01-26)

**Fix #1: Intestazioni Diagnostiche Differenziate**
- Intestazioni specifiche per tipo (HP+, autoimmune, chimica, linfocitaria, eosinofila)
- IEL borderline → "INCREMENTO BORDERLINE..." vs "GASTRITE LINFOCITARIA"

**Fix #2: IEL Borderline Wording Ultra-Prudente**
- "Suggestivo ma NON diagnostico per gastrite linfocitaria"
- DD esplicite (celiachia, PPI, HP pregresso, variante normale)

**Fix #3: OLGIM Contestualizzato per Forme Speciali**
- Note metodologiche per gastropatia chimica, autoimmune, linfocitaria, eosinofila
- "OLGA/OLGIM calcolati a fini descrittivi; rilevanza prognostica limitata"

**Fix #4: Clipboard Ultra-Robusto**
- Escalation 3 livelli (Clipboard API → execCommand → selezione manuale)
- Highlight giallo + istruzioni esplicite "Premi Ctrl+C"

---

### v5.7.6 "Final Polish" (2026-01-26)

**Fix #1: getTopography - Zero Infiltrato**
- `infiltrato = 0` → "assenza di significativo infiltrato flogistico cronico"
- Evita sovradiagnosi "gastrite cronica minima" su mucosa normale

**Fix #2: Badge IEL Borderline**
- IEL grado 1 → badge info azzurro "IEL aumentati (borderline)"
- IEL grado 2 → badge dysplasia viola "Gastrite linfocitaria"

**Fix #3: Linguaggio Referto Prudente**
- "Compatibile con" (non "riferibile a") per forme speciali
- Medico-legalmente più sicuro

**Fix #4: AlertQueue Split Documentato**
- Separazione concettuale alertUI vs alertReport (implementazione v6.0)

---

### v5.7.5 "Triple Bugfix + ChatGPT Polish" (2026-01-26)

**5 Fix Critici:**
1. Service Worker sicuro (validazione dominio, fallback graceful)
2. Gastrite autoimmune → nota correlazione permanente nel referto
3. MI senza atrofia → nota permanente nel referto
4. IEL grading 3 livelli (0/borderline/franco)
5. Discordanza OLGA/OLGIM → sempre nel referto (≥2 stadi)

---

### v5.7.4 "Triple Bugfix" (2026-01-26)

**3 Fix Critici:**
1. Copia referto robusto (Clipboard API + fallback execCommand)
2. Quick fill per sede (reset antro/incisura/corpo separatamente)
3. Tipo MI condizionale (completa vs incompleta, MAPS III)

---

### v5.7 "Lock & Reset" (2026-01-26)

**Lock post-referto** → Previene contaminazione dati tra casi
**Mega-reset button** → Pulsante rosso con animazione

---

### v5.6 "Forme Speciali" (2026-01-25)

**4 Forme Speciali:**
- Gastropatia chimica/reattiva
- Gastrite autoimmune
- Gastrite linfocitaria
- Gastrite eosinofila

---

### v5.0-v5.5 (2026-01-23 → 2026-01-25)

- Calcolo OLGA/OLGIM base
- Sistema alert prioritizzato
- PWA con service worker
- Responsive design
- Auto-save localStorage

---

## 📖 Riferimenti Bibliografici

### Sistemi di Staging

1. **Dixon MF et al.** Classification and grading of gastritis. The updated Sydney System. *Am J Surg Pathol* 1996;20(10):1161-81. [PMID:8827022](https://pubmed.ncbi.nlm.nih.gov/8827022/)

2. **Rugge M et al.** Gastritis staging in clinical practice: the OLGA staging system. *Gut* 2007;56(5):631-6. [PMID:17142647](https://pubmed.ncbi.nlm.nih.gov/17142647/)

3. **Rugge M et al.** OLGA gastritis staging for the assessment of gastric cancer risk: a twelve-year clinico-pathological follow-up study. *Dig Liver Dis* 2010;42(3):177-82. [PMID:19793674](https://pubmed.ncbi.nlm.nih.gov/19793674/)

4. **Capelle LG et al.** The staging of gastritis with the OLGA system by using intestinal metaplasia as an accurate alternative for atrophic gastritis. *Gastrointest Endosc* 2010;71(7):1150-8. [PMID:20381801](https://pubmed.ncbi.nlm.nih.gov/20381801/)

5. **Capelle LG et al.** Staging gastritis with the OLGIM: a less complex alternative to OLGA gastritis staging. *Am J Surg Pathol* 2010;34(11):1653-64. [PMID:20975341](https://pubmed.ncbi.nlm.nih.gov/20975341/)

### Linee Guida Management

6. **Dinis-Ribeiro M et al.** Management of epithelial precancerous conditions and early neoplasia of the stomach (MAPS III): European Society of Gastrointestinal Endoscopy (ESGE), European Helicobacter and Microbiota Study Group (EHMSG) and European Society of Pathology (ESP) Guideline update 2025. *Endoscopy* 2025. [DOI:10.1055/a-2529-5025](https://doi.org/10.1055/a-2529-5025)

### Forme Speciali

7. **Rosai and Ackerman's Surgical Pathology** (11th ed.) - Gastrite linfocitaria, eosinofila
8. **WHO Classification of Tumours: Digestive System** (5th ed., 2019) - Gastropatia chimica
9. **Neumann WL et al.** Autoimmune atrophic gastritis—pathogenesis, pathology and management. *Nat Rev Gastroenterol Hepatol* 2013;10:529–41. [PMID:23774773](https://pubmed.ncbi.nlm.nih.gov/23774773/)

---

## ⚖️ Avvertenze Medico-Legali

### Responsabilità

- Questo tool è di **supporto alla refertazione istologica**
- **Non sostituisce** il giudizio diagnostico del patologo
- Tutti i dati devono essere **validati clinicamente** prima dell'uso
- Il referto generato richiede **SEMPRE revisione, integrazione e firma** del patologo responsabile

### Limitazioni

- Non interpreta artefatti o qualità del campione
- Non diagnostica lesioni neoplastiche
- Non valuta margini di resezione
- Non integra dati clinici/endoscopici/laboratoristici
- Non fornisce indicazioni terapeutiche
- Non genera referto firmato digitalmente
- Accuratezza limitata senza campionamento adeguato (≥5 biopsie, 3 sedi MAPS III)

---

## 📧 Contatti

**Autore:** Dr. Filippo Bianchi  
**Istituzione:** SC Anatomia Patologica, ASST Fatebenefratelli-Sacco, Milano  
**GitHub:** [@infingardo](https://github.com/infingardo)  
**Repository:** [olga-olgim](https://github.com/infingardo/olga-olgim)

---

## 📜 Licenza

Copyright © 2026 Dr. Filippo Bianchi  
Tutti i diritti riservati.

Uso consentito per:
- Scopo educativo
- Pratica clinica individuale
- Ricerca scientifica

Uso NON consentito per:
- Redistribuzione commerciale
- Integrazione in software commerciali
- Rivendita

---

## 🙏 Ringraziamenti

Questo tool è stato sviluppato con il supporto di:
- **Claude (Anthropic)** - Sviluppo codice e logica clinica
- **ChatGPT-4 (OpenAI)** - Revisione critica e analisi epistemologica
- **Colleghi SC Anatomia Patologica ASST Fatebenefratelli-Sacco** - Feedback clinico

**Complimento ChatGPT-4 (2026-01-26):**
> *"Questo codice dimostra una cosa molto chiara: I software di anatomia patologica devono essere progettati dai patologi, perché solo i patologi sanno dove l'automazione deve fermarsi. E il tuo tool si ferma esattamente nei punti giusti. Non è perfetto. Ma è adulto."*

---

**Versione README:** 2.0 (2026-01-26)  
**Ultima modifica:** 2026-01-26 22:30 CET
