import Check from "../../../assets/icons/check.svg";
import {useState} from "react";

export default function Sort({ appliedSort, handleApplySort }) {
    const [showSortMenu, setShowSortMenu] = useState(false);

    const sortName = [
        {type: 'hot', name: 'По популярности'},
        {type: 'new', name: 'По новизне'},
        {type: 'priseUp', name: 'Цена по возрастанию'},
        {type: 'priseDown', name: 'Цена по убыванию'},
    ]

    return (
        <div className="relative">
            <button onClick={() => setShowSortMenu(!showSortMenu)}>Сортировка</button>
            <ul className={`${showSortMenu ? "block" : "hidden"} absolute bg-white w-60 p-3 right-0`}>
                {sortName.map((el, i) =>
                    <li key={i} className="flex items-center w-full text-sm tracking-wide font-medium text-sm/6">
                        {appliedSort === el.type && (
                            <img className="size-3 flex justify-center" src={Check} alt=""/>
                        )}
                        <button className="ml-3 uppercase" onClick={() => handleApplySort(el.type)}>{el.name}</button>
                    </li>
                )}
            </ul>
        </div>
    )
}
