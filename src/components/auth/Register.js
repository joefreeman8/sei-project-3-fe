import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { registerUser } from '../../lib/api'
import axios from 'axios'
import { setToken } from '../../lib/auth'
import { loginUser, getAllProfiles } from '../../lib/api'


import Box from '@mui/material/Box'
import TextField from '@mui/material/TextField'
import MenuItem from '@mui/material/MenuItem'
import FormControl from '@mui/material/FormControl'
import Select from '@mui/material/Select'
import Card from '@mui/material/Card'
import Button from '@mui/material/Button'



const initialState = {
  name: '',
  email: '',
  password: '',
  passwordConfirmation: '',
  animalType: '',
  lookingFor: '',
  age: '',
  elevatorPitch: '',
  picture: '',
}

const loginInitialState = {
  email: '',
  password: '',
}

function Register() {
  const [formData, setFormData] = React.useState(initialState)
  const [loginFormData, setLoginFormData] = React.useState(loginInitialState)
  const navigate = useNavigate()

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
    setLoginFormData({ ...loginFormData, [e.target.name]: e.target.value })
    console.log(loginFormData)
  }

  const handleSubmit = async (e) => {
    console.log('pre-register', formData)
    e.preventDefault()
    try {
      await registerUser(formData)
      const allProfiles = await getAllProfiles()
      const res = await loginUser(loginFormData)
      setToken(res.data.token)
      const userId = allProfiles.data.find(profile => {
        if (profile.email === formData.email) {
          console.log(profile._id)
          return profile
        } else return
      })._id
      console.log(userId)
      localStorage.setItem('userId', JSON.stringify(userId))
      navigate(`/account/${userId}/edit`)
    } catch (err) {
      console.log(err)
    }
  }

  const handleImageUpload = async (e) => {
    const data = new FormData()
    data.append('file', e.target.files[0])
    data.append('upload_preset', process.env.REACT_APP_CLOUDINARY_UPLOAD_PRESET)
    const res = await axios.post(process.env.REACT_APP_CLOUDINARY_URL, data)
    setFormData({ ...formData, picture: res.data.url })
    return
  }

  return (
    <div className="register-card">
      <Card sx={{ width: '50%', p: 10, pt: 5, pb: 5, mx: 'auto', mt: 10, display: 'flex' }}>
        <form onSubmit={handleSubmit} className="register-form">
          <div>
            <p className="go-login-signup">Already signed up?
              <Link to="/login" id="login-register"> Log In</Link>
            </p>
          </div>
          <div className="credentials">
            <label htmlFor="name" className="register-title">Name</label>
            <Box
              sx={{
                '& > :not(style)': { m: 1, width: '25ch' },
              }}
            >
              <TextField
                placeholder="Name"
                name="name"
                id="name"
                onChange={handleChange}
              />
            </Box>
          </div>
          <div>
            <label htmlFor="email" className="register-title">Email</label>
            <Box
              sx={{
                '& > :not(style)': { m: 1, width: '25ch' },
              }}
            >
              <TextField
                type="email"
                placeholder="Email Address"
                name="email"
                id="email"
                onChange={handleChange}
              />
            </Box>
          </div>
          <div>
            <label htmlFor="password" className="register-title">Password</label>
            <Box
              sx={{
                '& > :not(style)': { m: 1, width: '25ch' },
              }}
            >
              <TextField
                type="password"
                placeholder="Password"
                name="password"
                id="password"
                onChange={handleChange}
              />
            </Box>
          </div>
          <div>
            <label htmlFor="passwordConfirmation" className="register-title">Password Confirmation</label>
            <Box
              sx={{
                '& > :not(style)': { m: 1, width: '25ch' },
              }}
            >
              <TextField
                type="password"
                placeholder="Password Confirmation"
                name="passwordConfirmation"
                id="passwordConfirmation"
                onChange={handleChange}
              />
            </Box>
          </div>
          <div>
            <label htmlFor="animalType" className="register-title">What animal are you?</label>
            <Box
              sx={{
                '& > :not(style)': { m: 1, width: '25ch' },
              }}
            >
              <TextField
                placeholder="Goat, Dragon, dandeLion?"
                name="animalType"
                id="animalType"
                onChange={handleChange}
              />
            </Box>
          </div>
          <div>
            <label htmlFor="lookingFor" className="register-title">
              Looking For
            </label>
            <FormControl fullWidth>
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
          <div>
            <label htmlFor="age" className="register-title">Age</label>
            <Box
              sx={{
                '& > :not(style)': { m: 1, width: '25ch' },
              }}
            >
              <TextField
                type="number"
                placeholder="Age"
                name="age"
                id="age"
                onChange={handleChange}
              />
            </Box>
          </div>
          <div>
            <label htmlFor="elevatorPitch" className="register-title">Elevator Pitch</label>
            <Box
              sx={{
                '& .MuiTextField-root': { m: 1, width: '25ch' },
              }}>
              <TextField
                placeholder="Your best one liner"
                name="elevatorPitch"
                id="elevatorPitch"
                onChange={handleChange}
              />
            </Box>
          </div>
          <div>
            <label htmlFor="picture" className="register-title">Add a photo</label>
            <input
              type="file"
              accept="image/png, image/jpeg"
              name="picture"
              id="picture"
              onChange={handleImageUpload}
            />
            <img
              src={formData.picture}
              className="edit-picture"
              alt="Upload Image"
              id="picture"
            />
          </div>
          <Button className="login" id="register-login-button" type="submit">
            Find me a mate!
          </Button>
        </form>
      </Card>
    </div>
  )
}

export default Register