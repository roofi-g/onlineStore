import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';

import { selectAppliedSort } from "../../../../entities/catalog/model/selectors";
import { setSort } from "../../../../entities/catalog/model/filtersSlice";
import Check from "../../../../app/assets/icons/check.svg";

export default function Sort() {
    const [searchParams, setSearchParams] = useSearchParams();
    const dispatch = useDispatch();
    const sort = useSelector(selectAppliedSort);
    const [open, setOpen] = useState(false);

    const sortName = [
        {type: 'hot', name: 'По популярности'},
        {type: 'new', name: 'По новизне'},
        {type: 'priceUp', name: 'Цена по возрастанию'},
        {type: 'priceDown', name: 'Цена по убыванию'},
    ]

    useEffect(() => {
        const sortFromParams = searchParams.get('order') || '';
        if (sortFromParams !== sort) {
            dispatch(setSort(sortFromParams));
        }
    }, [searchParams, dispatch, sort]);

    const toggleSortType = (type) => {
      dispatch(setSort(type));
      setOpen(false);

      setSearchParams(prev => {
        const nextParams = new URLSearchParams(prev);

        if (type) {
          nextParams.set('order', type);
        } else {
          nextParams.delete('order');
        }
        return nextParams;
      });
    }

    return (
        <div className="relative z-40">
            <button onClick={() => setOpen(!open)}>Сортировка</button>
            {open && (
              <ul className="absolute bg-white w-60 p-3 right-0">
                {sortName.map(el =>
                    <li key={el.type} className="flex items-center w-full text-sm tracking-wide font-medium text-sm/6">
                        {sort === el.type && (
                            <img className="size-3 flex justify-center" src={Check} alt=""/>
                        )}
                        <button className="ml-3 uppercase" onClick={() => toggleSortType(el.type)}>{el.name}</button>
                    </li>
                )}
              </ul>
            )}
        </div>
    )
}
