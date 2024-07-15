import test, { expect } from '@playwright/test'
import { WalletActions } from '../api-util/wallet-actions'
import mintology from '@api/mintology'
import { Miniting } from '../api-util/minting'
import { Authorization } from '../api-util/authorization'

test.describe('Wallet Actions', () => {
    const createWallet = new WalletActions()
    const mint = new Miniting()
    const auth = new Authorization()
    test('Autorize wallet token', async () => {
        mintology.auth(`${process.env.AUTH_CODE}`)
        mintology.server(`${process.env.MINTOLOGY_DEV_SERVER}`)
        
        let wallertAddress: string
        let token: string

        await test.step('create wallet', async () => {
            wallertAddress = await createWallet.createCustodialWallet()
        })
        await test.step('minting', async () => {
            token = await mint.mintanItem()
        })
        await test.step('Authorization', async () => {
            const status = await auth.verfiyTokenStatus(token, wallertAddress)
            expect(status).toBeTruthy()
        })
    })
})
