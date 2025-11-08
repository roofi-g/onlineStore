import {useCategoryFilter} from "../hooks/useCategoryFilter";
import {sortSizes} from "../utils/sortSizes";

export default function SortSizes({ selected, onChange }) {
    const productsByCategory = useCategoryFilter();

    const allSizes = productsByCategory.flatMap(el => el.sizes);
    const uniqueSizes = [...new Set(allSizes)];

    const listSizes = sortSizes(uniqueSizes);

    function selectSizes(size) {
        const select = selected.includes(size)
            ? selected.filter(el => el !== size)
            : [...selected, size];
        onChange(select);
    };

    return (
        <ul className="flex gap-5 justify-center font-medium text-zinc-400 ">
            {listSizes.map(size =>
                <li key={size} className={`${selected.includes(size) ? "bg-rose-100 pl-2 pr-2" : "none"} hover:text-rose-400`}>
                    <button onClick={() => selectSizes(size)}>{size}</button>
                </li>
            )}
        </ul>
    )
}
