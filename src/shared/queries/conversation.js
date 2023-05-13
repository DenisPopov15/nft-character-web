import { useQuery } from 'react-query'
// import { useNavigate } from 'react-router-dom'

import { useToast } from '@chakra-ui/react'

import axios from '../api/setup'
import { QueriesKeysEnum } from './queries-keys-enum'
// import { generatePath, useNavigate } from 'react-router-dom'
// import { APP_PATHS } from 'paths'

export const useCharacterConversationsList = (nftCharacterId) => {
  const toast = useToast()
  // const navigate = useNavigate()
  return useQuery(
    [QueriesKeysEnum.conversations, nftCharacterId],
    () =>
      axios.get('/indexMyConversations', {
        params: { nftCharacterId },
      }),
    {
      enabled: !!nftCharacterId,
      retry: false,
      onError: (error) => {
        // navigate(generatePath(APP_PATHS.conversations, { id }))
        toast({ position: 'top-right', status: 'error', title: error.message })
      },
    }
  )
}
