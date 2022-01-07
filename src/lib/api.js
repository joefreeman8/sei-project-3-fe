import axios from 'axios'
import { getToken } from './auth'


// const currentUserId = JSON.parse(localStorage.getItem('userId'))
const baseUrl = '/api'

function headers() {
  return {
    headers: { Authorization: `Bearer ${getToken()}` },
  }
}

// * Profile Requests

export function getAllProfiles() {
  return axios.get(`${baseUrl}/potentialsniffs`)
}




//* USER Requests 

export function editUserProfile(currentUserId, formData) {
  return axios.put(`${baseUrl}/account/${currentUserId}`, formData, headers())
}

export function deleteUserProfile(currentUserId) {
  return axios.delete(`${baseUrl}/account/${currentUserId}`, headers())
}


//* Register/Login User

export function registerUser(formData) {
  return axios.post(`${baseUrl}/register`, formData)
}

export function loginUser(formData) {
  return axios.post(`${baseUrl}/login`, formData)
}


//* Chat

export function createMessage(cheeseId, formData) {
  return axios.post(`${baseUrl}/cheeses/${cheeseId}/comments`, formData, headers())
}