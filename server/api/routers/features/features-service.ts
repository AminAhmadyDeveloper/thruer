import { z } from "zod/v4-mini";

import { base } from "@/orpc/procedures";

const features = [
  {
    description: "Free, open-source Next.js boilerplate for rapid development.",
    logo: "OpenSourceIcon",
    name: "Free and Open-Source",
    brandColor: "#3DA6394D",
  },
  {
    description: "Modern stack: Next.js, TypeScript, Zod, and Tailwind CSS.",
    logo: "StackIcon",
    name: "Modern Stack with Next.js",
    brandColor: "#6B72804D",
  },
  {
    description:
      "A utility-first CSS framework for rapidly building custom user interfaces.",
    logo: "TailwindCSSIcon",
    name: "Tailwind Css",
    brandColor: "#38BDF84D",
  },
  {
    description:
      "A set of beautifully designed components that you can customize, extend, and build on. Start here then make it your own.",
    logo: "ShadcnUIIcon",
    name: "Shadcn/ui",
    brandColor: "#6B72804D",
  },
  {
    description:
      "Vercel AI SDK for building AI-powered apps with many AI model providers.",
    logo: "VercelAiSdkIcon",
    name: "AI Ready",
    brandColor: "#6B72804D",
  },
  {
    description:
      "Type-safe ORM with DrizzleORM, compatible with PostgreSQL, SQLite, and MySQL",
    logo: "DrizzleORMIcon",
    name: "Database ORM",
    brandColor: "#C5F74F4D",
  },
  {
    description:
      "TypeScript enables static type checking for safer and more maintainable code.",
    logo: "TypeScriptIcon",
    name: "TypeScript",
    brandColor: "#3178C64D",
  },
  {
    description: "React 19 adds Actions and better performance.",
    logo: "ReactIcon",
    name: "React",
    brandColor: "#61DAFB4D",
  },
  {
    description:
      "Authentication with Better Auth: Sign up, Sign in, Sign out, Forgot password, Reset password, and more.",
    logo: "BetterAuthIcon",
    name: "Authentication",
    brandColor: "#6E56CF4D",
  },
  {
    description:
      "Pre-built, customizable authentication UI components for a seamless user experience.",
    logo: "BetterAuthUIIcon",
    name: "Authentication UI",
    brandColor: "#6E56CF4D",
  },
  {
    description: "Type-safe environment variables with T3 Env",
    logo: "T3ENVIcon",
    name: "T3 ENV",
    brandColor: "#FBBF244D",
  },
  {
    description: "Form handling with React Hook Form",
    logo: "ReactHookFormIcon",
    name: "Forms",
    brandColor: "#EC59904D",
  },
  {
    description: "Validation library with Zod in forms and api routes and orm",
    logo: "ZodIcon",
    name: "Validation",
    brandColor: "#0EA5E94D",
  },
  {
    description:
      "Biome JS provides fast, all-in-one linting and formatting for JavaScript and TypeScript projects.",
    logo: "BiomeJSIcon",
    name: "Linter And Formatter",
    brandColor: "#60A5FA4D",
  },
  {
    description: "Git hooks for your project using Left Hook hook manager.",
    logo: "LeftHookIcon",
    name: "Git Hooks",
    brandColor: "#F443364D",
  },
  {
    description: "Lint-staged for running linters on Git staged files",
    logo: "LintStagedIcon",
    name: "Organized Commits",
    brandColor: "#FF566C4D",
  },
  {
    description: "Lint git commit with Commitlint",
    logo: "CommitLintIcon",
    name: "Git Lint",
    brandColor: "#47CC874D",
  },
  {
    description: "Unused files and dependencies detection with Knip",
    logo: "KnipIcon",
    name: "Junk Free",
    brandColor: "#F59E0B4D",
  },
  {
    description:
      "Bot detection. Rate limiting. Email validation and much more using Arcjet",
    logo: "ArcJetIcon",
    name: "Auth Security",
    brandColor: "#7C3AED4D",
  },
  {
    description: "Absolute Imports using @ prefix",
    logo: "PathsIcon",
    name: "Absolute",
    brandColor: "#6366F14D",
  },
  {
    description: "VSCode configuration: Debug, Settings, Tasks and Extensions",
    logo: "VSCodeIcon",
    name: "Editor",
    brandColor: "#007ACC4D",
  },
  {
    description:
      "SEO metadata, JSON-LD and Open Graph tags and dynamic image generation,Sitemap.xml and robots.txt",
    logo: "SEOIcon",
    name: "SEO",
    brandColor: "#A4286A4D",
  },
  {
    description:
      "Installable PWA on every platform to make you website be native!",
    logo: "PWAIcon",
    name: "PWA",
    brandColor: "#5A0FC84D",
  },
  {
    description:
      "Instantly transform your existing zod schemas into fully functional forms with zero configuration",
    logo: "AutoFormIcon",
    name: "Auto Form",
    brandColor: "#F873164D",
  },
  {
    description:
      "Neon Serverless SQL — Neon offers a serverless Postgres database platform for developers.",
    logo: "NeonServerlessDatabaseIcon",
    name: "Neon Database",
    brandColor: "#00E5994D",
  },
  {
    description:
      "Create digital products and SaaS billing with flexible pricing models and seamless payment processing for 2025.",
    logo: "PolarIcon",
    name: "Polar Payments",
    brandColor: "#3B82F64D",
  },
  {
    description:
      "TanStack Query is hands down one of the best libraries for managing server state. It works amazingly well out-of-the-box, with zero-config.",
    logo: "ReactQueryIcon",
    name: "React Query",
    brandColor: "#FF41544D",
  },
  {
    description:
      "A collection of high-quality, unstyled components for creating beautiful emails using React and TypeScript.",
    logo: "ReactEmailIcon",
    name: "React Email",
    brandColor: "#2E7DA74D",
  },
  {
    description:
      "A modern editor that makes it easy for anyone to write, format, and send emails. Visually build your email and change the design by adding custom styles.",
    logo: "ResendIcon",
    name: "Resend Emails",
    brandColor: "#6B72804D",
  },
  {
    description:
      "Implementation of the lucide icon library for react applications",
    logo: "LucideIcon",
    name: "Icons",
    brandColor: "#F565654D",
  },
  {
    description: "Type-safe search params state manager for React",
    logo: "NuqsIcon",
    name: "Search Params",
    brandColor: "#6B72804D",
  },
  {
    description:
      "Automate version management and package publishing with semantic release based on conventional commits.",
    logo: "SemanticReleaseIcon",
    name: "Semantic Release",
    brandColor: "#6B72804D",
  },
  {
    description:
      "Easy to build APIs that are end-to-end type-safe and adhere to OpenAPI standards",
    logo: "ORPCIcon",
    name: "Type Safe Backend",
    brandColor: "#FF00BD4D",
  },
  {
    description:
      "The modern open-source developer experience platform for your APIs. Create world-class API Docs with a built-in interactive playground.",
    logo: "ScalarIcon",
    name: "Scalar API Docs",
    brandColor: "#704CA24D",
  },
  {
    description: "make you site multi language using next-intel",
    logo: "NextI18NIcon",
    name: "i18n",
    brandColor: "#70D1FF4D",
  },
];

const featuresSchema = z.array(
  z.object({
    description: z.string(),
    logo: z.string(),
    name: z.string(),
    brandColor: z.string(),
  }),
);

export const getAllFeaturesList = base
  .output(featuresSchema)
  .route({ method: "GET" })
  .handler(() => {
    return features;
  });
