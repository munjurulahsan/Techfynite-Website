# TechFynite — Next.js

The TechFynite agency website rebuilt in Next.js from the original Framer export (kept in the
parent folder for reference).

## Stack

- **Next.js 16** (App Router, Turbopack) + **React 19** + **TypeScript**
- **Tailwind CSS v4**: design tokens live in `src/app/globals.css` under `@theme`
- **Motion** (Framer Motion): scroll reveals, hero text, slider, counters and gallery
- `next/font` for Inter, DM Sans, Geist, Great Vibes, Poppins and Alexandria
- `next/image` for all raster images, served from `public/images`

## Getting started

```bash
npm install
npm run dev        # http://localhost:3000
```

Other scripts:

| Script                 | What it does                                                    |
| ---------------------- | --------------------------------------------------------------- |
| `npm run build`        | Production build (every page is pre-rendered)                   |
| `npm start`            | Serve the production build                                      |
| `npm run lint`         | ESLint                                                          |
| `npm run typecheck`    | Generate route types, then run `tsc`                            |
| `npm run images:sizes` | Regenerate `src/data/imageSizes.ts` after adding/replacing images |

## Where things live

```
src/
  app/                 Routes: /, /about-us, /services, /services/[slug], /projects,
                       /projects/[slug], /careers, /careers/[slug], /contact-us,
                       not-found, sitemap.xml, robots.txt, /api/contact, /api/newsletter
  components/
    layout/            Navbar, Footer, Newsletter band, chat widget loader
    home/              Home page sections
    about/             About page gallery and counters
    careers/           Job board search and check lists
    sections/          Shared sections: service list, project cards, contact form, FAQ, CTA
    ui/                Buttons, reveal animation, breadcrumb, headings, tags
  data/                All copy and content: services, projects, careers, team, home, site
  lib/                 Small helpers (class names, form forwarding)
public/
  images/, videos/     Assets downloaded from the Framer CDN, renamed by purpose
  brand/               Logo and client logos (SVG)
```

To change text, add a service/project/job, or edit team members, edit the matching file in
`src/data/`. New slugs get their own page automatically.

## Forms

The contact form and the newsletter post to `/api/contact` and `/api/newsletter`. Each route
validates the input and forwards it as JSON to a webhook you choose (Formspree, Make, Zapier,
n8n, a Slack incoming webhook, …):

```bash
# .env.local (or your hosting provider's environment variables)
CONTACT_WEBHOOK_URL=https://...
NEWSLETTER_WEBHOOK_URL=https://...
```

Without these variables, development logs submissions to the terminal, and production returns
an error asking the visitor to email instead, so no submission is silently lost.

## Deploying on Vercel

Import the repository and set **Root Directory** to `techfynite-next`, then add the two webhook
environment variables. The old static site's `vercel.json` in the parent folder is not used by
this app.

## Third-party scripts

- The "Maya" chat widget is loaded from `cdn.jsdelivr.net/gh/Shakib-H-201/techfynite-chatbot`
  (`src/components/layout/ChatWidget.tsx`).
- Calendly links open `calendly.com/shakib201/30min`.
