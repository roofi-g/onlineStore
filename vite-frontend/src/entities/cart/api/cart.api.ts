import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import type { CartItem } from '../model/types';

export const cartApi = createApi({
  reducerPath: 'cartApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'http://localhost:3005/'
  }),
  tagTypes: ['Cart'],
  endpoints: (builder) => ({
    getCart: builder.query<CartItem[], void>({
      query: () => '/cart',
      providesTags: [{ type: 'Cart', id: 'LIST' }],
    }),

    addToCart: builder.mutation({
      query: (newItem) => ({
        url: 'cart',
        method: 'POST',
        body: newItem
      }),
      invalidatesTags: ['Cart'],
    }),

    updateQuantity: builder.mutation<void, { productId: string; quantity: number; }>({
      query: ({ productId, quantity }) => ({
        url: `/cart/${productId}`,
        method: 'PATCH',
        body: { quantity }
      }),
      invalidatesTags: ['Cart'],
    }),

    removeFromCart: builder.mutation<void, string>({
      query: (id) => ({
        url: `/cart/${id}`,
        method: 'DELETE'
      }),
      invalidatesTags: [{ type: 'Cart', id: 'LIST' }],
    }),
  }),
});

export const { useGetCartQuery, useAddToCartMutation, useUpdateQuantityMutation, useRemoveFromCartMutation } = cartApi;
