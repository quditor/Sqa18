class LoginPage {
    constructor(page) {
     
        this.page = page;
        this.emailField = page.locator('#userEmail');
        this.passwordField = page.locator('#userPassword');
        this.signInButton = page.locator('#login');



      
    }

    async goToLoginPage() {
        await this.page.goto("https://rahulshettyacademy.com/client/#/auth/login");
   
    }

    async validateLoginPage(username, password) {
        await this.emailField.fill('nadamo8472@meonvr.com');
        await this.passwordField.fill('Fuadhasan@123');
        await this.signInButton.click(); 
    }
}

module.exports = { LoginPage };