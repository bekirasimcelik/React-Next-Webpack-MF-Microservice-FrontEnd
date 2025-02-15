import React, { useState } from "react";
import { Button, Typography } from "antd";
import CategoryFilter from "../components/CategoryFilter";
import ProductList from "../components/ProductList";

const { Title } = Typography;

export default function ProductsPage() {
  const [selectedCategory, setSelectedCategory] = useState("All");

  return (
    <div style={{ padding: "20px" }}>
      <Title level={2}>Men's T-shirts</Title>
      <CategoryFilter
        categories={["All", "T-shirts", "Shirts", "Cardigans", "Jackets", "Sweatshirts"]}
        selectedCategory={selectedCategory}
        onSelect={setSelectedCategory}
      />
      <ProductList />
      <Button type="primary" block style={{ marginTop: "20px" }}>
        Load more products
      </Button>
    </div>
  );
}
