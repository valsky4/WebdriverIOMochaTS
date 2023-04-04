import heroAppPage from "../pageobjects/interherokuapp.page";

describe('Navigate and validate landing element', async () => {
    before('', async ()=>{
        await heroAppPage.openUrlMaximazeAndValidate(heroAppPage.heroUrl+"/tables",await heroAppPage.dataTablesh3);
    })
    it('Loop through table and select element', async () => {
        await heroAppPage.loopThroughElemenetsAndClick(heroAppPage.table2RowsLocatorAsText,'jsmith@gmail.com', await heroAppPage.hrefEditLocator,30000)
        expect(browser).toHaveUrl('https://the-internet.herokuapp.com/tables#edit')
    });
});