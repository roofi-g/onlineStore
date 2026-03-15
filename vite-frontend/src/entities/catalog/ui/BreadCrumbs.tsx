import { Link } from "react-router-dom";
import { useBreadCrumbs } from "../model/useBreadCrumbs";

export default function BreadCrumbs() {
    const crumbs = useBreadCrumbs();

    return (
        <nav className="flex gap-2 text-zinc-400">
            {crumbs.map((crumb) => (
                <Link key={crumb?.path} to={crumb.path} className="hover:text-zinc-600 ">
                    {crumb.name}
                </Link>
            ))}
        </nav>
    )
}
