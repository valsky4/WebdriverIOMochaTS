class Page {

    async openUrlMaximazeAndValidate(url: string, locator: WebdriverIO.Element) {
        await browser.url(url);
        await browser.maximizeWindow();
        await locator.isDisplayed();
    }
    // if loop example 
    async ifItsDiplayedClick(locator: WebdriverIO.Element) {
        if (await locator.isDisplayed()) {
            await locator.click()
        }
    }
    // for + if
    async loopAndIfMatchTextPrint(locator: string) {
        const elementsLocator = await $$(locator)
        for (let i = 0; i < elementsLocator.length; i++) {
            const linkText = await elementsLocator[i].getText();
            if (linkText !== "") {
                console.log('Link text::::::', linkText);
            }
        }

    }

    async loopAndHoverUntilIsDisplayed(locator: string, expectedElement: WebdriverIO.Element, timeoutMs: number) {
        const elementsLocator = await $$(locator);
        let isDisplayed = false;
        const startTime = Date.now();
        while (!isDisplayed && Date.now() - startTime < timeoutMs) {
            for (const el of elementsLocator) {
                if (await el.isDisplayed()) {
                    await el.moveTo();
                    if (await expectedElement.isDisplayed()) {
                        isDisplayed = true;
                        break;
                    }
                }
            }
            if (!isDisplayed) {
                await browser.pause(5000); // wait for a short period before trying again
            }
        }
        if (!isDisplayed) {
            throw new Error(`Timeout: Could not find target element within ${timeoutMs} ms`);
        }
    }

    async loopThroughElemenetsAndClick(locator: string, expectedText: string, elementToClick: WebdriverIO.Element, timeoutMs: number) {
        const elementsLocator = await $$(locator);
        const startTime = Date.now();
        let isTargetFound = false;

        while (!isTargetFound && Date.now() - startTime < timeoutMs) {
            for (const el of elementsLocator) {
                const row = await el.getText()
                if (row.includes(expectedText)) {
                    await elementToClick.click();
                    isTargetFound = true;
                    break
                }
            }
        }
        if (!isTargetFound) {
            throw new Error(`Timeout: Could not find target element within ${timeoutMs} ms`);
        }
    }


    async clickAndWaitToBeVisible(buttonLocator: WebdriverIO.Element, expectedElement: WebdriverIO.Element) {
        if (await buttonLocator.isDisplayed()) {
            await buttonLocator.click()
        }
        await expectedElement.waitForDisplayed({ timeout: 30000 })
    }

    async clickUntilTextDisplayed(clickElement: WebdriverIO.Element, textElement: WebdriverIO.Element, targetText: string, timeoutMs: number): Promise<void> {
        let isTextDisplayed = false;
        let startTime = Date.now();

        while (!isTextDisplayed) {
            const text = await textElement.getText();

            if (text === targetText) {
                isTextDisplayed = true;
            } else if (Date.now() - startTime >= timeoutMs) {
                throw new Error(`Timeout: Could not find target text (${targetText}) within ${timeoutMs} ms`);
            } else {
                await clickElement.click();
            }
        }
    }

    async clickUntilTextDisplayedWithInitialValue(clickElement: WebdriverIO.Element, textElement: WebdriverIO.Element, targetText: string): Promise<void> {
        const initialText = await textElement.getText();

        if (initialText === targetText) {
            return;
        }

        await this.clickUntilTextDisplayed(clickElement, textElement, targetText, 60000);
    }

    async waitForAlert(timeoutMs = 60000, intervalMs = 500) {
        return browser.waitUntil(async () => {
            try {
                await browser.getAlertText();
                return true;
            } catch (err) {
                return false;
            }
        }, {
            timeout: timeoutMs,
            timeoutMsg: `Alert did not appear within ${timeoutMs / 1000} seconds`,
            interval: intervalMs
        });
    }
}
export default Page