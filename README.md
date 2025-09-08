# 🚀 Next.js 15 Boilerplate

A modern **Next.js 15 + pnpm** boilerplate with batteries included.  
Built for **speed, developer experience (DX), and production-ready apps**.

This boilerplate provides a **solid foundation** for building scalable web applications.  
It comes with type-safe APIs, authentication, database integration, testing, and deployment tools  
so you can focus on building features instead of wiring up infrastructure.

Whether you're creating a **AI, SaaS, startup MVP, or a large-scale production app**,  
this setup ensures **best practices, high performance, and maintainability** out of the box.

# ✨ Features

down here is list of some features of this boilerplate

## 🟢 Core Selling Points

- Next.js 15 → **next**

- TypeScript → **typescript**

- React 19 → **react, react-dom**

- TailwindCSS → **tailwindcss, @tailwindcss/postcss, tailwind-merge**

- Shadcn/ui → **@radix-ui/react-\*, lucide-react, class-variance-authority, clsx**

## 🤖 AI & Intelligent Features

- Vercel AI SDK → **ai, @ai-sdk/react, @openrouter/ai-sdk-provider**

- Streamdown → **streamdown**

- MCP (planned) → **not in deps yet**

## 🖥 Backend

- Type Safe Backend (oRPC) → **@orpc/server, @orpc/client, @orpc/zod, @orpc/tanstack-query, @orpc/openapi, @orpc/otel**

- Neon DB → **@neondatabase/serverless, drizzle-orm, drizzle-zod, drizzle-kit**

- Resend Emails → **resend**

- React Email → **react-email, @react-email/components, @react-email/preview-server**

## 💳 Payments

- Polar Payments → **@polar-sh/sdk, @polar-sh/better-auth**

## ⚙ Productivity & Dev Tools

- Drizzle ORM → **drizzle-orm, drizzle-zod, drizzle-kit**

- React Query → **@tanstack/react-query, @tanstack/query-broadcast-client-experimental, @tanstack/react-query-devtools**

- Forms → **react-hook-form, @hookform/resolvers**

- Validation → **zod**

- Auto Form → **@autoform/react, @autoform/zod**

- T3 ENV → **@t3-oss/env-nextjs**

- Absolute Imports

- Editor (VSCode setup)

## 🔐 Security & Auth

- BetterAuth (core) → **better-auth**

- BetterAuth UI → **@daveyplate/better-auth-ui**

- BetterAuth + TanStack → **@daveyplate/better-auth-tanstack**

- ArcJet → **@arcjet/next, @arcjet/ip**

- Permissions (future) → **not yet (permix missing)**

## 🔧 Developer Workflow & Quality

- Git Hooks → **lefthook**

- Lint-Staged → **lint-staged**

- CommitLint → **@commitlint/cli, @commitlint/config-conventional**

- Biome JS → **@biomejs/biome**

- Knip → **knip**

- Semantic Release → **semantic-release, @semantic-release/git, @semantic-release/changelog**

## 📊 Deployment & Analytics

- Vercel Analytics & Hosting → **@vercel/analytics**

- Sentry → **@sentry/nextjs**

- OpenTelemetry → **@orpc/otel**

## 🧪 Testing

- Unit Tests → vitest, **@vitest/expect, @vitest/coverage-v8, vitest-fail-on-console, jsdom**

- Integration (E2E) → **@playwright/test, @chromatic-com/playwright**

- Coverage Upload → **you’ll need codecov (missing from deps!)**

## 📖 Documentation

- Scalar API Docs → **@scalar/nextjs-api-reference**

- Storybook → storybook, **@storybook/react, @storybook/nextjs**

## ✨ Extra Features

- SEO → **schema-dts (plus config work)**

- PWA → **no explicit deps yet (need next-pwa or manual setup)**

- i18n → **next-intl**

- React Compiler → **babel-plugin-react-compiler**

- Icons → **lucide-react**

- Search Params → **nuqs**

## 🛠 Getting Started

### 1. Clone the repo

```bash
git clone https://github.com/AminAhmadyDeveloper/thruer.git
cd your-boilerplate
```

