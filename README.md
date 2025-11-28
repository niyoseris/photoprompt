# 📸 Photo Prompt Generator

LLM Image Generation için detaylı ve kapsamlı prompt hazırlama aracı.

**Yapımcı:** [@niyoseris](https://twitter.com/niyoseris)

![Photo Prompt Generator](https://img.shields.io/badge/version-2.0-blue) ![License](https://img.shields.io/badge/license-MIT-green) ![JavaScript](https://img.shields.io/badge/vanilla-JS-yellow)

## ✨ Özellikler

### 🌍 Çoklu Dil Desteği
- Türkçe ve İngilizce arayüz
- Promptlar her zaman İngilizce üretilir (LLM uyumluluğu için)

### 📝 Çoklu Format Desteği
- **[TOON](https://github.com/toon-format/toon)**: Token-Oriented Object Notation
- **[TONL](https://github.com/tonl-dev/tonl)**: Token-Optimized Notation Language  
- **JSON**: API entegrasyonları için
- **Natural**: Virgülle ayrılmış doğal dil formatı

### 🎯 Bağlamsal Alt-Seçenekler
Konu tipine göre dinamik seçenekler:
- **Manzara**: Arazi tipi, doğal öğeler (çoklu seçim)
- **Portre**: Etnisite, vücut tipi, cinsiyet
- **Mimari**: Bina tipi, mimari akım, dönem
- **Yiyecek**: Mutfak, yiyecek stili, sunum
- **Moda**: Kategori, sezon, marka stili
- **Yaban Hayatı**: Hayvan türü, yaşam alanı, davranış
- **Ürün**: Ürün tipi, malzeme, arka plan
- **Sokak**: Sokak tipi, coğrafi bölge

### 💾 Özel Preset Sistemi (CRUD)
- Kendi preset'lerinizi kaydedin
- Preset'leri yükleyin, düzenleyin veya silin
- localStorage'da kalıcı saklama

### ☑️ Çoklu Seçim (Multi-Select)
- Checkbox tabanlı seçim
- Birden fazla öğe seçebilme (örn: lake + river + trees)

### 🚫 Negatif Prompt Yönetimi
- Tag tabanlı negatif prompt seçimi
- Özel tag ekleme/silme
- Session'da otomatik kayıt

### ⚡ Diğer Özellikler
- Hazır preset'ler (Sinematik, Portre)
- Tek tıkla kopyalama
- Scroll destekli output alanları
- Tamamen statik (backend gerektirmez)
- Modern ve minimal arayüz

## 🚀 Kullanım

```bash
# Python ile
python -m http.server 5001

# Node.js ile
npx serve -p 5001

# Veya doğrudan dosyayı açın
open index.html
```

Tarayıcıda açın: `http://localhost:5001`

## 📖 Nasıl Kullanılır

1. **Konu**: Konu tipi seçin, bağlamsal seçenekler otomatik görünür
2. **Dönem & Zaman**: Era, günün zamanı, mevsim
3. **Ortam**: Mekan, ortam, kalabalık, hava durumu
4. **Atmosfer**: Ruh hali, renk paleti, aydınlatma
5. **Karakter**: Kıyafet, yaş, saç, ifade, poz
6. **Teknik**: Kamera, açı, ayarlar, kompozisyon
7. **Kalite**: Kalite modifikatörleri, render stili
8. **Negatif**: İstenmeyen öğeleri seçin
9. **Kaydet**: "Preset Kaydet" ile ayarları saklayın
10. **Oluştur**: 4 farklı formatta prompt alın

## Format Örnekleri

### TOON Format
[Token-Oriented Object Notation](https://github.com/toon-format/toon) - YAML-benzeri indentation ile CSV-tarzı tablo formatı.

```
prompt:
  type: portrait
  subject: "A young woman with flowing red hair"
  style: cinematic
  mood: dramatic
  colors: warm tones
  lighting: golden hour
  quality: ultra detailed
negative[6]: blurry,low quality,distorted,deformed,ugly,watermark
```

### TONL Format
[Token-Optimized Notation Language](https://github.com/tonl-dev/tonl) - Şema-farkındalıklı kompakt serileştirme.

```
#version 1.0
prompt{type:str,subject:str,style:str,mood:str,colors:str,lighting:str,quality:str}:
  portrait, "A young woman with flowing red hair", cinematic, dramatic, warm tones, golden hour, ultra detailed
negative[6]: blurry, low quality, distorted, deformed, ugly, watermark
```

### JSON Format
API entegrasyonları için standart format.

```json
{
  "prompt": {
    "subject": {
      "type": "portrait",
      "description": "A young woman with flowing red hair"
    },
    "style": {
      "artistic_style": "cinematic",
      "mood": "dramatic",
      "color_palette": "warm tones"
    },
    "technical": {
      "lighting": "golden hour"
    },
    "quality": "ultra detailed"
  },
  "negative_prompt": "blurry, low quality..."
}
```

### Natural Format
Direkt kullanıma hazır virgülle ayrılmış format.

```
A young woman with flowing red hair, cinematic style, portrait photography, 
golden hour, dramatic atmosphere, warm tones color palette, ultra detailed

--negative--
blurry, low quality, distorted, deformed, ugly, watermark
```

## 🗂️ Proje Yapısı

```
photoprompt/
├── index.html          # Ana uygulama (HTML + CSS + JS)
├── README.md           # Dokümantasyon
└── example prompts.md  # Örnek promptlar
```

## 💡 Parametre Kategorileri

| Kategori | Parametreler |
|----------|-------------|
| **Konu** | Tip, Stil, Açıklama |
| **Dönem** | Era, Günün Zamanı, Mevsim |
| **Ortam** | Mekan, Ortam, Kalabalık, Hava, Mimari |
| **Atmosfer** | Ruh Hali, Renk Paleti, Aydınlatma |
| **Karakter** | Kıyafet, Yaş, Saç, İfade, Poz |
| **Teknik** | Kamera, Açı, Ayarlar, Kompozisyon, Film, Oran |
| **Kalite** | Modifikatörler, Render Stili, Detaylar |

## 🔧 Teknolojiler

- **Frontend**: Vanilla JavaScript (ES6+)
- **Styling**: TailwindCSS + Custom CSS
- **Fonts**: Inter, JetBrains Mono
- **Storage**: localStorage (presets, settings)

## 📄 Lisans

MIT License

## 🙏 Krediler

- **TOON Format**: [toon-format/toon](https://github.com/toon-format/toon)
- **TONL Format**: [tonl-dev/tonl](https://github.com/tonl-dev/tonl)
- **Fonts**: [Google Fonts](https://fonts.google.com/)
- **CSS Framework**: [TailwindCSS](https://tailwindcss.com/)

---

Made with ❤️ by [@niyoseris](https://twitter.com/niyoseris)
