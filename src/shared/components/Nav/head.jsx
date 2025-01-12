import React, { useState } from "react";
import { Link } from "react-router-dom";
import SearchComponent from "../userSideBar/search";

const Head = () => {
  const [button, setButton] = useState([
    // {
    //   img: "/src/assets/search-svgrepo-com (1).svg",
    //   name: "Search",
    //   link: "",
    // },
    {
      img: "/src/assets/bell-svgrepo-com.svg",
      name: "Notification",
      link: "/notification",
    },
    { img: "/src/assets/cart-svgrepo-com.svg", name: "Cart", link: "/cart" },
    {
      img: "/src/assets/ser-circle-svgrepo-com (1).svg",
      name: "User",
      link: "/userinformation",
    },
    { img: "/src/assets/menu-svgrepo-com.svg", name: "Menu", link: "/menu" },
  ]);

  return (
    <div className="w-full h-fit py-[20px] flex flex-row justify-center px-[10px]">
      <div className="content w-full max-w-[1440px] flex flex-row justify-between items-center">
        <Link to="/">
          <img
            src="/src/assets/Screenshot_2025-01-06_210416-removebg-preview (1).png"
            alt="Logo"
            className="w-auto h-[35px]"
          />
        </Link>
        <div className="buttons flex flex-row gap-[10px]">
          <SearchComponent/>
          {button.map((el, index) => (
            <Link
              to={el.link}
              key={index}
              className={el.name === "Menu" ? "flex md:hidden" : ""}
            >
              <button className="w-[32px] h-[32px] flex items-center justify-center rounded-full bg-white">
                <img src={el.img} alt={el.name} />
              </button>
            </Link>
          ))}
        </div>
        
      </div>
    </div>
  );
};

export default Head;
