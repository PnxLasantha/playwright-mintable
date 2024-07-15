import { Page } from '@playwright/test'
import { ApiHelper } from '../../../api-util/api-helper'

export class StorePage {
    page: Page
    constructor(page: Page) {
        this.page = page
    }

    collectionItems = (itemName: string) =>
        this.page.getByTestId(`multitoggle-${itemName}`)
    resultsText = () => this.page.getByText('Showing ')
    imageLinks = () => this.page.locator('//td//img')

    async visitStorePage() {
        await this.page.goto('/stores')
    }

    async clickOnCollectionItem(itemName: string) {
        await this.collectionItems('All').click()
        await this.collectionItems(itemName).click()
        await this.resultsText().waitFor({ state: 'visible' })
    }

    async verifyBrokenImageLinks() {
        const getImageLinks = await this.imageLinks().all()
        const checkImages = new ApiHelper(this.page)
        await checkImages.checkBrokenImageLinks(getImageLinks)
    }
}
