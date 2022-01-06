import React from 'react'
import { getAllProfiles } from '../../lib/api'
import Grid from '@mui/material/Grid'
import Box from '@mui/material/Box'
import Error from '../common/Error'
import Loading from '../common/Loading'
import ProfileCard from './ProfileCard'
import FilterLabels from './FilterLabels'

function ProfileIndex() {
  const [profiles, setProfiles] = React.useState([])
  const [isError, setIsError] = React.useState(false)
  const isLoading = !profiles && !isError

  React.useEffect(() => {
    const getData = async () => {
      try {
        const { data } = await getAllProfiles()
        setProfiles(data)
      } catch (err) {
        setIsError(true)
      }
    }
    getData()
  })

  return (
    <div>
      <FilterLabels />
      <Box sx={{ mx: 'auto', width: '80%' }}>
        <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
          {isError && <Error />}
          {isLoading && <Loading />}
          {profiles && (
            profiles.map(profile => 
              <Grid item xs={3} key={profile._id}>
                <ProfileCard {...profile} />
              </Grid>
            ))}
        </Grid>
      </Box>
    </div>
  )
}

export default ProfileIndex