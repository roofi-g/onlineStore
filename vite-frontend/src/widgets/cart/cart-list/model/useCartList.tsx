import { useGetCartQuery } from "../../../../entities/cart/index.ts";
import { useGetProductsQuery } from "../../../../entities/product/index.ts";
import type { UseCartListResult, CartProduct } from "./types.ts"

export const useCartList = (): UseCartListResult => {
  const { data: cart = [], isLoading: isCartLoading } = useGetCartQuery();
  const { data: products = [], isLoading: isProductsLoading } = useGetProductsQuery();

  const isLoading = isCartLoading || isProductsLoading;

  const productsMap = new Map(products.map(p => [p.id, p]));

  const cartList: CartProduct[] = cart.map(item => ({
    ...item,
    product: productsMap.get(item.productId)
  }))

  const isEmpty = !isCartLoading && cart.length === 0;
  
  return {
    cartList,
    isLoading,
    isEmpty
  }
}