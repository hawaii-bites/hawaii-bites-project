import { test, expect } from '@playwright/test';

test.describe('TodaysTopPicksPage Tests', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('https://hawaii-bites.vercel.app/todays-top-picks'); // Replace with the correct route for your app
  });

  test('should display the page title', async ({ page }) => {
    const title = await page.locator('h1');
    await expect(title).toHaveText("Today's Top Picks");
  });

  test('should render all top picks with correct details', async ({ page }) => {
    // Check the number of top picks displayed
    const topPickCards = await page.locator('div[style*="box-shadow"]');
    await expect(topPickCards).toHaveCount(3); // Based on the provided `topPicks` array

    // Validate the first top pick details
    const firstCard = topPickCards.nth(0);
    await expect(firstCard.locator('h3')).toHaveText('Matcha Latte');
    await expect(firstCard.locator('p')).toContainText('A refreshing and creamy matcha latte');
    await expect(firstCard.locator('p')).toContainText('Starbucks (Campus Center)');
  });

  test('should correctly render images for each top pick', async ({ page }) => {
    const topPickImages = await page.locator('img');

    // Ensure there are 3 images (one for each top pick)
    await expect(topPickImages).toHaveCount(3);

    // Validate the first image
    const firstImage = topPickImages.nth(0);
    await expect(firstImage).toHaveAttribute('src', '/matcha-latte.jpeg');
    await expect(firstImage).toHaveAttribute('alt', 'Matcha Latte');
  });

  test('should display correct styles for top pick cards', async ({ page }) => {
    const firstCard = page.locator('div[style*="box-shadow"]').first();

    // Verify box shadow and border radius
    const boxShadow = await firstCard.evaluate((node) => getComputedStyle(node).boxShadow);
    expect(boxShadow).toBe('rgba(0, 0, 0, 0.2) 0px 4px 8px');

    const borderRadius = await firstCard.evaluate((node) => getComputedStyle(node).borderRadius);
    expect(borderRadius).toBe('10px');
  });
});
