import axios from 'axios'

const api = axios.create({
  baseURL: 'http://localhost:3001/api/v1',
  headers: {
    'Content-Type': 'application/json',
  },
})

export const loginUser = async (email, password) => {
  try {
    const response = await api.post('/user/login', { email, password })
    return response.data
  } catch (error) {
    throw error.response.data
  }
}

export const getUserInfo = async (token) => {
  try {
    const response = await api.post(
      '/user/profile',
      {},
      {
        headers: { Authorization: `Bearer ${token}` },
      }
    )
    return response.data
  } catch (error) {
    throw error.response.data
  }
}

export const updateUserNameAPI = async (token, profileData) => {
  try {
    const response = await api.put('/user/profile', profileData, {
      headers: { Authorization: `Bearer ${token}` },
    })
    return response.data
  } catch (error) {
    throw error.response.data
  }
}
