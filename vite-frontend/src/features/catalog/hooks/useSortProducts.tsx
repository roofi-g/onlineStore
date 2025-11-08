import { sortProductsFunc } from "../utils/sortingMethods";

export const sortProducts = (products, type) => {
    const filtered = [...products];
    return filtered.sort(sortProductsFunc[type]);
};
