import { configureStore } from "@reduxjs/toolkit";
import { productsApi } from '../../entities/product';
import { cartApi } from '../../entities/cart';

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

export type RootState = ReturnType<typeof store.getState>;