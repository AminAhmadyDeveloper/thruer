import "@testing-library/jest-dom/vitest";

import failOnConsole from "vitest-fail-on-console";

failOnConsole({
  shouldFailOnDebug: true,
  shouldFailOnError: true,
  shouldFailOnInfo: true,
  shouldFailOnLog: true,
  shouldFailOnWarn: true,
});

process.env.BILLING_PLAN_ENV = "test";
