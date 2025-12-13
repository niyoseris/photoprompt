# 📸 Photo Prompt Generator

Advanced prompt preparation tool for LLM Image Generation.

**Creator:** [@niyoseris](https://twitter.com/niyoseris)

![Photo Prompt Generator](https://img.shields.io/badge/version-3.0-blue) ![License](https://img.shields.io/badge/license-MIT-green) ![JavaScript](https://img.shields.io/badge/vanilla-JS-yellow)

## ✨ Features

### 👥 Multi-Person Support
- Add up to 4+ people/characters in a single prompt
- Individual attributes for each person (gender, ethnicity, age, hair, clothing, etc.)
- Custom value inputs for each attribute
- Automatic redundant section hiding when people are enabled

### 🎯 Objects & Props System
- Add multiple objects/props to the scene
- Detailed attributes for each object:
  - Label, Category, Location, Prominence
  - Color, Texture, Material, State
  - Micro Details (comma-separated)
- Object categories: Person, Clothing, Electronics, Furniture, Vehicle, Food/Drink, etc.

### 🔗 Semantic Relationships
- Define interactions between objects
- Examples: "Subject is holding the coffee cup", "Cat is sitting on the windowsill"
- Relationships appear in JSON and Natural prompt outputs

### 📝 Multiple Output Formats
- **[TOON](https://github.com/toon-format/toon)**: Token-Oriented Object Notation
- **[TONL](https://github.com/tonl-dev/tonl)**: Token-Optimized Notation Language  
- **JSON**: Structured format for API integrations
- **Natural**: Comma-separated natural language format

### 🎨 Contextual Sub-Options
Dynamic options based on subject type:
- **Landscape**: Terrain type, natural elements (multi-select)
- **Portrait**: Ethnicity, body type, gender
- **Architecture**: Building type, architectural style, era
- **Food**: Cuisine, food style, plating
- **Fashion**: Category, season, brand style
- **Wildlife**: Animal type, habitat, behavior
- **Product**: Product type, material, background
- **Street**: Street type, geographic region

### 💾 Preset System
- **100 Ready-to-Use Presets** in 11 categories
- **🔥 Trending Presets** - Viral styles from Twitter/X (2024-2025):
  - Studio Ghibli Style, Action Figure Box, Cyberpunk Glow-Up
  - Oil Painting, Magazine Cover, Surreal Dream
  - Anime Action, Film Noir, 3D Marble Sculpture
  - Pixar Character, Comic Book Hero, Vaporwave, Lo-Fi Album Cover
  - And 15+ more viral styles with credits to original creators
- Save your own custom presets
- Export/Import presets as JSON
- localStorage persistence

### ➕ Custom Fields
- Add custom fields to any section
- Custom fields persist in localStorage
- Appear in JSON output under their respective categories

### 🚫 Negative Prompt Management
- Tag-based negative prompt selection
- Add/remove custom tags
- Automatic session saving

### ⚡ Other Features
- Quick presets (Cinematic, Portrait, Random)
- One-click copy
- Scrollable output areas
- Fully static (no backend required)
- Modern, responsive UI
- Dark theme

## 🚀 Quick Start

```bash
# With Python
python -m http.server 5001

# With Node.js
npx serve -p 5001

# Or open directly
open index.html
```

Open in browser: `http://localhost:5001`

## 📖 How to Use

1. **Subject**: Select subject type, contextual options appear automatically
2. **People/Characters**: Enable to add detailed person descriptions
3. **Era & Time**: Period, time of day, season
4. **Environment**: Location, setting, crowd, weather
5. **Atmosphere**: Mood, color palette, lighting
6. **Character**: Clothing, age, hair, expression, pose
7. **Objects & Props**: Add objects with detailed attributes
8. **Relationships**: Define how objects interact
9. **Technical**: Camera, angle, settings, composition
10. **Quality**: Quality modifiers, render style
11. **Negative**: Select unwanted elements
12. **Save**: Save settings as preset
13. **Generate**: Get prompts in 4 different formats

## 🔎 Before vs After (Why Presets + Relationships Matter)

### Before
A simple prompt with minimal structure (harder to control scene intent):

```
A young woman with red hair, golden hour, warm tones, coffee cup
```

### After
Same idea, but with:
- A preset (style + lighting + quality defaults)
- Explicit objects
- Explicit semantic relationships (who is doing what / where)

A young woman with flowing red hair, cinematic style, portrait photography,
golden hour, dramatic atmosphere, warm tones, with White ceramic Coffee Cup
in the foreground, Subject is holding the coffee cup, Steam creates dreamy atmosphere

## Format Examples

### JSON Format (with Objects & Relationships)

```json
{
  "prompt": {
    "subject": {
      "type": "portrait",
      "description": "A young woman with flowing red hair"
    },
    "atmosphere": {
      "mood": "dramatic",
      "color_palette": "warm tones",
      "lighting": "golden hour"
    }
  },
  "objects": [
    {
      "label": "Coffee Cup",
      "category": "Food/Drink",
      "location": "Foreground",
      "prominence": "Primary Focus",
      "visual_attributes": {
        "color": "White ceramic",
        "texture": "Smooth, glossy",
        "material": "Porcelain",
        "state": "Hot, steaming"
      },
      "micro_details": ["Steam rising", "condensation visible"]
    }
  ],
  "semantic_relationships": [
    "Subject is holding the coffee cup",
    "Steam creates dreamy atmosphere"
  ],
  "negative_prompt": ["blurry", "low quality", "distorted"]
}
```

### TOON Format
[Token-Oriented Object Notation](https://github.com/toon-format/toon) - YAML-like indentation with CSV-style tabular arrays.

```
prompt:
  type: portrait
  subject: "A young woman with flowing red hair"
  style: cinematic
  mood: dramatic
  lighting: golden hour
negative[6]: blurry,low quality,distorted,deformed,ugly,watermark
```

### Natural Format
Ready-to-use comma-separated format.

```
A young woman with flowing red hair, cinematic style, portrait photography, 
golden hour, dramatic atmosphere, warm tones, with White ceramic Coffee Cup 
in the foreground, Subject is holding the coffee cup

--negative--
blurry, low quality, distorted, deformed, ugly, watermark
```

## 🧾 JSON Cheat-Sheet (Most Useful Fields)

These are the fields most people use when integrating the generator output into other tools.

| Field | Type | What it does | Example |
|------|------|-------------|---------|
| `prompt.subject.type` | string | High-level subject category (drives contextual options) | `"portrait"` |
| `prompt.subject.description` | string | Main subject text | `"A young woman with flowing red hair"` |
| `prompt.subject.style` | string | Overall style preset / rendering style | `"cinematic"` |
| `prompt.atmosphere.mood` | string | Mood / vibe | `"dramatic"` |
| `prompt.atmosphere.lighting` | string | Lighting intent | `"golden hour"` |
| `prompt.environment.location` | string | Where the scene is | `"cozy cafe"` |
| `prompt.era.period` | string | Historical period / era | `"1980s"` |
| `prompt.technical.aspect_ratio` | string | Framing ratio | `"3:2"` |
| `prompt.persons[]` | array | Multi-person descriptions (when enabled) | `[{"person":1,"gender":"female"}]` |
| `objects[]` | array | Structured scene objects/props | `[{"label":"Coffee Cup","location":"Foreground"}]` |
| `semantic_relationships[]` | array | Relationship strings (interaction/spatial intent) | `["Subject is holding the coffee cup"]` |
| `negative_prompt[]` | array | Unwanted elements | `["blurry","watermark"]` |
| `metadata.format_version` | string | Output format version for your parser | `"2.0"` |

## 🗂️ Project Structure

```
photoprompt/
├── index.html          # Main application (HTML + CSS + JS)
├── presets.js          # Default preset definitions
├── favicon.svg         # App icon
├── README.md           # Documentation
└── example prompts.md  # Example prompts
```

## 💡 Parameter Categories

| Category | Parameters |
|----------|------------|
| **Subject** | Type, Style, Description, Contextual options |
| **People** | Gender, Ethnicity, Age, Body Type, Hair, Clothing, Accessories |
| **Era** | Period, Time of Day, Season |
| **Environment** | Location, Setting, Crowd, Weather, Architecture |
| **Atmosphere** | Mood, Color Palette, Lighting |
| **Objects** | Label, Category, Location, Prominence, Visual Attributes, Details |
| **Relationships** | Object interactions and spatial relationships |
| **Technical** | Camera, Angle, Settings, Composition, Film, Aspect Ratio |
| **Quality** | Modifiers, Render Style, Additional Details |

## 🔧 Technologies

- **Frontend**: Vanilla JavaScript (ES6+)
- **Styling**: TailwindCSS + Custom CSS
- **Fonts**: Inter, JetBrains Mono
- **Storage**: localStorage (presets, custom fields, settings)

## 📄 License

MIT License

## 🙏 Credits

- **TOON Format**: [toon-format/toon](https://github.com/toon-format/toon)
- **TONL Format**: [tonl-dev/tonl](https://github.com/tonl-dev/tonl)
- **Fonts**: [Google Fonts](https://fonts.google.com/)
- **CSS Framework**: [TailwindCSS](https://tailwindcss.com/)

### 🔥 Trending Presets Sources
- [@godofprompt](https://x.com/godofprompt) - ChatGPT Image Mastery Guide
- [@JoshDance](https://x.com/JoshDance) - Ghibli Style Tutorial
- [@patife](https://x.com/patife) - Action Figure Trend
- [@heyBarsee](https://x.com/heyBarsee) - AI Image Examples
- [@techhalla](https://x.com/techhalla) - Prompt Collections
- [LightX Editor](https://lightxeditor.com) - AI Photo Editing Trends
- [FelloAI](https://felloai.com) - AI Image Generation Guide

---

Made with ❤️ by [@niyoseris](https://twitter.com/niyoseris)
