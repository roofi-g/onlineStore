export type { CartItem } from './model/types';

export { cartApi } from './api/cart.api';
export {
  useGetCartQuery,
  useAddToCartMutation,
  useUpdateQuantityMutation,
  useRemoveFromCartMutation
} from './api/cart.api';

// export {
//   selectCartItems,
//   selectCartTotal,
// } from './model/selectors';