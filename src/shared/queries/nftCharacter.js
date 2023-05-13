import { useQuery } from 'react-query'
import { useToast } from '@chakra-ui/react'
// import { useNavigate } from 'react-router-dom'
import axios from 'shared/api/setup'
import { environment } from 'environments'
import { QueriesKeysEnum } from './queries-keys-enum'

export const useNftCharactersList = () => {
  const toast = useToast()
  return useQuery(
    [QueriesKeysEnum.nftCharacters, {}],
    () => axios.get(`/indexMyNftCharacters`, {}),
    {
      retry: false,
      onError: (error) => {
        toast({ position: 'top-right', status: 'error', title: error.message })
      },
    }
  )
}

export const useBuildCharacterteristics = (nftId) => {
  const toast = useToast()
  return useQuery(
    [QueriesKeysEnum.characteristics, nftId],
    () =>
      axios.get('/buildNftCharacterCharacteristics', {
        params: {
          nftCollectionAddress: environment.NFT_COLLECTION_ADDRESS,
          nftId,
        },
      }),
    {
      enabled: !!nftId,
      retry: false,
      onError: (error) => {
        toast({ position: 'top-right', status: 'error', title: error.message })
      },
    }
  )
}
