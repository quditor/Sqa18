class LoginPage {
    constructor(page) {
     
        this.page = page;
        this.emailField = page.locator('#userEmail');
        this.passwordField = page.locator('#userPassword');
        this.signInButton = page.locator('#login');
      
    }

    async goToLoginPage() {
        await this.page.goto(process.env.BASE_URL_APP);
   
    }

    async validateLoginPage(username, password) {
        await this.emailField.fill(username);
        await this.passwordField.fill(password);
        await this.signInButton.click(); 
    }
}

module.exports = { LoginPage };