"use client";

import { combineReducers, configureStore } from "@reduxjs/toolkit";

import cartSlice from "./features/counter/cartSlice";
import { persistReducer, persistStore } from "redux-persist";
import storage from "redux-persist/lib/storage";

const rootReducer = combineReducers({
  cart: cartSlice,
});

const persistConfig = {
  key: "nextjs",
  whitelist: ["cart"], // make sure it does not clash with server keys
  storage,
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
