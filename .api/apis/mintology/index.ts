import type * as types from './types'
import type { ConfigOptions, FetchResponse } from 'api/dist/core'
import Oas from 'oas'
import APICore from 'api/dist/core'
import definition from './openapi.json'

class SDK {
    spec: Oas
    core: APICore

    constructor() {
        this.spec = Oas.init(definition)
        this.core = new APICore(this.spec, 'mintology/v1.0.0 (api/6.1.2)')
    }

    /**
     * Optionally configure various options that the SDK allows.
     *
     * @param config Object of supported SDK options and toggles.
     * @param config.timeout Override the default `fetch` request timeout of 30 seconds. This number
     * should be represented in milliseconds.
     */
    config(config: ConfigOptions) {
        this.core.setConfig(config)
    }

    /**
     * If the API you're using requires authentication you can supply the required credentials
     * through this method and the library will magically determine how they should be used
     * within your API request.
     *
     * With the exception of OpenID and MutualTLS, it supports all forms of authentication
     * supported by the OpenAPI specification.
     *
     * @example <caption>HTTP Basic auth</caption>
     * sdk.auth('username', 'password');
     *
     * @example <caption>Bearer tokens (HTTP or OAuth 2)</caption>
     * sdk.auth('myBearerToken');
     *
     * @example <caption>API Keys</caption>
     * sdk.auth('myApiKey');
     *
     * @see {@link https://spec.openapis.org/oas/v3.0.3#fixed-fields-22}
     * @see {@link https://spec.openapis.org/oas/v3.1.0#fixed-fields-22}
     * @param values Your auth credentials for the API; can specify up to two strings or numbers.
     */
    auth(...values: string[] | number[]) {
        this.core.setAuth(...values)
        return this
    }

    /**
     * If the API you're using offers alternate server URLs, and server variables, you can tell
     * the SDK which one to use with this method. To use it you can supply either one of the
     * server URLs that are contained within the OpenAPI definition (along with any server
     * variables), or you can pass it a fully qualified URL to use (that may or may not exist
     * within the OpenAPI definition).
     *
     * @example <caption>Server URL with server variables</caption>
     * sdk.server('https://{region}.api.example.com/{basePath}', {
     *   name: 'eu',
     *   basePath: 'v14',
     * });
     *
     * @example <caption>Fully qualified server URL</caption>
     * sdk.server('https://eu.api.example.com/v14');
     *
     * @param url Server URL
     * @param variables An object of variables to replace into the server URL.
     */
    server(url: string, variables = {}) {
        this.core.setServer(url, variables)
    }

    /**
     * <strong>IMPORTANT</strong>: Call from the back-end.<br/><br/>This endpoint is used to
     * check if a user owns a particular token (or any token of a particular collection). You
     * will need to authenticate using your Mintology API Key, and also the Project ID that you
     * set for one of your projects. If you do not specify a contract_address, we will use the
     * contract associated with your project ID. If you do not specify a token_id, we will
     * check if the wallet contain any tokens from the contract.
     *
     * @summary Authorize
     * @throws FetchError<400, types.AuthorizeResponse400> Error
     * @throws FetchError<422, types.AuthorizeResponse422> Validation Failed
     */
    authorize(
        body: types.AuthorizeBodyParam,
        metadata: types.AuthorizeMetadataParam
    ): Promise<FetchResponse<200, types.AuthorizeResponse200>> {
        return this.core.fetch('/{projectId}/authorize', 'post', body, metadata)
    }

    /**
     * <strong>IMPORTANT</strong>: Call from the back-end.<br/><br/>This endpoint is used to
     * get the list of tokens that a user owns from a particular collection. You will need to
     * authenticate using your Mintology API Key, and also the Project ID that you set for your
     * project. If you do not specify a contract_address, we will use the contract associated
     * with your project.
     *
     * @summary List Authorized Tokens
     * @throws FetchError<400, types.AuthorizeInventoryResponse400> Error
     * @throws FetchError<422, types.AuthorizeInventoryResponse422> Validation Failed
     */
    authorizeInventory(
        body: types.AuthorizeInventoryBodyParam,
        metadata: types.AuthorizeInventoryMetadataParam
    ): Promise<FetchResponse<200, types.AuthorizeInventoryResponse200>>
    authorizeInventory(
        metadata: types.AuthorizeInventoryMetadataParam
    ): Promise<FetchResponse<200, types.AuthorizeInventoryResponse200>>
    authorizeInventory(
        body?:
            | types.AuthorizeInventoryBodyParam
            | types.AuthorizeInventoryMetadataParam,
        metadata?: types.AuthorizeInventoryMetadataParam
    ): Promise<FetchResponse<200, types.AuthorizeInventoryResponse200>> {
        return this.core.fetch(
            '/{projectId}/authorize/inventory',
            'post',
            body,
            metadata
        )
    }

