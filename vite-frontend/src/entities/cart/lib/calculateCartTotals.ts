import type { CartItem } from "../model/types";

export interface CartTotals {
  totalNumberOfSelectedProducts: number;
  totalWithoutDiscount: number;
  totalDiscount: number;
  totalWithDiscount: number;
}

export const calculateCartTotals = (items: CartItem[]): CartTotals => {
  return items.reduce(
    (acc, item) => {
      const quantity = item.quantity;
      const basePrice = item.price * quantity;
      const discount = item.discount || 0;
      const discountAmount = basePrice * (discount / 100);
      const finalPrice = basePrice - discountAmount;

      acc.totalNumberOfSelectedProducts += quantity;
      acc.totalWithoutDiscount += basePrice;
      acc.totalDiscount += discountAmount;
      acc.totalWithDiscount += finalPrice;

      return acc;
    },
    {
      totalNumberOfSelectedProducts: 0,
      totalWithoutDiscount: 0,
      totalDiscount: 0,
      totalWithDiscount: 0,
    }
  )
}