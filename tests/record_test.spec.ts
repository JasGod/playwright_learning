import { test, expect } from "@playwright/test";

test.beforeEach(async ({ page }) => {
  await page.goto("https://www.saucedemo.com/");
  await page.locator('[data-test="username"]').fill("standard_user");
  await page.locator('[data-test="password"]').fill("secret_sauce");
  await page.locator('[data-test="login-button"]').click();


});

test.afterAll(async({page}) => {
  await page.close();
})


test("Home Page", async ({ page }) => {

  await page.getByRole("button", { name: "Open Menu" }).click();

});


test("logout", async ({ page }) => {
  await page.getByRole("button", { name: "Open Menu" }).click();
  await page.getByRole("link", { name: "Logout" }).click();
});
