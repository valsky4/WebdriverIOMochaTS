import basePage from "./base.page";
import loginData from "../data/login.json"

class SauceLoginPage extends basePage {


    private get userNameTextBox() { return $("#user-name"); }
    private get passwordTextBox() { return $("#password"); }
    private get loginButton() { return $("#login-button"); }
    private get prodcutsHeader() { return $(".title"); }

    private get sauceDemoUrl() {return ('https://www.saucedemo.com/')}
    private get userNameText() { return $("#user-name"); }
    public get userName() {return (loginData.valid.username)}
    public get userPwd() {return (loginData.valid.password)}

    async openPage(){
        await this.openUrlMaximazeAndValidate(this.sauceDemoUrl, await this.userNameText)

    }

    async login(username: string, password: string) {
        await this.userNameTextBox.setValue(username);
        await this.passwordTextBox.setValue(password);
        await this.loginButton.scrollIntoView();
    }

    async login_validation() {
        await this.loginButton.click();
        await expect(this.prodcutsHeader).toBeDisplayed();
    }

}
export default new SauceLoginPage();