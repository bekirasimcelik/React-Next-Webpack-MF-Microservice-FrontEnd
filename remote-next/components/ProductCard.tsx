import React from "react";
import { Card, Typography, Space } from "antd";
import { Product } from "../features/products/productsService";

const { Title, Text } = Typography;

type ProductCardProps = {
  product: Product;
};

export default function ProductCard({ product }: ProductCardProps) {
  return (
    <Card
      hoverable
      style={{
        width: 380,
        height: 500,
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        borderRadius: 10,
        overflow: "hidden",
        boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
        padding: 0,
      }}
    >
      {/* Image Container */}
      <div style={{ width: "100%", height: 380 }}>
        <img
          alt={product.title}
          src={product.image || "/placeholder.png"}
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
            display: "block",
          }}
        />
      </div>

      {/* Product Ingo */}
      <Space direction="vertical" style={{ padding: "16px", flex: 1 }}>
        <Title level={5} style={{
          margin: 0,
          fontSize: 14,
          whiteSpace: "nowrap",
          overflow: "hidden",
          textOverflow: "ellipsis"
        }}>
          {product.title}
        </Title>

        <Text type="secondary" style={{
          fontSize: "12px",
          whiteSpace: "nowrap",
          overflow: "hidden",
          textOverflow: "ellipsis"
        }}>
          {product.description}
        </Text>

        <Text strong style={{
          fontSize: "14px",
          whiteSpace: "nowrap",
          overflow: "hidden",
          textOverflow: "ellipsis"
        }}>
          ${product.price.toFixed(2)}
        </Text>
      </Space>
    </Card>
  );
}
