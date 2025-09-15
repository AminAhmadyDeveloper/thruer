import createBundleAnalyzer from "@next/bundle-analyzer";
import { withSentryConfig } from "@sentry/nextjs";
import type { NextConfig } from "next";
import createNextIntlPlugin from "next-intl/plugin";

const nextConfig: NextConfig = {
  bundlePagesRouterDependencies: true,
  serverExternalPackages: ["sharp", "import-in-the-middle", "prettier"],
  experimental: {
    optimizePackageImports: [
      "@radix-ui/react-avatar",
      "@radix-ui/react-checkbox",
      "@radix-ui/react-collapsible",
      "@radix-ui/react-dialog",
      "@radix-ui/react-dropdown-menu",
      "@radix-ui/react-label",
      "@radix-ui/react-select",
      "@radix-ui/react-slot",
      "@radix-ui/react-switch",
      "@radix-ui/react-toggle",
      "@radix-ui/react-toggle-group",
      "@radix-ui/react-use-controllable-state",
      "lucide-react",
      "recharts",
      "date-fns",
      "react-day-picker",
      "@react-email/render",
    ],
    taint: true,
    reactCompiler: true,
  },
  compiler: {
    removeConsole: process.env.NODE_ENV === "production",
    reactRemoveProperties: process.env.NODE_ENV === "production",
    styledComponents: true,
  },
  images: {
    remotePatterns: [],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    formats: ["image/avif", "image/webp"],
    minimumCacheTTL: 604800,
    dangerouslyAllowSVG: true,
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
  },
  async headers() {
    return [
      {
        source: "/(.*)",
        headers: [
          { key: "X-Content-Type-Options", value: "nosniff" },
          { key: "X-Frame-Options", value: "DENY" },
          { key: "X-XSS-Protection", value: "1; mode=block" },
        ],
      },
      {
        source: "/api/(.*)",
        headers: [
          {
            key: "Cache-Control",
            value: "s-maxage=60, stale-while-revalidate",
          },
        ],
      },
      {
        source: "/_next/static/(.*)",
        headers: [
          {
            key: "Cache-Control",
            value: "public, max-age=31536000, immutable",
          },
        ],
      },
    ];
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  poweredByHeader: false,
  compress: true,
};

const withNextIntl = createNextIntlPlugin();
const withBundleAnalyzer = createBundleAnalyzer({
  enabled: process.env.NODE_ENV === "production",
});

const withPerformance = (nextConfig: NextConfig) => {
  const bundleAnalyzerIncluded = withBundleAnalyzer(nextConfig);

  const intelIncluded = withNextIntl(bundleAnalyzerIncluded);

  const sentryIncluded = withSentryConfig(intelIncluded, {
    org: "personal-ui9",
    project: "thruer",
    silent: !process.env.CI,
    widenClientFileUpload: true,
    tunnelRoute: "/monitoring",
    disableLogger: true,
    automaticVercelMonitors: true,
  });

  return sentryIncluded;
};

export default withPerformance(nextConfig);
