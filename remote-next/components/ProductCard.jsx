import React from "react";
import { Card, Typography, Space } from "antd";

const { Title, Text } = Typography;

const cardStyle = {
  width: 380,
  height: 500,
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-between",
  borderRadius: 10,
  overflow: "hidden",
  boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
  padding: 0,
  cursor: "pointer",
};

const imageContainerStyle = {
  width: "100%",
  height: 380,
  backgroundColor: "#f5f5f5",
};

const imageStyle = {
  width: "100%",
  height: "100%",
  objectFit: "contain",
  display: "block",
  mixBlendMode: "multiply",
};

const textEllipsisStyle = {
  whiteSpace: "nowrap",
  overflow: "hidden",
  textOverflow: "ellipsis",
};

const ProductCard = ({ product, onClick }) => {
  const handleImageError = (e) => {
    e.currentTarget.src = "/placeholder.png";
  };

  return (
    <Card
      hoverable
      style={cardStyle}
      onClick={onClick}
      bodyStyle={{ padding: "16px", flex: 1 }}
    >
      <div style={imageContainerStyle}>
        <img
          alt={product.title}
          src={product.image || "/placeholder.png"}
          style={imageStyle}
          onError={handleImageError}
          loading="lazy"
        />
      </div>

      <Space direction="vertical" style={{ width: "100%" }}>
        <Title level={5} style={{ ...textEllipsisStyle, margin: 0, fontSize: 14 }}>
          {product.title}
        </Title>

        <Text type="secondary" style={{ ...textEllipsisStyle, fontSize: 12, lineHeight: 1.4 }}>
          {product.description}
        </Text>

        <Text strong style={{ ...textEllipsisStyle, fontSize: 14, color: "#1890ff" }}>
          ${product.price.toFixed(2)}
        </Text>
      </Space>
    </Card>
  );
};

export default React.memo(ProductCard);
