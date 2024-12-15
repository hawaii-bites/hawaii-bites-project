import { test, expect } from '@playwright/test';

test.describe('MainContent Component Tests', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('https://hawaii-bites.vercel.app/home'); // Replace with your app's base URL
  });

  test('should display the correct welcome section', async ({ page }) => {
    const title = await page.locator('h1:text-is("Welcome to Hawaii Bites!")');
    await expect(title).toBeVisible();

    const description = await page.locator('p:text("Discover your favorite campus meals and check out what’s available today.")');
    await expect(description).toBeVisible();
  });

  test('should display the correct time-based specials', async ({ page }) => {
    const currentHour = new Date().getHours();
    const expectedTimeOfDay = currentHour < 10 ? 'Breakfast Specials' : currentHour < 15 ? 'Lunch Specials' : 'Dinner Specials';

    // Validate the time-based specials section
    const timeBasedHeader = await page.locator(`h2:text-is("${expectedTimeOfDay}")`);
    await expect(timeBasedHeader).toBeVisible();

    const specialsItems = await page.locator(`h2:text-is("${expectedTimeOfDay}") + div.grid > div`);
    const itemCount = await specialsItems.count();
    expect(itemCount).toBeGreaterThan(0); // Ensure at least one special is displayed
  });

  test('should display today\'s specials section correctly', async ({ page }) => {
    const todaysSpecialsHeader = await page.locator('h2:text-is("Today\'s Specials")');
    await expect(todaysSpecialsHeader).toBeVisible();

    const todaysSpecialsItems = await page.locator('h2:text-is("Today\'s Specials") + div.grid > div');
    await expect(todaysSpecialsItems).toHaveCount(2); // Ensure there are exactly 2 specials
    await expect(todaysSpecialsItems.first().locator('h3')).toHaveText('Chili Cheese Dog');
  });

  test('should display the popular choices section correctly', async ({ page }) => {
    const popularChoicesHeader = await page.locator('h2:text-is("Popular Choices")');
    await expect(popularChoicesHeader).toBeVisible();

    const popularItems = await page.locator('h2:text-is("Popular Choices") + div.grid > div');
    await expect(popularItems).toHaveCount(3); // Based on the provided popularChoices array
  });

  test('should allow searching for a valid vendor', async ({ page }) => {
    await page.fill('input[placeholder*="Search"]', 'Krazy Dogs');
    await page.click('button:has-text("Search")');
    await expect(page).toHaveURL('https://hawaii-bites.vercel.app/vendors/krazy-dogs'); // Adjust URL structure as necessary
  });

  test('should display an alert for an unknown vendor search', async ({ page }) => {
    await page.fill('input[placeholder*="Search"]', 'Nonexistent Vendor');
    const [dialog] = await Promise.all([
      page.waitForEvent('dialog'),
      page.click('button:has-text("Search")'),
    ]);
    await expect(dialog.message()).toBe('Vendor not found! Please try again.');
    await dialog.dismiss();
  });

  test('should navigate to the correct category page when a category is clicked', async ({ page }) => {
    const categoryButton = await page.locator('button:has-text("Healthy")');
    await categoryButton.click();
    await expect(page).toHaveURL('https://hawaii-bites.vercel.app/categories/healthy'); // Adjust URL structure as necessary
  });
});
