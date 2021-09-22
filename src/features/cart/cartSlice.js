import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    quantity: {},
    total: 0,
  },
  reducers: {
    incrementQuantity(state, { payload }) {
      if (payload.name in state.quantity) {
          state.quantity[payload.name].quantity += 1;
          state.total = state.total + payload.price
      } else {
          state.quantity[payload.name] = {
              quantity: 1,
              price: payload.price
          }
          state.total = state.total + payload.price
      }
    },
    decrementQuantity(state, { payload }) {
        state.quantity[payload.name].quantity -= 1
        state.price =
          state.quantity[payload.name].price -
          state.quantity[payload.name].price;
      },
    clearCart(state) {
        state.quantity = {}
      },
  },
  extraReducers: {},
});

export const { incrementQuantity, decrementQuantity, clearCart, getTotal } = cartSlice.actions
export default cartSlice.reducer