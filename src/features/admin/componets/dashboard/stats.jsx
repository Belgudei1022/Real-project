import React from "react";


const Stats = () => {
  return (
    <div className="flex gap-4 bg-white rounded-xl  w-[30vh] lg:w-[30vh] items-center justify-center">
      <div className="shadow  py-2  rounded-lg flex flex-wrap text-start justify-center ">
        <div className="stat flex justify-center flex-col">
          <div className="stat-title">Нэвтэрсэн</div>
          <div className="stat-value">21K</div>
          <div className="stat-desc">2025 оноос хойш</div>
        </div>

        <div className="stat">
          <div className="stat-title">Хэрэглэгч</div>
          <div className="stat-value text-secondary">4,200</div>
          <div className="stat-desc text-secondary">↗︎ 40 (2%)</div>
        </div>

        <div className="stat">
          <div className="stat-title">Шинээр бүртгүүлсэн</div>
          <div className="stat-value">1,200</div>
          <div className="stat-desc">↘︎ 90 (14%)</div>
        </div>
      </div>
    </div>
  );
};

export default Stats;
