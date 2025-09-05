import { createORPCClient } from "@orpc/client";
import { RPCLink } from "@orpc/client/fetch";
import type { RouterClient } from "@orpc/server";
import { createTanstackQueryUtils } from "@orpc/tanstack-query";
import { variables } from "@/lib/variables-utils";
import type { router } from "@/orpc/router";

declare global {
  var $client: RouterClient<typeof router> | undefined;
}

export const link = new RPCLink({
  headers: async () => {
    if (globalThis.window !== undefined) {
      return {};
    }

    const { headers } = await import("next/headers");
    return Object.fromEntries(await headers());
  },
  url: `${globalThis.window === undefined ? variables.NEXT_PUBLIC_WEBSITE_MAIN_URL : globalThis.location.origin}/rpc`,
});

export const client: RouterClient<typeof router> =
  globalThis.$client ?? createORPCClient(link);

export const tanstack = createTanstackQueryUtils(client);
