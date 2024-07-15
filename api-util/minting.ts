import mintology from '@api/mintology'

export class Miniting {
    async mintanItem(): Promise<string> {
        const response = await mintology.mintMint(
            {
                metadata: {
                    name: 'playwright',
                    image: `${process.env.IMAGE_LINK}`,
                    description: 'playwright',
                    attributes: [{ trait_type: 'trtype', value: 'value' }],
                    title: 'playwright',
                },
                email: `${process.env.EMAIL}`,
            },
            {
                projectId: `${process.env.PROJECT_ID}`,
            }
        )

        return response.data.data.token_id
    }
}