    /**
     * Retrieve project information such as name and contract_address. <br/> Alternative : Use
     * “Project Retrieve” from backend if you need a more in-depth project details.
     *
     * @summary Project Info
     * @throws FetchError<400, types.MetaInfoResponse400> Error
     * @throws FetchError<422, types.MetaInfoResponse422> Validation Failed
     */
    metaInfo(
        metadata: types.MetaInfoMetadataParam
    ): Promise<FetchResponse<200, types.MetaInfoResponse200>> {
        return this.core.fetch('/{projectId}', 'get', metadata)
    }

    /**
     * <strong>IMPORTANT</strong>: Call from the back-end.
     * Update your NFT metadata that consist of things like: token name, image, animation_url
     * and etc...
     * The URL where you can access the metadata is
     * https://metadata.mintology.app/{projectId}/{tokenId} (for production), or
     * https://metadata.mintology.dev/{projectId}/{tokenId} (for the testing environment).
     *
     *
     * @summary Update NFT Metadata
     * @throws FetchError<400, types.MetadataUpdateResponse400> Error
     * @throws FetchError<422, types.MetadataUpdateResponse422> Validation Failed
     */
    metadataUpdate(
        body: types.MetadataUpdateBodyParam,
        metadata: types.MetadataUpdateMetadataParam
    ): Promise<FetchResponse<200, types.MetadataUpdateResponse200>> {
        return this.core.fetch(
            '/{projectId}/metadata/{tokenId}',
            'put',
            body,
            metadata
        )
    }

    /**
     * Generating an ImmutableX L2 user account for an Ethereum L1 account
     *
     * @summary Register IMX User
     * @throws FetchError<400, types.ImxRegisterResponse400> Error
     * @throws FetchError<422, types.ImxRegisterResponse422> Validation Failed
     */
    imxRegister(
        body: types.ImxRegisterBodyParam,
        metadata: types.ImxRegisterMetadataParam
    ): Promise<FetchResponse<200, types.ImxRegisterResponse200>> {
        return this.core.fetch(
            '/{projectId}/imx/register',
            'post',
            body,
            metadata
        )
    }

    /**
     * Minting an NFT refers to the process of creating a unique digital asset on a IMX
     * blockchain, typically using the Ethereum network.
     *
     * @summary Mint IMX Item
     * @throws FetchError<400, types.ImxMintResponse400> Error
     * @throws FetchError<422, types.ImxMintResponse422> Validation Failed
     */
    imxMint(
        body: types.ImxMintBodyParam,
        metadata: types.ImxMintMetadataParam
    ): Promise<FetchResponse<201, types.ImxMintResponse201>>
    imxMint(
        metadata: types.ImxMintMetadataParam
    ): Promise<FetchResponse<201, types.ImxMintResponse201>>
    imxMint(
        body?: types.ImxMintBodyParam | types.ImxMintMetadataParam,
        metadata?: types.ImxMintMetadataParam
    ): Promise<FetchResponse<201, types.ImxMintResponse201>> {
        return this.core.fetch('/{projectId}/imx/mint', 'post', body, metadata)
    }

    /**
     * Transferring an NFT, or a non-fungible token, refers to the process of sending ownership
     * of the digital asset from one address on the IMX blockchain to another.
     *
     * @summary Transfer IMX Item
     * @throws FetchError<400, types.ImxTransferResponse400> Error
     * @throws FetchError<422, types.ImxTransferResponse422> Validation Failed
     */
    imxTransfer(
        body: types.ImxTransferBodyParam,
        metadata: types.ImxTransferMetadataParam
    ): Promise<FetchResponse<200, types.ImxTransferResponse200>> {
        return this.core.fetch(
            '/{projectId}/imx/transfer',
            'post',
            body,
            metadata
        )
    }

