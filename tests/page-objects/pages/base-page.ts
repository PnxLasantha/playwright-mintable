import { Page } from '@playwright/test'


export class BasePage {
    page: Page
    constructor(page: Page) {
        this.page = page
    }

    errorText = (errorMessage: string) => this.page.getByText(errorMessage)

    async verfiyErrorVisible(errorMessage): Promise<boolean> {
        await this.errorText(errorMessage).waitFor({ state: 'visible' })
        return await this.errorText(errorMessage).isVisible()
    }

    async wait() {
        await this.page.waitForTimeout(3000)
    }
}
