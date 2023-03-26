import heroAppPage from "../pageobjects/interherokuapp.page";

describe('Modal interaction', () => {
    before('Open browser and configure window',async () => {
        heroAppPage.openUrlMaximazeAndValidate(heroAppPage.heroUrl + "/exit_intent", await heroAppPage.exitIntentModalH3)
    })
    it('Wait modal to be displayed and interact with the content of it',async () => {
        heroAppPage.modalInteraction();
    });
});