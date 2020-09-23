const { expect } = require('chai');
const { IndexPage } = require('../pages/index.page')

describe('angularjs homepage todo list', function () {
    const indexPage = new IndexPage
    before(function () {
        browser.waitForAngularEnabled(false);
        browser.driver.manage().window().maximize();
    })

    it('should add todo', async function () {
        await browser.get('http://localhost:8081/');

        await $('#text1').sendKeys('write first protractor test')
        await browser.sleep(10000)
    });
});