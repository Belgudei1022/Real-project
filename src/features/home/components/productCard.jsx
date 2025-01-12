import React from "react";
import WishButton from "../../../shared/components/wishButton";
import PlusButton from "../../../shared/components/plusButton";
import { Link } from "react-router";

const ProductCard = ({ el }) => {
  return (
    <Link to={`/product/${el.id}`}>
      <div
        key={el.id}
        className="product w-[190px] h-[220px] border-[1px] rounded-3xl flex flex-col justify-between relative md:w-[300px] md:h-[350px]">
        <img
          src={el.images[0]}
          alt={`Image of ${el.title}`}
          className="w-full h-full rounded-3xl relative object-cover"
        />
        <h1 className="absolute max-w-[100px] left-[15px] top-[10px] italic text-[14px] md:text-[18px]">
          {el.title}
        </h1>
        <p className="text-[14px] w-fit h-[32px] flex items-center absolute right-[15px] top-[10px] px-[10px] py-[2px] bg-[#fff]/50 rounded-xl drop-shadow md:text-[18px]">
          ${el.price}
        </p>
        <p className="absolute h-[32px] w-fit right-[55px] bottom-[10px] gap-[5px] flex flex-row items-center px-[10px] py-[2px] bg-[#fff]/50 rounded-3xl drop-shadow md:text-[20px]">
          {el.rating}
          <img src="src/assets/Star.png" alt="Star Icon" />
        </p>
        <div className="buttons absolute bottom-[10px] right-[15px] flex flex-col gap-[7px]">
          <WishButton />
          <PlusButton />
        </div>
      </div>
    </Link>
  );
};

export default ProductCard;
