import React, { useEffect } from 'react'
import { useNavigate, useParams, generatePath } from 'react-router-dom'

import { APP_PATHS } from 'paths'
import { useBuildCharacterteristics } from 'shared/queries/nftCharacter'
import { CherecterPersonallity } from '../components/character/character-personallity'
import styles from '../styles/home.module.css'
import { Header } from '../components/header'

export const CharacterPersonallity = () => {
  const navigate = useNavigate()
  const params = useParams()

  const { nftId } = params

  useEffect(() => {
    const auth = localStorage.getItem('AUTH_TOKEN')

    if (!auth) {
      navigate(APP_PATHS.home)
    }
  }, [navigate])

  const { data: characteristics, isLoading } = useBuildCharacterteristics(nftId)
  const handleNavigateToNftCharacterStory = (id) => () => {
    const nftCharacterStoryPath = generatePath(APP_PATHS.nftStory, {
      nftId: id,
    })
    navigate(nftCharacterStoryPath)
  }

  return (
    <>
      <Header hideConnectButton={true} />
      <div className={styles.landing}>
        <div className={styles.hero}>
          <div className={styles.content}>
            <div className={styles.text}>
              <div>
                <CherecterPersonallity
                  characteristics={characteristics?.characteristics}
                  isLoading={isLoading}
                  onConfirmClick={handleNavigateToNftCharacterStory(nftId)}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
