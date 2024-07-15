import type { FromSchema } from 'json-schema-to-ts'
import * as schemas from './schemas'

export type AuthorizeBodyParam = FromSchema<typeof schemas.Authorize.body>
export type AuthorizeInventoryBodyParam = FromSchema<
    typeof schemas.AuthorizeInventory.body
>
export type AuthorizeInventoryMetadataParam = FromSchema<
    typeof schemas.AuthorizeInventory.metadata
>
export type AuthorizeInventoryResponse200 = FromSchema<
    (typeof schemas.AuthorizeInventory.response)['200']
>
export type AuthorizeInventoryResponse400 = FromSchema<
    (typeof schemas.AuthorizeInventory.response)['400']
>
export type AuthorizeInventoryResponse422 = FromSchema<
    (typeof schemas.AuthorizeInventory.response)['422']
>
export type AuthorizeMetadataParam = FromSchema<
    typeof schemas.Authorize.metadata
>
export type AuthorizeResponse200 = FromSchema<
    (typeof schemas.Authorize.response)['200']
>
export type AuthorizeResponse400 = FromSchema<
    (typeof schemas.Authorize.response)['400']
>
export type AuthorizeResponse422 = FromSchema<
    (typeof schemas.Authorize.response)['422']
>
export type CustodialWalletsCreateBodyParam = FromSchema<
    typeof schemas.CustodialWalletsCreate.body
>
export type CustodialWalletsCreateResponse201 = FromSchema<
    (typeof schemas.CustodialWalletsCreate.response)['201']
>
export type CustodialWalletsCreateResponse400 = FromSchema<
    (typeof schemas.CustodialWalletsCreate.response)['400']
>
export type CustodialWalletsCreateResponse422 = FromSchema<
    (typeof schemas.CustodialWalletsCreate.response)['422']
>
export type CustodialWalletsExportsApproveBodyParam = FromSchema<
    typeof schemas.CustodialWalletsExportsApprove.body
>
export type CustodialWalletsExportsApproveMetadataParam = FromSchema<
    typeof schemas.CustodialWalletsExportsApprove.metadata
>
export type CustodialWalletsExportsApproveResponse200 = FromSchema<
    (typeof schemas.CustodialWalletsExportsApprove.response)['200']
>
export type CustodialWalletsExportsApproveResponse400 = FromSchema<
    (typeof schemas.CustodialWalletsExportsApprove.response)['400']
>
export type CustodialWalletsExportsApproveResponse422 = FromSchema<
    (typeof schemas.CustodialWalletsExportsApprove.response)['422']
>
export type CustodialWalletsExportsRequestBodyParam = FromSchema<
    typeof schemas.CustodialWalletsExportsRequest.body
>
export type CustodialWalletsExportsRequestMetadataParam = FromSchema<
    typeof schemas.CustodialWalletsExportsRequest.metadata
>
export type CustodialWalletsExportsRequestResponse200 = FromSchema<
    (typeof schemas.CustodialWalletsExportsRequest.response)['200']
>
export type CustodialWalletsExportsRequestResponse400 = FromSchema<
    (typeof schemas.CustodialWalletsExportsRequest.response)['400']
>
export type CustodialWalletsExportsRequestResponse422 = FromSchema<
    (typeof schemas.CustodialWalletsExportsRequest.response)['422']
>
export type CustodialWalletsRemoveBodyParam = FromSchema<
    typeof schemas.CustodialWalletsRemove.body
>
export type CustodialWalletsRemoveMetadataParam = FromSchema<
    typeof schemas.CustodialWalletsRemove.metadata
>
export type CustodialWalletsRemoveResponse200 = FromSchema<
    (typeof schemas.CustodialWalletsRemove.response)['200']
>
export type CustodialWalletsRemoveResponse400 = FromSchema<
    (typeof schemas.CustodialWalletsRemove.response)['400']
>
export type CustodialWalletsRemoveResponse422 = FromSchema<
    (typeof schemas.CustodialWalletsRemove.response)['422']
>
export type ImxMintBodyParam = FromSchema<typeof schemas.ImxMint.body>
export type ImxMintMetadataParam = FromSchema<typeof schemas.ImxMint.metadata>
export type ImxMintResponse201 = FromSchema<
    (typeof schemas.ImxMint.response)['201']
>
export type ImxMintResponse400 = FromSchema<
    (typeof schemas.ImxMint.response)['400']
>
export type ImxMintResponse422 = FromSchema<
    (typeof schemas.ImxMint.response)['422']
>
export type ImxRegisterBodyParam = FromSchema<typeof schemas.ImxRegister.body>
export type ImxRegisterMetadataParam = FromSchema<
    typeof schemas.ImxRegister.metadata
>
export type ImxRegisterResponse200 = FromSchema<
    (typeof schemas.ImxRegister.response)['200']
>
export type ImxRegisterResponse400 = FromSchema<
    (typeof schemas.ImxRegister.response)['400']
>
export type ImxRegisterResponse422 = FromSchema<
    (typeof schemas.ImxRegister.response)['422']
