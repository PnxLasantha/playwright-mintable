import mintology from '@api/mintology'

export class WalletActions {
    async createCustodialWallet(
        email = process.env.EMAIL
    ): Promise<string | undefined> {
        const responce = await mintology.custodialWalletsCreate({
            email: email,
        })
        return responce.data.data.wallet_address
    }
}
