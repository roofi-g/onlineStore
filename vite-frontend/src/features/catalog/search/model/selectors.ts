import { createSelector } from "@reduxjs/toolkit";
import { selectAppliedSearch } from "../../../../entities/catalog/model/selectors";
import { selectFilteredProducts } from "../../filter/model/selectors";

export const selectFilteredWithSearch = createSelector(
  [selectFilteredProducts, selectAppliedSearch],
  (products, search) => {
    if (!search?.trim()) return products;
    const lowerSearch = search.toLowerCase();
    return products.filter(p => p.name.toLowerCase().includes(lowerSearch));
  }
);