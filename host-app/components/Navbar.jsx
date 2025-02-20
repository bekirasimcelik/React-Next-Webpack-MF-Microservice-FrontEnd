import React from "react";
import { Layout, Menu, Dropdown, Space, Input, Button, Badge } from "antd";
import {
  DownOutlined,
  ShoppingCartOutlined,
  SearchOutlined,
} from "@ant-design/icons";
import { useRouter } from "next/router";

const { Header } = Layout;

const Navbar = () => {
  const router = useRouter();
  const currencyMenu = (
    <Menu
      items={[
        { key: "1", label: "USD" },
        { key: "2", label: "EUR" },
        { key: "3", label: "GBP" },
      ]}
    />
  );

  const languageMenu = (
    <Menu
      items={[
        { key: "1", label: "English" },
        { key: "2", label: "Español" },
        { key: "3", label: "Français" },
      ]}
    />
  );

  return (
    <Layout>
      {/* Üst mavi çubuk */}
      <Header
        style={{
          background: "#007AFF",
          padding: "0 50px",
          height: "40px",
          lineHeight: "40px",
          display: "flex",
          justifyContent: "space-between",
          color: "#fff",
          fontSize: "14px",
        }}
      >
        {/* Sol taraf: Para birimi ve dil seçici */}
        <Space>
          <Dropdown overlay={currencyMenu} trigger={["click"]}>
            <a onClick={(e) => e.preventDefault()} style={{ color: "#fff" }}>
              USD <DownOutlined />
            </a>
          </Dropdown>
          <Dropdown overlay={languageMenu} trigger={["click"]}>
            <a onClick={(e) => e.preventDefault()} style={{ color: "#fff" }}>
              English <DownOutlined />
            </a>
          </Dropdown>
        </Space>

        {/* Orta: Ücretsiz kargo bilgisi */}
        <span>Free delivery on orders above $50</span>

        {/* Sağ: Geri iade ve yardım */}
        <Space>
          <a style={{ color: "#fff" }}>Returns Policy</a>
          <a style={{ color: "#fff" }}>Help & Contact</a>
        </Space>
      </Header>

      {/* Alt Navbar */}
      <Header
        style={{
          background: "#fff",
          padding: "10px 50px",
          borderBottom: "1px solid #ddd",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        {/* Sol taraf: Logo ve menü */}
        <Space size="large">
          <ShoppingCartOutlined
            style={{ fontSize: "24px", color: "#007AFF" }}
            onClick={() => router.push("/remote-app")}
          />
          <Menu
            mode="horizontal"
            defaultSelectedKeys={["1"]}
            style={{ borderBottom: "none" }}
          >
            <Menu.Item
              key="all-products"
              onClick={() => router.push("/remote-next")}
            >
              All Products
            </Menu.Item>
            <Menu.Item key="2">New Arrivals</Menu.Item>
            <Menu.Item key="3">Brands</Menu.Item>
            <Menu.Item key="4">Sale</Menu.Item>
          </Menu>
        </Space>

        {/* Orta: Arama Çubuğu */}
        <Input
          placeholder="Search"
          prefix={<SearchOutlined />}
          style={{ width: "300px", borderRadius: "4px" }}
        />

        {/* Sağ: Giriş, Kayıt Ol, Sepet */}
        <Space>
          <a>Sign in</a>
          <Button type="primary">Sign up</Button>

          <Badge count={99} overflowCount={99}>
            <ShoppingCartOutlined
              style={{ fontSize: "24px", cursor: "pointer" }}
              onClick={() => router.push("/remote-app")}
            />
          </Badge>
        </Space>
      </Header>
    </Layout>
  );
};

export default Navbar;
