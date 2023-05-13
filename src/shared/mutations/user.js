import { useToast } from '@chakra-ui/react'
import { useMutation } from 'react-query'
import axios from '../api/setup'

export const useWalletLoginMutation = (options) => {
  const toast = useToast()
  return useMutation(
    async (data) => axios.post('/createSessionByWallet', data),
    {
      onError: (error) => {
        toast({ position: 'top-right', status: 'error', title: error.message })
      },
      ...options,
    }
  )
}
