import Cart from "../../assets/icons/cart.svg";
import { useProductsByCategory } from "../catalog/hooks/useProductsByCategory";
import { getUniqueOrderSizes } from "../catalog/utils/getUniqueOrderSizes";
import {useAddToCartMutation, useGetCartQuery} from "./cartApi"
import {calcDiscount} from "../catalog/utils/calcDiscount";
import {useState} from "react";

export default function ProductCart({ elem }) {
  const products = useProductsByCategory();
  const allSizes = getUniqueOrderSizes(products);
  const normalizedProduct = elem.sizes.map(s => s.toString().toUpperCase());
  const displayedSizes = allSizes.filter(size =>
      normalizedProduct.includes(size)
  );

  const [addToCar] = useAddToCartMutation();
  const { data: cart = [] } = useGetCartQuery();
  const [show, setShow] = useState(false);

  const cartItem = cart.filter(item => item.selectProductId === elem.id);
  const cartSizes = cartItem.map(item => item.size);

  function handleAddToCart(selectProductId, size) {
    const existing = cart.find(item => item.selectProductId === selectProductId && item.size === size);

    if (!existing) {
      addToCar({ id: String(Date.now()), selectProductId, size, quantity: 1 });
    }
  }

  return (
      <div className="w-80">
        <div className="relative w-full h-110 overflow-hidden">
          <img className="w-full h-full object-cover" src={elem.image} alt="product-img"/>
          <div className="absolute bottom-3 w-full px-2">
            {!show ? (
              <button
                onMouseEnter={() => setShow(true)}
                className="flex items-center justify-center w-9 h-9 rounded-full bg-white/40 hover:bg-white/80"
              >
                <img className="w-4 h-4 object-contain" src={Cart} alt="корзина"/>
              </button>
            ) : (
              <div
                className="py-1 bg-white/80"
                onMouseLeave={() => setShow(false)}
              >
                <p className="text-sm text-center">Выберите размер</p>
                <div className="flex justify-center gap-2">
                  {displayedSizes
                    .map(size =>
                      <div key={size}>
                        <button
                            className={`${cartSizes.includes(size) ? "bg-white/100" : "" } pl-2 pr-2 hover:bg-white/100`}
                            onClick={() => handleAddToCart(elem.id, size)}
                        >{size}</button>
                      </div>
                    )}
                </div>
              </div>
            )}
          </div>
        </div>
        <div className="p-2 mb-5">
          <p className="uppercase text-sm font-medium tracking-wide">{elem.name} {elem.id}</p>
          {elem.discount
            ? <p className="text-sm">
                <span className="line-through text-zinc-500 decoration-zinc-400 mr-2">{elem.price + ' ₽'}</span>
                {'-' + elem.discount + '%'}
                <span className="text-rose-400 ml-2">{calcDiscount(elem.price, elem.discount) + ' ₽'}</span>
              </p>
            : <p className="text-sm">{elem.price} ₽</p>
          }
          {elem.isHot && <p className="text-xs">HIT</p>}
        </div>
      </div>
  )
}
