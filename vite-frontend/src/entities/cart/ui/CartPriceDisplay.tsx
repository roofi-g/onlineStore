import { useSelector } from "react-redux";
import { selectItemTotalPrice } from "../../../entities/cart/model/selectors";
import type { CartItemId } from "../../../features/cart/select-cart-items/model/types";

export function CartPriceDisplay({ cartItemId }: CartItemId) {
    const { basePrice, discount, discountedPrice } = useSelector(state => selectItemTotalPrice(state, cartItemId));

    return (
        <>
            {discount
                ? <p className="text-sm">
                    <span className="line-through text-zinc-500 decoration-zinc-400 mr-2">{basePrice + ' ₽'}</span>
                    {'-' + discount + '%'}
                    <span className="text-rose-400 ml-2">{discountedPrice + ' ₽'}</span>
                  </p>
                : <p className="text-sm">{basePrice} ₽</p>
            }
        </>
    )
}