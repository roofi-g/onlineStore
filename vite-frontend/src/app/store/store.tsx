import { configureStore } from "@reduxjs/toolkit";
import { productsApi } from '../../entities/product';
import { catalogApi } from '../../entities/catalog';
import { cartApi } from '../../entities/cart';
import filtersReducer from '../../entities/catalog/model/filtersSlice';
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
    [catalogApi.reducerPath]: catalogApi.reducer,
    [cartApi.reducerPath]: cartApi.reducer,
    filters: filtersReducer,
    cartSelection: cartSelectionReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware()
      .concat(productsApi.middleware)
      .concat(catalogApi.middleware)
      .concat(cartApi.middleware),
  preloadedState,
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;