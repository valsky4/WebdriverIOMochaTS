import mobilePage from "../pageobjects/mobile.page";

describe('iOS Demo Test', async () => {
    it('Find element experimentation', async () => {
        await mobilePage.validateElementiOs();
    });
});