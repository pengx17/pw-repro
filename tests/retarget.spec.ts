import { test, expect } from "@playwright/test";

test("can fill contenteditable wrapped in role=button", async ({ page }) => {
  await page.goto("http://localhost:5173/");
  const target = page.locator("#target");
  await expect(target).toBeEditable();
  await page.locator("#target").fill("Hello, World!");
  await expect(page.locator("#target")).toHaveText("Hello, World!");
});
