import React from 'react'

import { useCreateConversationMutation } from 'shared/mutations/conversation'

import { useState } from 'react'

export const WriteMessage = ({ nftCharacterId, addMessage }) => {
  const [writeMessageData, setWriteMessageData] = useState({ message: '' })
  const { mutate: onCreateConversation } = useCreateConversationMutation()

  const sendMessage = (e) => {
    if ((e.keyCode == 13 || e.which == 13) && !e.ctrlKey) {
      if (writeMessageData.message.length > 0) {
        console.log('message', writeMessageData.message)

        const conversationParams = {
          nftCharacterId,
          query: writeMessageData.message,
        }

        const message = {
          key: Date.now(),
          userInfo: 'You',
          type: 'human',
          text: writeMessageData.message,
          createdAt: new Date().toISOString(),
        }

        addMessage(message)

        onCreateConversation(conversationParams, {
          onSuccess: (response) => {
            console.log(response)
            const messageR = {
              key: response.id,
              userInfo: 'Token',
              type: 'character',
              text: response.response,
              createdAt: response.createdAt,
            }
            addMessage(messageR)
          },
        })
      }

      setWriteMessageData({ ...writeMessageData, message: '' })
    } else if ((e.keyCode == 13 || e.which == 13) && e.ctrlKey) {
      console.log('CTRL pressed')
      setWriteMessageData({
        ...writeMessageData,
        message: e.target.value + '\n',
      })
    }
  }

  const handleChange = (e) => {
    setWriteMessageData({ ...writeMessageData, message: e.target.value })
  }

  return (
    <textarea
      rows="3"
      className="msg-write-div"
      onChange={handleChange}
      onKeyPress={sendMessage}
      value={writeMessageData.message}
    />
  )
}
