import type { PropsWithChildren } from "react";
import { cn } from "@/lib/tailwind-utils";
import { Providers } from "@/providers";

const RootLayout: NextLayout<PropsWithChildren> = ({ children }) => {
  return (
    <html
      suppressContentEditableWarning
      suppressHydrationWarning
      lang="en"
      translate="no"
    >
      <body className={cn("antialiased")}>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
};

export * from "@/lib/seo-utils";

export default RootLayout;
