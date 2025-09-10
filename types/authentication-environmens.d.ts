import type { auth } from "@/server/auth";

declare global {
  export type AuthenticationSession = Awaited<
    ReturnType<Awaited<typeof auth.api.getSession>>
  >;
}

// biome-ignore lint/complexity/noUselessEmptyExport: to make it globally available
export {};
