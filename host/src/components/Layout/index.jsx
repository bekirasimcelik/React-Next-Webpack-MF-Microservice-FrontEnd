import React from 'react';
import { Layout, theme, Drawer, Button, Badge } from 'antd';
import { useSelector } from 'react-redux';
import styles from './styles.module.css';
import { ShoppingCartOutlined } from '@ant-design/icons';
import Link from 'next/link';
import NavMenu from '../NavMenu';
import MobileButton from '../MobileButton';

const { Header, Content, Footer } = Layout;

const CommonLayout = ({ children }) => {
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();

  const length = useSelector((state) => state.basket?.length || 0);

  return (
    <Layout style={{ gap: 24 }}>
      <Header className={styles.header}>
        <NavMenu className={styles.menu} />
        <Link href={'/shopping-cart'}>
          <Badge count={length}>
            <ShoppingCartOutlined style={{ fontSize: '20px' }} size={'medium'} />
          </Badge>
        </Link>
        <MobileButton />
      </Header>
      <Content
        style={{
          padding: '0 48px',
        }}
      >
        <div
          style={{
            background: colorBgContainer,
            minHeight: 280,
            padding: 24,
            borderRadius: borderRadiusLG,
          }}
        >
          {children}
        </div>
      </Content>
      <Footer
        style={{
          textAlign: 'center',
        }}
      >
        Ant Design ©{new Date().getFullYear()} Created by Ant UED
      </Footer>
    </Layout>
  );
};
export default CommonLayout;