    /**
     * This API endpoint is designed for minting NFTs straight into a user's wallet.  Ideal for
     * selling NFTs, targeted airdrops, or minting collectibles.  Supports both custom Mintable
     * Wallets and standard crypto wallets.
     * <em>Note</em>: If you don't pass in a metadata object - it will create a random NFT
     * using your pre-mint data you've set up on the self serve dashboard. But if you pass in a
     * metadata object, it will mint a new NFT with the new metadata object you passed in.
     * <em>Note</em>: Keeping 'mint' and 'claim' endpoints separate simplifies analytics,
     * making it easier to track each call's specific purpose.
     *
     *
     * @summary Mint
     * @throws FetchError<400, types.MintMintResponse400> Error
     * @throws FetchError<422, types.MintMintResponse422> Validation Failed
     */
    mintMint(
        body: types.MintMintBodyParam,
        metadata: types.MintMintMetadataParam
    ): Promise<FetchResponse<201, types.MintMintResponse201>>
    mintMint(
        metadata: types.MintMintMetadataParam
    ): Promise<FetchResponse<201, types.MintMintResponse201>>
    mintMint(
        body?: types.MintMintBodyParam | types.MintMintMetadataParam,
        metadata?: types.MintMintMetadataParam
    ): Promise<FetchResponse<201, types.MintMintResponse201>> {
        return this.core.fetch('/{projectId}/mint', 'post', body, metadata)
    }

    /**
     * This endpoint will mint a free NFT to your user's wallet (which can be a Mintable
     * Wallet, or their existing crypto wallet). This is the endpoint you should use for
     * discount coupons, proof of attendance, and in general NFTs which you do not intend to
     * sell.
     * <em>Note</em>: Separating the mint and claim endpoints will allow you to clearly
     * identify the purpose of each call in your analytics.
     *
     *
     * @summary Claim
     * @throws FetchError<400, types.MintClaimResponse400> Error
     * @throws FetchError<422, types.MintClaimResponse422> Validation Failed
     */
    mintClaim(
        body: types.MintClaimBodyParam,
        metadata: types.MintClaimMetadataParam
    ): Promise<FetchResponse<201, types.MintClaimResponse201>>
    mintClaim(
        metadata: types.MintClaimMetadataParam
    ): Promise<FetchResponse<201, types.MintClaimResponse201>>
    mintClaim(
        body?: types.MintClaimBodyParam | types.MintClaimMetadataParam,
        metadata?: types.MintClaimMetadataParam
    ): Promise<FetchResponse<201, types.MintClaimResponse201>> {
        return this.core.fetch('/{projectId}/claim', 'post', body, metadata)
    }

    /**
     * <strong>IMPORTANT</strong>: Call from the back-end.<br/><br/> Create a new Mintable
     * Wallet. This also creates a Mintable account, so users have the ability to claim custody
     * of their private keys. Please note that a username can be provided: if you do not
     * provide a username, a random one will be generated and the user will be able to modify
     * it from the <a href='https://mintable.com'>Mintable</a> website. This is a display name
     * used on the site to reference the user, since the email address is
     * confidential.<br/><br/>This endpoint should always be called from your backend to
     * prevent any potential spamming or exposing your private API key.
     *
     * @summary Create Mintable Wallets
     * @throws FetchError<400, types.CustodialWalletsCreateResponse400> Error
     * @throws FetchError<422, types.CustodialWalletsCreateResponse422> Validation Failed
     */
    custodialWalletsCreate(
        body: types.CustodialWalletsCreateBodyParam
    ): Promise<FetchResponse<201, types.CustodialWalletsCreateResponse201>> {
        return this.core.fetch('/custodial-wallets', 'post', body)
    }

    /**
     * <strong>IMPORTANT</strong>: Call from the back-end.<br/><br/> Once a user has taken
     * custody of their Mintable Wallet, this permanently removes the private key from our
     * systems. To ensure the user has indeed received and stored their private key, we require
     * you to send us a hash of the last 8 characters of the key itself: once we have checked
     * it against the actual key and, if the match is successful, we delete the key. The hash
     * function used here is SHA-256 (please see <a
     * href='https://xorbin.com/tools/sha256-hash-calculator'>this example</a>).<br/><br/>This
     * endpoint should always be called from your backend to prevent any potential spamming or
     * exposing your private API key.
     *
     * @summary Remove Mintable Wallets
     * @throws FetchError<400, types.CustodialWalletsRemoveResponse400> Error
     * @throws FetchError<422, types.CustodialWalletsRemoveResponse422> Validation Failed
     */
    custodialWalletsRemove(
        body: types.CustodialWalletsRemoveBodyParam,
        metadata: types.CustodialWalletsRemoveMetadataParam
    ): Promise<FetchResponse<200, types.CustodialWalletsRemoveResponse200>> {
        return this.core.fetch(
            '/custodial-wallets/{walletAddress}',
            'delete',
            body,
            metadata
        )
    }

