import React from "react";
import { Card, Image, Typography, Space, InputNumber, Button } from "antd";
import { CheckCircleOutlined, DeleteOutlined } from "@ant-design/icons";
import DefaultImage from "../../assets/Images/DefaultImage.jpg";

const { Title, Text } = Typography;

type CartItemProps = {
  id: number;
  name: string;
  image?: string;
  price: number;
  quantity: number;
  attributes: string[];
  onRemove: (id: number) => void;
  onQuantityChange: (id: number, quantity: number) => void;
};

const CartItem: React.FC<CartItemProps> = ({
  id,
  name,
  image,
  price,
  quantity,
  attributes,
  onRemove,
  onQuantityChange,
}) => {
  return (
    <Card style={{ marginBottom: 16 }}>
      <Space align="start" size="middle">
        {/* Product Image */}
        <Image width={240} height={240} src={image || DefaultImage} fallback={DefaultImage} />

        {/* Product Info */}
        <Space direction="vertical" style={{ flex: 1 }}>
          <Title level={5}>{name}</Title>
          <Text>{attributes.join(" | ")}</Text>
          <Text strong>${price.toFixed(2)}</Text>
          <Text type="success">
            <CheckCircleOutlined style={{ marginRight: 5 }} />
            In stock
          </Text>
        </Space>

        {/* Amount Info and Delete */}
        <Space>
          <InputNumber
            min={1}
            value={quantity}
            onChange={(value) => onQuantityChange(id, value || 1)}
          />
          <Button
            type="text"
            icon={<DeleteOutlined />}
            onClick={() => onRemove(id)}
            danger
          />
        </Space>
      </Space>
    </Card>
  );
};

export default CartItem;
