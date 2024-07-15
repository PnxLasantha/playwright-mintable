import { test } from '@fixture/fixture'
import { expect } from '@playwright/test'
import { loginPageErros } from 'test-data/error-messages'

test.describe('Login tests', () => {
    test.only('Successful login', async ({ basePage, loginPage }) => {
        await loginPage.visitLoginpage()
        await loginPage.clickOnLoginButton()
        await loginPage.userLogin('abc', 'AZA!@1123asda')
        const error = await basePage.verfiyErrorVisible(
            loginPageErros.invalidCreadentials
        )
        expect(error).toBeTruthy()
    })

    test('Failed login', async () => {})
})
