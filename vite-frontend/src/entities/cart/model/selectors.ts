import { createSelector } from '@reduxjs/toolkit';
import { cartApi } from '../api/cart.api';
import { selectSelectedCartItems } from '../../../features/cart/select-cart-items/model/selectors';
import { calculateCartTotals } from '../lib/calculateCartTotals';
import { calculateItemTotals } from '../lib/calculateItemTotals';
import type { RootState } from '../../../app/store/store';

const selectCartResult = cartApi.endpoints.getCart.select();

export const selectCartItems = createSelector(
  selectCartResult,
  cartResult => cartResult.data || []
);

export const selectTotalQuantity = createSelector(
  selectCartItems,
  items => items.reduce((sum, item) => sum + item.quantity, 0)
);

export const selectItemTotalPrice = createSelector(
  [selectCartItems, (_: RootState, id: string) => id],
  (items, id) => {
    const item = items.find(item => item.id === id);
    if (!item) return null;

    return calculateItemTotals(item);
  }
);

export const selectSelectedTotals = createSelector(
  selectSelectedCartItems,
  (selectedItems) => {
    return calculateCartTotals(selectedItems);
  }
);