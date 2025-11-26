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
      query: (newItem) => ({
        url: 'cart',
        method: 'POST',
        body: newItem
      }),
      invalidatesTags: ['Cart'],
    }),
    removeToCart: builder.mutation({
      query: (id) => ({
        url: `cart/${id}`,
        method: 'DELETE'
      }),
      invalidatesTags: ['Cart'],
    }),
  }),
});

export const { useGetCartQuery, useAddToCartMutation, useRemoveToCartMutation } = cartApi;
