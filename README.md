# Focus Fitness — Website

A cinematic, premium website for Focus Fitness (New Sangavi, Pune), built with
Next.js 14 (App Router), TypeScript, and Tailwind CSS.

## Getting started

```bash
npm install
npm run dev
```

Open http://localhost:3000. This build was verified with `npm run build`
(all 6 routes compile with zero TypeScript/build errors) — building
requires normal internet access so Next.js can fetch the Inter and Anton
fonts from Google Fonts at build time.

## Pages

- `/` — Home
- `/about` — About
- `/facilities` — Facilities
- `/training` — Training
- `/membership` — Membership
- `/contact` — Contact

## Things to configure before launch

All of these live in **`lib/config.ts`** — a single source of truth so you
never have to hunt through components:

- `whatsappNumber` — verified WhatsApp business number, already set
- `phone`, `phoneAlt` — verified phone numbers, already set
- `fullAddress` — verified street address, already set
- `email` — no verified email exists yet; left as `null` and intentionally
  hidden in the UI rather than filled with a placeholder. Set a real value
  here once one is confirmed.
- `hours` — opening hours have not been confirmed yet; left as an empty
  array and intentionally hidden in the UI. Add entries once confirmed.
- `social` — real social URLs have not been confirmed yet; each is `null`
  and hidden in the UI until set.

**`lib/data.ts`** holds all other structured content — statistics, training
programs, facilities, membership plans, and values — so copy updates don't
require touching page markup.

## Photography

Photography currently uses licensed Unsplash imagery as placeholders so the
site is fully art-directed out of the box. Swap in your own gym photography
by replacing the `image` URLs in `lib/data.ts` and the hero images in
`components/Hero.tsx` / `components/PageHero.tsx` calls — using real photos
of your space, trainers, and members will make the site even stronger.

## Contact form

`components/ContactForm.tsx` posts to `app/api/contact/route.ts`, which is a
working stub (validates input, returns real success/error responses) but
does not yet send anywhere. Wire it up to email, a CRM, or a database inside
that route file — the frontend already handles loading, success, and error
states correctly and needs no changes.

## Design system

- Colors, type scale, and animation tokens: `tailwind.config.ts` and
  `app/globals.css`
- Fonts: Anton (display headlines) + Inter (body/UI), loaded via
  `next/font/google` in `app/layout.tsx`
- Scroll-reveal animations: `components/Reveal.tsx` (respects
  `prefers-reduced-motion` automatically via `app/globals.css`)
