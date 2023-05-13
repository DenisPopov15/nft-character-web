import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { APP_PATHS } from 'paths'
// import { Login } from '../components/authentication/login'
import { NftList } from '../components/nft/nft-list'
import styles from '../styles/home.module.css'
import { Header } from '../components/header'

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
    <>
      <Header />
      <div className={styles.landing}>
        <div className={styles.page}>
          <div>
            <NftList nfts={nfts} itemsPerRow={3} />
          </div>
        </div>
      </div>
    </>
  )
}
