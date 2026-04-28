import { createSelector } from '@reduxjs/toolkit';
import { getUniqueSizes } from '../../../../shared/model/getUniqueSizes';
import { getMinMaxPrice } from '../../../../shared/model/getMinMaxPrice';
import { selectAppliedPrice, selectAppliedSearch, selectAppliedSizes, selectProductsByCategory } from '../../../../entities/catalog/model/selectors';

export const selectAvailableSizes = createSelector(
  [selectProductsByCategory],
  (products) => getUniqueSizes(products)
);

export const selectMinMaxPrice = createSelector(
  [selectProductsByCategory],
  (products) => getMinMaxPrice(products)
);

export const selectFilteredProducts = createSelector(
  [
    selectProductsByCategory,
    selectAppliedSizes,
    selectAppliedPrice,
    selectAppliedSearch
  ],
  (products, sizes, price, search) => {
    const [min, max] = price;
    const lower = search.toLowerCase();

    if (!products.length) return [];

    return products.filter(product => {
        const inSize = 
            sizes.length === 0 
            || product.sizes.some(size => {
              if (typeof size === 'number') return sizes.includes(String(size));
              
              return sizes.includes(size.toUpperCase());
            })

        const inPrice = 
            product.price >= min 
            && product.price <= max;

        if (search.trim()) return product.name.toLowerCase().includes(lower);

        return inSize && inPrice;
    })
  }
);

export const selectFilteredCount = createSelector(
  [selectFilteredProducts],
  (products) => products.length
);