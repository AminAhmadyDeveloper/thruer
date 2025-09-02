import type { Metadata, Viewport } from "next";

const APP_NAME = "Thruer";
const APP_DEFAULT_TITLE = "Thruer - AI-powered Next.js Boilerplate";
const APP_TITLE_TEMPLATE = "%s - Thruer";
const APP_DESCRIPTION =
  "Thruer is an AI-powered Next.js boilerplate with Tailwind CSS, Radix UI, and more.";

export const generateMetadata = (): Metadata => {
  return {
    alternates: {
      canonical: `${process.env.WEBSITE_MAIN_URL}/?ask=%s`,
    },
    appleWebApp: {
      statusBarStyle: "black-translucent",
      title: APP_DEFAULT_TITLE,
    },
    applicationName: APP_NAME,
    description: APP_DESCRIPTION,
    formatDetection: {
      telephone: false,
    },
    manifest: "/manifest.json",
    openGraph: {
      description: APP_DESCRIPTION,
      siteName: APP_NAME,
      title: {
        default: APP_DEFAULT_TITLE,
        template: APP_TITLE_TEMPLATE,
      },
      type: "website",
    },
    other: {
      "mobile-web-app-capable": "yes",
    },
    title: {
      default: APP_DEFAULT_TITLE,
      template: APP_TITLE_TEMPLATE,
    },
    twitter: {
      card: "summary",
      description: APP_DESCRIPTION,
      title: {
        default: APP_DEFAULT_TITLE,
        template: APP_TITLE_TEMPLATE,
      },
    },
  };
};

export const generateViewport = (): Viewport => {
  return {
    themeColor: [
      {
        media: "(prefers-color-scheme: light)",
        color: "#FFFFFF",
      },
      {
        media: "(prefers-color-scheme: dark)",
        color: "#000000",
      },
    ],
  };
};
