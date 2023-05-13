import React from 'react'
import { generatePath, useNavigate } from 'react-router-dom'
import isEmpty from 'lodash.isempty'
import { Box, Text } from '@chakra-ui/react'
import { NftCard } from './nft-card'

import { APP_PATHS } from 'paths'

export const NftList = ({ nfts = [], itemsPerRow }) => {
  const navigate = useNavigate()
  const handleNavigateToNftCharacterDetails = (id) => () => {
    const nftCharacterDetailsPath = generatePath(APP_PATHS.nftCharacteristics, {
      nftId: id,
    })
    navigate(nftCharacterDetailsPath)
  }

  return (
    <Box display="flex" justifyContent="flex-start" flexWrap="wrap">
      {!isEmpty(nfts) ? (
        nfts?.map((item) => {
          return (
            <Box
              key={item.id}
              width={`calc(100% / ${itemsPerRow})`}
              padding="18px"
            >
              <NftCard
                key={item.id}
                metdaDataUrl={item.url}
                attributes={item.metadata.attributes}
                name={item.metadata.name}
                description={item.metadata.description}
                imageUrl={item.metadata.image.replace(
                  'ipfs://',
                  'https://ipfs.io/ipfs/'
                )}
                onCardClick={handleNavigateToNftCharacterDetails(item.id)}
              />
            </Box>
          )
        })
      ) : (
        <Box w="50%" p={{ base: '22px 20px', md: '22px 20px' }}>
          <Text variant="h6">No NFTs to show</Text>
        </Box>
      )}
    </Box>
  )
}
