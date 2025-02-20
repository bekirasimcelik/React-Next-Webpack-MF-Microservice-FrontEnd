import React, { useState } from 'react';
import { ShoppingCartOutlined, ProductOutlined } from '@ant-design/icons';
import { Menu } from 'antd';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import PropTypes from 'prop-types';

const items = [
  {
    label: <Link href="/">Products</Link>,
    key: '/',
    icon: <ProductOutlined />,
  },
  {
    label: <Link href="/shopping-cart">Shopping Cart</Link>,
    key: '/shopping-cart',
    icon: <ShoppingCartOutlined />,
  },
];

const NavMenu = ({ mode = 'horizontal', className = '' }) => {
  const pathName = usePathname();

  return (
    <Menu
      selectedKeys={[pathName]}
      mode={mode}
      items={items}
      className={className}
      style={{ width: '100%' }}
    />
  );
};

NavMenu.propTypes = {
  mode: PropTypes.string,
  className: PropTypes.string,
};

export default NavMenu;
