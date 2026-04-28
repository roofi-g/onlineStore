import { createSelector } from "@reduxjs/toolkit";
import { selectAppliedSort } from "../../../../entities/catalog/model/selectors";
import { selectFilteredProducts } from "../../filter/model/selectors";

export const selectSortProducts = createSelector(
  [selectFilteredProducts, selectAppliedSort],
  (products, sort) => {
    switch (sort) {
      case 'hot':
        return [...products].sort((a, b) => b.isHot - a.isHot);
      case 'new':
        return [...products].sort((a, b) => b.create_at - a.create_at);
      case 'priceUp':
        return [...products].sort((a, b) => a.price - b.price);
      case 'priceDown':
        return [...products].sort((a, b) => b.price - a.price);
      default:
        return products;
    }
  }
);