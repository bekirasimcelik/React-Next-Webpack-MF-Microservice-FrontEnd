'use client';
import React from "react";
import { lazy, useEffect, useState } from "react";
import { Provider } from 'react-redux';
import { store } from 'shared/store/store';



export default function RemoteNext() {
  const [ProductList, setProductList] = useState(null);
  useEffect(() => {
    if (typeof window !== "undefined") {
      setProductList(lazy(() => import("remoteNext/ProductList")));
    }
  }, []);
  return (
    <Provider store={store}>
      <main>
        <h1>E-commerce Platform</h1>
        {ProductList && <ProductList />}
      </main>
    </Provider>
  );
}