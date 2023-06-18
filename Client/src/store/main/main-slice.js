import { createSlice } from '@reduxjs/toolkit'

const mainSlice = createSlice({
  name: 'main',
  initialState: {
    data: '',
    processedData: [],
  },
  reducers: {
    setState(state, action) {
      state[action.payload.field] = action.payload.value
    },
    clearForm(state) {
      for (const stateObj in state) {
        state[stateObj] = ''
      }
    },
  },
})

export const mainAction = mainSlice.actions

export default mainSlice.reducer
