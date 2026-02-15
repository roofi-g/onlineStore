import { useSelector } from "react-redux";
import { selectItemTotalPrice } from "../../../entities/cart/model/selectors";

export function CartPriceDisplay({ cartItemId }: { cartItemId: string }) {
    const { price, discount, discountedPrice } = useSelector(selectItemTotalPrice(cartItemId));

    return (
        <>
            {discount
                ? <p className="text-sm">
                    <span className="line-through text-zinc-500 decoration-zinc-400 mr-2">{price + ' ₽'}</span>
                    {'-' + discount + '%'}
                    <span className="text-rose-400 ml-2">{discountedPrice + ' ₽'}</span>
                  </p>
                : <p className="text-sm">{price} ₽</p>
            }
        </>
    )
}