import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query";
import { allcountriesApi } from "./allcountriesApi";


export const store = configureStore({
  reducer: {
    [allcountriesApi.reducerPath]: allcountriesApi.reducer,
  },

  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({}).concat([
        allcountriesApi.middleware,

    ]),
});

setupListeners(store.dispatch);