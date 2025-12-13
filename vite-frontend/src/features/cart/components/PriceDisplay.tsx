import { useDiscount } from "../hooks/useDiscount";

export function PriceDisplay({ price, discount }) {
    const { finalPrice } = useDiscount(price, discount);
    return (
        <>
            {discount
                ? <p className="text-sm">
                    <span className="line-through text-zinc-500 decoration-zinc-400 mr-2">{price + ' ₽'}</span>
                    {'-' + discount + '%'}
                    <span className="text-rose-400 ml-2">{finalPrice + ' ₽'}</span>
                </p>
                : <p className="text-sm">{price} ₽</p>
            }
        </>
    )
}