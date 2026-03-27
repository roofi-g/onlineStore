import { sortProductsFunc } from "../lib/sortingMethods";

export const sortProducts = (products, type) => {
    const filtered = [...products];
    return filtered.sort(sortProductsFunc[type]);
};
