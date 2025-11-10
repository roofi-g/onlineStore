import useSortSizes from "../hooks/useSortSizes";

export default function SortSizes({ selected, onChange }) {
    const listSizes = useSortSizes();

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
