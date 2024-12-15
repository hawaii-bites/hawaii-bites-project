import { test, expect } from '@playwright/test';

test.describe('VendorPage Tests', () => {
  test('should display "Vendor Not Found" for an invalid vendor ID', async ({ page }) => {
    await page.goto('https://hawaii-bites.vercel.app/vendors/McDonalds'); // Replace with the appropriate route for an invalid vendor
    const heading = await page.locator('h1');
    await expect(heading).toHaveText('Vendor Not Found');

    const description = await page.locator('p');
    await expect(description).toHaveText('Please check the name or go back to the homepage.');
  });

  test('should display vendor details correctly for a valid vendor ID', async ({ page }) => {
    await page.goto('https://hawaii-bites.vercel.app/vendors/krazy-dogs'); // Replace with the appropriate route for Krazy Dogs
    const heading = await page.locator('h1');
    await expect(heading).toHaveText('Krazy Dogs');

    // Verify the Food section
    const foodSection = await page.locator('section:has-text("Food")');
    await expect(foodSection).toBeVisible();
    const foodItems = await foodSection.locator('ul > li');
    await expect(foodItems).toHaveCount(5); // 5 food items for Krazy Dogs
    await expect(foodItems.first()).toHaveText('Classic Dog');

    // Verify the Drinks section
    const drinksSection = await page.locator('section:has-text("Drinks")');
    await expect(drinksSection).toBeVisible();
    const drinkItems = await drinksSection.locator('ul > li');
    await expect(drinkItems).toHaveCount(2); // 2 drinks for Krazy Dogs
    await expect(drinkItems.first()).toHaveText('Classic Lemonade');
  });

  test('should not display sections that have no data', async ({ page }) => {
    await page.goto('https://hawaii-bites.vercel.app/vendors/ding-teaa'); // Replace with the appropriate route for Ding Tea
    const foodSection = await page.locator('section:has-text("Food")');
    await expect(foodSection).not.toBeVisible();

    const drinksSection = await page.locator('section:has-text("Drinks")');
    await expect(drinksSection).toBeVisible(); // Ding Tea has drinks

    const dessertSection = await page.locator('section:has-text("Dessert")');
    await expect(dessertSection).not.toBeVisible(); // Ding Tea has no dessert
  });

  test('should display all sections when data is available', async ({ page }) => {
    await page.goto('https://hawaii-bites.vercel.app/vendors/saap-saap-hi'); // Replace with the appropriate route for Saap Sapp HI
    const foodSection = await page.locator('section:has-text("Food")');
    await expect(foodSection).toBeVisible();

    const drinksSection = await page.locator('section:has-text("Drinks")');
    await expect(drinksSection).toBeVisible();

    const dessertSection = await page.locator('section:has-text("Dessert")');
    await expect(dessertSection).toBeVisible();
  });
});
