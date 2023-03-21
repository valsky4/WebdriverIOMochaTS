import basePage from "./base.page";

class DropDownPage extends basePage {
    private get registrationDemoUrl() { return ('https://demo.automationtesting.in/Register.html') };
    private get h2Register() { return $("//h2[text()='Register']") };

    private get countryContainer() { return $("//span[@aria-labelledby='select2-country-container']") };
    private get searchInput() { return $("//input[@class='select2-search__field']")};

    async openDropDownPage() {
        await this.openUrlMaximazeAndValidate(this.registrationDemoUrl, await this.h2Register);
    }

    async selectCountryDynamicDropdown(coutryName: string) {
        const countryElement = $(`//*[@id='select2-country-results']/li[text()='${coutryName}']`);
        await this.countryContainer.click();
        await this.searchInput.setValue(coutryName);
        await countryElement.click();
    }

}

export default new DropDownPage();