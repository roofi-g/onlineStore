import { useParams } from "react-router-dom";
import { useGetCatalogQuery, type Catalog } from "../index";

type UseActiveCategoryResult = {
  parentCategory?: Catalog
  childCategory?: Catalog
  activeCategory?: Catalog
}

export function useActiveCategory(): UseActiveCategoryResult {
    const { categorySlug, subCategorySlug } = useParams<{
        categorySlug?: string
        subCategorySlug?: string
    }>();

    const { data: catalog = [] } = useGetCatalogQuery();
    
    const parentCategory = catalog.find(cat => cat.slug === categorySlug);
    const childCategory = catalog.find(cat => cat.slug === subCategorySlug);
    
    return { 
        parentCategory, 
        childCategory, 
        activeCategory: childCategory ?? parentCategory
    };
}

