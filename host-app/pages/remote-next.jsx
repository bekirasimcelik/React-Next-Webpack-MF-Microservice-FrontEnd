// host-app/app/page.tsx
import React, { lazy, useEffect, useState } from 'react';
import { Provider } from 'react-redux';
import { store } from '../../shared/store';

export default function HomePage() {

  const [Component, setComponent] = useState(null);
  useEffect(() => {
    if (typeof window !== "undefined") {
      setComponent(lazy(() => import("remoteNext/ProductList")));
    }
  }, []);
  return (
    <Provider store={store}>
      <main>
        <h1>Products</h1>
        {Component && <Component />}
      </main>
    </Provider>
  );
}