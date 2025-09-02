"use client";

import {
  ThemeProvider as ThemeProviderPrimitive,
  type ThemeProviderProps,
} from "next-themes";

import type { FC } from "react";

export const ThemeProvider: FC<ThemeProviderProps> = (props) => {
  return <ThemeProviderPrimitive {...props} />;
};
