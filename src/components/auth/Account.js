import { Link } from 'react-router-dom'


function Account() {


  //* Required - When user is logged in:
  //* They have a View Profile page.
  //* They can edit this profile (seperate button)
  //* They can delete this profile (seperate button could be included in the edit?)


  return (
    <div>
      <div>
        <div>
          <Link to='/account/:userId'>View Profile</Link>
        </div>
        <div>
          <Link to='/account/:userId/edit'>Edit Profile</Link>
        </div>
        <div>
          <Link to='/account/:userId/'>Delete Profile</Link>
        </div>
      </div>
    </div>
  )
}


export default Account