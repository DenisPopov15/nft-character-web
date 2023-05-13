import { ethers } from 'ethers'
import { convertStringToHex } from '../helpers/bignumber'
import { GOERLI } from '../helpers/chains'

export const getProvider = async (provider, chainId = GOERLI.chain_id) => {
  if (provider.networkVersion !== `${chainId}`) {
    await provider.request({
      method: 'wallet_switchEthereumChain',
      params: [{ chainId: `0x${convertStringToHex(chainId)}` }],
    })
  }
  return new ethers.providers.Web3Provider(provider, chainId)
}

export const requestAccounts = async (provider) => {
  return await provider.send('eth_requestAccounts', [])
}

export const signMessage = async (baseProvider, message) => {
  const provider = await getProvider(baseProvider)
  const signer = provider.getSigner()
  const signature = await signer.signMessage(message)
  return {
    signature,
    digest: message,
  }
}
