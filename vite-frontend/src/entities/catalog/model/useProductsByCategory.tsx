import { useMemo } from "react";
import { useGetProductsQuery } from "../../product/index";
import { useActiveCategory } from "./useActiveCategory";
import type { Product } from '../../product/index';

export const useProductsByCategory = (): Product[] => {
    const { data: products = [], isLoading } = useGetProductsQuery();
    const { activeCategory } = useActiveCategory();
    
    return useMemo(() => {
        if (isLoading) return [];
        if (!products?.length || !activeCategory?.id) return [];

        const targetId = Number(activeCategory.id);

        return products.filter(product => 
            product.category_id?.some(id => Number(id) === targetId)
        );
    }, [products, activeCategory, isLoading]);
}

