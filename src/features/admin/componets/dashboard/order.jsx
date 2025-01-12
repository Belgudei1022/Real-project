import React from 'react';

const Order = () => {
    return (
      <div className="bg-white flex items-center justify-around gap-8 shadow rounded-lg md:h-[352px] md:w-auto">
        <div className="flex justify-between flex-col p-[30px] gap-8">
          <div className="text-2xl font-semibold">Нийт захиалга</div>
          <div className="stat-value">8,400</div>
          <div className="text-gray-600">Өмнөх сараас 21% өссөн</div>
        </div>
      </div>
    );
}

export default Order;
