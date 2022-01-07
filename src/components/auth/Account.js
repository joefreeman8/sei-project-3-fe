import { Link } from 'react-router-dom'

function Account() {
  localStorage.getItem('token')

  const currentUserId = JSON.parse(localStorage.getItem('userId'))

  return (
    <div>
      <div>
        <div>          
          <Link to={`/account/${currentUserId}`}>
            <button className="contained">View Profile</button></Link>
        </div>
        <div>         
          <Link to={`/account/${currentUserId}/edit`}>
            <button className="contained">Edit Account</button>
          </Link>          
        </div>
        <div>          
          <Link to={`/account/${currentUserId}`}>
            <button className="contained">Delete Account</button>
          </Link>
        </div>
      </div>
    </div>
  )
}


export default Account