import { createSlice } from "@reduxjs/toolkit";

const cartFromLocalStorage = JSON.parse(localStorage.getItem('cart') || '[]')

console.log("CARTSLICE", cartFromLocalStorage)

export const cartSlice = createSlice({
  name: "cart",
  initialState: {
    cartItems: cartFromLocalStorage,
  },
  reducers: {
    addToCart(state, { payload }) {
      state.cartItems = state.cartItems + payload;
    },

    removeFromCart(state, { payload }) {
      state.cartItems = state.cartItems - payload;
    },

    clearCart(state, { payload }) {
        state.cartItems = [];
    },
  },
  extraReducers: {},
});


export const { addToCart, removeFromCart, clearCart } = cartSlice.actions
export default cartSlice.reducer 