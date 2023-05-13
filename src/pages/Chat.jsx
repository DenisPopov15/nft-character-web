import React, { useEffect, useCallback, useState } from 'react'
// import React, { useEffect, useCallback } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { Spinner } from '@chakra-ui/react'
import { APP_PATHS } from 'paths'
import { useCharacterConversationsList } from 'shared/queries/conversation'

import { Login } from '../components/authentication/login'
import { Message } from '../components/chat/message'
import { WriteMessage } from '../components/chat/writeMessage'

export const Chat = () => {
  const navigate = useNavigate()
  const params = useParams()

  const [activeConversations, setActiveConversations] = useState([])
  // const [activeConversations, setActiveConversations] = useState()

  const { characterId } = params
  useEffect(() => {
    const auth = localStorage.getItem('AUTH_TOKEN')

    if (!auth) {
      navigate(APP_PATHS.home)
    }
  }, [navigate])

  const addConversation = useCallback(
    (c) => {
      setActiveConversations((conversations) => [...conversations, c])
    },
    [activeConversations]
  )

  const { data: conversations, isLoading } =
    useCharacterConversationsList(characterId)

  return (
    <div>
      <div>
        {isLoading == true ? (
          <Spinner />
        ) : (
          conversations?.map((conversation) => {
            return (
              <>
                <Message
                  key={`${conversation.id}_q`}
                  userInfo="You"
                  type="human"
                  text={conversation.query}
                  createdAt={conversation.createdAt}
                />
                <div style={{ float: 'left', clear: 'both' }}></div>
                <Message
                  key={`${conversation.id}_r`}
                  userInfo="Token"
                  type="character"
                  text={conversation.response}
                  createdAt={conversation.createdAt}
                />
                <div style={{ float: 'left', clear: 'both' }}></div>
              </>
            )
          })
        )}
        {activeConversations?.map((conversation) => {
          return (
            <>
              <Message
                key={`${conversation.id}_q`}
                userInfo="You"
                type="human"
                text={conversation.query}
                createdAt={conversation.createdAt}
              />
              <div style={{ float: 'left', clear: 'both' }}></div>
              <Message
                key={`${conversation.id}_r`}
                userInfo="Token"
                type="character"
                text={conversation.response}
                createdAt={conversation.createdAt}
              />
              <div style={{ float: 'left', clear: 'both' }}></div>
            </>
          )
        })}
      </div>
      <WriteMessage
        nftCharacterId={characterId}
        addConversation={addConversation}
      />
      <Login />
    </div>
  )
}
