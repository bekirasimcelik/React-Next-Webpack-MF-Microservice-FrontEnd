import '@/styles/globals.css';
import '../styles.css';
import { Provider } from 'react-redux';
import React, { Suspense } from 'react';
import { store } from '../redux/store';
import Layout from '../components/Layout';

export default function App({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <Layout>
        <Suspense fallback="Loading ...">
          <Component {...pageProps} />
        </Suspense>
      </Layout>
    </Provider>
  );
}
