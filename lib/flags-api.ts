import { createHypertuneAdapter } from "@flags-sdk/hypertune";
import type { Identify } from "flags";
import { dedupe, flag } from "flags/next";
import {
  type Context,
  createSource,
  vercelFlagDefinitions as flagDefinitions,
  flagFallbacks,
  type RootFlagValues,
} from "@/generated/hypertune";
import { auth } from "@/server/auth";

const identify: Identify<Context> = dedupe(async ({ headers }) => {
  const authStore = await auth.api.getSession({ headers });

  const defaultUser = {
    id: authStore?.user.id || "unknown",
    name: authStore?.user.name || "Unknown",
    email: authStore?.user.email || "unknown@unknown.com",
  };

  return {
    environment: process.env.NODE_ENV,
    user: defaultUser,
  };
});

const hypertuneAdapter = createHypertuneAdapter<RootFlagValues, Context>({
  createSource,
  flagFallbacks,
  flagDefinitions,
  identify,
});

export const payedAiFlag = flag(hypertuneAdapter.declarations.payedAI);
