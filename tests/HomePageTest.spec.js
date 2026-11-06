const {test, expect} = require('@playwright/test');

test('Riphah Muallim – Faculty Portal', async ({page})=>{
   await page.goto('file:///C:/Users/user/Downloads/Riphah%20Muallim%20%E2%80%93%20Faculty%20Portal.html');

   const pageTitle = await page.title();
   console.log('Page Title:', pageTitle);
   await expect(page).toHaveTitle('Riphah Muallim – Faculty Portal');

   const pageUrl = await page.url();
   console.log('Page URL:', pageUrl);
   await expect(page).toHaveURL('file:///C:/Users/user/Downloads/Riphah%20Muallim%20%E2%80%93%20Faculty%20Portal.html');

   await page.close();
})