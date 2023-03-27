import basePage from "./base.page";
import assert from 'assert';

class HeroAppPage extends basePage {

    public get heroUrl() { return ('https://the-internet.herokuapp.com') }
    public get validatorElementText() { return $('//*[text()="Elemental Selenium"]') }

    public get startButtonLocator() { return $('//button[text()="Start"]') }
    public get helloWorldLocator() { return $('//h4[text()="Hello World!"]') }
    public get exitIntentModalH3() {return $('//h3[contains(text(), "This is a modal window")]')}
    public get closeButtonExitIntentModal() { return $('//p[contains(text(), "Close")]')}
    public get columnA () { return $('//*[@id="column-a"]')}
    public get columnB () { return $('//*[@id="column-b"]')}
    public get columnAHeader () { return $('//*[@id="column-a"]//header')}
    public get columnBHeader () { return $('//*[@id="column-b"]//header')}

    async modalInteraction(){
        await this.exitIntentModalH3.waitForDisplayed({ timeout: 30000 });
        
        await this.exitIntentModalH3.waitForClickable();
        await this.closeButtonExitIntentModal.click();
        await this.exitIntentModalH3.waitForDisplayed({ timeout: 30000, reverse: true});
    }
    
    async dragAndDrop(){
        const initialValueBlockA = await this.columnAHeader.getText();
        const initialValueBlockB = await this.columnBHeader.getText();
        await this.columnA.dragAndDrop(await this.columnB);
        const changedValueA = await this.columnAHeader.getText();
        assert.notEqual(initialValueBlockA,changedValueA);
        //bug its raised with WDIO

    }
}
export default new HeroAppPage();