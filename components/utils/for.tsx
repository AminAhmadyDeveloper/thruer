import type { ReactElement, ReactNode } from "react";
import { Fragment } from "react";

type ForProps<GEach> = {
  children: (item: GEach, index: number) => ReactNode;
  each: readonly GEach[] | undefined;
  fallback?: ReactNode;
};

export const For = <GEach,>({
  children,
  each,
  fallback,
}: ForProps<GEach>): null | ReactElement => {
  if (each?.length === 0 && fallback) {
    return <Fragment>{fallback}</Fragment>;
  }

  return (
    // biome-ignore lint/performance/useSolidForComponent: we emulated solid for for react
    <Fragment>{each?.map((item, index) => children(item, index))}</Fragment>
  );
};
