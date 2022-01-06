import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { loginUser } from '../../lib/api'
import { setToken } from '../../lib/auth'

function Login() {
  const navigate = useNavigate()
  const [formData, setFormData] = React.useState({
    email: '',
    password: '',
  })
  const [isError, setIsError] = React.useState(false)

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }
  const handleSubmit = async (e) => {
    e.preventDefault()

    try {
      const res = await loginUser(formData)
      console.log(res.data.token)
      setToken(res.data.token)
      navigate('/potentialsniffs')
    } catch (err) {
      setIsError(true)
    }
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div>
          <label className="label" htmlFor="email">
            Email
          </label>
          <input
            type="email"
            placeholder="Email Address"
            name="email"
            id="email"
            onChange={handleChange}
          />
        </div>
        <div>
          <label className="label" htmlFor="password">
            Password
          </label>
          <input
            type="password"
            placeholder="Password"
            name="password"
            id="password"
            onChange={handleChange}
          />
        </div>
        {isError && (
          <p>Password or Email were incorrect.</p>
        )}
        <button type="submit">
          Log Me In!
        </button>
      </form>
      <p>No account? <Link to="/register">Register here</Link></p>
    </div>
  )
}

export default Login