import { useGetCatalogQuery } from "../../features/products/productsApi";
import { Link } from "react-router-dom";
import { ROUTES } from "../../routes";
import { useState } from "react";

export default function DropdownMenu() {
    const { data: catalog = [] } = useGetCatalogQuery();
    const [showMenu, setShowMenu] = useState(false);

    return (
        <section className="absolute top-full bg-white z-50 w-100 p-4">
            <div className="grid grid-cols-2">
                <ul className="col-start-1 text-lg font-semibold tracking-normal leading-8">
                    {catalog.map(catalog =>
                        <li key={catalog.id} className="hover:text-rose-400" onMouseEnter={() => setShowMenu(catalog.id)}>
                            {catalog.parentId === null && (
                                <Link to={ROUTES.catalog(catalog.id)}>{catalog.name}</Link>
                            )}
                        </li>
                    )}
                </ul>
                <ul className="col-start-2">
                    {catalog.map(catalog =>
                        <li key={catalog.id} className="hover:text-rose-400">
                            {catalog.parentId === showMenu && (
                                <Link to={ROUTES.catalog(catalog.id)}>{catalog.name}</Link>
                            )}
                        </li>
                    )}
                </ul>
            </div>
        </section>
    )
}
