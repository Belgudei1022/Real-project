import React from "react";
import Advertisement from "./advertisement";
import Products from "./products";

const Main = () => {
  return (
    <div className="w-full h-fit py-[30px] flex flex-col px-[5px]">
      <Advertisement />
      <div className="content py-[20px] flex flex-col gap-[30px]  ">
        <h1 className="font-semibold text-[24px] py-[20px] md:text-[32px] ">
          Бүтээгдэхүүн
        </h1>
        <Products />
      </div>
    </div>
  );
};

export default Main;
