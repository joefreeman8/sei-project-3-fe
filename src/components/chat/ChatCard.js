// import React from 'react'
// import { Link } from 'react-router-dom'

import { getSingleProfile, getSingleChat } from '../../lib/api'
import React from 'react'

function ChatCard({ senderId, chatId }) {


  const [sender, setSender] = React.useState(null)
  const [chat, setChat] = React.useState(null)

  React.useEffect(() => {
    const getData = async () => {
      try {
        const senderData = await getSingleProfile(senderId)
        console.log(senderId, senderData)
        setSender(senderData.data)

        const chatData = await getSingleChat(chatId)
        console.log(chatId, chatData)
        setChat(chatData.data)

      } catch (err) {
        console.log(err)
      }
    }
    getData()
  }, [senderId, chatId])

  console.log(chat)

  return (
    <div>
      <h1>{sender?.name}</h1>
      <p>{chat?.messages[chat.messages.length - 1].text}</p>
    </div>
  )
}

export default ChatCard