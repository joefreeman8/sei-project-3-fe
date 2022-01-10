import React from 'react'
import Error from '../common/Error'
import Loading from '../common/Loading'
import { useParams } from 'react-router'
import { getSingleProfile, getAllChats } from '../../lib/api'
import { useNavigate } from 'react-router-dom'
import { createChat } from '../../lib/api'

import Card from '@mui/material/Card'
import CardActions from '@mui/material/CardActions'
import CardContent from '@mui/material/CardContent'
import CardMedia from '@mui/material/CardMedia'
import Button from '@mui/material/Button'
import Typography from '@mui/material/Typography'
import Grid from '@mui/material/Grid'

const initialState = {
  messages: [{
    text: '',
    sender: '',
    receiver: '',
  }],
  userOne: '',
  userTwo: '',
}

function ProfileShow() {
  const { userId } = useParams()
  const [profile, setProfile] = React.useState(null)
  const [chats, setChats] = React.useState([])
  const [isError, setIsError] = React.useState(false)
  const isLoading = !profile && !isError
  const currentUserId = JSON.parse(localStorage.getItem('userId'))
  const [formData, setFormData] = React.useState(initialState)
  const [isMessaging, setIsMessaging] = React.useState(false)
  const navigate = useNavigate()


  React.useEffect(() => {
    const getData = async () => {
      try {
        const res = await getSingleProfile(userId)
        setProfile(res.data)
      } catch (err) {
        setIsError(true)
      }
    }
    getData()
  }, [userId])

  React.useEffect(() => {
    const getChatData = async () => {
      try {
        const { data } = await getAllChats()
        setChats(data)
      } catch (err) {
        setIsError(true)
      }
    }
    getChatData()
  }, [])


  const filterChats = (chats) => {
    return chats.filter(chat => {
      return chat.userOne === userId || chat.userTwo === userId
    })
  }

  const handleMessageButtonClick = () => {
    console.log(filterChats(chats))
    if (
      filterChats(chats).length > 0
    ) {
      navigate(`/chat/${chats[0]._id}`)
    } else {
      setIsMessaging(true)
    }
  }

  const handleChange = (e) => {
    setFormData({
      ...formData,
      userOne: currentUserId,
      userTwo: userId,
      messages: {
        text: e.target.value,
        sender: currentUserId,
        receiver: userId,
      },
    })
  }


  const createNewChat = async (e) => {
    e.preventDefault()
    try {
      const res = await createChat(formData)
      navigate(`/chat/${res.data._id}`)
    } catch (err) {
      setIsError(true)
    }
  }



  return (
    <Card sx={{ width: '80%', mx: 'auto', display: 'flex' }} >
      {isError && <Error />}
      {isLoading && <Loading />}
      {profile && (
        <>

          <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
            <Grid item xs={4}>
              <CardMedia
                component="img"
                image={profile.picture}
                alt={profile.name}
                sx={{ width: '100%', p: 1 }}
              />
              <Typography variant="h6" color="text.secondary" sx={{ p: 2 }}>
                {profile.elevatorPitch}
              </Typography>
            </Grid>

            <Grid item xs={6}>
              <CardContent>
                <Typography variant ="h5">{profile.name}</Typography>
                <Typography gutterBottom variant="body2" component="div">
                  {profile.age && <div><strong>Age: </strong>{profile.age}</div>}
                  {profile.height && <div><strong>Height: </strong>{profile.height}cm</div>}
                  {profile.weight && <div><strong>Weight: </strong>{profile.weight}kg</div>}
                  {profile.bodyType && <div><strong>Body Type: </strong>{profile.bodyType}</div>}
                  {profile.animalType && <div><strong>Animal Type: </strong>{profile.animalType}</div>}
                  {profile.politicalView && <div><strong>Political View: </strong>{profile.politicalView}</div>}
                  {profile.gender && <div><strong>Gender: </strong>{profile.gender}</div>}
                  {profile.sexualOrientation && <div><strong>Sexual Orientation: </strong>{profile.sexualOrientation}</div>}
                  {profile.lookingFor && <div><strong>Looking For: </strong>{profile.lookingFor}</div>}
                  {profile.human && <div><strong>Human: </strong>{profile.human}</div>}
                  {profile.drinking && <div><strong>Drinking: </strong>{profile.drinking ? 'Yes' : 'No'}</div>}
                  {profile.smoking && <div><strong>Smoking: </strong>{profile.smoking ? 'Yes' : 'No'}</div>}
                  {profile.religion && <div><strong>Religion: </strong>{profile.religion}</div>}
                  {profile.houseTrained && <div><strong>House Trained: </strong>{profile.houseTrained ? 'Yes' : 'No'}</div>}
                  {profile.dietaryRequirements && <div><strong>Dietary Requirements: </strong>{profile.dietaryRequirements}</div>}
                  {profile.children && <div><strong>Children: </strong>{profile.children}</div>}
                </Typography>
              </CardContent>
              <CardActions>
                {currentUserId === userId ? (
                  <Button
                    size="large"
                    href={`/account/${currentUserId}/edit`}>
                    Edit Page
                  </Button>
                ) :
                  (
                    !isMessaging ?
                      <Button
                        size="large"
                        onClick={handleMessageButtonClick}>
                    Message
                      </Button>
                      : <form onSubmit={createNewChat}>
                        <div className="control">
                          <input  
                            type="text"
                            name="content" 
                            placeholder={`Write your first message to ${profile.name}`}
                            onChange={handleChange} />
                        </div>
                        <button type='submit'>Send Message</button>
                      </form>
                  )}
              </CardActions>
            </Grid>

          </Grid>
        </>
      )}
    </Card>
  )
}

export default ProfileShow