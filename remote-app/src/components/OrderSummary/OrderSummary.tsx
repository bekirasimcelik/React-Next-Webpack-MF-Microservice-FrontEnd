import React from "react";
import { Card, Typography, Space, Button, Divider, Tooltip } from "antd";
import { QuestionCircleOutlined } from "@ant-design/icons";

const { Title, Text } = Typography;

type OrderSummaryProps = {
  subtotal: number;
  shipping: number;
  tax: number;
};

const OrderSummary: React.FC<OrderSummaryProps> = ({ subtotal, shipping, tax }) => {
  const total = subtotal + shipping + tax;

  return (
    <Card style={{ width: 300 }}>
      <Title level={4}>Order summary</Title>
      <Space direction="vertical" style={{ width: "100%" }}>
        <Space style={{ justifyContent: "space-between", display: "flex" }}>
          <Text>Subtotal</Text>
          <Text>${subtotal.toFixed(2)}</Text>
        </Space>

        <Space style={{ justifyContent: "space-between", display: "flex" }}>
          <Text>
            Shipping estimate{" "}
            <Tooltip title="Estimated shipping cost">
              <QuestionCircleOutlined />
            </Tooltip>
          </Text>
          <Text>${shipping.toFixed(2)}</Text>
        </Space>

        <Space style={{ justifyContent: "space-between", display: "flex" }}>
          <Text>
            Tax estimate{" "}
            <Tooltip title="Estimated tax based on location">
              <QuestionCircleOutlined />
            </Tooltip>
          </Text>
          <Text>${tax.toFixed(2)}</Text>
        </Space>

        <Divider />

        <Space style={{ justifyContent: "space-between", display: "flex" }}>
          <Text strong>Order total</Text>
          <Text strong>${total.toFixed(2)}</Text>
        </Space>

        <Button type="primary" block>
          Checkout
        </Button>
      </Space>
    </Card>
  );
};

export default OrderSummary;
