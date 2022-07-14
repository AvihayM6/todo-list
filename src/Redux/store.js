import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit'
import itemsReducer  from './listSlice'



export const store = configureStore({
  reducer: {
    item: itemsReducer
  },
  middleware: getDefaultMiddleware({
    serializableCheck: false
  })
})
