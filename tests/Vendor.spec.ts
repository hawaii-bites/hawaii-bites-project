import { test, expect } from '@playwright/test';

test.describe('ManageMenuItems Page Tests', () => {
  test.beforeEach(async ({ page }) => {
    // Navigate to the Manage Menu Items page
    await page.goto('https://hawaii-bites.vercel.app/ManageMenu'); // Replace with the correct route
  });

  test('should display the page title and description', async ({ page }) => {
    // Verify the title
    const pageTitle = await page.locator('h1:text("Manage Menu Items")');
    await expect(pageTitle).toHaveText('Manage Menu Items');
  });

  test('should display the Add New Menu Item form with all fields', async ({ page }) => {
    // Check form heading
    const formHeading = await page.locator('h2:text("Add New Menu Item")');
    await expect(formHeading).toHaveText('Add New Menu Item');

    // Check if all form fields are visible
    const vendorSelect = await page.locator('select');
    const itemNameInput = await page.locator('input[placeholder="Enter item name"]');
    const categorySelect = await page.locator('select:has-text("Select a Category")');
    const descriptionTextarea = await page.locator('textarea[placeholder="Enter item description"]');
    const submitButton = await page.locator('button:text("Add Item")');

    await expect(vendorSelect).toBeVisible();
    await expect(itemNameInput).toBeVisible();
    await expect(categorySelect).toBeVisible();
    await expect(descriptionTextarea).toBeVisible();
    await expect(submitButton).toBeVisible();
  });

  test('should validate form and show alert for missing vendor', async ({ page }) => {
    // Try submitting the form without selecting a vendor
    const submitButton = await page.locator('button:text("Add Item")');
    await submitButton.click();

    // Expect an alert for missing vendor
    await page.on('dialog', (dialog) => {
      expect(dialog.message()).toBe('Please select a vendor.');
      dialog.dismiss();
    });
  });

  test('should successfully add a menu item', async ({ page }) => {
    // Fill out the form
    const vendorSelect = await page.locator('select');
    const itemNameInput = await page.locator('input[placeholder="Enter item name"]');
    const categorySelect = await page.locator('select:has-text("Select a Category")');
    const descriptionTextarea = await page.locator('textarea[placeholder="Enter item description"]');
    const submitButton = await page.locator('button:text("Add Item")');

    await vendorSelect.selectOption({ label: 'Test Vendor - Test Location' }); // Replace with an actual vendor option
    await itemNameInput.fill('Test Item');
    await categorySelect.selectOption('entree');
    await descriptionTextarea.fill('A delicious test item.');

    // Mock the API response or use a real test environment
    page.on('dialog', (dialog) => {
      expect(dialog.message()).toBe('Item added successfully!');
      dialog.dismiss();
    });

    // Submit the form
    await submitButton.click();

    // Verify the item is added (this may require an actual API test or mocking response)
    const newItem = await page.locator('text=Test Item');
    await expect(newItem).toBeVisible();
  });

  test('should display the loading/error state when vendors fail to load', async ({ page }) => {
    // Mock vendor fetch failure (if possible)
    // For this test, simulate a scenario where vendors aren't loaded
    const errorMessage = await page.locator('h1.text-red-600');
    await expect(errorMessage).toHaveText('Failed to load vendors. Please try again later.');
  });

  test('should interact with category dropdown options', async ({ page }) => {
    // Check if category options are correct
    const categorySelect = await page.locator('select:has-text("Select a Category")');
    await expect(categorySelect).toBeVisible();

    const options = await categorySelect.locator('option').allInnerTexts();
    expect(options).toEqual([
      'Select a Category',
      'Entree',
      'Drinks',
      'Snacks & Sides',
      'Sticks & Rolls',
      'Rice & Noodles',
    ]);
  });
});
