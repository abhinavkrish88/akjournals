import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://www.google.com/search?q=makemytrip&oq=makemytrip&gs_lcrp=EgZjaHJvbWUyBggAEEUYOdIBCDQ2NTRqMGoyqAIAsAIB&sourceid=chrome&ie=UTF-8');
  await page.goto('https://www.makemytrip.com/');
  //await page.getByRole('button', { name: 'Search' }).click();



  const ab = await page.locator('[class="priceText latoBlack font22 blackText appendBottom5"]').allInnerTexts();
  
});