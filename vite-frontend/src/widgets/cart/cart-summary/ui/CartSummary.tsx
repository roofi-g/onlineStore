import { useSelector } from "react-redux"
import { selectSelectedTotals } from "../../../../entities/cart/model/selectors";

export const CartSummary = () => {
  const { totalNumberOfSelectedProducts, totalWithoutDiscount, totalDiscount, totalWithDiscount } = useSelector(selectSelectedTotals);
  
  return (
    <div className="border-1 border-zinc-300 p-5">
      <div className="flex justify-between text-sm mb-3">
        <p>Товары <span>({totalNumberOfSelectedProducts})</span></p>
        <p>{totalWithoutDiscount} ₽</p>
      </div>
      <div className="flex justify-between text-sm mb-3">
        <p>Скидка</p>
        <p>-{totalDiscount} ₽</p>
      </div>
      <div className="flex justify-between text-xm uppercase">
        <p>к оплате</p>
        <p>{totalWithDiscount} ₽</p>
      </div>
      <button className="w-full uppercase border-2 border-zinc-200 bg-zinc-100 p-2 mt-4 hover:bg-zinc-200">Оформить заказ</button>
    </div>
  )
}