    /**
     * <strong>IMPORTANT</strong>: Call from the back-end.<br/><br/>When a user wants to take
     * custody of their Mintable Wallet, you can call this endpoint to initiate the process.
     * When you call the endpoint, we will send an email to the user, with an OTP which will
     * have to be provided to access the private key of the wallet. This flow ensures that the
     * request was indeed initiated by the user, since we will be sending this email from our
     * systems. In order to access the private key, both the OTP sent to the user, and the
     * request ID returned by this endpoint will have to be provided.<br/><br/>This endpoint
     * should always be called from your backend to prevent any potential spamming or exposing
     * your private API key.
     *
     * @summary Request To Export
     * @throws FetchError<400, types.CustodialWalletsExportsRequestResponse400> Error
     * @throws FetchError<422, types.CustodialWalletsExportsRequestResponse422> Validation Failed
     */
    custodialWalletsExportsRequest(
        body: types.CustodialWalletsExportsRequestBodyParam,
        metadata: types.CustodialWalletsExportsRequestMetadataParam
    ): Promise<
        FetchResponse<200, types.CustodialWalletsExportsRequestResponse200>
    > {
        return this.core.fetch(
            '/custodial-wallets/{walletAddress}/exports/request',
            'post',
            body,
            metadata
        )
    }

    /**
     * <strong>IMPORTANT</strong>: Call from the back-end.<br/><br/>Export the Mintable wallet
     * private key. This endpoint requires the request_id (which you got when calling 'Request
     * to Export Mintable Wallet', and the OTP which was sent to the user by that endpoint
     * (called code here).<br/><br/>This endpoint should always be called from your backend to
     * prevent any potential spamming or exposing your private API key.
     *
     * @summary Approve Export
     * @throws FetchError<400, types.CustodialWalletsExportsApproveResponse400> Error
     * @throws FetchError<422, types.CustodialWalletsExportsApproveResponse422> Validation Failed
     */
    custodialWalletsExportsApprove(
        body: types.CustodialWalletsExportsApproveBodyParam,
        metadata: types.CustodialWalletsExportsApproveMetadataParam
    ): Promise<
        FetchResponse<200, types.CustodialWalletsExportsApproveResponse200>
    > {
        return this.core.fetch(
            '/custodial-wallets/{walletAddress}/exports/approve',
            'post',
            body,
            metadata
        )
    }

    /**
     * Returns a list of premint items. The premints are returned sorted by updated date, with
     * the most recent premints before.
     *
     * @summary List Premints
     * @throws FetchError<400, types.PremintsListResponse400> Error
     * @throws FetchError<422, types.PremintsListResponse422> Validation Failed
     */
    premintsList(
        metadata: types.PremintsListMetadataParam
    ): Promise<FetchResponse<200, types.PremintsListResponse200>> {
        return this.core.fetch('/{projectId}/premints', 'get', metadata)
    }

    /**
     * Create token details like name, image, animation_url and etc...
     *
     * @summary Create Premints
     * @throws FetchError<400, types.PremintsCreateResponse400> Error
     * @throws FetchError<422, types.PremintsCreateResponse422> Validation Failed
     */
    premintsCreate(
        body: types.PremintsCreateBodyParam,
        metadata: types.PremintsCreateMetadataParam
    ): Promise<FetchResponse<201, types.PremintsCreateResponse201>> {
        return this.core.fetch('/{projectId}/premints', 'post', body, metadata)
    }

    /**
     * Retrieve premint details like name, image, animation_url and etc...
     *
     * @summary Retrieve Premints
     * @throws FetchError<400, types.PremintsShowResponse400> Error
     * @throws FetchError<422, types.PremintsShowResponse422> Validation Failed
     */
    premintsShow(
        metadata: types.PremintsShowMetadataParam
    ): Promise<FetchResponse<200, types.PremintsShowResponse200>> {
        return this.core.fetch(
            '/{projectId}/premints/{premintId}',
            'get',
            metadata
        )
    }

