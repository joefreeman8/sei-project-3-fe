import { getSingleProfile, getSingleChat } from '../../lib/api'
import React from 'react'
import { CardActionArea } from '@mui/material'

import Box  from '@mui/material/Box'

function ChatCard({ chatId, chatObject }) {


  const [sender, setSender] = React.useState(null)
  const [chat, setChat] = React.useState(null)
  const [userId, setUserId] = React.useState('')
  const currentUserId = JSON.parse(localStorage.getItem('userId'))

  React.useEffect(() => {
    const getData = async () => {
      try {
        const senderData = await getSingleProfile(userId)
        setSender(senderData.data)
        const chatData = await getSingleChat(chatId)
        setChat(chatData.data)
        if (chatObject.userOne !== currentUserId) {
          return setUserId(chatObject.userOne)
        } else {
          return setUserId(chatObject.userTwo)
        }
      } catch (err) {
        console.log(err)
      }
    }
    getData()
  }, [userId, chatId, chatObject.userOne, chatObject.userTwo, currentUserId])

  console.log(chat)

  return (
    <CardActionArea href={`/chat/${chatId}`}>
      <Box minHeight={100} bgcolor={'#F4F7FA'} borderRadius={1} className="message-box purple">
        <h3 className="sender-name">{sender?.name}</h3>
        <p className="sender-message">{chat?.messages[chat.messages.length - 1].text}</p>
      </Box>
    </CardActionArea>
  )
}

export default ChatCard