import React from "react";
import Header from "../pages/Header";
import Footer from "../pages/Footer";
import { Outlet } from "react-router-dom";
import { LazyLoadImage } from "react-lazy-load-image-component";

function Layout() {
  return (
    <div className="flex flex-col justify-between h-screen w-screen overflow-x-hidden">
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}

export default Layout;
