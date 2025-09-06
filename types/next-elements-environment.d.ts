import type { NextPage as NextPagePrimitive } from "next";

declare global {
  export type NextLayout<TProps = object> = NextPagePrimitive<
    Readonly<TProps & { params: Promise<{ locale: string }> }>
  >;
  export type NextPage<TProps = object> = NextPagePrimitive<
    Readonly<TProps & { params: Promise<{ locale: string }> }>
  >;
}
