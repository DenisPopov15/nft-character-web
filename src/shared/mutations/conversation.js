import { useMutation } from 'react-query'
import { useToast } from '@chakra-ui/react'

import axios from '../api/setup'

export const useCreateConversationMutation = (options) => {
  const toast = useToast()
  return useMutation(async (data) => axios.post('/createConversation', data), {
    onError: (error) => {
      toast({ position: 'top-right', status: 'error', title: error.message })
    },
    ...options,
  })
}

export const useDeleteMyConversationsMutation = (options) => {
  const toast = useToast()
  return useMutation(
    async (nftCharacterId) =>
      axios.delete(`/deleteMyConversations?nftCharacterId=${nftCharacterId}`),
    {
      onError: (error) => {
        toast({ position: 'top-right', status: 'error', title: error.message })
      },
      ...options,
    }
  )
}
