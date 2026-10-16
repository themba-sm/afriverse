# AFRIVERSE website

Premium marketing site for **AFRIVERSE**, an AI automation and integration
company. React 18 + Vite 6, no UI-framework dependencies, hand-rolled design
system. Live: <https://afriverse-puce.vercel.app/>

## Tech stack

| Concern          | Choice                                                  |
| ---------------- | ------------------------------------------------------- |
| Framework        | React 18 (SPA, hash-based routing — no router library)  |
| Build tool       | Vite 6                                                  |
| Package manager  | npm (lockfile committed)                                |
| Styling          | Plain CSS: design tokens + section styles               |
| Linting          | oxlint (`npm run lint`)                                 |
| Hosting          | Vercel (static build; GitHub `main` auto-deploys)       |

## Project structure

```
index.html                 # SPA shell, default SEO meta, favicon
vite.config.js             # Vite + React plugin (no custom config needed)
.env.example               # Environment variable NAMES only (no values)
public/brand/              # Official AFRIVERSE logo assets (never redrawn)
src/
  main.jsx                 # React entry point
  App.jsx                  # Hash router + per-route document metadata
  index.css                # Font-face imports (single import in main.jsx)
  styles.css               # Design tokens, typography, buttons, cards, a11y
  sections.css             # Section + component styles (mobile-first)
  lib/nav.js               # Shared anchor-scroll helper
  data/site.js             # Brand, nav, services, workflows, plans, FAQs, form config
  data/industries.js       # Ten industry definitions -> shared IndustryPage template
  components/              # Header, Footer(shared section), Logo, Icons, Reveal,
                            # Accordion, ConsultationForm (one form, used in 11 places)
  sections/                # Hero, Intro, Services, Industries, Process, Workflows,
                            # Pricing (industry-aware), FAQ, Contact, IndustryPage
```

Content lives in `src/data/*.js`; components stay presentational. To change
copy, plans, pricing examples or industry content, edit the data files — no
component rewrite needed. All ten industry pages come from one
`IndustryPage.jsx` template plus per-industry data (no duplicated pages).

## Local development

Requires Node 18+ and npm.

```bash
git clone https://github.com/themba-sm/afriverse.git
cd afriverse
npm install
npm run dev        # dev server with HMR at http://localhost:5173
```

Optional: copy `.env.example` to `.env` to override the enquiry submission
endpoint (e.g. point it at a staging backend). `.env` is git-ignored.

## Production build

```bash
npm run build     # outputs static site to dist/
npm run preview   # serve the production build locally
```

## Environment variables

| Variable                 | Required | Purpose                                             |
| ------------------------ | -------- | --------------------------------------------------- |
| `VITE_ENQUIRY_ENDPOINT`  | No       | Consultation form submission endpoint. Falls back to the production endpoint baked into `src/data/site.js`. |

No secrets exist in the client bundle: the form posts to a server-side
endpoint that performs validation, honeypot spam detection and per-IP rate
limiting. No API keys are shipped to the browser.

## External service dependencies (Base44)

One feature depends on services outside this repository:

**Consultation form submissions.** `ConsultationForm.jsx` POSTs to
`SITE.enquiryEndpoint` — a Base44 serverless function
(`afriverseEnquirySubmit`) that validates server-side and stores each enquiry
in a `AfriverseEnquiry` database table. To migrate or self-host this:

1. Re-implement the endpoint on any serverless platform (Vercel Functions,
   Netlify, a small Express service) with: field validation, a honeypot field
   (`company`), per-IP rate limiting, and durable storage.
2. Point `VITE_ENQUIRY_ENDPOINT` at the new URL and redeploy.

Until a notification destination is configured, submitted enquiries are
stored server-side and surfaced in the success panel with an honest note that
team notifications are not yet wired up. Nothing in the current form flow is
mocked: submissions are stored for real.

## Routing on Vercel

The site uses **hash routing**: the homepage renders at `/` and industry
pages at `/#/industry/<id>` (e.g. `/#/industry/real-estate`). Because
routing happens client-side after the hash, no rewrite rules are needed:
Vercel serves the single static `index.html` for every URL, and direct
navigation / shared links / hard refreshes all work, including industry URLs.
Section deep links (`/#contact`, `/#plans`, `/#faq`) also work on first load.

## Connecting to GitHub

The repository already lives at
<https://github.com/themba-sm/afriverse> and Vercel deploys `main`
automatically. To reconnect from scratch:

1. Create an empty repo on GitHub (e.g. `afriverse`).
2. `git remote add origin https://github.com/<you>/afriverse.git`
3. `git push -u origin main`

## Deploying on Vercel

1. Import the GitHub repository at <https://vercel.com/new>.
2. Vercel auto-detects Vite. Confirm: build command `npm run build`,
   output directory `dist`, install command `npm install`.
3. Add `VITE_ENQUIRY_ENDPOINT` only if you changed the endpoint.
4. Deploy. Subsequent pushes to `main` auto-deploy.

### Deployment checklist

- [ ] `npm run build` succeeds locally
- [ ] `npm run lint` passes (three known benign warnings: footer `Date`
      year, and a one-time random form id — both safe in practice)
- [ ] No secrets in `src/`, `index.html`, or git history
- [ ] `.env` is local-only; `.env.example` carries names only
- [ ] Form submission tested against the live endpoint
- [ ] Direct URL check: `/`, `/#/industry/legal-services`, `/#contact`
- [ ] Lighthouse / mobile smoke test after deploy

## Known limitations (deliberate, not defects)

- Prices display "Custom quote" until official pricing exists; no billing
  selector, checkout, trials or discount claims are implemented.
- No authentication, CMS or database calls in the frontend — the site is
  fully static apart from the one form endpoint.
- Notification routing (email/CRM) for enquiries is pending business input.

## Branding rules

Use only the official logo assets in `public/brand/`. Accent gradients are
derived from the logo (blue to violet); green is never used as an accent.
