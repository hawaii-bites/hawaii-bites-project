import { test, expect } from '@playwright/test';

test.describe('VendorHomePage Tests', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('https://hawaii-bites.vercel.app/Vendor'); // Replace with the correct route for your app
  });

  test('should display the page title and description', async ({ page }) => {
    // Verify the title
    const pageTitle = await page.locator('h1:text("Vendor Dashboard")');
    await expect(pageTitle).toHaveText('Vendor Dashboard');
    

    // Verify the description
    const description = await page.locator('p').first();
    await expect(description).toHaveText(
      'Welcome to the Hawaii Bites Vendor Dashboard. Here, you can manage your daily and weekly menu items, as well as update your vendor profile.'
    );
  });

  test('should display all sections with correct headings and descriptions', async ({ page }) => {
    const sections = [
      {
        heading: 'Today\'s Menu',
        description: 'Keep your customers informed by updating your menu for today. Be sure to highlight any specials or limited-time offerings.',
        buttonText: 'Update Today’s Menu',
      },
      {
        heading: 'Weekly Menu',
        description: 'Plan ahead by setting your weekly menu. This helps users know what items are available throughout the week.',
        buttonText: 'Update Weekly Menu',
      },
      {
        heading: 'Vendor Profile',
        description: 'Keep your information up-to-date, including contact details and location, to ensure accurate customer interaction.',
        buttonText: 'Edit Profile',
      },
    ];

    for (const [index, section] of sections.entries()) {
      const sectionHeading = await page.locator(`section >> nth=${index} >> h2`);
      const sectionDescription = await page.locator(`section >> nth=${index} >> p`);
      const sectionButton = await page.locator(`section >> nth=${index} >> button`);

      await expect(sectionHeading).toHaveText(section.heading);
      await expect(sectionDescription).toHaveText(section.description);
      await expect(sectionButton).toHaveText(section.buttonText);
    }
  });

  test('should perform button interactions correctly', async ({ page }) => {
    // Mock clicking the "Update Today’s Menu" button
    const todayMenuButton = await page.locator('button:has-text("Update Today’s Menu")');
    await expect(todayMenuButton).toBeVisible();
    await todayMenuButton.click();

    // Mock clicking the "Update Weekly Menu" button
    const weeklyMenuButton = await page.locator('button:has-text("Update Weekly Menu")');
    await expect(weeklyMenuButton).toBeVisible();
    await weeklyMenuButton.click();

    // Mock clicking the "Edit Profile" button
    const editProfileButton = await page.locator('button:has-text("Edit Profile")');
    await expect(editProfileButton).toBeVisible();
    await editProfileButton.click();
  });

  test('should display correct styles for buttons', async ({ page }) => {
    const buttons = [
      { text: 'Update Today’s Menu', backgroundColor: 'rgb(0, 123, 255)' },
      { text: 'Update Weekly Menu', backgroundColor: 'rgb(40, 167, 69)' },
      { text: 'Edit Profile', backgroundColor: 'rgb(255, 193, 7)' },
    ];

    for (const button of buttons) {
      const buttonLocator = await page.locator(`button:has-text("${button.text}")`);
      const backgroundColor = await buttonLocator.evaluate((el) => getComputedStyle(el).backgroundColor);
      expect(backgroundColor).toBe(button.backgroundColor);
    }
  });
});
