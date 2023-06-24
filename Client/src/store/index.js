import { configureStore } from '@reduxjs/toolkit'
import mainSlice from './main/main-slice'
import userSlice from './user/user-slice'

const store = configureStore({
  reducer: {
    main: mainSlice,
    user: userSlice,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
})

export default store
