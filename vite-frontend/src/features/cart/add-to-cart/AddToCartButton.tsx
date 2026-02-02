import { cartApi } from '../../../entities/cart';

export const AddToCartButton = ({ productId }: { productId: string }) => {
  const [addToCart, { isLoading }] = cartApi.useAddToCartMutation();

  return (
    <button
      onClick={() => addToCart({ productId })}
      disabled={isLoading}
    >
      Добавить в корзину
    </button>
  );
};