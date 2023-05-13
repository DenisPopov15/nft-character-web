import React, { useCallback } from 'react'
import { useQueryClient } from 'react-query'
import { Button } from '@chakra-ui/react'
import { useNavigate } from 'react-router-dom'

import { connectMetamask } from 'services/metamask/index'
import { signMessage } from 'services/metamask/provider'
import { useWalletLoginMutation } from 'shared/mutations/user'

import { environment } from 'environments'
import { APP_PATHS } from 'paths'

export const Login = () => {
  const queryCache = useQueryClient()
  const navigate = useNavigate()
  const { mutate: onWalletLogin } = useWalletLoginMutation()

  const handleLogout = useCallback(async () => {
    localStorage.removeItem('AUTH_TOKEN')
    localStorage.removeItem('NFTS')
    await queryCache.invalidateQueries()
    navigate(APP_PATHS.home)
  }, [])

  const handleWalletLogIn = async () => {
    let signedMessage
    const message = environment.LOGIN_PAYLOAD
    const expiresAt = Date.now() + 1 * 60 * 1000
    const dataSignObject = { expiresAt, payload: message }
    const dataSign = JSON.stringify(dataSignObject)
    try {
      if (window.ethereum) {
        await connectMetamask(window.ethereum)
        signedMessage = await signMessage(window.ethereum, dataSign)
      } else {
        window.alert('Please install Metamask')
      }
    } catch (e) {
      console.log(e)
    }
    if (signedMessage) {
      signedMessage.nftCollectionAddress = environment.NFT_COLLECTION_ADDRESS
      await onWalletLogin(signedMessage, {
        onSuccess: async ({ token, nfts }) => {
          localStorage.setItem('AUTH_TOKEN', token)
          localStorage.setItem('NFTS', JSON.stringify(nfts))
          await queryCache.refetchQueries()
          navigate(APP_PATHS.nftList)
        },
      })
    }
  }

  return (
    <div>
      {!localStorage.getItem('AUTH_TOKEN') && (
        <Button
          colorScheme="blue"
          width="100%"
          style={{ marginTop: 15 }}
          onClick={handleWalletLogIn}
        >
          Connect Wallet
        </Button>
      )}
      {localStorage.getItem('AUTH_TOKEN') && (
        <Button
          colorScheme="blue"
          width="100%"
          style={{ marginTop: 15 }}
          onClick={handleLogout}
        >
          Logout
        </Button>
      )}
    </div>
  )
}
