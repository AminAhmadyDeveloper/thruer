"use client";

import { AuthQueryProvider } from "@daveyplate/better-auth-tanstack";
import { AuthUIProviderTanstack } from "@daveyplate/better-auth-ui/tanstack";
import Link from "next/link";
import { useRouter } from "next/navigation";
import type { FC, PropsWithChildren } from "react";
import { authClient } from "@/lib/auth-client";

export const BetterAuthUiProvider: FC<PropsWithChildren> = ({ children }) => {
  const router = useRouter();

  return (
    <AuthQueryProvider>
      <AuthUIProviderTanstack
        authClient={authClient}
        navigate={router.push}
        replace={router.replace}
        onSessionChange={() => {
          router.refresh();
        }}
        Link={Link}
      >
        {children}
      </AuthUIProviderTanstack>
    </AuthQueryProvider>
  );
};
