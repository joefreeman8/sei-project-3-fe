import React from 'react'
import ChatCard from './ChatCard'
import { getAllChats } from '../../lib/api'

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
    <section>
      <div>
        <h1>Hello</h1>
      </div>
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
    </section>
  )
}


export default ChatIndex
