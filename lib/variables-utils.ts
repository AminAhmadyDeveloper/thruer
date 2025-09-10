import { createEnv } from "@t3-oss/env-nextjs";
import { z } from "zod/v4-mini";

export const variables = createEnv({
  server: {
    DATABASE_URL: z.url(),
    BETTER_AUTH_SECRET: z.string(),
    ARCJET_KEY: z.string(),
    OPENROUTER_API_KEY: z.string(),
    POLAR_ACCESS_TOKEN: z.string(),
    POLAR_SUCCESS_URL: z.string(),
    RESEND_API_KEY: z.string(),
    GAP_GPT_API_KEY: z.string(),
    PAYED_AI: z.any(),
  },
  client: {},
  runtimeEnv: {
    DATABASE_URL: process.env.DATABASE_URL,
    NEXT_PUBLIC_WEBSITE_MAIN_URL: process.env.NEXT_PUBLIC_WEBSITE_MAIN_URL,
    BETTER_AUTH_SECRET: process.env.BETTER_AUTH_SECRET,
    NEXT_PUBLIC_BETTER_AUTH_URL: process.env.NEXT_PUBLIC_BETTER_AUTH_URL,
    ARCJET_KEY: process.env.ARCJET_KEY,
    OPENROUTER_API_KEY: process.env.OPENROUTER_API_KEY,
    POLAR_ACCESS_TOKEN: process.env.POLAR_ACCESS_TOKEN,
    POLAR_SUCCESS_URL: process.env.POLAR_SUCCESS_URL,
    RESEND_API_KEY: process.env.RESEND_API_KEY,
    PAYED_AI: process.env.PAYED_AI,
    GAP_GPT_API_KEY: process.env.GAP_GPT_API_KEY,
  },
  shared: {
    NEXT_PUBLIC_BETTER_AUTH_URL: z.url(),
    NEXT_PUBLIC_WEBSITE_MAIN_URL: z.url(),
  },
});
