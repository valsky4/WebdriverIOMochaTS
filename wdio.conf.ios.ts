
import type { Options } from '@wdio/types'
import { config as baseConfig } from './wdio.conf'

import path from "path";

export const config: Options.Testrunner = {
    ...baseConfig,
    services: ['appium'],
    port:4723,
    path: '/',
    capabilities: [{
        platformName: "IOS",
        "appium:deviceName": "iPhone 14 Pro Max",
        "appium:automationName": "XCUItest",
        "appium:platformVersion": "16.2",
        "appium:app": path.join(process.cwd(), "./app/iOs/UIKitCatalog.app"),
    },
],
}
