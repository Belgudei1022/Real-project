import React, { useState } from "react";
import { Link, Links } from "react-router";

const Head = () => {
  const [button, setButton] = useState([
    {
      img: "/src/assets/search-svgrepo-com (1).svg",
      name: "Search",
      link: "",
    },
    {
      img: "/src/assets/bell-svgrepo-com.svg",
      name: "Notification",
      link: "notification",
    },
    { img: "/src/assets/cart-svgrepo-com.svg", name: "Cart", link: "cart" },
    {
      img: "/src/assets/ser-circle-svgrepo-com (1).svg",
      name: "User",
      link: "user",
    },
    { img: "/src/assets/menu-svgrepo-com.svg", name: "Menu", link: "menu" },
  ]);

  return (
    <div className="w-full h-fit py-[20px] flex flex-row justify-center px-[10px] ">
      <div className="content w-full max-w-[1440px] flex flex-row justify-between ">
        <img src="" alt="" />
        <div className="buttons flex flex-row gap-[10px]">
          {button.map((el) => {
            return (
              <Link to={el.link}>
                <button className="w-[32px] h-[32px] flex items-center justify-center rounded-full bg-white">
                  <img src={el.img} alt="" />
                </button>
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Head;
