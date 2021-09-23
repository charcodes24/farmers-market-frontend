import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const createOrder = createAsyncThunk(
  "cart/createOrder",
  async ({customer_id, total, item_ids}) => {
    debugger
    const response = await fetch("/order", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Accept": "application/json"
    },
    body: JSON.stringify({
      customer_id: customer_id,
      subtotal: total,
      item_ids: item_ids
    })
  })
    const data = await response.json()
    debugger
    return data 
  }
)

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    quantity: {},
    total: 0,
    orders: [],
    isLoading: false,
    hasError: false
  },
  reducers: {
    incrementQuantity(state, { payload }) {
      if (payload.name in state.quantity) {
        state.quantity[payload.name].quantity += 1;
        state.total = state.total + payload.price;
      } else {
        state.quantity[payload.name] = {
          quantity: 1,
          price: payload.price,
        };
        state.total = state.total + payload.price;
      }
    },
    decrementQuantity(state, { payload }) {
      state.quantity[payload.name].quantity -= 1;
      state.total = state.total - payload.price
    },
    clearCart(state) {
      state.quantity = {};
      state.total = 0;
    },
  },
  extraReducers: {
    [createOrder.pending]: (state) => {
      state.isLoading = true;
      state.hasError = false;
    },
    [createOrder.fulfilled]: (state, { payload }) => {
      debugger
      state.orders = state.orders + payload
      state.isLoading = false;
      state.hasError = false
    },
    [createOrder.rejected]: (state) => {
      state.isLoading = false;
      state.hasError = true;
    },
  },
});

export const { incrementQuantity, decrementQuantity, clearCart, getTotal } = cartSlice.actions
export default cartSlice.reducer