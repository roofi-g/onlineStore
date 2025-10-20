import { useGetProductsQuery } from "../features/products/productsApi";
import { useCategoryFilter } from "../features/catalog/useCategoryFilter";
import { useActiveCategory } from "../features/catalog/useActiveCategory";

export default function CatalogPage() {
    const { activeCategory } = useActiveCategory();
    const { data: products = [] } = useGetProductsQuery();

    const categoryFilter = useCategoryFilter(products, activeCategory);

    return (
        <div>
            <div className="flex flex-wrap justify-around">
                {categoryFilter
                    .map(el =>
                        <div key={el.id}>
                            <img className="w-70" src={el.image} alt=""/>
                            <p>{el.name}</p>
                            <p>{el.price}</p>
                        </div>
                    )
                }
            </div>
        </div>
    )
}
