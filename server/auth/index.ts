import { betterAuth } from "better-auth";
import { drizzleAdapter } from "better-auth/adapters/drizzle";
import { variables } from "@/lib/variables-utils";
import { database } from "@/server/db";

export const auth = betterAuth({
  baseURL: variables.NEXT_PUBLIC_BETTER_AUTH_URL,
  database: drizzleAdapter(database, {
    provider: "pg",
  }),
  emailAndPassword: {
    enabled: true,
    autoSignIn: true,
  },
});
