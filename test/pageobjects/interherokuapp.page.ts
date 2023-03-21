import basePage from "./base.page";

class HeroAppPage extends basePage {

    public get heroUrl() { return ('https://the-internet.herokuapp.com') }
    public get validatorElementText() { return $('//*[text()="Elemental Selenium"]') }

    public get startButtonLocator() { return $('//button[text()="Start"]') }
    public get helloWorldLocator() { return $('//h4[text()="Hello World!"]') }

}
export default new HeroAppPage();