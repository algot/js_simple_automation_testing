const { ExpectedConditions: EC, browser } = require('protractor');
const { expect } = require('chai');


describe('github automation testing', function () {
    const rootElement = $('#user-repositories-list');
    before(function () {
        browser.ignoreSynchronization = true;
        browser.driver.manage().window().maximize();
    })

    it('Nav bar navigation test', async function () {
        await browser.get('https://github.com/PotapovDim');

        const overview = $('[aria-label="User profile"] a:nth-child(1)');
        const repos = $('[aria-label="User profile"] a:nth-child(2)');

        // await overview.click();
        // expect(await overview.getText()).to.eql('Overview');

        await repos.click();
        expect(await repos.getText()).to.includes('Repositories');

        await browser.wait(EC.visibilityOf(rootElement), 10000, 'Repos should be visible');

    });

    it('Search repos by word', async function () {
        await browser.get('https://github.com/PotapovDim?tab=repositories');

        const searchInput = $('input#your-repos-filter');
        const repos = rootElement.$$('[itemprop="owns"]');

        await browser.wait(EC.visibilityOf(rootElement), 10000, 'Repos should be visible');
        await searchInput.sendKeys('protractor');
        await browser.wait(async () => { return (await repos.count()) === 2 }, 10000, 'Repos should be visible');

        const reposCount = await repos.count();
        for (let i = 0; i < reposCount; i++) {
            expect(await repos.get(i).getText()).to.include('protractor');
        }
    })
});