# Arman Danesh — Portfolio

Personal portfolio of **Arman Danesh**, Front-End Developer.  
Built with **Next.js 15** (App Router), **TypeScript**, **Tailwind CSS**, **Framer Motion**, and **react-icons**.

**Live:** [arman-danesh.github.io/my-resume](https://arman-danesh.github.io/my-resume/)

---

## Features

| Feature | Detail |
|--------|--------|
| Bilingual | English / Persian with RTL and smooth crossfade |
| Sections | About, Info, Education, Focus areas, Contact, Skills, Experience, Services, Projects, Live links |
| Motion | Welcome intro, skill bars, circular progress, scroll-in cards |
| PWA-ready | `manifest.webmanifest` + SVG logo/favicon |
| Static export | `output: "export"` → deploy `out/` to GitHub Pages |

---

## Tech stack

- **Framework:** Next.js 15 (App Router)
- **Language:** TypeScript
- **UI:** Tailwind CSS, custom gold/dark theme
- **Animation:** Framer Motion
- **Icons:** react-icons (Font Awesome 6)
- **Fonts:** Poppins + Playfair Display (`next/font`)

---

## Project structure

```
my-resume/
├── app/
│   ├── layout.tsx          # Root layout, fonts, SEO, PWA metadata
│   ├── page.tsx            # Home: welcome + sidebar + main
│   └── globals.css         # Tokens, scrollbar, selection
├── components/
│   ├── Sidebar.tsx         # Profile, about, info, education, contact
│   ├── MainContent.tsx     # Skills, experience, services, projects
│   ├── SkillBar.tsx        # Horizontal skill progress
│   ├── CircularProgress.tsx# Focus-area rings
│   ├── ServiceCard.tsx     # “What I offer” card
│   └── WelcomeAnimation.tsx# Intro overlay
├── lib/
│   ├── data.ts             # All EN/FA content (edit here)
│   ├── types.ts            # Shared TypeScript interfaces
│   └── LanguageContext.tsx # Locale state + toggle
├── public/
│   ├── logo.svg            # Brand mark (PWA + welcome)
│   ├── favicon.svg
│   ├── manifest.webmanifest
│   ├── bg_image.svg        # Page background
│   └── profile-image.jpg   # Sidebar photo
├── next.config.ts          # Static export settings
├── tailwind.config.ts
└── package.json
```

---

## Getting started

### Requirements

- Node.js 18+
- npm (or yarn / pnpm)

### Install & run

```bash
git clone https://github.com/arman-danesh/my-resume.git
cd my-resume
git checkout dev

npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

### Production build (static)

```bash
npm run build
# Output: out/
```

Deploy the contents of `out/` to GitHub Pages (or any static host).

---

## Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Local development server |
| `npm run build` | Static export to `out/` |
| `npm run start` | Serve production build (if not using pure static host) |
| `npm run lint` | Next.js ESLint |

---

## Editing content

All copy lives in **`lib/data.ts`**:

- `en` / `fa` objects mirror each other
- Experience, projects, skills, contact → change arrays/strings there
- Types are enforced by **`lib/types.ts`**

After editing, the UI updates automatically (no other files required for text).

---

## Design system

| Token | Value |
|-------|--------|
| Gold | `#DBA507` |
| Gold light / dark | `#F0C14B` / `#B8860B` |
| Surface | `rgba(33, 33, 40, 0.75)` |
| Background | `#0B0B0D` |

Defined in `tailwind.config.ts` and `app/globals.css`.

---

## Language switching

1. User clicks **FA** / **EN** in the sidebar.
2. `LanguageContext.toggleLanguage` runs a short fade (`isSwitching`).
3. `locale` flips; `page.tsx` sets `document.documentElement.lang` and `dir`.
4. Components read `t` from `useLanguage()` and re-render.

---

## Deployment (GitHub Pages)

1. `npm run build`
2. Publish `out/` to the `gh-pages` branch (or use Actions).
3. For project sites, set `basePath` in `next.config.ts` if the site is not at the domain root.

Current live URL assumes: `https://arman-danesh.github.io/my-resume/`

---

## License

MIT © Arman Danesh

---

## Contact

- **Email:** [armandaneshwork@gmail.com](mailto:armandaneshwork@gmail.com)
- **Telegram:** [@ArmanDaneshWork](https://t.me/ArmanDaneshWork)
- **LinkedIn:** [arman-danesh](https://www.linkedin.com/in/arman-danesh-a6aaab2bb/)
- **GitHub:** [arman-danesh](https://github.com/arman-danesh)
