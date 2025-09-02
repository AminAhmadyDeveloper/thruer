import type { NextPage as NextPagePrimitive } from "next";

declare global {
  export type NextLayout<TProps = object> = NextPagePrimitive<Readonly<TProps>>;
  export type NextPage<TProps = object> = NextPagePrimitive<Readonly<TProps>>;
}
