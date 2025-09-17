"use client";

import { AuthQueryProvider } from "@daveyplate/better-auth-tanstack";
import { AuthUIProviderTanstack } from "@daveyplate/better-auth-ui/tanstack";
import Link from "next/link";
import { useLocale, useTranslations } from "next-intl";
import type { FC, PropsWithChildren } from "react";
import { useRouter } from "@/i18n/navigation";
import { authClient } from "@/lib/auth-client";

export const BetterAuthUiProvider: FC<PropsWithChildren> = ({ children }) => {
  const router = useRouter();
  const locale = useLocale();
  const translations = useTranslations("auth");

  return (
    <AuthQueryProvider>
      <AuthUIProviderTanstack
        authClient={authClient}
        basePath={`/${locale}/auth`}
        Link={Link}
        localization={{
          SIGN_UP_ACTION: translations("sign-up-action"),
        }}
        navigate={router.push}
        onSessionChange={() => {
          router.refresh();
        }}
        optimistic
        redirectTo="/chat"
        replace={router.replace}
      >
        {children}
      </AuthUIProviderTanstack>
    </AuthQueryProvider>
  );
};
