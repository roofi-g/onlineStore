import { createSelector } from '@reduxjs/toolkit';
import { cartApi } from '../api/cart.api';

const selectCartResult = cartApi.endpoints.getCart.select();

export const selectCartItems = createSelector(
  selectCartResult,
  cartResult => cartResult.data || []
);

export const selectTotalQuantity = createSelector(
  selectCartItems,
  items => items.reduce((sum, item) => sum + item.quantity, 0)
);


// export const selectCartTotal = (state: any) =>
//   selectCartItems(state).reduce(
//     (sum, item) => sum + item.product.price * item.quantity,
//     0
//   );