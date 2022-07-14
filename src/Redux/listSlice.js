import { createSelector, createSlice } from '@reduxjs/toolkit'
import { v4 as uuid } from 'uuid'
import {
  IconButton,
  Checkbox,
} from '@mui/material';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import { current } from "@reduxjs/toolkit";



const initialState = {
  data: [
    { id: 1, task: 'aaaaaaaaaaaa', deleteIcon: <IconButton><DeleteOutlineIcon /></IconButton>, checkIcon: <Checkbox /> },
    { id: 2, task: 'bbbbbbbbbbbb', deleteIcon: <IconButton><DeleteOutlineIcon /></IconButton>, checkIcon: <Checkbox /> },
    { id: 3, task: 'cccccccccccc', deleteIcon: <IconButton><DeleteOutlineIcon /></IconButton>, checkIcon: <Checkbox /> },
    { id: 4, task: 'dddddddddddd', deleteIcon: <IconButton><DeleteOutlineIcon /></IconButton>, checkIcon: <Checkbox /> },
    { id: 5, task: 'eeeeeeeeeeee', deleteIcon: <IconButton><DeleteOutlineIcon /></IconButton>, checkIcon: <Checkbox /> },
  ],
  search: '',
}

const itemsSlice = createSlice({
  name: 'items',
  initialState,
  reducers: {

    deleteItem: (state, { payload }) => {
      state.data = state.data.filter((item) => item.id !== payload)
    },

    setSelectedItemId: (state, { payload }) => {
      state.selectedProductId = payload
    },

    saveItem: (state, { payload }) => {
      if (!payload.id) {
        payload.id = uuid()
        state.data.push(payload)
        return state
      }
      const itemIndex = state.data.findIndex(
        (item) => item.id === payload.id
      )
      state.data[itemIndex] = payload
    },

    updateSearchTerm: (state, { payload }) => {
      state.search = payload
    },

    printState: (state) => {
      //console.log(state.data.map(item => console.log(item)))
      console.log(current(state))
    }
  },
})

export const {
  deleteItem,
  setSelectedItemId,
  saveItem,
  updateSearchTerm,
  printState
} = itemsSlice.actions

export default itemsSlice.reducer;

/*export const {
  deleteItem,
  setSelectedItemId,
  saveItem,
  updateSearchTerm,
} = itemsSlice.actions
export const itemsReducer = itemsSlice.reducer

export const selectItems = (state) => state.products.data
export const selectSelectedItemId = (state) =>
  state.products.selectedProductId

export const selectSelectedItem = createSelector(
  selectItems,
  selectSelectedItemId,
  (items, selectedItemId) =>
    items.find((item) => item.id === selectedItemId)
)

export const selectSearchTerm = (state) => state.items.search

export const selectFilteredItems = createSelector(
  selectItems,
  selectSearchTerm,
  (items, searchTerm) => {
    return items.filter((item) =>
      item.name.toLowerCase().includes(searchTerm.toLowerCase())
    )
  }
)*/