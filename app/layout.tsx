import { getLocale } from "next-intl/server";
import type { PropsWithChildren } from "react";
import { cn } from "@/lib/tailwind-utils";
import { Providers } from "@/providers";

const RootLayout: NextLayout<PropsWithChildren> = async ({ children }) => {
  const l = await getLocale();

  return (
    <html suppressContentEditableWarning suppressHydrationWarning lang={l}>
      <body className={cn("antialiased")}>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
};

export * from "@/lib/seo-utils";

export default RootLayout;
