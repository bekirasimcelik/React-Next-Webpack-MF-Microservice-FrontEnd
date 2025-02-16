import React from "react";
import { useGetProductsQuery } from "./productsService";

export function withProducts<T>(Component: React.ComponentType<T>) {
  return function WrappedComponent(props: Omit<T, "products" | "isLoading" | "error">) {
    const { data: products = [], error, isLoading } = useGetProductsQuery();
    return <Component {...(props as T)} products={products} isLoading={isLoading} error={error} />;
  };
}
