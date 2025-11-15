export function discount(price, disc) {
  const total = (price / 100) * disc;
  return price - total;
}
