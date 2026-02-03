import { useUpdateQuantityMutation } from '../../../../entities/cart/index'

type UseUpdateQuantityResult = {
  increase: () => void;
  decrease: () => void;
  isLoading: boolean;
}

export const useUpdateQuantity = (productId: string, cartItemQty: number): UseUpdateQuantityResult => {
  const [updateQuantity, { isLoading }] = useUpdateQuantityMutation();

  const decrease = () => {
    if (cartItemQty > 1) {
      updateQuantity({ productId, quantity: cartItemQty - 1 });
    }
  };

  const increase = () => {
    updateQuantity({ productId, quantity: cartItemQty + 1 });
  };

  return {
    decrease,
    increase,
    isLoading
  }
}