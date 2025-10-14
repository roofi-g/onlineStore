import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const productsApi = createApi({
    reducerPath: 'productsApi',
    baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:3005/' }),
    endpoints: (builder) => ({
        getProducts: builder.query({
            query: () => 'products',
        }),
        getCatalog: builder.query({
            query: () => 'catalog',
        }),
    }),
});

export const { useGetProductsQuery, useGetCatalogQuery } = productsApi;
