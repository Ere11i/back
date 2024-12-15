export const erc20Abi = [
    'event Approval(address indexed owner, address indexed spender, uint256 value)',
    'event UnBlacklisted(address indexed _account)',
    'function allowance(address owner, address spender) view returns (uint256)',
    'function approve(address spender, uint256 value) returns (bool)',
    'function balanceOf(address account) view returns (uint256)',
    'function decimals() view returns (uint8)',
    'function name() view returns (string)',
    'function symbol() view returns (string)',
    'function totalSupply() view returns (uint256)',
    'function transfer(address to, uint256 value) returns (bool)',
    'function transferFrom(address from, address to, uint256 value) returns (bool)',
]

export const redstone = /*#__PURE__*/ defineChain({
    id: 690,
    name: 'Redstone',
    network: 'redstone',
    nativeCurrency: {
        decimals: 18,
        name: 'Ether',
        symbol: 'ETH',
    },
    rpcUrls: {
        default: {
            http: ['https://rpc.redstonechain.com'],
            webSocket: ['wss://rpc.redstonechain.com'],
        },
        public: {
            http: ['https://rpc.redstonechain.com'],
            webSocket: ['wss://rpc.redstonechain.com'],
        },
    },
    blockExplorers: {
        default: {
            name: 'Redstone',
            url: 'https://explorer.redstone.xyz',
        },
    }
})

export function generateRandomString(length) {
    const chars = '0123456789abcdef'
    let result = ''
    for (let i = 0; i < length; i++) {
        const randomIndex = Math.floor(Math.random() * chars.length)
        result += chars[randomIndex]
    }
    return result
}

export function generateFormattedString() {
    const part1 = generateRandomString(32)
    const part2 = generateRandomString(16)
    const part3 = generateRandomString(1)
    
    return `${part1}-${part2}-${part3}`
}


const prices = await getTokensPrice('APT,ETH,MATIC,BNB,AVAX,CORE,CELO,KLAY,FTM,GLMR,MOVR')
export const aptPrice = prices.APT ? prices.APT.USD : 0
export const ethPrice = prices.ETH ? prices.ETH.USD : 0
export const maticPrice = prices.MATIC ? prices.MATIC.USD : 0
export const bnbPrice = prices.BNB ? prices.BNB.USD : 0
export const avaxPrice = prices.AVAX ? prices.AVAX.USD : 0
export const corePrice = prices.CORE ? prices.CORE.USD : 0
export const celoPrice = prices.CELO ? prices.CELO.USD : 0
export const klayPrice = prices.KLAY ? prices.KLAY.USD : 0
export const ftmPrice = prices.FTM ? prices.FTM.USD : 0
export const glmrPrice = prices.GLMR ? prices.GLMR.USD : 0
export const movrPrice = prices.MOVR ? prices.MOVR.USD : 0
