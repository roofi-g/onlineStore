import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import { cartApi } from "../../../../entities/cart";
import type { CartItemId, SelectionState } from './types'

const savedSelection = localStorage.getItem("cartSelection");

const initialState: SelectionState = {
  selectedIds: savedSelection ? JSON.parse(savedSelection) : [],
}

const selectionSlice = createSlice({
  name: "cartSelection",
  initialState,
  reducers: {
    toggleSelect(state, action: PayloadAction<CartItemId>) {
      const id = action.payload;

      if (state.selectedIds.includes(id)) {
        state.selectedIds = state.selectedIds.filter(i => i !== id);
      } else {
        state.selectedIds.push(id);
      }
      localStorage.setItem("cartSelection", JSON.stringify(state.selectedIds));
    },
    clearSelection(state) {
    state.selectedIds = [];
    localStorage.removeItem("cartSelection");
    },
    selectAll(state, action: PayloadAction<CartItemId[]>) {
      state.selectedIds = action.payload;
      localStorage.setItem("cartSelection", JSON.stringify(state.selectedIds));
    },
  },
  extraReducers: builder => {
    builder.addMatcher(
      cartApi.endpoints.addToCart.matchFulfilled,
      (state, action) => {
        const newId = action.payload.id;
        if (!state.selectedIds.includes(newId)) {
          state.selectedIds.push(newId);
        }
        localStorage.setItem("cartSelection", JSON.stringify(state.selectedIds));
      }
    )

    builder.addMatcher(
      cartApi.endpoints.removeFromCart.matchFulfilled,
      (state, action) => {
        const removedId = action.payload.id;
        state.selectedIds = state.selectedIds.filter(id => id !== removedId);

        if (state.selectedIds.length === 0) {
          localStorage.removeItem("cartSelection");
        } else {
          localStorage.setItem("cartSelection", JSON.stringify(state.selectedIds));
        }
      }
    )
  }
})

export const { toggleSelect } = selectionSlice.actions;
export default selectionSlice.reducer;