import alertsPage from "../pageobjects/alerts.page"; 


describe('Alert examples', async () => {
  
    beforeEach("Browser config and url", async () => {
        await alertsPage.openPage()

    });
    it('Accept alert', async () => {
        await alertsPage.handleAlert('Alert')

    });
    it('Cancel alert', async () => {
        await alertsPage.handleAlert('Cancel');
    });
    it('Text in alert', async () => {
        await alertsPage.handleAlert('Text');
    });
});

