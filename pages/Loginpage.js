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

    //Creating Methods to Perform Login Actions
    async enterEmail(email) {
        await this.emailInput.fill(email);
    }

    async enterPassword (password) {
        await this.passwordInput.fill(password);
    }

    async clickLoginButton() {
        await this.loginButton.click();
    }
}

module.exports = { LoginPage };