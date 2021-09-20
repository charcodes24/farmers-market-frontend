import { createSlice } from "@reduxjs/toolkit";

export const cartSlice = createSlice({
    name: "cart",
    initialState: {
        cartItems: []
    },
    reducers: {},
    extraReducers: {}
})


export const { addItem, removeItem, clearCart } = cartSlice.actions
export default cartSlice.reducer 