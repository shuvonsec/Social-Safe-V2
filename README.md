# Social Safe — Next.js 14 Marketing Site

This repository contains the production-ready marketing site for [SocialSafe.my](https://www.socialsafe.my/),
designed for deployment on Vercel. It includes the mandated copy, reusable UI components, API stubs, Prisma
schema, analytics utilities, and automated tests requested in the build brief.

## Getting Started

### Prerequisites
- Node.js 18+
- npm 9+

### Installation
```bash
npm install
```
> The project uses Prisma; installation automatically runs `prisma generate` via the `postinstall` script so that
the client is ready for both local development and Vercel builds.

### Development
```bash
npm run dev
```
The app is served at `http://localhost:3000` using the Next.js App Router.

### Testing & Linting
```bash
npm run lint
npm test
```

### Environment Variables
Copy `.env.example` to `.env.local` and update the values as needed:

- `NEXT_PUBLIC_WHATSAPP_URL` — WhatsApp deep link for the CTA buttons.
- `NEXT_PUBLIC_SOCIALSAFE_ASSIST_URL` — Endpoint for the optional AI assistant.
- `NEXT_PUBLIC_SOCIALSAFE_CASE_URL` — Case intake API endpoint.
- `NEXT_PUBLIC_SOCIALSAFE_OPS_URL` — Ops notification endpoint.
- `DATABASE_URL` — Postgres connection string for Prisma (not required for the in-memory mock).
- `RATE_LIMIT_TOKENS_PER_MINUTE` — Tokens per minute for the rate limiter.

## Deployment on Vercel
1. Import the repo into Vercel and select the Next.js framework preset.
2. Define the environment variables above in the Vercel dashboard for the Production, Preview, and Development
   environments.
3. Ensure the `DATABASE_URL` is set if you plan to run Prisma migrations. The application functions out of the box
   with the in-memory store for initial deployments.
4. Trigger a deployment; Vercel will run `npm install`, `prisma generate`, and `npm run build` automatically.

## Project Structure Highlights
- `app/` — App Router routes for the marketing site and required policies.
- `components/` — UI building blocks including the WhatsApp CTA, recovery form, and consent banner.
- `lib/` — Utility libraries (analytics hook, rate limiter, schema validation, notifyOps helper).
- `app/api/` — Rate-limited API routes for cases, notify-ops, and the optional assist endpoint.
- `prisma/` — Prisma schema and seed script for future database integration.
- `tests/` — Vitest suites covering utility helpers and schema guards.

## License
All rights reserved. See `LICENSE` (to be provided by the organisation) for usage guidelines.
