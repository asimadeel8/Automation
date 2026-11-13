const { test, expect } = require("@playwright/test");
const { LoginPage } = require("../pages/LoginPage");
const { loginData } = require("../test-data/loginData");

test.describe("Negative Login Test Cases", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto(
      "file:///C:/Users/user/Downloads/Riphah%20Muallim%20%E2%80%93%20Faculty%20Portal.html",
    );
  });

  test.afterEach(async ({ page }, testInfo) => {
    console.log(
      `Test completed: ${testInfo.title} | Status: ${testInfo.status}`,
    );
  });

  test("Login Should fail with invalid email", async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.enterEmail(loginData.invalidEmail);
    await loginPage.enterPassword(loginData.validPassword);
    await loginPage.clickLoginButton();

    await expect(loginPage.errorMessage).toBeVisible();

    await expect(loginPage.dashboardText).not.toContainText(
      "Faculty / Dashboard",
    );
  });

  test("Login should fail with invalid password", async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.enterEmail(loginData.validEmail);
    await loginPage.enterPassword(loginData.invalidPassword);
    await loginPage.clickLoginButton();

    await expect(loginPage.errorMessage).toBeVisible();

    await expect(loginPage.dashboardText).not.toContainText(
      "Faculty / Dashboard",
    );
  });

  test("Login should fail with empty email and password", async ({ page }) => {
    const loginPage = new LoginPage(page);

    await loginPage.clickLoginButton();

    await expect(page.getByText("Enter a valid email address.")).toBeVisible();

    await expect(
      page.getByText("Password must be at least 6 characters."),
    ).toBeVisible();
  });
});