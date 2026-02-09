# GUIDA APPLICAZIONE v5.7.21

## 📋 CHECKLIST PRE-APPLICAZIONE

- [ ] Backup del repository corrente
- [ ] Git status pulito (nessuna modifica pendente)
- [ ] Test locale funzionante

---

## 🔧 STEP 1: MODIFICHE index.html

### A. INTESTAZIONI DIAGNOSTICHE (7 sostituzioni)

Apri `index.html` e cerca/sostituisci (Cmd+F su Mac, Ctrl+F su Windows):

```javascript
// 1. HP-associata
CERCA: diagnosticHeader = 'GASTRITE CRONICA HP-ASSOCIATA';
SOSTITUISCI: diagnosticHeader = 'Gastrite cronica HP-associata';

// 2. Autoimmune
CERCA: diagnosticHeader = 'GASTRITE CRONICA AUTOIMMUNE';
SOSTITUISCI: diagnosticHeader = 'Gastrite cronica autoimmune';

// 3. Cronica generica
CERCA: diagnosticHeader = 'GASTRITE CRONICA';
SOSTITUISCI: diagnosticHeader = 'Gastrite cronica';

// 4. Reattiva
CERCA: diagnosticHeader = 'GASTROPATIA REATTIVA (chimica/farmacologica)';
SOSTITUISCI: diagnosticHeader = 'Gastropatia reattiva (chimica/farmacologica)';

// 5. Linfocitica
CERCA: diagnosticHeader = 'GASTRITE LINFOCITICA';
SOSTITUISCI: diagnosticHeader = 'Gastrite linfocitica';

// 6. Borderline
CERCA: diagnosticHeader = 'INCREMENTO BORDERLINE LINFOCITI INTRAEPITELIALI';
SOSTITUISCI: diagnosticHeader = 'Incremento borderline linfociti intraepiteliali';

// 7. Eosinofila
CERCA: diagnosticHeader = 'GASTRITE EOSINOFILA';
SOSTITUISCI: diagnosticHeader = 'Gastrite eosinofila';
```

---

### B. OLGA/OLGIM GRASSETTO (2 sostituzioni)

```javascript
// 1. OLGA
CERCA: reportLines.push('\nOLGA: ' + olgaInfo);
SOSTITUISCI: reportLines.push('\n**OLGA**: ' + olgaInfo);

// 2. OLGIM
CERCA: reportLines.push('OLGIM: ' + olgimInfo);
SOSTITUISCI: reportLines.push('**OLGIM**: ' + olgimInfo);
```

---

### C. FUNZIONE getAtrophyText() - SOSTITUZIONE COMPLETA

Cerca la funzione `function getAtrophyText()` e SOSTITUISCI TUTTA la funzione con:

```javascript
function getAtrophyText() {
    const anAtrophy = getValue('an_atrophy') || 0;
    const inAtrophy = getValue('in_atrophy') || 0;
    const coAtrophy = getValue('co_atrophy') || 0;
    
    const atrophyData = [];
    if (anAtrophy > 0) atrophyData.push({site: 'antro', grade: anAtrophy});
    if (inAtrophy > 0) atrophyData.push({site: 'incisura', grade: inAtrophy});
    if (coAtrophy > 0) atrophyData.push({site: 'corpo', grade: coAtrophy});
    
    if (atrophyData.length === 0) {
        return 'Assente';
    }
    
    function gradeText(grade) {
        if (grade === 1) return 'lieve';
        if (grade === 2) return 'moderata';
        if (grade === 3) return 'elevata';
        return '';
    }
    
    const grades = atrophyData.map(d => d.grade);
    const allSame = grades.every(g => g === grades[0]);
    
    if (allSame) {
        const gText = gradeText(grades[0]);
        return 'Presente, ' + gText + ' (' + atrophyData.map(d => d.site).join(', ') + ')';
    } else {
        const details = atrophyData.map(d => d.site + ': ' + gradeText(d.grade)).join(', ');
        return 'Presente, pattern misto (' + details + ')';
    }
}
```

---

