import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import slugify from "slugify";
import type { Catalog } from './types';

export const catalogApi = createApi({
    reducerPath: 'catalogApi',
    baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:3005/' }),
    tagTypes: ['Catalog'],
    endpoints: (builder) => ({
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

export const { useGetCatalogQuery } = catalogApi;