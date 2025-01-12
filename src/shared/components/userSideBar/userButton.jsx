import React from "react";
import { Link } from "react-router";

const UserButton = ({ data }) => {
  return (
    <Link to={data.link}>
      <button className="flex flex-row gap-[20px] items-center">
        <img src={data.image} alt="" />
        <h1>{data.text}</h1>
      </button>
    </Link>
  );
};

export default UserButton;