>
export type ImxTransferBodyParam = FromSchema<typeof schemas.ImxTransfer.body>
export type ImxTransferMetadataParam = FromSchema<
    typeof schemas.ImxTransfer.metadata
>
export type ImxTransferResponse200 = FromSchema<
    (typeof schemas.ImxTransfer.response)['200']
>
export type ImxTransferResponse400 = FromSchema<
    (typeof schemas.ImxTransfer.response)['400']
>
export type ImxTransferResponse422 = FromSchema<
    (typeof schemas.ImxTransfer.response)['422']
>
export type MetaInfoMetadataParam = FromSchema<typeof schemas.MetaInfo.metadata>
export type MetaInfoResponse200 = FromSchema<
    (typeof schemas.MetaInfo.response)['200']
>
export type MetaInfoResponse400 = FromSchema<
    (typeof schemas.MetaInfo.response)['400']
>
export type MetaInfoResponse422 = FromSchema<
    (typeof schemas.MetaInfo.response)['422']
>
export type MetadataUpdateBodyParam = FromSchema<
    typeof schemas.MetadataUpdate.body
>
export type MetadataUpdateMetadataParam = FromSchema<
    typeof schemas.MetadataUpdate.metadata
>
export type MetadataUpdateResponse200 = FromSchema<
    (typeof schemas.MetadataUpdate.response)['200']
>
export type MetadataUpdateResponse400 = FromSchema<
    (typeof schemas.MetadataUpdate.response)['400']
>
export type MetadataUpdateResponse422 = FromSchema<
    (typeof schemas.MetadataUpdate.response)['422']
>
export type MintClaimBodyParam = FromSchema<typeof schemas.MintClaim.body>
export type MintClaimMetadataParam = FromSchema<
    typeof schemas.MintClaim.metadata
>
export type MintClaimResponse201 = FromSchema<
    (typeof schemas.MintClaim.response)['201']
>
export type MintClaimResponse400 = FromSchema<
    (typeof schemas.MintClaim.response)['400']
>
export type MintClaimResponse422 = FromSchema<
    (typeof schemas.MintClaim.response)['422']
>
export type MintMintBodyParam = FromSchema<typeof schemas.MintMint.body>
export type MintMintMetadataParam = FromSchema<typeof schemas.MintMint.metadata>
export type MintMintResponse201 = FromSchema<
    (typeof schemas.MintMint.response)['201']
>
export type MintMintResponse400 = FromSchema<
    (typeof schemas.MintMint.response)['400']
>
export type MintMintResponse422 = FromSchema<
    (typeof schemas.MintMint.response)['422']
>
export type PremintsCreateBodyParam = FromSchema<
    typeof schemas.PremintsCreate.body
>
export type PremintsCreateMetadataParam = FromSchema<
    typeof schemas.PremintsCreate.metadata
>
export type PremintsCreateResponse201 = FromSchema<
    (typeof schemas.PremintsCreate.response)['201']
>
export type PremintsCreateResponse400 = FromSchema<
    (typeof schemas.PremintsCreate.response)['400']
>
export type PremintsCreateResponse422 = FromSchema<
    (typeof schemas.PremintsCreate.response)['422']
>
export type PremintsImportBodyParam = FromSchema<
    typeof schemas.PremintsImport.body
>
export type PremintsImportMetadataParam = FromSchema<
    typeof schemas.PremintsImport.metadata
>
export type PremintsImportResponse200 = FromSchema<
    (typeof schemas.PremintsImport.response)['200']
>
export type PremintsImportResponse400 = FromSchema<
    (typeof schemas.PremintsImport.response)['400']
>
export type PremintsImportResponse422 = FromSchema<
    (typeof schemas.PremintsImport.response)['422']
>
export type PremintsListMetadataParam = FromSchema<
    typeof schemas.PremintsList.metadata
>
export type PremintsListResponse200 = FromSchema<
    (typeof schemas.PremintsList.response)['200']
>
export type PremintsListResponse400 = FromSchema<
    (typeof schemas.PremintsList.response)['400']
>
export type PremintsListResponse422 = FromSchema<
    (typeof schemas.PremintsList.response)['422']
>
export type PremintsRemoveMetadataParam = FromSchema<
    typeof schemas.PremintsRemove.metadata
>
export type PremintsRemoveResponse200 = FromSchema<
    (typeof schemas.PremintsRemove.response)['200']
>
export type PremintsRemoveResponse400 = FromSchema<
    (typeof schemas.PremintsRemove.response)['400']
>
export type PremintsRemoveResponse422 = FromSchema<
    (typeof schemas.PremintsRemove.response)['422']
>
export type PremintsShowMetadataParam = FromSchema<
    typeof schemas.PremintsShow.metadata
>
export type PremintsShowResponse200 = FromSchema<
    (typeof schemas.PremintsShow.response)['200']
>
export type PremintsShowResponse400 = FromSchema<
    (typeof schemas.PremintsShow.response)['400']
