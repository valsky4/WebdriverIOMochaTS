import basePage from "./base.page";

class HeroAppPage extends basePage {

    public get heroUrl() { return ('https://the-internet.herokuapp.com') }
    public get validatorElementText() { return $('//*[text()="Elemental Selenium"]') }

    public get startButtonLocator() { return $('//button[text()="Start"]') }
    public get helloWorldLocator() { return $('//h4[text()="Hello World!"]') }
    public get exitIntentModalH3() {return $('//h3[contains(text(), "This is a modal window")]')}
    public get closeButtonExitIntentModal() { return $('//p[contains(text(), "Close")]')}

    async modalInteraction(){
        await this.exitIntentModalH3.waitForDisplayed({ timeout: 30000 });
        
        await this.exitIntentModalH3.waitForClickable();
        await this.closeButtonExitIntentModal.click();
        await this.exitIntentModalH3.waitForDisplayed({ timeout: 30000, reverse: true});
    }
}
export default new HeroAppPage();