# Kemal Ardian - Portfolio Website

> **State-of-the-art personal portfolio** showcasing full-stack expertise with 3D animations, interactive elements, and modern design.

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
- [Troubleshooting](#-troubleshooting)

---

## ✨ Features

### Interactive 3D Graphics
- **Particle Background** - 3,000 interactive particles (Three.js) that follow mouse movement
- **60fps Performance** - Optimized rendering with mobile support (reduces to 1,500 particles)

### Advanced Animations
- **GSAP Scroll Animations** - Smooth reveal effects triggered by scroll position
- **Card Stagger Effects** - Sequential animations with 80ms delay
- **Heading Reveals** - Automatic fade-in for all section headings

### Professional Design
- **Emerald Green Theme** - Distinctive color palette (not generic AI blue/purple)
- **Glassmorphism** - Frosted glass effects with backdrop blur
- **Micro-interactions** - Hover effects, scale transforms, smooth transitions

### Icon System
- **45+ Heroicons** - Complete SVG icon library for UI elements
- **100+ Tech Logos** - Actual technology logos via Iconify (Flutter, TypeScript, etc.)
- **Zero Emojis** - Professional iconography throughout

### Content Management
- **JSON Configuration** - All content managed via JSON files (no hardcoding)
- **Type Safety** - Full TypeScript types for all config files
- **Dynamic Pages** - Assignment details generated from config

---

## 🛠️ Tech Stack

| Category | Technologies |
|----------|-------------|
| **Framework** | Nuxt 3 (Vue 3 with SSR) |
| **Language** | TypeScript |
| **Styling** | Tailwind CSS |
| **3D Graphics** | Three.js |
| **Animations** | GSAP (GreenSock) |
| **Icons** | Heroicons + Iconify |
| **Deployment** | Cloudflare Pages |

---

## 📁 Project Structure

```
Portfolio/
├── app/                          # Source directory (Nuxt 4 standard)
│   ├── assets/
│   │   └── css/
│   │       └── main.css         # Global styles
│   ├── components/
│   │   ├── Navigation.vue       # Main navigation bar
│   │   ├── ParticleBackground.vue  # 3D particle system
│   │   └── UI/
│   │       ├── Icon.vue         # Heroicons wrapper (45+ icons)
│   │       └── TechIcon.vue     # Iconify tech logos (100+)
│   ├── composables/
│   │   ├── useConfig.ts         # JSON config loader
│   │   └── useScrollAnimations.ts  # GSAP animations
│   ├── layouts/
│   │   └── default.vue          # Default layout with navigation
│   ├── pages/
│   │   ├── index.vue            # Homepage (hero + 3D particles)
│   │   ├── profile.vue          # About/education/experience
│   │   ├── skills.vue           # Tech stack with logos
│   │   ├── achievements.vue     # Awards and competitions
│   │   ├── portfolio.vue        # Projects showcase
│   │   ├── organizations.vue    # Organizational experience
│   │   ├── contact.vue          # Contact form
│   │   ├── assignments.vue      # All assignments list
│   │   └── assignments/
│   │       └── [id].vue         # Individual assignment detail
│   └── types/
│       └── config.ts            # TypeScript definitions
│
├── public/
│   ├── assets/
│   │   └── avatar.png           # Profile avatar
│   └── config/                  # 📝 EDIT THESE FOR CUSTOMIZATION
│       ├── profile.json         # Personal info, bio, contact
│       ├── skills.json          # Languages, frameworks, concepts
│       ├── achievements.json    # Awards and competitions
│       ├── projects.json        # Portfolio projects
│       ├── education.json       # Educational background
│       ├── experience.json      # Work experience
│       ├── organizations.json   # Organizational involvement
│       ├── assignments.json     # Assignment metadata
│       └── theme.json           # Color scheme configuration
│
├── nuxt.config.ts               # Nuxt configuration
├── tailwind.config.ts           # Tailwind + theme config
├── package.json                 # Dependencies
└── README.md                    # This file
```

---

## ⚙️ Configuration

### Core Configuration Files

All content is managed through JSON files in `public/config/`. No code editing required!

#### 1. **profile.json** - Personal Information

```json
{
  "name": "Your Name",
  "title": "Your Title",
  "tagline": "Your Tagline",
  "bio": "Your bio...",
  "avatar": "/assets/avatar.png",
  "contact": {
    "email": "you@example.com",
    "phone": "+123456789",
    "location": "City, Country",
    "website": "yoursite.com"
  },
  "socialLinks": [
    { "platform": "GitHub", "url": "https://github.com/...", "icon": "github" },
    { "platform": "LinkedIn", "url": "https://linkedin.com/...", "icon": "linkedin" }
  ]
}
```

#### 2. **skills.json** - Technical Skills

```json
{
  "languages": [
    { "name": "Dart", "proficiency": 95, "icon": "dart" },
    { "name": "TypeScript", "proficiency": 90, "icon": "typescript" }
  ],
  "frameworks": [
    { "name": "Flutter", "proficiency": 95, "icon": "flutter" }
  ],
  "concepts": [
    { "name": "Clean Architecture", "proficiency": 90, "icon": "architecture" }
  ]
}
```

**Available Tech Icons** (100+ supported via Iconify):
- **Languages**: Dart, TypeScript, JavaScript, Go, Python, Java, Kotlin, Swift, C++, C#, Rust, Ruby, PHP, SQL, HTML, CSS, WebAssembly, etc.
- **Frameworks**: Flutter, React, Vue, Angular, Svelte, Next.js, Nuxt, Node.js, Deno, NestJS, Django, Laravel, Spring, etc.
- **Databases**: Firebase, PostgreSQL, MySQL, MongoDB, Redis, SQLite, Supabase
- **Cloud**: AWS, Google Cloud, Azure, Docker, Kubernetes, Terraform, Cloudflare, Vercel
- **Tools**: Git, GitHub, GitLab, VS Code, Figma, Postman, Nginx

See `app/components/UI/TechIcon.vue` for full list.

#### 3. **achievements.json** - Awards

```json
[
  {
    "id": 1,
    "title": "Award Title",
    "organization": "Organization Name",
    "year": "2024",
    "rank": "1st Place",
    "description": "Achievement description",
    "icon": "trophy"
  }
]
```

**Available Achievement Icons**:
- `trophy` - Gold trophy (1st place, championships)
- `medal-silver` - Silver medal (2nd place)
- `medal-bronze` - Bronze medal (3rd place)
- `star` - Star (finalist, honorable mention)
- `code-bracket` - Code bracket (coding competitions)
- `academic-cap` - Academic cap (academic awards)

#### 4. **projects.json** - Portfolio

```json
[
  {
    "id": 1,
    "title": "Project Name",
    "category": "Mobile App",
    "description": "Project description...",
    "techStack": ["Flutter", "Firebase", "Node.js"],
    "features": ["Feature 1", "Feature 2"],
    "nda": true
  }
]
```

#### 5. **theme.json** - Color Scheme

```json
{
  "colors": {
    "primary": "#10b981",      // Main brand color (emerald green)
    "secondary": "#059669",    // Secondary accent
    "accent": "#6ee7b7",       // Highlight color
    "background": {
      "primary": "#0a0a0a",    // True black background
      "secondary": "#171717",  // Card backgrounds
      "tertiary": "#262626"    // Hover states
    },
    "text": {
      "primary": "#f5f5f5",    // Main text (off-white)
      "secondary": "#a3a3a3",  // Secondary text (gray)
      "muted": "#737373"       // Tertiary text (dark gray)
    },
    "border": "#404040",       // Border color
    "success": "#22c55e",      // Success states
    "warning": "#f59e0b",      // Warning states  
    "error": "#ef4444"         // Error states
  },
  "effects": {
    "glowIntensity": 0.5,
    "blurAmount": 12,
    "animationSpeed": 0.3
  }
}
```

---

## 🎨 Customization Guide

### Changing Theme Colors

1. **Edit `public/config/theme.json`:**
   ```json
   {
     "colors": {
       "primary": "#your-color",
       "secondary": "#your-color"
     }
   }
   ```

2. **Update `tailwind.config.ts`** (lines 15-26):
   ```typescript
   colors: {
     primary: '#your-color',
     secondary: '#your-color',
     // ... other colors
   }
   ```

3. **Update glow effects** in `tailwind.config.ts` (lines 54-57, 79-83) to match your primary color.

### Adding New Icons

#### For UI Icons (Heroicons):
1. Import icon in `app/components/UI/Icon.vue`
2. Add to `iconMap` object
3. Use with: `<UIIcon name="icon-name" size="md" />`

#### For Tech Logos (Iconify):
1. Find icon at [Iconify Icon Sets](https://icon-sets.iconify.design/)
2. Add to `techIconMap` in `app/components/UI/TechIcon.vue`
3. Use with: `<UITechIcon name="Flutter" :size="64" />`

### Customizing Content

**All content is in `public/config/*.json` files:**

| File | Purpose | Update Frequency |
|------|---------|------------------|
| `profile.json` | Bio, contact info | Once (initial setup) |
| `skills.json` | Tech stack | Quarterly (as you learn) |
| `achievements.json` | Awards | When you win competitions |
| `projects.json` | Portfolio items | Per project completion |
| `experience.json` | Work history | When changing jobs |
| `education.json` | Degrees | Rarely |
| `assignments.json` | Assignment metadata | Per assignment |

### Modifying Particle Effect

Edit `app/components/ParticleBackground.vue`:

```typescript
// Particle count (line 33)
const particleCount = window.innerWidth < 768 ? 1500 : 3000

// Particle colors (lines 36-37)
const color1 = new THREE.Color(0x10b981) // Your primary color
const color2 = new THREE.Color(0x059669) // Your secondary color

// Particle size (line 54)
size: 0.5, // Adjust particle size

// Rotation speed (lines 73-74)
particles.rotation.x += 0.0002 // Adjust rotation speed
particles.rotation.y += 0.0003
```

---

## 🧩 Components

### ParticleBackground.vue
3D particle system using Three.js.

**Props:** None (auto-configures based on viewport)

**Usage:**
```vue
<ParticleBackground />
```

### Icon.vue
Heroicons SVG wrapper with 45+ icons.

**Props:**
- `name` (string, required) - Icon identifier
- `size` ('sm' | 'md' | 'lg' | 'xl' | '2xl') - Icon size
- `class` (string) - Additional CSS classes

**Usage:**
```vue
<UIIcon name="trophy" size="lg" class="text-primary" />
```

### TechIcon.vue
Iconify technology logos with 100+ tech icons.

**Props:**
- `name` (string, required) - Technology name
- `size` (number, default: 48) - Icon size in pixels
- `class` (string) - Additional CSS classes

**Usage:**
```vue
<UITechIcon name="Flutter" :size="64" class="mx-auto" />
```

### Navigation.vue
Main navigation bar with responsive mobile menu.

**Auto-imported** - No manual import needed.

---

## 🚀 Deployment

### Cloudflare Pages (Recommended)

1. **Connect GitHub Repository:**
   - Go to [Cloudflare Pages](https://pages.cloudflare.com/)
   - Click "Create a project" → "Connect to Git"
   - Select your repository

2. **Build Configuration:**
   ```
   Build command: npm run build
   Build output: .output/public
   Node version: 18 or higher
   ```

3. **Environment Variables:** None required

4. **Custom Domain:** Add in Cloudflare Pages settings

### Alternative: Vercel

```bash
npx vercel --prod
```

### Alternative: Netlify

```bash
npx netlify deploy --prod
```

---

## 🐛 Troubleshooting

### Icons Not Showing

**Problem:** UIIcon or UITechIcon components not rendering.

**Solutions:**
1. Restart dev server after adding new icons
2. Check `nuxt.config.ts` has UI components path configured
3. Verify icon name matches `iconMap` in Icon.vue or TechIcon.vue

```bash
# Restart dev server
Ctrl+C
npm run dev
```

### 3D Particles Not Rendering

**Problem:** Particle background is blank or not visible.

**Solutions:**
1. Check browser console for Three.js errors
2. Ensure WebGL is supported: Visit [WebGL Test](https://get.webgl.org/)
3. Verify `ClientOnly` wrapper is present in ParticleBackground.vue
4. Check z-index is set correctly (should be 0 or negative)

### Animations Hiding Content

**Problem:** GSAP animations make content invisible.

**Solutions:**
1. Verify `autoAlpha` is used instead of `opacity` in useScrollAnimations.ts
2. Check initial states don't set opacity to 0
3. Disable animations temporarily to debug

### Build Errors

**Problem:** `npm run build` fails.

**Common Fixes:**
```bash
# Clear cache and reinstall
rm -rf node_modules .nuxt
npm install

# Type check
npm run typecheck

# Build with verbose output
npm run build -- --verbose
```

### Performance Issues

**Problem:** Animations are laggy or stuttering.

**Solutions:**
1. Reduce particle count in ParticleBackground.vue (line 33)
2. Disable GSAP animations on older devices
3. Check Chrome DevTools Performance tab

```typescript
// Reduce particles for all devices
const particleCount = 1000 // Instead of 3000
```

---

## 📝 License

This portfolio is a personal project. Feel free to use as a template but please customize with your own content and branding.

---

## 🙏 Credits

- **Heroicons** - MIT License - [https://heroicons.com/](https://heroicons.com/)
- **Iconify** - Multiple licenses - [https://iconify.design/](https://iconify.design/)
- **Three.js** - MIT License - [https://threejs.org/](https://threejs.org/)
- **GSAP** - Standard License - [https://greensock.com/](https://greensock.com/)
- **Tailwind CSS** - MIT License - [https://tailwindcss.com/](https://tailwindcss.com/)

---


Made with ❤️ by Kemal Ardian
