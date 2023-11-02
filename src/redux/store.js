import { configureStore } from '@reduxjs/toolkit'
import productSlice from './productSlice'
import generelSlice, { generalSlice } from './generelSlice'

export const store = configureStore({
  reducer: {
    products:productSlice,
    generel:generelSlice,
  },
})