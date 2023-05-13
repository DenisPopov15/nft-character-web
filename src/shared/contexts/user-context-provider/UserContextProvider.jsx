import React, { useCallback, useEffect, useReducer } from 'react'
import { useQueryClient } from 'react-query'
// import { Button } from '@chakra-ui/react'

// import { connectMetamask } from 'services/metamask/index'
// import { signMessage } from 'services/metamask/provider'
// import { useWalletLoginMutation } from 'shared/mutations/user'

// import { environment } from 'environments'

const UserStateContext = React.createContext({
  user: {},
})

const UserDispatchContext = React.createContext({
  updateUserContext: () => void 0,
  onLogout: () => new Promise(() => void 0),
  onOpenLoginModal: () => void 0,
})

const reducer = (state, action) => {
  switch (action.type) {
    case 'update':
      return { ...state, ...action.payload }
    case 'logout':
      return action.payload
    default: {
      return state
    }
  }
}

export const UserContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, { user: {} })
  const queryCache = useQueryClient()
  // const { mutate: onWalletLogin } = useWalletLoginMutation()
  const user = null

  const handleDispatch = useCallback((action) => dispatch(action), [])

  const handleLogout = useCallback(async () => {
    localStorage.removeItem('AUTH_TOKEN')
    localStorage.removeItem('NFTS')
    await queryCache.invalidateQueries()

    handleDispatch({ type: 'logout', payload: { user: {} } })
  }, [handleDispatch])

  // const handleWalletLogIn = async () => {
  //   let signedMessage
  //   const message = environment.LOGIN_PAYLOAD
  //   const expiresAt = Date.now() + 1 * 60 * 1000
  //   const dataSignObject = { expiresAt, payload: message }
  //   const dataSign = JSON.stringify(dataSignObject)
  //   try {
  //     if (window.ethereum) {
  //       await connectMetamask(window.ethereum)
  //       signedMessage = await signMessage(window.ethereum, dataSign)
  //     } else {
  //       window.alert('Please install Metamask')
  //     }
  //   } catch (e) {
  //     console.log(e)
  //   }
  //   if (signedMessage) {
  //     signedMessage.nftCollectionAddress = environment.NFT_COLLECTION_ADDRESS
  //     await onWalletLogin(signedMessage, {
  //       onSuccess: async ({ token, nfts }) => {
  //         localStorage.setItem('AUTH_TOKEN', token)
  //         console.log('nfts!!', nfts)
  //         localStorage.setItem('NFTS', nfts)
  //         await queryCache.refetchQueries()
  //       },
  //     })
  //   }
  // }
  useEffect(() => {
    if (user) {
      handleDispatch({
        type: 'update',
        payload: {
          user,
        },
      })
    }
  }, [user])
  useEffect(() => {
    if (!localStorage.getItem('AUTH_TOKEN')) {
      handleLogout()
    }
  }, [])
  return (
    <UserStateContext.Provider value={state}>
      <UserDispatchContext.Provider
        value={{
          updateUserContext: handleDispatch,
          onLogout: handleLogout,
        }}
      >
        {children}
      </UserDispatchContext.Provider>
    </UserStateContext.Provider>
  )
}
export const useUserContextState = () => {
  const context = React.useContext(UserStateContext)
  if (context === undefined) {
    throw new Error('useUserState must be used within a UserContextProvider')
  }
  return context
}
export const useUserContextStateDispatch = () => {
  const context = React.useContext(UserDispatchContext)
  if (context === undefined) {
    throw new Error('useUserDispatch must be used within a UserContextProvider')
  }
  return context
}
