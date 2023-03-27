import heroAppPage from "../pageobjects/interherokuapp.page";

describe('Drag and drop example',async () => {
    before('Navigate to page ', async () => {
        await heroAppPage.openUrlMaximazeAndValidate(heroAppPage.heroUrl + "/drag_and_drop", await heroAppPage.exitIntentModalH3)
    })
    it('Drag and drop', async () => {
        await heroAppPage.dragAndDrop();
    });
});