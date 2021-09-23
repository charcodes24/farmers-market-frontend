import { configureStore } from "@reduxjs/toolkit";
import storage from "redux-persist/lib/storage";
import { combineReducers } from "redux";
import { persistReducer } from "redux-persist";
import thunk from "redux-thunk";

import vendorReducer from '../vendor/vendorSlice'
import itemReducer from '../item/itemSlice'
import loginReducer from "../login/loginSlice"
import cartReducer from "../cart/cartSlice"

const reducers = combineReducers({
    vendor: vendorReducer,
    item: itemReducer,
    login: loginReducer,
    cart: cartReducer
})

const persistConfig = {
    key: 'root',
    storage,
    whitelist: ['cart', 'login']
}

const persistedReducer = persistReducer(persistConfig, reducers)

const store = configureStore({
    reducer: persistedReducer,
    devTools: process.env.NODE_ENV !== 'production',
    middleware: [thunk]
})

export default store