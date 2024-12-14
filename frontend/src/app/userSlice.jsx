import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { loginUser, getUserInfo, updateUserNameAPI } from '../api/api'

/**
 * Async action for logging in a user.
 * Handles API calls and sets token in localStorage.
 */
export const login = createAsyncThunk(
  'user/login',
  async ({ email, password }, { rejectWithValue }) => {
    try {
      const response = await loginUser(email, password)
      const { token, user } = response.body
      localStorage.setItem('token', token)
      return { user, token }
    } catch (error) {
      return rejectWithValue(error.message)
    }
  }
)

/**
 * Async action for fetching user profile data.
 * Retrieves user information based on the current token.
 */
export const fetchUserProfile = createAsyncThunk(
  'user/fetchProfile',
  async (_, { rejectWithValue, getState }) => {
    try {
      const { token } = getState().user
      const userData = await getUserInfo(token)
      return userData
    } catch (error) {
      return rejectWithValue(error)
    }
  }
)

/**
 * Async action for updating the user's name.
 * Sends a PUT request to update the user profile.
 */
export const updateUserName = createAsyncThunk(
  'user/updateName',
  async (profileData, { rejectWithValue, getState }) => {
    try {
      const { token } = getState().user
      const updatedData = await updateUserNameAPI(token, profileData)
      return updatedData
    } catch (error) {
      return rejectWithValue(error)
    }
  }
)

// Initial state for user slice
const initialState = {
  user: null,
  token: localStorage.getItem('token') || null,
  loading: false,
  error: null,
}

// Slice for user-related actions and reducers
const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    /**
     * Reducer for logging out a user.
     * Clears user data and token from both state and localStorage.
     */
    logout: (state) => {
      state.user = null
      state.token = null
      state.loading = false
      state.error = null
      localStorage.removeItem('token')
    },
  },
  extraReducers: (builder) => {
    builder
      // Login handlers
      .addCase(login.pending, (state) => {
        state.loading = true
        state.error = null
      })
      .addCase(login.fulfilled, (state, { payload }) => {
        state.user = payload.user
        state.token = payload.token
        state.loading = false
      })
      .addCase(login.rejected, (state, { payload }) => {
        state.error = payload
        state.loading = false
      })

      // Fetch user profile handlers
      .addCase(fetchUserProfile.pending, (state) => {
        state.loading = true
        state.error = null
      })
      .addCase(fetchUserProfile.fulfilled, (state, { payload }) => {
        state.user = payload
        state.loading = false
      })
      .addCase(fetchUserProfile.rejected, (state, { payload }) => {
        state.error = payload
        state.loading = false
      })

      // Update username handlers
      .addCase(updateUserName.pending, (state) => {
        state.loading = true
        state.error = null
      })
      .addCase(updateUserName.fulfilled, (state, { payload }) => {
        if (state.user) {
          state.user.body = { ...state.user.body, ...payload.body }
        }
        state.loading = false
      })
      .addCase(updateUserName.rejected, (state, { payload }) => {
        state.error = payload
        state.loading = false
      })
  },
})

// Export actions and reducer
export const { logout } = userSlice.actions
export default userSlice.reducer
