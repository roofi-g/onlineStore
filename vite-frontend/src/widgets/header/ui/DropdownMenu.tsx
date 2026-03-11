import { useState } from "react";
import { Link } from "react-router-dom";
import { useCategories } from "../model/useCategories";

export default function DropdownMenu() {
    const [selectedParent, setSelectedParent] = useState(null);
    const { parents, children, selectedCategory, isLoading } = useCategories(selectedParent);
    
    if (isLoading) return <p>Loading...</p>;

    return (
        <div className="absolute top-full w-80 bg-white z-50 p-6">
            <nav className="flex gap-13 justify-between">         
                <ul className="text-lg font-semibold leading-8 tracking-wide">
                    {parents.map(category => (
                        <li key={category.id} className="hover:text-rose-400">
                            <Link
                                onMouseEnter={() => setSelectedParent(category.id)}
                                to={`/catalog/${category.slug}`}
                            >
                                {category.name}
                            </Link>
                        </li>
                    ))}
                </ul>
                <ul className="leading-7 tracking-wider">
                    {children.map(sub => (
                        <li key={sub.id} className="hover:text-rose-400">
                            <Link to={`/catalog/${selectedCategory.slug}/${sub.slug}`}>
                                {sub.name}
                            </Link>
                        </li>
                    ))}
                </ul>
            </nav>
        </div>
    )
}
