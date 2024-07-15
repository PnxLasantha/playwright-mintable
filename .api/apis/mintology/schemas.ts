const Authorize = {
    body: {
        type: 'object',
        properties: {
            contract_address: {
                type: 'string',
                description:
                    'The NFT smart contract address to check. This is the address of the NFT contract on the blockchain. If you do not specify a contract_address, we will use the contract associated with your project ID.',
            },
            token_id: {
                type: 'string',
                description:
                    'NFT token ID to check. This is the token id of the specific NFT token within the contract and it is optional; if absent, any token in the contract will authorize the wallet.',
            },
            wallet_address: {
                type: 'string',
                description:
                    "Wallet address of the user to authorize the token to if you don't pass in a user name.",
            },
            email: {
                type: 'string',
                description:
                    "Optional Mintable wallet or Mintable's user email for authorize the NFT to that wallet.",
            },
        },
        required: ['wallet_address'],
        $schema: 'http://json-schema.org/draft-04/schema#',
    },
    metadata: {
        allOf: [
            {
                type: 'object',
                properties: {
                    projectId: {
                        type: 'string',
                        $schema: 'http://json-schema.org/draft-04/schema#',
                        description:
                            'Project Id - found on your dashboard on dashboard.mintology.app',
                    },
                },
                required: ['projectId'],
            },
            {
                type: 'object',
                properties: {
                    nextToken: {
                        type: 'string',
                        $schema: 'http://json-schema.org/draft-04/schema#',
                        description:
                            "When there are more than 15 tokens returned, pagination occurs and you are returned 'next_token' which you can include in the subsequent request to fetch the next page of results in this parameter.",
                    },
                },
                required: [],
            },
        ],
    },
    response: {
        '200': {
            type: 'object',
            properties: {
                data: {
                    type: 'object',
                    properties: {
                        authorized: {
                            type: 'boolean',
                            description:
                                'Whether the wallet address has the NFT and is authorized (the wallet address contains the specified NFT or any NFT from the collection)',
                        },
                        next_token: {
                            type: 'string',
                            description:
                                "If next_token exists, it indicates that all the requested results don't fit in a single page, next_token is provided in the response and you can include it in a subsequent request to fetch the next page of results.",
                        },
                    },
                    required: ['authorized'],
                    description: 'Data of the response',
                },
            },
            required: ['data'],
            $schema: 'http://json-schema.org/draft-04/schema#',
        },
        '400': {
            properties: { message: { type: 'string' } },
            type: 'object',
            $schema: 'http://json-schema.org/draft-04/schema#',
        },
        '422': {
            properties: { message: { type: 'string' } },
            type: 'object',
            $schema: 'http://json-schema.org/draft-04/schema#',
        },
    },
} as const
const AuthorizeInventory = {
    body: {
        type: 'object',
        properties: {
            wallet_address: {
                type: 'string',
                description:
                    'The wallet address of a user to return the information from this wallet.',
            },
            email: {
                type: 'string',
                description:
                    "Optional Mintable wallet or Mintable's user email for authorize the NFT to that wallet.",
            },
            contract_address: {
                type: 'string',
                description:
                    'The NFT smart contract address to check. This is the address of the NFT contract on the blockchain. Optional: If you do not specify a contract_address, we will use the contract associated with your project ID.',
            },
        },
        $schema: 'http://json-schema.org/draft-04/schema#',
    },
    metadata: {
        allOf: [
            {
                type: 'object',
                properties: {
                    projectId: {
                        type: 'string',
                        $schema: 'http://json-schema.org/draft-04/schema#',
                        description:
                            'Project Id - found on your dashboard on dashboard.mintology.app',
                    },
                },
                required: ['projectId'],
            },
            {
                type: 'object',
                properties: {
                    exclusiveStartKey: {
                        type: 'string',
                        $schema: 'http://json-schema.org/draft-04/schema#',
                        description:
                            "When there are more than 15 tokens returned, pagination occurs and you are returned 'last_evaluated_key' which you can include in the subsequent request to fetch the next page of results in this parameter.",
                    },
                },
                required: [],
            },
        ],
    },
    response: {
        '200': {
            type: 'object',
            properties: {
                data: {
                    type: 'object',
                    properties: {
                        token_ids: {
                            type: 'array',
                            items: { type: 'string' },
                            description: 'A list of owned NFT token IDs',
                        },
                    },
                    required: ['token_ids'],
                    description: 'Data of the response',
                },
                meta: {
                    type: 'object',
                    properties: {
                        count: { type: 'number' },
                        last_evaluated_key: {
                            type: 'string',
                            description:
                                "If last_evaluated_key exists, it indicates that all the requested results don't fit in a single page, last_evaluated_key is provided in the response and you can include it in a subsequent request to fetch the next page of results.",
                        },
                    },
                    required: ['count'],
                    description: 'Metadata of the response',
                },
            },
            required: ['data', 'meta'],
            $schema: 'http://json-schema.org/draft-04/schema#',
        },
        '400': {
            properties: { message: { type: 'string' } },
            type: 'object',
            $schema: 'http://json-schema.org/draft-04/schema#',
        },
        '422': {
            properties: { message: { type: 'string' } },
            type: 'object',
            $schema: 'http://json-schema.org/draft-04/schema#',
        },
    },
} as const
const CustodialWalletsCreate = {
    body: {
        type: 'object',
        properties: {
            email: {
                type: 'string',
                description:
                    'The email address of the user whose wallet to find',
            },
            username: {
                type: 'string',
                description:
                    'Optional: Username that has a Mintable.com account with a wallet connected to that username.',
            },
        },
        required: ['email'],
        $schema: 'http://json-schema.org/draft-04/schema#',
    },
    response: {
        '201': {
            type: 'object',
            properties: {
                data: {
                    type: 'object',
                    properties: {
                        email: {
                            type: 'string',
                            description:
                                'The email address of the user whose wallet will be tied to.',
                        },
                        username: {
                            type: 'string',
                            description:
                                'Username that will be tied to using this wallet, it is generated by us randomly and can be changed on Mintable.com',
                        },
                        wallet_address: {
                            type: 'string',
                            description: 'The wallet address that was created.',
                        },
                    },
                    required: ['email', 'username'],
                    description: 'Data of the response',
                },
            },
            required: ['data'],
            $schema: 'http://json-schema.org/draft-04/schema#',
        },
        '400': {
            properties: { message: { type: 'string' } },
            type: 'object',
            $schema: 'http://json-schema.org/draft-04/schema#',
        },
        '422': {
            properties: { message: { type: 'string' } },
            type: 'object',
            $schema: 'http://json-schema.org/draft-04/schema#',
        },
    },
} as const
const CustodialWalletsExportsApprove = {
    body: {
        type: 'object',
        properties: {
            code: {
                type: 'string',
                description:
                    'When you call the `Request Export` endpoint, we send the owner of the custodial wallet an email to inform them and verify they really intend to claim custody of their wallet. That email contains an OTP code, which has to be provided here.',
            },
            username: {
                type: 'string',
                description: 'Username of the account requesting the export',
            },
            email: {
                type: 'string',
                description: 'Email of the account requesting the export',
            },
            request_id: {
                type: 'string',
                description:
                    'The `request_id` returned by the `Request Export` endpoint.',
            },
        },
        required: ['code', 'username', 'email', 'request_id'],
        $schema: 'http://json-schema.org/draft-04/schema#',
    },
    metadata: {
        allOf: [
            {
                type: 'object',
                properties: {
                    walletAddress: {
                        type: 'string',
                        $schema: 'http://json-schema.org/draft-04/schema#',
                        description:
                            'The address of the custodial wallet that is being removed.',
                    },
                },
                required: ['walletAddress'],
            },
        ],
    },
    response: {
        '200': {
            type: 'object',
            properties: {
                data: {
                    type: 'object',
                    properties: { private_key: { type: 'string' } },
                    required: ['private_key'],
                    description: 'Data of the response',
                },
            },
            required: ['data'],
            $schema: 'http://json-schema.org/draft-04/schema#',
        },
        '400': {
            properties: { message: { type: 'string' } },
            type: 'object',
            $schema: 'http://json-schema.org/draft-04/schema#',
        },
        '422': {
            properties: { message: { type: 'string' } },
            type: 'object',
            $schema: 'http://json-schema.org/draft-04/schema#',
        },
    },
} as const
const CustodialWalletsExportsRequest = {
    body: {
        type: 'object',
        properties: {
            email: {
                type: 'string',
                description:
                    'The email address of the user whose wallet is tied to.',
            },
        },
        required: ['email'],
        $schema: 'http://json-schema.org/draft-04/schema#',
    },
    metadata: {
        allOf: [
            {
                type: 'object',
                properties: {
                    walletAddress: {
                        type: 'string',
                        $schema: 'http://json-schema.org/draft-04/schema#',
                        description:
                            'The address of the custodial wallet that is being removed.',
                    },
                },
                required: ['walletAddress'],
            },
        ],
    },
    response: {
        '200': {
            type: 'object',
            properties: {
                data: {
                    type: 'object',
                    properties: {
                        request_id: {
                            type: 'string',
                            description:
                                'The request ID given from calling wallet export.',
                        },
                    },
                    required: ['request_id'],
                    description: 'Data of the response',
                },
            },
            required: ['data'],
            $schema: 'http://json-schema.org/draft-04/schema#',
        },
        '400': {
            properties: { message: { type: 'string' } },
            type: 'object',
            $schema: 'http://json-schema.org/draft-04/schema#',
        },
        '422': {
            properties: { message: { type: 'string' } },
            type: 'object',
            $schema: 'http://json-schema.org/draft-04/schema#',
        },
    },
} as const
const CustodialWalletsRemove = {
    body: {
        type: 'object',
        properties: {
            email: {
                type: 'string',
                description:
                    'The username associated with the custodial wallet to be removed.',
            },
            last_eight_digits_privatekey_hash: {
                type: 'string',
                description:
                    'The SHA256 hash of the last eight digits of the private key associated with the custodial wallet to be removed.',
            },
        },
        required: ['email', 'last_eight_digits_privatekey_hash'],
        $schema: 'http://json-schema.org/draft-04/schema#',
    },
    metadata: {
        allOf: [
            {
                type: 'object',
                properties: {
                    walletAddress: {
                        type: 'string',
                        $schema: 'http://json-schema.org/draft-04/schema#',
                        description:
                            'The address of the custodial wallet that is being removed.',
                    },
                },
                required: ['walletAddress'],
            },
        ],
    },
    response: {
        '200': {
            type: 'object',
            properties: {
                success: {
                    type: 'boolean',
                    description:
                        'Indicates whether the removal was successful or not.',
                },
            },
            required: ['success'],
            $schema: 'http://json-schema.org/draft-04/schema#',
        },
        '400': {
            properties: { message: { type: 'string' } },
            type: 'object',
            $schema: 'http://json-schema.org/draft-04/schema#',
        },
        '422': {
            properties: { message: { type: 'string' } },
            type: 'object',
            $schema: 'http://json-schema.org/draft-04/schema#',
        },
    },
} as const
const ImxMint = {
    body: {
        type: 'object',
        properties: {
            metadata: {
                type: 'object',
                properties: {
                    name: { type: 'string', description: 'Name of the item.' },
                    image: {
                        type: 'string',
                        description:
                            'This is the URL to the image of the item. Can be just about any type of image (including SVG, which will be converted into PNG), and can be IPFS URLs or paths. We recommend using a 350 x 350 image.',
                    },
                    animation_url: {
                        type: 'string',
                        description:
                            'A URL to a multimedia attachment for the item.The file extensions GLTF, GLB, WEBM, MP4, M4V, OGV, and OGG are supported, along with the audio-only extensions MP3, WAV, and OGA.\n\nAnimation_url also supports HTML pages, allowing you to build rich experiences and interactive NFTs using JavaScript canvas WebGL, and more. Scripts and relative paths within the HTML page are now supported. However, access to browser extensions is not supported.',
                    },
                    description: {
                        type: 'string',
                        description:
                            'A human-readable description of the item. Markdown is supported.',
                    },
                    attributes: {
                        type: 'array',
                        items: {
                            type: 'object',
                            properties: {
                                trait_type: { type: 'string' },
                                value: { type: 'string' },
                            },
                            required: ['trait_type', 'value'],
                        },
                        description:
                            'These are the attributes for the item, which will show up on the item page on Mintable and other marketplaces.',
                    },
                    title: {
                        type: 'string',
                        description:
                            'Title of this NFT, can be same as name, this is used to list item for sales.',
                    },
                    subtitle: {
                        type: 'string',
                        description:
                            'Short description or subtitle of NFT, can be same as description, this is used to list item for sales.',
                    },
                },
                required: ['name', 'image'],
                description:
                    'Metadata for the NFT being minted. If absent, the metadata defined in the project will be used.',
            },
            token_id: {
                type: 'string',
                description:
                    'A unique token id for the NFT being minted, if its left blank we will assign one which will be returned in the response.',
            },
            wallet_address: {
                type: 'string',
                description: 'Wallet address to mint token to.',
            },
            email: {
                type: 'string',
                description: 'If absent, the wallet_address will be required.',
            },
        },
        $schema: 'http://json-schema.org/draft-04/schema#',
    },
    metadata: {
        allOf: [
            {
                type: 'object',
                properties: {
                    projectId: {
                        type: 'string',
                        $schema: 'http://json-schema.org/draft-04/schema#',
                        description:
                            'Project Id - found on your dashboard on dashboard.mintology.app',
                    },
                },
                required: ['projectId'],
            },
        ],
    },
    response: {
        '201': {
            type: 'object',
            properties: {
                data: {
                    type: 'object',
                    properties: {
                        transaction_id: {
                            type: 'number',
                            description: 'Minting transaction ID',
                        },
                        token_id: {
                            type: 'string',
                            description: 'Token id of the minted token',
                        },
                    },
                    required: ['transaction_id', 'token_id'],
                    description: 'Data of the response',
                },
            },
            required: ['data'],
            $schema: 'http://json-schema.org/draft-04/schema#',
        },
        '400': {
            properties: { message: { type: 'string' } },
            type: 'object',
            $schema: 'http://json-schema.org/draft-04/schema#',
        },
        '422': {
            properties: { message: { type: 'string' } },
            type: 'object',
            $schema: 'http://json-schema.org/draft-04/schema#',
        },
    },
} as const
const ImxRegister = {
    body: {
        type: 'object',
        properties: {
            username: {
                type: 'string',
                description:
                    'Optional username that will be tied to this private key/wallet',
            },
            email: {
                type: 'string',
                description:
                    'Email address that will be tied to this private key/wallet',
            },
            force_overwrite_linked_wallet: {
                type: 'boolean',
                description:
                    'Overwrite the currently linked wallet address forcefully',
            },
        },
        required: ['email'],
        $schema: 'http://json-schema.org/draft-04/schema#',
    },
    metadata: {
        allOf: [
            {
                type: 'object',
                properties: {
                    projectId: {
                        type: 'string',
                        $schema: 'http://json-schema.org/draft-04/schema#',
                        description:
                            'Project Id - found on your dashboard on dashboard.mintology.app',
                    },
                },
                required: ['projectId'],
            },
        ],
    },
    response: {
        '200': {
            type: 'object',
            properties: {
                message: { type: 'string', description: 'Message' },
                data: {
                    type: 'object',
                    properties: {
                        username: { type: 'string', description: 'Username' },
                        wallet_address: {
                            type: 'string',
                            description:
                                'The wallet address of a user to return the information from this wallet.',
                        },
                    },
                    required: ['username', 'wallet_address'],
                    description: 'Response data',
                },
            },
            required: ['message', 'data'],
            $schema: 'http://json-schema.org/draft-04/schema#',
        },
        '400': {
            properties: { message: { type: 'string' } },
            type: 'object',
            $schema: 'http://json-schema.org/draft-04/schema#',
        },
        '422': {
            properties: { message: { type: 'string' } },
            type: 'object',
            $schema: 'http://json-schema.org/draft-04/schema#',
        },
    },
} as const
const ImxTransfer = {
    body: {
        type: 'object',
        properties: {
            token_id: {
                type: 'string',
                description:
                    'The token id to transfer, must exist and belong to from_user',
            },
            from_wallet_address: {
                type: 'string',
                description:
                    'The wallet address owns the token at the contract address',
            },
            to_wallet_address: {
                type: 'string',
                description: 'The recipient wallet address of the token',
            },
            to_email: {
                type: 'string',
                description:
                    'If absent, the to_wallet_address will be required.',
            },
            from_email: {
                type: 'string',
                description:
                    'If absent, the from_wallet_address will be required.',
            },
        },
        required: ['token_id'],
        $schema: 'http://json-schema.org/draft-04/schema#',
    },
    metadata: {
        allOf: [
            {
                type: 'object',
                properties: {
                    projectId: {
                        type: 'string',
                        $schema: 'http://json-schema.org/draft-04/schema#',
                        description:
                            'Project Id - found on your dashboard on dashboard.mintology.app',
                    },
                },
                required: ['projectId'],
            },
        ],
    },
    response: {
        '200': {
            type: 'object',
            properties: {
                data: {
                    type: 'object',
                    properties: {
                        transfer_id: {
                            type: 'number',
                            description: 'Transferring transaction ID',
                        },
                    },
                    required: ['transfer_id'],
                    description: 'Data of the response',
                },
            },
            required: ['data'],
            $schema: 'http://json-schema.org/draft-04/schema#',
        },
        '400': {
            properties: { message: { type: 'string' } },
            type: 'object',
            $schema: 'http://json-schema.org/draft-04/schema#',
        },
        '422': {
            properties: { message: { type: 'string' } },
            type: 'object',
            $schema: 'http://json-schema.org/draft-04/schema#',
        },
    },
} as const
const MetaInfo = {
    metadata: {
        allOf: [
            {
                type: 'object',
                properties: {
                    projectId: {
                        type: 'string',
                        $schema: 'http://json-schema.org/draft-04/schema#',
                        description:
                            'Project Id - found on your dashboard on dashboard.mintology.app',
                    },
                },
                required: ['projectId'],
            },
        ],
    },
    response: {
        '200': {
            type: 'object',
            properties: {
                data: {
                    type: 'object',
                    properties: {
                        name: {
                            type: 'string',
                            description: 'The project name.',
                        },
                        used_quantity: {
                            type: 'number',
                            description:
                                'The quantity of NFTs that have been minted for this project.',
                        },
                        contract_address: {
                            type: 'string',
                            description:
                                'The NFT smart contract address associated with your project ID.',
                        },
                    },
                    required: ['name', 'used_quantity', 'contract_address'],
                    description: 'Data of the response',
                },
            },
            required: ['data'],
            $schema: 'http://json-schema.org/draft-04/schema#',
        },
        '400': {
            properties: { message: { type: 'string' } },
            type: 'object',
            $schema: 'http://json-schema.org/draft-04/schema#',
        },
        '422': {
            properties: { message: { type: 'string' } },
            type: 'object',
            $schema: 'http://json-schema.org/draft-04/schema#',
        },
    },
} as const
const MetadataUpdate = {
    body: {
        type: 'object',
        properties: {
            metadata: {
                type: 'object',
                properties: {
                    name: { type: 'string', description: 'Name of the item.' },
                    image: {
                        type: 'string',
                        description:
                            'This is the URL to the image of the item. Can be just about any type of image (including SVG, which will be converted into PNG), and can be IPFS URLs or paths. We recommend using a 350 x 350 image.',
                    },
                    animation_url: {
                        type: 'string',
                        description:
                            'A URL to a multimedia attachment for the item.The file extensions GLTF, GLB, WEBM, MP4, M4V, OGV, and OGG are supported, along with the audio-only extensions MP3, WAV, and OGA.\n\nAnimation_url also supports HTML pages, allowing you to build rich experiences and interactive NFTs using JavaScript canvas WebGL, and more. Scripts and relative paths within the HTML page are now supported. However, access to browser extensions is not supported.',
                    },
                    description: {
                        type: 'string',
                        description:
                            'A human-readable description of the item. Markdown is supported.',
                    },
                    attributes: {
                        type: 'array',
                        items: {
                            type: 'object',
                            properties: {
                                trait_type: { type: 'string' },
                                value: { type: 'string' },
                            },
                            required: ['trait_type', 'value'],
                        },
                        description:
                            'These are the attributes for the item, which will show up on the item page on Mintable and other marketplaces.',
                    },
                    title: {
                        type: 'string',
                        description:
                            'Title of this NFT, can be same as name, this is used to list item for sales.',
                    },
                    subtitle: {
                        type: 'string',
                        description:
                            'Short description or subtitle of NFT, can be same as description, this is used to list item for sales.',
                    },
                },
                required: ['name', 'image'],
                description:
                    'Required: The new metadata (will replace the existing metadata)',
            },
        },
        required: ['metadata'],
        $schema: 'http://json-schema.org/draft-04/schema#',
    },
    metadata: {
        allOf: [
            {
                type: 'object',
                properties: {
                    projectId: {
                        type: 'string',
                        $schema: 'http://json-schema.org/draft-04/schema#',
                        description:
                            'Project Id - found on your dashboard on dashboard.mintology.app',
                    },
                    tokenId: {
                        type: 'string',
                        $schema: 'http://json-schema.org/draft-04/schema#',
                        description: 'tokenId',
                    },
                },
                required: ['projectId', 'tokenId'],
            },
        ],
    },
    response: {
        '200': {
            type: 'object',
            properties: { success: { type: 'boolean' } },
            required: ['success'],
            $schema: 'http://json-schema.org/draft-04/schema#',
        },
        '400': {
            properties: { message: { type: 'string' } },
            type: 'object',
            $schema: 'http://json-schema.org/draft-04/schema#',
        },
        '422': {
            properties: { message: { type: 'string' } },
            type: 'object',
            $schema: 'http://json-schema.org/draft-04/schema#',
        },
    },
} as const
const MintClaim = {
    body: {
        type: 'object',
        properties: {
            wallet_address: {
                type: 'string',
                description:
                    "Wallet address of the user to mint the token to if you don't pass in a user name.",
            },
            email: {
                type: 'string',
                description:
                    "Optional Mintable wallet or Mintable's user email for minting the NFT to that wallet.",
            },
            premint_id: {
                type: 'string',
                description:
                    'The premint_id is an optional field. It represents the unique identifier for a premint, which is used to mint a NFT. If the user provides a premint_id, it will be used to identify the specific premint to be used for NFT minting. The premint_id can be obtained from the list premint APIs.',
            },
            metadata: {
                type: 'object',
                properties: {
                    name: { type: 'string', description: 'Name of the item.' },
                    image: {
                        type: 'string',
                        description:
                            'This is the URL to the image of the item. Can be just about any type of image (including SVG, which will be converted into PNG), and can be IPFS URLs or paths. We recommend using a 350 x 350 image.',
                    },
                    animation_url: {
                        type: 'string',
                        description:
                            'A URL to a multimedia attachment for the item.The file extensions GLTF, GLB, WEBM, MP4, M4V, OGV, and OGG are supported, along with the audio-only extensions MP3, WAV, and OGA.\n\nAnimation_url also supports HTML pages, allowing you to build rich experiences and interactive NFTs using JavaScript canvas WebGL, and more. Scripts and relative paths within the HTML page are now supported. However, access to browser extensions is not supported.',
                    },
                    description: {
                        type: 'string',
                        description:
                            'A human-readable description of the item. Markdown is supported.',
                    },
                    attributes: {
                        type: 'array',
                        items: {
                            type: 'object',
                            properties: {
                                trait_type: { type: 'string' },
                                value: { type: 'string' },
                            },
                            required: ['trait_type', 'value'],
                        },
                        description:
                            'These are the attributes for the item, which will show up on the item page on Mintable and other marketplaces.',
                    },
                    title: {
                        type: 'string',
                        description:
                            'Title of this NFT, can be same as name, this is used to list item for sales.',
                    },
                    subtitle: {
                        type: 'string',
                        description:
                            'Short description or subtitle of NFT, can be same as description, this is used to list item for sales.',
                    },
                },
                required: ['name', 'image'],
                description:
                    "Optional metadata to associate with minted token, if you don't have a preminted NFT in the dashboard, you need to pass in your own metadata to use.",
            },
        },
        $schema: 'http://json-schema.org/draft-04/schema#',
    },
    metadata: {
        allOf: [
            {
                type: 'object',
                properties: {
                    projectId: {
                        type: 'string',
                        $schema: 'http://json-schema.org/draft-04/schema#',
                        description:
                            'Project Id - found on your dashboard on dashboard.mintology.app',
                    },
                },
                required: ['projectId'],
            },
        ],
    },
    response: {
        '201': {
            type: 'object',
            properties: {
                data: {
                    type: 'object',
                    properties: {
                        token_id: {
                            type: 'string',
                            description: 'Token id of the minted token',
                        },
                    },
                    required: ['token_id'],
                    description: 'Data of the response',
                },
            },
            required: ['data'],
            $schema: 'http://json-schema.org/draft-04/schema#',
        },
        '400': {
            properties: { message: { type: 'string' } },
            type: 'object',
            $schema: 'http://json-schema.org/draft-04/schema#',
        },
        '422': {
            properties: { message: { type: 'string' } },
            type: 'object',
            $schema: 'http://json-schema.org/draft-04/schema#',
        },
    },
} as const
const MintMint = {
    body: {
        type: 'object',
        properties: {
            email: {
                type: 'string',
                description: 'If absent, the wallet_address will be required.',
            },
            metadata: {
                type: 'object',
                properties: {
                    name: { type: 'string', description: 'Name of the item.' },
                    image: {
                        type: 'string',
                        description:
                            'This is the URL to the image of the item. Can be just about any type of image (including SVG, which will be converted into PNG), and can be IPFS URLs or paths. We recommend using a 350 x 350 image.',
                    },
                    animation_url: {
                        type: 'string',
                        description:
                            'A URL to a multimedia attachment for the item.The file extensions GLTF, GLB, WEBM, MP4, M4V, OGV, and OGG are supported, along with the audio-only extensions MP3, WAV, and OGA.\n\nAnimation_url also supports HTML pages, allowing you to build rich experiences and interactive NFTs using JavaScript canvas WebGL, and more. Scripts and relative paths within the HTML page are now supported. However, access to browser extensions is not supported.',
                    },
                    description: {
                        type: 'string',
                        description:
                            'A human-readable description of the item. Markdown is supported.',
                    },
                    attributes: {
                        type: 'array',
                        items: {
                            type: 'object',
                            properties: {
                                trait_type: { type: 'string' },
                                value: { type: 'string' },
                            },
                            required: ['trait_type', 'value'],
                        },
                        description:
                            'These are the attributes for the item, which will show up on the item page on Mintable and other marketplaces.',
                    },
                    title: {
                        type: 'string',
                        description:
                            'Title of this NFT, can be same as name, this is used to list item for sales.',
                    },
                    subtitle: {
                        type: 'string',
                        description:
                            'Short description or subtitle of NFT, can be same as description, this is used to list item for sales.',
                    },
                },
                required: ['name', 'image'],
                description:
                    'If absent, the metadata defined in the project will be used.',
            },
            wallet_address: {
                type: 'string',
                description: 'Wallet address to mint token to.',
            },
            premint_id: {
                type: 'string',
                description:
                    'The premint_id is an optional field. It represents the unique identifier for a premint, which is used to mint a NFT. If the user provides a premint_id, it will be used to identify the specific premint to be used for NFT minting. The premint_id can be obtained from the list premint APIs.',
            },
        },
        $schema: 'http://json-schema.org/draft-04/schema#',
    },
    metadata: {
        allOf: [
            {
                type: 'object',
                properties: {
                    projectId: {
                        type: 'string',
                        $schema: 'http://json-schema.org/draft-04/schema#',
                        description:
                            'Project Id - found on your dashboard on dashboard.mintology.app',
                    },
                },
                required: ['projectId'],
            },
        ],
    },
    response: {
        '201': {
            type: 'object',
            properties: {
                data: {
                    type: 'object',
                    properties: {
                        token_id: {
                            type: 'string',
                            description: 'Token id of the minted token',
                        },
                    },
                    required: ['token_id'],
                    description: 'Data of the response',
                },
            },
            required: ['data'],
            $schema: 'http://json-schema.org/draft-04/schema#',
        },
        '400': {
            properties: { message: { type: 'string' } },
            type: 'object',
            $schema: 'http://json-schema.org/draft-04/schema#',
        },
        '422': {
            properties: { message: { type: 'string' } },
            type: 'object',
            $schema: 'http://json-schema.org/draft-04/schema#',
        },
    },
} as const
const PremintsCreate = {
    body: {
        type: 'object',
        properties: {
            premint_id: {
                type: 'string',
                description:
                    "Premint_id can be found by calling premint/list to get all the preminted NFT's IDs and then you can pass it in here to modifiy that preminted NFT data set. If you do not pass in a premint_id, we will create a new preminted NFT data set.",
            },
            quantity: {
                type: 'number',
                description:
                    'Number of NFTs to be created with this data set. Example, you want to create 100 NFTs that are all the same, or only 1, quantity will determine that count.',
            },
            metadata: {
                type: 'object',
                properties: {
                    name: { type: 'string', description: 'Name of the item.' },
                    image: {
                        type: 'string',
                        description:
                            'This is the URL to the image of the item. Can be just about any type of image (including SVG, which will be converted into PNG), and can be IPFS URLs or paths. We recommend using a 350 x 350 image.',
                    },
                    animation_url: {
                        type: 'string',
                        description:
                            'A URL to a multimedia attachment for the item.The file extensions GLTF, GLB, WEBM, MP4, M4V, OGV, and OGG are supported, along with the audio-only extensions MP3, WAV, and OGA.\n\nAnimation_url also supports HTML pages, allowing you to build rich experiences and interactive NFTs using JavaScript canvas WebGL, and more. Scripts and relative paths within the HTML page are now supported. However, access to browser extensions is not supported.',
                    },
                    description: {
                        type: 'string',
                        description:
                            'A human-readable description of the item. Markdown is supported.',
                    },
                    attributes: {
                        type: 'array',
                        items: {
                            type: 'object',
                            properties: {
                                trait_type: { type: 'string' },
                                value: { type: 'string' },
                            },
                            required: ['trait_type', 'value'],
                        },
                        description:
                            'These are the attributes for the item, which will show up on the item page on Mintable and other marketplaces.',
                    },
                    title: {
                        type: 'string',
                        description:
                            'Title of this NFT, can be same as name, this is used to list item for sales.',
                    },
                    subtitle: {
                        type: 'string',
                        description:
                            'Short description or subtitle of NFT, can be same as description, this is used to list item for sales.',
                    },
                },
                required: ['name', 'image'],
                description:
                    'The metadata for the NFT pre-mint data, such as image, url, and additional properties to be on the NFT.',
            },
        },
        required: ['quantity', 'metadata'],
        $schema: 'http://json-schema.org/draft-04/schema#',
    },
    metadata: {
        allOf: [
            {
                type: 'object',
                properties: {
                    projectId: {
                        type: 'string',
                        $schema: 'http://json-schema.org/draft-04/schema#',
                        description:
                            'Project Id - found on your dashboard on dashboard.mintology.app',
                    },
                },
                required: ['projectId'],
            },
        ],
    },
    response: {
        '201': {
            type: 'object',
            properties: {
                data: {
                    type: 'object',
                    properties: {
                        premint_id: {
                            type: 'string',
                            description:
                                "Premint_id can be found by calling premint/list to get all the preminted NFT's IDs and then you can pass it in here to modifiy that preminted NFT data set. If you do not pass in a premint_id, we will create a new preminted NFT data set.",
                        },
                        quantity: {
                            type: 'number',
                            description:
                                'Number of NFTs to be created with this data set. Example, you want to create 100 NFTs that are all the same, or only 1, quantity will determine that count.',
                        },
                        metadata: {
                            type: 'object',
                            properties: {
                                name: {
                                    type: 'string',
                                    description: 'Name of the item.',
                                },
                                image: {
                                    type: 'string',
                                    description:
                                        'This is the URL to the image of the item. Can be just about any type of image (including SVG, which will be converted into PNG), and can be IPFS URLs or paths. We recommend using a 350 x 350 image.',
                                },
                                animation_url: {
                                    type: 'string',
                                    description:
                                        'A URL to a multimedia attachment for the item.The file extensions GLTF, GLB, WEBM, MP4, M4V, OGV, and OGG are supported, along with the audio-only extensions MP3, WAV, and OGA.\n\nAnimation_url also supports HTML pages, allowing you to build rich experiences and interactive NFTs using JavaScript canvas WebGL, and more. Scripts and relative paths within the HTML page are now supported. However, access to browser extensions is not supported.',
                                },
                                description: {
                                    type: 'string',
                                    description:
                                        'A human-readable description of the item. Markdown is supported.',
                                },
                                attributes: {
                                    type: 'array',
                                    items: {
                                        type: 'object',
                                        properties: {
                                            trait_type: { type: 'string' },
                                            value: { type: 'string' },
                                        },
                                        required: ['trait_type', 'value'],
                                    },
                                    description:
                                        'These are the attributes for the item, which will show up on the item page on Mintable and other marketplaces.',
                                },
                                title: {
                                    type: 'string',
                                    description:
                                        'Title of this NFT, can be same as name, this is used to list item for sales.',
                                },
                                subtitle: {
                                    type: 'string',
                                    description:
                                        'Short description or subtitle of NFT, can be same as description, this is used to list item for sales.',
                                },
                            },
                            required: ['name', 'image'],
                            description:
                                'The metadata for the NFT pre-mint data, such as image, url, and additional properties to be on the NFT.',
                        },
                        project_id: { type: 'string' },
                        generator_type: {
                            type: 'string',
                            enum: ['Generative', 'Others'],
                            description: '`Generative` `Others`',
                        },
                        pk: { type: 'string' },
                        sk: { type: 'string' },
                    },
                    required: [
                        'generator_type',
                        'metadata',
                        'pk',
                        'premint_id',
                        'project_id',
                        'quantity',
                        'sk',
                    ],
                    description: 'Data of the response',
                },
            },
            required: ['data'],
            $schema: 'http://json-schema.org/draft-04/schema#',
        },
        '400': {
            properties: { message: { type: 'string' } },
            type: 'object',
            $schema: 'http://json-schema.org/draft-04/schema#',
        },
        '422': {
            properties: { message: { type: 'string' } },
            type: 'object',
            $schema: 'http://json-schema.org/draft-04/schema#',
        },
    },
} as const
const PremintsImport = {
    body: {
        type: 'object',
        properties: {
            url: {
                type: 'string',
                description:
                    'This is an optional field that specifies the URL of the data source that you want to import. The URL should be a valid and accessible web address that contains the data in a compatible format. For example, you can use a URL that points to a CSV file, a JSON file, or an API endpoint that returns the data as JSON. The url field is optional, which means that you can either provide a URL or an array of input items to import data. If you provide a URL, the service will import data from the specified URL.',
            },
            items: {
                type: 'array',
                items: {
                    type: 'object',
                    properties: {
                        premint_id: {
                            type: 'string',
                            description:
                                "Premint_id can be found by calling premint/list to get all the preminted NFT's IDs and then you can pass it in here to modifiy that preminted NFT data set. If you do not pass in a premint_id, we will create a new preminted NFT data set.",
                        },
                        quantity: {
                            type: 'number',
                            description:
                                'Number of NFTs to be created with this data set. Example, you want to create 100 NFTs that are all the same, or only 1, quantity will determine that count.',
                        },
                        metadata: {
                            type: 'object',
                            properties: {
                                name: {
                                    type: 'string',
                                    description: 'Name of the item.',
                                },
                                image: {
                                    type: 'string',
                                    description:
                                        'This is the URL to the image of the item. Can be just about any type of image (including SVG, which will be converted into PNG), and can be IPFS URLs or paths. We recommend using a 350 x 350 image.',
                                },
                                animation_url: {
                                    type: 'string',
                                    description:
                                        'A URL to a multimedia attachment for the item.The file extensions GLTF, GLB, WEBM, MP4, M4V, OGV, and OGG are supported, along with the audio-only extensions MP3, WAV, and OGA.\n\nAnimation_url also supports HTML pages, allowing you to build rich experiences and interactive NFTs using JavaScript canvas WebGL, and more. Scripts and relative paths within the HTML page are now supported. However, access to browser extensions is not supported.',
                                },
                                description: {
                                    type: 'string',
                                    description:
                                        'A human-readable description of the item. Markdown is supported.',
                                },
                                attributes: {
                                    type: 'array',
                                    items: {
                                        type: 'object',
                                        properties: {
                                            trait_type: { type: 'string' },
                                            value: { type: 'string' },
                                        },
                                        required: ['trait_type', 'value'],
                                    },
                                    description:
                                        'These are the attributes for the item, which will show up on the item page on Mintable and other marketplaces.',
                                },
                                title: {
                                    type: 'string',
                                    description:
                                        'Title of this NFT, can be same as name, this is used to list item for sales.',
                                },
                                subtitle: {
                                    type: 'string',
                                    description:
                                        'Short description or subtitle of NFT, can be same as description, this is used to list item for sales.',
                                },
                            },
                            required: ['name', 'image'],
                            description:
                                'The metadata for the NFT pre-mint data, such as image, url, and additional properties to be on the NFT.',
                        },
                    },
                    required: ['quantity', 'metadata'],
                },
                description:
                    'This is also an optional field that specifies an array of pre-mint user input items. These are objects that contain the information and metadata for each item that you want to mint. The items field is also optional, which means that you can either provide an array of input items or a URL to import data. If you provide an array of input items, each item in the array should have the following properties such as quantity, and metadata.',
            },
        },
        $schema: 'http://json-schema.org/draft-04/schema#',
    },
    metadata: {
        allOf: [
            {
                type: 'object',
                properties: {
                    projectId: {
                        type: 'string',
                        $schema: 'http://json-schema.org/draft-04/schema#',
                        description:
                            'Project Id - found on your dashboard on dashboard.mintology.app',
                    },
                },
                required: ['projectId'],
            },
        ],
    },
    response: {
        '200': {
            type: 'object',
            properties: { success: { type: 'boolean' } },
            required: ['success'],
            $schema: 'http://json-schema.org/draft-04/schema#',
        },
        '400': {
            properties: { message: { type: 'string' } },
            type: 'object',
            $schema: 'http://json-schema.org/draft-04/schema#',
        },
        '422': {
            properties: { message: { type: 'string' } },
            type: 'object',
            $schema: 'http://json-schema.org/draft-04/schema#',
        },
    },
} as const
const PremintsList = {
    metadata: {
        allOf: [
            {
                type: 'object',
                properties: {
                    projectId: {
                        type: 'string',
                        $schema: 'http://json-schema.org/draft-04/schema#',
                        description:
                            'Project Id - found on your dashboard on dashboard.mintology.app',
                    },
                },
                required: ['projectId'],
            },
        ],
    },
    response: {
        '200': {
            type: 'object',
            properties: {
                data: {
                    type: 'array',
                    items: {
                        type: 'object',
                        properties: {
                            premint_id: {
                                type: 'string',
                                description:
                                    "Premint_id can be found by calling premint/list to get all the preminted NFT's IDs and then you can pass it in here to modifiy that preminted NFT data set. If you do not pass in a premint_id, we will create a new preminted NFT data set.",
                            },
                            quantity: {
                                type: 'number',
                                description:
                                    'Number of NFTs to be created with this data set. Example, you want to create 100 NFTs that are all the same, or only 1, quantity will determine that count.',
                            },
                            metadata: {
                                type: 'object',
                                properties: {
                                    name: {
                                        type: 'string',
                                        description: 'Name of the item.',
                                    },
                                    image: {
                                        type: 'string',
                                        description:
                                            'This is the URL to the image of the item. Can be just about any type of image (including SVG, which will be converted into PNG), and can be IPFS URLs or paths. We recommend using a 350 x 350 image.',
                                    },
                                    animation_url: {
                                        type: 'string',
                                        description:
                                            'A URL to a multimedia attachment for the item.The file extensions GLTF, GLB, WEBM, MP4, M4V, OGV, and OGG are supported, along with the audio-only extensions MP3, WAV, and OGA.\n\nAnimation_url also supports HTML pages, allowing you to build rich experiences and interactive NFTs using JavaScript canvas WebGL, and more. Scripts and relative paths within the HTML page are now supported. However, access to browser extensions is not supported.',
                                    },
                                    description: {
                                        type: 'string',
                                        description:
                                            'A human-readable description of the item. Markdown is supported.',
                                    },
                                    attributes: {
                                        type: 'array',
                                        items: {
                                            type: 'object',
                                            properties: {
                                                trait_type: { type: 'string' },
                                                value: { type: 'string' },
                                            },
                                            required: ['trait_type', 'value'],
                                        },
                                        description:
                                            'These are the attributes for the item, which will show up on the item page on Mintable and other marketplaces.',
                                    },
                                    title: {
                                        type: 'string',
                                        description:
                                            'Title of this NFT, can be same as name, this is used to list item for sales.',
                                    },
                                    subtitle: {
                                        type: 'string',
                                        description:
                                            'Short description or subtitle of NFT, can be same as description, this is used to list item for sales.',
                                    },
                                },
                                required: ['name', 'image'],
                                description:
                                    'The metadata for the NFT pre-mint data, such as image, url, and additional properties to be on the NFT.',
                            },
                            project_id: { type: 'string' },
                            generator_type: {
                                type: 'string',
                                enum: ['Generative', 'Others'],
                                description: '`Generative` `Others`',
                            },
                        },
                        required: [
                            'generator_type',
                            'metadata',
                            'premint_id',
                            'project_id',
                            'quantity',
                        ],
                    },
                    description: 'Data of the response',
                },
                meta: {
                    type: 'object',
                    properties: {
                        count: { type: 'number' },
                        last_evaluated_key: {
                            type: 'string',
                            description:
                                "If last_evaluated_key exists, it indicates that all the requested results don't fit in a single page, last_evaluated_key is provided in the response and you can include it in a subsequent request to fetch the next page of results.",
                        },
                    },
                    required: ['count'],
                    description: 'Metadata of the response',
                },
            },
            required: ['data', 'meta'],
            $schema: 'http://json-schema.org/draft-04/schema#',
        },
        '400': {
            properties: { message: { type: 'string' } },
            type: 'object',
            $schema: 'http://json-schema.org/draft-04/schema#',
        },
        '422': {
            properties: { message: { type: 'string' } },
            type: 'object',
            $schema: 'http://json-schema.org/draft-04/schema#',
        },
    },
} as const
const PremintsRemove = {
    metadata: {
        allOf: [
            {
                type: 'object',
                properties: {
                    projectId: {
                        type: 'string',
                        $schema: 'http://json-schema.org/draft-04/schema#',
                        description:
                            'Project Id - found on your dashboard on dashboard.mintology.app',
                    },
                    premintId: {
                        type: 'string',
                        $schema: 'http://json-schema.org/draft-04/schema#',
                        description: 'premintId',
                    },
                },
                required: ['projectId', 'premintId'],
            },
        ],
    },
    response: {
        '200': {
            type: 'object',
            properties: { success: { type: 'boolean' } },
            required: ['success'],
            $schema: 'http://json-schema.org/draft-04/schema#',
        },
        '400': {
            properties: { message: { type: 'string' } },
            type: 'object',
            $schema: 'http://json-schema.org/draft-04/schema#',
        },
        '422': {
            properties: { message: { type: 'string' } },
            type: 'object',
            $schema: 'http://json-schema.org/draft-04/schema#',
        },
    },
} as const
const PremintsShow = {
    metadata: {
        allOf: [
            {
                type: 'object',
                properties: {
                    projectId: {
                        type: 'string',
                        $schema: 'http://json-schema.org/draft-04/schema#',
                        description:
                            'Project Id - found on your dashboard on dashboard.mintology.app',
                    },
                    premintId: {
                        type: 'string',
                        $schema: 'http://json-schema.org/draft-04/schema#',
                        description: 'premintId',
                    },
                },
                required: ['projectId', 'premintId'],
            },
        ],
    },
    response: {
        '200': {
            type: 'object',
            properties: {
                data: {
                    type: 'object',
                    properties: {
                        premint_id: {
                            type: 'string',
                            description:
                                "Premint_id can be found by calling premint/list to get all the preminted NFT's IDs and then you can pass it in here to modifiy that preminted NFT data set. If you do not pass in a premint_id, we will create a new preminted NFT data set.",
                        },
                        quantity: {
                            type: 'number',
                            description:
                                'Number of NFTs to be created with this data set. Example, you want to create 100 NFTs that are all the same, or only 1, quantity will determine that count.',
                        },
                        metadata: {
                            type: 'object',
                            properties: {
                                name: {
                                    type: 'string',
                                    description: 'Name of the item.',
                                },
                                image: {
                                    type: 'string',
                                    description:
                                        'This is the URL to the image of the item. Can be just about any type of image (including SVG, which will be converted into PNG), and can be IPFS URLs or paths. We recommend using a 350 x 350 image.',
                                },
                                animation_url: {
                                    type: 'string',
                                    description:
                                        'A URL to a multimedia attachment for the item.The file extensions GLTF, GLB, WEBM, MP4, M4V, OGV, and OGG are supported, along with the audio-only extensions MP3, WAV, and OGA.\n\nAnimation_url also supports HTML pages, allowing you to build rich experiences and interactive NFTs using JavaScript canvas WebGL, and more. Scripts and relative paths within the HTML page are now supported. However, access to browser extensions is not supported.',
                                },
                                description: {
                                    type: 'string',
                                    description:
                                        'A human-readable description of the item. Markdown is supported.',
                                },
                                attributes: {
                                    type: 'array',
                                    items: {
                                        type: 'object',
                                        properties: {
                                            trait_type: { type: 'string' },
                                            value: { type: 'string' },
                                        },
                                        required: ['trait_type', 'value'],
                                    },
                                    description:
                                        'These are the attributes for the item, which will show up on the item page on Mintable and other marketplaces.',
                                },
                                title: {
                                    type: 'string',
                                    description:
                                        'Title of this NFT, can be same as name, this is used to list item for sales.',
                                },
                                subtitle: {
                                    type: 'string',
                                    description:
                                        'Short description or subtitle of NFT, can be same as description, this is used to list item for sales.',
                                },
                            },
                            required: ['name', 'image'],
                            description:
                                'The metadata for the NFT pre-mint data, such as image, url, and additional properties to be on the NFT.',
                        },
                        project_id: { type: 'string' },
                        generator_type: {
                            type: 'string',
                            enum: ['Generative', 'Others'],
                            description: '`Generative` `Others`',
                        },
                        pk: { type: 'string' },
                        sk: { type: 'string' },
                    },
                    required: [
                        'generator_type',
                        'metadata',
                        'pk',
                        'premint_id',
                        'project_id',
                        'quantity',
                        'sk',
                    ],
                    description: 'Data of the response',
                },
            },
            required: ['data'],
            $schema: 'http://json-schema.org/draft-04/schema#',
        },
        '400': {
            properties: { message: { type: 'string' } },
            type: 'object',
            $schema: 'http://json-schema.org/draft-04/schema#',
        },
        '422': {
            properties: { message: { type: 'string' } },
            type: 'object',
            $schema: 'http://json-schema.org/draft-04/schema#',
        },
    },
} as const
const PremintsUpdate = {
    body: {
        type: 'object',
        properties: {
            quantity: {
                type: 'number',
                description:
                    'Number of NFTs to be created with this data set. Example, you want to create 100 NFTs that are all the same, or only 1, quantity will determine that count.',
            },
            metadata: {
                type: 'object',
                properties: {
                    name: { type: 'string', description: 'Name of the item.' },
                    image: {
                        type: 'string',
                        description:
                            'This is the URL to the image of the item. Can be just about any type of image (including SVG, which will be converted into PNG), and can be IPFS URLs or paths. We recommend using a 350 x 350 image.',
                    },
                    animation_url: {
                        type: 'string',
                        description:
                            'A URL to a multimedia attachment for the item.The file extensions GLTF, GLB, WEBM, MP4, M4V, OGV, and OGG are supported, along with the audio-only extensions MP3, WAV, and OGA.\n\nAnimation_url also supports HTML pages, allowing you to build rich experiences and interactive NFTs using JavaScript canvas WebGL, and more. Scripts and relative paths within the HTML page are now supported. However, access to browser extensions is not supported.',
                    },
                    description: {
                        type: 'string',
                        description:
                            'A human-readable description of the item. Markdown is supported.',
                    },
                    attributes: {
                        type: 'array',
                        items: {
                            type: 'object',
                            properties: {
                                trait_type: { type: 'string' },
                                value: { type: 'string' },
                            },
                            required: ['trait_type', 'value'],
                        },
                        description:
                            'These are the attributes for the item, which will show up on the item page on Mintable and other marketplaces.',
                    },
                    title: {
                        type: 'string',
                        description:
                            'Title of this NFT, can be same as name, this is used to list item for sales.',
                    },
                    subtitle: {
                        type: 'string',
                        description:
                            'Short description or subtitle of NFT, can be same as description, this is used to list item for sales.',
                    },
                },
                required: ['name', 'image'],
                description:
                    'The metadata for the NFT pre-mint data, such as image, url, and additional properties to be on the NFT.',
            },
        },
        required: ['quantity', 'metadata'],
        $schema: 'http://json-schema.org/draft-04/schema#',
    },
    metadata: {
        allOf: [
            {
                type: 'object',
                properties: {
                    projectId: {
                        type: 'string',
                        $schema: 'http://json-schema.org/draft-04/schema#',
                        description:
                            'Project Id - found on your dashboard on dashboard.mintology.app',
                    },
                    premintId: {
                        type: 'string',
                        $schema: 'http://json-schema.org/draft-04/schema#',
                        description: 'premintId',
                    },
                },
                required: ['projectId', 'premintId'],
            },
        ],
    },
    response: {
        '200': {
            properties: {},
            type: 'object',
            $schema: 'http://json-schema.org/draft-04/schema#',
        },
        '400': {
            properties: { message: { type: 'string' } },
            type: 'object',
            $schema: 'http://json-schema.org/draft-04/schema#',
        },
        '422': {
            properties: { message: { type: 'string' } },
            type: 'object',
            $schema: 'http://json-schema.org/draft-04/schema#',
        },
    },
} as const
const ProjectsClaimUpdate = {
    body: {
        type: 'object',
        properties: { enabled: { type: 'boolean' } },
        required: ['enabled'],
        additionalProperties: false,
        $schema: 'http://json-schema.org/draft-04/schema#',
    },
    metadata: {
        allOf: [
            {
                type: 'object',
                properties: {
                    projectId: {
                        type: 'string',
                        $schema: 'http://json-schema.org/draft-04/schema#',
                        description:
                            'Project Id - found on your dashboard on dashboard.mintology.app',
                    },
                },
                required: ['projectId'],
            },
        ],
    },
    response: {
        '200': {
            properties: {},
            type: 'object',
            $schema: 'http://json-schema.org/draft-04/schema#',
        },
        '400': {
            properties: { message: { type: 'string' } },
            type: 'object',
            $schema: 'http://json-schema.org/draft-04/schema#',
        },
        '422': {
            properties: { message: { type: 'string' } },
            type: 'object',
            $schema: 'http://json-schema.org/draft-04/schema#',
        },
    },
} as const
const ProjectsCreate = {
    body: {
        type: 'object',
        properties: {
            name: {
                type: 'string',
                description:
                    'The name of your NFT project that is displayed on the Mintology dashboard. <strong>This cannot be changed once the contract is deployed.</strong>',
            },
            description: {
                type: 'string',
                description: 'The description of your NFT project.',
            },
            mint_limit_per_address: {
                type: 'number',
                description:
                    'This field represents the maximum number of NFTs that a single wallet can mint. It sets a limit to prevent any single wallet from minting an excessive number of NFTs. This limit should be less than or equal to the total supply of NFTs if the total supply is set.',
            },
            contract_type: {
                type: 'string',
                enum: ['Shared', 'Dedicated', 'Existing'],
                description:
                    "Whether its a shared contract that multiple brands can mint under (no deployment costs), a dedicated contract you control and deploy, or an existing contract you've already deployed and used on another project. <strong>This cannot be changed once the contract is deployed.</strong>",
            },
            wallet_type: {
                type: 'string',
                enum: ['Both', 'Custodial', 'NonCustodial'],
                description:
                    "Select Non-custodial if you expect your users to already have a crypto wallet. Or if your users most likely don't have a crypto wallet, then select custodial. If a few users have a wallet, they can use their existing wallet and not need to create a custodial wallet.",
            },
            base_uri: {
                type: 'string',
                description:
                    'Base URI for metadata, if you want to use your own storage. If you leave this blank, we will handle this for you.',
            },
            contract_name: {
                type: 'string',
                description:
                    'The contract name that will appear in the blockchain. When creating the Project through Dashboard, this is set from the "name" parameter input. This is required if you select "Dedicated" as contract type.  <strong>This cannot be changed once the contract is deployed.</strong>',
            },
            symbol: {
                type: 'string',
                description:
                    'The shortened term or ticker symbol unique to your contract (for example "XYZ"). This is required if you select "Dedicated" as contract type. <strong>This cannot be changed once the contract is deployed.</strong>',
            },
            royalty: {
                type: 'number',
                description:
                    'Royalty for secondary sales, in % - this uses ERC-2981 for on-chain royalties so that when any NFT is sold on a marketplace that supports on-chain royalties you will get this percentage of the sale. <strong>This cannot be changed once the contract is deployed.</strong>',
            },
            total_supply: {
                type: 'number',
                description:
                    'This is an optional field that specifies the total supply of your NFTs in your dedicated smart contract. You can provide the value if you choose dedicated smart contract or existing smart contracts as your contract type, <strong>This cannot be changed once the contract is deployed.</strong>. If you leave this empty, it will set unlimited number of NFTs that can be minted If you enter 100, only 100 NFTs can ever be minted under this contract.',
            },
            contract_address: {
                type: 'string',
                description:
                    'If you want to reuse one of your existing smart contract (example using the same contract that was created for a different project).',
            },
            owner_address: {
                type: 'string',
                description:
                    "This field is optional and is used when the contract type is set to \"Dedicated\". The user can provide their wallet address which will be set as the owner of the deployed smart contract. It's important that this address is not a public address of someone else, as it's like taking ownership of the contract. If left empty, Mintology's address will be set as the owner. Users can later request Mintology to transfer the ownership after the contract deployment.",
            },
            network: {
                type: 'number',
                enum: [1, 11155111],
                description:
                    'This is your network you want to deploy it to on Ethereum, your options are   MAINNET = 1, SEPOLIA = 11155111 <strong>This cannot be changed once the contract is deployed.</strong>',
            },
            chain: {
                type: 'string',
                enum: ['eth', 'imx'],
                description:
                    'The blockchain you want to use, either Ethereum or IMX. <strong>This cannot be changed once the contract is deployed.</strong>',
            },
            total_volume: { type: 'number' },
            total_non_generative_premints: { type: 'number' },
        },
        required: [
            'name',
            'description',
            'contract_type',
            'wallet_type',
            'contract_name',
            'network',
            'chain',
        ],
        $schema: 'http://json-schema.org/draft-04/schema#',
    },
    response: {
        '201': {
            type: 'object',
            properties: {
                data: {
                    type: 'object',
                    properties: {
                        domain: { type: 'string' },
                        name: {
                            type: 'string',
                            description:
                                'The name of your NFT project that is displayed on the Mintology dashboard. <strong>This cannot be changed once the contract is deployed.</strong>',
                        },
                        description: {
                            type: 'string',
                            description: 'The description of your NFT project.',
                        },
                        mint_limit_per_address: {
                            type: 'number',
                            description:
                                'This field represents the maximum number of NFTs that a single wallet can mint. It sets a limit to prevent any single wallet from minting an excessive number of NFTs. This limit should be less than or equal to the total supply of NFTs if the total supply is set.',
                        },
                        contract_type: {
                            type: 'string',
                            enum: ['Shared', 'Dedicated', 'Existing'],
                            description:
                                "Whether its a shared contract that multiple brands can mint under (no deployment costs), a dedicated contract you control and deploy, or an existing contract you've already deployed and used on another project. <strong>This cannot be changed once the contract is deployed.</strong>\n\n`Shared` `Dedicated` `Existing`",
                        },
                        wallet_type: {
                            type: 'string',
                            enum: ['Both', 'Custodial', 'NonCustodial'],
                            description:
                                "Select Non-custodial if you expect your users to already have a crypto wallet. Or if your users most likely don't have a crypto wallet, then select custodial. If a few users have a wallet, they can use their existing wallet and not need to create a custodial wallet.\n\n`Both` `Custodial` `NonCustodial`",
                        },
                        base_uri: {
                            type: 'string',
                            description:
                                'Base URI for metadata, if you want to use your own storage. If you leave this blank, we will handle this for you.',
                        },
                        contract_name: {
                            type: 'string',
                            description:
                                'The contract name that will appear in the blockchain. When creating the Project through Dashboard, this is set from the "name" parameter input. This is required if you select "Dedicated" as contract type.  <strong>This cannot be changed once the contract is deployed.</strong>',
                        },
                        symbol: {
                            type: 'string',
                            description:
                                'The shortened term or ticker symbol unique to your contract (for example "XYZ"). This is required if you select "Dedicated" as contract type. <strong>This cannot be changed once the contract is deployed.</strong>',
                        },
                        royalty: {
                            type: 'number',
                            description:
                                'Royalty for secondary sales, in % - this uses ERC-2981 for on-chain royalties so that when any NFT is sold on a marketplace that supports on-chain royalties you will get this percentage of the sale. <strong>This cannot be changed once the contract is deployed.</strong>',
                        },
                        total_supply: {
                            type: 'number',
                            description:
                                'This is an optional field that specifies the total supply of your NFTs in your dedicated smart contract. You can provide the value if you choose dedicated smart contract or existing smart contracts as your contract type, <strong>This cannot be changed once the contract is deployed.</strong>. If you leave this empty, it will set unlimited number of NFTs that can be minted If you enter 100, only 100 NFTs can ever be minted under this contract.',
                        },
                        contract_address: {
                            type: 'string',
                            description:
                                'If you want to reuse one of your existing smart contract (example using the same contract that was created for a different project).',
                        },
                        owner_address: {
                            type: 'string',
                            description:
                                "This field is optional and is used when the contract type is set to \"Dedicated\". The user can provide their wallet address which will be set as the owner of the deployed smart contract. It's important that this address is not a public address of someone else, as it's like taking ownership of the contract. If left empty, Mintology's address will be set as the owner. Users can later request Mintology to transfer the ownership after the contract deployment.",
                        },
                        network: {
                            type: 'number',
                            enum: [1, 11155111],
                            description:
                                'This is your network you want to deploy it to on Ethereum, your options are   MAINNET = 1, SEPOLIA = 11155111 <strong>This cannot be changed once the contract is deployed.</strong>\n\n`1` `11155111`',
                        },
                        chain: {
                            type: 'string',
                            enum: ['eth', 'imx'],
                            description:
                                'The blockchain you want to use, either Ethereum or IMX. <strong>This cannot be changed once the contract is deployed.</strong>\n\n`eth` `imx`',
                        },
                        total_volume: { type: 'number' },
                        total_non_generative_premints: { type: 'number' },
                        status: {
                            type: 'string',
                            enum: [
                                'Draft',
                                'Disabled',
                                'Failed',
                                'Published',
                                'Suspended',
                                'Deploying',
                            ],
                            description:
                                '`Draft` `Disabled` `Failed` `Published` `Suspended` `Deploying`',
                        },
                        project_id: { type: 'string' },
                        parent_id: { type: 'string' },
                        used_quantity: { type: 'number' },
                        organization_id: { type: 'string' },
                        non_sub_pk: { type: 'string' },
                        imx_project_id: { type: 'number' },
                        contract_deployment_tx_hash: { type: 'string' },
                    },
                    required: [
                        'chain',
                        'contract_name',
                        'contract_type',
                        'description',
                        'domain',
                        'name',
                        'network',
                        'organization_id',
                        'project_id',
                        'status',
                        'wallet_type',
                    ],
                    description: 'Data of the response',
                },
            },
            required: ['data'],
            $schema: 'http://json-schema.org/draft-04/schema#',
        },
        '400': {
            properties: { message: { type: 'string' } },
            type: 'object',
            $schema: 'http://json-schema.org/draft-04/schema#',
        },
        '422': {
            properties: { message: { type: 'string' } },
            type: 'object',
            $schema: 'http://json-schema.org/draft-04/schema#',
        },
    },
} as const
const ProjectsDeploy = {
    metadata: {
        allOf: [
            {
                type: 'object',
                properties: {
                    projectId: {
                        type: 'string',
                        $schema: 'http://json-schema.org/draft-04/schema#',
                        description:
                            'Project Id - found on your dashboard on dashboard.mintology.app',
                    },
                },
                required: ['projectId'],
            },
        ],
    },
    response: {
        '200': {
            properties: {},
            type: 'object',
            $schema: 'http://json-schema.org/draft-04/schema#',
        },
        '400': {
            properties: { message: { type: 'string' } },
            type: 'object',
            $schema: 'http://json-schema.org/draft-04/schema#',
        },
        '422': {
            properties: { message: { type: 'string' } },
            type: 'object',
            $schema: 'http://json-schema.org/draft-04/schema#',
        },
    },
} as const
const ProjectsList = {
    response: {
        '200': {
            type: 'object',
            properties: {
                data: {
                    type: 'array',
                    items: {
                        type: 'object',
                        properties: {
                            status: {
                                type: 'string',
                                enum: [
                                    'Draft',
                                    'Disabled',
                                    'Failed',
                                    'Published',
                                    'Suspended',
                                    'Deploying',
                                ],
                                description:
                                    '`Draft` `Disabled` `Failed` `Published` `Suspended` `Deploying`',
                            },
                            project_id: { type: 'string' },
                            used_quantity: { type: 'number' },
                            organization_id: { type: 'string' },
                            non_sub_pk: { type: 'string' },
                            imx_project_id: { type: 'number' },
                            contract_deployment_tx_hash: { type: 'string' },
                            domain: {},
                            name: {},
                            description: {},
                            mint_limit_per_address: {},
                            contract_type: {},
                            wallet_type: {},
                            base_uri: {},
                            contract_name: {},
                            symbol: {},
                            royalty: {},
                            total_supply: {},
                            contract_address: {},
                            owner_address: {},
                            network: {},
                            chain: {},
                            total_volume: {},
                            total_non_generative_premints: {},
                        },
                        required: [
                            'status',
                            'project_id',
                            'organization_id',
                            'domain',
                            'name',
                            'description',
                            'mint_limit_per_address',
                            'contract_type',
                            'wallet_type',
                            'base_uri',
                            'contract_name',
                            'symbol',
                            'royalty',
                            'total_supply',
                            'contract_address',
                            'owner_address',
                            'network',
                            'chain',
                            'total_volume',
                            'total_non_generative_premints',
                        ],
                    },
                    description: 'Data of the response',
                },
                meta: {
                    type: 'object',
                    properties: {
                        count: { type: 'number' },
                        last_evaluated_key: {
                            type: 'string',
                            description:
                                "If last_evaluated_key exists, it indicates that all the requested results don't fit in a single page, last_evaluated_key is provided in the response and you can include it in a subsequent request to fetch the next page of results.",
                        },
                    },
                    required: ['count'],
                    description: 'Metadata of the response',
                },
            },
            required: ['data', 'meta'],
            $schema: 'http://json-schema.org/draft-04/schema#',
        },
        '400': {
            properties: { message: { type: 'string' } },
            type: 'object',
            $schema: 'http://json-schema.org/draft-04/schema#',
        },
        '422': {
            properties: { message: { type: 'string' } },
            type: 'object',
            $schema: 'http://json-schema.org/draft-04/schema#',
        },
    },
} as const
const ProjectsMintUpdate = {
    body: {
        type: 'object',
        properties: { enabled: { type: 'boolean' } },
        required: ['enabled'],
        $schema: 'http://json-schema.org/draft-04/schema#',
    },
    metadata: {
        allOf: [
            {
                type: 'object',
                properties: {
                    projectId: {
                        type: 'string',
                        $schema: 'http://json-schema.org/draft-04/schema#',
                        description:
                            'Project Id - found on your dashboard on dashboard.mintology.app',
                    },
                },
                required: ['projectId'],
            },
        ],
    },
    response: {
        '200': {
            properties: {},
            type: 'object',
            $schema: 'http://json-schema.org/draft-04/schema#',
        },
        '400': {
            properties: { message: { type: 'string' } },
            type: 'object',
            $schema: 'http://json-schema.org/draft-04/schema#',
        },
        '422': {
            properties: { message: { type: 'string' } },
            type: 'object',
            $schema: 'http://json-schema.org/draft-04/schema#',
        },
    },
} as const
const ProjectsRemove = {
    metadata: {
        allOf: [
            {
                type: 'object',
                properties: {
                    projectId: {
                        type: 'string',
                        $schema: 'http://json-schema.org/draft-04/schema#',
                        description:
                            'Project Id - found on your dashboard on dashboard.mintology.app',
                    },
                },
                required: ['projectId'],
            },
        ],
    },
    response: {
        '200': {
            properties: {},
            type: 'object',
            $schema: 'http://json-schema.org/draft-04/schema#',
        },
        '400': {
            properties: { message: { type: 'string' } },
            type: 'object',
            $schema: 'http://json-schema.org/draft-04/schema#',
        },
        '422': {
            properties: { message: { type: 'string' } },
            type: 'object',
            $schema: 'http://json-schema.org/draft-04/schema#',
        },
    },
} as const
const ProjectsShow = {
    metadata: {
        allOf: [
            {
                type: 'object',
                properties: {
                    projectId: {
                        type: 'string',
                        $schema: 'http://json-schema.org/draft-04/schema#',
                        description:
                            'Project Id - found on your dashboard on dashboard.mintology.app',
                    },
                },
                required: ['projectId'],
            },
        ],
    },
    response: {
        '200': {
            type: 'object',
            properties: {
                data: {
                    type: 'object',
                    properties: {
                        status: {
                            type: 'string',
                            enum: [
                                'Draft',
                                'Disabled',
                                'Failed',
                                'Published',
                                'Suspended',
                                'Deploying',
                            ],
                            description:
                                '`Draft` `Disabled` `Failed` `Published` `Suspended` `Deploying`',
                        },
                        project_id: { type: 'string' },
                        used_quantity: { type: 'number' },
                        organization_id: { type: 'string' },
                        non_sub_pk: { type: 'string' },
                        imx_project_id: { type: 'number' },
                        contract_deployment_tx_hash: { type: 'string' },
                        domain: {},
                        name: {},
                        description: {},
                        mint_limit_per_address: {},
                        contract_type: {},
                        wallet_type: {},
                        base_uri: {},
                        contract_name: {},
                        symbol: {},
                        royalty: {},
                        total_supply: {},
                        contract_address: {},
                        owner_address: {},
                        network: {},
                        chain: {},
                        total_volume: {},
                        total_non_generative_premints: {},
                        mint: {
                            type: 'object',
                            properties: {
                                enabled: { type: 'boolean' },
                                project_id: { type: 'string' },
                            },
                            required: ['enabled', 'project_id'],
                        },
                        claim: {
                            type: 'object',
                            properties: {
                                enabled: { type: 'boolean' },
                                use_code: { type: 'boolean' },
                                encrypted: { type: 'boolean' },
                                button_size: { type: 'string' },
                                button_name: { type: 'string' },
                                email_entry: { type: 'string' },
                                button_color: { type: 'string' },
                                button_shadow: { type: 'string' },
                                border_radius: { type: 'string' },
                                background_color: { type: 'string' },
                                terms_conditions: { type: 'string' },
                                project_id: { type: 'string' },
                            },
                            required: ['enabled', 'project_id'],
                        },
                        generative: {
                            type: 'object',
                            properties: {
                                project_id: { type: 'string' },
                                total_images: { type: 'number' },
                                status: {
                                    type: 'string',
                                    enum: ['Draft', 'Generated', 'Generating'],
                                    description:
                                        '`Draft` `Generated` `Generating`',
                                },
                                layers: {
                                    type: 'array',
                                    items: {
                                        type: 'object',
                                        properties: {
                                            frequency: { type: 'number' },
                                            name: { type: 'string' },
                                            percentage: { type: 'number' },
                                            images: {
                                                type: 'array',
                                                items: {
                                                    type: 'object',
                                                    properties: {
                                                        percentage: {
                                                            type: 'number',
                                                        },
                                                        url: { type: 'string' },
                                                        name: {
                                                            type: 'string',
                                                        },
                                                        x: { type: 'number' },
                                                        y: { type: 'number' },
                                                        frequency: {
                                                            type: 'number',
                                                        },
                                                    },
                                                    required: [
                                                        'frequency',
                                                        'name',
                                                        'percentage',
                                                        'url',
                                                    ],
                                                },
                                            },
                                        },
                                        required: [
                                            'frequency',
                                            'name',
                                            'percentage',
                                            'images',
                                        ],
                                    },
                                },
                            },
                            required: [
                                'project_id',
                                'total_images',
                                'status',
                                'layers',
                            ],
                        },
                        marketplace: {
                            type: 'object',
                            properties: {
                                name: { type: 'string' },
                                description: { type: 'string' },
                                icon: { type: 'string' },
                                cover: { type: 'string' },
                                royalty: { type: 'number' },
                                category: { type: 'string' },
                                sub_category: { type: 'string' },
                                external_url: { type: 'string' },
                                reddit_url: { type: 'string' },
                                youtube_url: { type: 'string' },
                                twitter_url: { type: 'string' },
                                instagram_url: { type: 'string' },
                                contract_address: { type: 'string' },
                                project_id: { type: 'string' },
                            },
                            required: [
                                'contract_address',
                                'name',
                                'project_id',
                            ],
                        },
                    },
                    required: [
                        'base_uri',
                        'chain',
                        'contract_address',
                        'contract_name',
                        'contract_type',
                        'description',
                        'domain',
                        'mint_limit_per_address',
                        'name',
                        'network',
                        'organization_id',
                        'owner_address',
                        'project_id',
                        'royalty',
                        'status',
                        'symbol',
                        'total_non_generative_premints',
                        'total_supply',
                        'total_volume',
                        'wallet_type',
                    ],
                    description: 'Data of the response',
                },
            },
            required: ['data'],
            $schema: 'http://json-schema.org/draft-04/schema#',
        },
        '400': {
            properties: { message: { type: 'string' } },
            type: 'object',
            $schema: 'http://json-schema.org/draft-04/schema#',
        },
        '422': {
            properties: { message: { type: 'string' } },
            type: 'object',
            $schema: 'http://json-schema.org/draft-04/schema#',
        },
    },
} as const
const ProjectsUpdate = {
    body: {
        type: 'object',
        properties: {
            domain: { type: 'string' },
            name: {
                type: 'string',
                description:
                    'The name of your NFT project that is displayed on the Mintology dashboard. <strong>This cannot be changed once the contract is deployed.</strong>',
            },
            description: {
                type: 'string',
                description: 'The description of your NFT project.',
            },
            mint_limit_per_address: {
                type: 'number',
                description:
                    'This field represents the maximum number of NFTs that a single wallet can mint. It sets a limit to prevent any single wallet from minting an excessive number of NFTs. This limit should be less than or equal to the total supply of NFTs if the total supply is set.',
            },
            contract_type: {
                type: 'string',
                enum: ['Shared', 'Dedicated', 'Existing'],
                description:
                    "Whether its a shared contract that multiple brands can mint under (no deployment costs), a dedicated contract you control and deploy, or an existing contract you've already deployed and used on another project. <strong>This cannot be changed once the contract is deployed.</strong>",
            },
            wallet_type: {
                type: 'string',
                enum: ['Both', 'Custodial', 'NonCustodial'],
                description:
                    "Select Non-custodial if you expect your users to already have a crypto wallet. Or if your users most likely don't have a crypto wallet, then select custodial. If a few users have a wallet, they can use their existing wallet and not need to create a custodial wallet.",
            },
            base_uri: {
                type: 'string',
                description:
                    'Base URI for metadata, if you want to use your own storage. If you leave this blank, we will handle this for you.',
            },
            contract_name: {
                type: 'string',
                description:
                    'The contract name that will appear in the blockchain. When creating the Project through Dashboard, this is set from the "name" parameter input. This is required if you select "Dedicated" as contract type.  <strong>This cannot be changed once the contract is deployed.</strong>',
            },
            symbol: {
                type: 'string',
                description:
                    'The shortened term or ticker symbol unique to your contract (for example "XYZ"). This is required if you select "Dedicated" as contract type. <strong>This cannot be changed once the contract is deployed.</strong>',
            },
            royalty: {
                type: 'number',
                description:
                    'Royalty for secondary sales, in % - this uses ERC-2981 for on-chain royalties so that when any NFT is sold on a marketplace that supports on-chain royalties you will get this percentage of the sale. <strong>This cannot be changed once the contract is deployed.</strong>',
            },
            total_supply: {
                type: 'number',
                description:
                    'This is an optional field that specifies the total supply of your NFTs in your dedicated smart contract. You can provide the value if you choose dedicated smart contract or existing smart contracts as your contract type, <strong>This cannot be changed once the contract is deployed.</strong>. If you leave this empty, it will set unlimited number of NFTs that can be minted If you enter 100, only 100 NFTs can ever be minted under this contract.',
            },
            contract_address: {
                type: 'string',
                description:
                    'If you want to reuse one of your existing smart contract (example using the same contract that was created for a different project).',
            },
            owner_address: {
                type: 'string',
                description:
                    "This field is optional and is used when the contract type is set to \"Dedicated\". The user can provide their wallet address which will be set as the owner of the deployed smart contract. It's important that this address is not a public address of someone else, as it's like taking ownership of the contract. If left empty, Mintology's address will be set as the owner. Users can later request Mintology to transfer the ownership after the contract deployment.",
            },
            network: {
                type: 'number',
                enum: [1, 11155111],
                description:
                    'This is your network you want to deploy it to on Ethereum, your options are   MAINNET = 1, SEPOLIA = 11155111 <strong>This cannot be changed once the contract is deployed.</strong>',
            },
            chain: {
                type: 'string',
                enum: ['eth', 'imx'],
                description:
                    'The blockchain you want to use, either Ethereum or IMX. <strong>This cannot be changed once the contract is deployed.</strong>',
            },
            total_volume: { type: 'number' },
            total_non_generative_premints: { type: 'number' },
        },
        required: [
            'domain',
            'name',
            'description',
            'contract_type',
            'wallet_type',
            'contract_name',
            'network',
            'chain',
        ],
        $schema: 'http://json-schema.org/draft-04/schema#',
    },
    metadata: {
        allOf: [
            {
                type: 'object',
                properties: {
                    projectId: {
                        type: 'string',
                        $schema: 'http://json-schema.org/draft-04/schema#',
                        description:
                            'Project Id - found on your dashboard on dashboard.mintology.app',
                    },
                },
                required: ['projectId'],
            },
        ],
    },
    response: {
        '200': {
            type: 'object',
            properties: {
                data: {
                    type: 'object',
                    properties: {
                        domain: { type: 'string' },
                        name: {
                            type: 'string',
                            description:
                                'The name of your NFT project that is displayed on the Mintology dashboard. <strong>This cannot be changed once the contract is deployed.</strong>',
                        },
                        description: {
                            type: 'string',
                            description: 'The description of your NFT project.',
                        },
                        mint_limit_per_address: {
                            type: 'number',
                            description:
                                'This field represents the maximum number of NFTs that a single wallet can mint. It sets a limit to prevent any single wallet from minting an excessive number of NFTs. This limit should be less than or equal to the total supply of NFTs if the total supply is set.',
                        },
                        contract_type: {
                            type: 'string',
                            enum: ['Shared', 'Dedicated', 'Existing'],
                            description:
                                "Whether its a shared contract that multiple brands can mint under (no deployment costs), a dedicated contract you control and deploy, or an existing contract you've already deployed and used on another project. <strong>This cannot be changed once the contract is deployed.</strong>\n\n`Shared` `Dedicated` `Existing`",
                        },
                        wallet_type: {
                            type: 'string',
                            enum: ['Both', 'Custodial', 'NonCustodial'],
                            description:
                                "Select Non-custodial if you expect your users to already have a crypto wallet. Or if your users most likely don't have a crypto wallet, then select custodial. If a few users have a wallet, they can use their existing wallet and not need to create a custodial wallet.\n\n`Both` `Custodial` `NonCustodial`",
                        },
                        base_uri: {
                            type: 'string',
                            description:
                                'Base URI for metadata, if you want to use your own storage. If you leave this blank, we will handle this for you.',
                        },
                        contract_name: {
                            type: 'string',
                            description:
                                'The contract name that will appear in the blockchain. When creating the Project through Dashboard, this is set from the "name" parameter input. This is required if you select "Dedicated" as contract type.  <strong>This cannot be changed once the contract is deployed.</strong>',
                        },
                        symbol: {
                            type: 'string',
                            description:
                                'The shortened term or ticker symbol unique to your contract (for example "XYZ"). This is required if you select "Dedicated" as contract type. <strong>This cannot be changed once the contract is deployed.</strong>',
                        },
                        royalty: {
                            type: 'number',
                            description:
                                'Royalty for secondary sales, in % - this uses ERC-2981 for on-chain royalties so that when any NFT is sold on a marketplace that supports on-chain royalties you will get this percentage of the sale. <strong>This cannot be changed once the contract is deployed.</strong>',
                        },
                        total_supply: {
                            type: 'number',
                            description:
                                'This is an optional field that specifies the total supply of your NFTs in your dedicated smart contract. You can provide the value if you choose dedicated smart contract or existing smart contracts as your contract type, <strong>This cannot be changed once the contract is deployed.</strong>. If you leave this empty, it will set unlimited number of NFTs that can be minted If you enter 100, only 100 NFTs can ever be minted under this contract.',
                        },
                        contract_address: {
                            type: 'string',
                            description:
                                'If you want to reuse one of your existing smart contract (example using the same contract that was created for a different project).',
                        },
                        owner_address: {
                            type: 'string',
                            description:
                                "This field is optional and is used when the contract type is set to \"Dedicated\". The user can provide their wallet address which will be set as the owner of the deployed smart contract. It's important that this address is not a public address of someone else, as it's like taking ownership of the contract. If left empty, Mintology's address will be set as the owner. Users can later request Mintology to transfer the ownership after the contract deployment.",
                        },
                        network: {
                            type: 'number',
                            enum: [1, 11155111],
                            description:
                                'This is your network you want to deploy it to on Ethereum, your options are   MAINNET = 1, SEPOLIA = 11155111 <strong>This cannot be changed once the contract is deployed.</strong>\n\n`1` `11155111`',
                        },
                        chain: {
                            type: 'string',
                            enum: ['eth', 'imx'],
                            description:
                                'The blockchain you want to use, either Ethereum or IMX. <strong>This cannot be changed once the contract is deployed.</strong>\n\n`eth` `imx`',
                        },
                        total_volume: { type: 'number' },
                        total_non_generative_premints: { type: 'number' },
                        status: {
                            type: 'string',
                            enum: [
                                'Draft',
                                'Disabled',
                                'Failed',
                                'Published',
                                'Suspended',
                                'Deploying',
                            ],
                            description:
                                '`Draft` `Disabled` `Failed` `Published` `Suspended` `Deploying`',
                        },
                        project_id: { type: 'string' },
                        parent_id: { type: 'string' },
                        used_quantity: { type: 'number' },
                        organization_id: { type: 'string' },
                        non_sub_pk: { type: 'string' },
                        imx_project_id: { type: 'number' },
                        contract_deployment_tx_hash: { type: 'string' },
                    },
                    required: [
                        'chain',
                        'contract_name',
                        'contract_type',
                        'description',
                        'domain',
                        'name',
                        'network',
                        'organization_id',
                        'project_id',
                        'status',
                        'wallet_type',
                    ],
                    description: 'Data of the response',
                },
            },
            required: ['data'],
            $schema: 'http://json-schema.org/draft-04/schema#',
        },
        '400': {
            properties: { message: { type: 'string' } },
            type: 'object',
            $schema: 'http://json-schema.org/draft-04/schema#',
        },
        '422': {
            properties: { message: { type: 'string' } },
            type: 'object',
            $schema: 'http://json-schema.org/draft-04/schema#',
        },
    },
} as const
export {
    Authorize,
    AuthorizeInventory,
    CustodialWalletsCreate,
    CustodialWalletsExportsApprove,
    CustodialWalletsExportsRequest,
    CustodialWalletsRemove,
    ImxMint,
    ImxRegister,
    ImxTransfer,
    MetaInfo,
    MetadataUpdate,
    MintClaim,
    MintMint,
    PremintsCreate,
    PremintsImport,
    PremintsList,
    PremintsRemove,
    PremintsShow,
    PremintsUpdate,
    ProjectsClaimUpdate,
    ProjectsCreate,
    ProjectsDeploy,
    ProjectsList,
    ProjectsMintUpdate,
    ProjectsRemove,
    ProjectsShow,
    ProjectsUpdate,
}
