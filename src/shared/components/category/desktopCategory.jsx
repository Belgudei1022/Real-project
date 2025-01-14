import React, { useEffect, useState, useRef } from "react";
import CategoryNameDesktop from "./categoryNameDesktop";

const DesktopCategory = () => {
  const [categoryData, setCategoryData] = useState([]);
  const [isVisible, setIsVisible] = useState(true);
  const ref = useRef(null);

  useEffect(() => {
    fetch("https://dummyjson.com/products/categories")
      .then((res) => res.json())
      .then((data) => {
        setCategoryData(data);
      });
  }, []);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (ref.current && !ref.current.contains(event.target)) {
        setIsVisible(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [ref]);

  if (!isVisible) return null;

  return (
    <div
      ref={ref}
      className="w-[500px] h-screen border-[1px] fixed bg-white top-0 left-0 z-10 px-[50px] py-[30px]">
      <div className="w-full h-full flex flex-col gap-[5px] justify-start">
        {categoryData.map((el, index) => {
          return <CategoryNameDesktop key={index} data={el} />;
        })}
      </div>
    </div>
  );
};

export default DesktopCategory;
