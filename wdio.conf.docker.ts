import type { Options } from '@wdio/types'
import { config as baseConfig } from './wdio.conf'

export const config: Options.Testrunner = {
    ...baseConfig,
    hostname: 'localhost',
    port: 4444,
    maxInstances: 5,
    capabilities: [
        {
            maxInstances: 2,
            browserName: 'chrome',
            acceptInsecureCerts: true,
            'goog:chromeOptions': {
            args: ['--disable-gpu','--disable-dev-shm-usage']
            }
        },
        {
            maxInstances: 2,
            browserName: 'firefox',
            acceptInsecureCerts: true,
            'goog:chromeOptions': {
            //args: ['--disable-gpu','--disable-dev-shm-usage']
            }
        }
    ],
    
    services: []
}
