import React, { useEffect, useState } from "react";
import { Row, Col, Typography } from "antd";
import CartItemList from "../CartItemsList/CartItemsList";
import OrderSummary from "../OrderSummary/OrderSummary";
import { useSelector } from "react-redux";

const { Title } = Typography;

const CartPage: React.FC = () => {
  // const [cartItems, setCartItems] = useState([
  //   { id: 1, name: "Dress", price: 53.99, quantity: 1, attributes: ["Floral", "Medium"] },
  //   { id: 2, name: "T-shirt", price: 22.99, quantity: 1, attributes: ["Blue", "Medium"] },
  //   { id: 3, name: "Necklace", price: 12.99, quantity: 1, attributes: ["White", "One size"] },
  // ]);

  const {items} = useSelector((state) => state.cart); 

  useEffect(()=>{
    console.log("deneme", items)
  },[])

  // const subtotal = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);
  // const shipping = 5.0;
  // const tax = 6.33;

  return (
    <div>
      <Row gutter={32}>
        {/* Basket Images */}
        <Col xs={24} md={16}>
          {/* <CartItemList /> */}
        </Col>

        {/* Order Summary */}
        <Col xs={24} md={8}>
          {/* <OrderSummary  /> */}
        </Col>
      </Row>
    </div>
  );
};

export default CartPage;
