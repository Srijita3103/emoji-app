import React from "react";
import { Outlet } from "react-router-dom";
import Header from "./Header/Index";
import Footer from "./Footer/Index";
import CartTab from "./cartTab";
import { useSelector } from "react-redux";

const Layout = () => {
  const statusTabCart = useSelector((store) => store.cart.statusTab);
  return (
    <div className="">
      <main
        className={`w-[1100px] max-w-full m-auto p-5 transform transition-transform duration-500
          ${statusTabCart === false ? "" : "-translate-x-56"}`}
      >
        <Header />
        <Outlet />
        <Footer />
      </main>
      <CartTab />
    </div>
  );
};

export default Layout;
