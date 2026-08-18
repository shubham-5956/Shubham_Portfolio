# Shubham Kumar Agarwal — Portfolio

A personal portfolio website for Shubham Kumar Agarwal, Full-Stack Engineer & DevOps Practitioner.

## Run & Operate

- `pnpm --filter @workspace/api-server run dev` — run the API server (port 8080)
- `pnpm --filter @workspace/portfolio run dev` — run the portfolio frontend (port 21113)
- `pnpm run typecheck` — full typecheck across all packages
- `pnpm run build` — typecheck + build all packages
- `pnpm --filter @workspace/api-spec run codegen` — regenerate API hooks and Zod schemas from the OpenAPI spec
- `pnpm --filter @workspace/db run push` — push DB schema changes (dev only)
- Required env: `DATABASE_URL` — Postgres connection string

## Stack

- pnpm workspaces, Node.js 24, TypeScript 5.9
- Frontend: React + Vite, Tailwind CSS, framer-motion, shadcn/ui, react-icons
- API: Express 5
- DB: PostgreSQL + Drizzle ORM
- Validation: Zod (`zod/v4`), `drizzle-zod`
- API codegen: Orval (from OpenAPI spec)
- Build: esbuild (CJS bundle)

## Where things live

- `artifacts/portfolio/src/` — React frontend (single-page portfolio)
  - `components/` — hero, about, experience, projects, skills, contact sections + navbar
  - `pages/home.tsx` — main page assembling all sections
- `artifacts/api-server/src/routes/contact.ts` — POST /api/contact endpoint
- `lib/db/src/schema/contact.ts` — contact_messages table schema
- `lib/api-spec/openapi.yaml` — API contract (source of truth)

## Architecture decisions

- Single-page scroll portfolio with hash-based navigation (no React Router pages)
- Dark mode forced by default via `document.documentElement.classList.add("dark")`
- Contact form persists messages to PostgreSQL via `/api/contact`
- framer-motion scroll-triggered `whileInView` animations on every section
- Monorepo: frontend and backend share the same OpenAPI-generated types via `@workspace/api-client-react`

## Product

A personal developer portfolio for Shubham Kumar Agarwal showcasing:
- Hero with name, title, and social links
- About section with bio and education
- Work experience at Cubastion Consulting
- 3 featured projects (PDF-RAG, DevOps CI/CD, X-CRYPT-O)
- Technical skills organized by category
- Contact form backed by a real API

## User preferences

_Populate as you build — explicit user instructions worth remembering across sessions._

## Gotchas

- Always run `pnpm run typecheck:libs` after modifying any `lib/*` package before typechecking artifacts
- After OpenAPI spec changes, re-run codegen before using updated types
- `react-icons/si` does not export `SiAmazon`, `SiJava` — use `null` icon for those
