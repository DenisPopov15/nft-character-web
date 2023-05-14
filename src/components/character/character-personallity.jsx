import React from 'react'
import { Box, Text, Button } from '@chakra-ui/react'

export const CherecterPersonallity = ({
  characteristics,
  // isLoading,
  onConfirmClick,
}) => (
  <>
    <Box>
      <Text color="white" variant="h3" style={{ display: 'block' }}>
        {characteristics}
      </Text>
    </Box>
    <Box>
      <Button
        colorScheme="blue"
        width="100%"
        style={{ marginTop: 15 }}
        onClick={onConfirmClick}
      >
        Next
      </Button>
    </Box>
  </>
)
