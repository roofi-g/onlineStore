import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const cartApi = createApi({
  reducerPath: 'cartApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:3005/' }),
  tagTypes: ['Cart'],
  endpoints: (builder) => ({
    getCart: builder.query({
      query: () => 'cart',
      providesTags: ['Cart'],
    }),
    addToCart: builder.mutation({
      query: (product) => ({
        url: 'cart',
        method: 'POST',
        body: { ...product, quantity: 1 },
        // body: { productId: product.id, size: product.sizes, quantity: 1 },
      }),
      invalidatesTags: ['Cart'],
    }),
    // removeToCart: builder.mutation({
    //   query: (product) => ({
    //     url: 'cart',
    //     method: 'DELETE',
    //     body: { ...product, quantity: 1 },
    //   }),
    //   invalidatesTags: ['Cart'],
    // }),
  }),
});

export const { useGetCartQuery, useAddToCartMutation, useRemoveToCartMutation } = cartApi;
