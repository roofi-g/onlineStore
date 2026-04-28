import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useSearchParams } from 'react-router-dom';

import { useActiveCategory } from '../../../../entities/catalog/model/useActiveCategory';
import { selectAvailableSizes, selectMinMaxPrice } from '../model/selectors';
import SortSizes from './SortSizes';
import PriceRange from './PriceRange';
import { setPrice, setSizes, setSort } from '../../../../entities/catalog/model/filtersSlice';
import { useFilteredCount } from '../model/useFilteredCount';

export default function Filter() {
  const [searchParams, setSearchParams] = useSearchParams();
  const dispatch = useDispatch();
  const [open, setOpen] = useState(false);

  const { activeCategory } = useActiveCategory();
  const sizes = useSelector(state => selectAvailableSizes(state, activeCategory));
  const { minPrice, maxPrice } = useSelector(state => selectMinMaxPrice(state, activeCategory));

  const [tempSizes, setTempSizes] = useState<string[]>([]);
  const [tempPrice, setTempPrice] = useState<[number, number]>([minPrice, maxPrice]);

  const filteredCount = useFilteredCount(tempSizes, tempPrice);

  const sizesFromParams = searchParams.get('sizes');
  const minPriceFromParams = searchParams.get('minPrice');
  const maxPriceFromParams = searchParams.get('maxPrice');
  
  useEffect(() => {
    const sizes = sizesFromParams?.split(',').filter(Boolean) ?? [];
    const prices: [number, number] = [
      minPriceFromParams ? Number.parseInt(minPriceFromParams, 10) : minPrice,
      maxPriceFromParams ? Number.parseInt(maxPriceFromParams, 10) : maxPrice
    ];

    setTempSizes(sizes);
    setTempPrice(prices);

    dispatch(setSizes(sizes));
    dispatch(setPrice(prices));
  }, [activeCategory, sizesFromParams, minPriceFromParams, maxPriceFromParams, minPrice, maxPrice, dispatch]);

  const handleApply = () => {
    dispatch(setSizes(tempSizes));
    dispatch(setPrice(tempPrice));
    setOpen(false);

    setSearchParams(prev => {
      const nextParams = new URLSearchParams(prev);

      if (tempSizes.length > 0) {
        nextParams.set('sizes', tempSizes.join(','));
      } else {
        nextParams.delete('sizes');
      }

      if (tempPrice[0] !== minPrice) {
        nextParams.set('minPrice', String(tempPrice[0]));
      } else {
        nextParams.delete('minPrice');
      }

      if (tempPrice[1] !== maxPrice) {
        nextParams.set('maxPrice', String(tempPrice[1]));
      } else {
        nextParams.delete('maxPrice');
      }

      return nextParams;
    });
  };

  return (
    <div>
      <button onClick={() => setOpen(!open)}>Фильтры</button>
      {open && (
        <div className="absolute bg-white w-90 p-5 left-10 border flex flex-col z-40">
          <div>
            <h4 className="font-semibold tracking-wider">Размер</h4>
            <SortSizes
              sizes={sizes}
              selected={tempSizes}
              onChange={setTempSizes}
            />
          </div>
          <div>
            <h4 className="font-semibold tracking-wider">Цена</h4>
            <PriceRange
              minPrice={minPrice}
              maxPrice={maxPrice}
              value={tempPrice}
              onChange={setTempPrice}
            />
          </div>
          <button
            className="border-2 border-zinc-200 bg-zinc-100 p-2 mt-4 hover:bg-zinc-200"
            onClick={handleApply}
          >Показать {filteredCount} товара/ов</button>
        </div>
      )}
    </div>
  );
};
