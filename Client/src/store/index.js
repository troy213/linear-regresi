import { configureStore } from '@reduxjs/toolkit'
import mainSlice from './main/main-slice'

const store = configureStore({
  reducer: {
    main: mainSlice,
  },
})

export default store
