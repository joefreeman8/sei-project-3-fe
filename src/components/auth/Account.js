import { Link, useNavigate } from 'react-router-dom'
import { deleteUserProfile } from '../../lib/api'
import { removeStoredId, removeToken } from '../../lib/auth'

function Account() {
  const navigate = useNavigate()
  localStorage.getItem('token')

  const currentUserId = JSON.parse(localStorage.getItem('userId'))

  const handleDelete = async () => {
    if (window.confirm('Are you sure you want to delete your account?')) {
      try {
        await deleteUserProfile(currentUserId)
        removeToken()
        removeStoredId()
        navigate('/')
      } catch (err) {
        console.log(err)
      }
    }
  }

  return (
    <div>
      <div>
        <div>
          <Link to={`/account/${currentUserId}`}>
            <button className="contained">
              View Profile
            </button>
          </Link>
        </div>
        <div>
          <Link to={`/account/${currentUserId}/edit`}>
            <button className="contained">
              Edit Profile
            </button>
          </Link>
        </div>
        <div>
          <button className="contained" onClick={handleDelete}>
            Delete Account
          </button>
        </div>
      </div>
    </div>
  )
}


export default Account