import { calcPrice } from "../../../shared/model/calcPrice";

export function PriceDisplay({ price, discount }) {
    const { discountedPrice } = calcPrice(price, discount);
    
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