export function calcDiscount(price, disc) {
  const total = (price / 100) * disc;
  return price - total;
}
