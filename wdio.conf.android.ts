
import type { Options } from '@wdio/types'
import { config as baseConfig } from './wdio.conf'

import path from "path";

export const config: Options.Testrunner = {
    ...baseConfig,
    services: ['appium'],
    port:4723,
    path: '/',
    capabilities: [{
        platformName: "Android",
        "appium:deviceName": "Pixel6",
        "appium:automationName": "UiAutomator2",
        "appium:platformVersion": "13",
        "appium:app": path.join(process.cwd(), "./app/android/ApiDemos-debug.apk"),
    },
],
}
