import React from 'react';

const Profit = () => {
    return (
      <div className="bg-white flex items-center justify-around gap-8 shadow rounded-lg md:h-[352px] lg:w-[30vh]">
        <div className="flex justify-between flex-col p-[30px] gap-8">
          <div className="text-2xl font-semibold">Нийт ашиг</div>
          <div className="stat-value">97,400,84₮</div>
          <div className="text-gray-600">өмнөх сараас 19% өссөн</div>
        </div>
      </div>
    );
}

export default Profit;
