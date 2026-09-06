# UI Library Monorepo

A Turborepo monorepo for building the UI library's web app and API on a shared foundation.

## What's inside

```
.
├── apps
│   ├── web        # Next.js 16 web app (App Router, React 19, Tailwind CSS v4)
│   └── api        # Fastify 5 API (Zod type provider, Prisma 7 + PostgreSQL)
└── packages
    ├── ui               # Shared React component library (@ui-library/ui)
    ├── types            # Shared Zod schemas + DTOs (@ui-library/types)
    ├── eslint-config    # Shared ESLint flat configs (base + Next.js)
    └── typescript-config# Shared TypeScript tsconfig presets
```

## Prerequisites

- Node.js >= 20
- pnpm >= 10
- PostgreSQL (for the API)

## Getting started

Install dependencies from the repository root:

```sh
pnpm install
```

Create the API environment file and set your database URL:

```sh
cp apps/api/.env.example apps/api/.env
```

## Scripts

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

### API database

Generate the Prisma client and apply migrations:

```sh
pnpm --filter @ui-library/api exec prisma generate
pnpm --filter @ui-library/api exec prisma migrate dev
```

## Packages

| Package                         | Description                                                         |
| ------------------------------- | ------------------------------------------------------------------- |
| `apps/web`                      | Next.js App Router + Tailwind CSS v4 frontend                       |
| `apps/api`                      | Fastify 5 + Zod + Prisma 7 REST API                                 |
| `@ui-library/ui`                | React components (Button, Card) consumed by `web`                   |
| `@ui-library/types`             | Zod schemas + TypeScript DTOs shared across apps                    |
| `@ui-library/eslint-config`     | Shared ESLint 9 flat configs (`base`, `next`)                       |
| `@ui-library/typescript-config` | Shared tsconfig presets (`base`, `nextjs`, `react-library`, `node`) |

Cross-package imports use `workspace:*` and pnpm symlinks, so all packages resolve to each other at development time. Packages that bundle (`.ui`, `.types`, `api`) compile to `dist/` with TypeScript under NodeNext (`ESM`) resolution.

## Tooling

- **Turborepo** caches `build`, `lint`, and `typecheck` tasks; outputs land under `dist/` and `.next/`.
- **Husky + lint-staged** run Prettier and ESLint on staged files via the `pre-commit` hook.
- **ESLint 9 flat config** is centralized in `@ui-library/eslint-config` and consumed with re-exports.
