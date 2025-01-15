import React from "react";

const CartItem = ({ el }) => {
  return (
    <div className="w-full h-[120px] border rounded-2xl bg-white p-[10px] px-[20px] flex flex-row justify-between">
      <div className="info w-fit h-full flex flex-row gap-[10px]">
        <img src={el.images} alt="" className="w-fit rounded-xl border " />
        <div className="w-fit h-full flex flex-col ">
          <h1 className="text-[24px] italic">{el.title}</h1>
          <p className="text-[20px] text-[#000]/40">{el.rating}</p>
        </div>
      </div>
      <div className="price flex flex-col items-end gap-[10px]">
        <h1 className="text-[24px]">$ {el.price}</h1>
        
        <p className="w-[32px] h-[32px] border border-black/60 rounded-lg flex items-center justify-center text-[18px] ">
          {el.count}
        </p>
      </div>
    </div>
  );
};

export default CartItem;
