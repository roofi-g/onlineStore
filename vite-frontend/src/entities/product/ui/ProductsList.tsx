import { useSelector } from 'react-redux';
import { selectPaginatedProducts } from '../../../features/catalog/pagination/model/selectors';
import { useActiveCategory } from "../../catalog/model/useActiveCategory";
import { useGetProductsQuery } from "../model/products.api";
import ProductCard from "./ProductCart";

export default function ProductsList() {
  const { isLoading, isError } = useGetProductsQuery();
  const { activeCategory } = useActiveCategory();

  const products = useSelector((state) => selectPaginatedProducts(state, activeCategory));
   
  if (isLoading) return <div>Загрузка...</div>;
  if (isError) return <div>Ошибка загрузки товаров</div>;

  return (
    <div className="grid grid-cols-4 gap-4">
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
};
