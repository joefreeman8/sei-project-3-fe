import React from 'react'

function MessageCard({ singleMessage }) {

  const currentUserId = JSON.parse(localStorage.getItem('userId'))
  console.log(singleMessage.sender)
  console.log(currentUserId)

  const [isSender, setIsSender] = React.useState(false)

  React.useEffect(() => {
    
    if (singleMessage.sender === currentUserId) {
      setIsSender(true)
    }
  }, [currentUserId, singleMessage.sender])


  console.log(isSender)

  return (
    <div>
      <div className={isSender ? 'senderBubble' : 'receiverBubble'}>
        <p className={isSender ? 'sender' : 'receiver'}>
          
          {singleMessage.text}

        </p> 
      </div>
    </div>
  )
}

export default MessageCard