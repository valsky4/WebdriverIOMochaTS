import sauceLoginPage from "../pageobjects/sauce.login.page";


describe("LoginPage", () => {

    beforeEach("Open App", async () => {

        await sauceLoginPage.openPage();
        
    })

    describe("Positive cases", () => {

        it('Login', async () => {
            
            await sauceLoginPage.login(sauceLoginPage.userName, sauceLoginPage.userPwd)
            await sauceLoginPage.login_validation()
        })
    })
})