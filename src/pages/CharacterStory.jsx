import React, { useEffect } from 'react'
import { useNavigate, useParams, generatePath } from 'react-router-dom'
import { APP_PATHS } from 'paths'
import { useCreateNftCharacterStory } from 'shared/queries/nftCharacter'
import { useCreateNftCharacterMutation } from 'shared/mutations/nftCharacter'
import { environment } from 'environments'
import styles from '../styles/home.module.css'
import { Header } from '../components/header'
import { CherecterStory } from '../components/character/character-story'

export const CharacterStory = () => {
  const navigate = useNavigate()
  const params = useParams()
  const { mutate: onCreateNftCharacter } = useCreateNftCharacterMutation()

  const { nftId } = params

  useEffect(() => {
    const auth = localStorage.getItem('AUTH_TOKEN')

    if (!auth) {
      navigate(APP_PATHS.home)
    }
  }, [navigate])

  const { data: story, isLoading } = useCreateNftCharacterStory(nftId)

  const handleCreateCharacter = (id) => () => {
    const characterParams = {
      nftCollectionAddress: environment.NFT_COLLECTION_ADDRESS,
      nftId: id,
      story: story.story,
    }

    onCreateNftCharacter(characterParams, {
      onSuccess: (response) => {
        console.log(response)
        const chatPath = generatePath(APP_PATHS.nftChat, {
          characterId: response.id,
        })

        navigate(chatPath)
      },
    })
  }

  return (
    <>
      <Header hideConnectButton={true} />
      <div className={styles.landing}>
        <div className={styles.hero}>
          <div className={styles.content}>
            <div className={styles.text}>
              <div>
                <CherecterStory
                  story={story?.story}
                  isLoading={isLoading}
                  onConfirmClick={handleCreateCharacter(nftId)}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
