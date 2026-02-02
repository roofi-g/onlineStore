import { useParams } from "react-router-dom";
import { useGetCatalogQuery } from "../../../entities/product/index";

export function useActiveCategory() {
    const { categorySlug, subCategorySlug } = useParams();
    const { data: catalog = [] } = useGetCatalogQuery();

    const parentCategory = catalog.find(cat => cat.slug === categorySlug);
    const childCategory = catalog.find(cat => cat.slug === subCategorySlug && cat.parentId === parentCategory?.id);
    const activeCategory = childCategory || parentCategory;

    return { parentCategory, childCategory, activeCategory }
}
