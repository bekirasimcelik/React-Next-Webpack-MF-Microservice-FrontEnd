import React from 'react';
import { Button, Card, Flex, Typography, Row, Col } from 'antd';
import { deleteCard } from '../../../redux/features/basketSlice';
import { useDispatch } from 'react-redux';
import * as styles from './styles.module.css';

const Item = ({ item }) => {
  const dispatch = useDispatch();

  return (
    <Card
      hoverable
      className={styles.card}
      styles={{
        body: {
          padding: 0,
          overflow: 'hidden',
        },
      }}
    >
      <Flex justify="space-between">
        <img alt="card" src={item.image} className={styles.image} />
        <Flex vertical flex={1} style={{ padding: 32 }}>
          <Row gutter={[16, 16]}>
            <Col xs={24} md={20}>
              <Typography.Title level={3}>{item.title}</Typography.Title>
            </Col>
            <Col xs={24} md={4}>
              <Typography.Title level={3}>${item.price}</Typography.Title>
            </Col>
          </Row>
          <Flex justify="flex-end">
            <Button onClick={() => dispatch(deleteCard(item))}>Remove</Button>
          </Flex>
        </Flex>
      </Flex>
    </Card>
  );
};

export default Item;
