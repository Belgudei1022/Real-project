import React from "react";
import Head from "../../../shared/components/Nav/head";
import Category from "../../../shared/components/Nav/category";
import UserSidebar from "../../../shared/components/userSideBar/userSidebar";
import NoNotification from "../components/noNotification";

const Notification = () => {
  return (
    <div className="w-full h-screen flex flex-col px-[10px]">
      <div className="w-full h-fit flex flex-col">
        <Head />
        <Category />
      </div>
      <div className="mobile w-full h-full flex flex-col justify-center items-center  md:hidden">
        <div className="flex flex-col items-center">
          <img
            src="/src/assets/bell-svgrepo-com.svg"
            alt=""
            className="w-[70px] h-[70px]"
          />
          <h1>Мэдэгдэл хоосон байна</h1>
        </div>
      </div>
      <div className="desktop w-full h-full  justify-center hidden md:flex">
        <div className="content max-w-[1440px]  w-full h-full flex flex-row ">
          <div className="side w-1/4">
            <UserSidebar />
          </div>
          <div className="w-3/4 h-full flex flex-col justify-center items-center">
            <NoNotification />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Notification;
