import React from 'react'
import Error from '../common/Error'
import Loading from '../common/Loading'
import { useParams } from 'react-router'
import { getSingleProfile } from '../../lib/api'
import Card from '@mui/material/Card'
import CardActions from '@mui/material/CardActions'
import CardContent from '@mui/material/CardContent'
import CardMedia from '@mui/material/CardMedia'
import Button from '@mui/material/Button'
import Typography from '@mui/material/Typography'
import Grid from '@mui/material/Grid'


function ProfileShow() {
  const { userId } = useParams()
  const [profile, setProfile] = React.useState(null)
  const [isError, setIsError] = React.useState(false)
  const isLoading = !profile && !isError

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




  return (
    <Card sx={{ width: '80%', mx: 'auto', display: 'flex' }} >
      {isError && <Error />}
      {isLoading && <Loading />}
      {profile && (
        <>
          <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
            <Grid item xs={3} key={profile._id}>
              <CardMedia
                component="img"
                image={profile.picture}
                alt={profile.name}
                sx={{ width: '100%' }}
              />
            </Grid>
            <Grid item xs={3} key={profile._id}>
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  {profile.age}
                  {profile.height}
                  {profile.weight}
                  {profile.bodyType}
                  {profile.animalType}
                  {profile.politicalView}
                  {profile.gender}
                  {profile.sexualOrientation}
                  {profile.lookingFor}
                  {profile.human}
                  {profile.drinking}
                  {profile.smoking}
                  {profile.religion}
                  {profile.houseTrained}
                  {profile.dietaryRequirements}
                  {profile.children}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {profile.elevatorPitch}
                </Typography>
              </CardContent>
              <CardActions>
                <Button size="small" href='/chat'>Message</Button>
              </CardActions>
            </Grid>
          </Grid>
        </>

      )}
    </Card>
    
  )
}

export default ProfileShow