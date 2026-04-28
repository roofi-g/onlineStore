import { useMemo } from "react";
import { useGetCatalogQuery } from "../../../entities/catalog/index";
import type { Catalog } from '../../../entities/catalog/model/types';

export function useCategories(selectedParent: string) {
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