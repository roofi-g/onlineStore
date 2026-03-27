import {useMemo} from "react";

export const useFilterProducts = (products, filters) => {
    return useMemo(() => {

        if (!products.length) return [];

        return products.filter(product => {

            const inSize = 
                filters.sizes.length === 0 ||
                product.sizes.some(size =>
                    filters.sizes.includes(size)
                )

            const inPrice =
                !filters.price ||
                (product.price >= filters.price[0] &&
                product.price <= filters.price[1])

            return inSize && inPrice;
        });
    }, [products, filters]);
};
