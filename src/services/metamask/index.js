import { getProvider, requestAccounts } from './provider'

export const connectMetamask = async (baseProvider) => {
  const provider = await getProvider(baseProvider)
  return await requestAccounts(provider)
}
