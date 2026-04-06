export const siteData = {
  name: 'Lyset',
  tagline: 'Algorithmic Trading Systems',
  description: 'Building high-performance trading bots for crypto markets, specialized in MEV capture, oracle lag exploitation, and quantitative strategies.',

  hero: {
    heading: 'lyset',
    subheading: 'Algorithmic Trading Systems',
  },

  projects: [
    {
      name: 'ETH RSI Scalper',
      description: 'High-frequency ETH scalping bot on Lighter DEX using RSI signals',
      details: 'Executes sub-second trades capturing micro volatility on Ethereum mainnet',
      status: 'LIVE',
      version: 'v21',
      github: 'https://github.com/0xde7c/lighter-bot',
      tags: ['Trading', 'Lighter DEX', 'RSI', 'Scalping'],
      featured: true,
    },
    {
      name: 'Polymarket Oracle Lag',
      description: 'Oracle lag arbitrage on Polymarket binary options',
      details: 'Exploits timing asymmetries in oracle updates for profitable binary trades',
      status: 'LIVE',
      version: 'v33',
      github: 'https://github.com/0xde7c',
      tags: ['Prediction Markets', 'Oracle Lag', 'Polymarket'],
      featured: true,
    },
    {
      name: 'Solana Copy Trading',
      description: 'Real-time on-chain copy trading for Solana tokens',
      details: 'Detects whale transactions and automatically executes matched trades',
      status: 'LIVE',
      version: 'v2',
      github: 'https://github.com/0xde7c',
      tags: ['Solana', 'Copy Trading', 'Whale Detection'],
      featured: true,
    },
    {
      name: 'Solana MEV Bot',
      description: 'Sandwich detection and MEV extraction on Solana',
      details: 'Real-time MEV opportunities on high-velocity Solana pairs',
      status: 'BUILDING',
      version: 'v0.1',
      github: 'https://github.com/0xde7c',
      tags: ['Solana', 'MEV', 'Sandwich'],
      featured: true,
    },
  ],

  stats: {
    liveDeployments: 4,
    marketsMonitored: [
      { name: 'Lighter DEX', description: 'Low-latency scalping on Ethereum' },
      { name: 'Hyperliquid', description: 'Perpetual trading on Solana' },
      { name: 'Solana', description: 'On-chain detection: copy trading & MEV' },
      { name: 'Polymarket', description: 'Oracle lag arbitrage on binary options' },
    ],
  },

  approach: {
    philosophy: 'Systematic trading across market inefficiencies—microstructure arbitrage, oracle lag, and on-chain signals.',
    execution: 'Sub-100ms execution across distributed infrastructure',
    methodology: 'Real-time data processing, algorithmic signal generation, automated trade execution with risk controls',
  },

  contact: {
    email: 'adityadotb@gmail.com',
    github: 'https://github.com/0xde7c',
    twitter: 'https://x.com/0xde7c',
  },
}
