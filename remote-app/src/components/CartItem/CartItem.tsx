import React from "react";
import { Card, Image, Typography, Space, InputNumber, Button } from "antd";
import { CheckCircleOutlined, DeleteOutlined } from "@ant-design/icons";
import DefaultImage from "../../assets/Images/DefaultImage.jpg";
import { useAppDispatch } from "../../../../shared/store";
import { useSelector } from "react-redux";
import { increaseQuantity, decreaseQuantity, removeItem } from "../../../../shared/store/actions/cartAction";

const { Title, Text } = Typography;

type CartItemProps = {
  id: number;
  name: string;
  image?: string;
  price: number;
  quantity: number;
  attributes?: string[];
};

const CartItem: React.FC<CartItemProps> = ({ id, name, image, price, quantity, attributes = [] }) => {
  const dispatch = useAppDispatch();

  const cartItems = useSelector((store: { cart: { items: CartItemProps[] } }) => store.cart.items);
  
  const currentItem = cartItems.find((item) => item.id === id);
  

  return (
    <Card style={{ marginBottom: 16 }}>
      <Space align="start" size="middle">
        {/* Ürün Resmi */}
        <Image width={240} height={240} src={image || DefaultImage} fallback={DefaultImage} />
        {/* Ürün Bilgileri */}
        <Space direction="vertical" style={{ flex: 1 }}>
          <Title level={5}>{name}</Title>
          <Text>{attributes.length > 0 ? attributes.join(" | ") : "No attributes available"}</Text>
          <Text strong>${price.toFixed(2)}</Text>
          <Text type="success">
            <CheckCircleOutlined style={{ marginRight: 5 }} />
            In stock
          </Text>
        </Space>
        {/* Miktar ve Silme Butonu */}
        <Space>
          <InputNumber
            min={1}
            value={currentItem?.quantity || 1}
            onChange={(value) => {
              if (value && value > 0) {
                value > (currentItem?.quantity || 1)
                  ? dispatch(increaseQuantity(id))
                  : dispatch(decreaseQuantity(id));
              }
            }}
          />
          <Button type="text" icon={<DeleteOutlined />} onClick={() => dispatch(removeItem(id))} danger />
        </Space>
      </Space>
    </Card>
  );
};

export default CartItem;
