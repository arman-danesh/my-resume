# Arman Danesh — Portfolio

Personal portfolio of **Arman Danesh**, Front-End Developer.  
Built with **Next.js 15** (App Router), **TypeScript**, **Tailwind CSS**, **Framer Motion**, and **react-icons**.

Deployed on **Cloudflare Workers** (static assets from `out/` + thin `worker.js`).

---

## Features

| Feature | Detail |
|--------|--------|
| Bilingual | English / Persian with RTL and smooth crossfade |
| Sections | About, Info, Education, Focus areas, Contact, Skills, Experience, Services, Projects, Live links |
| Motion | Welcome intro, skill bars, circular progress, scroll-in cards |
| PWA-ready | `manifest.webmanifest` + SVG logo/favicon |
| Static export | `output: "export"` → `out/` served by Worker assets |

---

## Tech stack

- **Framework:** Next.js 15 (App Router)
- **Language:** TypeScript
- **UI:** Tailwind CSS, custom gold/dark theme
- **Animation:** Framer Motion
- **Icons:** react-icons
- **Hosting:** Cloudflare Workers (`worker.js` + static `out/`)

---

## Project structure

```
my-resume/
├── app/                    # Next.js App Router
├── components/             # UI sections
├── lib/                    # data.ts, types, LanguageContext
├── public/                 # static assets
├── worker.js               # Cloudflare Worker (serves ASSETS)
├── wrangler.jsonc          # Worker + assets config
├── next.config.ts          # output: "export"
└── package.json
```

---

## Local development

```bash
npm install
npm run dev          # http://localhost:3000
npm run build        # static export → out/
npm run preview      # wrangler dev (Worker + assets)
npm run deploy       # build + wrangler deploy
```

---

## Cloudflare deploy

1. **Build:** `npm run build` → creates `out/`
2. **Deploy:** `npx wrangler deploy`
   - Uploads `worker.js`
   - Uploads `out/` as Worker static assets (`ASSETS` binding)

### Cloudflare dashboard (Git build)

| Field | Value |
|--------|--------|
| Build command | `npm run build` |
| Deploy command | `npx wrangler deploy` |

Live Worker URL shape: `https://my-resume.<subdomain>.workers.dev`

---

## How Worker + Next work together

```text
npm run build  →  out/ (HTML, CSS, JS)
wrangler deploy → worker.js + out/ as ASSETS
request → worker.js → env.ASSETS.fetch(request)
```

This is still a **static** site. There is no Next.js server on the Worker.

---

## Editing content

All copy: **`lib/data.ts`** (EN + FA). Types: **`lib/types.ts`**.

---

## License

MIT © Arman Danesh

## Contact

- Email: armandaneshwork@gmail.com
- Telegram: @ArmanDaneshWork
- GitHub: arman-danesh
