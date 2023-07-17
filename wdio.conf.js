import 'path';
import allure from 'allure-commandline';
import video from 'wdio-video-reporter';


export const config = {


   // hostname: 'localhost',
   // port: 4723,
    user: "alinedavanse2",
    key: "8LtgzGqJBz82pTUcqhqt",
    services: ['browserstack'],
    //services: ['appium'],
    specs: [
        './test/specs/**/*.js'
    ],
    // Patterns to exclude.
    exclude: [
        // 'path/to/excluded/files'
    ],

    maxInstances: 10,

    capabilities: [{
        // capabilities for local Appium web tests on an Android Emulator
             // "platformName": "Android",
            //   "platformVersion": "9.0",
            //   "deviceName": "emulator-5554",
            //   "automationName": "UiAutomator2",
            //   "app": "C://Users//aline//AndroidStudioProjects//TestesMobileEBACSHOP//app//android//loja-ebac.apk",
             // "path": '/wd/hub',
            //   "appWaitActivity": "com.woocommerce.android.ui.login.LoginActivity",
            //   'newCommandTimeout': 240

            'app' : 'bs://e70b09b2c725a6fa55960160f7b866dbdcffcf26',
            'device' : 'Samsung Galaxy S10e',
            'os_version' : '9.0',
            'project' : 'Meu primeiro projeto em Device Farm',
            'build' : '1',
            'name': 'teste_login'

    }],

    logLevel: 'info',

    bail: 0,

    baseUrl: '',

    waitforTimeout: 10000,

    connectionRetryTimeout: 120000,

    connectionRetryCount: 3,

   // services: ['appium'],

    framework: 'mocha',

    reporters: ['spec',
    [video, {
          saveAllVideos: true,       // If true, also saves videos for successful test cases
          videoSlowdownMultiplier: 50, // Higher to get slower videos, lower for faster videos [Value 1-100]
        }],
        ['allure', {
          outputDir: 'allure-results',
          disableWebdriverStepsReporting: false,
          disableWebdriverScreenshotsReporting: false,
        }],
      ],
        afterStep: function (step, scenario, { error, duration, passed }, context) {
            driver.takeScreenshot();
        },

    mochaOpts: {
        ui: 'bdd',
        timeout: 300000
    },

}
