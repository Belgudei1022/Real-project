import React from "react";
import Name from "./name";
import PhoneNumber from "./phoneNumber";
import Email from "./email";
import Password from "./password";
import SaveButton from "./saveButton";

const Information = () => {
  return (
    <div className="w-full h-full flex flex-col py-[40px] px-[30px] gap-[20px] md:bg-white rounded-xl md:border ">
      <img
        src="https://images.pexels.com/photos/1040881/pexels-photo-1040881.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        alt=""
        className="w-[100px] h-[100px] rounded-full"
      />
      <div className="flex flex-col gap-[10px]">
        <Name />
        <PhoneNumber />
        <Email />
        <Password />
        <SaveButton />
      </div>
    </div>
  );
};

export default Information;
