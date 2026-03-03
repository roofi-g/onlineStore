export interface CartItem {
  id: string,
  productId: string;
  size: string,
  price: number,
  discount: number,
  quantity: number;
}

export interface CartState {
  items: CartItem[];
  totalPrice: number;
}