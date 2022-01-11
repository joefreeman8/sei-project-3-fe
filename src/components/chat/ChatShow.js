import React from 'react'
import { useParams } from 'react-router'

import { getSingleChat } from '../../lib/api'
import { createSingleMessage } from '../../lib/api'
import MessageCard from './MessageCard'
import Card from '@mui/material/Card'
import Button from '@mui/material/Button'
import TextField from '@mui/material/TextField'




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
  console.log('all messages', allMessages)
  return (
    <div>
      <Card sx={{ width: '50%', mx: 'auto', display: 'flex', flexDirection: 'column', mt: 4, alignItems: 'center' }} >
        <h4 className='purple'>Name of Sender</h4>
        <div className='chat-card'>
          {allMessages && allMessages.map(singleMessage => {
            return <MessageCard allMessages={allMessages} key={singleMessage._id} singleMessage={singleMessage} setAllMessages={setAllMessages}/>
          }
          )}
        </div>
        <form onSubmit={handleSubmit}>
          <div className="write-message">
            <TextField id="outlined-basic" label="Write your message" variant="outlined" onChange={handleChange} value={message} name='content' sx={{ p: 0 }}/>
          </div>
          <Button type="submit" id='purple-button' sx={{ mt: 5, mb: 1 }}>Send</Button>
        </form>
      </Card>
    </div>
  )
}

export default ChatShow