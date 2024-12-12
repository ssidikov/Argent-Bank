// api.jsx
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

export const getUserAccounts = async (token, userId) => {
  try {
    const response = await axios.get(
      'https://raw.githubusercontent.com/ssidikov/Argent-Bank/refs/heads/master/frontend/src/data/accounts.json'
    )
    const accountsData = response.data.filter((user) => user.userId === userId)
    if (accountsData.length === 0) throw new Error('Accounts not found for the given user ID')
    return accountsData[0].accounts
  } catch (error) {
    console.error('Error fetching accounts:', error)
    throw error.response?.data || error.message
  }
}
