//import { isOwner } from '../../lib/auth'

function MessageCard({ chatId, messageId }) {
  return (
    <div className="card">
      <div className="media">
        <div className="media-content">
          <div className="card-body">
            {/* <p>
              <strong>{profile.name}</strong>
              <br />
              {content}
            </p> */}
            {/* {isOwner(profile._id) &&
              <button className="button" onClick={handleDelete}>X</button>} */}
          </div>
        </div>
      </div>
    </div>
  )
}

export default MessageCard