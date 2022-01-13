import React from 'react'
import ChatCard from './ChatCard'
import { getAllChats } from '../../lib/api'
import Card from '@mui/material/Card'
import Box from '@mui/material/Box'

function ChatIndex() {

  const [chats, setChats] = React.useState([])

  React.useEffect(() => {
    const getChatData = async () => {
      try {
        const { data } = await getAllChats()
        setChats(data)
      } catch (err) {
        console.log(err)
      }
    }
    getChatData()
  }, [])


  return (
    <div>
      <Card sx={{ width: '70%', mx: 'auto', display: 'flex', flexDirection: 'column', p: 10, pt: 5, pb: 5, mt: 10, alignItems: 'center' }} >

        <Box  sx={{ p: 2 }}>
          <h3 className='purple'>Message Your Potential Sniffs</h3>
        </Box>
        <div>
        </div>
        <div>
          {chats?.map(chat => (
            <ChatCard 
              key={chat._id}
              chatId={chat._id}
              chatObject={chat}
            />
          )) 
          }
        </div>
      </Card>
    </div>
  )
}


export default ChatIndex
