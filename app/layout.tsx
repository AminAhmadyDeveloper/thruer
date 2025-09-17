import { getLocale } from "next-intl/server";
import type { PropsWithChildren } from "react";
import { mono, sans } from "@/lib/font-utils";
import { cn } from "@/lib/tailwind-utils";
import { Providers } from "@/providers";

const RootLayout: NextLayout<PropsWithChildren> = async ({ children }) => {
  const l = await getLocale();

  return (
    <html lang={l} suppressContentEditableWarning suppressHydrationWarning>
      <body
        className={cn(sans.variable, mono.variable, "antialiased")}
        vaul-drawer-wrapper=""
      >
        <Providers>{children}</Providers>
      </body>
    </html>
  );
};

export * from "@/lib/seo-utils";

export default RootLayout;
