import basePage from "./base.page";

class GooglePage extends basePage {
    public get googleUrl() { return ("https://www.google.com/") }
    public get acceptAllButtonText() { return $('#L2AGLb') }
    public get searchedElementsLocator() { return ("//a") }


}
export default new GooglePage();