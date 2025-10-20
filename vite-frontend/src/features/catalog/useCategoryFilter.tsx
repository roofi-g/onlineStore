import {useMemo} from "react";

export function useCategoryFilter(products, activeCategory) {
    return useMemo(() => {
        if (!activeCategory) return [];
        return products.filter(p =>
          Array.isArray(p.category_id)
            ? p.category_id.includes(activeCategory.id)
            : p.category_id === activeCategory.id
        )
    }, [products, activeCategory]);
}

