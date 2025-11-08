import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import slugify from "slugify";
import type { Catalog } from '@/types';
import type { Products } from '@/types';

export const productsApi = createApi({
    reducerPath: 'productsApi',
    baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:3005/' }),
    tagTypes: ['Products', 'Catalog'],
    endpoints: (builder) => ({
        getProducts: builder.query<Products[], void>({
            query: () => 'products',
            providesTags: ['Products'],
        }),
        getCatalog: builder.query<Catalog[], void>({
            query: () => 'catalog',
            providesTags: ['Catalog'],
            transformResponse: (data: Catalog[]) =>
                data.map((catalog) => ({
                    ...catalog,
                    slug: slugify(catalog.name, { lower: true, strict: true, locale: "ru" }),
                })),
        }),
    }),
});

export const { useGetProductsQuery, useGetCatalogQuery } = productsApi;
