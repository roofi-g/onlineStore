import { createSelector } from "@reduxjs/toolkit";
import {
  selectLimit, 
  selectPage 
} from "../../../../entities/catalog/model/selectors";

import { selectSortProducts } from "../../sort/model/selectors";
import { selectFilteredProducts } from "../../filter/model/selectors";

export const selectTotalPages = createSelector(
  [selectFilteredProducts, selectLimit],
  (products, limit) => Math.ceil(products.length / limit)
);

export const selectPaginatedProducts = createSelector(
  [selectSortProducts,
    selectPage,
    selectLimit
  ],
  (products, page, limit) => {
    const start = (page - 1) * limit;
    const end = start + limit;
    return products.slice(start, end);
  }
);