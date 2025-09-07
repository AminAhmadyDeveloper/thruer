import { ORPCError } from "@orpc/client";
import * as Sentry from "@sentry/nextjs";
import { z } from "zod/v4";
import { base } from "@/orpc/procedures";

const groupedFeatures = {
  // --- Core Selling Points ---
  "Core Selling Points": [
    {
      name: "Free and Open-Source",
      description:
        "Completely free and open-source boilerplate to kickstart your Next.js project quickly.",
      logo: "OpenSourceIcon",
      brandColor: "#3DA6394D",
    },
    {
      name: "Modern Stack with Next.js",
      description:
        "Built with Next.js, TypeScript, Zod, and Tailwind CSS for rapid development.",
      logo: "StackIcon",
      brandColor: "#6B72804D",
    },
    {
      name: "TypeScript",
      description: "Static typing for safer, more maintainable code.",
      logo: "TypeScriptIcon",
      brandColor: "#3178C64D",
    },
    {
      name: "React",
      description: "React 19 with Actions and improved performance.",
      logo: "ReactIcon",
      brandColor: "#61DAFB4D",
    },
    {
      name: "Tailwind CSS",
      description: "Utility-first CSS framework to build custom UIs rapidly.",
      logo: "TailwindCSSIcon",
      brandColor: "#38BDF84D",
    },
    {
      name: "Shadcn/ui",
      description:
        "Beautiful, customizable UI components to quickly build your interface.",
      logo: "ShadcnUIIcon",
      brandColor: "#6B72804D",
    },
  ],

  // --- AI & Intelligent Features ---
  "AI & Intelligent Features": [
    {
      name: "Vercel AI SDK",
      description:
        "Build AI-powered apps with multiple model providers effortlessly.",
      logo: "VercelAiSdkIcon",
      brandColor: "#6B72804D",
    },
  ],

  // --- Productivity & Development Tools ---
  "Productivity & Development Tools": [
    {
      name: "Drizzle ORM",
      description:
        "Type-safe ORM compatible with PostgreSQL, SQLite, and MySQL.",
      logo: "DrizzleORMIcon",
      brandColor: "#C5F74F4D",
    },
    {
      name: "React Query",
      description: "Effortlessly manage server state with zero configuration.",
      logo: "ReactQueryIcon",
      brandColor: "#FF41544D",
    },
    {
      name: "Forms",
      description: "Simplify form handling with React Hook Form.",
      logo: "ReactHookFormIcon",
      brandColor: "#EC59904D",
    },
    {
      name: "Validation",
      description:
        "Type-safe validation for forms, API routes, and ORM using Zod.",
      logo: "ZodIcon",
      brandColor: "#0EA5E94D",
    },
    {
      name: "Auto Form",
      description:
        "Instantly generate fully functional forms from Zod schemas with zero configuration.",
      logo: "AutoFormIcon",
      brandColor: "#F873164D",
    },
    {
      name: "T3 ENV",
      description: "Type-safe environment variables to prevent runtime errors.",
      logo: "T3ENVIcon",
      brandColor: "#FBBF244D",
    },
    {
      name: "Absolute Imports",
      description: "Use `@` prefix for cleaner, shorter import paths.",
      logo: "PathsIcon",
      brandColor: "#6366F14D",
    },
  ],

  // --- Security & Authentication ---
  "Security & Authentication": [
    {
      name: "Authentication",
      description:
        "Secure authentication with signup, login, password reset, and more.",
      logo: "BetterAuthIcon",
      brandColor: "#6E56CF4D",
    },
    {
      name: "Authentication UI",
      description:
        "Pre-built, customizable auth UI components for a seamless user experience.",
      logo: "BetterAuthUIIcon",
      brandColor: "#6E56CF4D",
    },
    {
      name: "Auth Security",
      description:
        "Bot detection, rate limiting, email validation, and other security features with ArcJet.",
      logo: "ArcJetIcon",
      brandColor: "#7C3AED4D",
    },
  ],

  // --- Developer Workflow & Quality ---
  "Developer Workflow & Quality": [
    {
      name: "Git Hooks",
      description: "Automate your Git workflow with Left Hook.",
      logo: "LeftHookIcon",
      brandColor: "#F443364D",
    },
    {
      name: "Lint-Staged",
      description:
        "Run linters only on staged files for faster, cleaner commits.",
      logo: "LintStagedIcon",
      brandColor: "#FF566C4D",
    },
    {
      name: "CommitLint",
      description: "Enforce consistent Git commit messages.",
      logo: "CommitLintIcon",
      brandColor: "#47CC874D",
    },
    {
      name: "Biome JS",
      description:
        "All-in-one linting and formatting for JavaScript and TypeScript.",
      logo: "BiomeJSIcon",
      brandColor: "#60A5FA4D",
    },
    {
      name: "Knip",
      description:
        "Detect unused files and dependencies to keep your project clean.",
      logo: "KnipIcon",
      brandColor: "#F59E0B4D",
    },
    {
      name: "Semantic Release",
      description:
        "Automate versioning and package publishing based on conventional commits.",
      logo: "SemanticReleaseIcon",
      brandColor: "#6B72804D",
    },
  ],

  // --- Deployment & Analytics ---
  "Deployment & Analytics": [
    {
      name: "Vercel Analytics and Hosting",
      description:
        "Seamless deployment and analytics on Vercel for Next.js apps.",
      logo: "VercelIcon",
      brandColor: "#6B72804D",
    },
    {
      name: "PWA",
      description:
        "Installable web app on every platform to make your site feel native.",
      logo: "PWAIcon",
      brandColor: "#5A0FC84D",
    },
    {
      name: "Sentry",
      description: "Full-stack error tracking on server, client, and edge.",
      logo: "SentryIcon",
      brandColor: "#e1567c4D",
    },
    {
      name: "OpenTelemetry",
      description:
        "Collect metrics, logs, and traces to monitor performance and reliability.",
      logo: "OpenTelemetryIcon",
      brandColor: "#4059c14D",
    },
  ],

  // --- Extra Features / Nice-to-Have ---
  "Extra Features / Nice-to-Have": [
    {
      name: "SEO",
      description:
        "Add metadata, JSON-LD, Open Graph tags, dynamic images, sitemap, and robots.txt.",
      logo: "SEOIcon",
      brandColor: "#A4286A4D",
    },
    {
      name: "i18n",
      description: "Easily make your site multilingual with next-intl.",
      logo: "NextI18NIcon",
      brandColor: "#70D1FF4D",
    },
    {
      name: "Neon Database",
      description: "Serverless Postgres database for scalable projects.",
      logo: "NeonServerlessDatabaseIcon",
      brandColor: "#00E5994D",
    },
    {
      name: "Polar Payments",
      description:
        "Create SaaS billing with flexible pricing and seamless payment processing.",
      logo: "PolarIcon",
      brandColor: "#3B82F64D",
    },
    {
      name: "Resend Emails",
      description: "Visually build and send modern emails with custom styling.",
      logo: "ResendIcon",
      brandColor: "#6B72804D",
    },
    {
      name: "React Email",
      description:
        "High-quality, unstyled React components to create beautiful emails.",
      logo: "ReactEmailIcon",
      brandColor: "#2E7DA74D",
    },
    {
      name: "Lucide Icons",
      description: "Lightweight icon library for React applications.",
      logo: "LucideIcon",
      brandColor: "#F565654D",
    },
    {
      name: "Search Params",
      description: "Type-safe state management for search parameters in React.",
      logo: "NuqsIcon",
      brandColor: "#6B72804D",
    },
    {
      name: "Scalar API Docs",
      description:
        "Create modern, interactive API documentation with a built-in playground.",
      logo: "ScalarIcon",
      brandColor: "#704CA24D",
    },
    {
      name: "Vitest",
      description:
        "Next-generation, fast testing framework for JavaScript and TypeScript.",
      logo: "VitestIcon",
      brandColor: "#6299004D",
    },
  ],
};

const featureSchema = z.object({
  name: z.string(),
  description: z.string(),
  logo: z.string(),
  brandColor: z.string(),
});

const groupedFeaturesSchema = z.record(z.string(), z.array(featureSchema));

export const getAllFeaturesList = base
  .output(groupedFeaturesSchema)
  .route({ method: "GET" })
  .handler(() => {
    return groupedFeatures;
  });

export const createError = base.handler(async () => {
  try {
    throw new ORPCError("BAD_REQUEST", { message: "To test Sentry" });
  } catch (error) {
    console.log({ error });

    Sentry.captureException(error);
    throw error;
  }
});
