import React, { useState } from "react";
import "./App.css";
import WishCard from "./features/wishList/components/wishCard";

function App() {
  // Sample product data
  const mockProduct = {
    id: 1,
    images: ["https://via.placeholder.com/150"], // Sample image URL
    title: "Sample Product",
    price: 19.99,
    rating: 4.5,
  };

  // Wishlist handler
  const handleWish = (item) => {
    console.log("Added to wishlist:", item);
  };

  return (
    <div className="App">
      <WishCard el={mockProduct} wishHandle={handleWish} />
    </div>
  );
}

export default App;
