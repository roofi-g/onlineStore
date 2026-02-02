import type { CartItem } from "../../../../entities/cart/index.ts";
import type { Product } from "../../../../entities/product/index.ts";

export type CartProduct = CartItem & {
  product: Product | undefined;
};

export type UseCartListResult = {
  cartList: CartProduct[];
  isLoading: boolean;
  isEmpty: boolean;
};

export type CartItemCardProps = {
  cartItem: CartProduct;
};