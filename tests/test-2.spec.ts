import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://www.google.com/search?q=makemytrip&oq=makemytrip&gs_lcrp=EgZjaHJvbWUyBggAEEUYOdIBCDI4NzFqMGoyqAIAsAIB&sourceid=chrome&ie=UTF-8');
  await page.getByRole('link', { name: 'MakeMyTrip - #1 Travel' }).click();
  await page.locator('.commonModal__close').click();
  await page.getByRole('link', { name: 'Hotels' }).click();
  await page.getByRole('button', { name: 'Search' }).click();
  // const ab = await page.locator('#hlistpg_hotel_shown_price').first().textContent();
  const ab = await page.locator('#hlistpg_hotel_shown_price').allTextContents();
  //or(const row of await await page.locator('[class="priceText latoBlack font22 blackText appendBottom5"]').textContent())
  
  await console.log(ab);
});