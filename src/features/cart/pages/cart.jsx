import React from "react";
import Head from "../../../shared/components/Nav/head";
import Category from "../../../shared/components/Nav/category";
import UserSidebar from "../../../shared/components/userSideBar/userSidebar";
import NoItem from "../components/noItem";

const Cart = () => {
  return (
    <div className="w-full h-screen flex flex-col px-[10px]">
      <Head />
      <Category />
      <div className="desktop w-full h-full justify-center hidden md:flex">
        <div className="content max-w-[1440px]  w-full h-full flex flex-row ">
          <div className="side w-1/4">
            <UserSidebar />
          </div>
          <div className="w-3/4 h-full flex flex-col justify-center items-center">
            <NoItem />
          </div>
        </div>
      </div>
      <div className="mobile w-full h-full flex flex-col justify-center items-center  md:hidden">
        <NoItem />
      </div>
    </div>
  );
};

export default Cart;
