import type { authentication } from "@/server/auth/authentication-api";

declare global {
  export type AuthenticationSession = Awaited<
    ReturnType<Awaited<typeof authentication.api.getSession>>
  >;
}

// biome-ignore lint/complexity/noUselessEmptyExport: to make it globally available
export {};
