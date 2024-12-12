import axios from 'axios'

// Create an axios instance with base URL and headers
const api = axios.create({
  baseURL: 'http://localhost:3001/api/v1',
  headers: {
    'Content-Type': 'application/json',
  },
})

// Function to log in a user
export const loginUser = async (email, password) => {
  try {
    // Send POST request for user login
    const response = await api.post('/user/login', { email, password })
    return response.data
  } catch (error) {
    throw error.response.data
  }
}

// Function to get user information
export const getUserInfo = async (token) => {
  try {
    // Send POST request to fetch user profile with an empty request body
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

// Function to update user name
export const updateUserNameAPI = async (token, profileData) => {
  try {
    const response = await api.put('/user/profile', profileData, {
      headers: { Authorization: `Bearer ${token}` }, // Authorization token
    })
    return response.data
  } catch (error) {
    throw error.response.data
  }
}

// Additional function to fetch user accounts data

export const getUserAccounts = async (token, userId) => {
  try {
    const response = await axios.get(
      'https://raw.githubusercontent.com/ssidikov/Argent-Bank/refs/heads/master/frontend/src/data/accounts.json'
    )
    // Filter data to find accounts for the given user ID
    const accountsData = response.data.filter((user) => user.userId === userId)
    // Check if accounts are found for the given user ID
    if (accountsData.length === 0) throw new Error('Accounts not found for the given user ID')
    return accountsData[0].accounts
  } catch (error) {
    console.error('Error fetching accounts:', error)
    throw error.response?.data || error.message
  }
}
