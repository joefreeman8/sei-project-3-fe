import { Link } from 'react-router-dom'


function Account({ currentUserId }) {

  return (
    <div>
      <div>
        <div>
          <button className="contained"><Link to={`/account/${currentUserId}`}>View Profile</Link></button>
        </div>
        <div>
          <button className="contained">Edit Profile</button>
        </div>
        <div>
          <button className="contained">Delete Profile</button>
        </div>
      </div>
    </div>
  )
}


export default Account