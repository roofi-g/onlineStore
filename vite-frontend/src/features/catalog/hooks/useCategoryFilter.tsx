import {useMemo} from "react";
import type { Product } from '@/types';

export const useCategoryFilter = ( products, activeCategory ): Product[] => {
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

