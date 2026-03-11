import { useMemo } from "react";
import { useGetCatalogQuery } from "../../../entities/product/index";
import type { Catalog } from '../../../entities/catalog/model/catalog';

export function useCategories(selectedParent: Catalog) {
  const { data: catalog = [], isLoading } = useGetCatalogQuery();

   const parents = useMemo(() => 
        catalog.filter((category: Catalog) => !category.parentId),
        [catalog]
    );
    
    const children = useMemo(() => {
        if (!selectedParent) return [];
        return catalog.filter(
            (category: Catalog) => category.parentId === Number(selectedParent)
        )
    }, [catalog, selectedParent]);

    const selectedCategory = useMemo(() => {
      return parents.find(c => c.id === selectedParent);
    }, [parents, selectedParent]) 
    
    return {
      parents, 
      children,
      selectedCategory,
      isLoading
    }
}