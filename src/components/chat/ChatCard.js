// import React from 'react'
// import { Link } from 'react-router-dom'

import { getSingleProfile, getSingleChat } from '../../lib/api'
import React from 'react'
import { Link } from 'react-router-dom'

import Box  from '@mui/material/Box'
//import Divider from '@material-ui/core/Divider'

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
    <Link to={`/chat/${chatId}`}>
      <Box minHeight={100} bgcolor={'#F4F7FA'} borderRadius={1} className="message-box">
        <h3 className="sender-name">{sender?.name}</h3>
        {/* <Divider variant="middle"/> */}
        <p className="sender-message">{chat?.messages[chat.messages.length - 1].text}</p>
      </Box>
    </Link>
  )
}

export default ChatCard