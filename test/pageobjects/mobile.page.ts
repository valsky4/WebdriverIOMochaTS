import basePage from "./base.page";
class MobilePage extends basePage {

    public get appSectionAndroid() { return $("~App") }
    public get actiorBarAndroid() { return $("~Action Bar") }

    public get pickerViewTab() { return $("~Picker View") }
    public get greenScreen() { return $("~Green color component value") }


    async validateElementAndroid() {
        await this.appSectionAndroid.waitForDisplayed();
        await this.appSectionAndroid.click();
        expect(this.actiorBarAndroid).toBeDisplayed();

    }

    async validateElementiOs() {
        expect(this.pickerViewTab).toBeDisplayed();
        await this.pickerViewTab.click();
        expect(this.greenScreen).toBeDisabled();

    }

}
export default new MobilePage();