import React, { useEffect, useState } from "react";
import ProductCard from "./ProductCard";

const Products = ({ selectedCategory }) => {
  const [productData, setProductData] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [wishData, setWishData] = useState(
    JSON.parse(localStorage.getItem("wish")) || []
  );

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch("https://dummyjson.com/products");
        const data = await response.json();
        setProductData(data.products);
      } catch (error) {
        console.error("Failed to fetch products:", error);
      }
    };

    fetchProducts();
  }, []);

  useEffect(() => {
    if (selectedCategory) {
      const filtered = productData.filter(
        (product) => product.category === selectedCategory
      );
      console.log("Filtered Products:", filtered);
      setFilteredProducts(filtered);
    } else {
      setFilteredProducts(productData);
    }
  }, [selectedCategory, productData]);


  const handleWish = (wishItem) => {
    if (wishData.some((item) => item.id === wishItem.id)) {
      alert("This item is already in your wishlist!");
      return;
    }

    const updatedWishList = [...wishData, wishItem];
    setWishData(updatedWishList);
    localStorage.setItem("wish", JSON.stringify(updatedWishList));
  };

  return (
    <div className="w-full h-fit grid grid-cols-2 justify-items-center content-center gap-[30px] lg:grid-cols-3 xl:grid-cols-4">
      {filteredProducts.map((el, index) => (
        <ProductCard key={index} el={el} wishHandle={handleWish} />
      ))}
    </div>
  );
};

export default Products;
