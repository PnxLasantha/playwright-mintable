import { Page } from '@playwright/test'

export class HomePage {
    page: Page
    constructor(page: Page) {
        this.page = page
    }

    userID = (userId: string) =>
        this.page.getByRole('heading', { name: `Welcome Back, ${userId}!` })
    minatableLogo = () =>
        this.page.getByRole('img', { name: '/static/media/mintable-logo-' })
    userDetailDropdown = () =>
        this.page.locator(`div[class^='UserProfileDropdown_userButton']`)
    async clickOnUserDetailsDropdown() {
        await this.userDetailDropdown().click()
    }
}
