interface SortSizesProps {
  sizes: string[]
  selected: string[]
  onChange: (selected: string[]) => void
}

export default function SortSizes({ sizes, selected, onChange }: SortSizesProps) {
    if (!sizes.length) return null;

    function handleSelect(size: string) {
        const select = selected.includes(size)
            ? selected.filter(el => el !== size)
            : [...selected, size];
        onChange(select);
    };

    return (
        <ul className="flex gap-5 justify-center font-medium text-zinc-400 ">
            {sizes?.map(size =>
                <li key={size} className={`${selected?.includes(size) ? "bg-rose-100 pl-2 pr-2" : ""} hover:text-rose-400`}>
                    <button onClick={() => handleSelect(size)}>{size}</button>
                </li>
            )}
        </ul>
    )
}
