import React from "react";
import Footer from "./Footer.js";
import { NavMenu } from "./NavMenu.js";

const DefaultLayout = ({ children }) => {
  return (
    <>
      <NavMenu />
      {children}
      <Footer />
    </>
  );
};

export default DefaultLayout;
