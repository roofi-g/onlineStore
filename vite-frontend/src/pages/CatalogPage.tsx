import {Link, useParams} from "react-router-dom";
import {useGetCatalogQuery, useGetProductsQuery} from "../features/products/productsApi";
import {useMemo, useState} from "react";
import BreadCrumbs from "../components/catalog/BreadCrumbs";

export default function CatalogPage() {
    const { categorySlug, subCategorySlug } = useParams();
    const { data: catalog = [] } = useGetCatalogQuery();
    const { data: products = [] } = useGetProductsQuery();

    const parentCategory = catalog.find(cat => cat.slug === categorySlug);
    const childCategory = catalog.find(cat => cat.slug === subCategorySlug && cat.parentId === parentCategory?.id);
    const activeProducts = childCategory || parentCategory;

    const filteredProducts = useMemo(() => {
        if (!activeProducts) return [];
        return products.filter(p =>
            Array.isArray(p.category_id)
                ? p.category_id.includes(activeProducts.id)
                : p.category_id === activeProducts.id
        )
    }, [products, activeProducts])

    return (
        <div>
            <BreadCrumbs />
            <div className="flex flex-wrap justify-around">
                {filteredProducts
                    .map(el =>
                        <div key={el.id}>
                            <img className="w-70" src={el.image} alt=""/>
                            <p>{el.name}</p>
                        </div>
                    )
                }
            </div>
        </div>
    )
}
