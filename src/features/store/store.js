import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import storage from "redux-persist/lib/storage";
import { combineReducers } from "redux";
import {
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";

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
    whitelist: ['cart'],
    blacklist: ['login, vendor, item']
}

const persistedReducer = persistReducer(persistConfig, reducers)

const store = configureStore({
  reducer: persistedReducer,
  middleware: getDefaultMiddleware({
    serializableCheck: {
      ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
    },
  }),
});

export default store