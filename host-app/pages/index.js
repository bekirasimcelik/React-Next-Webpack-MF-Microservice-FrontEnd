import Button from "../components/Button";
import { lazy, useEffect, useState } from "react";

export default function Home() {
  const [Component, setComponent] = useState(null);
  //const [RemoteButton, setRemoteButton] = useState(null);
  const [BasketApp, setBasketApp] = useState(null);
  useEffect(() => {
    if (typeof window !== "undefined") {
      //setComponent(lazy(() => import("remote/Button")));
      //setRemoteButton(lazy(() => import("remoteNext/Button")));
      setBasketApp(lazy(() => import("remote/Basket")));
    }
  }, []);

  return (
    <div style={{ padding: "2%" }}>
      <h1>Next JS and React (Host)</h1>
      <h2>Host - Button</h2>
      <Button />
      <h2>Client - Button</h2>
      {Component && <Component />}
      <h2>Next JS Remote - Button</h2>
      {/* {RemoteButton && <RemoteButton />} */}
      <h2>Basket App</h2>
      {BasketApp && <BasketApp />}
    </div>
  );
}
