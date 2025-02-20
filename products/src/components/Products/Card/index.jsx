import React from 'react';
import { Card, Flex, Button } from 'antd';
import Image from 'next/image';
import styles from './styles.module.css';

const { Meta } = Card;

const Item = ({ item, addCard }) => {
  return (
    <Card
      style={{ height: '100%' }}
      hoverable
      cover={
        <div className={styles.wrapper}>
          {' '}
          <Image style={{ objectFit: 'contain' }} fill alt="example" src={item.image} />
        </div>
      }
    >
      <Flex justify="space-between" vertical gap={16}>
        <Meta
          title={item.title}
          description={<p className={styles.description}>{item.description}</p>}
        />
        <p className="ant-card-meta-title">${item.price}</p>
        <Flex>
          <Button style={{ width: '100%' }} onClick={() => addCard(item)}>
            Add card
          </Button>
        </Flex>
      </Flex>
    </Card>
  );
};

export default Item;
