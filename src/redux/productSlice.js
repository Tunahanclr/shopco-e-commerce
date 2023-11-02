import axios from 'axios';  // Axios'u içe aktarın
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'

const initialState = {
  products: [],
  product:{},
  loading: false
}

export const getProducts = createAsyncThunk(
  'products/getProducts',
  async (params) => {
    const response = await axios.get(`https://fakestoreapi.com/products?`);
    return response.data;
  }
);
export const getProductDetail = createAsyncThunk(
    'product',
    async (id) => {
      const response = await axios.get(`https://fakestoreapi.com/products/${id}`)
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
    builder.addCase(getProductDetail.pending, (state) => {
        state.loading = true;
      })
      builder.addCase(getProductDetail.fulfilled, (state, action) => {  
        state.loading = false;
        state.product= action.payload;
      })
  }
})

export default productSlice.reducer;