import { configureStore } from '@reduxjs/toolkit'
import itemsReducer  from './listSlice'

export const store = configureStore({
  reducer: {
    item: itemsReducer
  }
})
