import basePage from "./base.page";

class CalendarPage extends basePage {
    private get calendarUrl1() { return ("https://www.globalsqa.com/demo-site/datepicker/") }
    private get dropDownCalndarTab() { return $("//*[@id='DropDown DatePicker']") }
    private get iconCalendarTab() { return $("//*[@id='Icon Trigger']") }
    private get elementPageValidator() { return $("#Simple Date Picker") }
    private get calendarIcon() { return $("//*[@class='ui-datepicker-trigger']") }

    private get datePickerId() { return $("#datepicker") }
    private get simpleDatePickerIframe() { return $("//iframe[contains(@data-src,'datepicker/default.html')]") }
    private get dropDownDatePickerIframe() { return $("//iframe[contains(@data-src,'datepicker/dropdown-month-year.html')]") }
    private get loopTrhoughCalendarIframe() { return $("//iframe[contains(@data-src,'datepicker/icon-trigger.html')]") }
    private get selectMonth() { return $('[data-handler=selectMonth]') }
    private get selectYear() { return $('[data-handler=selectYear]') }
    private get datePickerTitle() {return $("//div[@class='ui-datepicker-title']")};
    private get backButtonCalendar() {return $("//span[@class='ui-icon ui-icon-circle-triangle-w']")}

    selectDay(day: number) {
        return $(`//*[@id='ui-datepicker-div']//table//td[@data-handler='selectDay']/a[text()="${day}"]`)
    }



    async openPage1() {
        this.openUrlMaximazeAndValidate(this.calendarUrl1, await this.elementPageValidator)
    }

    async simpleDatePikcer() {
        await this.simpleDatePickerIframe.waitForExist();
        await browser.switchToFrame(await this.simpleDatePickerIframe);
        await this.datePickerId.setValue('01/03/2021');
    }

    async dropDownDatePicker(day: number, month: string, year: number) {
        await this.dropDownCalndarTab.click();
        await this.dropDownDatePickerIframe.waitForExist();
        await browser.switchToFrame(await this.dropDownDatePickerIframe);
        await this.datePickerId.click();
        await this.selectMonth.selectByVisibleText(month);
        await this.selectYear.selectByVisibleText(year);
        await this.selectDay(day).click();

    }

    async loopThrougUntillAndClick() {
        await this.iconCalendarTab.click();
        await this.loopTrhoughCalendarIframe.waitForExist();
        await browser.switchToFrame(await this.loopTrhoughCalendarIframe);
        await this.calendarIcon.click();

        await this.clickUntilTextDisplayedWithInitialValue(await this.backButtonCalendar, await this.datePickerTitle, "May 2021")
        const element =  (await this.datePickerTitle).getText();
        await browser.pause(2000);
    }

}
export default new CalendarPage();