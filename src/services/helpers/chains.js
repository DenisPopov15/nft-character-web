export const ETHEREUM = {
  name: 'Ethereum',
  short_name: 'eth',
  chain: 'ETH',
  network: 'ethereum',
  chain_id: 1,
  network_id: 1,
  native_currency: {
    symbol: 'ETH',
    name: 'Ether',
    decimals: '18',
  },
}

export const GOERLI = {
  name: 'Görli',
  short_name: 'gor',
  chain: 'ETH',
  network: 'goerli',
  chain_id: 5,
  network_id: 5,
  native_currency: {
    symbol: 'ETH',
    name: 'Ether',
    decimals: '18',
  },
}

export const SUPPORTED_CHAINS = [ETHEREUM, GOERLI]
