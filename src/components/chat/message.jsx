import React from 'react'

export const Message = ({
  // userInfo
  type,
  text,
  createdAt,
}) => {
  return (
    <div className={type == 'human' ? 'msg my-msg' : 'msg room-msg'}>
      {text}
      <span className="time-sent">{createdAt}</span>
    </div>
  )
}
