import type { ReactNode } from "react";

type SafeShowProps<TValue> = {
  on: TValue;
  children: (on: NonNullable<TValue>) => ReactNode;
};

export const SafeShow = <TValue,>({ children, on }: SafeShowProps<TValue>) => {
  return on ? children(on) : null;
};
