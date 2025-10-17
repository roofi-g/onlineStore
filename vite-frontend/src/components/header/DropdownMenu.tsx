import { useGetCatalogQuery } from "../../features/products/productsApi";
import { Link } from "react-router-dom";
import { useState } from "react";

export default function DropdownMenu() {
    const { data: catalog = [] } = useGetCatalogQuery();
    const [selectedParent, setSelectedParent] = useState('');

    // function buildCategoryTree(catalog) {
    //     return catalog
    //         .filter(category => !category.parent)
    //         .map(parent => ({
    //             ...parent,
    //             children: catalog.filter(sub => sub.parentId === parent.id)
    //         }))
    // }

    const parents = catalog.filter(category => !category.parent);

    return (
        <section className="absolute top-full bg-white z-50 w-100 p-4">
            <div className="grid grid-cols-2">
                <ul className="col-start-1 text-lg font-semibold tracking-normal leading-8">
                    {parents.map(catalog =>
                        <li key={catalog.id} className="hover:text-rose-400" >
                            {catalog.parentId === null && (
                                <Link onMouseEnter={() => setSelectedParent(catalog.id)} to={`/catalog/${catalog.slug}`}>{catalog.name}</Link>
                            )}
                        </li>
                    )}
                </ul>
                <ul className="col-start-2">
                    {catalog
                        .filter(sub => sub.parentId === selectedParent)
                        .map(sub => {
                            const parent = parents.find(p => p.id === sub.parentId);
                            return (
                                <li key={sub.id} className="hover:text-rose-400">
                                    <Link to={`/catalog/${parent.slug}/${sub.slug}`}>{sub.name}</Link>
                                </li>
                            )
                        }
                    )}
                </ul>
            </div>
        </section>
    )
}
