import { test, expect } from '@playwright/test';

test.describe('AdminHomePage Tests', () => {
  test.beforeEach(async ({ page }) => {
    // Navigate to the Admin Home Page
    await page.goto('https://hawaii-bites.vercel.app/Admin'); // Replace with the actual URL route for AdminHomePage
  });

  test('should display Navbar and Footer', async ({ page }) => {
    // Check if Navbar is visible
    const navbar = await page.locator('header'); // Adjust the selector if necessary
    await expect(navbar).toBeVisible();

    // Check if Footer is visible
    const footer = await page.locator('footer'); // Adjust the selector if necessary
    await expect(footer).toBeVisible();
  });

  test('should display correct page title and description', async ({ page }) => {
    // Verify the page title
    const pageTitle = await page.locator('h1');
    await expect(pageTitle).toHaveText('Admin Dashboard');

    // Verify the page description
    const pageDescription = await page.locator('p').first();
    await expect(pageDescription).toHaveText(
      'Welcome to the Hawaii Bites Admin Dashboard. Here, you can efficiently manage users, vendors, and menu data.'
    );
  });

  test('should display and interact with Manage Users section', async ({ page }) => {
    // Check the section title
    const manageUsersTitle = await page.locator('text=Manage Users');
    await expect(manageUsersTitle).toBeVisible();

    // Check the button functionality
    const manageUsersButton = await page.locator('button:has-text("View and Edit Users")');
    await expect(manageUsersButton).toBeVisible();
    await manageUsersButton.click();

    // Verify that the button action navigates or triggers the appropriate functionality
    // For example, check URL change or modal visibility
    // Example: await expect(page).toHaveURL('/users'); (Adjust as necessary)
  });

  test('should display and interact with Manage Vendors section', async ({ page }) => {
    // Check the section title
    const manageVendorsTitle = await page.locator('text=Manage Vendors');
    await expect(manageVendorsTitle).toBeVisible();

    // Check the button functionality
    const manageVendorsButton = await page.locator('button:has-text("View and Edit Vendors")');
    await expect(manageVendorsButton).toBeVisible();
    await manageVendorsButton.click();

    // Verify that the button action navigates or triggers the appropriate functionality
  });

  test('should display and interact with Menu Directory section', async ({ page }) => {
    // Check the section title
    const menuDirectoryTitle = await page.locator('text=Consolidated Menu Directory');
    await expect(menuDirectoryTitle).toBeVisible();

    // Check the button functionality
    const menuDirectoryButton = await page.locator('button:has-text("View Full Menu Directory")');
    await expect(menuDirectoryButton).toBeVisible();
    await menuDirectoryButton.click();

    // Verify that the button action navigates or triggers the appropriate functionality
  });
});
