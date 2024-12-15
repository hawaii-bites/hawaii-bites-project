import { test, expect } from '@playwright/test';

test.describe('UserProfilePage Tests', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('https://hawaii-bites.vercel.app/profile'); // Replace with your app's base URL for this page
  });

  test('should display user profile information', async ({ page }) => {
    // Verify user name and email
    await expect(page.locator('text=John Doe')).toBeVisible();
    await expect(page.locator('text=john.doe@example.com')).toBeVisible();

    // Verify default profile picture
    const profilePicture = await page.locator('img[alt="Profile Picture"]');
    await expect(profilePicture).toHaveAttribute('src', '/placeholder.png');
  });

  test('should allow uploading a profile picture', async ({ page }) => {
    const filePath = 'path/to/your/image.png'; // Replace with a valid image path
    await page.setInputFiles('input[type="file"]', filePath);

    // Verify that the image is updated
    const profilePicture = await page.locator('img[alt="Profile Picture"]');
    await expect(profilePicture).not.toHaveAttribute('src', '/placeholder.png');
  });

  test('should allow adding and removing likes', async ({ page }) => {
    // Add a new like
    await page.fill('input[placeholder="Add a food you like"]', 'Orange Chicken');
    await page.click('button:has-text("Add")');

    // Verify that the new like is added
    const likes = page.locator('text=Orange Chicken');
    await expect(likes).toBeVisible();

    // Remove the like
    await page.locator('button:has-text("Remove") >> nth=0').click();
    await expect(likes).not.toBeVisible();
  });

  test('should allow adding and removing dislikes', async ({ page }) => {
    // Add a new dislike
    await page.fill('input[placeholder="Add a food you dislike"]', 'Gluten');
    await page.click('button:has-text("Add")');

    // Verify that the new dislike is added
    const dislikes = page.locator('text=Gluten');
    await expect(dislikes).toBeVisible();

    // Remove the dislike
    await page.locator('button:has-text("Remove") >> nth=0').click();
    await expect(dislikes).not.toBeVisible();
  });

  test('should validate inputs when adding likes and dislikes', async ({ page }) => {
    // Attempt to add an invalid like
    await page.fill('input[placeholder="Add a food you like"]', 'Invalid Food');
    await page.click('button:has-text("Add")');

    // Check for alert dialog
    await page.on('dialog', async (dialog) => {
      expect(dialog.message()).toBe('Please select a valid food item from the available list.');
      await dialog.dismiss();
    });

    // Attempt to add an invalid dislike
    await page.fill('input[placeholder="Add a food you dislike"]', 'Invalid Dislike');
    await page.click('button:has-text("Add")');

    // Check for alert dialog
    await page.on('dialog', async (dialog) => {
      expect(dialog.message()).toBe('Please select a valid dislike from the available list.');
      await dialog.dismiss();
    });
  });

  test('should submit changes and update user data', async ({ page }) => {
    // Add a new like and dislike
    await page.fill('input[placeholder="Add a food you like"]', 'Loco Moco');
    await page.click('button:has-text("Add")');
    await page.fill('input[placeholder="Add a food you dislike"]', 'Pork');
    await page.click('button:has-text("Add")');

    // Submit changes
    await page.click('button:has-text("Submit Changes")');

    // Verify success alert
    await page.on('dialog', async (dialog) => {
      expect(dialog.message()).toBe('Your changes have been saved!');
      await dialog.dismiss();
    });

    // Ensure data is updated
    const likes = page.locator('text=Loco Moco');
    const dislikes = page.locator('text=Pork');
    await expect(likes).toBeVisible();
    await expect(dislikes).toBeVisible();
  });
});
