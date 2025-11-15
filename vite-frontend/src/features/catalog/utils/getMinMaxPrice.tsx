export function priceMinMax(products) {
    const minPrice = products.length
        ? Math.min(...products.map(p => p.price))
        : 1;
    const maxPrice = products.length
        ? Math.max(...products.map(p => p.price))
        : 100;

    return { minPrice, maxPrice }
}
