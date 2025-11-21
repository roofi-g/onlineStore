import { useGetCatalogQuery } from "../../features/products/productsApi";
import { useMemo, useState } from "react";
import { Link } from "react-router-dom";
import type { Catalog } from '@/types';

export default function DropdownMenu() {
    const { data: catalog = [], isLoading } = useGetCatalogQuery();
    const [selectedParent, setSelectedParent] = useState<number | null>(null);

    const parents = useMemo(
        () => catalog.filter((cat: Catalog) => !cat.parentId),
        [catalog]
    );

    const parentMap = useMemo(() => {
        const map = new Map<number, Catalog>();
        parents.forEach((p) => map.set(p.id, p))
        return map;
    }, [parents]);

    const children = useMemo(() => {
        if (!selectedParent) return [];
        return catalog.filter(
            (sub: Catalog) => Number(sub.parentId) === Number(selectedParent)
        );
    }, [catalog, selectedParent]);

    if (isLoading) return <p>Loading...</p>;

    return (
        <section className="absolute top-full bg-white z-50 w-100 p-4">
            <div className="grid grid-cols-2">
                <ul className="col-start-1 text-lg font-semibold tracking-normal leading-8">
                    {parents.map(catalog =>
                        <li key={catalog.id} className="hover:text-rose-400" >
                            <Link
                                onMouseEnter={() => setSelectedParent(catalog.id)}
                                to={`/catalog/${catalog.slug}`}>{catalog.name}
                            </Link>
                        </li>
                    )}
                </ul>
                <ul className="col-start-2">
                    {children.length > 0 && (
                        children.map(sub => {
                            const parent = parentMap.get(sub.parentId!);
                            // console.log(parent)
                            if (!parent || !parent.slug || !sub.slug) return null;
                            return (
                                <li key={sub.id} className="hover:text-rose-400">
                                    <Link to={`/catalog/${parent.slug}/${sub.slug}`}>{sub.name}</Link>
                                </li>
                            );
                        })
                    )}
                </ul>
            </div>
        </section>
    )
}
