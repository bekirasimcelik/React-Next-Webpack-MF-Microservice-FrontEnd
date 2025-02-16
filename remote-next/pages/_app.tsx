import React from "react";
import type { AppProps } from "next/app";
import ReduxProvider from "../redux/Provider";

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ReduxProvider>
      <Component {...pageProps} />
    </ReduxProvider>
  );
}
