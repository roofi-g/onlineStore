import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import Filter from "../features/catalog/filter/Filter";
import Sort from "../features/catalog/sort/Sort";
import { useProductsByCategory } from "../features/catalog/hooks/useProductsByCategory";
import { useFilterProducts } from "../features/catalog/hooks/useFilterProducts";
import { getMinMaxPrice } from "../features/catalog/utils/getMinMaxPrice";
import { sortProducts } from "../features/catalog/hooks/useSortProducts";
import ProductsList from "../features/products/ProductsList";

export default function CatalogPage(factory: () => T, deps: React.DependencyList) {
	const productsByCategory = useProductsByCategory();
	const {minPrice, maxPrice} = getMinMaxPrice(productsByCategory);

	const [appliedSort, setAppliedSort] = useState('hot');
	const [displayed, setDisplayed] = useState(productsByCategory);
	const [isFiltered, setIsFiltered] = useState(false);
	const [filters, setFilters] = useState({
		sizes: [],
		price: [0, 0],
	})

	const filteredProducts = useFilterProducts(productsByCategory, filters);

	useEffect(() => {
		if (!isFiltered)
			setDisplayed(sortProducts(productsByCategory, appliedSort));
	}, [productsByCategory, isFiltered]);

	const handleFilterChange = newFilters => {
		setFilters(prev => ({...prev, ...newFilters}))
	};

	const handleApplyFilters = () => {
		const sorted = sortProducts(filteredProducts, appliedSort)
		setDisplayed(sorted);
		setIsFiltered(true);
	}

	const handleApplySort = (type) => {
		setAppliedSort(type);
		setDisplayed(sortProducts(displayed, type));
	}

	return (
		<div>
			<div className="flex justify-between mt-5 mb-5">
				<Filter
					minPrice={minPrice}
					maxPrice={maxPrice}
					onChange={handleFilterChange}
					productsLength={filteredProducts.length}
					onApply={handleApplyFilters}
				/>
				<p>{displayed.length} товаров</p>
				<Sort appliedSort={appliedSort} handleApplySort={handleApplySort}/>
			</div>
			<ProductsList displayed={displayed}/>
		</div>
	)
}
