const { test, expect } = require("@playwright/test");
const { LoginPage } = require("../pages/LoginPage");
const {DashboardPage } = require("../pages/DashboardPage");
const { loginData } = require("../test-data/loginData");

test.describe("Dashboard Test Cases", () => {

    let loginPage;
    let dashbaordPage;

    test.beforeEach(async ({ page }) => {
        await page.goto(
            "file:///C:/Users/user/Downloads/Riphah%20Muallim%20%E2%80%93%20Faculty%20Portal.html",
        );
        loginPage = new LoginPage(page);
        
    });
})