import React from 'react'
import { isOwner } from '../../lib/auth'
import { deleteChat, deleteMessage, getSingleChat } from '../../lib/api'
import { useParams } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
import DeleteIcon from '@mui/icons-material/Delete'
import { IconButton } from '@mui/material'



function MessageCard({ singleMessage, setAllMessages }) {
  const currentUserId = JSON.parse(localStorage.getItem('userId'))
  const [isSender, setIsSender] = React.useState(false)
  const { chatId } = useParams()
  const navigate = useNavigate()

  React.useEffect(() => {
    if (singleMessage.sender === currentUserId) {
      setIsSender(true)
    }
  }, [currentUserId, singleMessage.sender])

  const handleDelete = async () => {
    if (window.confirm('Do you want to delete this message?')) {
      try {
        await deleteMessage(chatId, singleMessage._id)
        const { data } = await getSingleChat(chatId)
        if (data.messages.length === 0) {
          await deleteChat(chatId)
          navigate('/chat')
        } else {
          setAllMessages(data.messages)
        }
      } catch (err) {
        console.log(err)
      }
    }
  }


  return (
    <div className={isSender ? 'right' : 'left'}>
      <div className={isSender ? 'senderBubble' : 'receiverBubble'}>
        <p className={isSender ? 'sender' : 'receiver'}>
          
          {singleMessage.text}
          {isOwner(singleMessage.sender) && <IconButton onClick={handleDelete} aria-label="delete" size="small" color="secondary"><DeleteIcon fontSize="inherit" /></IconButton>}
        </p> 
      </div>
    </div>
  )
}

export default MessageCard