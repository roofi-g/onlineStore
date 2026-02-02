import { useRemoveFromCartMutation } from "../../../../entities/cart/index";

type UseRemoveFromCartResult = {
  remove: () => Promise<void>;
  isLoading: boolean;
};

export const useRemoveFromCart = (productId: string): UseRemoveFromCartResult => {
  const [removeFromCart, { isLoading }] = useRemoveFromCartMutation();

  const remove = async (): Promise<void> => {
    await removeFromCart(productId).unwrap();
  };

  return {
    remove,
    isLoading
  }
}