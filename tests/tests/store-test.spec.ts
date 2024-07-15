import { test } from 'tests/page-objects/fixtures/fixture'

test.describe('Store page tests', () => {
    test('Verfiy broken image links', async ({ storepage }) => {
        //add a different timeout since the page are slow
        test.setTimeout(120000);
        await storepage.visitStorePage()
        //navigating to the music section
        await storepage.clickOnCollectionItem('Music')
        //checking if each of the images links are broken using http get call 
        await storepage.verifyBrokenImageLinks()
    })
})
