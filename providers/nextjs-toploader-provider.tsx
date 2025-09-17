"use client";

import NextTopLoader from "nextjs-toploader";
import type { ComponentProps, FC } from "react";

export const NextTopLoaderProvider: FC<ComponentProps<typeof NextTopLoader>> = (
  props
) => {
  return <NextTopLoader {...props} />;
};
