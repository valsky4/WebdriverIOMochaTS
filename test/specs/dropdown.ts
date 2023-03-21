import demoDropdownPage from "../pageobjects/demo.dropdown.page";

describe('DropDown', () => {
    beforeEach("Browser config and url", async () => {
        await demoDropdownPage.openDropDownPage()

    });
    it('Perform dropdown with option 2', async () => {

        await demoDropdownPage.selectCountryDynamicDropdown("Bangladesh")

    });
});