    /**
     * Remove premint entity.
     *
     * @summary Remove Premints
     * @throws FetchError<400, types.PremintsRemoveResponse400> Error
     * @throws FetchError<422, types.PremintsRemoveResponse422> Validation Failed
     */
    premintsRemove(
        metadata: types.PremintsRemoveMetadataParam
    ): Promise<FetchResponse<200, types.PremintsRemoveResponse200>> {
        return this.core.fetch(
            '/{projectId}/premints/{premintId}',
            'delete',
            metadata
        )
    }

    /**
     * Update token details like name, image, animation_url and etc...
     *
     * @summary Update Premints
     * @throws FetchError<400, types.PremintsUpdateResponse400> Error
     * @throws FetchError<422, types.PremintsUpdateResponse422> Validation Failed
     */
    premintsUpdate(
        body: types.PremintsUpdateBodyParam,
        metadata: types.PremintsUpdateMetadataParam
    ): Promise<FetchResponse<200, types.PremintsUpdateResponse200>> {
        return this.core.fetch(
            '/{projectId}/premints/{premintId}',
            'put',
            body,
            metadata
        )
    }

    /**
     * Import token details like name, image, animation_url and etc...
     *
     * @summary Import Premints
     * @throws FetchError<400, types.PremintsImportResponse400> Error
     * @throws FetchError<422, types.PremintsImportResponse422> Validation Failed
     */
    premintsImport(
        body: types.PremintsImportBodyParam,
        metadata: types.PremintsImportMetadataParam
    ): Promise<FetchResponse<200, types.PremintsImportResponse200>>
    premintsImport(
        metadata: types.PremintsImportMetadataParam
    ): Promise<FetchResponse<200, types.PremintsImportResponse200>>
    premintsImport(
        body?:
            | types.PremintsImportBodyParam
            | types.PremintsImportMetadataParam,
        metadata?: types.PremintsImportMetadataParam
    ): Promise<FetchResponse<200, types.PremintsImportResponse200>> {
        return this.core.fetch(
            '/{projectId}/premints/import',
            'post',
            body,
            metadata
        )
    }

    /**
     * <strong>IMPORTANT</strong>: Call from the back-end.<br/><br/> Requires: API KEY in the
     * header. Returns a list of all projects you have created.
     *
     * @summary List Projects
     * @throws FetchError<400, types.ProjectsListResponse400> Error
     * @throws FetchError<422, types.ProjectsListResponse422> Validation Failed
     */
    projectsList(): Promise<FetchResponse<200, types.ProjectsListResponse200>> {
        return this.core.fetch('/projects', 'get')
    }

    /**
     * <strong>IMPORTANT</strong>: Call from the back-end.<br/><br/> Requires: API KEY in the
     * header. Creates a new project under your account with the specified details.
     *
     * @summary Create Projects
     * @throws FetchError<400, types.ProjectsCreateResponse400> Error
     * @throws FetchError<422, types.ProjectsCreateResponse422> Validation Failed
     */
    projectsCreate(
        body: types.ProjectsCreateBodyParam
    ): Promise<FetchResponse<201, types.ProjectsCreateResponse201>> {
        return this.core.fetch('/projects', 'post', body)
    }

    /**
     * <strong>IMPORTANT</strong>: Call from the back-end.<br/><br/> Requires: API KEY in the
     * header. This will return all of the projects details of the project that is specified by
     * its project ID.<br/> Alternative : Use “Project Info” you need a just the
     * contract_address and the name, “Project Info” can be called from front-end too
     *
     * @summary Retrieve Projects
     * @throws FetchError<400, types.ProjectsShowResponse400> Error
     * @throws FetchError<422, types.ProjectsShowResponse422> Validation Failed
     */
    projectsShow(
        metadata: types.ProjectsShowMetadataParam
    ): Promise<FetchResponse<200, types.ProjectsShowResponse200>> {
        return this.core.fetch('/projects/{projectId}', 'get', metadata)
    }

