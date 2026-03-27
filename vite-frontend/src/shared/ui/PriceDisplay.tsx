export function PriceDisplay({ basePrice, discount, discountedPrice }) {
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