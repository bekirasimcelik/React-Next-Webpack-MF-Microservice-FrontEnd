import { useGetProductsQuery } from "../products/productsService";

export function useProducts() {
  const { data: products, error, isLoading } = useGetProductsQuery();

  console.log("Fetching products...");
  console.log("isLoading:", isLoading);
  console.log("Error:", error);
  console.log("Products data:", products);

  return { products: products || [], error, isLoading };
}
