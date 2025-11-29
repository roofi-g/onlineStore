import {Range} from "react-range";

export default function PriceRange({ minPrice, maxPrice, value, onChange }) {
    const handleChange = values => onChange(values);

    if (minPrice == null || maxPrice == null) return <p>Загрузка..</p>

    if (minPrice === maxPrice) maxPrice = minPrice + 1000

    return (
        <>
            <div className="flex justify-between mt-4">
                <p className="bg-zinc-100 pl-2 pr-2">от {value[0]}</p>
                <p className="bg-zinc-100 pl-2 pr-2">до {value[1]}</p>
            </div>
            <Range
                min={minPrice}
                max={maxPrice}
                values={value}
                onChange={handleChange}
                renderTrack={({ props, children }) => (
                    <div
                        {...props}
                        className="h-1 w-full bg-zinc-200 rounded-full relative mt-4 mb-4"
                    >
                        <div
                            className="absolute h-1 bg-rose-200 rounded-full"
                            style={{
                                left: `${((value[0] - minPrice) / (maxPrice - minPrice)) * 100}%`,
                                width: `${((value[1] - value[0]) / (maxPrice - minPrice)) * 100}%`,
                            }}
                        />
                        {children}
                    </div>
                )}
                renderThumb={({ props, index }) => (
                    <div
                        {...props}
                        key={index}
                        className="w-5 h-5 bg-rose-400 rounded-full shadow"
                    />
                )}
            />
        </>
    )
}
