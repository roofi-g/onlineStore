import {useGetProductsQuery} from "../../products/productsApi";
import {useActiveCategory} from "./useActiveCategory";
import type { Product } from '@/types';
import {useMemo} from "react";

export const useProductsByCategory = (): Product[] => {
    const {data: products = []} = useGetProductsQuery();
    const {activeCategory} = useActiveCategory();

    return useMemo(() => {
        if (!products?.length || !activeCategory?.id) return [];

        return products.filter(p => {
            const categoryIds = Array.isArray(p.category_id)
                ? p.category_id.map(Number)
                : [Number(p.category_id)];
            return categoryIds.includes(Number(activeCategory.id));
        });
    }, [products, activeCategory]);
}

