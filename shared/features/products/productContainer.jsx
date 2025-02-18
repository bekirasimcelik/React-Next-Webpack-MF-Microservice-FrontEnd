import React from 'react';
import { useGetProductsQuery } from './productsService';
import { useAppDispatch } from '../../store/store';

export function withProducts(Component) {
  return function WrappedComponent(props) {
    const { data: products = [], error, isLoading } = useGetProductsQuery();
    const dispatch = useAppDispatch();

    React.useEffect(() => {
      if (products.length > 0) {
        console.log("Products loaded");
      }
    }, [products, dispatch]);

    return (
      <Component 
        {...props} 
        products={products} 
        isLoading={isLoading} 
        error={error} 
      />
    );
  };
}