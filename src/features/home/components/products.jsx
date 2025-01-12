import React, { useEffect, useState } from "react";
import WishButton from "../../../shared/components/wishButton";
import PlusButton from "../../../shared/components/plusButton";
import ProductCard from "./productCard";

const Products = () => {
  const [productData, setProductData] = useState([]);

  useEffect(() => {
    fetch("https://dummyjson.com/products")
      .then((res) => res.json())
      .then((data) => {
        // console.log(data);
        setProductData(data.products);
      });
  }, []);

  return (
    <div className="w-full h-fit grid grid-cols-2 justify-items-center content-center gap-[30px] lg:grid-cols-3 xl:grid-cols-4">
      {productData.map((el) => (
        <ProductCard el={el} />
      ))}
    </div>
  );
};

export default Products;
