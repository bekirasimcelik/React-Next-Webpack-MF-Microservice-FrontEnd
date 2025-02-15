import { lazy, useEffect, useState } from "react";

export default function RemoteApp() {
  const [Component, setComponent] = useState(null);
  useEffect(() => {
    if (typeof window !== "undefined") {
      setComponent(lazy(() => import("remote/Basket")));
    }
  }, []);

  return (
    <>
      <h1>Remote App (Remote)</h1>
      {Component && <Component />}
    </>
  );
}
