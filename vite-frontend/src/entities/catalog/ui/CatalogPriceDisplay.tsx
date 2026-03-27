import { calcPrice } from "../../../shared/model/calcPrice";
import { PriceDisplay } from "../../../shared/ui/PriceDisplay";

export function CatalogPriceDisplay({ price, discount }) {
    const discountedPrice = calcPrice(price, discount);
    
    return <PriceDisplay basePrice={price} discount={discount} discountedPrice={discountedPrice} />
}