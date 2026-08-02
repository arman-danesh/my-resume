# Arman Danesh — Portfolio (Next.js)

Modern, animated personal portfolio rebuilt with **Next.js 15**, **TypeScript**, **Tailwind CSS** and **Framer Motion**.

[![Live](https://img.shields.io/badge/Live-Demo-green)](https://arman-danesh.github.io/my-resume/)
[![LinkedIn](https://img.shields.io/badge/LinkedIn-Connect-blue)](https://www.linkedin.com/in/arman-danesh-a6aaab2bb/)
[![GitHub](https://img.shields.io/badge/GitHub-Follow-black)](https://github.com/arman-danesh)

## ✨ Features

- Next.js 15 App Router + static export (GitHub Pages ready)
- Full EN / FA bilingual support with RTL
- Smooth Framer Motion animations & welcome intro
- Animated skill bars & circular progress indicators
- Project carousel with lightbox
- Responsive dark theme with gold accent (`#DBA507`)
- Clean component architecture & TypeScript throughout

## 🛠 Tech Stack

| Layer        | Technology              |
|--------------|-------------------------|
| Framework    | Next.js 15              |
| Language     | TypeScript              |
| Styling      | Tailwind CSS            |
| Animation    | Framer Motion           |
| Icons        | Lucide React            |
| Fonts        | Poppins + Playfair Display |

## 🚀 Getting Started

```bash
# Clone
git clone https://github.com/arman-danesh/my-resume.git
cd my-resume
git checkout dev

# Install
npm install

# Develop
npm run dev

# Production build (static export → out/)
npm run build
```

Open [http://localhost:3000](http://localhost:3000).

> **Note:** Keep the existing `images/` folder at the project root (or move it under `public/images/`). The app references `/images/...`.

## 📁 Structure

```
├── app/
│   ├── layout.tsx          # Root layout + fonts + metadata
│   ├── page.tsx            # Home page
│   └── globals.css
├── components/
│   ├── Sidebar.tsx
│   ├── MainContent.tsx
│   ├── SkillBar.tsx
│   ├── CircularProgress.tsx
│   ├── ServiceCard.tsx
│   ├── ProjectCarousel.tsx
│   └── WelcomeAnimation.tsx
├── lib/
│   ├── data.ts             # All EN/FA content
│   ├── types.ts
│   └── LanguageContext.tsx
├── images/                 # Existing assets (keep this)
├── next.config.ts          # output: "export"
└── tailwind.config.ts
```

## 🌐 Deploy (GitHub Pages)

Because `output: "export"` is enabled, `npm run build` produces a static `out/` folder.

You can deploy the contents of `out/` to the `gh-pages` branch or use GitHub Actions.

## 📄 License

MIT © Arman Danesh
