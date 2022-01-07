import axios from 'axios'
import React from 'react'


function ChatIndex() {

  const [chats, setChats] = React.useState(null)
  const [chatIsNotFound, setChatIsNotFound] = React.useState(false)


  React.useEffect(() => {
    const getChatData = async () => {
      try {
        const response = await axios.get('/api/brands')
        setBrands(response.data)
      } catch (err) {
        setChatIsNotFound(true)
      }
    }
    getChatData()
  }, [])


  return (
    <div>
      {chats ?
        <ChatCard 
          key={chat._id}
          name={profile.name}
        />
        :
        <p>...loading</p>
      }
    </div>
  )
}


export default ChatIndex()
