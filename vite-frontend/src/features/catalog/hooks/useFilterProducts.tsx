import {useMemo} from "react";

export const useFilterProducts = (productsByCategory, filters) => {
    return useMemo(() => {
        return productsByCategory?.filter(p => {
            const inSize = filters.sizes.length
                ? p.sizes.some((size: string) => filters.sizes.includes(size))
                : true;
            const inPrice = p.price >= filters.price[0] && p.price <= filters.price[1];
            return inSize && inPrice;
        });
    }, [productsByCategory, filters]);
};