### D. FUNZIONE getMITypeText() - SOSTITUZIONE COMPLETA

Cerca la funzione `function getMITypeText()` e SOSTITUISCI TUTTA la funzione con:

```javascript
function getMITypeText() {
    const anMI = getValue('an_mi') || 0;
    const inMI = getValue('in_mi') || 0;
    const coMI = getValue('co_mi') || 0;
    
    const anMIType = getValue('an_mi_type');
    const inMIType = getValue('in_mi_type');
    const coMIType = getValue('co_mi_type');
    
    const miData = [];
    if (anMI > 0) miData.push({site: 'antro', grade: anMI, type: anMIType});
    if (inMI > 0) miData.push({site: 'incisura', grade: inMI, type: inMIType});
    if (coMI > 0) miData.push({site: 'corpo', grade: coMI, type: coMIType});
    
    if (miData.length === 0) {
        return 'Assente';
    }
    
    function gradeText(grade) {
        if (grade === 1) return 'lieve';
        if (grade === 2) return 'moderata';
        if (grade === 3) return 'elevata';
        return '';
    }
    
    const types = miData.map(d => d.type).filter(t => t);
    const hasCompleta = types.includes('Completa');
    const hasIncompleta = types.includes('Incompleta');
    
    let typeText = '';
    if (hasCompleta && hasIncompleta) {
        typeText = 'mista';
    } else if (hasCompleta) {
        typeText = 'completa';
    } else if (hasIncompleta) {
        typeText = 'incompleta';
    }
    
    const maxGrade = Math.max(...miData.map(d => d.grade));
    const gradeTextStr = gradeText(maxGrade);
    
    const sites = miData.map(d => d.site).join(', ');
    
    if (typeText && gradeTextStr) {
        return 'Presente, ' + gradeTextStr + ' e ' + typeText + ' (' + sites + ')';
    } else if (typeText) {
        return 'Presente, ' + typeText + ' (' + sites + ')';
    } else if (gradeTextStr) {
        return 'Presente, ' + gradeTextStr + ' (' + sites + ')';
    } else {
        return 'Presente (' + sites + ')';
    }
}
```

---

### E. RIMOZIONE EMOJI (5 sostituzioni)

```javascript
// 1.
CERCA: reportLines.push('⚠️ NOTA INTERPRETATIVA:');
SOSTITUISCI: reportLines.push('NOTA INTERPRETATIVA:');

// 2.
CERCA: reportLines.push('⚠️ NOTA STAGING:');
SOSTITUISCI: reportLines.push('NOTA STAGING:');

// 3.
CERCA: reportLines.push('🔴 ATTENZIONE:');
SOSTITUISCI: reportLines.push('ATTENZIONE:');

// 4.
CERCA: reportLines.push('⚡ URGENZA:');
SOSTITUISCI: reportLines.push('URGENZA:');

// 5.
CERCA: reportLines.push('📋 NOTA:');
SOSTITUISCI: reportLines.push('NOTA:');
```

---

### F. AUTO-FILL GASTRITE SPECIALE - AGGIUNTA LISTENER

Cerca la sezione con altri event listeners (probabilmente dopo `DOMContentLoaded`) e AGGIUNGI:

```javascript
// Auto-fill pattern topografici gastriti speciali
document.getElementById('gastrite_speciale').addEventListener('change', function() {
    const specialType = this.value;
    
    const anAtrophy = document.getElementById('an_atrophy');
    const inAtrophy = document.getElementById('in_atrophy');
    const coAtrophy = document.getElementById('co_atrophy');
    
    if (specialType === 'Autoimmune') {
        // Pattern gastrite autoimmune
        coAtrophy.value = '2';
        anAtrophy.value = '0';
        inAtrophy.value = '0';
        
        anAtrophy.disabled = true;
        inAtrophy.disabled = true;
        coAtrophy.disabled = false;
        
    } else if (specialType === 'Reattiva') {
        // Gastropatia reattiva
        anAtrophy.value = '0';
        inAtrophy.value = '0';
        coAtrophy.value = '0';
        
        anAtrophy.disabled = true;
        inAtrophy.disabled = true;
        coAtrophy.disabled = true;
        
    } else {
        anAtrophy.disabled = false;
        inAtrophy.disabled = false;
        coAtrophy.disabled = false;
    }
    
    if (typeof generateReport === 'function') {
        generateReport();
    }
});
```

