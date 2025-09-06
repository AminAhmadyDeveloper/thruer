"use client";

import { type AppConfig, useLocale } from "next-intl";
import type { FC } from "react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { usePathname, useRouter } from "@/i18n/navigation";
import { routing } from "@/i18n/routing";
import { convertLanguageCodeToWord } from "@/lib/language-utils";

export const LanguageSelector: FC = () => {
  const router = useRouter();
  const pathname = usePathname();
  const locale = useLocale();

  const handleChange = (value: AppConfig["Locale"]) => {
    router.push(pathname, { locale: value });
    router.refresh();
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          className="p-2 focus-visible:ring-offset-0"
          variant="ghost"
          size="icon"
          aria-label="lang-switcher"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="size-6 stroke-current stroke-2"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
            viewBox="0 0 24 24"
          >
            <title className="hidden">Language</title>
            <path stroke="none" d="M0 0h24v24H0z" />
            <path d="M3 12a9 9 0 1 0 18 0 9 9 0 0 0-18 0M3.6 9h16.8M3.6 15h16.8" />
            <path d="M11.5 3a17 17 0 0 0 0 18M12.5 3a17 17 0 0 1 0 18" />
          </svg>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuRadioGroup
          value={locale}
          onValueChange={(value) => {
            handleChange(value as AppConfig["Locale"]);
          }}
        >
          {routing.locales.map((locale) => (
            <DropdownMenuRadioItem key={locale} value={locale}>
              {convertLanguageCodeToWord(locale)}
            </DropdownMenuRadioItem>
          ))}
        </DropdownMenuRadioGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};
