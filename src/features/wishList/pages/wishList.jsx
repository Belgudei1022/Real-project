import React, { useState } from "react";
import Head from "../../../shared/components/Nav/head";
import Category from "../../../shared/components/Nav/category";
import UserSidebar from "../../../shared/components/userSideBar/userSidebar";
import NoWish from "../components/noWish";
import Layout from "../../../shared/components/layout";
import ProductCard from "../../home/components/productCard";

const WishList = () => {
  const [wishData, setWishData] = useState([]);

  const getData = () => {};

  return (
    <Layout>
      <div className="w-full h-screen flex flex-col px-[10px]">
        <div className="mobile w-full h-full flex flex-col justify-center items-center  md:hidden">
          <NoWish />
        </div>
        <div className="desktop w-full h-full  justify-center hidden md:flex">
          <div className="content max-w-[1440px] w-full h-full flex flex-row gap-[20px]">
            <div className="side w-1/4">
              <UserSidebar />
            </div>
            <div className="w-3/4 h-full flex flex-col justify-center items-center">
              {wishData.length == 0 ? (
                <NoWish />
              ) : (
                wishData.map((el) => {
                  <ProductCard el={el} />;
                })
              )}
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default WishList;
