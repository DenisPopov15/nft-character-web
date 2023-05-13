import React, { useEffect } from 'react'
import { useNavigate, useParams, generatePath } from 'react-router-dom'
import { APP_PATHS } from 'paths'
import { useCreateNftCharacterStory } from 'shared/queries/nftCharacter'

import { Login } from '../components/authentication/login'
import { CherecterStory } from '../components/character/character-story'

export const CharacterStory = () => {
  const navigate = useNavigate()
  const params = useParams()

  const { nftId } = params

  useEffect(() => {
    const auth = localStorage.getItem('AUTH_TOKEN')

    if (!auth) {
      navigate(APP_PATHS.home)
    }
  }, [navigate])

  const { data: story, isLoading } = useCreateNftCharacterStory(nftId)
  const handleNavigateToNftCharacterStory = (id) => () => {
    const chatPath = generatePath(APP_PATHS.nftChat, {
      nftId: id,
    })
    navigate(chatPath)
  }

  return (
    <div>
      <CherecterStory
        story={story?.story}
        isLoading={isLoading}
        onConfirmClick={handleNavigateToNftCharacterStory(nftId)}
      />
      <Login />
    </div>
  )
}
