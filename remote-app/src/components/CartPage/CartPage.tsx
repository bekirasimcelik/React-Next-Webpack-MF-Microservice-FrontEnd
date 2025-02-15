import React, { useState } from "react";
import { Row, Col, Typography } from "antd";
import CartItemList from "../CartItemsList/CartItemsList";
import OrderSummary from "../OrderSummary/OrderSummary";

const { Title } = Typography;

const CartPage: React.FC = () => {
  const [cartItems, setCartItems] = useState([
    { id: 1, name: "Dress", price: 53.99, quantity: 1, attributes: ["Floral", "Medium"] },
    { id: 2, name: "T-shirt", price: 22.99, quantity: 1, attributes: ["Blue", "Medium"] },
    { id: 3, name: "Necklace", price: 12.99, quantity: 1, attributes: ["White", "One size"] },
  ]);

  const subtotal = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const shipping = 5.0;
  const tax = 6.33;

  return (
    <div>
      <Row gutter={32}>
        {/* Basket Images */}
        <Col xs={24} md={16}>
          <CartItemList cartItems={cartItems} setCartItems={setCartItems} />
        </Col>

        {/* Order Summary */}
        <Col xs={24} md={8}>
          <OrderSummary subtotal={subtotal} shipping={shipping} tax={tax} />
        </Col>
      </Row>
    </div>
  );
};

export default CartPage;
