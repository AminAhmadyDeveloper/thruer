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
        navigate={router.push}
        replace={router.replace}
        onSessionChange={() => {
          router.refresh();
        }}
        Link={Link}
        basePath={`/${locale}/auth`}
        optimistic
        redirectTo="/chat"
        localization={{
          SIGN_UP_ACTION: translations("sign-up-action"),
        }}
      >
        {children}
      </AuthUIProviderTanstack>
    </AuthQueryProvider>
  );
};
