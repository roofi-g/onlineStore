import { useProductsByCategory } from "../hooks/useProductsByCategory";
import {getUniqueOrderSizes} from "../utils/getUniqueOrderSizes";

export default function SortSizes({ selected, onChange }) {
    const products = useProductsByCategory();
    const sizes = getUniqueOrderSizes(products);

    function handleSelect(size) {
        const select = selected.includes(size)
            ? selected.filter(el => el !== size)
            : [...selected, size];
        onChange(select);
    };

    return (
        <ul className="flex gap-5 justify-center font-medium text-zinc-400 ">
            {sizes?.map(size =>
                <li key={size} className={`${selected?.includes(size) ? "bg-rose-100 pl-2 pr-2" : "none"} hover:text-rose-400`}>
                    <button onClick={() => handleSelect(size)}>{size}</button>
                </li>
            )}
        </ul>
    )
}
