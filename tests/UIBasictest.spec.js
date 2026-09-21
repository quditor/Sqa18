const { test} = require ('@playwright/test');
const {expect} = require ('@playwright/test');

test('UI basic test', async ({ browser }) => {
  const context = await browser.newContext();
  const page = await context.newPage();
  await page.goto('https://www.saucedemo.com/');
  await page.getByPlaceholder('Username').fill('standard_user');
  await page.getByPlaceholder('Password').fill('secret_sauce');
  await page.getByRole('button', { name: 'Login' }).click();
})

test('second ui test', async ({ page }) => {
  //const context = await browser.newContext();
  //const page = await context.newPage();
  await page.goto(process.env.BASE_URL);
  const userName = page.locator('#username');
  const password = page.locator('#password');
  const signInButton = page.locator('#signInBtn');
  await userName.fill('rahulshettyacademy');
  await password.fill('Learning@830$3mK2');
  await signInButton.click();
   const dropdown = page.locator("select.form-control");
   await dropdown.selectOption('consult');
   page.locator('.radiotextsty').last().click();
   await expect(page.locator('.radiotextsty').last()).toBeChecked();
   await page.locator('#okayBtn').click();
   
   await page.locator('#terms').click();
   await expect(page.locator('#terms')).toBeChecked();
   await page.locator('#terms').uncheck();
   expect(await page.locator("#terms").isChecked()).toBeFalsy();
   await page.locator('.float-right').click();
})
   

   test("third ui test", async({page}) =>{
    await page.goto("https://rahulshettyacademy.com/angularpractice/");
    await page.locator("div.form-group input[name='name']").fill("Fuad Hasan");
    await page.locator("[name='email']").fill("alviariyanfuad@gmail.com");
    await page.getByLabel("Password").fill("fuad@123");
    await page.getByLabel("Check me out if you Love IceCreams!").click();
    await page.getByLabel("Gender").selectOption("Male");
    await page.getByLabel("Student").check();
    await page.locator("[name='bday']").fill("1999-12-31");
    await page.getByRole("button",{name : "Submit"}).click();
    await page.getByText("Success! The Form has been submitted successfully!.").isVisible();
    await expect(page.getByText("Success! The Form has been submitted successfully!.")).toBeVisible();

    await page.getByRole("link",{name : "Shop"}).click();
    await page.locator("app-card").filter({hasText : "Blackberry"}).getByRole("button").click();


    })

    test('Child Windows', async({browser})=>{
      const context  = await browser.newContext();
      const page = await context.newPage();
      const userName = page.locator('#username');
      await page.goto(process.env.BASE_URL);
      const documentsRequest = page.locator("[href*='documents-request']");

      const [childPage] = await Promise.all([
        context.waitForEvent('page'),
        documentsRequest.click()
      ]);
    const text = await childPage.locator(".red").textContent();
});
 

