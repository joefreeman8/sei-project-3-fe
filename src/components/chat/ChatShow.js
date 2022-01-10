import React from 'react'
import { useParams } from 'react-router'

import { getSingleChat } from '../../lib/api'
import { createSingleMessage } from '../../lib/api'
import MessageCard from './MessageCard'


function ChatShow() {
  const { chatId } = useParams()

  const [allMessages, setAllMessages] = React.useState([])
  const [message, setMessage] = React.useState('')
  const [receiverId, setReceiverId] = React.useState('')
  const currentUserId = JSON.parse(localStorage.getItem('userId'))



  React.useEffect(() => {
    const getData = async () => {
      try {
        const { data } = await getSingleChat(chatId)
        // console.log('data', data)
        setAllMessages(data.messages)
        // console.log(data.userOne === currentUserId, data.userTwo === currentUserId)
        if (data.userOne === currentUserId) {
          setReceiverId(data.userTwo)
        } else {
          setReceiverId(data.userOne)
        }
      } catch (err) {
        console.log(err)
      }
    }
    getData()
  }, [chatId, currentUserId])
  // console.log('receiver', receiverId)


  const handleChange = (e) => {
    setMessage(e.target.value)
  }
  
  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      const res = await createSingleMessage(chatId, { text: message, sender: currentUserId, receiver: receiverId })
      setAllMessages(res.data.messages)
      setMessage('')
    } catch (err) {
      console.log(err)
    }
  }
  // console.log('all messages', allMessages)
  return (
    <div>
      <div>
        {allMessages && allMessages.map(singleMessage => {
          return <MessageCard key={singleMessage._id} singleMessage={singleMessage} />
        }
        )}
      </div>
      <form onSubmit={handleSubmit}>
        <div className="write-message">
          <input  
            type="text"
            name="content" 
            placeholder="Write your message here" 
            onChange={handleChange} 
            value={message} />
        </div>
        <button type="submit">Send</button>
      </form>
    </div>
  )
}

export default ChatShow