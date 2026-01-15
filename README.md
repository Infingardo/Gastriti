# 🔬 Gastrite – Sistema di Sydney + OLGA/OLGIM

Tool web per la refertazione istologica strutturata della gastrite cronica secondo il sistema di Sydney aggiornato (Dixon et al., 1996) con staging OLGA/OLGIM e valutazione delle forme speciali.

## 📋 Caratteristiche

### Core Features
* **Updated Sydney System**: valutazione semiquantitativa (0-3) di infiltrato cronico, attività neutrofila, atrofia ghiandolare, metaplasia intestinale e Helicobacter pylori per antro, corpo e incisura angolare
* **OLGA staging** (Rugge et al., 2007/2010): stratificazione del rischio basata su atrofia ghiandolare
* **OLGIM staging** (Capelle et al., 2010): staging alternativo basato solo su metaplasia intestinale
* **Metodi di calcolo OLGA configurabili**:
  + Solo atrofia (conservativo, OLGA originale)
  + Max(atrofia, metaplasia) per sede
  + Atrofia + metaplasia combinati

### Forme Speciali (NEW in v3.0)
* **Gastropatia Chimica/Reattiva**: valutazione iperplasia foveolare, edema lamina propria, proliferazione muscolo liscio
  + Eziologie: reflusso biliare (post-gastrectomia), FANS, alcol
  + Alert automatici per pattern incompatibili (es. alta attività neutrofila)
* **Gastrite Autoimmune (tipo A)**: pattern corpus-predominante, metaplasia pseudopilorica, iperplasia cellule ECL
  + Alert per H. pylori abbondante (raro in forme autoimmuni)
  + Note su associazioni cliniche (anemia perniciosa, ipergastrinemia)
* **Gastrite Linfocitaria**: linfociti intraepiteliali >25/100 cellule
  + Associazioni: gastrite variolariforme, malattia celiaca (20-40%), Ménétrier's disease

### Output e Reporting
* **Badge riassuntivi**: stadio OLGA, stadio OLGIM, distribuzione topografica, forme speciali, alert
* **Tabella sinottica**: valori Sydney per tutte le sedi
* **Referto testuale strutturato**: completo di scoring, staging, forme speciali e raccomandazioni cliniche
* **Bibliografia integrata**: citazioni PMID nel referto
* **Alert automatici**: 
  - Discordanze significative tra OLGA e OLGIM (≥2 stadi)
  - Pattern incompatibili nelle forme speciali
  - Metaplasia intestinale incompleta
* **Gestione clinica**: raccomandazioni follow-up secondo MAPS II/ESGE 2019

## 🚀 Utilizzo

