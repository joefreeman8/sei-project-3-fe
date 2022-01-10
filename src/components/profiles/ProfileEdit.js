import React from 'react'
import { editProfile } from '../../lib/api'
import { getSingleProfile } from '../../lib/api'
import { useNavigate } from 'react-router-dom'
import { useParams } from 'react-router'
import Error from '../common/Error'
// import Alert from '@mui/material/Alert'
// import Stack from '@mui/material/Stack'
import axios from 'axios'
import ProfileEditForm from './ProfileEditForm'

const initialState = {
  name: '',
  picture: '',
  elevatorPitch: '',
  age: '',
  height: '',
  weight: '',
  bodyType: '',
  animalType: '',
  politicalView: '',
  gender: '',
  sexualOrientation: '',
  lookingFor: '',
  human: '',
  drinking: false,
  smoking: false,
  religion: '',
  houseTrained: false,
  dietaryRequirements: '',
  children: '',
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
        // console.log(res.data)
        setFormData(res.data)
      } catch (err) {
        console.log(err)
        setIsError(true)
      }
    }
    getData()
  }, [setFormData, userId])

  // console.log(formData)

  const handleChange = e => {
    const value = e.target.type === 'checkbox' ? e.target.checked : e.target.value
    setFormData({ ...formData, [e.target.name]: value })
    setFormErrors({ ...formErrors, [e.target.name]: '' })
  }

  const handleSubmit = async e => {
    e.preventDefault()
    console.log(userId, formData)
    try {
      await editProfile(userId, formData)
      navigate(`/account/${userId}`)
    } catch (err) {
      setFormErrors(err.response.data.errors)
      console.log('crashed')
    }
  }

  const handleImageUpload = async (e) => {
    console.log('clicked')
    const data = new FormData()
    data.append('file', e.target.files[0])
    data.append('upload_preset', process.env.REACT_APP_CLOUDINARY_UPLOAD_PRESET)
    const res = await axios.post(process.env.REACT_APP_CLOUDINARY_URL, data)
    console.log(res)
  }


  return (
    <section className="section"><h1>{formData.name}</h1>
      <div className="container">
        <div>
          {isError && <Error />}
          <ProfileEditForm
            handleSubmit={handleSubmit}
            handleChange={handleChange}
            handleImageUpload={handleImageUpload}
            formData={formData}
            formErrors={formErrors}
          />
        </div>
      </div>
    </section>
  )

}


export default ProfileEdit