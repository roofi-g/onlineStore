import { calcDiscount } from "../../catalog/utils/calcDiscount";

export function useDiscount(price, discount) {
  const finalPrice = discount ? calcDiscount(price, discount) : price;
  return {
    finalPrice,
  }
}
