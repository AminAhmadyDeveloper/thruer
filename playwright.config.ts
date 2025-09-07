import { defineConfig, devices } from "@playwright/test";

const PORT = process.env.PORT || 3000;

const baseURL = `http://localhost:${PORT}`;

export default defineConfig({
  testDir: "./tests",
  testMatch: "*.@(spec|e2e).?(c|m)[jt]s?(x)",
  timeout: 30 * 1000,
  forbidOnly: !!process.env.CI,
  reporter: process.env.CI ? "github" : "list",

  expect: {
    timeout: 10 * 1000,
  },

  webServer: {
    command: process.env.CI ? "npm run start" : "npm run dev",
    url: baseURL,
    timeout: 2 * 60 * 1000,
    reuseExistingServer: !process.env.CI,
  },

  use: {
    baseURL,
    trace: process.env.CI ? "retain-on-failure" : undefined,
    video: process.env.CI ? "retain-on-failure" : undefined,
  },

  projects: [
    { name: "setup", testMatch: /.*\.setup\.ts/, teardown: "teardown" },
    { name: "teardown", testMatch: /.*\.teardown\.ts/ },
    {
      name: "chromium",
      use: { ...devices["Desktop Chrome"] },
      dependencies: ["setup"],
    },
    ...(process.env.CI
      ? [
          {
            name: "firefox",
            use: { ...devices["Desktop Firefox"] },
            dependencies: ["setup"],
          },
        ]
      : []),
  ],
});
