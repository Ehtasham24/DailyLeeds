# DailyLeads

Local lead generation landing page for plumbers, electricians and cleaners —
built with [Next.js](https://nextjs.org) (App Router), TypeScript, Tailwind
CSS v4, and [Framer Motion](https://www.framer.com/motion/) for scroll and
interaction animations.

**Live:** https://ehtasham24.github.io/DailyLeeds/

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view it.

## Contact form setup

The site is a static export (no server), so the contact form (`/contact`)
posts directly to [Formspree](https://formspree.io) from the browser, which
emails you the submission and sends the lead an automatic confirmation.

1. Sign up at [formspree.io](https://formspree.io) with the email you want
   leads sent to, and confirm that email.
2. Create a new form and copy its endpoint, e.g.
   `https://formspree.io/f/xxxxxxxx`.
3. **Local dev:** copy `.env.local.example` to `.env.local` and paste the
   endpoint into `NEXT_PUBLIC_FORM_ENDPOINT`.
4. **Deployed site:** add a repo secret named `FORM_ENDPOINT` (Settings →
   Secrets and variables → Actions → New repository secret) with the same
   endpoint — the deploy workflow passes it through as
   `NEXT_PUBLIC_FORM_ENDPOINT` at build time.

Until this is set, submissions just show the success message locally
without sending anywhere (a console warning says so).

The automatic reply to the lead uses Formspree's autoresponse feature,
which may require a paid Formspree plan depending on your account — check
your dashboard if the lead doesn't receive it.

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
