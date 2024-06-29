import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { Product } from "../types/Product";


export const productsApi = createApi({
  reducerPath: 'products',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://fakestoreapi.com/products' }),
  endpoints: (builder) => ({
    getProducts: builder.query<Product[], string>({
      query: () => `/`
    }),
    getProductById: builder.query<Product, string>({
      query: (id) => `/${id}`
    })
  })
})

export const { useGetProductsQuery, useGetProductByIdQuery } = productsApi;