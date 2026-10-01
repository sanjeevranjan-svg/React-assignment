import { test, expect } from '@playwright/test';

test('homepage loads successfully', async ({ page }) => {
  await page.goto('/');

  await expect(page.locator('body')).toBeVisible();
});

test('application displays the React application', async ({ page }) => {
  await page.goto('/');

  await expect(
    page.getByRole('link', { name: 'Learn React' }),
  ).toBeVisible();
  // await expect(page.getByText('SomethingThatDoesNotExist')).toBeVisible();
});