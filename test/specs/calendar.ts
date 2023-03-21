import calendarPage from "../pageobjects/calendar.page";


describe('Calendar selector', () => {
    it('simple date picker', async () => {
        await calendarPage.openPage1();
        await calendarPage.simpleDatePikcer();
    });
    it.skip('drop down date picker', async () => {
        await calendarPage.openPage1();
        const day=12 ,month = 'Mar', year = 2020;
        await calendarPage.dropDownDatePicker(day, month, year)
    });
    it('Loop through untill element is presented', async ()=>{
        await calendarPage.openPage1();
        await calendarPage.loopThrougUntillAndClick();
    })
});
