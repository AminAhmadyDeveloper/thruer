import { Analytics } from "@vercel/analytics/next";
import { NextIntlClientProvider } from "next-intl";
import { NuqsAdapter } from "nuqs/adapters/next/app";
import { type FC, Fragment, type PropsWithChildren } from "react";
import { Toaster } from "sonner";
import { BetterAuthUiProvider } from "@/providers/better-auth-ui-provider";
import { QueryClientProvider } from "@/providers/query-client-provider";
import { StylesProvider } from "@/providers/styles-provider";
import { ThemeProvider } from "@/providers/theme-provider";

export const Providers: FC<PropsWithChildren> = ({ children }) => {
  return (
    <Fragment>
      <Analytics />
      <StylesProvider />
      <Toaster richColors />
      <ThemeProvider
        attribute="class"
        defaultTheme="dark"
        enableSystem
        storageKey="theme"
      >
        <NuqsAdapter>
          <NextIntlClientProvider>
            <QueryClientProvider>
              <BetterAuthUiProvider>{children}</BetterAuthUiProvider>
            </QueryClientProvider>
          </NextIntlClientProvider>
        </NuqsAdapter>
      </ThemeProvider>
    </Fragment>
  );
};
