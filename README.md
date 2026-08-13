# Arman Danesh — Portfolio

Personal portfolio of **Arman Danesh**, Front-End Developer.  
Built with **Next.js 15** (App Router), **TypeScript**, **Tailwind CSS**, **Framer Motion**, and **react-icons**.

---

## Quick links

| | |
|:--|:--|
| **Live resume** | [https://my-resume.armandaneshwork.workers.dev/](https://my-resume.armandaneshwork.workers.dev/) |
| **API documentation** | [https://arman-danesh.github.io/my-resume/](https://arman-danesh.github.io/my-resume/) |
| **Source code** | [github.com/arman-danesh/my-resume](https://github.com/arman-danesh/my-resume) |

```text
Resume  →  https://my-resume.armandaneshwork.workers.dev/
Docs    →  https://arman-danesh.github.io/my-resume/
GitHub  →  https://github.com/arman-danesh/my-resume
```

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
| API docs | TypeDoc (dark theme) published on every release to `gh-pages` |

---

## Tech stack

- **Framework:** Next.js 15 (App Router)
- **Language:** TypeScript (TSDoc / TypeDoc)
- **UI:** Tailwind CSS, custom gold/dark theme
- **Animation:** Framer Motion
- **Icons:** react-icons
- **Hosting:** Cloudflare Workers (`worker.js` + static `out/`)

---

## Project structure

```
my-resume/
├── app/                      # Next.js App Router
├── components/               # UI sections (TSDoc)
├── lib/                      # data, types, LanguageContext (TSDoc)
├── public/                   # static assets + fonts
├── worker.js                 # Cloudflare Worker (serves ASSETS)
├── wrangler.jsonc
├── typedoc.json              # TypeDoc config (dark theme)
├── docs-theme.css            # Custom dark styles for TypeDoc
├── .github/workflows/docs.yml
└── package.json
```

---

## Local development

```bash
npm install
npm run dev          # http://localhost:3000
npm run build        # static export → out/
npm run preview      # wrangler dev
npm run deploy       # build + wrangler deploy
```

---

## API documentation (TypeDoc)

Comments use **TSDoc** (`@param`, `@returns`, `@module`, `@packageDocumentation`).
Generated site uses a **dark theme** (`docs-theme.css`).

### Live docs

**https://arman-danesh.github.io/my-resume/**

### Generate locally

```bash
npm run docs         # writes HTML to ./docs
npm run docs:serve   # preview the docs site
```

### Publish on every release

Workflow: [`.github/workflows/docs.yml`](.github/workflows/docs.yml)

| Trigger | Action |
|---------|--------|
| GitHub **Release** published | Build TypeDoc → push to **`gh-pages`** branch |
| Git tag `v*` | Same |
| **Actions → Docs → Run workflow** | Manual |

After the first successful run, enable **Settings → Pages → Deploy from branch `gh-pages` / root**.

---

## Cloudflare deploy

| Field | Value |
|--------|--------|
| Build command | `npm run build` |
| Deploy command | `npx wrangler deploy` |

```text
npm run build  →  out/
wrangler deploy → worker.js + out/ as ASSETS
```

**Live site:** [https://my-resume.armandaneshwork.workers.dev/](https://my-resume.armandaneshwork.workers.dev/)

---

## Editing content

All copy: **`lib/data.ts`** (EN + FA). Types: **`lib/types.ts`**.

---

## License

MIT © Arman Danesh

## Contact

- **Email:** [armandaneshwork@gmail.com](mailto:armandaneshwork@gmail.com)
- **Telegram:** [@ArmanDaneshWork](https://t.me/ArmanDaneshWork)
- **GitHub:** [arman-danesh](https://github.com/arman-danesh)
- **Live resume:** [my-resume.armandaneshwork.workers.dev](https://my-resume.armandaneshwork.workers.dev/)
- **API docs:** [arman-danesh.github.io/my-resume](https://arman-danesh.github.io/my-resume/)
