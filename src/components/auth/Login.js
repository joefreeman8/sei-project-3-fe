import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { loginUser } from '../../lib/api'
import { setToken } from '../../lib/auth'
import { getAllProfiles } from '../../lib/api'

import Card from '@mui/material/Card'
import Button from '@mui/material/Button'
import Box from '@mui/material/Box'
import TextField from '@mui/material/TextField'

const initialState = {
  email: '',
  password: '',
}

function Login() {
  const navigate = useNavigate()
  const [formData, setFormData] = React.useState(initialState)
  const [isError, setIsError] = React.useState(false)
  const [profiles, setProfiles] = React.useState([])
  const [email, setEmail] = React.useState('')

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

  const handleEmailChange = (e) => {
    setEmail(e.target.value)
  }

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const twoCalls = (e) => {
    handleChange(e)
    handleEmailChange(e)
  }

  const handleSubmit = async (e) => {
    e.preventDefault()

    try {
      const res = await loginUser(formData)
      console.log(res.data.token)
      setToken(res.data.token)
      profiles.filter(profile => {
        if (profile.email === email) {
          {localStorage.setItem('userId', JSON.stringify(profile._id))}
        } else return
      })
      navigate('/potentialsniffs')
    } catch (err) {
      setIsError(true)
    }
  }

  return (
    <div>
      <Card sx={{ width: '50%', p: 5, mx: 'auto', mt: 10, display: 'flex' }}>

        <form onSubmit={handleSubmit} className="login-form">
          <div>
            <p className="go-login-signup"> No account?
              <Link to="/register" id="login-register"> Register here</Link>
            </p>
          </div>
          <div className="credentials">
            <label className="login-title" htmlFor="email" >
            Email
            </label>
            <Box
              component="form"
              sx={{
                '& > :not(style)': { m: 1, width: '25ch' },
              }}
            >
              <TextField
                type="email"
                placeholder="Email Address"
                name="email"
                id="email"
                onChange={twoCalls}
              />
            </Box>
          </div>
          <div>
            <label className="login-title" htmlFor="password">
            Password
            </label>
            <Box
              component="form"
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
          {isError && (
            <p>Password or Email were incorrect.</p>
          )}
          <Button id="register-login-button" type="submit">
            Log Me In!
          </Button>
        </form>
      </Card>
    </div>
  )
}

export default Login