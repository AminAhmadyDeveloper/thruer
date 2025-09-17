"use client";

import type { QueryKey } from "@tanstack/react-query";
import { QueryErrorResetBoundary } from "@tanstack/react-query";
import { AlertTriangle, RefreshCcw } from "lucide-react";
import * as React from "react";
import { ErrorBoundary, type FallbackProps } from "react-error-boundary";

import { Button } from "@/components/ui/button";
import { Show } from "@/components/utils/show";

interface QueryBoundaryProps<TQueryKey extends QueryKey = readonly unknown[]>
  extends React.PropsWithChildren {
  errorFallback?: (props: FallbackProps) => React.ReactNode;
  loadingFallback?: React.ReactNode;
  queryKey: TQueryKey;
}

export function DefaultErrorFallback<
  TQueryKey extends QueryKey = readonly unknown[],
>({ error, resetErrorBoundary }: { queryKey?: TQueryKey } & FallbackProps) {
  return (
    <div className="flex flex-col items-center justify-center space-y-4 rounded-lg border border-destructive/30 bg-destructive/5 p-6 text-center">
      <AlertTriangle className="size-12 text-destructive" />
      <div>
        <h3 className="mb-2 font-semibold text-lg">Request Failed</h3>
        <p className="text-muted-foreground">
          {error.message || "Unexpected error"}
        </p>
      </div>
      <Show show={error?.status !== 403}>
        <Button
          className="gap-2"
          onClick={resetErrorBoundary}
          variant="outline"
        >
          <RefreshCcw className="size-4" />
          Retry
        </Button>
      </Show>
    </div>
  );
}

export function QueryBoundary<TQueryKey extends QueryKey = readonly unknown[]>({
  children,
  errorFallback,
  loadingFallback = "Loading...",
  queryKey,
}: QueryBoundaryProps<TQueryKey>) {
  return (
    <QueryErrorResetBoundary>
      {({ reset }) => (
        <ErrorBoundary
          fallbackRender={(props) => {
            return errorFallback ? (
              errorFallback(props)
            ) : (
              <DefaultErrorFallback {...props} queryKey={queryKey} />
            );
          }}
          onReset={reset}
        >
          <React.Suspense fallback={loadingFallback}>{children}</React.Suspense>
        </ErrorBoundary>
      )}
    </QueryErrorResetBoundary>
  );
}
