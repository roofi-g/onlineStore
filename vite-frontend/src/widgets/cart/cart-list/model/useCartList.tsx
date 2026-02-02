import { useGetCartQuery } from "../../../../entities/cart/api/cart.api.ts";
import { useGetProductsQuery } from "../../../../entities/product/api/products.api.ts";
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