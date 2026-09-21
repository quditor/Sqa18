const {test, expect} = require('@playwright/test');

test('verify order creation successfully', async ({ page }) => {
  const productName = 'iphone 13 pro';
  await page.goto('https://rahulshettyacademy.com/client');
  await page.getByPlaceholder('email@example.com').fill('nadamo8472@meonvr.com');
  await page.getByPlaceholder('enter your passsword').fill('Fuadhasan@123');
  await page.getByRole('button', { name: 'Login' }).click();
  //await page.waitForLoadState('networkidle');
  await page.locator('.card-body ').first().waitFor();
  await page.locator('.card-body').filter({hasText : "iphone 13 pro"}).getByRole('button', { name: ' Add To Cart' }).click();
  await page.locator("//button[@routerlink='/dashboard/cart']").click();
  await page.getByRole('button', { name: 'Checkout'}).click();
  await page.getByRole('textbox', { name : 'Select country'}).pressSequentially('ira');
  await page.getByRole('button', { name: 'Iran (Islamic Republic of)' }).nth(0).click();
  await page.getByText('Place Order').click();
  await expect(page.getByText('Thankyou for the order.')).toBeVisible();
  //await page.pause();
  })
