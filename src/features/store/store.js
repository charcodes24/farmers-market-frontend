import { configureStore } from "@reduxjs/toolkit";
import vendorReducer from '../vendor/vendorSlice'

const store = configureStore({
    reducer: {
        vendor: vendorReducer
    }
})

export default store