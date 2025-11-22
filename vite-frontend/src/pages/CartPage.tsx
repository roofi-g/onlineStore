import { useGetCartQuery } from "../features/products/cartApi"

export default function CartPage() {
  const { data: items = [], isLoading } = useGetCartQuery();

  if (isLoading) return <p>Загрузка...</p>;

  return (
      <>
        <h1>Cart</h1>
        <div className="flex flex-wrap justify-around">
          {items.map(product => (
              <div key={product.id}>
                <img className="w-50" src={product.image} alt="img"/>
                <h4>{product.name}</h4>
                <h4>{product.price}</h4>
                {/*<button onClick={}>Удалить</button>*/}
              </div>
          ))}
        </div>
      </>
  )
}
