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

export const selectItemTotalPrice = (id: string) => createSelector(
  selectCartItems,
  (items): { price: number; discount: number; discountedPrice: number } => {
    const item = items.find(item => item.id === id);
    if (!item) return { price: 0, discount: 0, discountedPrice: 0}

    const price = item.price * item.quantity;
    const discount = item.discount;
    const discountedPrice = price - (price * ((discount) / 100));
    
    return { price, discount, discountedPrice };
  }
);