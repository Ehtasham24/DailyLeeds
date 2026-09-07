# DailyLeads

Local lead generation landing page for plumbers, electricians and cleaners —
built with [Next.js](https://nextjs.org) (App Router), TypeScript, Tailwind
CSS v4, and [Framer Motion](https://www.framer.com/motion/) for scroll and
interaction animations.

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view it.

## Stack

- **Next.js 16** (App Router, Turbopack)
- **Tailwind CSS v4** — theme tokens defined in `src/app/globals.css`
- **Framer Motion** — scroll-triggered reveals, staggered grids, hero blobs,
  animated FAQ accordion, mobile nav transitions
- **lucide-react** — icons

## Structure

```
src/
  app/            Root layout, global styles, page composition
  components/     One component per landing-page section
  lib/            Shared motion variants + small utilities
```

## Scripts

- `npm run dev` — start the dev server
- `npm run build` — production build
- `npm run lint` — ESLint