---

## 🔧 STEP 2: MODIFICHE service-worker.js

```javascript
CERCA: const CACHE_NAME = 'gastriti-v5.7.20';
SOSTITUISCI: const CACHE_NAME = 'gastriti-v5.7.21';
```

---

## 🔧 STEP 3: AGGIORNA README.md

Apri `README.md` e aggiungi all'inizio della sezione changelog:

```markdown
## Versione 5.7.21 (09 Feb 2026)

### 🎨 Miglioramenti formattazione referto
- Intestazioni diagnostiche con prima lettera maiuscola (era tutto maiuscolo)
- OLGA e OLGIM in **grassetto** nel referto
- Grading atrofia incluso: "Presente, moderata (antro, corpo)"
- Grading MI incluso: "Presente, moderata e completa (antro)"
- Rimosse emoji dal referto copiabile (problemi encoding LIS)

### 🔬 Auto-fill pattern topografici
- Gastrite autoimmune: corpo=2, antro/incisura=0 bloccati
- Gastropatia reattiva: tutti atrofia=0 bloccati
```

---

## ✅ STEP 4: TEST LOCALE

Prima di committare, testa:

1. **Apri index.html in browser**
2. **Test gastrite normale:**
   - Compila antro atrofia=2, corpo=1
   - Verifica referto: "Presente, pattern misto (antro: moderata, corpo: lieve)"
   - Verifica: "**OLGA**: stadio II"

3. **Test gastrite autoimmune:**
   - Seleziona gastrite speciale = Autoimmune
   - Verifica: corpo=2, antro/incisura disabilitati
   - Verifica intestazione: "Gastrite cronica autoimmune"

4. **Test gastropatia reattiva:**
   - Seleziona gastrite speciale = Reattiva
   - Verifica: tutti atrofia=0 e disabilitati
   - Verifica intestazione: "Gastropatia reattiva (chimica/farmacologica)"

5. **Test emoji:**
   - Genera referto con note
   - Copia referto
   - Verifica: NO emoji nel testo copiato

---

## 🚀 STEP 5: DEPLOY

```bash
cd /percorso/Gastriti/
git status  # Verifica modifiche
git add index.html service-worker.js README.md
git commit -m "v5.7.21: Formattazione referto + auto-fill pattern topografici"
git push origin main
```

Attendi 3-5 minuti per rebuild GitHub Pages.

---

## 🎯 VERIFICA POST-DEPLOY

1. Apri: https://infingardo.github.io/Gastriti/
2. Ctrl+Shift+R (hard refresh) per svuotare cache
3. Testa scenari sopra elencati
4. Se OK → Condividi con colleghi!

---

## 📊 RIEPILOGO MODIFICHE

- **Righe modificate:** ~80
- **Funzioni riscritte:** 2 (getAtrophyText, getMITypeText)
- **Listener aggiunti:** 1 (gastrite_speciale)
- **Sostituzioni semplici:** 14
- **Tempo stimato:** 15-20 minuti

---

## ⚠️ TROUBLESHOOTING

**Problema:** Modifiche non visibili dopo deploy
- **Soluzione:** Hard refresh (Ctrl+Shift+R) o svuota cache browser

**Problema:** Auto-fill non funziona
- **Soluzione:** Verifica che listener sia dopo DOMContentLoaded

**Problema:** Grading non appare nel referto
- **Soluzione:** Verifica funzioni getAtrophyText() e getMITypeText() sostituite per intero

---

## 📞 SUPPORT

Se hai dubbi o problemi durante l'applicazione delle patch:
- Controlla file PATCH_v5.7.21_JavaScript.js per codice completo
- Verifica CHANGELOG_v5.7.21.md per rationale modifiche
- Testa locale PRIMA di committare
