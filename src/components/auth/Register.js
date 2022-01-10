import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { registerUser } from '../../lib/api'
import axios from 'axios'

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

  const handleImageUpload = async (e) => {
    e.preventDefault()
    console.log(e.target.files)
    const data = new FormData() 
    data.append('file', e.target.files[0])
    data.append('upload_preset', process.env.REACT_APP_CLOUDINARY_UPLOAD_PRESET)
    const res = await axios.post(process.env.REACT_APP_CLOUDINARY_URL, data)
    console.log(res)
  }



  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div className="credentials">
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
        </div>
        <div className="extra-info">
          <label htmlFor="animalType">What animal are you?</label>
          <input
            placeholder="Goat, Dragon, dandeLion?"
            name="animalType"
            id="animalType"
            onChange={handleChange}
          />
          <label htmlFor="lookingFor">Looking for</label>
          <input
            placeholder="Love, Friendship, Belly rubs?"
            name="lookingFor"
            id="lookingFor"
            onChange={handleChange}
          />
          <label htmlFor="age">Age</label>
          <input
            type="number"
            placeholder="Age"
            name="age"
            id="age"
            onChange={handleChange}
          />
          <label htmlFor="elevatorPitch">Elevator Pitch</label>
          <input
            placeholder="Your best one liner"
            name="elevatorPitch"
            id="elevatorPitch"
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="picture">Add a photo</label>
          <input
            type="file"
            accept="image/png, image/jpeg"
            name="picture"
            id="picture"
            onChange={handleImageUpload}
          />
        </div>
        <button type="submit">
          Find me a mate!
        </button>
      </form>
      <p>Already signed up? <Link to="/login">Log In</Link></p>
    </div>

  )

}

export default Register