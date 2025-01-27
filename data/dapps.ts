export interface Dapp {
  id: string;
  name: string;
  description: string;
  url: string;
  category: string;
}

export const dapps: Record<string, Dapp[]> = {
  lending: [
    { id: 'aave', name: 'Aave', description: 'Leading DeFi lending protocol', url: 'https://app.aave.com', category: 'lending' },
    { id: 'compound', name: 'Compound', description: 'Algorithmic lending protocol', url: 'https://compound.finance', category: 'lending' },
    { id: 'maker', name: 'MakerDAO', description: 'Decentralized stablecoin lending', url: 'https://oasis.app', category: 'lending' },
    { id: 'euler', name: 'Euler', description: 'Permissionless lending protocol', url: 'https://app.euler.finance', category: 'lending' },
    { id: 'benqi', name: 'BENQI', description: 'Avalanche lending market', url: 'https://app.benqi.fi', category: 'lending' },
    { id: 'venus', name: 'Venus', description: 'BSC lending protocol', url: 'https://app.venus.io', category: 'lending' },
    { id: 'radiant', name: 'Radiant', description: 'Cross-chain lending', url: 'https://app.radiant.capital', category: 'lending' },
    { id: 'spark', name: 'Spark', description: 'Ethereum-based lending', url: 'https://app.spark.fi', category: 'lending' }
  ],
  swaps: [
    { id: 'uniswap', name: 'Uniswap', description: 'Leading DEX protocol', url: 'https://app.uniswap.org', category: 'swaps' },
    { id: 'sushiswap', name: 'SushiSwap', description: 'Multi-chain DEX', url: 'https://sushi.com', category: 'swaps' },
    { id: 'curve', name: 'Curve', description: 'Stablecoin AMM', url: 'https://curve.fi', category: 'swaps' },
    { id: 'balancer', name: 'Balancer', description: 'Multi-token pools', url: 'https://app.balancer.fi', category: 'swaps' },
    { id: 'pancakeswap', name: 'PancakeSwap', description: 'BSC native DEX', url: 'https://pancakeswap.finance', category: 'swaps' },
    { id: 'traderjoe', name: 'Trader Joe', description: 'Avalanche DEX', url: 'https://traderjoexyz.com', category: 'swaps' },
    { id: 'spookyswap', name: 'SpookySwap', description: 'Fantom DEX', url: 'https://spookyswap.finance', category: 'swaps' },
    { id: 'raydium', name: 'Raydium', description: 'Solana AMM', url: 'https://raydium.io', category: 'swaps' }
  ],
  bridges: [
    { id: 'stargate', name: 'Stargate', description: 'Cross-chain liquidity', url: 'https://stargate.finance', category: 'bridges' },
    { id: 'hop', name: 'Hop Protocol', description: 'ETH L2 bridge', url: 'https://app.hop.exchange', category: 'bridges' },
    { id: 'across', name: 'Across', description: 'Fast bridge protocol', url: 'https://across.to', category: 'bridges' },
    { id: 'synapse', name: 'Synapse', description: 'Cross-chain bridge', url: 'https://synapseprotocol.com', category: 'bridges' },
    { id: 'cbridge', name: 'cBridge', description: 'Celer Network bridge', url: 'https://cbridge.celer.network', category: 'bridges' },
    { id: 'multichain', name: 'Multichain', description: 'Cross-chain router', url: 'https://multichain.org', category: 'bridges' },
    { id: 'portal', name: 'Portal', description: 'Wormhole bridge', url: 'https://portalbridge.com', category: 'bridges' },
    { id: 'orbit', name: 'Orbit Bridge', description: 'Multi-chain bridge', url: 'https://bridge.orbitchain.io', category: 'bridges' }
  ],
  yield: [
    { id: 'yearn', name: 'Yearn', description: 'Yield aggregator', url: 'https://yearn.finance', category: 'yield' },
    { id: 'beefy', name: 'Beefy', description: 'Multi-chain yields', url: 'https://app.beefy.com', category: 'yield' },
    { id: 'convex', name: 'Convex', description: 'Curve yields', url: 'https://www.convexfinance.com', category: 'yield' },
    { id: 'alpaca', name: 'Alpaca', description: 'Leveraged yield farming', url: 'https://app.alpacafinance.org', category: 'yield' },
    { id: 'harvest', name: 'Harvest', description: 'Yield optimization', url: 'https://harvest.finance', category: 'yield' },
    { id: 'idle', name: 'Idle', description: 'Best yield automation', url: 'https://idle.finance', category: 'yield' },
    { id: 'pickle', name: 'Pickle', description: 'Farming aggregator', url: 'https://app.pickle.finance', category: 'yield' },
    { id: 'badger', name: 'Badger', description: 'Bitcoin yields', url: 'https://app.badger.com', category: 'yield' }
  ],
  aggregators: [
    { id: 'oneinch', name: '1inch', description: 'DEX aggregator', url: 'https://app.1inch.io', category: 'aggregators' },
    { id: 'cowswap', name: 'CoW Swap', description: 'MEV protection DEX', url: 'https://swap.cow.fi', category: 'aggregators' },
    { id: 'matcha', name: 'Matcha', description: '0x DEX aggregator', url: 'https://matcha.xyz', category: 'aggregators' },
    { id: 'paraswap', name: 'ParaSwap', description: 'Multi-chain aggregator', url: 'https://paraswap.io', category: 'aggregators' },
    { id: 'openocean', name: 'OpenOcean', description: 'Cross-chain aggregator', url: 'https://openocean.finance', category: 'aggregators' },
    { id: 'firebird', name: 'Firebird', description: 'One-click swap', url: 'https://app.firebird.finance', category: 'aggregators' },
    { id: 'kyberswap', name: 'KyberSwap', description: 'Dynamic aggregator', url: 'https://kyberswap.com', category: 'aggregators' },
    { id: 'dodo', name: 'DODO', description: 'Liquidity aggregator', url: 'https://app.dodoex.io', category: 'aggregators' }
  ],
  nft: [
    { id: 'opensea', name: 'OpenSea', description: 'Leading NFT marketplace', url: 'https://opensea.io', category: 'nft' },
    { id: 'blur', name: 'Blur', description: 'Pro NFT trading', url: 'https://blur.io', category: 'nft' },
    { id: 'rarible', name: 'Rarible', description: 'Multi-chain NFT market', url: 'https://rarible.com', category: 'nft' },
    { id: 'looksrare', name: 'LooksRare', description: 'Community NFT market', url: 'https://looksrare.org', category: 'nft' },
    { id: 'magiceden', name: 'Magic Eden', description: 'Solana NFT market', url: 'https://magiceden.io', category: 'nft' },
    { id: 'foundation', name: 'Foundation', description: 'Curated NFT platform', url: 'https://foundation.app', category: 'nft' },
    { id: 'superrare', name: 'SuperRare', description: 'Digital art market', url: 'https://superrare.com', category: 'nft' },
    { id: 'nifty', name: 'Nifty Gateway', description: 'Luxury NFT market', url: 'https://niftygateway.com', category: 'nft' }
  ],
  gamefi: [
    { id: 'axie', name: 'Axie Infinity', description: 'NFT pet game', url: 'https://axieinfinity.com', category: 'gamefi' },
    { id: 'sandbox', name: 'The Sandbox', description: 'Virtual world', url: 'https://www.sandbox.game', category: 'gamefi' },
    { id: 'decentraland', name: 'Decentraland', description: 'Virtual reality platform', url: 'https://decentraland.org', category: 'gamefi' },
    { id: 'gala', name: 'Gala Games', description: 'Gaming ecosystem', url: 'https://app.gala.games', category: 'gamefi' },
    { id: 'illuvium', name: 'Illuvium', description: 'Auto battler RPG', url: 'https://illuvium.io', category: 'gamefi' },
    { id: 'stepn', name: 'STEPN', description: 'Move-to-earn game', url: 'https://stepn.com', category: 'gamefi' },
    { id: 'gods', name: 'Gods Unchained', description: 'Trading card game', url: 'https://godsunchained.com', category: 'gamefi' },
    { id: 'bigtime', name: 'Big Time', description: 'RPG adventure', url: 'https://bigtime.gg', category: 'gamefi' }
  ],
  social: [
    { id: 'lens', name: 'Lens Protocol', description: 'Social networking', url: 'https://lens.xyz', category: 'social' },
    { id: 'farcaster', name: 'Farcaster', description: 'Decentralized Twitter', url: 'https://farcaster.xyz', category: 'social' },
    { id: 'friend', name: 'Friend.tech', description: 'Social trading', url: 'https://friend.tech', category: 'social' },
    { id: 'mirror', name: 'Mirror', description: 'Web3 publishing', url: 'https://mirror.xyz', category: 'social' },
    { id: 'showtime', name: 'Showtime', description: 'NFT social network', url: 'https://showtime.xyz', category: 'social' },
    { id: 'orbis', name: 'Orbis', description: 'Social discussions', url: 'https://orbis.club', category: 'social' },
    { id: 'cyberconnect', name: 'CyberConnect', description: 'Social graph protocol', url: 'https://cyberconnect.me', category: 'social' },
    { id: 'status', name: 'Status', description: 'Web3 messenger', url: 'https://status.im', category: 'social' }
  ]
}; 