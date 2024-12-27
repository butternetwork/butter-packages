"use client";
import { configureStore } from "@reduxjs/toolkit";
import { routesSlices } from "./route/routes-slice";
import { globalSlice } from "./global/global-slice";
import { walletSlice } from "./wallet/wallet-slice";
import { uiSlice } from "./ui/uiSlice";
import apis from "./api";

const store = configureStore({
  reducer: {
    wallet: walletSlice.reducer,
    routes: routesSlices.reducer,
    global: globalSlice.reducer,
    ui: uiSlice.reducer,
    [apis.reducerPath]: apis.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }).concat(apis.middleware),
  devTools: {
    serialize: {
      replacer: (_key, value) =>
        typeof value === "bigint" ? value.toString() : value,
    },
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
