import React from 'react'

import { useCreateConversationMutation } from 'shared/mutations/conversation'

import { useState } from 'react'

export const WriteMessage = ({ nftCharacterId, addConversation }) => {
  const [writeMessageData, setWriteMessageData] = useState({ message: '' })
  const { mutate: onCreateConversation } = useCreateConversationMutation()

  const sendMessage = (e) => {
    if ((e.keyCode == 13 || e.which == 13) && !e.ctrlKey) {
      if (writeMessageData.message.length > 0) {
        console.log('writeMessageData.message', writeMessageData.message)

        const conversationParams = {
          nftCharacterId,
          query: writeMessageData.message,
        }

        onCreateConversation(conversationParams, {
          onSuccess: (response) => {
            addConversation(response)
            console.log(response)
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
