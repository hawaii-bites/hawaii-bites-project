import { test, expect } from '@playwright/test';

test.describe('CategoryPage Component Tests', () => {

  test('should display "Invalid Category" if category is missing or invalid', async ({ page }) => {
    await page.goto('https://hawaii-bites.vercel.app/home'); // Replace with your app's base URL
    const title = await page.locator('h1');
    await expect(title).toHaveText('Invalid Category');
    const description = await page.locator('p');
    await expect(description).toHaveText('Please select a valid category from the homepage.');
  });

  test('should display items for a valid category', async ({ page }) => {
    const category = 'healthy'; // Example category
    await page.goto(`https://hawaii-bites.vercel.app/home${category}`); // Replace with your app's base URL

    const title = await page.locator('h1');
    await expect(title).toHaveText(`${category.charAt(0).toUpperCase() + category.slice(1)} Options`);

    const items = await page.locator('.grid .bg-white');
    await expect(items).toHaveCount(3); // Number of 'healthy' items in the provided menuItems array
  });

  test('should display "No items found" if no items match the category', async ({ page }) => {
    const category = 'nonexistent'; // A category with no matching items
    await page.goto(`https://hawaii-bites.vercel.app/home${category}`); // Replace with your app's base URL

    const title = await page.locator('h1');
    await expect(title).toHaveText(`Category: ${category}`);
    const description = await page.locator('p');
    await expect(description).toHaveText('No items found for this category.');
  });

  test('should correctly render vendor and description for items', async ({ page }) => {
    const category = 'popular'; // Example category
    await page.goto(`https://hawaii-bites.vercel.app/home${category}`); // Replace with your app's base URL

    const firstItem = page.locator('.grid .bg-white').first();
    await expect(firstItem.locator('h2')).toHaveText('Orange Chicken'); // First item for 'popular'
    await expect(firstItem.locator('p')).toContainText('Tangy, crispy chicken in orange sauce.');
    await expect(firstItem.locator('p')).toContainText('Vendor: Panda Express');
  });

});