### 2. Install dependencies

```bash
pnpm install
```

> You can also use `pnpm` or `npm` or `bun` or `yarn` if you prefer.

### 3. Get secrets

#### **First lets setup .env.local file**

1. create `.env.local` file in root and put this lines in it:

- BETTER_AUTH_SECRET -> this is a random string
- NEXT_PUBLIC_BETTER_AUTH_URL -> this is url of app(ex: http://localhost:3000 in dev mode)

- ARCJET_KEY -> get this from [Arcjet](https://arcjet.com/) register or login and create api key

- OPENROUTER_API_KEY -> get this from [Open Router](https://openrouter.ai/) register or login and create api key

- POLAR_ACCESS_TOKEN -> get this from [Polar](https://polar.sh/) register or login and create access token
- POLAR_SUCCESS_URL -> <YOUR_WEBSITE_URL>/payment?checkout_id={CHECKOUT_ID}

- RESEND_API_KEY -> get this from [Resend](http://resend.com/) register or login and create api key

- SENTRY_AUTH_TOKEN -> get this from [Sentry](https://sentry.io/) register or login and create auth token

- CODECOV_TOKEN -> get this from [Codecov](https://codecov.io/) register or login and create auth token

- You can also use `pnpm` or `npm` or `bun` or `yarn` if you prefer.

#### **First lets setup github actions secret**

2. go to `<YOUR_REPO_URL>/settings/secrets/actions` and put this env key in it:

- CODECOV_TOKEN -> get this from [Codecov](https://codecov.io/) register or login and create auth token

3. create `.env.sentry-build-plugin` file in root and put this lines in it:

- SENTRY_AUTH_TOKEN -> get this from [Sentry](https://sentry.io/) register or login and create auth token

4. better to deploy app to `vercel` and also connect you vercel account to `sentry` project to make them connected

### 4. Run the dev server

```bash
pnpm dev
```

### 5. Build & start

```bash
pnpm run build
pnpm start
```

## 🧩 Usage Guide

- **Authentication** → configured with [BetterAuth](https://better-auth.com). Add providers in `better-auth.config.ts`.
- **Database** → powered by [Drizzle ORM](https://orm.drizzle.team). Edit schema in `db/schema.ts`.
- **API** → use [ORPC](https://orpc.unnoq.com) for server functions, auto-typed on client.
- **UI** → extend components from [ShadCN UI](https://ui.shadcn.com).
- **Testing** → run unit tests with Vitest, e2e with Playwright.
- **Storybook** → run isolated components with:

```bash
pnpm run storybook
```

- **Lint & Format** → check code with:

```bash
pnpm run lint
pnpm run format
```

## 📖 Scripts

| Command          | Description                     |
| ---------------- | ------------------------------- |
| `pnpm dev`       | Start Next.js in dev mode       |
| `pnpm build`     | Build production app            |
| `pnpm start`     | Start production server         |
| `pnpm test`      | Run tests with Vitest           |
| `pnpm e2e`       | Run Playwright end-to-end tests |
| `pnpm storybook` | Run Storybook                   |
| `pnpm lint`      | Run Biome linter                |
| `pnpm format`    | Format code with Biome          |

## 📦 Tech Stack

- Framework: **Next.js 15, React 19**
- Language: **TypeScript**
- Runtime: **pnpm**
- Database: **Drizzle ORM (SQLite, PostgreSQL)**
- Auth: **BetterAuth**
- UI: **ShadCN UI, TailwindCSS**
- Data: **TanStack Query, TanStack Table**
- Testing: **Vitest, Playwright, Testing Library**
- Docs: **Storybook**
- DX: **Biome, Husky, Lefthook, lint-staged**

## 🤝 Contributing

1. Fork the repo
2. Create a feature branch (`git checkout -b feature/my-feature`)
3. Commit your changes (`git commit -m "feat: add my feature"`)
4. Push to branch (`git push origin feature/my-feature`)
5. Create a Pull Request 🎉

## 📜 License

MIT © [Amin Ahmady](https://aminahmady.vercel.app)
