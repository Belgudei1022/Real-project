import React from "react";
import Stats from "../componets/dashboard/stats";
import DoughnutChart from "../componets/dashboard/doughnutChart";
import Layout from "../componets/layout";
import Order from "../componets/dashboard/order";
import Profit from "../componets/dashboard/profit";

const Dashboard = () => {
  return (
    <div>
      <Layout>
        <div>
          <div
            className="p-[30px] my-36  flex flex-col w-full gap-8 lg:h-fit lg:absolute lg:ml-[50px] lg:right-0
           lg:w-5/6 lg:my-[50px] lg:flex-row"
          >
            <div className="flex flex-col gap-8 items-center  md:flex-row lg:flex-col">
              <Stats />
              <Profit />
              <Order />
            </div>
            <DoughnutChart />
          </div>
        </div>
      </Layout>
    </div>
  );
};

export default Dashboard;