1. Apri [https://infingardo.github.io/Gastriti/](https://infingardo.github.io/Gastriti/) in un browser
2. Seleziona il metodo di calcolo OLGA (default: solo atrofia)
3. Compila tutti i campi per le tre sedi anatomiche (antro, corpo, incisura)
4. *Opzionale*: Espandi "Forme Speciali" se il pattern istologico lo suggerisce
5. Clicca "📊 Calcola referto"
6. Copia il referto o stampa/esporta in PDF

## 📊 Criteri Diagnostici Forme Speciali

### Gastropatia Chimica/Reattiva
✅ **Criteri positivi:**
- Iperplasia foveolare marcata
- Edema della lamina propria
- Proliferazione muscolo liscio
- Infiammazione cronica minima

⚠️ **Pattern incompatibili:**
- Attività neutrofila >1 (suggerisce sovrapposizione con H. pylori)

### Gastrite Autoimmune
✅ **Criteri positivi:**
- Pattern corpus-predominante o corpus-ristretto
- Atrofia marcata nel corpo, antro risparmiato
- Metaplasia pseudopilorica (vs. intestinale)
- Iperplasia cellule ECL

⚠️ **Pattern incompatibili:**
- H. pylori abbondante (grado >1)
- Pattern non corpus-predominante

### Gastrite Linfocitaria
✅ **Criteri positivi:**
- Linfociti intraepiteliali >25 per 100 cellule epiteliali
- Pattern diffuso (non focale)

## ⚠️ Note Cliniche

### Stratificazione del Rischio (MAPS II 2019)

**Alto Rischio (OLGA/OLGIM III-IV o Displasia):**
- Stadio IV: EGDS ogni 1-2 anni
- Stadio III: EGDS ogni 3 anni
- LGD: EGDS ogni 12 mesi
- HGD: resezione endoscopica + staging accurato

**Basso Rischio (OLGA/OLGIM 0-II, no displasia):**
- Non indicata sorveglianza endoscopica routinaria
- Eradicazione H. pylori se presente
- Follow-up clinico secondo sintomatologia

**Note speciali:**
- Discordanze OLGA/OLGIM ≥2 stadi → considerare stadio più alto
- Metaplasia intestinale incompleta → follow-up più ravvicinato
- Forme speciali → gestione clinica caso per caso

## 📚 Riferimenti Bibliografici

1. **Dixon MF** et al. Classification and grading of gastritis. The updated Sydney System. *Am J Surg Pathol* 1996;20(10):1161-81. [PMID:8827022](https://pubmed.ncbi.nlm.nih.gov/8827022/)
2. **Rugge M** et al. Gastritis staging in clinical practice: the OLGA staging system. *Gut* 2007;56(5):631-6. [PMID:17142647](https://pubmed.ncbi.nlm.nih.gov/17142647/)
3. **Rugge M** et al. OLGA gastritis staging for the assessment of gastric cancer risk: a twelve-year clinico-pathological follow-up study. *Dig Liver Dis* 2010;42(3):177-82. [PMID:19793674](https://pubmed.ncbi.nlm.nih.gov/19793674/)
4. **Capelle LG** et al. The staging of gastritis with the OLGA system by using intestinal metaplasia as an accurate alternative for atrophic gastritis. *Gastrointest Endosc* 2010;71(7):1150-8. [PMID:20381801](https://pubmed.ncbi.nlm.nih.gov/20381801/)
5. **Capelle LG** et al. Staging gastritis with the OLGIM: a less complex alternative to OLGA gastritis staging. *Am J Surg Pathol* 2010;34(11):1653-64. [PMID:20975341](https://pubmed.ncbi.nlm.nih.gov/20975341/)
6. **Pimentel-Nunes P** et al. Management of epithelial precancerous conditions and lesions in the stomach (MAPS II): European Society of Gastrointestinal Endoscopy, European Helicobacter and Microbiota Study Group, European Society of Pathology, and Sociedade Portuguesa de Endoscopia Digestiva Guideline Update 2019. *Endoscopy* 2019;51(4):365-388. [PMID:30841008](https://pubmed.ncbi.nlm.nih.gov/30841008/)

## 🔧 Requisiti Tecnici

* Browser moderno (Chrome, Firefox, Safari, Edge)
* Nessuna installazione richiesta
* Nessuna connessione internet necessaria dopo il primo caricamento
* Compatibile con stampa/PDF
* Responsive design (mobile-friendly)

## ⚖️ Disclaimer

**Questo tool è destinato esclusivamente a professionisti sanitari qualificati.**

* Il software è fornito "as is" senza garanzie di alcun tipo
* La responsabilità diagnostica e terapeutica rimane del medico refertante
* Il tool supporta ma non sostituisce il giudizio clinico
* Verificare sempre la correttezza dei dati inseriti
* L'output deve essere validato dal patologo prima dell'uso clinico
* Gli alert automatici sono suggerimenti, non diagnosi definitive

## 📄 Licenza

Uso libero per scopi clinici, didattici e di ricerca.  
Citare la fonte in caso di pubblicazioni o presentazioni.

## 👤 Autore

Sviluppato per uso interno presso SC Anatomia Patologica, ASST Fatebenefratelli-Sacco, Milano.  
Contributi e feedback benvenuti via Issues su GitHub.

---

**Versione**: 3.0 (con forme speciali integrate)  
**Ultimo aggiornamento**: Gennaio 2026  
**Live URL**: [https://infingardo.github.io/Gastriti/](https://infingardo.github.io/Gastriti/)

## 🔄 Changelog

### v3.0 (Gennaio 2026)
- ✨ **NEW**: Sezione forme speciali di gastrite
  - Gastropatia chimica/reattiva
  - Gastrite autoimmune (tipo A)
  - Gastrite linfocitaria
- ✨ Alert automatici per pattern incompatibili
- ✨ Badge distintivi per forme speciali
- ✨ Bibliografia integrata nel referto testuale
- 🐛 Fix: duplicazione variabile hpMax
- 🌍 Traduzione eziologie (reflusso biliare, FANS)

### v2.1 (Novembre 2025)
- Aggiornamento interfaccia utente
- Miglioramento gestione metaplasia intestinale
- Integrazione MAPS II 2019

### v2.0 (Ottobre 2025)
- Integrazione OLGIM staging
- Metodi di calcolo OLGA configurabili
- Alert discordanza OLGA/OLGIM

### v1.0 (Settembre 2025)
- Release iniziale
- Updated Sydney System
- OLGA staging
