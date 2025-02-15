import React from "react";
import { Row, Col, Spin, Alert } from "antd";
import ProductCard from "./ProductCard";
import { Product } from "../features/products/productsService";
import { withProducts } from "../features/products/productContainer";

type ProductListProps = {
  products: Product[];
  isLoading: boolean;
  error: any;
};

function ProductList({ products, isLoading, error }: ProductListProps) {
  if (isLoading) return <Spin tip="Loading products..." />;
  if (error) return <Alert message="Error loading products" type="error" />;

  return (
    <Row gutter={[32, 32]} justify="start">
      {products.map((product) => (
        <Col xs={24} sm={12} md={8} lg={6} key={product.id}>
          <ProductCard product={product} />
        </Col>
      ))}
    </Row>
  );
}

export default withProducts(ProductList);
