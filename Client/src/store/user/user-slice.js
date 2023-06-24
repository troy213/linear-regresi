import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { toast } from 'react-toastify'
import axios from '../../api/axios'

export const register = createAsyncThunk('users/register', async (arg) => {
  const { username, password } = arg
  const response = await axios.post(`/api/register`, {
    username,
    password,
  })

  return response
})

export const login = createAsyncThunk('users/login', async (arg) => {
  const { username, password } = arg
  const response = await axios.post(
    `/api/login`,
    {
      username,
      password,
    },
    {
      headers: { 'Content-Type': 'application/json' },
      withCredentials: true,
    }
  )

  return response
})

const userSlice = createSlice({
  name: 'user',
  initialState: {
    data: null,
    isLoading: false,
    isError: false,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(register.pending, (state) => {
      state.isLoading = true
    })
    builder.addCase(register.fulfilled, (state) => {
      state.isLoading = false

      toast.success('Register success')
    })
    builder.addCase(register.rejected, (state, action) => {
      state.isLoading = false
      state.isError = action.error

      toast.error('Something went wrong')
    })
    builder.addCase(login.pending, (state) => {
      state.isLoading = true
    })
    builder.addCase(login.fulfilled, (state, action) => {
      state.isLoading = false
      state.data = action.payload.results

      toast.success('Login success')
    })
    builder.addCase(login.rejected, (state, action) => {
      state.isLoading = false
      state.isError = action.error

      toast.error('Username or Password is wrong')
    })
  },
})

export default userSlice.reducer
