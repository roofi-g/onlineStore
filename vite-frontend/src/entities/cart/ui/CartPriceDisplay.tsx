import { useSelector } from "react-redux";
import { selectItemTotalPrice } from "../../../entities/cart/model/selectors";
import type { CartItemId } from "../../../features/cart/select-cart-items/model/types";
import { PriceDisplay } from "../../../shared/ui/PriceDisplay";

export function CartPriceDisplay({ cartItemId }: CartItemId) {
    const { basePrice, discount, discountedPrice } = useSelector(state => selectItemTotalPrice(state, cartItemId));

    return <PriceDisplay basePrice={basePrice} discount={discount} discountedPrice={discountedPrice} />
}