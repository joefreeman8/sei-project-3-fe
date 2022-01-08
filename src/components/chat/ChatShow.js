import React from 'react'
import { useParams } from 'react-router'

// import { Link } from 'react-router-dom'
import { getSingleChat } from '../../lib/api'
import { createSingleMessage } from '../../lib/api'
//import MessageCard from './Message'


function ChatShow() {
  const { chatId } = useParams()

  const [allMessages, setAllMessages] = React.useState([])
  const [message, setMessage] = React.useState('')

  const fetchChat = React.useCallback(() => {
    const getData = async () => {
      try {
        const { data } = await getSingleChat(chatId)
        console.log(data)
        console.log(data.messages)
        console.log(data.messages[0].text)
        setAllMessages(data)
        
      } catch (err) {
        console.log(err)
      }
    }
    getData()
  }, [chatId])

  console.log(allMessages)

  React.useEffect(() => {
    fetchChat()
  }, [chatId, fetchChat])

  const handleChange = (e) => {
    setMessage(e.target.value)
  }
  
  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      await createSingleMessage(chatId, { content: message })
      setMessage('')
      fetchChat()
    } catch (err) {
      console.log(err)
    }
  }

  return (
    <div>
      <p>hello</p>
      <form onSubmit={handleSubmit}>
        <div className="control">
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