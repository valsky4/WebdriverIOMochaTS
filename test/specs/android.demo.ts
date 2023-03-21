import mobilePage from "../pageobjects/mobile.page";

describe('Android Element Tests', async () => {
    it('Find element by accessibility id', async () => {
        await mobilePage.validateElementAndroid();
    });
});