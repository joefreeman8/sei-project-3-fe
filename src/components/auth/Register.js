import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { registerUser } from '../../lib/api'

const initialState = {
  name: '',
  email: '',
  password: '',
  passwordConfirmation: '',
}

function Register() {
  const [formData, setFormData] = React.useState(initialState)
  const navigate = useNavigate()

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      await registerUser(formData)
      navigate('/login')
    } catch (err) {
      console.log(err)
    }
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Name</label>
        <input
          placeholder="Name"
          name="name"
          id="name"
          onChange={handleChange}
        />
        <label htmlFor="email">Email</label>
        <input
          type="email"
          placeholder="Email Address"
          name="email"
          id="email"
          onChange={handleChange}
        />
        <label htmlFor="password">Password</label>
        <input
          type="password"
          placeholder="Password"
          name="password"
          id="password"
          onChange={handleChange}
        />
        <label htmlFor="passwordConfirmation">Password Confirmation</label>
        <input
          type="password"
          placeholder="Password Confirmation"
          name="passwordConfirmation"
          id="passwordConfirmation"
          onChange={handleChange}
        />
        <button type="submit">
          Find me a mate!
        </button>
      </form>
      <p>Already signed up? <Link to="/login">Log In</Link></p>
    </div>

  )

}

export default Register