>
export type PremintsShowResponse422 = FromSchema<
    (typeof schemas.PremintsShow.response)['422']
>
export type PremintsUpdateBodyParam = FromSchema<
    typeof schemas.PremintsUpdate.body
>
export type PremintsUpdateMetadataParam = FromSchema<
    typeof schemas.PremintsUpdate.metadata
>
export type PremintsUpdateResponse200 = FromSchema<
    (typeof schemas.PremintsUpdate.response)['200']
>
export type PremintsUpdateResponse400 = FromSchema<
    (typeof schemas.PremintsUpdate.response)['400']
>
export type PremintsUpdateResponse422 = FromSchema<
    (typeof schemas.PremintsUpdate.response)['422']
>
export type ProjectsClaimUpdateBodyParam = FromSchema<
    typeof schemas.ProjectsClaimUpdate.body
>
export type ProjectsClaimUpdateMetadataParam = FromSchema<
    typeof schemas.ProjectsClaimUpdate.metadata
>
export type ProjectsClaimUpdateResponse200 = FromSchema<
    (typeof schemas.ProjectsClaimUpdate.response)['200']
>
export type ProjectsClaimUpdateResponse400 = FromSchema<
    (typeof schemas.ProjectsClaimUpdate.response)['400']
>
export type ProjectsClaimUpdateResponse422 = FromSchema<
    (typeof schemas.ProjectsClaimUpdate.response)['422']
>
export type ProjectsCreateBodyParam = FromSchema<
    typeof schemas.ProjectsCreate.body
>
export type ProjectsCreateResponse201 = FromSchema<
    (typeof schemas.ProjectsCreate.response)['201']
>
export type ProjectsCreateResponse400 = FromSchema<
    (typeof schemas.ProjectsCreate.response)['400']
>
export type ProjectsCreateResponse422 = FromSchema<
    (typeof schemas.ProjectsCreate.response)['422']
>
export type ProjectsDeployMetadataParam = FromSchema<
    typeof schemas.ProjectsDeploy.metadata
>
export type ProjectsDeployResponse200 = FromSchema<
    (typeof schemas.ProjectsDeploy.response)['200']
>
export type ProjectsDeployResponse400 = FromSchema<
    (typeof schemas.ProjectsDeploy.response)['400']
>
export type ProjectsDeployResponse422 = FromSchema<
    (typeof schemas.ProjectsDeploy.response)['422']
>
export type ProjectsListResponse200 = FromSchema<
    (typeof schemas.ProjectsList.response)['200']
>
export type ProjectsListResponse400 = FromSchema<
    (typeof schemas.ProjectsList.response)['400']
>
export type ProjectsListResponse422 = FromSchema<
    (typeof schemas.ProjectsList.response)['422']
>
export type ProjectsMintUpdateBodyParam = FromSchema<
    typeof schemas.ProjectsMintUpdate.body
>
export type ProjectsMintUpdateMetadataParam = FromSchema<
    typeof schemas.ProjectsMintUpdate.metadata
>
export type ProjectsMintUpdateResponse200 = FromSchema<
    (typeof schemas.ProjectsMintUpdate.response)['200']
>
export type ProjectsMintUpdateResponse400 = FromSchema<
    (typeof schemas.ProjectsMintUpdate.response)['400']
>
export type ProjectsMintUpdateResponse422 = FromSchema<
    (typeof schemas.ProjectsMintUpdate.response)['422']
>
export type ProjectsRemoveMetadataParam = FromSchema<
    typeof schemas.ProjectsRemove.metadata
>
export type ProjectsRemoveResponse200 = FromSchema<
    (typeof schemas.ProjectsRemove.response)['200']
>
export type ProjectsRemoveResponse400 = FromSchema<
    (typeof schemas.ProjectsRemove.response)['400']
>
export type ProjectsRemoveResponse422 = FromSchema<
    (typeof schemas.ProjectsRemove.response)['422']
>
export type ProjectsShowMetadataParam = FromSchema<
    typeof schemas.ProjectsShow.metadata
>
export type ProjectsShowResponse200 = FromSchema<
    (typeof schemas.ProjectsShow.response)['200']
>
export type ProjectsShowResponse400 = FromSchema<
    (typeof schemas.ProjectsShow.response)['400']
>
export type ProjectsShowResponse422 = FromSchema<
    (typeof schemas.ProjectsShow.response)['422']
>
export type ProjectsUpdateBodyParam = FromSchema<
    typeof schemas.ProjectsUpdate.body
>
export type ProjectsUpdateMetadataParam = FromSchema<
    typeof schemas.ProjectsUpdate.metadata
>
export type ProjectsUpdateResponse200 = FromSchema<
    (typeof schemas.ProjectsUpdate.response)['200']
>
export type ProjectsUpdateResponse400 = FromSchema<
    (typeof schemas.ProjectsUpdate.response)['400']
>
export type ProjectsUpdateResponse422 = FromSchema<
    (typeof schemas.ProjectsUpdate.response)['422']
>
