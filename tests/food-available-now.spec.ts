import { test, expect } from '@playwright/test';

test.describe('FoodsAvailableRightNowPage Component Tests', () => {

  test.beforeEach(async ({ page }) => {
    await page.goto('https://hawaii-bites.vercel.app/food-available-now'); // Replace with your app's base URL
  });

  test('should display the page title', async ({ page }) => {
    const title = await page.locator('h1');
    await expect(title).toHaveText('Foods Available Right Now');
  });

  test('should display all food options', async ({ page }) => {
    const foodCards = await page.locator('div[style*="box-shadow"]');
    await expect(foodCards).toHaveCount(10); // Check the number of food options
  });

  test('should display food name, location, hours, and favorite items for each option', async ({ page }) => {
    const firstFoodCard = page.locator('div[style*="box-shadow"]').first();

    // Verify food name
    await expect(firstFoodCard.locator('h3')).toHaveText('Holoholo Bistro');

    // Verify location
    await expect(firstFoodCard.locator('p:nth-of-type(1)')).toHaveText('Food Truck Row');

    // Verify hours
    await expect(firstFoodCard.locator('p:nth-of-type(2)')).toHaveText('Hours: Currently Closed');

    // Verify favorite items
    const favoriteItems = await firstFoodCard.locator('ul li');
    await expect(favoriteItems).toHaveCount(3); // Check the number of favorite items
    await expect(favoriteItems.nth(0)).toHaveText(
      'Huli Huli Chicken Plate - Tender, grilled chicken marinated in a sweet and savory Hawaiian glaze.'
    );
  });

  test('should correctly render all food cards with unique content', async ({ page }) => {
    const foodCards = await page.locator('div[style*="box-shadow"]');
    const foodNames = await foodCards.locator('h3').allTextContents();

    // Ensure each food card has a unique name
    const uniqueFoodNames = new Set(foodNames);
    expect(uniqueFoodNames.size).toBe(foodNames.length);

    // Example: Verify a specific food card exists
    expect(foodNames).toContain('Dunkin’ Donuts');
  });

  test('should display favorite items as a list for each food card', async ({ page }) => {
    const foodCards = await page.locator('div[style*="box-shadow"]');

    for (let i = 0; i < await foodCards.count(); i++) {
      const favoriteItems = foodCards.nth(i).locator('ul li');
      await expect(favoriteItems).not.toHaveCount(0); // Ensure there are favorite items listed
    }
  });

});
