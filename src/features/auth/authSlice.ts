import { createSlice, PayloadAction } from '@reduxjs/toolkit'

interface AuthState {
  isAuthenticated: boolean
  user: {
    username: string | null
    name: string | null
  } | null
  token: string | null
}

const initialState: AuthState = {
  isAuthenticated: false,
  user: null,
  token: null
}

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    login: (state, action: PayloadAction<{ username: string; name: string; token: string }>) => {
      state.isAuthenticated = true
      state.user = {
        username: action.payload.username,
        name: action.payload.name
      }
      state.token = action.payload.token
    },
    logout: (state) => {
      state.isAuthenticated = false
      state.user = null
      state.token = null
    }
  }
})

export const { login, logout } = authSlice.actions
export default authSlice.reducer 