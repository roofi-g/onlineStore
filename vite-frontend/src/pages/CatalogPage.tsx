import { useGetProductsQuery } from "../features/products/productsApi";
import { useCategoryFilter } from "../features/catalog/useCategoryFilter";
import { useActiveCategory } from "../features/catalog/useActiveCategory";
import {useEffect, useState} from "react";
import Check from "../assets/icons/check.svg";

export default function CatalogPage() {
    const { activeCategory } = useActiveCategory();
    const { data: products = [] } = useGetProductsQuery();
    const [showSortMenu, setShowSortMenu] = useState(false);
    const categoryFilter = useCategoryFilter(products, activeCategory);
    const [sortedList, setSortedList] = useState([]);

    useEffect(() => {
        sortProducts('hot');
    }, [categoryFilter])

    const sortFunc = {
        hot: (a, b) => Number(b.isHot) - Number(a.isHot),
        new: (a, b) => new Date(b.create_at) - new Date(a.create_at),
        priseUp: (a, b) => b.price - a.price,
        priseDown: (a, b) => a.price - b.price,
    }

    const sortProducts = (type) => {
        const sort = [...categoryFilter].sort(sortFunc[type]);
        setSortedList(sort);
    }

    return (
        <div>
            <div className="flex justify-between mt-5 mb-5">
                <p>Фильтры</p>
                <p>{categoryFilter.length} товаров</p>
                <div className="relative">
                    <button onClick={() => setShowSortMenu(!showSortMenu)}>Сортировка</button>
                    <ul className={`${showSortMenu ? "block" : "hidden"} absolute bg-white w-50 p-4 right-0`}>
                        <li><button onClick={() => sortProducts('hot')}>По популярности</button></li>
                        <li><button onClick={() => sortProducts('new')}>По новизне</button></li>
                        <li><button onClick={() => sortProducts('priseUp')}>Цена по возрастанию</button></li>
                        <li><button onClick={() => sortProducts('priseDown')}>Цена по убыванию</button></li>
                    </ul>
                </div>
            </div>

            <div className="flex flex-wrap justify-between">
                {sortedList
                    .map(el =>
                        <div key={el.id}>
                            <img className="w-80" src={el.image} alt=""/>
                            <p>{el.name} {el.id}</p>
                            <p>{el.price}</p>
                        </div>
                    )
                }
            </div>
        </div>
    )
}
