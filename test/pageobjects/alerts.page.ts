import basePage from "./base.page";

class AlertPage extends basePage {
    private url = "https://the-internet.herokuapp.com/javascript_alerts"
    private get jsAlertButton() { return $('.//button[contains(text(), "Click for JS Alert")]') }
    private get jsConfirmButton() { return $('.//button[contains(text(), "Click for JS Confirm")]') }
    private get prompt() { return $('//button[contains(text(), "Click for JS Prompt")]') }
    private alert1Text = 'You successfully clicked an alert'
    private alertCancelText = 'You clicked: Cancel'
    private get result() { return $("#result") }
    private alert3Text = 'You entered: xxx'

    async resultText(text: string) {
        return $(`//p[contains(text(), "${text}")]`)
    }

    async openPage() {
        this.openUrlMaximazeAndValidate(this.url, await this.jsAlertButton);
    }

    async handleAlert(typeAlert: string) {
        if (typeAlert == 'Alert') {
            await this.jsAlertButton.waitForClickable({ timeout: 10000 });
            await this.jsAlertButton.click();
            expect(await browser.getAlertText()).toEqual("I am a JS Alert");
            await browser.acceptAlert();
            expect(await this.result).toHaveText(this.alert1Text);
        }
        if (typeAlert == 'Cancel') {
            await this.jsAlertButton.waitForDisplayed({ timeout: 10000 });
            await this.jsAlertButton.waitForClickable({ timeout: 10000 });
            await this.jsConfirmButton.click();
            expect(await browser.getAlertText()).toEqual("I am a JS Confirm");
            await browser.dismissAlert();
            expect(await this.result).toHaveText(this.alertCancelText);
        }
        if (typeAlert == 'Text') {
            await this.prompt.waitForDisplayed({ timeout: 10000 });
            await this.prompt.waitForClickable({ timeout: 10000 });
            await this.prompt.click();
            await this.waitForAlert()
            expect(await browser.getAlertText()).toEqual("I am a JS prompt");
            await browser.sendAlertText("xxx");
            await browser.acceptAlert();
            expect(await this.result).toHaveText(this.alert3Text);
        }
    }

}
export default new AlertPage();