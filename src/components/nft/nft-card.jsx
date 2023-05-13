import React from 'react'
import { Box, Text, Image } from '@chakra-ui/react'

export const NftCard = ({
  // metdaDataUrl,
  name,
  description,
  // attributes,
  imageUrl,
  onCardClick,
}) => (
  <Box
    bg="gray.22"
    borderRadius="12px"
    onClick={onCardClick}
    cursor={'pointer'}
  >
    <Box>
      <Text color="white" variant="h3">
        {name}
      </Text>
    </Box>
    {/* <Box>
      <Text color="white" variant="h3">
        {description}
      </Text>
</Box> */}
    <Box>
      <Image src={imageUrl} alt={name} />
    </Box>
  </Box>
)
