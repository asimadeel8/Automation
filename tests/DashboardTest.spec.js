const { test, expect } = require("@playwright/test");
const { LoginPage } = require("../pages/LoginPage");
const { DashboardPage } = require("../pages/DashboardPage");
const { loginData } = require("../test-data/loginData");

test.describe("Dashboard Test Cases", () => {
  let loginPage;
  let dashboardPage;

  test.beforeEach(async ({ page }) => {
    await page.goto(
      "file:///C:/Users/user/Downloads/Riphah%20Muallim%20%E2%80%93%20Faculty%20Portal.html",
    );
    loginPage = new LoginPage(page);
    dashboardPage = new DashboardPage(page);

    await loginPage.enterEmail(loginData.validEmail);
    await loginPage.enterPassword(loginData.validPassword);
    await loginPage.clickLoginButton();
  });

  test("Verify Dashboard is displayed after successful login", async () => {
    await expect(dashboardPage.dashboardHeading).toBeVisible();
  });

  test("Verify My Courses Page", async ({ page }) => {
    await dashboardPage.clickMyCourses();
    await expect(
      page.getByRole("heading", {
        name: "My courses",
        exact: true,
      }),
    ).toBeVisible();
  });

  test("Verify Courses List", async () => {
    await dashboardPage.clickMyCourses();

    await expect(dashboardPage.coursesHeading).toBeVisible();

    await expect(dashboardPage.courseRows).toHaveCount(5);
  });
});
