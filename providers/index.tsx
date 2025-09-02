import { type FC, Fragment, type PropsWithChildren } from "react";
import { StylesProvider } from "@/providers/styles-provider";
import { ThemeProvider } from "@/providers/theme-provider";

export const Providers: FC<PropsWithChildren> = ({ children }) => {
  return (
    <Fragment>
      <StylesProvider />
      <ThemeProvider
        attribute="class"
        defaultTheme="dark"
        enableSystem
        storageKey="theme"
      >
        {children}
      </ThemeProvider>
    </Fragment>
  );
};
