export function calcPrice(price, discount) {
  const discountedPrice = price - (price / 100) * discount;
    return {
      discountedPrice,
    }
}
