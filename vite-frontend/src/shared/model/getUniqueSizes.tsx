import type { Product } from "../../entities/product";

export const getUniqueSizes = (products: Product[]): string[] => {
    if (!products?.length) return [];

    const allSizes = products?.flatMap(product => product.sizes ?? []);
    const normalized = allSizes.map(s => String(s).toUpperCase());
    const uniqueSizes = [...new Set(normalized)];

    const sizeOrder = ['XS', 'S', 'M', 'L', 'XL', 'ONE SIZE'];

    return uniqueSizes?.sort((a, b) => {
        const indexA = sizeOrder.indexOf(a);
        const indexB = sizeOrder.indexOf(b);
        
        if (indexA === -1 && indexB === -1) return 0;
        if (indexA === -1) return 1;
        if (indexB === -1) return -1;

        return indexA - indexB;
    })
}
