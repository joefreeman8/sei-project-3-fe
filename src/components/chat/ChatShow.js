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
        setAllMessages(data.messages)
        console.log(data.userOne === currentUserId, data.userTwo === currentUserId)
        if (data.userOne === currentUserId) {
          setReceiverId(data.userOne)
        } else {
          setReceiverId(data.userTwo)
        }
      } catch (err) {
        console.log(err)
      }
    }
    getData()
  }, [chatId, currentUserId])

  console.log(allMessages)

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

  return (
    <div>
      <div>
        {allMessages && allMessages.map(singleMessage => {
          return <MessageCard key={singleMessage._id} singleMessage={singleMessage} />
        }
        )}
      </div>
      <form>
        <div className="write-message" onBlur={handleSubmit}>
          <textarea  
            name="content" 
            placeholder="Write your message here" 
            rows="3"
            onChange={handleChange} 
            value={message} />
        </div>
      </form>
    </div>
  )


}

export default ChatShow