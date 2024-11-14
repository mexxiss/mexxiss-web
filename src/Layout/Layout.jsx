import React from "react";
import { Outlet } from "react-router-dom";
import Header from "../Components/Header/Header";
import Footer from "../Components/Footer/Footer.jsx";

const Layout = () => {
  return (
    <div>
      <Header />
      <main className={`main `}>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
