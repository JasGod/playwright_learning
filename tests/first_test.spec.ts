import { test, expect } from '@playwright/test';


test('My first test',async ({page}) => {
   await page.goto('https://www.google.fr/');
   await expect(page).toHaveTitle('Google');
   await expect(page).toHaveScreenshot();
});