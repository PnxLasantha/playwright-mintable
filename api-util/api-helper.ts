import { Locator, Page, expect, request } from '@playwright/test'

export class ApiHelper {
    page: Page
    constructor(page: Page) {
        this.page = page
    }

    private async checkImageLinkStatus(src: string) {
        const req = await request.newContext()
        const responce = await req.get(src)
        expect(responce.status()).toEqual(200)
    }

    private async getImageSrc(imageLink: Locator) {
        return await imageLink.getAttribute('src')
    }

    async checkBrokenImageLinks(imageLinks: Locator[]) {
        for (const imageLink of imageLinks) {
            const src = await this.getImageSrc(imageLink)
            if (src) {
                await this.checkImageLinkStatus(src)
            }
        }
    }
}
