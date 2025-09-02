import type { MetadataRoute } from "next";

const manifest = (): MetadataRoute.Manifest => {
  return {
    background_color: "#000000",
    categories: ["business", "utilities"],
    description:
      "Thruer is an AI-powered Next.js boilerplate with Tailwind CSS, Radix UI, and more.",
    dir: "ltr",
    display: "standalone",
    display_override: ["window-controls-overlay"],
    icons: [
      {
        purpose: "maskable",
        sizes: "192x192",
        src: "/web-app-manifest-192x192.png",
        type: "image/png",
      },
      {
        purpose: "any",
        sizes: "192x192",
        src: "/web-app-manifest-192x192.png",
        type: "image/png",
      },
      {
        sizes: "512x512",
        src: "/web-app-manifest-512x512.png",
        type: "image/png",
      },
    ],
    id: "aminahmady.thruer.app",
    lang: "fa",
    launch_handler: {
      client_mode: ["navigate-existing", "auto"],
    },
    name: "Thruer",
    orientation: "portrait",
    scope: "/",
    screenshots: [
      {
        form_factor: "wide",
        label: "Home screen showing main navigation and featured content",
        sizes: "1920x1080",
        src: "screenshot-1920x1080.svg",
        type: "image/png",
      },
      {
        label: "Home screen showing main navigation and featured content",
        platform: "android",
        sizes: "540x960",
        src: "screenshot-540x960.svg",
        type: "image/png",
      },
      {
        label: "Home screen showing main navigation and featured content",
        platform: "ios",
        sizes: "540x960",
        src: "screenshot-540x960.svg",
        type: "image/png",
      },
    ],
    short_name: "Thruer",
    shortcuts: [
      {
        description: "Home",
        icons: [
          {
            purpose: "any",
            sizes: "96x96",
            src: "96x96.svg",
          },
        ],
        name: "Home",
        url: "/",
      },
    ],
    start_url: "/",
    theme_color: "#000000",
  };
};

export default manifest;
