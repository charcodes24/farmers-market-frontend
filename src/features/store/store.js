import { configureStore } from "@reduxjs/toolkit";

import vendorReducer from '../vendor/vendorSlice'
import itemReducer from '../item/itemSlice'
import loginReducer from "../login/loginSlice";

const store = configureStore({
    reducer: {
        vendor: vendorReducer,
        item: itemReducer,
        login: loginReducer
    }
})

export default store