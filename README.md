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
sends straight from the browser via [EmailJS](https://www.emailjs.com),
which relays through an email account you connect (Gmail, Outlook, etc.).
Two templates fire on every submission: one emails you the lead, the other
auto-replies to the lead. EmailJS's free tier (200 emails/month) covers
both for free — unlike most form-backend services, which gate the
auto-reply to a paid plan.

1. Sign up at [emailjs.com](https://www.emailjs.com).
2. **Email Services** → add your Gmail/Outlook/etc. account — this becomes
   your `Service ID`.
3. **Email Templates** → create two templates (their form fields become
   `{{biz}}`, `{{name}}`, `{{service}}`, `{{city}}`, `{{phone}}`, `{{email}}`):

   - **Notify** (to you) — Note its `Template ID`.
     - To Email: your own email address (fixed)
     - Reply To: `{{email}}`
     - Subject: `New DailyLeads inquiry — {{biz}}`
     - Content: list out `{{name}}`, `{{service}}`, `{{city}}`, `{{phone}}`,
       `{{email}}`

   - **Confirm** (to the lead) — Note its `Template ID`.
     - To Email: `{{email}}`
     - Subject: `We've received your request — DailyLeads`
     - Content: "Hi {{name}}, thanks for reaching out to DailyLeads! We've
       received your query and our team will get in touch within 24 hours
       to set up your free first week of local leads."

4. **Account** → General → copy your `Public Key`.
5. **Local dev:** copy `.env.local.example` to `.env.local` and fill in the
   Service ID, both Template IDs, and the Public Key.
6. **Deployed site:** add four repo secrets (Settings → Secrets and
   variables → Actions → New repository secret): `EMAILJS_SERVICE_ID`,
   `EMAILJS_TEMPLATE_NOTIFY_ID`, `EMAILJS_TEMPLATE_CONFIRM_ID`,
   `EMAILJS_PUBLIC_KEY` — the deploy workflow passes them through as
   `NEXT_PUBLIC_*` at build time.

Until these are set, submissions just show the success message locally
without sending anywhere (a console warning says so). A failed confirmation
email never blocks the submission — only the notify-to-you email has to
succeed for the form to report success.

## Stack

- **Next.js 16** (App Router, Turbopack)
- **Tailwind CSS v4** — theme tokens defined in `src/app/globals.css`
- **Framer Motion** — scroll-triggered reveals, staggered grids, hero blobs,
  animated FAQ accordion, mobile nav transitions
- **lucide-react** — icons
- **EmailJS** — client-side contact form delivery (no server)

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
