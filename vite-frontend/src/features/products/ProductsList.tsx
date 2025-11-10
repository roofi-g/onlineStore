import ProductCart from "./ProductCart";

export default function ProductsList({ displayed }) {
  return (
      <div className="flex flex-wrap justify-between">
        {displayed
            .map(product => <ProductCart key={product.id} elem={product}/>)
        }
      </div>
  )
}
