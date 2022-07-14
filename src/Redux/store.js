import { configureStore } from '@reduxjs/toolkit'
import itemsSlice  from './listSlice'

export const store = configureStore({
  reducer: {
    items: itemsSlice
  }
})
