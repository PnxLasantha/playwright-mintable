import { test } from '@fixture/fixture'

test.describe('Login', () => {
    test('Verfiy broken image links', async ({storepage}) => {
       await storepage.visitStorePage()
       await storepage.clickOnCollectionItem('Music')
       await storepage.verifyBrokenImageLinks()
    })
})
