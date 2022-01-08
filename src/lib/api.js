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

export function getSingleProfile(userId) {
  return axios.get(`${baseUrl}/potentialsniffs/${userId}`, headers())
}



//* USER Requests 

export function editUserProfile(userId, formData) {
  return axios.put(`${baseUrl}/account/${userId}`, formData, headers())
}

export function deleteUserProfile(userId) {
  return axios.delete(`${baseUrl}/account/${userId}`, headers())
}


//* Register/Login User

export function registerUser(formData) {
  return axios.post(`${baseUrl}/register`, formData)
}

export function loginUser(formData) {
  return axios.post(`${baseUrl}/login`, formData)
}


//* Chat

export function getAllChats() {
  return axios.get(`${baseUrl}/chat`, headers())
}

export function getSingleChat(chatId) {
  return axios.get(`${baseUrl}/chat/${chatId}`, headers())
}