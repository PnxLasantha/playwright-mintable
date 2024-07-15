import { test as basetest } from '@playwright/test'
import { StorePage } from '../pages/store-page'
import { LoginPage } from '../pages/login-page'
import { HomePage } from '../pages/home-page'
import { BasePage } from 'page-objects/pages/base-page'

type Pages = {
    storepage: StorePage
    loginPage: LoginPage
    homepage: HomePage
    basePage : BasePage
}
const testFixture = basetest.extend<Pages>({

    basePage: async ({ page }, use) => {
        await use(new BasePage(page))
    },
    loginPage: async ({ page }, use) => {
        await use(new LoginPage(page))
    },
    storepage: async ({ page }, use) => {
        await use(new StorePage(page))
    },

    homepage: async ({ page }, use) => {
        await use(new HomePage(page))
    },
})

export const test = testFixture
export const expect = testFixture.expect
