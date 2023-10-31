import axios from 'axios';  // Axios'u içe aktarın
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'

const initialState = {
  products: [],
  loading: false
}

export const getProducts = createAsyncThunk(
  'products',
  async () => {
    const response = await axios.get('https://fakestoreapi.com/products')
    return response.data
  }
)

export const productSlice = createSlice({
  name: 'products',  // Name'i "products" yapın
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getProducts.pending, (state) => {
      state.loading = true;
    })
    builder.addCase(getProducts.fulfilled, (state, action) => {  
      state.loading = false;
      state.products = action.payload;
    })
  }
})

export default productSlice.reducer;