import React from "react";
import { Layout } from "antd";
import PageHeader from "./components/PageHeader/PageHeader";
import CartPage from "./components/CartPage/CartPage";
import { Provider } from "react-redux";
import { store } from "../../shared/store";

const { Content } = Layout;

const App = () => {
  return (
    <Provider store={store}>
      <PageHeader title="Shopping Cart" />
      <Layout>
        <Content>
          <CartPage />
        </Content>
      </Layout>
      </Provider>
  );
};

export default App;
