import { useCartList } from '../model/useCartList';
import { CartItemCard } from './CartItem';

export const CartList = () => {
  const { cartList, isLoading, isEmpty } = useCartList();

  if (isLoading) return <p>Загрузка...</p>;
  if (isEmpty) return <p>Корзина пуста</p>;

  return cartList.map(item => <CartItemCard key={item.id} cartItem={item} />);
};
