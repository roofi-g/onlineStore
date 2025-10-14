import { useGetCategoriesQuery } from "../../features/products/productsApi";
import { Link } from "react-router-dom";
import { ROUTES } from "../../routes";
import { useState } from "react";

export default function DropdownMenu() {
    const { data: categories = [] } = useGetCategoriesQuery();
    const [showMenu, setShowMenu] = useState(false);

    return (
        <section className="absolute top-full bg-white z-50 w-100 p-4">
            <div className="grid grid-cols-2">
                <ul className="col-start-1 text-lg font-semibold tracking-normal leading-8">
                    {categories.map(categorise =>
                        <li key={categorise.id} className="hover:text-rose-400" onMouseEnter={() => setShowMenu(categorise.id)}>
                            {categorise.parentId === null && (
                                <Link to={ROUTES.categories(categorise.id)}>{categorise.name}</Link>
                            )}
                        </li>
                    )}
                </ul>
                <ul className="col-start-2">
                    {categories.map(categorise =>
                        <li key={categorise.id} className="hover:text-rose-400">
                            {categorise.parentId === showMenu && (
                                <Link to={ROUTES.categories(categorise.id)}>{categorise.name}</Link>
                            )}
                        </li>
                    )}
                </ul>
            </div>
        </section>
    )
}
