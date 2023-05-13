export const environment = {
  production: process.env.REACT_APP_PRODUCTION ?? false,
  BACKEND_URL: process.env.REACT_APP_BACKEND,
  NFT_COLLECTION_ADDRESS: process.env.REACT_APP_NFT_COLLECTION_ADDRESS,
  BACKEND_URL_SUFFIX: '/api',
  LOGIN_PAYLOAD: 'Log in to NFT Charcaters',
}
