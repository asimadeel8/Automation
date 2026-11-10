const { test, expect } = require("@playwright/test");

test("Login Should fail with invalid credentials", async ({ page }) => {
  await page.goto(
    "file:///C:/Users/user/Downloads/Riphah%20Muallim%20%E2%80%93%20Faculty%20Portal.html",
  );

  await page.locator("#email").fill("Wrong@riphah.test");
  await page.locator("#pass").fill("Muallim@123");
  await page.locator("#lbtn").click();

  await page.waitForTimeout(2000);

  const errorMessage = page.getByText("Incorrect email or password.");

  await expect(errorMessage).toBeVisible();

  await expect(page.locator("#crumb")).not.toContainText("Faculty / Dashboard");
});
