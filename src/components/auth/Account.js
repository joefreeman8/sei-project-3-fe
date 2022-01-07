import { Link } from 'react-router-dom'

function Account(userId) {

function Account() {
  localStorage.getItem('token')

  const currentUserId = JSON.parse(localStorage.getItem('userId'))

  return (
    <div>
      <div>
        <div>
          <button className="contained">
            <Link to={`/account/${currentUserId}`}>View Profile</Link></button>
        </div>
        <div>
          <button className="contained">
            <Link to={`/account/${userId}/edit`}>
              Edit Account
            </Link>
          </button>
        </div>
        <div>
          <button className="contained">
            <Link to={`/account/${userId}`}>
              Delete Account
            </Link>
          </button>
        </div>
      </div>
    </div>
  )
}


export default Account