import { useSelector } from "react-redux";
import { useActiveCategory } from "../../../../entities/catalog/model/useActiveCategory";
import { useMemo } from "react";
import { selectProductsByCategory } from "../../../../entities/catalog/model/selectors";

export function useFilteredCount(tempSizes, tempPrice) {
    const { activeCategory } = useActiveCategory();
    const allProducts = useSelector(state => selectProductsByCategory(state, activeCategory));

    return useMemo(() => {
        let result = allProducts;

        if (tempSizes.length > 0) {
            result = result.filter(product => {
                return product.sizes && product.sizes.some(
                    s => {
                        if (typeof s === 'number') {
                            return tempSizes.includes(String(s));
                        }
                        return tempSizes.includes(s.toUpperCase());
                    } 
                );
            });
        }

        result = result.filter(product =>
            product.price >= tempPrice[0] && product.price <= tempPrice[1]
        );

        return result.length;
    }, [allProducts, tempSizes, tempPrice]);
}