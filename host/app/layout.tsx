import "../assets/styles/main.scss";

import React, { Suspense, useState } from "react";
import SubNav from "./subnav";

interface LayoutProps {
  children: React.ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <>
      <SubNav />
      <div className="container mt-4">{children}</div>
    </>
  );
};

export default Layout;
