const { expect } = require('chai')

describe('angularjs homepage todo list', function () {
    before(function () {
        browser.ignoreSynchronization = true;
        browser.driver.manage().window().maximize();
    })

    it('should add todo', async function () {

        const todoListText = element(by.model('todoList.todoText'));

        await browser.get('https://angularjs.org');

        await todoListText.sendKeys('write first protractor test');
        await element(by.css('[value="add"]')).click();

        const todoList = element.all(by.repeater('todo in todoList.todos'));
        expect(await todoList.count()).to.equal(3);
        expect(await todoList.get(2).getText()).to.equal('write first protractor test');

        await todoList.get(2).element(by.css('input')).click();
        const completedAmount = element.all(by.css('.done-true'));
        expect(await completedAmount.count()).to.equal(2);
    });
});