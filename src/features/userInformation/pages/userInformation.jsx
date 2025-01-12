import React from "react";
import Head from "../../../shared/components/Nav/head";
import Category from "../../../shared/components/Nav/category";
import Information from "../components/information";
import UserSidebar from "../../../shared/components/userSideBar/userSidebar";

const UserInformation = () => {
  return (
    <div className=" w-full h-screen flex flex-col bg-[#f6f6f6]  ">
      <Head />
      <Category />
      <div className="mobile w-full h-full px-[10px] flex flex-col gap-[40px]  md:hidden">
        <h1 className="text-[20px]">Хувийн мэдээлэл</h1>
        <div className="w-full h-full flex ">
          <Information />
        </div>
      </div>
      <div className="desktop w-full h-full  justify-center hidden md:flex">
        <div className="content max-w-[1440px] w-full h-full flex flex-row ">
          <div className="side w-1/4">
            <UserSidebar />
          </div>
          <div className="w-3/4 flex justify-center items-center">
            <Information />
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserInformation;
