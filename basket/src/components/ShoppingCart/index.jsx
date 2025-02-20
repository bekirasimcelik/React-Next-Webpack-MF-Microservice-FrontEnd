import React from 'react';
import { useSelector } from 'react-redux';
import Card from './Card';
import { Typography, Flex } from 'antd';

const ShoppingCart = () => {
  const cards = useSelector((state) => state.basket);

  return (
    <>
      <Typography.Title
        level={2}
        style={{
          margin: 20,
          textAlign: 'center',
        }}
      >
        Shopping Card
      </Typography.Title>
      <Flex gap={24} vertical>
        {cards.map((item) => (
          <Card item={item} key={item.id} />
        ))}
      </Flex>
    </>
  );
};

export default ShoppingCart;
