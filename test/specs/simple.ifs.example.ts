import googlePage from "../pageobjects/google.page";

describe('freature: elements', () => {
    before('Load browser and validate', async() => {
        googlePage.openUrlMaximazeAndValidate(googlePage.googleUrl, await googlePage.acceptAllButtonText)
    });
    it('should find all link text', async () => {


        await googlePage.ifItsDiplayedClick(await googlePage.acceptAllButtonText) 

        await googlePage.loopAndIfMatchTextPrint(googlePage.searchedElementsLocator)

    });
});