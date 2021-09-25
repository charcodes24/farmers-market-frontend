import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const createOrder = createAsyncThunk(
  "cart/createOrder",
  async ({customer_id, total, item_ids}) => {
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
    return data 
  }
)

export const getOrders = createAsyncThunk(
  "cart/getOrders",
  async (id) => {
    const response = await fetch(`/orders/${id}`)
    const data = await response.json()
    return data 
  }
)

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    cartItems: [],
    total: 0,
    orders: [],
    order: {},
    isLoading: false,
    hasError: false,
  },
  reducers: {
    addItemToCart(state, { payload }) {
      const existingItem = state.cartItems.find(
        (item) => item.id === payload.id
      );
      if (!existingItem) {
        state.cartItems.push({
          id: payload.id,
          name: payload.name,
          price: payload.price,
          quantity: 1,
        });
        state.total += payload.price;
      } else {
        existingItem.quantity++;
        state.total += payload.price;
      }
    },
    decreaseQuantity(state, { payload }) {
      const item = state.cartItems.find(item => item.id === payload)
      if (item.quantity > 1) {
        item.quantity -= 1;
        state.total -= item.price;
      } else {
        const updatedCart = state.cartItems.filter(
          (item) => item.id !== payload
        );
        state.cartItems = updatedCart
        state.total -= item.price
      }
    },
    clearCart(state) {
      state.cartItems = [];
      state.total = 0;
    },
    clearOrders(state) {
      state.orders = [];
    },
  },
  extraReducers: {
    [createOrder.pending]: (state) => {
      state.isLoading = true;
      state.hasError = false;
    },
    [createOrder.fulfilled]: (state, { payload }) => {
      state.orders.push(payload);
      state.isLoading = false;
      state.hasError = false;
    },
    [createOrder.rejected]: (state) => {
      state.isLoading = false;
      state.hasError = true;
    },
    [getOrders.pending]: (state) => {
      state.isLoading = true;
      state.hasError = false;
    },
    [getOrders.fulfilled]: (state, { payload }) => {
      state.orders = payload
      state.isLoading = false;
      state.hasError = false;
    },
    [getOrders.rejected]: (state) => {
      state.isLoading = false;
      state.hasError = true;
    },
  },
});

export const { addItemToCart, decreaseQuantity, removeItemFromCart, clearCart, clearOrders, thisOrder } = cartSlice.actions
export default cartSlice.reducer


