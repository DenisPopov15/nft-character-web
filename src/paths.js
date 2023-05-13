export var APP_PATHS
;((APP_PATHS) => {
  APP_PATHS['home'] = '/'
  APP_PATHS['nftList'] = '/nft-list/'
  APP_PATHS['characterPersona'] = '/character-persona/'
  APP_PATHS['characterStory'] = '/character-story/'
  APP_PATHS['chat'] = '/chat/'
  APP_PATHS['nftCharacteristics'] = `${APP_PATHS.nftList}:nftId/personallity/`
})(APP_PATHS || (APP_PATHS = {}))
