import React from 'react'
import { editProfile } from '../../lib/api'
import { getSingleProfile } from '../../lib/api'
import { useNavigate } from 'react-router-dom'
import { useParams } from 'react-router'
import ProfileEditForm from './ProfileEditForm'
import Error from '../common/Error'

import Card from '@mui/material/Card'

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
  console.log(formData)

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



  return (
    <section className="section">
      <div className="container">
        <Card
          sx={{ width: '50%', p: 10, pt: 5, pb: 5, mx: 'auto', mt: 10, display: 'flex' }}
        >
          {isError && <Error />}
          <ProfileEditForm
            handleSubmit={handleSubmit}
            handleChange={handleChange}
            setFormData={setFormData}
            formData={formData}
            formErrors={formErrors}
          />
        </Card>
      </div>
    </section>
  )

}


export default ProfileEdit