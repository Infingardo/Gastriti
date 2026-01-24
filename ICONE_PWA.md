# 🎨 Icone PWA - Istruzioni

Per completare l'installazione PWA, servono **2 icone**:

- `icon-192.png` (192x192 px)
- `icon-512.png` (512x512 px)

---

## Opzione 1: Generazione Automatica Online (CONSIGLIATA)

### 1. Vai su: https://realfavicongenerator.net/

### 2. Carica un'immagine quadrata (es: logo ASST, simbolo 🔬, lettera "O")

### 3. Configura:
- **Android Chrome**: seleziona colore tema `#4299e1` (blu)
- **iOS Safari**: abilita "Add background" con colore `#4299e1`
- **Windows Metro**: colore `#4299e1`

### 4. Scarica il pacchetto e:
- Rinomina `android-chrome-192x192.png` → `icon-192.png`
- Rinomina `android-chrome-512x512.png` → `icon-512.png`
- Copia i file nella stessa cartella di `index.html`

---

## Opzione 2: Placeholder Temporaneo

Se vuoi testare subito senza icone personalizzate:

### Con GIMP/Photoshop:
1. Crea 2 file PNG:
   - `icon-192.png` (192x192 px)
   - `icon-512.png` (512x512 px)
2. Sfondo blu `#4299e1`
3. Testo bianco centrato: "OLGA" (font bold)
4. Salva come PNG

### Con ImageMagick (command line):
```bash
# Icona 192x192
convert -size 192x192 xc:'#4299e1' \
  -font Arial-Bold -pointsize 60 \
  -fill white -gravity center \
  -annotate +0+0 'OLGA' \
  icon-192.png

# Icona 512x512
convert -size 512x512 xc:'#4299e1' \
  -font Arial-Bold -pointsize 160 \
  -fill white -gravity center \
  -annotate +0+0 'OLGA' \
  icon-512.png
```

---

## Opzione 3: Emoji come Icona (Quick & Dirty)

### Con Python + Pillow:
```python
from PIL import Image, ImageDraw, ImageFont

# 192x192
img192 = Image.new('RGB', (192, 192), color='#4299e1')
d = ImageDraw.Draw(img192)
font = ImageFont.truetype("seguiemj.ttf", 120)  # Emoji font
d.text((96, 96), "🔬", font=font, anchor="mm", fill='white')
img192.save('icon-192.png')

# 512x512
img512 = Image.new('RGB', (512, 512), color='#4299e1')
d = ImageDraw.Draw(img512)
font = ImageFont.truetype("seguiemj.ttf", 320)
d.text((256, 256), "🔬", font=font, anchor="mm", fill='white')
img512.save('icon-512.png')
```

---

## Dove mettere le icone?

```
/tuo_progetto/
├── index.html
├── manifest.json
├── service-worker.js
├── icon-192.png  ← QUI
└── icon-512.png  ← QUI
```

---

## Verifica Installazione

1. Apri `index.html` in Chrome Android/iOS Safari
2. Controlla Console → Application → Manifest
3. Le icone devono apparire senza errori
4. Prova installazione → icona deve essere visibile

---

## Design Consigliato

**Logo ASST** su sfondo blu `#4299e1`:
- Semplice e riconoscibile
- Contrasto alto (bianco su blu)
- Evita dettagli piccoli (si vedono male a 192px)

**Alternative:**
- Lettera "O" stilizzata (OLGA)
- Emoji 🔬 (microscopio)
- Simbolo H. pylori stilizzato
- Ghiandole gastriche astratte

---

## Note

- **Formato**: PNG con trasparenza supportata
- **Dimensioni minime**: 192x192 e 512x512 (non meno!)
- **Safe area**: lascia 10% di padding ai bordi (iOS può ritagliare)
- **File size**: mantieni <100KB per icona (ottimizza con TinyPNG)

---

**Una volta generate, le icone funzioneranno automaticamente con la PWA!** 🎉
