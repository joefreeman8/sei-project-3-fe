import React from 'react'
import { isOwner } from '../../lib/auth'
import { deleteChat, deleteMessage } from '../../lib/api'
import { useParams } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'

function MessageCard({ singleMessage, allMessages }) {
  const currentUserId = JSON.parse(localStorage.getItem('userId'))
  const [isSender, setIsSender] = React.useState(false)
  const chatId = useParams()
  const navigate = useNavigate()

  React.useEffect(() => {
    if (singleMessage.sender === currentUserId) {
      setIsSender(true)
    }
  }, [currentUserId, singleMessage.sender])

  console.log('all', allMessages)

  const handleDelete = async () => {
    if (window.confirm('Do you want to delete this message?')) {
      try {
        await deleteMessage(chatId.chatId, singleMessage._id)
        if (allMessages.length === 0) {
          console.log(chatId.chatId)
          await deleteChat(chatId.chatId)
          navigate('/chats')
        } else (
          window.location.reload()
        )
      } catch (err) {
        console.log(err)
      }
    }
  }


  return (
    <div>
      <div className={isSender ? 'senderBubble' : 'receiverBubble'}>
        <p className={isSender ? 'sender' : 'receiver'}>
          
          {singleMessage.text}
          {isOwner(singleMessage.sender) && <button onClick={handleDelete}>X</button>}
        </p> 
      </div>
    </div>
  )
}

export default MessageCard