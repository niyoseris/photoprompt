# 🚀 Photo Prompt Generator v3.0 Beta - Announcement

> **Open Source AI Prompt Tool** | Built by [@niyoverse](https://x.com/niyoverse)

---

## 🎉 What is Photo Prompt Generator?

Photo Prompt Generator is a **free, open-source tool** for creating detailed prompts for AI image generation (Midjourney, DALL-E, Stable Diffusion, etc.) and AI project briefs.

**🔗 GitHub:** [github.com/niyoseris/photoprompt](https://github.com/niyoseris/photoprompt)

---

## ✨ Key Features

### 📸 Photo Prompt Mode
Create detailed prompts for AI image generation with:
- Subject type & description
- Multi-person support (up to 4+ characters)
- Environment, lighting, atmosphere settings
- Camera angles, lens types, composition
- Objects & props with detailed attributes
- 100+ ready-to-use style presets

### 🤖 Project Builder Mode
Generate comprehensive project briefs for AI assistants:
- Project name & tagline
- Problem statement & target audience
- Tech stack recommendations
- Feature definitions
- Testing & security requirements

### 📁 Personal Gallery
Save and organize your prompts:
- View all your generated prompts
- Search and filter by mode
- Copy or reuse any prompt

### 📋 Lists
Organize prompts into custom collections:
- Create unlimited lists
- Add prompts from gallery
- Prompt data preserved even if original deleted

---

## 🔐 How Authentication Works

### Without Login
- ✅ Generate prompts (Photo & Project Builder)
- ✅ Copy prompts to clipboard
- ✅ Use presets
- ❌ Save prompts to gallery
- ❌ Create lists

### With Google Login
- ✅ Everything above, plus:
- ✅ Save prompts automatically
- ✅ Access personal gallery
- ✅ Create and manage lists
- ✅ Control prompt visibility (public/private)

---

## 🌍 Public vs Private Prompts

When you generate a prompt while logged in, you can choose its visibility:

### 🌍 Public Prompts
- Visible in the **public gallery** to all users
- Other users can view, copy, and add to their lists
- Great for sharing creative ideas with the community
- **Default setting** for new prompts

### 🔒 Private Prompts
- Only visible to **you** in "My Prompts"
- Hidden from the public gallery
- Perfect for personal projects or work-in-progress
- Toggle anytime from your gallery

### How to Change Visibility
1. Go to **Gallery** → **My Prompts** tab
2. Find your prompt
3. Click the visibility icon (🌍 or 🔒)
4. Visibility toggles instantly

---

## 📱 User Flow

### Flow 1: Quick Generate (No Login)

```
Home Page → Fill Form → Generate → Copy Prompt → Use in AI Tool
```

1. Open the app
2. Select subject type (Portrait, Landscape, etc.)
3. Fill in details (description, lighting, style, etc.)
4. Click **Generate**
5. Copy the output in your preferred format
6. Paste into Midjourney, DALL-E, etc.

### Flow 2: Save & Organize (With Login)

```
Login → Generate → Auto-Save → Gallery → Lists → Reuse
```

1. Click **Sign In** with Google
2. Generate prompts as usual
3. Prompts automatically saved to your gallery
4. Toggle **Public/Private** as needed
5. Go to **Gallery** to view all prompts
6. Create **Lists** to organize by project/theme
7. Click **Use** on any prompt to load it back into the generator

### Flow 3: Browse & Discover

```
Gallery → Browse Public → Copy/Add to List → Use
```

1. Visit the **Gallery** page
2. Browse public prompts from all users
3. Filter by mode (Photo, Project Builder)
4. **Copy** interesting prompts
5. **Add to List** to save for later
6. Click **Use** to load into generator and modify

---

## 📋 Lists Feature Explained

Lists help you organize prompts into collections:

### Creating a List
1. Go to **Gallery** → Click **My Lists**
2. Click **Create New List**
3. Enter a name and description
4. Click **Create**

### Adding Prompts to a List
1. Find a prompt in the gallery
2. Click **+ List** button
3. Select the list or create a new one
4. Prompt is added with a **snapshot** of its data

### Snapshot Feature
When you add a prompt to a list, we save a copy of its data. This means:
- ✅ If the original prompt is deleted, your list item **remains**
- ✅ You can still **Use** and **Copy** the saved data
- ⚠️ Shows "Original deleted" indicator if source is gone

### Using List Items
- **Use** - Load prompt data into generator for editing
- **Copy** - Copy JSON data to clipboard
- **View** - See full prompt details
- **Remove** - Remove from list (doesn't delete original)

---

## 🛠️ Technical Stack

| Component | Technology |
|-----------|------------|
| Frontend | Vanilla JS, TailwindCSS |
| Backend | Python Flask |
| Database | SQLite |
| Auth | Google OAuth 2.0 |
| Hosting | Self-hosted / Any Python host |

---

## 🐛 Beta Testing

This is a **beta release**. We need your help to improve!

### Found a Bug?
1. Go to [GitHub Issues](https://github.com/niyoseris/photoprompt/issues)
2. Click **New Issue**
3. Describe what happened
4. Include steps to reproduce

### Feature Ideas?
Open an issue with the **enhancement** label!

---

## 🚀 Getting Started

### Option 1: Use Online
*(Coming soon - hosted version)*

### Option 2: Self-Host

```bash
# Clone
git clone https://github.com/niyoseris/photoprompt.git
cd photoprompt

# Setup
python -m venv venv
source venv/bin/activate
pip install -r requirements.txt

# Configure
cp .env.example .env
# Edit .env with your Google OAuth credentials

# Run
python app.py
```

Open: `http://localhost:5001`

---

## 📣 Stay Updated

- **Twitter/X:** [@niyoverse](https://x.com/niyoverse)
- **GitHub:** [niyoseris/photoprompt](https://github.com/niyoseris/photoprompt)

---

## 📄 License

MIT License - Free to use, modify, and distribute.

---

**Thank you for testing!** 🙏

Your feedback makes this tool better for everyone.

— [@niyoverse](https://x.com/niyoverse)
