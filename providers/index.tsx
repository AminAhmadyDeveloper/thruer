import { type FC, Fragment, type PropsWithChildren } from "react";
import { Toaster } from "sonner";
import { BetterAuthUiProvider } from "@/providers/better-auth-ui-provider";
import { QueryClientProvider } from "@/providers/query-client-provider";
import { StylesProvider } from "@/providers/styles-provider";
import { ThemeProvider } from "@/providers/theme-provider";

export const Providers: FC<PropsWithChildren> = ({ children }) => {
  return (
    <Fragment>
      <StylesProvider />
      <Toaster richColors />
      <ThemeProvider
        attribute="class"
        defaultTheme="dark"
        enableSystem
        storageKey="theme"
      >
        <QueryClientProvider>
          <BetterAuthUiProvider>{children}</BetterAuthUiProvider>
        </QueryClientProvider>
      </ThemeProvider>
    </Fragment>
  );
};
