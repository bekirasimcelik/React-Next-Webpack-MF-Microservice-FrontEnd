import React from "react";
import { Layout } from "antd";
import PageHeader from "./components/PageHeader/PageHeader";
import CartPage from "./components/CartPage/CartPage";

const { Content } = Layout;

const App = () => {
  return (
    <>
      <PageHeader title="Shopping Cart" />
      <Layout>
        <Content>
          <CartPage />
        </Content>
      </Layout>
    </>
  );
};

export default App;
