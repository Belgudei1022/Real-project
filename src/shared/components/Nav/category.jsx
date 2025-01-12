import React, { useState, useEffect } from "react";
import DesktopCategory from "../desktopCategory";

const Category = () => {
  const [category, setCategory] = useState([]);
  const [isDesktopCategoryVisible, setIsDesktopCategoryVisible] =
    useState(false);

  useEffect(() => {
    fetch("https://dummyjson.com/products/categories")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setCategory(data.slice(0, 10));
      });
  }, []);

  const toggleDesktopCategory = () => {
    setIsDesktopCategoryVisible(!isDesktopCategoryVisible);
  };

  return (
    <div className="w-full h-[50px] bg-white flex-row gap-[20px] hidden md:flex border-b-[1px] border-t-[1px] justify-center px-[10px]">
      <div className="content w-full max-w-[1440px] flex flex-row gap-[20px]">
        <button
          className="flex flex-row gap-[5px] items-center relative"
          onClick={toggleDesktopCategory}>
          <img src="/src/assets/menu-svgrepo-com.svg" alt="" />
          <p>Бүх</p>
        </button>
        {category.map((el, index) => {
          return (
            <button key={index} className="">
              <p>{el.name}</p>
            </button>
          );
        })}
      </div>
      {isDesktopCategoryVisible && <DesktopCategory />}
    </div>
  );
};

export default Category;
