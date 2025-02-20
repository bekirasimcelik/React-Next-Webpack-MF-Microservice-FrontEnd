import { lazy, useEffect, useState } from "react";
import dynamic from "next/dynamic";

const Welcome = dynamic(() => import("../components/Welcome"), { ssr: false });

export default function Home() {
  // const [Component, setComponent] = useState(null);
  //const [RemoteButton, setRemoteButton] = useState(null);
  // const [BasketApp, setBasketApp] = useState(null);
  useEffect(() => {
    if (typeof window !== "undefined") {
      //setComponent(lazy(() => import("remote/Button")));
      //setRemoteButton(lazy(() => import("remoteNext/Button")));
      // setBasketApp(lazy(() => import("remote/Basket")));
      // setComponent(lazy(() => import("remoteNext/ProductList")));
    }
  }, []);

  return (
    <div style={{ padding: "2%" }}>
      <Welcome />
    </div>
  );
}
