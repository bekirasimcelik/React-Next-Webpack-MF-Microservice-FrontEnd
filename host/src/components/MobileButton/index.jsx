import React, { useState } from 'react';
import { Drawer, Button } from 'antd';
import { MenuOutlined } from '@ant-design/icons';
import NavMenu from '../NavMenu';
import styles from './styles.module.css';

const MobileButton = () => {
  const [visible, setVisible] = useState(false);

  const showDrawer = () => {
    setVisible(true);
  };

  const onClose = () => {
    setVisible(false);
  };

  return (
    <>
      <Button
        className={styles['menu__mobile-button']}
        type="primary"
        shape="circle"
        icon={<MenuOutlined />}
        onClick={showDrawer}
      />
      <Drawer
        title="Shop"
        placement="right"
        className="menu_drawer"
        onClose={onClose}
        open={visible}
      >
        <NavMenu mode="inline" />
      </Drawer>
    </>
  );
};

export default MobileButton;
