import { test, expect } from '@playwright/test'

import mintology from '@api/mintology'

test.describe('Url check', async () => {
    test('verify images are displaying', async ({ page, request }) => {
        await page.goto('')
        console.log(page.url())

        await page.getByTestId('multitoggle-Music').click()
        await page.getByText('Showing ').waitFor({ state: 'visible' })
        const imgLinks = await page.locator('//td//img').all()
        for (const link of imgLinks) {
            let src = await link.getAttribute('src')
            console.info(src)
            if (src) {
                const get = await request.get(src)
                console.log(get.status())
                expect(get.status()).toEqual(200)
            }
        }
    })

    test('create a mint', async ({ request }) => {
        //'43925359404845532092817178379174716572364073241775397277882415244257069130017' jelly22fi$H

        await mintology.auth(
            'MDFKMlIxMjk1ODJTQVA0TVlINlBGS1pYNzI6NDg3MDE5Y2E0ZGRlMzk2YTQ2MjFlZDllM2RiZDk2YjMwNTBlZjg2ODk1MzUxOGZiMWMzZTE1YjE5ZDNiMjBlNw'
        )
        await mintology.server('https://api.mintology.dev')
        /*  await  mintology.custodialWalletsCreate({email:'playwright-lasantha@1secmail.com'})
      .then(({ data }) => console.log(data))
      .catch(err => console.error(err)); */

        /*     await mintology.mintMint({
        metadata: {
          name: 'abc',
          image: 'https://en.wikipedia.org/wiki/Orange_%28fruit%29#/media/File:Oranges_-_whole-halved-segment.jpg',
          description: 'kkkk',
          attributes: [{trait_type: 'qw', value: 'eww'}],
          title: 'trr'
        },
        email: 'playwright-lasantha@1secmail.com'
      }, {
        projectId: '01J2RDCGZ6T1FKPD39N1H6HCW7'
      })
        .then(({ data }) => console.log(data))
        .catch(err => console.error(err)); */
        await mintology
            .authorize(
                {
                    token_id:
                        '43925359404845532092817178379174716572364073241775397277882415244257069130017',
                    wallet_address:
                        '0x611cdf54c18edd4d6777970b54a4a92b51b70e04',
                    email: 'playwright-lasantha@1secmail.com',
                },
                {
                    projectId: '01J2RDCGZ6T1FKPD39N1H6HCW7',
                }
            )
            .then(({ data }) => console.log(data))
            .catch((err) => console.error(err))
    })
})
