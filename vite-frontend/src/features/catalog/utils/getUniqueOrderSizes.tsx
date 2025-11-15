import { orderSizes } from "../utils/orderSizes";

export const getUniqueOrderSizes(products) {
    const allSizes = products.flatMap(el => el.sizes ?? []);
    const uniqueSizes = [...new Set(allSizes)];
    return orderSizes(uniqueSizes);
}
