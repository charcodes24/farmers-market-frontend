import { configureStore } from "@reduxjs/toolkit";

import vendorReducer from '../vendor/vendorSlice'
import itemReducer from '../item/itemSlice'
import loginReducer from "../login/loginSlice";
import cartReducer from "../cart/cartSlice"

const store = configureStore({
    reducer: {
        vendor: vendorReducer,
        item: itemReducer,
        login: loginReducer,
        cart: cartReducer
    }
})

export default store