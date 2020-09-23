exports.config = {
    seleniumAddress: 'http://localhost:4444/wd/hub',
    specs: ['./specs/github.spec.js'],
    framework: 'mocha',
    mochaOpts: {
        timeout: 10000
    },
    SELENIUM_PROMISE_MANAGER: false
};