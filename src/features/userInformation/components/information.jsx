import React from "react";
import Name from "./name";
import PhoneNumber from "./phoneNumber";
import Email from "./email";
import Password from "./password";
import SaveButton from "./saveButton";

const Information = () => {
  return (
    <div className="w-full h-fit flex flex-col py-[40px] px-[30px] gap-[20px] bg-white rounded-xl">
      <Name />
      <PhoneNumber />
      <Email />
      <Password />
      <SaveButton />
    </div>
  );
};

export default Information;
