import { createSlice } from "@reduxjs/toolkit";

const cartFromLocalStorage = JSON.parse(localStorage.getItem('cart') || '[]')

export const cartSlice = createSlice({
    name: "cart",
    initialState: {
        cartItems: cartFromLocalStorage
    },
    reducers: {},
    extraReducers: {}
})


export const { addItem, removeItem, clearCart } = cartSlice.actions
export default cartSlice.reducer 