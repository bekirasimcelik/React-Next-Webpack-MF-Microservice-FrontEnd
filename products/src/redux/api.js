import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
console.log(process.env.NEXT_PUBLIC_API);
export const productsApi = createApi({
  reducerPath: 'productApi',
  baseQuery: fetchBaseQuery({ baseUrl: process.env.NEXT_PUBLIC_API }),
  endpoints: (builder) => ({
    getProducts: builder.query({
      query: () => `products`,
    }),
    getProductsByOrder: builder.query({
      query: () => `products`,
    }),
  }),
});

export default productsApi;
export const { useGetProductsQuery } = productsApi;
