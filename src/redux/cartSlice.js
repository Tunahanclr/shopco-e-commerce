import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  carts: [], // Sepet nesnelerini içeren bir dizi
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      // addToCart işlevi: Sepete ürün eklemek için kullanılır
      const { id, name, price, quantity,image } = action.payload;
      const existingProduct = state.carts.find((product) => product.id === id);

      if (existingProduct) {
        existingProduct.quantity += quantity; // Ürün adetini artır
      } else {
        state.carts.push({ id, name, price, quantity,image });
      }
    },
    removeFromCart: (state, action) => {
      // removeFromCart işlevi: Sepetten ürünü çıkarmak için kullanılır
      const itemId = action.payload;
      state.carts = state.carts.filter((product) => product.id !== itemId);
    },
    clearCart: (state) => {
      // clearCart işlevi: Sepeti temizlemek için kullanılır
      state.carts = [];
    },
  },
});

export const { addToCart, removeFromCart, clearCart } = cartSlice.actions;

export default cartSlice.reducer;
