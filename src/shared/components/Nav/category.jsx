import React, { useState } from "react";

const Category = () => {
  const [category, setCategory] = useState([
    {
      text: "Эрэгтэй",
    },
    {
      text: "Эмэгтэй",
    },
    {
      text: "Гэр ахуй",
    },
    {
      text: "Гоо сайхан",
    },
  ]);

  return (
    <div className="w-full h-[50px]  bg-white flex-row gap-[20px] hidden md:flex border-b-[1px] border-t-[1px] justify-center px-[10px]">
      <div className="content w-full max-w-[1440px] flex flex-row gap-[20px]">
        <button className="flex flex-row gap-[5px] items-center">
          <img src="/src/assets/menu-svgrepo-com.svg" alt="" />
          <p>Бүх</p>
        </button>
        {category.map((el) => {
          return (
            <button className="">
              <p>{el.text}</p>
            </button>
          );
        })}
      </div>
    </div>
  );
};

export default Category;
