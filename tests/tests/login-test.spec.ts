import { test } from 'tests/page-objects/fixtures/fixture'
import { expect } from '@playwright/test'

import { loginPageErrors } from 'tests/test-data/error-messages'
import { creadentials } from 'tests/test-data/user-data'

test.describe('Login tests', () => {
    test('Check invalid credentials', async ({ basePage, loginPage }) => {
        await loginPage.visitLoginpage()
        await loginPage.clickOnLoginButton()
        await loginPage.userLogin('testuser12', 'AZA!@1123asda')
        //checking if error message is visisble
        const error = await basePage.verfiyErrorVisible(
            loginPageErrors.invalidCreadentials
        )
        expect(error).toBeTruthy()
    })

    test('Check valid login', async ({ loginPage, homepage }) => {
        //login to the application
        await loginPage.visitLoginpage()
        await loginPage.clickOnLoginButton()
        await loginPage.userLogin(creadentials.email, creadentials.password)

        await homepage.clickOnUserDetailsDropdown()
        //Verfiy welcome message for the user
        await expect(homepage.userID(creadentials.userid)).toBeVisible()
    })
})
