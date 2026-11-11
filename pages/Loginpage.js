class LoginPage {

    constructor (page) {
        this.page = page;

        //now I am creating locators for the elements
        this.emailInput = page.locator("#email");
        this.passwordInput = page.locator("#pass");
        this.loginButton = page.locator("#lbtn");
        this.errorMessage = page.getByText("Incorrect email or password.");
        this.DashboardText = page.locator("#crumb");
    }
}