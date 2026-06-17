@AGENTS.md

# Valoni — Taxi Landing Page

## Project overview
One-page taxi service website for **Valoni** (Kosovo).
Built with Next.js 16 + Tailwind CSS v4 + TypeScript.

## Contact details (edit in `app/page.tsx` top constants)
- Phone: +383 44 403 332
- WhatsApp: +383 44 403 332

## Key files
- `app/page.tsx` — entire landing page (all content + translations)
- `app/layout.tsx` — root layout and metadata
- `app/globals.css` — global styles (Tailwind import + smooth scroll)
- `public/car.png` — Mercedes car image with transparent background
- `next.config.ts` — static export config for GitHub Pages (`basePath: /valoni`)
- `.github/workflows/deploy.yml` — auto-deploys to GitHub Pages on push to main

## Languages
Toggle between Albanian (SQ, default) and English (EN) via a fixed button top-right.
All translations live in the `t` object in `app/page.tsx`.

## Deployment
- GitHub repo: https://github.com/echodrive2/valoni
- Live URL: https://echodrive2.github.io/valoni
- Deploy is automatic on every push to `main` via GitHub Actions

## Dev
```bash
cd /Users/veton.abazi/valoni
npm run dev   # http://localhost:3000
```

## Important — static export
`next.config.ts` sets `output: "export"` and `basePath: "/valoni"`.
Do not use server-side features (API routes, server actions, dynamic rendering).
All pages must be statically renderable.
