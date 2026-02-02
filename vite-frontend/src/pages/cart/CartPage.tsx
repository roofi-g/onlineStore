import { CartList } from "../../widgets/cart/cart-list/ui/CartList";
import { CartSummary } from "../../widgets/cart/cart-summary/ui/CartSummary";
// import { useGetCartQuery } from "../../entities/cart/api/cart.api"

export default function CartPage() {
  // const { data: items = [], isLoading } = useGetCartQuery();

  // if (isLoading) return <p>Загрузка...</p>;

  return (
    <div className="flex justify-between mt-5 gap-12 mx-15">
      <div className="w-2/3">
        <div className="flex gap-3 items-center mb-6 mb-2 font-medium uppercase">
          <h2 className="text-xl font-medium uppercase">Корзина:</h2>
          <p className="text-sl text-center"><span className="mr-1">1</span>товара</p>
        </div>
        <CartList />
      </div>
      <div className="w-1/3">
        <h2 className="mb-6 text-xl font-medium uppercase">Ваш заказ</h2>
        <CartSummary />
      </div>
    </div>
  )
}
