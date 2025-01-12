import React, { useState } from "react";

const Head = () => {
  const [button, setButton] = useState([
    {
      img: "/src/assets/search-svgrepo-com (1).svg",
      name: "Search",
    },
    {
      img: "/src/assets/bell-svgrepo-com.svg",
      name: "Notification",
    },
    { img: "/src/assets/cart-svgrepo-com.svg", name: "Cart" },
    { img: "/src/assets/ser-circle-svgrepo-com (1).svg", name: "User" },
    { img: "/src/assets/menu-svgrepo-com.svg", name: "Menu" },
  ]);

  return (
    <div className="w-full h-fit py-[20px] flex flex-row justify-center px-[10px] ">
      <div className="content w-full max-w-[1440px] flex flex-row justify-between ">
        <img src="" alt="" />
        <div className="buttons flex flex-row gap-[10px]">
          {button.map((el) => {
            return (
              <button className="w-[32px] h-[32px] flex items-center justify-center rounded-full bg-white">
                <img src={el.img} alt="" />
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Head;
