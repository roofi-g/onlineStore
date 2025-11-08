import {useEffect, useState} from "react";
import SortSizes from "./SortSizes";
import PriceRange from "./PriceRange";

export default function Filter({ minPrice, maxPrice, onChange, productsLength, onApply }) {
    const [showFilterMenu, setShowFilterMenu] = useState(false);
    const [selectedSize, setSelectedSize] = useState([]);
    const [priceRange, setPriceRange] = useState([minPrice, maxPrice]);

    useEffect(() => {
        if (minPrice && maxPrice) {
            setPriceRange([minPrice, maxPrice])
        }
    }, [minPrice, maxPrice]);

    useEffect(() => {
        onChange({ sizes: selectedSize, price: priceRange });
    }, [selectedSize, priceRange])

    return (
        <div>
            <button onClick={() => setShowFilterMenu(!showFilterMenu)}>Фильтры</button>
            <div className={`${showFilterMenu ? "block" : "hidden"} absolute bg-white w-90 p-5 left-10 border flex flex-col`}>
                <div>
                    <h4 className="font-semibold tracking-wider">Размер</h4>
                    <SortSizes
                        selected={selectedSize}
                        onChange={setSelectedSize} />
                </div>
                <div>
                    <h4 className="font-semibold tracking-wider">Цена</h4>
                    <PriceRange
                        minPrice={minPrice}
                        maxPrice={maxPrice}
                        value={priceRange}
                        onChange={setPriceRange}
                    />
                </div>
                <button onClick={onApply} className="border-2 border-zinc-200 bg-zinc-100 p-2 mt-4 hover:bg-zinc-200">Показать {productsLength} товара/ов</button>
            </div>
        </div>
    )
}
