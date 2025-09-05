import type { QueryKey } from "@tanstack/react-query";
import {
  dehydrate,
  type FetchQueryOptions,
  HydrationBoundary,
} from "@tanstack/react-query";

import type { PropsWithChildren } from "react";

import { getQueryClient } from "@/lib/query-client-utilities";

export interface HydrationProps<
  TQueryFunctionData = unknown,
  TError = Error,
  TData = TQueryFunctionData,
  TQueryKey extends QueryKey = readonly unknown[],
> extends PropsWithChildren {
  queryOpt: FetchQueryOptions<
    TQueryFunctionData,
    TError,
    TData,
    TQueryKey,
    never
  >;
}

export const Hydration = async <
  TQueryFunctionData = unknown,
  TError = Error,
  TData = TQueryFunctionData,
  TQueryKey extends QueryKey = readonly unknown[],
>({
  children,
  queryOpt,
}: HydrationProps<TQueryFunctionData, TError, TData, TQueryKey>) => {
  const queryClient = getQueryClient();
  await queryClient.prefetchQuery(queryOpt);

  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      {children}
    </HydrationBoundary>
  );
};
