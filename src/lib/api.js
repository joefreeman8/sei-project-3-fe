import axios from 'axios'
// import { getToken } from './auth'

const baseUrl = '/api'

// function headers() {
//   return {
//     headers: { Authorization: `Bearer ${getToken}` },
//   }
// }

// * Profile Requests

export function getAllProfiles() {
  return axios.get(`${baseUrl}/potentialsniffs`)
}



//* Register/Login User

export function registerUser(formData) {
  return axios.post(`${baseUrl}/register`, formData)
}

export function loginUser(formData) {
  return axios.post(`${baseUrl}/login`, formData)
}