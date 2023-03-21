import heroAppPage from "../pageobjects/interherokuapp.page";

describe('Dynamically loaded page example', () => {
    beforeEach("Browser config and url", async () => {
        await heroAppPage.openUrlMaximazeAndValidate(heroAppPage.heroUrl + "/dynamic_loading/1", await heroAppPage.validatorElementText)

    });
    it('Click and wait to be loaded', async () => {

        await heroAppPage.clickAndWaitToBeVisible(await heroAppPage.startButtonLocator, await heroAppPage.helloWorldLocator);

    });
});