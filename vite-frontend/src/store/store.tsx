import { configureStore } from "@reduxjs/toolkit";
import { productsApi } from "../features/products/productsApi";
import { cartApi } from "../features/products/cartApi"

export const store = configureStore({
    reducer: {
        [productsApi.reducerPath]: productsApi.reducer,
        [cartApi.reducerPath]: cartApi.reducer,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware()
            .concat(productsApi.middleware)
            .concat(cartApi.middleware),
});
