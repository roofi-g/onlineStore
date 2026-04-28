import Filter from '../../features/catalog/filter/ui/Filter';
import Search from '../../features/catalog/search/ui/Search';
import Sort from '../../features/catalog/sort/ui/Sort';
import ProductsList from '../../entities/product/ui/ProductsList';
import Pagination from '../../features/catalog/pagination/ui/Pagination';
import { useSelector } from 'react-redux';
import { useActiveCategory } from '../../entities/catalog/model/useActiveCategory';
import { selectFilteredCount } from '../../features/catalog/filter/model/selectors';

export default function CatalogPage() {
  const { activeCategory } = useActiveCategory();
  const productsCount = useSelector((state) => selectFilteredCount(state, activeCategory));

  return (
    <div>
      <div className="flex justify-between items-center mt-5 mb-5">
        <Filter />
        <p>{productsCount} товарa/ов</p>
        <div className="flex gap-2">
          {/* <Search /> */}
          <Sort />
        </div>
      </div>
      <ProductsList />
      <Pagination />
    </div>
  );
};
