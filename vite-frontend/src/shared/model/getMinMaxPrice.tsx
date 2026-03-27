import type { Product } from "../../entities/product";

export function getMinMaxPrice(products: Product[]): {
    minPrice: number
    maxPrice: number
} {
    if (!products.length) {
        return { minPrice: 1, maxPrice: 100 };
    }

    let minPrice = Infinity;
    let maxPrice = -Infinity;
    
    for (const product of products) {
        const price = product.price;

        if (price < minPrice ) minPrice = price;
        if (price > maxPrice) maxPrice = price;
    }

    return { minPrice, maxPrice }
}
