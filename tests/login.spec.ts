import { test, expect } from '@playwright/test';

test.describe('LoginPage', () => {
  const validCredentials = [
    { email: 'dkb25@hawaii.edu', password: 'SpaceCadet88' },
    { email: 'sethi3@hawaii.edu', password: 'Sword23' },
  ];
  const invalidCredentials = { email: 'invalid@hawaii.edu', password: 'wrongpassword' };

  test('renders login form with all elements', async ({ page }) => {
    await page.goto('https://hawaii-bites.vercel.app/login'); // Adjust URL to match your app

    // Check if the description box exists
    await expect(page.locator('div.bg-blue-100')).toBeVisible();
    await expect(page.locator('h2:has-text("About Hawaii Bites")')).toBeVisible();

    // Check if the login form fields exist
    await expect(page.locator('input#email')).toBeVisible();
    await expect(page.locator('input#password')).toBeVisible();

    // Check if the login button exists
    await expect(page.locator('button[type="submit"]')).toHaveText('Login');
  });

  test('shows an alert and redirects to /home on valid login', async ({ page }) => {
    await page.goto('https://hawaii-bites.vercel.app/login');

    for (const { email, password } of validCredentials) {
      // Fill in valid credentials
      await page.fill('input#email', email);
      await page.fill('input#password', password);

      // Mock browser's alert behavior
      page.once('dialog', async (dialog) => {
        expect(dialog.message()).toBe('Login successful!');
        await dialog.accept();
      });

      // Submit the form
      await page.click('button[type="submit"]');

      // Expect redirection to /home
      await expect(page).toHaveURL('https://hawaii-bites.vercel.app/home');

      // Go back to the login page for the next iteration
      await page.goto('https://hawaii-bites.vercel.app/login');
    }
  });

  test('shows an alert on invalid login', async ({ page }) => {
    await page.goto('https://hawaii-bites.vercel.app/login');

    // Fill in invalid credentials
    await page.fill('input#email', invalidCredentials.email);
    await page.fill('input#password', invalidCredentials.password);

    // Mock browser's alert behavior
    page.once('dialog', async (dialog) => {
      expect(dialog.message()).toBe('Invalid UH email or password.');
      await dialog.accept();
    });

    // Submit the form
    await page.click('button[type="submit"]');
  });
});
