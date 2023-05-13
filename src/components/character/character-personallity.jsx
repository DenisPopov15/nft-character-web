import React from 'react'
import { Box, Text, Button } from '@chakra-ui/react'

export const CherecterPersonallity = ({
  characteristics,
  // isLoading,
  onConfirmClick,
}) => (
  <>
    <Box>
      <Text color="black" variant="h3">
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
