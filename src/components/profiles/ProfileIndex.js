import React from 'react'
import { getAllProfiles } from '../../lib/api'
import Grid from '@mui/material/Grid'
import Box from '@mui/material/Box'
import Error from '../common/Error'
import Loading from '../common/Loading'
import ProfileCard from './ProfileCard'
import { Button } from '@mui/material'

function ProfileIndex() {
  const [profiles, setProfiles] = React.useState([])
  const [isError, setIsError] = React.useState(false)
  const isLoading = !profiles && !isError
  const [showFilters, setShowFilters] = React.useState(false)
  
  const toggleFilterShow = () => setShowFilters(!showFilters)

  const [ageMinValue, setAgeMinValue] = React.useState(null)
  const [ageMaxValue, setAgeMaxValue] = React.useState(null)
  const [weightMinValue, setWeightMinValue] = React.useState(null)
  const [weightMaxValue, setWeightMaxValue] = React.useState(null)
  const [heightMinValue, setHeightMinValue] = React.useState(null)
  const [heightMaxValue, setHeightMaxValue] = React.useState(null)
  const [bodyTypeValue, setBodyTypeValue] = React.useState('')
  const [politicalViewValue, setPoliticalViewValue] = React.useState('')
  const [genderValue, setGenderValue] = React.useState('')
  const [sexualOrientationValue, setSexualOrientationValue] = React.useState('')
  const [lookingForValue, setLookingFoValue] = React.useState('')
  const [humanValue, setHumanValue] = React.useState('')
  const [drinkingValue, setDrinkingValue] = React.useState(null)
  const [smokingValue, setSmokingValue] = React.useState(null)
  const [religionValue, setReligionValue] = React.useState('')
  const [houseTrainedValue, setHouseTrainedValue] = React.useState(null)
  const [dietaryRequirementsValue, setDietaryRequirementsValue] = React.useState('')
  const [childrenValue, setChildrenValue] = React.useState('')
  const currentUserId = JSON.parse(localStorage.getItem('userId'))

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
  }, [])

  const handleMinAge = (e) => {
    setAgeMinValue(e.target.value)
  }

  const handleMaxAge = (e) => {
    setAgeMaxValue(e.target.value)
  }

  const handleMinWeight = (e) => {
    setWeightMinValue(e.target.value)
  }

  const handleMaxWeight = (e) => {
    setWeightMaxValue(e.target.value)
  }

  const handleMinHeight = (e) => {
    setHeightMinValue(e.target.value)
  }

  const handleMaxHeight = (e) => {
    setHeightMaxValue(e.target.value)
  }

  const handleBodyType = (e) => {
    setBodyTypeValue(e.target.value)
  }

  const handlePoliticalView = (e) => {
    setPoliticalViewValue(e.target.value)
  }

  const handleGender = (e) => {
    setGenderValue(e.target.value)
  }

  const handleSexualOrientation = (e) => {
    setSexualOrientationValue(e.target.value)
  }

  const handleLookingFor = (e) => {
    setLookingFoValue(e.target.value)
  }

  const handleHuman = (e) => {
    setHumanValue(e.target.value)
  }

  const handleDrinking = (e) => {
    setDrinkingValue(e.target.value)
  }

  const handleSmoking = (e) => {
    setSmokingValue(e.target.value)
  }

  const handleReligion = (e) => {
    setReligionValue(e.target.value)
  }

  const handleHouseTrained = (e) => {
    setHouseTrainedValue(e.target.value)
  }

  const handleDietaryRequirements = (e) => {
    setDietaryRequirementsValue(e.target.value)
  }

  const handleChildren = (e) => {
    setChildrenValue(e.target.value)
  }

  const filterProfiles = (profiles) => {
    return profiles.filter(profile => {
      return (
        profile._id !== currentUserId) &&
        (profile.age >= ageMinValue || ageMinValue === null) &&
        (profile.age <= ageMaxValue || ageMaxValue === null) &&
        (profile.weight >= weightMinValue || weightMinValue === null) &&
        (profile.weight <= weightMaxValue || weightMaxValue === null) &&
        (profile.height >= heightMinValue || heightMinValue === null) &&
        (profile.height <= heightMaxValue || heightMaxValue === null) &&
        (profile.bodyType?.includes(bodyTypeValue) || bodyTypeValue === '') &&
        (profile.politicalView?.includes(politicalViewValue) || politicalViewValue === '') &&
        (profile.gender?.includes(genderValue) || genderValue === '') &&
        (profile.sexualOrientation?.includes(sexualOrientationValue) || sexualOrientationValue === '') &&
        (profile.lookingFor?.includes(lookingForValue) || lookingForValue === '') &&
        (profile.human?.includes(humanValue) || humanValue === '') &&
        (String(profile.drinking)?.includes(drinkingValue) || drinkingValue === null) &&
        (String(profile.smoking)?.includes(smokingValue) || smokingValue === null) &&
        (profile.religion?.includes(religionValue) || religionValue === '') &&
        (String(profile.houseTrained)?.includes(houseTrainedValue) || houseTrainedValue === null) &&
        (profile.dietaryRequirements?.includes(dietaryRequirementsValue) || dietaryRequirementsValue === '') &&
        (profile.children?.includes(childrenValue) || childrenValue === '')
    })
  }

  const resetFilters = () => {
    setAgeMinValue(null)
    setAgeMaxValue(null)
    setWeightMinValue(null)
    setWeightMaxValue(null)
    setHeightMinValue(null)
    setHeightMaxValue(null)
    setBodyTypeValue('')
    setPoliticalViewValue('')
    setGenderValue('')
    setSexualOrientationValue('')
    setLookingFoValue('')
    setHumanValue('')
    setDrinkingValue(null)
    setSmokingValue(null)
    setReligionValue('')
    setHouseTrainedValue(null)
    setDietaryRequirementsValue('')
    setChildrenValue('')
    setShowFilters(false)
  }

  return (
    <div>
      <Button size="large" onClick={toggleFilterShow} sx={{ ml: 12, p: 1, mt: 1, mb: 1 }} id='purple-button'>Filter Sniffers</Button>
      {showFilters && 
            <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', flexWrap: 'wrap', color: '#1D056D', ml: 12, mr: 12, height: 340, mb: 2, backgroundColor: 'white', borderRadius: 1, p: 1, alignContent: 'center' }}>
              <Button id='purple-button' size="medium" onClick={resetFilters} sx={{ m: 2 }}>Reset Filters</Button>
              <input
                placeholder='Minimum Age'
                type="number"
                onChange={handleMinAge}
                className='gray margin-push'
              />
              <input
                placeholder='Maximum Age'
                type="number"
                onChange={handleMaxAge}
                className='gray margin-push'
              />
              <input
                placeholder='Minimum Weight'
                type="number"
                onChange={handleMinWeight}
                className='gray margin-push'
              />
              <input
                placeholder='Maximum Weight'
                type="number"
                onChange={handleMaxWeight}
                className='gray margin-push'
              />
              <input
                placeholder='Minimum Height'
                type="number"
                onChange={handleMinHeight}
                className='gray margin-push'
              />
              <input
                placeholder='Maximum Height'
                type="number"
                onChange={handleMaxHeight}
                className='gray margin-push'
              />
              <select className='gray margin-push' onChange={handleBodyType}>
                <option value="">Body Type</option>
                <option>Toned</option>
                <option>Average</option>
                <option>Large</option>
                <option>Muscular</option>
                <option>Slim</option>
                <option>Stocky</option>
              </select>
              <select className='gray margin-push' onChange={handlePoliticalView}>
                <option value="">Political View</option>
                <option>Liberal</option>
                <option>Moderate</option>
                <option>Conservative</option>
                <option>Other</option>
                <option>Prefer Not to Say</option>
              </select>
              <select className='gray margin-push' onChange={handleGender}>
                <option value="">Gender</option>
                <option>Male</option>
                <option>Female</option>
                <option>Non-Binary</option>
                <option>Other</option>
                <option>Prefer Not to Say</option>
              </select>
              <select className='gray margin-push' onChange={handleSexualOrientation}>
                <option value="">Sexual Orientation</option>
                <option>Gay</option>
                <option>Straight</option>
                <option>Bisexual</option>
                <option>Lesbian</option>
                <option>Allosexual</option>
                <option>Androsexual</option>
                <option>Asexual</option>
                <option>Autosexual</option>
                <option>Bicurious</option>
                <option>Demisexual</option>
                <option>Fluid</option>
                <option>Graysexual</option>
                <option>Gynesexual</option>
                <option>Monosexual</option>
                <option>Omnisexual</option>
                <option>Pansexual</option>
                <option>Polysexual</option>
                <option>Queer</option>
                <option>Questioning</option>
                <option>Skoliosexual</option>
                <option>Spectrasexual</option>
                <option>Not Listed</option>
              </select>
              <select className='gray margin-push' onChange={handleLookingFor}>
                <option value="">Looking For</option>
                <option>Chat</option>
                <option>Dates</option>
                <option>Friends</option>
                <option>Networking</option>
                <option>Relationship</option>
                <option>Right Now</option>
              </select>
              <select className='gray margin-push' onChange={handleHuman}>
                <option value="">Human</option>
                <option>Have Human</option>
                <option>Want Human</option>
                <option>Don&apos;t Want Human</option>
              </select>
              <select className='gray margin-push' onChange={handleDrinking}>
                <option value={null}>Drinking</option>
                <option value={true}>Yes</option>
                <option value={false}>No</option>
              </select>
              <select className='gray margin-push' onChange={handleSmoking}>
                <option value={null}>Smoking</option>
                <option value={true}>Yes</option>
                <option value={false}>No</option>
              </select>
              <select className='gray margin-push' onChange={handleReligion}>
                <option value="">Religion</option>
                <option>Buddhist</option>
                <option>Catholic</option>
                <option>Christian</option>
                <option>Hindu</option>
                <option>Jewish</option>
                <option>Muslim</option>
                <option>Spiritual</option>
                <option>Agnostic</option>
                <option>Atheist</option>
                <option>Other</option>
                <option>Prefer Not to Say</option>
              </select>
              <select className='gray margin-push' onChange={handleHouseTrained}>
                <option value={null}>House Trained</option>
                <option value={true}>Yes</option>
                <option value={false}>No</option>
              </select>
              <select className='gray margin-push' onChange={handleDietaryRequirements}>
                <option value="">Dietary Requirement</option>
                <option>Vegetarian</option>
                <option>Vegan</option>
                <option>Gluten Free</option>
                <option>Dairy Free</option>
                <option>Pescatarian</option>
                <option>Paleo</option>
                <option>Keto</option>
                <option>Kosher</option>
                <option>Halal</option>
              </select>
              <select className='gray margin-push' onChange={handleChildren}>
                <option value="">Children</option>
                <option>Have Children</option>
                <option>Want Children</option>
                <option>Don&apos;t Want Children</option>
              </select>
            </Box>
      }

      <Box sx={{ mx: 'auto', width: '80%' }}>
        <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
          {isError && <Error />}
          {isLoading && <Loading />}
          {profiles && (
            filterProfiles(profiles).map(profile => 
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