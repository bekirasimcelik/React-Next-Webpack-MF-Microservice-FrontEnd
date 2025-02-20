import * as React from 'react';
import { useGetProductsQuery } from '@/redux/api';
import { Col, Row, Typography, Spin } from 'antd';
import Card from './Card';

const contentStyle = {
  padding: 50,
  background: 'rgba(0, 0, 0, 0.05)',
  borderRadius: 4,
};
const content = <div style={contentStyle} />;

export default function Products({ addCard }) {
  const { data = [], error, isLoading } = useGetProductsQuery();

  return (
    <>
      <Typography.Title
        level={4}
        style={{
          margin: 10,
        }}
      >
        Products
      </Typography.Title>
      {isLoading ? (
        <Spin tip="Loading" size="large">
          {content}
        </Spin>
      ) : (
        <Row gutter={[24, 24]}>
          {data.map((item) => (
            <Col xs={24} md={12} lg={8} key={item.id}>
              <Card item={item} key={item.id} addCard={addCard} />
            </Col>
          ))}
        </Row>
      )}
    </>
  );
}
