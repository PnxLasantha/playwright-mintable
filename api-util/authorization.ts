import mintology from '@api/mintology'

export class Authorization {
    async verfiyTokenStatus(
        token: string,
        walletAddress: string,
        email = process.env.EMAIL,
        projectId = process.env.PROJECT_ID
    ): Promise<boolean> {
        let response
        if (projectId) {
            response = await mintology.authorize(
                {
                    token_id: token,
                    wallet_address: walletAddress,
                    email: email,
                },
                {
                    projectId: projectId,
                }
            )
        }

        return response.data.data.authorized
    }
}
