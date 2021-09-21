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
        state.quantity[payload.name] += 1;
      } else {
        state.quantity[payload.name] = 1;
      }
    },
    decrementQuantity(state, { payload }) {
        state.quantity[payload.name] -= 1;
    },
  },
  extraReducers: {},
});

export const { incrementQuantity, decrementQuantity } = cartSlice.actions
export default cartSlice.reducer