import { broadcastQueryClient } from "@tanstack/query-broadcast-client-experimental";

import { QueryClient } from "@tanstack/react-query";

export let clientQueryClientSingleton: QueryClient;

export const makeQueryClient = () => {
  const client = new QueryClient({
    defaultOptions: {
      queries: {
        retry: (failureCount,) => {
          //   const status = error?.status;

          //   if (status === 401 || status === 403 || !error.data?.retry) {
          //     return false;
          //   }

          return failureCount < 3;
        },
        staleTime: 30 * 1000,
      },
    },
  });

  broadcastQueryClient({
    broadcastChannel: "thruer-query",
    queryClient: client,
  });

  return client;
};

export const getQueryClient = () => {
  if (globalThis.window === undefined) return makeQueryClient();
  if (!clientQueryClientSingleton) {
    clientQueryClientSingleton = makeQueryClient();
  }
  return clientQueryClientSingleton;
};
