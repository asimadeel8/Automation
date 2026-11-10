//const {test, expect} = require('@playwright/test');
import {test, expect} from '@playwright/test'

 test ('Locators', async ({page}) => {

    await page.goto('file:///C:/Users/user/Downloads/Riphah%20Muallim%20%E2%80%93%20Faculty%20Portal.html');

    await page.locator('#email').fill('teacher@riphah.test');

    await page.locator('#pass').fill('Muallim@123');
 })