# UI Library Monorepo

A production-ready Turborepo monorepo that pairs a **Next.js frontend**, a **Fastify API**, and the **shared packages** they both depend on — tokens, types, and components — so every layer stays in step.

> A design system with a working backend.

## ✨ Features

- **Next.js 16** web app — App Router, React 19, Tailwind CSS v4
- **Fastify 5** REST API — Zod type provider, Prisma 7 + PostgreSQL
- **Shared UI package** (`@ui-library/ui`) — Button, Card, consumed by the web app
- **Shared contracts** (`@ui-library/types`) — Zod schemas + DTOs across both apps
- **Dark / Light / System themes** — `next-themes` + shadcn/ui dropdown, warm editorial palette
- **Editorial design system** — Geist sans + Newsreader serif, pastel accents, cursor-reactive grid backdrop
- **Turbo cached builds** — `build`, `lint`, `typecheck` all cached and incremental
- **Husky + lint-staged** — Prettier + ESLint run on every staged commit

## 🗂 What's inside

```
.
├── apps
│   ├── web        # Next.js 16 (App Router, React 19, Tailwind CSS v4, shadcn/ui)
│   └── api        # Fastify 5 (Zod type provider, Prisma 7 + PostgreSQL)
└── packages
    ├── ui               # Shared React component library (@ui-library/ui)
    ├── types            # Shared Zod schemas + DTOs (@ui-library/types)
    ├── eslint-config    # Shared ESLint 9 flat configs (base + Next.js)
    └── typescript-config# Shared TypeScript tsconfig presets
```

## 🧰 Tech stack

| Layer    | Technology                                                                  |
| -------- | --------------------------------------------------------------------------- |
| Frontend | Next.js 16 · React 19 · Tailwind CSS v4 · shadcn/ui (base-ui) · next-themes |
| Backend  | Fastify 5 · Zod 4 · Prisma 7 · PostgreSQL                                   |
| Language | TypeScript (NodeNext / ESM)                                                 |
| Monorepo | Turborepo 2 · pnpm 10 · workspace protocol                                  |
| Quality  | ESLint 9 flat config · Prettier · Husky · lint-staged                       |

## 🚀 Getting started

### Prerequisites

- Node.js >= 20
- pnpm >= 10
- PostgreSQL (for the API)

### Install & run

```sh
# 1. Install dependencies
pnpm install

# 2. Configure the API database
cp apps/api/.env.example apps/api/.env
# then set DATABASE_URL in apps/api/.env

# 3. Generate the Prisma client and apply migrations
pnpm --filter @ui-library/api exec prisma generate
pnpm --filter @ui-library/api exec prisma migrate dev

# 4. Start the web app and API in watch mode
pnpm dev
```

- Web app → http://localhost:3000
- API → http://localhost:3001, health check at `/health`

## 📜 Scripts

Run from the repository root:

| Command                             | Description                                 |
| ----------------------------------- | ------------------------------------------- |
| `pnpm dev`                          | Start all apps in watch mode                |
| `pnpm dev --filter @ui-library/web` | Start only the web app                      |
| `pnpm build`                        | Build all apps and packages (Turbo, cached) |
| `pnpm lint`                         | Lint all workspaces                         |
| `pnpm typecheck`                    | Typecheck all workspaces                    |
| `pnpm format`                       | Format the repo with Prettier               |
| `pnpm format:check`                 | Verify formatting                           |
| `pnpm clean`                        | Remove build artifacts and node_modules     |

## 🧩 Packages

| Package                         | Description                                                         |
| ------------------------------- | ------------------------------------------------------------------- |
| `apps/web`                      | Next.js App Router + Tailwind CSS v4 frontend                       |
| `apps/api`                      | Fastify 5 + Zod + Prisma 7 REST API                                 |
| `@ui-library/ui`                | React components (Button, Card) consumed by `web`                   |
| `@ui-library/types`             | Zod schemas + TypeScript DTOs shared across apps                    |
| `@ui-library/eslint-config`     | Shared ESLint 9 flat configs (`base`, `next`)                       |
| `@ui-library/typescript-config` | Shared tsconfig presets (`base`, `nextjs`, `react-library`, `node`) |

Cross-package imports use `workspace:*` and pnpm symlinks, so all packages resolve to each other at development time. Packages that bundle (`ui`, `types`, `api`) compile to `dist/` with TypeScript under NodeNext (ESM) resolution.

## 🛠️ Tooling

- **Turborepo** caches `build`, `lint`, and `typecheck`; outputs land under `dist/` and `.next/`.
- **Husky + lint-staged** run Prettier and ESLint on staged files via the `pre-commit` hook.
- **ESLint 9 flat config** is centralized in `@ui-library/eslint-config` and consumed with re-exports.

## 📝 GitHub metadata

**Description** (for the repo "About" section):

```
Full-stack Turborepo monorepo: Next.js 16 + Tailwind CSS v4 frontend, Fastify 5 + Prisma API, and shared UI/types packages.
```

**Topics:**

```
monorepo, turborepo, nextjs, react, typescript, tailwindcss, fastify, prisma, postgresql, zod, shadcn-ui, pnpm, eslint, prettier, design-system, ui-library, dark-mode, next-themes, frontend, backend, fullstack
```
