# 🔬 Gastrite – Sistema di Sydney + OLGA/OLGIM

Tool web per la refertazione istologica strutturata della gastrite cronica secondo il sistema di Sydney aggiornato (Dixon et al., 1996) con staging OLGA e OLGIM.

## 📋 Caratteristiche

- **Updated Sydney System**: valutazione semiquantitativa (0-3) di infiltrato cronico, attività neutrofila, atrofia ghiandolare, metaplasia intestinale e Helicobacter pylori per antro, corpo e incisura angolare
- **OLGA staging** (Rugge et al., 2007/2010): stratificazione del rischio basata su atrofia ghiandolare
- **OLGIM staging** (Capelle et al., 2010): staging alternativo basato solo su metaplasia intestinale
- **Metodi di calcolo OLGA configurabili**:
  - Solo atrofia (conservativo)
  - Max(atrofia, metaplasia) per sede
  - Atrofia + metaplasia combinati
- **Alert automatici**: segnalazione discordanze significative tra OLGA e OLGIM
- **Referto strutturato**: pronto per copia-incolla nel sistema di refertazione
- **Gestione clinica**: raccomandazioni follow-up secondo MAPS II/ESGE 2019

## 🚀 Utilizzo

1. Apri `gastrite-sydney-olga-olgim.html` in un browser
2. Seleziona il metodo di calcolo OLGA (default: solo atrofia)
3. Compila tutti i campi per le tre sedi anatomiche
4. Clicca "Calcola referto"
5. Copia il referto o stampa/esporta in PDF

## 📊 Output

Il tool genera:
- **Badge riassuntivi**: stadio OLGA, stadio OLGIM, distribuzione topografica, eventuali alert
- **Tabella sinottica**: valori Sydney per tutte le sedi
- **Referto testuale strutturato**: completo di scoring, staging e raccomandazioni cliniche

## ⚠️ Note cliniche

- **Stadi OLGA/OLGIM III-IV**: alto rischio di adenocarcinoma gastrico → sorveglianza endoscopica
  - Stadio III: EGDS ogni 3 anni
  - Stadio IV: EGDS ogni 1-2 anni
- **Stadi 0-II**: basso rischio → follow-up clinico
- **Discordanze OLGA/OLGIM**: in caso di divergenza ≥2 stadi, considerare lo stadio più alto per la sorveglianza

## 📚 Riferimenti bibliografici

1. **Dixon MF** et al. Classification and grading of gastritis. The updated Sydney System. *Am J Surg Pathol* 1996;20(10):1161-81. [PMID:8827022](https://pubmed.ncbi.nlm.nih.gov/8827022/)

2. **Rugge M** et al. Gastritis staging in clinical practice: the OLGA staging system. *Gut* 2007;56(5):631-6. [PMID:17142647](https://pubmed.ncbi.nlm.nih.gov/17142647/)

3. **Rugge M** et al. OLGA gastritis staging for the assessment of gastric cancer risk: a twelve-year clinico-pathological follow-up study. *Dig Liver Dis* 2010;42(3):177-82. [PMID:19793674](https://pubmed.ncbi.nlm.nih.gov/19793674/)

4. **Capelle LG** et al. The staging of gastritis with the OLGA system by using intestinal metaplasia as an accurate alternative for atrophic gastritis. *Gastrointest Endosc* 2010;71(7):1150-8. [PMID:20381801](https://pubmed.ncbi.nlm.nih.gov/20381801/)

5. **Capelle LG** et al. Staging gastritis with the OLGIM: a less complex alternative to OLGA gastritis staging. *Am J Surg Pathol* 2010;34(11):1653-64. [PMID:20975341](https://pubmed.ncbi.nlm.nih.gov/20975341/)

6. **Pimentel-Nunes P** et al. Management of epithelial precancerous conditions and lesions in the stomach (MAPS II): European Society of Gastrointestinal Endoscopy guideline update 2019. *Endoscopy* 2019;51(4):365-388. [PMID:30841008](https://pubmed.ncbi.nlm.nih.gov/30841008/)

## 🔧 Requisiti tecnici

- Browser moderno (Chrome, Firefox, Safari, Edge)
- Nessuna installazione richiesta
- Nessuna connessione internet necessaria dopo il primo caricamento
- Compatibile con stampa/PDF

## ⚖️ Disclaimer

**Questo tool è destinato esclusivamente a professionisti sanitari qualificati.** 

- Il software è fornito "as is" senza garanzie di alcun tipo
- La responsabilità diagnostica e terapeutica rimane del medico refertante
- Il tool supporta ma non sostituisce il giudizio clinico
- Verificare sempre la correttezza dei dati inseriti
- L'output deve essere validato dal patologo prima dell'uso clinico

## 📄 Licenza

Uso libero per scopi clinici, didattici e di ricerca.  
Citare la fonte in caso di pubblicazioni o presentazioni.

## 👤 Autore

Sviluppato per uso interno presso SC Anatomia Patologica, ASST Fatebenefratelli-Sacco, Milano.

---

**Versione**: 2.0 (con OLGIM integrato)  
**Ultimo aggiornamento**: Novembre 2025
