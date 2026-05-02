# Happy Living

**SRG Happy Living** — a SEBI-registered investment advisory marketing site built with React, Vite, TypeScript and Tailwind CSS v4.

## Tech stack

- **React 19** + **TypeScript**
- **Vite** for dev server and bundling
- **Tailwind CSS v4** via `@tailwindcss/vite` with `@theme` design tokens
- **React Router v7** for multi-page routing
- **ESLint** + `typescript-eslint`

## Pages

- `/` — Home (hero, advisory preview, philosophy preview, testimonials, CTA)
- `/about` — Company story, principles, team
- `/services` — Detailed service offerings and process
- `/disclosures` — SEBI regulatory documents and information
- `/contact` — Contact form, office details, map

## Local development

```bash
npm install
npm run dev      # start Vite dev server
npm run build    # production build (tsc -b && vite build)
npm run lint     # eslint .
npm run preview  # preview the production build
```

## Project structure

```
src/
  components/        # Header, Footer, Hero, TrustStrip, Testimonials, CtaBanner, etc.
    ui/              # Icon set, Button, buttonStyles
  pages/             # HomePage, AboutPage, ServicesPage, DisclosuresPage, ContactPage
  App.tsx            # Router
  main.tsx           # Entry
  index.css          # Tailwind import + design tokens + global utilities
public/
  logo.png           # Brand mark
```

## Design tokens

Defined in `src/index.css` under `@theme`:

- Brand colors: `navy`, `navy-dark`, `gold`, `success`
- Surfaces: `surface`, `surface-card`, `surface-muted`, `surface-sunk`
- Ink scale: `ink`, `ink-muted`, `ink-subtle`
- Radii: `--radius-card`, `--radius-button`
- Shadows: `--shadow-card`, `--shadow-card-hover`, `--shadow-elevated`

## Accessibility

- WCAG 2.2 AA targeted contrast and tap targets (≥44px)
- Semantic landmarks (`header`, `main`, `footer`, `section[aria-labelledby]`)
- Visible focus rings (`focus-ring-gold` utility)
- `prefers-reduced-motion` honored
