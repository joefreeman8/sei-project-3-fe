import React from 'react'
import { editProfile, getSingleProfile } from '../../lib/api'
import { useNavigate, useParams } from 'react-router-dom'
import Error from '../common/Error'
import Alert from '@mui/material/Alert'
import Stack from '@mui/material/Stack'
import axios from 'axios'

const initialState = {
  name: '',
  picture: '',
  elevatorPitch: '',
  age: '',
  height: '',
  weight: '',
  bodyType: '',
}

function ProfileEdit() {
  const { userId } = useParams()
  const navigate = useNavigate()
  const [formData, setFormData] = React.useState(initialState)
  const [formErrors, setFormErrors] = React.useState(initialState)
  const [isError, setIsError] = React.useState(false)


  React.useEffect(() => {
    const getData = async () => {
      try {
        const res = await getSingleProfile(userId)
        setFormData(res.data)
      } catch (err) {
        setIsError(true)
      }
    }
    getData()
  }, [userId])

  const handleChange = e => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
    setFormErrors({ ...formErrors, [e.target.name]: '' })
  }

  const handleSubmit = async e => {
    e.preventDefault()

    try {
      await editProfile(userId, formData)
      navigate(`/account/${userId}/edit`)
    } catch (err) {
      setFormErrors(err.response.data.errors)
    }
  }

  const handleImageUpload = async (e) => {
    console.log(e.target.files)
    const data = new FormData() 
    data.append('file', e.target.files[0])
    data.append('upload_preset', process.env.REACT_APP_CLOUDINARY_UPLOAD_PRESET)
    const res = await axios.post(process.env.REACT_APP_CLOUDINARY_URL, data)
    console.log(res)
  }

  return (
    <section className="section">
      <div className="container">
        <div>
          {isError ?
            <Error />
            :
            <form className="" onSubmit={handleSubmit}>
              <div>
                <label htmlFor="name" className="label">
                  Name
                </label>
                <div>
                  <input
                    className={`input ${formErrors.name ? 'error' : ''}`}
                    placeholder="Name"
                    name="name"
                    id="name"
                    onChange={handleChange}
                    value={formData.name}
                  />
                </div>
                {formErrors.name && (
                  <Stack sx={{ width: '100%' }} spacing={2}>
                    <Alert variant="outlined" severity="error">{formErrors.name}</Alert>
                  </Stack>
                )}
              </div>
              <div>
                <label htmlFor="picture" className="label">
                  Profile Picture
                </label>
                <div>
                  <input
                    className={`input ${formErrors.picture ? 'error' : ''}`}
                    type="file"
                    accept="image/png, image/jpeg"
                    name="picture"
                    id="picture"
                    onChange={handleImageUpload}
                    value={formData.picture}
                  />
                </div>
                {formErrors.picture && (
                  <Stack sx={{ width: '100%' }} spacing={2}>
                    <Alert variant="outlined" severity="error">{formErrors.picture}</Alert>
                  </Stack>
                )}
              </div>
              <div>
                <label htmlFor="elevatorPitch" className="label">
                  Elevator Pitch
                </label>
                <div>
                  <input
                    className={`input ${formErrors.elevatorPitch ? 'error' : ''}`}
                    placeholder="Elevator Pitch"
                    name="elevatorPitch"
                    id="elevatorPitch"
                    onChange={handleChange}
                    value={formData.elevatorPitch}
                  />
                </div>
                {formErrors.elevatorPitch && (
                  <Stack sx={{ width: '100%' }} spacing={2}>
                    <Alert variant="outlined" severity="error">{formErrors.elevatorPitch}</Alert>
                  </Stack>
                )}
              </div>
              <div>
                <label htmlFor="age" className="label">
                  Age
                </label>
                <div>
                  <input
                    className={`input ${formErrors.age ? 'error' : ''}`}
                    type="number"
                    placeholder="Age"
                    name="age"
                    id="age"
                    onChange={handleChange}
                    value={formData.age}
                  />
                </div>
                {formErrors.age && (
                  <Stack sx={{ width: '100%' }} spacing={2}>
                    <Alert variant="outlined" severity="error">{formErrors.age}</Alert>
                  </Stack>
                )}
              </div>
              <div>
                <label htmlFor="height" className="label">
                  Height (cm)
                </label>
                <div>
                  <input
                    className={`input ${formErrors.height ? 'error' : ''}`}
                    type="number"
                    placeholder="Height in cm"
                    name="height"
                    id="height"
                    onChange={handleChange}
                    value={formData.height}
                  />
                </div>
                {formErrors.height && (
                  <Stack sx={{ width: '100%' }} spacing={2}>
                    <Alert variant="outlined" severity="error">{formErrors.height}</Alert>
                  </Stack>
                )}
              </div>
              <div>
                <label htmlFor="weight" className="label">
                  Weight (kg)
                </label>
                <div>
                  <input
                    className={`input ${formErrors.weight ? 'error' : ''}`}
                    type="number"
                    placeholder="Weight in kg"
                    name="weight"
                    id="weight"
                    onChange={handleChange}
                    value={formData.weight}
                  />
                </div>
                {formErrors.weight && (
                  <Stack sx={{ width: '100%' }} spacing={2}>
                    <Alert variant="outlined" severity="error">{formErrors.weight}</Alert>
                  </Stack>
                )}
              </div>
              <div>
                <label htmlFor="bodyType" className="label">
                  Body Type
                </label>
                <div>
                  <input
                    className={`input ${formErrors.bodyType ? 'error' : ''}`}
                    placeholder="Body Type"
                    name="bodyType"
                    id="bodyType"
                    onChange={handleChange}
                    value={formData.bodyType}
                  />
                </div>
                {formErrors.bodyType && (
                  <Stack sx={{ width: '100%' }} spacing={2}>
                    <Alert variant="outlined" severity="error">{formErrors.bodyType}</Alert>
                  </Stack>
                )}
              </div>
            </form>
          }
        </div>
      </div>
    </section>
  )

}


export default ProfileEdit