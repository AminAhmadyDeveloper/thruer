import { expect, takeSnapshot, test } from "@chromatic-com/playwright";

import en from "@/messages/en.json";
import tr from "@/messages/tr.json";

test.describe("Visual Testing", () => {
  test.describe("Multi Language", () => {
    test("should take snapshot of the English homepage", async ({
      page,
    }, testInfo) => {
      await page.goto("/");

      await expect(
        page.getByRole("heading", {
          name: en["home-page"].title,
        }),
      ).toBeVisible();

      await takeSnapshot(page, testInfo);
    });

    test("should take snapshot of the French homepage", async ({
      page,
    }, testInfo) => {
      await page.goto("/tr");

      await expect(
        page.getByRole("heading", {
          name: tr["home-page"].title,
        }),
      ).toBeVisible();

      await takeSnapshot(page, testInfo);
    });
  });
});
