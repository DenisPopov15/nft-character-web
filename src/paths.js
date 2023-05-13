export var APP_PATHS
;((APP_PATHS) => {
  APP_PATHS['home'] = '/'
  APP_PATHS['nftList'] = '/nft-list/'
  APP_PATHS['nftCharacteristics'] = `${APP_PATHS.nftList}:nftId/personallity/`
  APP_PATHS['nftStory'] = `${APP_PATHS.nftList}:nftId/story/`
  APP_PATHS['nftChat'] = `${APP_PATHS.nftList}:nftId/chat/`
})(APP_PATHS || (APP_PATHS = {}))