    /**
     * <strong>IMPORTANT</strong>: Call from the back-end.<br/><br/> Requires: API KEY in the
     * header. Updates the project with the specified ID with the specified details. Please
     * check `/Projects/Create` for a description of the parameters.
     *
     * @summary Update Projects
     * @throws FetchError<400, types.ProjectsUpdateResponse400> Error
     * @throws FetchError<422, types.ProjectsUpdateResponse422> Validation Failed
     */
    projectsUpdate(
        body: types.ProjectsUpdateBodyParam,
        metadata: types.ProjectsUpdateMetadataParam
    ): Promise<FetchResponse<200, types.ProjectsUpdateResponse200>> {
        return this.core.fetch('/projects/{projectId}', 'put', body, metadata)
    }

    /**
     * Delete a project from the platform. But once deployed the smart contract will exist on
     * the blockchain and you will be able to manage it without Mintology. This is a permanent
     * action and cannot be undone.
     *
     * @summary Remove Projects
     * @throws FetchError<400, types.ProjectsRemoveResponse400> Error
     * @throws FetchError<422, types.ProjectsRemoveResponse422> Validation Failed
     */
    projectsRemove(
        metadata: types.ProjectsRemoveMetadataParam
    ): Promise<FetchResponse<200, types.ProjectsRemoveResponse200>> {
        return this.core.fetch('/projects/{projectId}', 'delete', metadata)
    }

    /**
     * <strong>IMPORTANT</strong>: This operation should be initiated from the back-end.
     *
     * Requires: API KEY in the header. This will update the project mint configuration using
     * the provided ID and details.
     *
     * Additionally, this operation allows enabling or disabling of the mint. However, this can
     * only be toggled after the project has been successfully deployed.
     *
     *
     * @summary Mint Config Update
     * @throws FetchError<400, types.ProjectsMintUpdateResponse400> Error
     * @throws FetchError<422, types.ProjectsMintUpdateResponse422> Validation Failed
     */
    projectsMintUpdate(
        body: types.ProjectsMintUpdateBodyParam,
        metadata: types.ProjectsMintUpdateMetadataParam
    ): Promise<FetchResponse<200, types.ProjectsMintUpdateResponse200>> {
        return this.core.fetch(
            '/projects/{projectId}/mint',
            'put',
            body,
            metadata
        )
    }

    /**
     * <strong>IMPORTANT</strong>: This operation should be initiated from the back-end.
     *
     * Requires: API KEY in the header. This will update the project claim configuration using
     * the provided ID and details.
     *
     * Additionally, this operation allows enabling or disabling of the claim. However, this
     * can only be toggled after the project has been successfully deployed.
     *
     *
     * @summary Claim Config Update
     * @throws FetchError<400, types.ProjectsClaimUpdateResponse400> Error
     * @throws FetchError<422, types.ProjectsClaimUpdateResponse422> Validation Failed
     */
    projectsClaimUpdate(
        body: types.ProjectsClaimUpdateBodyParam,
        metadata: types.ProjectsClaimUpdateMetadataParam
    ): Promise<FetchResponse<200, types.ProjectsClaimUpdateResponse200>> {
        return this.core.fetch(
            '/projects/{projectId}/claim',
            'put',
            body,
            metadata
        )
    }

    /**
     * <strong>IMPORTANT</strong>: Call from the back-end.<br/><br/> Requires: API KEY in the
     * header.<br/><br/> Deploy the project with the specified ID with the specified details. A
     * project must be deployed before tokens can be minted. <br/><br/>
     * <strong>IMPORTANT</strong>: If you are using Generative NFTs on the dashboard, you need
     * to make the NFTs before deploying.
     *
     * @summary Deploy Projects
     * @throws FetchError<400, types.ProjectsDeployResponse400> Error
     * @throws FetchError<422, types.ProjectsDeployResponse422> Validation Failed
     */
    projectsDeploy(
        metadata: types.ProjectsDeployMetadataParam
    ): Promise<FetchResponse<200, types.ProjectsDeployResponse200>> {
        return this.core.fetch('/projects/{projectId}/deploy', 'post', metadata)
    }
}

const createSDK = (() => {
    return new SDK()
})()
export default createSDK

