import React from "react";

const UserButton = ({ data }) => {
  return (
    <a href={data.link}>
      <button className="flex flex-row gap-[20px] items-center">
        <img src={data.image} alt="" />
        <h1>{data.text}</h1>
      </button>
    </a>
  );
};

export default UserButton;
