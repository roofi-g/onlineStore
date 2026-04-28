import { createSlice } from '@reduxjs/toolkit';

export type FiltersState = {
  sizes: string[];
  price: [number, number];
  sort: string;
  search: string;
  page: number;
  limit: number;
};

const initialState: FiltersState = {
  sizes: [],
  price: [0, 100000],
  search: '',
  sort: 'hot',
  page: 1,
  limit: 8,
};

const filtersSlice = createSlice({
  name: "filters",
  initialState,
  reducers: {
    setSizes: (state, action) => {
      state.sizes = action.payload;
      state.page = 1;
    },
    setPrice: (state, action) => {
      state.price = action.payload;
      state.page = 1;
    },
    setSearch: (state, action) => {
      state.search = action.payload;
      state.page = 1;
    },
    setSort: (state, action) => {
      state.sort = action.payload;
      state.page = 1;
    },
    setPage: (state, action) => {
      state.page = action.payload;
    },
    selectLimit: (state, action) => {
      state.limit = action.payload;
    },
    resetFilters: () => initialState,
  },
});

export const { setSizes, setPrice, setSearch, setSort, setPage, selectLimit, resetFilters } = filtersSlice.actions;

export default filtersSlice.reducer;