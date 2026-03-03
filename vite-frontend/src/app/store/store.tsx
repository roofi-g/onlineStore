import { configureStore } from "@reduxjs/toolkit";
import { productsApi } from '../../entities/product';
import { cartApi } from '../../entities/cart';
import cartSelectionReducer from '../../features/cart/select-cart-items/model/selectionSlice';

const savedSelection = localStorage.getItem("cartSelection");

const preloadedState = {
  cartSelection: {
    selectedIds: savedSelection ? JSON.parse(savedSelection) : [],
  },
};

export const store = configureStore({
  reducer: {
    [productsApi.reducerPath]: productsApi.reducer,
    [cartApi.reducerPath]: cartApi.reducer,
    cartSelection: cartSelectionReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware()
      .concat(productsApi.middleware)
      .concat(cartApi.middleware),
  preloadedState,
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;