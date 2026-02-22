# Terminal Portfolio

> **A state-of-the-art developer portfolio** built with Nuxt 3 and Tailwind CSS. Showcases full-stack expertise using a highly customizable, purely JSON-driven dark terminal aesthetic.

## 🚀 Quick Start

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## 📋 Table of Contents

- [Features](#-features)
- [Tech Stack](#-tech-stack)
- [Project Structure](#-project-structure)
- [Configuration](#-configuration)
- [Customization Guide](#-customization-guide)
- [Components](#-components)
- [Deployment](#-deployment)
- [License](#-license)

---

## ✨ Features

### Content Management
- **Single Source of Truth** - All content managed via one `portfolio.json` file (no hardcoding).
- **Type Safety** - Full TypeScript types for the configuration framework.
- **Dynamic Pages** - Portfolio and Assignment details generated entirely on-the-fly from config.

### Professional Design
- **Terminal Aesthetic** - Dark theme (`#1A1A1A`), monospace fonts, and CLI command headers.
- **Glassmorphism Accents** - Subtle frosted text effects with backdrop blur.
- **Micro-interactions** - Hover effects, scale transforms, smooth UI transitions.

### Icon System
- **45+ Heroicons** - Complete SVG icon library for UI elements.
- **100+ Tech Logos** - Actual technology logos via Iconify (Flutter, TypeScript, Go, etc.).
- **Zero Emojis** - Professional iconography throughout the terminal design.

---

## 🛠️ Tech Stack

| Category | Technologies |
|----------|-------------|
| **Framework** | Nuxt 3 (Vue 3 with SSR) |
| **Language** | TypeScript |
| **Styling** | Tailwind CSS |
| **Icons** | Heroicons + Iconify |
| **Deployment** | Cloudflare Pages / Vercel |

---

## 📁 Project Structure

```
Portfolio/
├── app/                          # Source directory (Nuxt 4 standard)
│   ├── assets/
│   │   └── css/
│   │       └── main.css         # Global styles
│   ├── components/
│   │   ├── Navigation.vue       # Main navigation bar (Terminal Header)
│   │   └── UI/
│   │       ├── Icon.vue         # Heroicons wrapper
│   │       └── TechIcon.vue     # Iconify tech logos
│   ├── composables/
│   │   └── useConfig.ts         # JSON config loader
│   ├── layouts/
│   │   └── default.vue          # Default layout with navigation
│   ├── pages/
│   │   ├── index.vue            # Homepage (Terminal Hero)
│   │   ├── about.vue            # Consolidated skills, experience, and profile
│   │   ├── portfolio.vue        # Projects showcase
│   │   ├── contact.vue          # Contact form & socials
│   │   └── assignments/
│   │       ├── index.vue        # List of all assignments
│   │       └── [id].vue         # Individual assignment detail (Dynamic)
│   └── types/
│       └── config.ts            # TypeScript definitions
│
├── public/
│   ├── grid.svg                 # Background grid pattern
│   ├── favicon.ico              # Site favicon
│   ├── assets/
│   │   ├── avatar.png           # Profile avatar
│   │   ├── assignments/         # Assignment media
│   │   │   ├── assignment-1.png
│   │   │   ├── assignment-2-tor.pdf
│   │   │   ├── assignment-2.png
│   │   │   ├── assignment-3-infographic.png
│   │   │   ├── assignment-3.png
│   │   │   ├── assignment-4-video.mp4
│   │   │   └── assignment-4.png
│   │   ├── projects/            # Project thumbnails
│   │   │   ├── placeholder-1.png
│   │   │   ├── placeholder-2.png
│   │   │   └── placeholder-3.png
│   │   └── orgs/                # Organization logos
│   │       └── english-club-hs3.png
│   └── config/                  
│       └── portfolio.json       # 📝 MASTER DATA REGISTRY: EDIT THIS ONLY
│
├── nuxt.config.ts               # Nuxt configuration
├── tailwind.config.ts           # Tailwind + theme config
└── package.json                 # Dependencies
```

---

## ⚙️ Configuration

### Master Configuration File

**All site content** is managed through a single JSON file located at `public/config/portfolio.json`. You do not need to edit any Vue or HTML files to update your name, projects, or theme.

```json
{
  "profile": {
    "name": "Your Name",
    "title": "Your Title",
    "tagline": "Your Tagline",
    "bio": "Your bio...",
    "avatar": "/assets/avatar.png",
    "contact": { ... }
  },
  "skills": { ... },
  "experience": [ ... ],
  "achievements": [ ... ],
  "projects": [ ... ],
  "organizations": [ ... ],
  "assignments": [ ... ],
  "theme": {
    "colors": {
      "primary": "#10b981",
      ...
    }
  }
}
```

---

## 🎨 Customization Guide

### Changing Theme Colors

1. **Edit `public/config/portfolio.json`**:
   Update the `"theme"` block at the bottom of the file with your desired hex colors:
   ```json
   "theme": {
     "colors": {
       "primary": "#your-color",
       "secondary": "#your-color"
     }
   }
   ```

2. **Update `tailwind.config.ts`**:
   To ensure Tailwind builds the CSS variables correctly, match your colors on lines 15-26 of `tailwind.config.ts`:
   ```typescript
   colors: {
     primary: '#your-color',
     secondary: '#your-color',
     // ... other colors
   }
   ```

### Adding New Icons

#### For UI Icons (Heroicons):
1. Import the new icon in `app/components/UI/Icon.vue`.
2. Add it to the `iconMap` object.
3. Use it in the JSON config directly using its key name.

#### For Tech Logos (Iconify):
1. Find standard tech icons at [Iconify](https://icon-sets.iconify.design/).
2. Add them to `techIconMap` in `app/components/UI/TechIcon.vue`.
3. Use them in your `portfolio.json` skills tracking.

---

## 🧩 Components

### Icon.vue
Heroicons SVG wrapper with 45+ icons used as UI decorators.
**Usage:**
```vue
<UIIcon name="trophy" size="lg" class="text-primary" />
```

### TechIcon.vue
Iconify technology logos with 100+ tech language variants.
**Usage:**
```vue
<UITechIcon name="Flutter" :size="64" class="mx-auto" />
```

### Navigation.vue
Auto-imported terminal styling block. Generates dynamic "directories" based on the Nuxt routing links.

---

## 🚀 Deployment

### Cloudflare Pages (Recommended)

1. **Connect GitHub Repository:**
   - Go to [Cloudflare Pages](https://pages.cloudflare.com/)
   - Click "Create a project" → "Connect to Git"
   - Select your repository

2. **Build Configuration:**
   ```bash
   Build command: npm run build
   Build output: dist
   Node version: 18 or higher
   ```

3. **Environment Variables:** None required.

### Alternative Deployments

**Vercel**
```bash
npx vercel --prod
```

**Netlify**
```bash
npx netlify deploy --prod
```

---

## 📝 License

This portfolio is offered as an open-source template. Feel free to clone, edit, or customize entirely with your own branding.

Made with ❤️
