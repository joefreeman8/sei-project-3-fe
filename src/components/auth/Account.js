import { useNavigate } from 'react-router-dom'
import { deleteProfile } from '../../lib/api'
import { removeStoredId, removeToken } from '../../lib/auth'

import Card from '@mui/material/Card'
import Button from '@mui/material/Button'


function Account() {
  const navigate = useNavigate()
  localStorage.getItem('token')

  const currentUserId = JSON.parse(localStorage.getItem('userId'))

  const handleDelete = async () => {
    if (window.confirm('Are you sure you want to delete your account?')) {
      try {
        await deleteProfile(currentUserId)
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
      <Card sx={{ width: '50%', mx: 'auto', display: 'flex', flexDirection: 'column', p: 10, pt: 5, pb: 5, mt: 10, alignItems: 'center' }} >
        <Button id='purple-button' href={`/account/${currentUserId}`} sx={{ width: '50%', m: 2 }}>
              View Profile
        </Button>
        <Button id='purple-button' href={`/account/${currentUserId}/edit`} sx={{ width: '50%', m: 2 }}>
              Edit Profile
        </Button>
        <Button id='purple-button' onClick={handleDelete} sx={{ width: '50%', m: 2 }}>
            Delete Account
        </Button>
      </Card>
    </div>
  )
}


export default Account