import React from 'react'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import CardMedia from '@mui/material/CardMedia'
import Typography from '@mui/material/Typography'
import { CardActionArea } from '@mui/material'

function ProfileCard({ _id, name, picture, elevatorPitch, age }) {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardActionArea href={`/potentialsniffs/${_id}`}>
        <CardMedia
          component="img"
          height='140'
          image={picture}
          alt="profile image"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {name}
          </Typography>
          <Typography gutterBottom variant="body1" component="div">
            {age}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {elevatorPitch}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  )
}

export default ProfileCard