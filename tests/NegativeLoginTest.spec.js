const { test, expect } = require("@playwright/test");
const { LoginPage } = require('../pages/Loginpage');

test.describe("Negative Login Test Cases", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto(
      "file:///C:/Users/user/Downloads/Riphah%20Muallim%20%E2%80%93%20Faculty%20Portal.html",
    );
  });

  test.afterEach(async ({ page }, testInfo) => {

    console.log(
        `Test completed: ${testInfo.title} | Status: ${testInfo.status}`
    );

});

  test("Login Should fail with invalid email", async ({ page }) => {
    await page.locator("#email").fill("Wrong@riphah.test");
    await page.locator("#pass").fill("Muallim@123");
    await page.locator("#lbtn").click();

    const errorMessage = page.getByText("Incorrect email or password.");

    await expect(errorMessage).toBeVisible();

    await expect(page.locator("#crumb")).not.toContainText(
      "Faculty / Dashboard",
    );
  });

  test("Login should fail with invalid password", async ({ page }) => {
    await page.locator("#email").fill("teacher@riphah.test");
    await page.locator("#pass").fill("123456");
    await page.locator("#lbtn").click();

    const errorMessage = page.getByText("Incorrect email or password.");

    await expect(errorMessage).toBeVisible();

    await expect(page.locator("#crumb")).not.toContainText(
      "Faculty / Dashboard",
    );
  });

  test("Login should fail with empty email and password", async ({ page }) => {
    await page.locator("#lbtn").click();

    await expect(page.getByText("Enter a valid email address.")).toBeVisible();

    await expect(
      page.getByText("Password must be at least 6 characters."),
    ).toBeVisible();
  });
});