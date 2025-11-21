import { orderSizes } from "./orderSizes";

export const getUniqueOrderSizes = (products) => {
    const allSizes = products?.flatMap(el => el.sizes ?? []);
    const normalized = allSizes.map(s => s.toString().toUpperCase());
    const uniqueSizes = [...new Set(normalized)];
    return orderSizes(uniqueSizes);
}
