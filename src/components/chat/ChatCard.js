import React from 'react'
import { Link } from 'react-router-dom'

function ChatCard({ name, content, chatId }) {
  <div>
    <Link to={`sniffers/${chatId}`}>
      <div>
        <h6>Salem{name}</h6>
      </div>
      <div>
        <p>Hello hello{content}</p>
      </div>
    </Link>
  </div>
}

export default ChatCard