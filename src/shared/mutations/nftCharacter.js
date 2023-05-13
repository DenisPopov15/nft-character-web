import { useMutation } from 'react-query'
import { useToast } from '@chakra-ui/react'
import axios from 'shared/api/setup'

export const useCreateNftCharacterMutation = (options) => {
  const toast = useToast()
  return useMutation(async (data) => axios.post('/createNftCharacter', data), {
    onError: (error) => {
      toast({ position: 'top-right', status: 'error', title: error.message })
    },
    ...options,
  })
}

// export const useCreateNftCharacterStoryMutation = (options) => {
//   const toast = useToast()
//   return useMutation(
//     async (data) => axios.post('/createNftCharacterStory', data),
//     {
//       onError: (error) => {
//         toast({ position: 'top-right', status: 'error', title: error.message })
//       },
//       ...options,
//     }
//   )
// }
