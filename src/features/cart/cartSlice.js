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
      } else {
          state.quantity[payload.name] = {
              quantity: 1,
              price: payload.price
        }
      }
    },
    decrementQuantity(state, { payload }) {
        state.quantity[payload.name].quantity -= 1;
      },
      clearCart(state) {
          state.quantity = {}
    }
  },
  extraReducers: {},
});

export const { incrementQuantity, decrementQuantity, clearCart } = cartSlice.actions
export default cartSlice.reducer