import React from "react";

const TotalPrice = ({}) => {
  return (
    <div className="w-1/4 flex flex-col gap-[10px]">
      <h1 className="text-[20px]">
        Нийт: <span></span>
      </h1>
      <button className="bg-[#262626] w-fit px-[50px] py-[10px] rounded-xl ">
        <p className="text-white">Захиалах</p>
      </button>
    </div>
  );
};

export default TotalPrice;
