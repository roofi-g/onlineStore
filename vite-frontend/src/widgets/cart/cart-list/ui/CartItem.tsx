import { Сheckbox } from '../../../../features/cart/checkbox/ui/checkbox';
import { PriceDisplay } from '../../../../features/cart/components/PriceDisplay';
import { Favourites } from '../../../../features/cart/favourites/ui/Favourites';
import { Quantity } from '../../../../features/cart/quantity/ui/Quantity';
import { RemoveToCart } from '../../../../features/cart/remove-from-cart/ui/RemoveToCart';
import type { CartItemCardProps } from '../model/types';


export const CartItemCard = ({ cartItem }: CartItemCardProps) => {
  return (
    <>
      <div className="flex justify-between py-5 border-t-2 border-zinc-100">
        <div className="flex items-center">
          <Сheckbox />
          <img className="w-30" src={cartItem.product?.image} alt="img"/>
        </div>

        <div className="flex min-w-0 flex-1 flex-col justify-between ml-5">
          <div className="flex justify-between">
            <div>
              <h4>{cartItem.product?.name}</h4>
              <p className="text-xs text-zinc-400">{cartItem.size}</p>
            </div>
            <div className="flex gap-4 items-center">
              <div className="flex gap-2">
                <Quantity item={cartItem} />
              </div>
              <RemoveToCart cartItemId={cartItem.id} />
            </div>
          </div>

          <div className="flex justify-between">
            <p className="text-xs text-zinc-400">1 шт</p>
            <div className="flex gap-4">
              <PriceDisplay price={cartItem.product?.price} discount={cartItem.product?.discount} />
              <Favourites />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
