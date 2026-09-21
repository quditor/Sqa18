import {LoginPage} from "./LoginPage";

class POManager{
    constructor(page){
        this.page = page;
        this.loginPage = new LoginPage(this.page);
    }
}