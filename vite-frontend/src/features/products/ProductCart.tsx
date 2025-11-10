import Cart from "../../assets/icons/cart.svg";
import {discount} from "../catalog/utils/discount";
import {useState} from "react";
import useSortSizes from "../catalog/hooks/useSortSizes";
import {useDispatch} from "react-redux";
import { addToCart } from "./productsSlice"

export default function ProductCart({ elem }) {
  const [show, setShow] = useState(false);
  const sizes = useSortSizes();
  const dispatch = useDispatch();

  function handleAddToCart(size) {
    dispatch(addToCart(elem));
    localStorage.setItem('cart', JSON.stringify(elem));
  }

  return (
      <div className="w-80">
        <div className="relative w-full h-110 overflow-hidden">
          <img className="w-full h-full object-cover" src={elem.image} alt="product-img"/>
          <div className="absolute bottom-3 w-full px-2">
            {!show ? (
                <button onClick={() => setShow(true)} className="flex items-center justify-center w-9 h-9 rounded-full bg-white/40 hover:bg-white/80">
                  <img className="w-4 h-4 object-contain" src={Cart} alt="корзина"/>
                </button>
            ) : (
                <div className="py-1 bg-white/80">
                  <p className="text-sm text-center">Выберите размер</p>
                  <div className="flex justify-center gap-2">
                    {sizes
                        .filter(size => elem.sizes.includes(size))
                        .map(size =>
                        <div key={size}>
                          <button onClick={() => handleAddToCart(size)} className="w-6 hover:bg-white/100">{size}</button>
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
                <span className="text-rose-400 ml-2">{discount(elem.price, elem.discount) + ' ₽'}</span>
              </p>
            : <p className="text-sm">{elem.price} ₽</p>
          }
          {elem.isHot && <p className="text-xs">HIT</p>}
        </div>
      </div>
  )
}
