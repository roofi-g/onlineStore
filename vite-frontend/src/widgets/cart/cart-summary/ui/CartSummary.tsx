export const CartSummary = () => {
  return (
    <div className="border-1 border-zinc-300 p-5">
      <div className="flex justify-between text-sm mb-3">
        <p>Товары <span>({1})</span></p>
        <p>25 996 ₽</p>
      </div>
      <div className="flex justify-between text-sm mb-3">
        <p>Скидка</p>
        <p>-5 996 ₽</p>
      </div>
      <div className="flex justify-between text-xm  uppercase">
        <p>к оплате</p>
        <p>-20 000 ₽</p>
      </div>
      <button className="w-full uppercase border-2 border-zinc-200 bg-zinc-100 p-2 mt-4 hover:bg-zinc-200">Оформить заказ</button>
    </div>
  )
}