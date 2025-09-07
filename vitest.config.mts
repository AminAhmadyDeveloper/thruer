import react from "@vitejs/plugin-react";
import { loadEnv } from "vite";
import tsconfigPaths from "vite-tsconfig-paths";
import { defineConfig } from "vitest/config";

export default defineConfig({
  plugins: [react(), tsconfigPaths()],
  test: {
    globals: true,
    include: ["**/*.test.{js,jsx,ts,tsx}"],
    environment: "jsdom",
    coverage: {
      include: ["**/*.{js,jsx,ts,tsx}"],
      exclude: [
        "**/*.stories.{js,jsx,ts,tsx}",
        "**/*.d.ts",
        "node_modules/**",
        ".next/**",
        "test-results/**",
        "tests/**",
      ],
    },
    setupFiles: ["./vitest-setup.ts"],
    env: loadEnv("", process.cwd(), ""),
  },
});
