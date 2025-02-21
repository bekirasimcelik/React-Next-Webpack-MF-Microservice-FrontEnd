// ProductList.js
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { useAppDispatch } from "../../shared/store";
import { addToCart } from "../../shared/store/actions/cartAction";
import ProductCard from "./ProductCard";
import { fetchProducts } from "../../shared/store/actions/productAction";

const ProductListInternal = () => {
  const { products=[], isloading, error } = useSelector((store) => store.products);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchProducts());
    console.log(products)
  }, []);

  const handleProductSelect = (product) => {
    dispatch(
      addToCart({
        id: product.id,
        name: product.title,
        price: product.price,
        quantity: 1,
        image: product.image,
      })
    );

    console.log("Added to cart:", product.title);
  };

  return (
    <div style={{ display: "flex", gap: 16, flexWrap: "wrap" }}>
      {products.map((product) => (
        <ProductCard
          key={product.id}
          product={product}
          onClick={() => handleProductSelect(product)}
        />
      ))}
    </div>
  );
};

export default ProductListInternal;
