const {test, expect} = require('@playwright/test');
const {LoginPage} = require('../pageObjects/LoginPage');
const {POManager} = require('../pageObjects/POManager');
const {ordersHistoryPage} = require('../pageObjects/OrdersHistoryPage');
const dataset = JSON.parse(JSON.stringify(require("../utils/placeorderTestData.json")))


for (const data of dataset){
 
test.only(`verify order creation successfully  using pageobjectmodel  ${data.productsNames}` , async ({ page }) => {
 // const productName = 'iphone 13 pro';
  /*await page.goto('https://rahulshettyacademy.com/client');
  await page.getByPlaceholder('email@example.com').fill('nadamo8472@meonvr.com');
  await page.getByPlaceholder('enter your passsword').fill('Fuadhasan@123');
  await page.getByRole('button', { name: 'Login' }).click();*/
  //await page.waitForLoadState('networkidle');
  //const loginPage = new LoginPage(page);
  const poManager = new POManager(page);
  const loginPage = poManager.getLoginPage();
  await loginPage.goToLoginPage();
  await loginPage.validateLoginPage(
    data.TEST_EMAIL,
    data.TEST_PASSWORD_CLIENT_APP,

  );
  const dashboard = poManager.getDashBoardPage();
  await dashboard.searchProductAndAddToCart(data.productsNames);
  await dashboard.navigateToCart();

  const cartPage = poManager.getCartPage();
  await cartPage.verifyProductDisplayInCart(data.productsNames);
  await cartPage.Checkout();

  const ordersReviewPage = poManager.getOrdersReviewPage();
  await ordersReviewPage.searchCountryAndSelect('ira', 'Iran (Islamic Republic of)');
  const orderId = await ordersReviewPage.SubmitAndGetOrderId();
  console.log(orderId);
  await dashboard.navigateToOrders();
  const ordersHistoryPage = poManager.getOrdersHistoryPage();
   await ordersHistoryPage.verifyOrderDisplayInOrdersHistory(orderId);
  expect (orderId.includes(await ordersHistoryPage.getOrderID())).toBeTruthy();

  
  /*await loginPage.goToLoginPage('https://rahulshettyacademy.com/client/#/auth/login');
  await loginPage.validateLoginPage('nadamo8472@meonvr.com', 'Fuadhasan@123');
  await page.locator('.card-body ').first().waitFor();
  await page.locator('.card-body ').filter({hasText : "iphone 13 pro"}).getByRole('button', { name: ' Add To Cart' }).click();
  await page.locator("//button[@routerlink='/dashboard/cart']").click();
  await page.getByRole('button', { name: 'Checkout'}).click();
  await page.getByRole('textbox', { name : 'Select country'}).pressSequentially('ira');
  await page.getByRole('button', { name: 'Iran (Islamic Republic of)' }).nth(0).click();
  await page.getByText('Place Order').click();
  await expect(page.getByText('Thankyou for the order.')).toBeVisible();*/
  //await page.pause();
  });
}