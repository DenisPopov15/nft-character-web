import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { APP_PATHS } from 'paths'
import { Login } from '../components/authentication/login'
import { Box, Text, Image } from '@chakra-ui/react'
import styles from '../styles/home.module.css'
import { Header } from '../components/Header'

export const HomePage = () => {
  const navigate = useNavigate()

  useEffect(() => {
    const auth = localStorage.getItem('AUTH_TOKEN')

    if (auth) {
      navigate(APP_PATHS.nftList)
    }
  }, [navigate])

  return (
    <>
      <Header hideConnectButton={true} />
      <div className={styles.landing}>
        <div className={styles.hero}>
          <div className={styles.content}>
            <div className={styles.text}>
              <Text fontSize="4xl" textAlign="left" color="#FFF">
                AI meets NFTs, giving life to your tokens with unique
                personalities.
              </Text>
              <br />
              <Text fontSize="md" textAlign="left" color="#FFF">
                Stay updated, track portfolios, earn badges, and unlock on-chain
                rewards. Experience the future of NFT personalised interaction
                with token-bound and token-gated functionality.
              </Text>
              <br />
              <div className={styles.connectWallet}>
                <Login />
              </div>
            </div>
            <div className={styles.image}>
              <Box>
                <Image src="https://cdn.discordapp.com/attachments/1078428492263329843/1106891079355215882/Group_631646.png" />
              </Box>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
