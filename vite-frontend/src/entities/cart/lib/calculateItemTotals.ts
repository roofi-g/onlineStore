import type { CartItem } from "../model/types";

export interface ItemTotals {
  basePrice: number;
  discount: number;
  discountedPrice: number;
}

export const calculateItemTotals = (item: CartItem): ItemTotals => {
  const basePrice = item.price * item.quantity;
  const discount = item.discount || 0;
  const discountedPrice = basePrice - basePrice * (discount / 100);

  return { 
    basePrice, 
    discount, 
    discountedPrice 
  };
}