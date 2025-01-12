import React, { useState } from "react";
import { Link } from "react-router-dom";

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
      link: "/notification",
    },
    { img: "/src/assets/cart-svgrepo-com.svg", name: "Cart", link: "/cart" },
    {
      img: "/src/assets/ser-circle-svgrepo-com (1).svg",
      name: "User",
      link: "user",
    },
    { img: "/src/assets/menu-svgrepo-com.svg", name: "Menu", link: "/menu" },
  ]);

  return (
    <div className="w-full h-fit py-[20px] flex flex-row justify-center px-[10px]">
      <div className="content w-full max-w-[1440px] flex flex-row justify-between items-center">
        <img src="" alt="" />
        <div className="buttons flex flex-row gap-[10px]">
          {button.map((el, index) => {
            if (el.name === "Menu") {
              return (
                <Link to={el.link} key={index} className="flex md:hidden">
                  <button className="w-[32px] h-[32px] flex items-center justify-center rounded-full bg-white">
                    <img src={el.img} alt={el.name} />
                  </button>
                </Link>
              );
            }

            return (
              <Link to={el.link} key={index}>
                <button className="w-[32px] h-[32px] flex items-center justify-center rounded-full bg-white">
                  <img src={el.img} alt={el.name} />
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
