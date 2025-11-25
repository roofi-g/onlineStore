import { useGetCartQuery } from "../features/products/cartApi"

export default function CartPage() {
  const { data: items = [], isLoading } = useGetCartQuery();

  if (isLoading) return <p>Загрузка...</p>;

  return (
      <div className="flex justify-between mt-5 gap-12 mx-15">
        <div className="w-2/3">
          <div className="flex gap-3 items-center mb-6 mb-2 font-medium uppercase">
            <h2 className="text-xl font-medium uppercase">Корзина:</h2>
            <p className="text-sl text-center"><span className="mr-1">{items.length}</span>товара</p>
          </div>
          {items.map(product => (
              <div key={product.id} className="flex justify-between py-5 border-t-2 border-zinc-100">
                <div className="flex items-center">
                  <input className="mx-4 p-2 w-3 h-3
                  appearance-none border border-zinc-400 rounded
                  checked:[background-image:url('./assets/icons/check.svg')]
                  bg-size-[10px] bg-center bg-no-repeat" type="checkbox"/>
                  <img className="w-30" src={product.image} alt="img"/>
                </div>
                <div className="flex min-w-0 flex-1 flex-col justify-between ml-5">
                  <div className="flex justify-between">
                    <div>
                      <h4>{product.name}</h4>
                      <p className="text-xs text-zinc-400">{product.size}</p>
                    </div>
                    <div className="flex gap-4 items-center">
                      <div className="flex gap-2">
                        <button className="flex items-center justify-center w-7 h-7 rounded-full bg-zinc-300/20">
                          <svg className="w-6 text-zinc-400" viewBox="0 0 24 24">
                            <path d="M17 10.9997H7C6.44772 10.9997 6 11.4474 6 11.9997C6 12.552 6.44772 12.9997 7 12.9997H17C17.5523 12.9997 18 12.552 18 11.9997C18 11.4474 17.5523 10.9997 17 10.9997Z" fill="currentColor"/>
                          </svg>
                        </button>
                        <p>{product.quantity}</p>
                        <button className="flex items-center justify-center w-7 h-7 rounded-full bg-zinc-300/20">
                          <svg className="w-6 text-zinc-400" viewBox="0 0 24 24">
                            <path d="M17 11H13V7C13 6.73478 12.8946 6.48043 12.7071 6.29289C12.5196 6.10536 12.2652 6 12 6C11.7348 6 11.4804 6.10536 11.2929 6.29289C11.1054 6.48043 11 6.73478 11 7V11H7C6.73478 11 6.48043 11.1054 6.29289 11.2929C6.10536 11.4804 6 11.7348 6 12C6 12.2652 6.10536 12.5196 6.29289 12.7071C6.48043 12.8946 6.73478 13 7 13H11V17C11 17.2652 11.1054 17.5196 11.2929 17.7071C11.4804 17.8946 11.7348 18 12 18C12.2652 18 12.5196 17.8946 12.7071 17.7071C12.8946 17.5196 13 17.2652 13 17V13H17C17.2652 13 17.5196 12.8946 17.7071 12.7071C17.8946 12.5196 18 12.2652 18 12C18 11.7348 17.8946 11.4804 17.7071 11.2929C17.5196 11.1054 17.2652 11 17 11Z" fill="currentColor"/>
                          </svg>
                        </button>
                      </div>
                      <button >
                        <svg className="w-4 text-zinc-400" viewBox="0 0 24 24">
                          <path d="M23.7072 0.293153C23.5196 0.105682 23.2653 0.000366211 23.0002 0.000366211C22.735 0.000366211 22.4807 0.105682 22.2932 0.293153L12.0002 10.5862L1.70715 0.293153C1.51963 0.105682 1.26532 0.000366211 1.00015 0.000366211C0.734988 0.000366211 0.48068 0.105682 0.293153 0.293153C0.105682 0.48068 0.000366211 0.734988 0.000366211 1.00015C0.000366211 1.26532 0.105682 1.51963 0.293153 1.70715L10.5862 12.0002L0.293153 22.2932C0.105682 22.4807 0.000366211 22.735 0.000366211 23.0002C0.000366211 23.2653 0.105682 23.5196 0.293153 23.7072C0.48068 23.8946 0.734988 23.9999 1.00015 23.9999C1.26532 23.9999 1.51963 23.8946 1.70715 23.7072L12.0002 13.4142L22.2932 23.7072C22.4807 23.8946 22.735 23.9999 23.0002 23.9999C23.2653 23.9999 23.5196 23.8946 23.7072 23.7072C23.8946 23.5196 23.9999 23.2653 23.9999 23.0002C23.9999 22.735 23.8946 22.4807 23.7072 22.2932L13.4142 12.0002L23.7072 1.70715C23.8946 1.51963 23.9999 1.26532 23.9999 1.00015C23.9999 0.734988 23.8946 0.48068 23.7072 0.293153Z" fill="currentColor"/>
                        </svg>
                      </button>
                    </div>
                  </div>
                  <div className="flex justify-between">
                    <p className="text-xs text-zinc-400">1 шт</p>
                    <div className="flex gap-4">
                      <p>{product.price}<span className="ml-1">₽</span></p>
                      <svg className="w-5 text-zinc-400" viewBox="0 0 24 24">
                        <path d="M17.5 1.91653C16.3739 1.93405 15.2724 2.24839 14.3067 2.82781C13.341 3.40722 12.5453 4.2312 12 5.21653C11.4546 4.2312 10.6589 3.40722 9.6932 2.82781C8.7275 2.24839 7.62601 1.93405 6.49996 1.91653C4.7049 1.99453 3.01366 2.77979 1.79574 4.10077C0.577818 5.42175 -0.0677922 7.17106 -4.17093e-05 8.96653C-4.17093e-05 13.5135 4.78596 18.4795 8.79996 21.8465C9.69618 22.5997 10.8293 23.0126 12 23.0126C13.1706 23.0126 14.3037 22.5997 15.2 21.8465C19.214 18.4795 24 13.5135 24 8.96653C24.0677 7.17106 23.4221 5.42175 22.2042 4.10077C20.9863 2.77979 19.295 1.99453 17.5 1.91653ZM13.915 20.3165C13.3789 20.7679 12.7007 21.0154 12 21.0154C11.2992 21.0154 10.621 20.7679 10.085 20.3165C4.94696 16.0055 1.99996 11.8695 1.99996 8.96653C1.9316 7.70125 2.36632 6.46026 3.20932 5.51423C4.05232 4.5682 5.23519 3.99388 6.49996 3.91653C7.76472 3.99388 8.9476 4.5682 9.7906 5.51423C10.6336 6.46026 11.0683 7.70125 11 8.96653C11 9.23175 11.1053 9.4861 11.2929 9.67364C11.4804 9.86118 11.7347 9.96653 12 9.96653C12.2652 9.96653 12.5195 9.86118 12.7071 9.67364C12.8946 9.4861 13 9.23175 13 8.96653C12.9316 7.70125 13.3663 6.46026 14.2093 5.51423C15.0523 4.5682 16.2352 3.99388 17.5 3.91653C18.7647 3.99388 19.9476 4.5682 20.7906 5.51423C21.6336 6.46026 22.0683 7.70125 22 8.96653C22 11.8695 19.053 16.0055 13.915 20.3125V20.3165Z" fill="currentColor"/>
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
          ))}
        </div>
        <div className="w-1/3">
          <h2 className="mb-6 text-xl font-medium uppercase">Ваш заказ</h2>
          <div className="border-1 border-zinc-300 p-5">
            <div className="flex justify-between text-sm mb-3">
              <p>Товары <span>({items.length})</span></p>
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
        </div>
      </div>
  )
}
