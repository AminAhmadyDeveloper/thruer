"use client";

import type { FC } from "react";

import { CardSpotlight } from "@/app/(home)/_components/features-list/card-spotlight";
import { FeaturesIcon } from "@/app/(home)/_components/features-list/features-icon";
import { For } from "@/components/utils/for";

const features = [
  {
    description: "Free, open-source Next.js boilerplate for rapid development.",
    logo: "OpenSourceIcon",
    name: "Free and Open-Source",
  },
  {
    description: "Modern stack: Next.js, TypeScript, Zod, and Tailwind CSS.",
    logo: "StackIcon",
    name: "Modern Stack with Next.js",
  },
  {
    description:
      "Type-safe ORM with DrizzleORM, compatible with PostgreSQL, SQLite, and MySQL",
    logo: "DrizzleORMIcon",
    name: "Database ORM",
  },
  {
    description:
      "TypeScript enables static type checking for safer and more maintainable code.",
    logo: "TypeScriptIcon",
    name: "TypeScript",
  },
  {
    description: "React 19 adds Actions and better performance.",
    logo: "ReactIcon",
    name: "React",
  },
  {
    description:
      "Authentication with Better Auth: Sign up, Sign in, Sign out, Forgot password, Reset password, and more.",
    logo: "BetterAuthIcon",
    name: "Authentication",
  },
  {
    description:
      "Pre-built, customizable authentication UI components for a seamless user experience.",
    logo: "BetterAuthUIIcon",
    name: "Authentication UI",
  },
  {
    description: "Type-safe environment variables with T3 Env",
    logo: "T3ENVIcon",
    name: "T3 ENV",
  },
  {
    description: "Form handling with React Hook Form",
    logo: "ReactHookFormIcon",
    name: "Forms",
  },
  {
    description: "Validation library with Zod in forms and api routes and orm",
    logo: "ZodIcon",
    name: "Validation",
  },
  {
    description:
      "Biome JS provides fast, all-in-one linting and formatting for JavaScript and TypeScript projects.",
    logo: "BiomeJSIcon",
    name: "Linter And Formatter",
  },
  {
    description: "Husky for Git Hooks (replaced by Lefthook)",
    logo: "HuskyIcon",
    name: "Git Hooks",
  },
  {
    description: "Lint-staged for running linters on Git staged files",
    logo: "LintStagedIcon",
    name: "Organized Commits",
  },
  {
    description: "Lint git commit with Commitlint",
    logo: "CommitLintIcon",
    name: "Git Lint",
  },
  {
    description: "Unused files and dependencies detection with Knip",
    logo: "KnipIcon",
    name: "Optimized",
  },
  {
    description:
      "Bot detection. Rate limiting. Email validation and much more using Arcjet",
    logo: "ArcJetIcon",
    name: "Auth Security",
  },
  {
    description: "Absolute Imports using @ prefix",
    logo: "AtSignIcon",
    name: "Developer Experience",
  },
  {
    description: "VSCode configuration: Debug, Settings, Tasks and Extensions",
    logo: "VSCodeIcon",
    name: "Editor",
  },
  {
    description:
      "SEO metadata, JSON-LD and Open Graph tags and dynamic image generation,Sitemap.xml and robots.txt",
    logo: "SEOIcon",
    name: "SEO",
  },
  {
    description:
      "Installable PWA on every platform to make you website be native!",
    logo: "PWAIcon",
    name: "PWA",
  },
];

export const FeaturesList: FC = () => {
  return (
    <For each={features}>
      {(feature) => {
        return (
          <CardSpotlight
            description={feature.description}
            key={feature.name}
            logo={<FeaturesIcon className="size-12" iconName={feature.logo} />}
            name={feature.name}
          />
        );
      }}
    </For>
  );
};
