import type { Options } from '@wdio/types'
import { config as baseConfig } from './wdio.conf'

export const config: Options.Testrunner = {
    ...baseConfig,
    services: ['geckodriver'],
    capabilities: [,
    {

        maxInstances: 1,
        browserName: 'firefox',
        acceptInsecureCerts: true

    }],
}
