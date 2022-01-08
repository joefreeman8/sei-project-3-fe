import React from 'react'
import ChatCard from './ChatCard'
import { getAllChats } from '../../lib/api'
//import Container from '@mui/material/Container'


//import Avatar from '@material-ui/core/Avatar'
import { Row, Item } from '@mui-treasury/components/flex'
//import { useDynamicAvatarStyles } from '@mui-treasury/styles/avatar/dynamic'
//import Button from '@material-ui/core/Button'


function ChatIndex() {

  const [chats, setChats] = React.useState([])



  React.useEffect(() => {
    const getChatData = async () => {
      try {
        const { data } = await getAllChats()
        console.log(data)
        setChats(data)
      } catch (err) {
        console.log(err)
      }
    }
    getChatData()
  }, [])


  console.log(chats)

  return (
    <Row gap={2} p={2.5}>
      <Row wrap grow gap={0.5} minWidth={0}>
        <Item grow minWidth={0}>
          <div>
            {chats?.map(chat => (
              <ChatCard 
                key={chat._id}
                senderId={chat.userTwo}
                chatId={chat._id}
              />
            )) 
            }
          </div>
        </Item>
      </Row>
    </Row>
  )
}


export default ChatIndex
