import { useGetProductsQuery } from "../products/productsService";

export function useProducts() {
  const { data: products = [], error, isLoading } = useGetProductsQuery();
  return { products, error, isLoading };
}