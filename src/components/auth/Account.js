import axios from 'axios'

function Account() {
  localStorage.getItem('token')

  console.log(localStorage.getItem('token'))

  return (
    <div>
      <div>
        <div>
          <button className="contained">View Profile</button>
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