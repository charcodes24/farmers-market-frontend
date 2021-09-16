import { configureStore } from "@reduxjs/toolkit";

import vendorReducer from '../vendor/vendorSlice'
import itemReducer from '../item/itemSlice'

const store = configureStore({
    reducer: {
        vendor: vendorReducer,
        item: itemReducer
    }
})

export default store