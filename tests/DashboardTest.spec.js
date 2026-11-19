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

  test("Verify Course Search by Title", async ({ page }) => {
    await dashboardPage.clickMyCourses();
    await dashboardPage.searchCourse("Software Testing");
    await expect(dashboardPage.courseRows).toHaveCount(1);

    await expect(dashboardPage.courseRows).toContainText("CS-301");
  });

  test("Verify Course Search by Id", async () => {
    await dashboardPage.clickMyCourses();
    await dashboardPage.searchCourse("CS-205");
    await expect(dashboardPage.courseRows).toHaveCount(1);

    await expect(dashboardPage.courseRows).toContainText("Database Systems");
  });

  test("Verify Department Filter", async () => {
    await dashboardPage.clickMyCourses();
    await dashboardPage.selectDepartment("Computing");

    await expect(dashboardPage.courseRows).toHaveCount(4);
  });

  test("Verify Course Details Sidebar", async () => {
    await dashboardPage.clickMyCourses();

    await dashboardPage.viewCourse("CS-301");

    await expect(dashboardPage.courseDrawer).toBeVisible();

    await expect(dashboardPage.drawerHeading).toHaveText("Software Testing");

    await expect(dashboardPage.drawerCourseInfo).toHaveText(
      "CS-301 · Computing",
    );

    await expect(dashboardPage.drawerDetails).toContainText(
      "Schedule: Mon 9:00",
    );

    await expect(dashboardPage.drawerDetails).toContainText(
      "Enrolled: 42 students",
    );
  });

  test("Verify Course Details Sidebar Close Button", async () => {
    await dashboardPage.clickMyCourses();

    await dashboardPage.viewCourse("CS-301");

    await expect(dashboardPage.courseDrawer).toBeVisible();

    await dashboardPage.closeCourseDrawer();

    await expect(dashboardPage.courseDrawer).toBeHidden();
  });
});
