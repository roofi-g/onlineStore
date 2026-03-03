import { createSelector } from "@reduxjs/toolkit";
import { cartApi } from "../../../../entities/cart";
import type { RootState } from "../../../../app/store/store";


export const selectSelectedIds = (state: RootState) => {
  return state.cartSelection.selectedIds;
}

export const selectIsSelected = (id: string) => (state: RootState) => {
  return state.cartSelection.selectedIds.includes(id);
}

const selectCartResult = cartApi.endpoints.getCart.select();

export const selectCartItems = createSelector(
  selectCartResult,
  (result) => result?.data ?? []
);

export const selectSelectedCartItems = createSelector(
  selectSelectedIds,
  selectCartItems,
  (selectedIds, cartItems) => 
    cartItems.filter(item => selectedIds.includes(item.id))
)