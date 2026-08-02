# Arman Danesh — Portfolio

Modern portfolio rebuilt with **Next.js 15**, **TypeScript**, **Tailwind CSS** and **Framer Motion**, based on the latest CV.

**Live:** [arman-danesh.github.io/my-resume](https://arman-danesh.github.io/my-resume/)

## Features

- Next.js 15 App Router + static export (GitHub Pages ready)
- Full EN / FA bilingual support with smooth RTL crossfade
- Experience timeline from real work history
- Skills, services, featured projects & live links
- Framer Motion intro + skill animations
- Dark theme with gold accent (`#DBA507`)

## Tech

Next.js 15 · React 19 · TypeScript · Tailwind CSS · Framer Motion · Lucide icons

## Quick start

```bash
git clone https://github.com/arman-danesh/my-resume.git
cd my-resume
git checkout dev

# Images: Next serves from public/
mkdir -p public
mv images public/images   # if images is still at repo root

npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

```bash
npm run build   # static export → out/
```

## Structure

```
app/           layout, page, globals
components/    Sidebar, MainContent, SkillBar, …
lib/           data (EN/FA), types, LanguageContext
public/images/ static assets (profile, bg, icons)
```

## Content

All copy lives in `lib/data.ts` (synced with the CV: Pariz Hamkar, Tavana, Guten Learn, Novin IC, live project URLs).

## License

MIT © Arman Danesh
