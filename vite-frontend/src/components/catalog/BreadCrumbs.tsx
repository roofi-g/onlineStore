import {Link, useParams} from "react-router-dom";
import {useGetCatalogQuery, useGetProductsQuery} from "../../features/products/productsApi";

export default function BreadCrumbs() {
    const { categorySlug, subCategorySlug } = useParams();
    const { data: catalog = [] } = useGetCatalogQuery();

    return (
        <nav className="flex">
            <Link to={'/'} >Главная</Link>
            {catalog.map(el => (
                <div key={el.id} className="flex">
                    <Link to={`/catalog/${categorySlug}`}>{el.slug === categorySlug && el.name}</Link>
                    <Link to={`/catalog/${categorySlug}/${subCategorySlug}`}>{el.slug === subCategorySlug && el.name }</Link>
                </div>
            ))}
        </nav>
    )
}
