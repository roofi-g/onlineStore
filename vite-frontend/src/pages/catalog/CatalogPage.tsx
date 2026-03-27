import { useEffect, useMemo, useState } from "react";
import Filter from "../../widgets/catalog/ui/Filter";
import Sort from "../../features/catalog/sort/ui/Sort";
import { useProductsByCategory } from "../../entities/catalog/model/useProductsByCategory";
import { useFilterProducts } from "../../features/catalog/filter/model/useFilterProducts";
import { sortProducts } from "../../features/catalog/sort/model/useSortProducts";
import ProductsList from "../../entities/product/ui/ProductsList";
import { getMinMaxPrice } from "../../shared/model/getMinMaxPrice";
import { getUniqueSizes } from "../../shared/model/getUniqueSizes";

export default function CatalogPage() {
	const products = useProductsByCategory();

	const [draftFilters, setDraftFilters] = useState({
		sizes: [],
		price: null as [number, number] | null
	})

	const [appliedFilters, setAppliedFilters] = useState({
		sizes: [],
		price: null as [number, number] | null
	})

	const [sort, setSort] = useState('hot');

	const { minPrice, maxPrice } = useMemo(
		() => getMinMaxPrice(products),
		[products]
	);

	const sizes = useMemo(
		() => getUniqueSizes(products),
		[products]
	);  

	useEffect(() => {
		if (minPrice && maxPrice) {

			const range: [number, number] = [minPrice, maxPrice]

			setDraftFilters({
				sizes: [],
				price: range
			})

			setAppliedFilters({
				sizes: [],
				price: range
			})
		}

	}, [minPrice, maxPrice])

	const filteredProducts = useFilterProducts(products, appliedFilters);

	const displayed = useMemo(
		() => sortProducts(filteredProducts, sort),
		[filteredProducts, sort]
	);

	const handleApplyFilters = () => {
		setAppliedFilters(draftFilters)
	}

	return (
		<div>
			<div className="flex justify-between mt-5 mb-5">
				<Filter
					filters={draftFilters}
					setFilters={setDraftFilters}
					sizes={sizes}
					minPrice={minPrice}
					maxPrice={maxPrice}
					productsLength={filteredProducts.length}
					onApply={handleApplyFilters}
				/>
				<p>{displayed.length} товаров</p>
				<Sort
					appliedSort={sort}
					handleApplySort={setSort} />
			</div>
			<ProductsList displayed={displayed} />
		</div>
	)
}
