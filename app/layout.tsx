import type { FC, PropsWithChildren } from "react";
import { cn } from "@/lib/tailwind-utils";
import { Providers } from "@/providers";

const RootLayout: FC<PropsWithChildren> = ({ children }) => {
  return (
    <html lang="en">
      <body className={cn("antialiased")}>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
};

export * from "@/lib/seo-utils";

export default RootLayout;
