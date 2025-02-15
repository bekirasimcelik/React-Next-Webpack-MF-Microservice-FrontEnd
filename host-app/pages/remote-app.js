import { lazy, useEffect, useState } from "react";

export default function RemoteApp() {
  const [Component, setComponent] = useState(null);
  useEffect(() => {
    if (typeof window !== "undefined") {
      setComponent(lazy(() => import("remote/Button")));
    }
  }, []);

  return (
    <>
      <h1>Remote App</h1>
      {Component && <Component />}
    </>
  );
}
