<<<<<<< HEAD
import { Link } from 'react-router-dom'


function Account(userId) {
=======
import axios from 'axios'

function Account() {
  localStorage.getItem('token')

  console.log(localStorage.getItem('token'))
>>>>>>> development

  return (
    <div>
      <div>
        <div>
          <button className="contained">
            <Link to={`/account/${userId}`}>
              View Account
            </Link>
          </button>
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