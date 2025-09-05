import { polarClient } from "@polar-sh/better-auth";
import { createAuthClient } from "better-auth/react";
import { variables } from "@/lib/variables-utils";

export const authClient = createAuthClient({
  baseURL: variables.NEXT_PUBLIC_BETTER_AUTH_URL,
  plugins: [polarClient()],
});
