import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { loginUser, getUserInfo, updateUserNameAPI } from '../api/api'

// Async actions
export const login = createAsyncThunk(
  'user/login',
  async ({ email, password }, { rejectWithValue }) => {
    try {
      const {
        body: { token, user },
      } = await loginUser(email, password)
      localStorage.setItem('token', token)
      return { user, token }
    } catch (error) {
      return rejectWithValue(error)
    }
  }
)

export const fetchUserProfile = createAsyncThunk(
  'user/fetchProfile',
  async (_, { rejectWithValue, getState }) => {
    try {
      const {
        user: { token },
      } = getState()
      const userData = await getUserInfo(token)
      return userData
    } catch (error) {
      return rejectWithValue(error)
    }
  }
)

export const updateUserName = createAsyncThunk(
  'user/updateName',
  async (profileData, { rejectWithValue, getState }) => {
    try {
      const {
        user: { token },
      } = getState()
      const updatedData = await updateUserNameAPI(token, profileData)
      return updatedData
    } catch (error) {
      return rejectWithValue(error)
    }
  }
)

// Initial state
const initialState = {
  user: null,
  token: localStorage.getItem('token') || null,
  loading: false,
  error: null,
}

// User slice
const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
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

// Actions and reducer export
export const { logout } = userSlice.actions
export default userSlice.reducer
