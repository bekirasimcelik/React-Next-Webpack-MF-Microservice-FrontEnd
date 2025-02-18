import React from "react";
import { fetchProducts } from "../../store/actions/productAction";
import { useDispatch } from 'react-redux';


export function withProducts(Component) {
  return function WrappedComponent(props) {
    // const { data: products = [], error, isLoading } = useGetProductsQuery();
    // const dispatch = useAppDispatch();
    const dispatch = useDispatch()
    console.log("withProducts API response:", { products, isLoading, error });

    React.useEffect(() => {
      dispatch(fetchProducts())
      console.log("Deneme")
    }, []);

    return (
      <Component
        {...props}
        products={products || []}
        isLoading={isLoading}
        error={error}
      />
    );
  };
}
