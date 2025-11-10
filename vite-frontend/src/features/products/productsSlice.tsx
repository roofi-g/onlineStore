import {createSlice} from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: 'cart',
  initialState: {
    items: [],
  },
  reducers: {
    addToCart: (state, action) => {
      const newArr = [...state.items, action.payload];
      return {...state, items: newArr};
    }
  }
})

export const { addToCart } = cartSlice.actions;
export default cartSlice.reducer;
