import { Link } from "react-router-dom";
import { useActiveCategory } from "../useActiveCategory";

export default function BreadCrumbs() {
    const { parentCategory, childCategory } = useActiveCategory();

    const crumbs = [
        {name: 'Главная', path: '/'},
        {name: parentCategory?.name, path: `/catalog/${parentCategory?.slug}`},
        childCategory && {name: childCategory.name, path: `/catalog/${parentCategory.slug}/${childCategory.slug}`}
    ].filter(Boolean);

    return (
        <nav className="flex">
            {crumbs.map((crumb, i) => (
                <Link key={i} to={crumb.path}>{crumb.name}</Link>
            ))}
        </nav>
    )
}