export type {
    AuthorizeBodyParam,
    AuthorizeInventoryBodyParam,
    AuthorizeInventoryMetadataParam,
    AuthorizeInventoryResponse200,
    AuthorizeInventoryResponse400,
    AuthorizeInventoryResponse422,
    AuthorizeMetadataParam,
    AuthorizeResponse200,
    AuthorizeResponse400,
    AuthorizeResponse422,
    CustodialWalletsCreateBodyParam,
    CustodialWalletsCreateResponse201,
    CustodialWalletsCreateResponse400,
    CustodialWalletsCreateResponse422,
    CustodialWalletsExportsApproveBodyParam,
    CustodialWalletsExportsApproveMetadataParam,
    CustodialWalletsExportsApproveResponse200,
    CustodialWalletsExportsApproveResponse400,
    CustodialWalletsExportsApproveResponse422,
    CustodialWalletsExportsRequestBodyParam,
    CustodialWalletsExportsRequestMetadataParam,
    CustodialWalletsExportsRequestResponse200,
    CustodialWalletsExportsRequestResponse400,
    CustodialWalletsExportsRequestResponse422,
    CustodialWalletsRemoveBodyParam,
    CustodialWalletsRemoveMetadataParam,
    CustodialWalletsRemoveResponse200,
    CustodialWalletsRemoveResponse400,
    CustodialWalletsRemoveResponse422,
    ImxMintBodyParam,
    ImxMintMetadataParam,
    ImxMintResponse201,
    ImxMintResponse400,
    ImxMintResponse422,
    ImxRegisterBodyParam,
    ImxRegisterMetadataParam,
    ImxRegisterResponse200,
    ImxRegisterResponse400,
    ImxRegisterResponse422,
    ImxTransferBodyParam,
    ImxTransferMetadataParam,
    ImxTransferResponse200,
    ImxTransferResponse400,
    ImxTransferResponse422,
    MetaInfoMetadataParam,
    MetaInfoResponse200,
    MetaInfoResponse400,
    MetaInfoResponse422,
    MetadataUpdateBodyParam,
    MetadataUpdateMetadataParam,
    MetadataUpdateResponse200,
    MetadataUpdateResponse400,
    MetadataUpdateResponse422,
    MintClaimBodyParam,
    MintClaimMetadataParam,
    MintClaimResponse201,
    MintClaimResponse400,
    MintClaimResponse422,
    MintMintBodyParam,
    MintMintMetadataParam,
    MintMintResponse201,
    MintMintResponse400,
    MintMintResponse422,
    PremintsCreateBodyParam,
    PremintsCreateMetadataParam,
    PremintsCreateResponse201,
    PremintsCreateResponse400,
    PremintsCreateResponse422,
    PremintsImportBodyParam,
    PremintsImportMetadataParam,
    PremintsImportResponse200,
    PremintsImportResponse400,
    PremintsImportResponse422,
    PremintsListMetadataParam,
    PremintsListResponse200,
    PremintsListResponse400,
    PremintsListResponse422,
    PremintsRemoveMetadataParam,
    PremintsRemoveResponse200,
    PremintsRemoveResponse400,
    PremintsRemoveResponse422,
    PremintsShowMetadataParam,
    PremintsShowResponse200,
    PremintsShowResponse400,
    PremintsShowResponse422,
    PremintsUpdateBodyParam,
    PremintsUpdateMetadataParam,
    PremintsUpdateResponse200,
    PremintsUpdateResponse400,
    PremintsUpdateResponse422,
    ProjectsClaimUpdateBodyParam,
    ProjectsClaimUpdateMetadataParam,
    ProjectsClaimUpdateResponse200,
    ProjectsClaimUpdateResponse400,
    ProjectsClaimUpdateResponse422,
    ProjectsCreateBodyParam,
    ProjectsCreateResponse201,
    ProjectsCreateResponse400,
    ProjectsCreateResponse422,
    ProjectsDeployMetadataParam,
    ProjectsDeployResponse200,
    ProjectsDeployResponse400,
    ProjectsDeployResponse422,
    ProjectsListResponse200,
    ProjectsListResponse400,
    ProjectsListResponse422,
    ProjectsMintUpdateBodyParam,
    ProjectsMintUpdateMetadataParam,
    ProjectsMintUpdateResponse200,
    ProjectsMintUpdateResponse400,
    ProjectsMintUpdateResponse422,
    ProjectsRemoveMetadataParam,
    ProjectsRemoveResponse200,
    ProjectsRemoveResponse400,
    ProjectsRemoveResponse422,
    ProjectsShowMetadataParam,
    ProjectsShowResponse200,
    ProjectsShowResponse400,
    ProjectsShowResponse422,
    ProjectsUpdateBodyParam,
    ProjectsUpdateMetadataParam,
    ProjectsUpdateResponse200,
    ProjectsUpdateResponse400,
    ProjectsUpdateResponse422,
} from './types'
