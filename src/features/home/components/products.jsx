import React, { useEffect, useState } from "react";
import WishButton from "../../../shared/components/wishButton";
import PlusButton from "../../../shared/components/plusButton";
import ProductCard from "./productCard";
import { useProducts } from "../../admin/componets/ProductProvider";

const Products = () => {
  const { products: contextProducts } = useProducts();
  const [productData, setProductData] = useState([]);

  useEffect(() => {
    fetch("https://dummyjson.com/products")
      .then((res) => res.json())
      .then((data) => {
        setProductData(data.products);
      });
  }, []);

  useEffect(() => {
    const storedProducts = JSON.parse(localStorage.getItem("products")) || [];
    setProductData(storedProducts);
  }, []);

  const combinedProducts = [...contextProducts, ...productData];

  return (
    <div className="w-full h-fit grid grid-cols-2 justify-items-center content-center gap-[30px] lg:grid-cols-3 xl:grid-cols-4">
      {combinedProducts.map((el, index) => (
        <ProductCard key={index} el={el} />
      ))}
    </div>
  );
};

export default Products;
