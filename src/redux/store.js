import { configureStore } from '@reduxjs/toolkit'
import productSlice from './productSlice'
import generelSlice, { generalSlice } from './generelSlice'
import cartSlice from './cartSlice'

export const store = configureStore({
  reducer: {
    products:productSlice,
    generel:generelSlice,
    cart:cartSlice,
  },
})