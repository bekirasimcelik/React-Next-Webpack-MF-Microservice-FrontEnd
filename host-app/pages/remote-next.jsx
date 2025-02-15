import React from "react";
import { lazy, useEffect, useState } from "react";

export default function RemoteNext() {
  const [RemoteButton, setRemoteButton] = useState(null);
  useEffect(() => {
    if (typeof window !== "undefined") {
      setRemoteButton(lazy(() => import("remoteNext/Products")));
    }
  }, []);
  return (
    <>
      <h1>Remote Next</h1>
      {RemoteButton && <RemoteButton />}
    </>
  );
}
