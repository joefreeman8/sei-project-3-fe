import axios from 'axios'

import Checkbox from '@mui/material/Checkbox'
import { deepPurple } from '@mui/material/colors'
import RadioGroup from '@mui/material/RadioGroup'
import FormControlLabel from '@mui/material/FormControlLabel'
import Radio from '@mui/material/Radio'

import Box from '@mui/material/Box'
import TextField from '@mui/material/TextField'
import InputAdornment from '@mui/material/InputAdornment'
// import InputLabel from '@mui/material/InputLabel'
import MenuItem from '@mui/material/MenuItem'
import FormControl from '@mui/material/FormControl'
import Select from '@mui/material/Select'

import Button from '@mui/material/Button'




function ProfileEditPage({ handleSubmit, handleChange, formData, setFormData, formErrors }) {


  const handleImageUpload = async (e) => {
    const data = new FormData()
    data.append('file', e.target.files[0])
    data.append('upload_preset', process.env.REACT_APP_CLOUDINARY_UPLOAD_PRESET)
    try {
      const res = await axios.post(process.env.REACT_APP_CLOUDINARY_URL, data)
      setFormData({ ...formData, picture: res.data.url })
    } catch (err) {
      console.log(err)
    }
  }

  return (
    <form className="" onSubmit={handleSubmit}>
      <h1>Edit Profile</h1>
      <div>
        <label htmlFor="name" className="label">
          <h3>Name</h3>
        </label>
        <Box
          sx={{
            '& > :not(style)': { m: 1, width: '25ch' },
          }}
        >
          <TextField
            // className={`input ${formErrors.name ? 'error' : ''}`}
            placeholder="Name"
            name="name"
            id="name"
            onChange={handleChange}
            value={formData.name}
          />
        </Box>
        {/* {formErrors.name && (
          <Stack sx={{ width: '100%' }} spacing={2}>
            <Alert variant="outlined" severity="error">{formErrors.name}</Alert>
          </Stack>
        )} */}
      </div>
      <div>
        <label htmlFor="picture" className="label">
          <h3>Profile Picture</h3>
        </label>
        <div>
          <img
            src={formData.picture}
            className="edit-picture"
            alt="profile picture"
            id="picture"
          />
          <div>
            <input
              type="file"
              accept="image/png, image/jpeg"
              name="picture"
              id="picture"
              onChange={handleImageUpload}
            />
          </div>
        </div>
      </div>
      <div>
        <label htmlFor="elevatorPitch" className="label">
          <h3>Elevator Pitch</h3>
        </label>
        <Box
          sx={{
            '& .MuiTextField-root': { m: 1, width: '25ch' },
          }}>
          <TextField
            // className={`input ${formErrors.elevatorPitch ? 'error' : ''}`}
            maxLength="140"
            multiline
            minRows={3}
            placeholder="Elevator Pitch"
            name="elevatorPitch"
            id="elevatorPitch"
            onChange={handleChange}
            value={formData.elevatorPitch}
          />
        </Box>
        {/* {formErrors.elevatorPitch && (
          <Stack sx={{ width: '100%' }} spacing={2}>
            <Alert variant="outlined" severity="error">{formErrors.elevatorPitch}</Alert>
          </Stack>
        )} */}
      </div>
      <div>
        <label htmlFor="age" className="label">
          <h3>Age</h3>
        </label>
        <Box
          sx={{
            '& > :not(style)': { m: 1, width: '25ch' },
          }}
        >
          <TextField
            // className={`input ${formErrors.age ? 'error' : ''}`}
            type="number"
            placeholder="Age"
            name="age"
            id="age"
            onChange={handleChange}
            value={formData.age}
          />
        </Box>
        {/* {formErrors.age && (
          <Stack sx={{ width: '100%' }} spacing={2}>
            <Alert variant="outlined" severity="error">{formErrors.age}</Alert>
          </Stack>
        )} */}
      </div>
      <div>
        <label htmlFor="height" className="label">
          <h3>Height (cm)</h3>
        </label>
        <Box
          sx={{
            '& > :not(style)': { m: 1, width: '25ch' },
          }}
        >
          <TextField
            // className={`input ${formErrors.height ? 'error' : ''}`}
            type="number"
            placeholder="Height in cm"
            InputProps={{
              endAdornment: <InputAdornment position="end">cm</InputAdornment>,
            }}
            name="height"
            id="height"
            onChange={handleChange}
            value={formData.height}
          />
        </Box>
      </div>
      <div>
        <label htmlFor="weight" className="label">
          <h3>Weight (kg)</h3>
        </label>
        <Box
          sx={{
            '& > :not(style)': { m: 1, width: '25ch' },
          }}
        >
          <TextField
            className={`input ${formErrors.weight ? 'error' : ''}`}
            variant="outlined"
            type="number"
            placeholder="Weight in kg"
            InputProps={{
              endAdornment: <InputAdornment position="end">kg</InputAdornment>,
            }}
            name="weight"
            id="weight"
            onChange={handleChange}
            value={formData.weight}
          />
        </Box>
      </div>

      <div>
        <label htmlFor="animalType" className="label">
          <h3>Animal Type</h3>
        </label>
        <Box
          sx={{
            '& > :not(style)': { m: 1, width: '25ch' },
          }}
        >
          <TextField
            variant="outlined"
            placeholder="Dog, Goat, Dragon, Axolotl... "
            name="animalType"
            id="animalType"
            onChange={handleChange}
            value={formData.animalType}
          />
        </Box>
      </div>
      <div>
        <label htmlFor="bodyType" className="label">
          <h3>Body Type</h3>
        </label>
        <div>
          <FormControl sx={{ m: 1, width: '50%' }}>
            <Select
              name="bodyType"
              id="bodyType"
              labelId="bodyType"
              onChange={handleChange}
              value={formData.bodyType}>
              <MenuItem value={''}></MenuItem>
              <MenuItem value={'Athletic'}>Athletic</MenuItem>
              <MenuItem value={'Toned'}>Toned</MenuItem>
              <MenuItem value={'Average'}>Average</MenuItem>
              <MenuItem value={'Large'}>Large</MenuItem>
              <MenuItem value={'Muscular'}>Muscular</MenuItem>
              <MenuItem value={'Slim'}>Slim</MenuItem>
              <MenuItem value={'Stocky'}>Stocky</MenuItem>
            </Select>
          </FormControl>
        </div>
      </div>
      <div>
        <label htmlFor="politicalView" className="label">
          <h3>Political View</h3>
        </label>
        <div>
          <FormControl sx={{ m: 1, width: '50%' }}>
            <Select
              name="politicalView"
              id="politicalView"
              labelId="politicalView"
              onChange={handleChange}
              value={formData.politicalView}>
              <MenuItem value={''}></MenuItem>
              <MenuItem value={'Liberal'}>Liberal</MenuItem>
              <MenuItem value={'Moderate'}>Moderate</MenuItem>
              <MenuItem value={'Conservative'}>Conservative</MenuItem>
              <MenuItem value={'Other'}>Other</MenuItem>
              <MenuItem value={'Prefer Not To Say'}>Prefer Not To Say</MenuItem>
            </Select>
          </FormControl>
        </div>
      </div>
      <div>
        <label htmlFor="gender" className="label">
          <h3>Gender</h3>
        </label>
        <div>
          <FormControl sx={{ m: 1, width: '50%' }}>
            <Select
              name="gender"
              id="gender"
              labelId="gender"
              onChange={handleChange}
              value={formData.gender}>
              <MenuItem value={''}></MenuItem>
              <MenuItem value={'Male'}>Male</MenuItem>
              <MenuItem value={'Female'}>Female</MenuItem>
              <MenuItem value={'Non-Binary'}>Non-Binary</MenuItem>
              <MenuItem value={'Other'}>Other</MenuItem>
              <MenuItem value={'Prefer Not To Say'}>Prefer Not To Say</MenuItem>
            </Select>
          </FormControl>
        </div>
      </div>
      <div>
        <label htmlFor="sexualOrientation" className="label">
          <h3>Sexual Orientation</h3>
        </label>
        <div>
          <FormControl sx={{ m: 1, width: '50%' }}>
            <Select
              name="sexualOrientation"
              id="sexualOrientation"
              labelId="sexualOrientation"
              onChange={handleChange}
              value={formData.sexualOrientation}>
              <MenuItem value={''}></MenuItem>
              <MenuItem value={'Gay'}>Gay</MenuItem>
              <MenuItem value={'Straight'}>Straight</MenuItem>
              <MenuItem value={'Bisexual'}>Bisexual</MenuItem>
              <MenuItem value={'Lesbian'}>Lesbian</MenuItem>
              <MenuItem value={'Allosexual'}>Allosexual</MenuItem>
              <MenuItem value={'Asexual'}>Asexual</MenuItem>
              <MenuItem value={'Androsexual'}>Androsexual</MenuItem>
              <MenuItem value={'Autosexual'}>Autosexual</MenuItem>
              <MenuItem value={'Bicurious'}>Bicurious</MenuItem>
              <MenuItem value={'Demisexual'}>Demisexual</MenuItem>
              <MenuItem value={'Fluid'}>Fluid</MenuItem>
              <MenuItem value={'Gynesexual'}>Gynesexual</MenuItem>
              <MenuItem value={'Monosexual'}>Monosexual</MenuItem>
              <MenuItem value={'Omnisexual'}>Omnisexual</MenuItem>
              <MenuItem value={'Pansexual'}>Pansexual</MenuItem>
              <MenuItem value={'Polysexual'}>Polysexual</MenuItem>
              <MenuItem value={'Queer'}>Queer</MenuItem>
              <MenuItem value={'Questioning'}>Questioning</MenuItem>
              <MenuItem value={'Skoliosexual'}>Skoliosexual</MenuItem>
              <MenuItem value={'Spectrasexual'}>Spectrasexual</MenuItem>
              <MenuItem value={'Not Listed'}>Not Listed</MenuItem>
            </Select>
          </FormControl>
        </div>
      </div>
      <div>
        <label htmlFor="lookingFor" className="label">
          <h3>Looking For</h3>
        </label>
        <div>
          <FormControl sx={{ m: 1, width: '50%' }}>
            <Select
              name="lookingFor"
              id="lookingFor"
              labelId="lookingFor"
              onChange={handleChange}
              value={formData.lookingFor}>
              <MenuItem value={''}></MenuItem>
              <MenuItem value={'Chat'}>Chat</MenuItem>
              <MenuItem value={'Dates'}>Dates</MenuItem>
              <MenuItem value={'Friends'}>Friends</MenuItem>
              <MenuItem value={'Networking'}>Networking</MenuItem>
              <MenuItem value={'Relationship'}>Relationship</MenuItem>
              <MenuItem value={'Right Now'}>Right Now</MenuItem>
            </Select>
          </FormControl>
        </div>
      </div>
      <div>
        <label htmlFor="religion" className="label">
          <h3>Religion</h3>
        </label>
        <div>
          <FormControl sx={{ m: 1, width: '50%' }}>
            <Select
              name="religion"
              id="religion"
              labelId="religion"
              onChange={handleChange}
              value={formData.religion}>
              <MenuItem value={''}></MenuItem>
              <MenuItem value={'Buddhist'}>Buddhist</MenuItem>
              <MenuItem value={'Christian'}>Christian</MenuItem>
              <MenuItem value={'Hindu'}>Hindu</MenuItem>
              <MenuItem value={'Jewish'}>Jewish</MenuItem>
              <MenuItem value={'Muslim'}>Muslim</MenuItem>
              <MenuItem value={'Spiritual'}>Spiritual</MenuItem>
              <MenuItem value={'Agnostic'}>Agnostic</MenuItem>
              <MenuItem value={'Atheist'}>Atheist</MenuItem>
              <MenuItem value={'Other'}>Other</MenuItem>
              <MenuItem value={'Prefer Not To Say'}>Prefer Not To Say</MenuItem>
            </Select>
          </FormControl>
        </div>
      </div>
      <div>
        <label htmlFor="dietaryRequirements" className="label">
          <h3>Dietary Requirements</h3>
        </label>
        <div>
          <FormControl sx={{ m: 1, width: '50%' }}>
            <Select
              name="dietaryRequirements"
              id="dietaryRequirements"
              labelId="dietaryRequirements"
              onChange={handleChange}
              value={formData.dietaryRequirements}>
              <MenuItem value={''}></MenuItem>
              <MenuItem value={'Vegetarian'}>Vegetarian</MenuItem>
              <MenuItem value={'Vegan'}>Vegan</MenuItem>
              <MenuItem value={'Gluten Free'}>Gluten Free</MenuItem>
              <MenuItem value={'Dairy Free'}>Dairy Free</MenuItem>
              <MenuItem value={'Pescatarian'}>Pescatarian</MenuItem>
              <MenuItem value={'Paleo'}>Paleo</MenuItem>
              <MenuItem value={'Keto'}>Keto</MenuItem>
              <MenuItem value={'Kosher'}>Kosher</MenuItem>
              <MenuItem value={'Halal'}>Halal</MenuItem>
            </Select>
          </FormControl>
        </div>
      </div>
      <div>
        <label htmlFor="human" className="label">
          <h3>Human Status</h3>
        </label>
        <RadioGroup row aria-label="Human" name="row-radio-buttons-group">
          <FormControlLabel
            label="Have Human"
            control={<Radio
              sx={{
                color: deepPurple[800],
                '&.Mui-checked': {
                  color: deepPurple[600],
                },
              }} />}
            type="radio"
            name="human"
            id="human"
            value="Have Human"
            onChange={handleChange}
            checked={formData.human === 'Have Human'}
          />
          <FormControlLabel
            label="Want Human"
            control={<Radio
              sx={{
                color: deepPurple[800],
                '&.Mui-checked': {
                  color: deepPurple[600],
                },
              }} />}
            type="radio"
            name="human"
            id="human"
            value="Want Human"
            onChange={handleChange}
            checked={formData.human === 'Want Human'}
          />
          <FormControlLabel
            label="Don't Want Human"
            control={<Radio
              sx={{
                color: deepPurple[800],
                '&.Mui-checked': {
                  color: deepPurple[600],
                },
              }} />}
            type="radio"
            name="human"
            id="human"
            value="Dont Want Human"
            onChange={handleChange}
            checked={formData.human === 'Dont Want Human'}
          />
          <FormControlLabel
            label="Prefer Not To Say"
            control={<Radio
              sx={{
                color: deepPurple[800],
                '&.Mui-checked': {
                  color: deepPurple[600],
                },
              }} />}
            type="radio"
            name="human"
            id="human"
            value="Prefer Not To Say"
            onChange={handleChange}
            checked={formData.human === 'Prefer Not To Say'}
          />
        </RadioGroup>
      </div>
      <div>
        <label htmlFor="Children" className="label">
          <h3>Children Status</h3>
        </label>
        <RadioGroup
          row aria-label="Children" name="row-radio-buttons-group">
          <FormControlLabel
            label="Have Children"
            control={<Radio
              sx={{
                color: deepPurple[800],
                '&.Mui-checked': {
                  color: deepPurple[600],
                },
              }} />}
            type="radio"
            name="children"
            id="children"
            value="Have Children"
            onChange={handleChange}
            checked={formData.children === 'Have Children'}
          />
          <FormControlLabel
            label="Want Children"
            control={<Radio
              sx={{
                color: deepPurple[800],
                '&.Mui-checked': {
                  color: deepPurple[600],
                },
              }} />}
            type="radio"
            name="children"
            id="children"
            value="Want Children"
            onChange={handleChange}
            checked={formData.children === 'Want Children'}
          />
          <FormControlLabel
            label="Don't Want Children"
            control={<Radio
              sx={{
                color: deepPurple[800],
                '&.Mui-checked': {
                  color: deepPurple[600],
                },
              }} />}
            type="radio"
            name="children"
            id="children"
            value="Dont Want Children"
            onChange={handleChange}
            checked={formData.children === 'Dont Want Children'}
          />
          <FormControlLabel
            label="Prefer Not To Say"
            control={<Radio
              sx={{
                color: deepPurple[800],
                '&.Mui-checked': {
                  color: deepPurple[600],
                },
              }} />}
            type="radio"
            name="children"
            id="children"
            value="Prefer Not To Say"
            onChange={handleChange}
            checked={formData.children === 'Prefer Not To Say'}
          />
        </RadioGroup>
      </div>
      <div>
        <label><h3>Other</h3>
          <div>
            <label htmlFor="drinking" className="label">
              <Checkbox
                className="checkbox"
                value="checkbox"
                sx={{
                  color: deepPurple[800],
                  '&.Mui-checked': {
                    color: deepPurple[600],
                  },
                }}
                type="checkbox"
                name="drinking"
                id="drinking"
                onChange={handleChange}
                checked={formData.drinking}
              >
              </Checkbox>
              I Like A Drink
            </label>
          </div>
          <div>
            <label htmlFor="smoking" className="label">
              <Checkbox
                className="checkbox"
                value="checkbox"
                sx={{
                  color: deepPurple[800],
                  '&.Mui-checked': {
                    color: deepPurple[600],
                  },
                }}
                type="checkbox"
                name="smoking"
                id="smoking"
                onChange={handleChange}
                checked={formData.smoking}
              >
              </Checkbox>
              I Like A Smoke
            </label>
          </div>
          <div>
            <label htmlFor="houseTrained" className="label">
              <Checkbox
                className="checkbox"
                sx={{
                  color: deepPurple[800],
                  '&.Mui-checked': {
                    color: deepPurple[600],
                  },
                }}
                type="checkbox"
                name="houseTrained"
                id="houseTrained"
                onChange={handleChange}
                checked={formData.houseTrained}
              >
              </Checkbox>
              I Know Where To Pee
            </label>
          </div>
        </label>
      </div>
      <div>
        <Button
          size="large"
          type="submit"
          id='purple-button'
          sx={{ m: 1 }}
        >
          Update
        </Button>
      </div>
    </form>
  )
}

export default ProfileEditPage