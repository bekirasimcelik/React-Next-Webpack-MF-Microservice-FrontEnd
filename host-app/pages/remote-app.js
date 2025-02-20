import { lazy, useEffect, useState } from "react";
import dynamic from "next/dynamic";

const Navbar = dynamic(() => import("../components/Navbar"), { ssr: false });

export default function RemoteApp() {
  const [Component, setComponent] = useState(null);
  useEffect(() => {
    if (typeof window !== "undefined") {
      setComponent(lazy(() => import("remote/Basket")));
    }
  }, []);

  return (
    <>
      <Navbar />
      {Component && <Component />}
    </>
  );
}
