import React from "react";
import Head from "./Nav/head";
import Footer from "./footer";
import Category from "./Nav/category";

const Layout = ({ children }) => {
  return (
    <div>
      <nav>
        <Head />
        <Category />
      </nav>
      <main>{children}</main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
};

export default Layout;
