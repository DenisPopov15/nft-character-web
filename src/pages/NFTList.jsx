import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { APP_PATHS } from 'paths'
import { Login } from '../components/authentication/login'
import { NftList } from '../components/nft/nft-list'

export const NFTList = () => {
  const navigate = useNavigate()
  const [nfts, setNfts] = useState()

  useEffect(() => {
    const auth = localStorage.getItem('AUTH_TOKEN')

    if (!auth) {
      navigate(APP_PATHS.home)
    }

    const cachedNfts = localStorage.getItem('NFTS')
    setNfts(JSON.parse(cachedNfts))
  }, [navigate])

  return (
    <div>
      <NftList nfts={nfts} />

      {nfts?.map((nft) => {
        return nft.metadata.name
      })}
      <Login />
    </div>
  )
}
