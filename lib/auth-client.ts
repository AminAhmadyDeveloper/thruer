import { createAuthClient } from "better-auth/react";
import { variables } from "@/lib/variables-utils";

export const authClient = createAuthClient({
  baseURL: variables.NEXT_PUBLIC_BETTER_AUTH_URL,
});
