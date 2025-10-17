import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import slugify from "slugify";

export const productsApi = createApi({
    reducerPath: 'productsApi',
    baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:3005/' }),
    tagTypes: ['Products', 'Catalog'],
    endpoints: (builder) => ({
        getProducts: builder.query({
            query: () => 'products',
            providesTags: ['Products'],
        }),
        getCatalog: builder.query({
            query: () => 'catalog',
            providesTags: ['Catalog'],
            transformResponse: (response) =>
                response.map((catalog) => ({
                    ...catalog,
                    slug: slugify(catalog.name, { lower: true, strict: true, locale: "ru" }),
                })),
        }),
    }),
});

export const { useGetProductsQuery, useGetCatalogQuery } = productsApi;
