# Photo Prompt Generator

LLM Image Generation için detaylı prompt hazırlama aracı.

**Yapımcı:** [@niyoseris](https://twitter.com/niyoseris)

## Özellikler

- 🌍 **Çoklu Dil Desteği**: Türkçe ve İngilizce arayüz (promptlar her zaman İngilizce)
- 📝 **Çoklu Format Desteği**:
  - **[TOON](https://github.com/toon-format/toon)**: Token-Oriented Object Notation - LLM için optimize edilmiş kompakt format
  - **[TONL](https://github.com/tonl-dev/tonl)**: Token-Optimized Notation Language - Şema-farkındalıklı veri formatı
  - **JSON**: API entegrasyonları için standart format
  - **Natural**: Virgülle ayrılmış doğal dil formatı
- 🎨 **Hazır Preset'ler**: Sinematik, Portre gibi hazır şablonlar
- 📋 **Tek Tıkla Kopyalama**: Oluşturulan prompt'ları hızlıca kopyalama
- 🚫 **Negatif Prompt**: İstenmeyen öğeleri belirleme
- ⚡ **Vanilla JS**: Hiçbir backend gerektirmez, tamamen statik

## Kullanım

Sadece `index.html` dosyasını tarayıcınızda açın veya herhangi bir statik sunucu ile çalıştırın:

```bash
# Python ile
python -m http.server 5001

# Node.js ile
npx serve -p 5001

# Veya doğrudan dosyayı açın
open index.html
```

## Nasıl Kullanılır

1. **Konu Ayarları**: Konu tipi, stil ve detaylı açıklama girin
2. **Atmosfer**: Ruh hali, renk paleti ve aydınlatma seçin
3. **Teknik Ayarlar**: Kamera açısı, ayarları ve kompozisyon belirleyin
4. **Kalite**: Kalite modifikatörleri ve ek detaylar ekleyin
5. **Prompt Oluştur**: Butona tıklayın ve 4 farklı formatta çıktı alın

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

## Lisans

MIT License

## Krediler

- **TOON Format**: [toon-format/toon](https://github.com/toon-format/toon)
- **TONL Format**: [tonl-dev/tonl](https://github.com/tonl-dev/tonl)
