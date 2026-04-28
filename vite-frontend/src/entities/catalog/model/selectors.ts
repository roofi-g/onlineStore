import { createSelector } from "@reduxjs/toolkit";
import type { RootState } from "@reduxjs/toolkit/query";
import { productsApi } from "../../product";

export const selectAppliedSizes = (state: RootState) => state.filters.sizes;
export const selectAppliedPrice = (state: RootState) => state.filters.price;
export const selectAppliedSearch = (state: RootState) => state.filters.search;
export const selectAppliedSort = (state: RootState) => state.filters.sort;
export const selectPage = (state: RootState) => state.filters.page;
export const selectLimit = (state: RootState) => state.filters.limit;

const selectProductsResult = productsApi.endpoints.getProducts.select();
const selectActiveCategory = (_, activeCategory) => activeCategory;

export const selectAllProducts = createSelector(
  selectProductsResult,
  (result) => result?.data ?? []
);

export const selectProductsByCategory = createSelector(
  [selectAllProducts, selectActiveCategory],
  (products, activeCategory) => {  
    if (!products?.length || !activeCategory?.id) return [];

    const targetId = Number(activeCategory.id);

    return products.filter(product => 
      product.category_id?.some(id => Number(id) === targetId)
    );
  }
);