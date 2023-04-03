import heroAppPage from "../pageobjects/interherokuapp.page";

describe('Hover over element', async () => {
    before("Open browser and validate", async () =>{
        await heroAppPage.openUrlMaximazeAndValidate(heroAppPage.heroUrl + "/hovers",await heroAppPage.hoversPageH3)

    });
    it('Hover over and click button from hover section', async () => {
       await heroAppPage.loopAndHoverUntilIsDisplayed(heroAppPage.elementsHoverString,await heroAppPage.elementHoverUser1, 30000);
       await heroAppPage.clickUserAndValidateUrl();
    });
});