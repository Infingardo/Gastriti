// ============================================
// PATCH v5.7.21 - MODIFICHE JAVASCRIPT
// ============================================

// ===== 1. INTESTAZIONI DIAGNOSTICHE =====
// CERCA E SOSTITUISCI (circa riga 1200-1300):

// PRIMA:
diagnosticHeader = 'GASTRITE CRONICA HP-ASSOCIATA';
// DOPO:
diagnosticHeader = 'Gastrite cronica HP-associata';

// PRIMA:
diagnosticHeader = 'GASTRITE CRONICA AUTOIMMUNE';
// DOPO:
diagnosticHeader = 'Gastrite cronica autoimmune';

// PRIMA:
diagnosticHeader = 'GASTRITE CRONICA';
// DOPO:
diagnosticHeader = 'Gastrite cronica';

// PRIMA:
diagnosticHeader = 'GASTROPATIA REATTIVA (chimica/farmacologica)';
// DOPO:
diagnosticHeader = 'Gastropatia reattiva (chimica/farmacologica)';

// PRIMA:
diagnosticHeader = 'GASTRITE LINFOCITICA';
// DOPO:
diagnosticHeader = 'Gastrite linfocitica';

// PRIMA:
diagnosticHeader = 'INCREMENTO BORDERLINE LINFOCITI INTRAEPITELIALI';
// DOPO:
diagnosticHeader = 'Incremento borderline linfociti intraepiteliali';

// PRIMA:
diagnosticHeader = 'GASTRITE EOSINOFILA';
// DOPO:
diagnosticHeader = 'Gastrite eosinofila';


// ===== 2. OLGA/OLGIM IN GRASSETTO =====
// CERCA (circa riga 1450-1500):

// PRIMA:
reportLines.push('\nOLGA: ' + olgaInfo);
reportLines.push('OLGIM: ' + olgimInfo);

// DOPO:
reportLines.push('\n**OLGA**: ' + olgaInfo);
reportLines.push('**OLGIM**: ' + olgimInfo);


// ===== 3. FUNZIONE getAtrophyText() CON GRADING =====
// SOSTITUISCI COMPLETAMENTE (cerca "function getAtrophyText()"):

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
    
    // Helper per testo grado
    function gradeText(grade) {
        if (grade === 1) return 'lieve';
        if (grade === 2) return 'moderata';
        if (grade === 3) return 'elevata';
        return '';
    }
    
    // Tutti con stesso grado?
    const grades = atrophyData.map(d => d.grade);
    const allSame = grades.every(g => g === grades[0]);
    
    if (allSame) {
        const gText = gradeText(grades[0]);
        return 'Presente, ' + gText + ' (' + atrophyData.map(d => d.site).join(', ') + ')';
    } else {
        // Gradi diversi - pattern misto
        const details = atrophyData.map(d => d.site + ': ' + gradeText(d.grade)).join(', ');
        return 'Presente, pattern misto (' + details + ')';
    }
}


// ===== 4. FUNZIONE getMITypeText() CON GRADING =====
// SOSTITUISCI COMPLETAMENTE (cerca "function getMITypeText()"):

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
    
    // Helper per testo grado
    function gradeText(grade) {
        if (grade === 1) return 'lieve';
        if (grade === 2) return 'moderata';
        if (grade === 3) return 'elevata';
        return '';
    }
    
    // Determina tipo predominante
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
    
    // Calcola grado massimo
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


// ===== 5. RIMOZIONE EMOJI DAL REFERTO =====
// CERCA E SOSTITUISCI tutte le occorrenze nelle note:

// PRIMA:
reportLines.push('⚠️ NOTA INTERPRETATIVA:');
// DOPO:
reportLines.push('NOTA INTERPRETATIVA:');

// PRIMA:
reportLines.push('⚠️ NOTA STAGING:');
// DOPO:
reportLines.push('NOTA STAGING:');

// PRIMA:
reportLines.push('🔴 ATTENZIONE:');
// DOPO:
reportLines.push('ATTENZIONE:');

// PRIMA:
reportLines.push('⚡ URGENZA:');
// DOPO:
reportLines.push('URGENZA:');

// PRIMA:
reportLines.push('📋 NOTA:');
// DOPO:
reportLines.push('NOTA:');


// ===== 6 & 7. AUTO-FILL GASTRITE SPECIALE =====
// AGGIUNGI questo listener (cerca "DOMContentLoaded" o section degli event listeners):

document.getElementById('gastrite_speciale').addEventListener('change', function() {
    const specialType = this.value;
    
    // Riferimenti ai campi atrofia
    const anAtrophy = document.getElementById('an_atrophy');
    const inAtrophy = document.getElementById('in_atrophy');
    const coAtrophy = document.getElementById('co_atrophy');
    
    if (specialType === 'Autoimmune') {
        // Pattern gastrite autoimmune: corpo atrofico, antro risparmiato
        coAtrophy.value = '2';  // Moderata
        anAtrophy.value = '0';
        inAtrophy.value = '0';
        
        // Blocca antro/incisura, corpo modificabile
        anAtrophy.disabled = true;
        inAtrophy.disabled = true;
        coAtrophy.disabled = false;
        
    } else if (specialType === 'Reattiva') {
        // Gastropatia reattiva: NO atrofia per definizione
        anAtrophy.value = '0';
        inAtrophy.value = '0';
        coAtrophy.value = '0';
        
        // Blocca TUTTI i campi atrofia
        anAtrophy.disabled = true;
        inAtrophy.disabled = true;
        coAtrophy.disabled = true;
        
    } else {
        // Altre gastriti: re-enable tutto
        anAtrophy.disabled = false;
        inAtrophy.disabled = false;
        coAtrophy.disabled = false;
    }
    
    // Ricalcola il report dopo modifica
    if (typeof generateReport === 'function') {
        generateReport();
    }
});
