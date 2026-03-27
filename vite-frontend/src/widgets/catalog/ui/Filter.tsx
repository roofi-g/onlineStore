import { useState } from "react";
import SortSizes from "../../../features/catalog/filter/ui/SortSizes";
import PriceRange from "../../../features/catalog/filter/ui/PriceRange";

export default function Filter({ 
    filters, 
    setFilters, 
    sizes,
    minPrice,
    maxPrice,
    productsLength, 
    onApply 
}) {
    const [open, setOpen] = useState(false);

    const handleSizeChange = (sizes) => {
        setFilters(prev => ({ ...prev, sizes }));
    };

    const handlePriceChange = (price) => {
        setFilters(prev => ({ ...prev, price }));
    };
    
    return (
        <div>
            <button onClick={() => setOpen(prev => !prev)}>Фильтры</button>

            {open && (
                <div className="absolute bg-white w-90 p-5 left-10 border flex flex-col z-40">
                    <div>
                        <h4 className="font-semibold tracking-wider">Размер</h4>
                        <SortSizes
                            sizes={sizes}
                            selected={filters.sizes}
                            onChange={handleSizeChange} />
                    </div>
                    <div>
                        <h4 className="font-semibold tracking-wider">Цена</h4>
                        {filters.price && (
                            <PriceRange
                                minPrice={minPrice}
                                maxPrice={maxPrice}
                                value={filters.price}
                                onChange={handlePriceChange}
                            />
                        )}
                    </div>
                    <button onClick={onApply} className="border-2 border-zinc-200 bg-zinc-100 p-2 mt-4 hover:bg-zinc-200">Показать {productsLength} товара/ов</button>
                </div>
            )}
        </div>
    )
}
