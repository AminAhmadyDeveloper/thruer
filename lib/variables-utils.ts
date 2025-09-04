import { createEnv } from "@t3-oss/env-nextjs";
import { z } from "zod/v4-mini";

export const variables = createEnv({
  server: {
    DATABASE_URL: z.url(),
    WEBSITE_MAIN_URL: z.url(),
    PORT: z.string(),
    BETTER_AUTH_SECRET: z.string(),
    ARCJET_KEY: z.string(),
    OPENROUTER_API_KEY: z.string(),
  },
  client: {},
  runtimeEnv: {
    DATABASE_URL: process.env.DATABASE_URL,
    WEBSITE_MAIN_URL: process.env.WEBSITE_MAIN_URL,
    PORT: process.env.PORT,
    BETTER_AUTH_SECRET: process.env.BETTER_AUTH_SECRET,
    NEXT_PUBLIC_BETTER_AUTH_URL: process.env.NEXT_PUBLIC_BETTER_AUTH_URL,
    ARCJET_KEY: process.env.ARCJET_KEY,
    OPENROUTER_API_KEY: process.env.OPENROUTER_API_KEY,
  },
  shared: {
    NEXT_PUBLIC_BETTER_AUTH_URL: z.url(),
  },
});
