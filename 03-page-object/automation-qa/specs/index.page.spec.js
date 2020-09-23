const { expect } = require('chai');
const { IndexPage } = require('../pages/index.page');

describe('Set values to fields', function () {
    const indexPage = new IndexPage();

    beforeEach(async function () {
        browser.waitForAngularEnabled(false);
        browser.driver.manage().window().maximize();
        await browser.get('http://localhost:8081/');
    });

    afterEach(async function () {
        await browser.sleep(3000);
    });

    it('set first and second fields', async function () {
        const dataObj = {
            text1: 'text 1 from test 1',
            text2: 'text 2 from test 1',
        };
        await indexPage.sendKeys(dataObj);
    });

    it('set second and third fields', async function () {
        const dataObj = {
            text2: 'text 2 from test 2',
            text3: 'text 3 from test 2',
        };
        await indexPage.sendKeys(dataObj);
    });
});
