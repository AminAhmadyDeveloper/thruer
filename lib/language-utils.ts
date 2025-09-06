import type { AppConfig } from "next-intl";

export const convertLanguageCodeToWord = (
  languageCode: AppConfig["Locale"],
) => {
  switch (languageCode) {
    case "en":
      return "English";
    case "tr":
      return "Turkish";
  }
};
