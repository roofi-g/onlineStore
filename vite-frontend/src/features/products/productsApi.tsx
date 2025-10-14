import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const productsApi = createApi({
    reducerPath: 'productsApi',
    baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:3005/' }),
    endpoints: (builder) => ({
        getProducts: builder.query({
            query: () => 'products',
        }),
        getCategories: builder.query({
            query: () => 'categories',
        }),
    }),
});

export const { useGetProductsQuery, useGetCategoriesQuery } = productsApi;
