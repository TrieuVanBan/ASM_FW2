import React from "react";
import { Outlet } from "react-router-dom";
import Footer from "../page/footer";
import Header from "../page/header";

type Props = {};

const LayoutWebsite = (props: Props) => {
  return (
    <div className="bg-white px-[16px] max-w-[1311px] md:px-[58px] mx-auto">
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default LayoutWebsite;
