import { Link } from 'react-router-dom'

<<<<<<< HEAD
=======
function Account(userId) {

>>>>>>> development
function Account() {
  localStorage.getItem('token')

  const currentUserId = JSON.parse(localStorage.getItem('userId'))
<<<<<<< HEAD

=======
>>>>>>> development

  return (
    <div>
      <div>
        <div>
          <button className="contained">
<<<<<<< HEAD
            <Link to={`/account/${currentUserId}`}>
              View Account
            </Link>
          </button>
=======
            <Link to={`/account/${currentUserId}`}>View Profile</Link></button>
>>>>>>> development
        </div>
        <div>
          <button className="contained">
            <Link to={`/account/${currentUserId}/edit`}>
              Edit Account
            </Link>
          </button>
        </div>
        <div>
          <button className="contained">
            <Link to={`/account/${currentUserId}`}>
              Delete Account
            </Link>
          </button>
        </div>
      </div>
    </div>
  )
}


export default Account