import React, { useEffect, useRef } from "react";
import { Data } from "../data/data";
import { Line } from "react-chartjs-2";
import Chart from "chart.js/auto";

function LineChart() {
  const chartRef = useRef(null);

  useEffect(() => {
    const chartInstance = chartRef.current;

    return () => {
      if (chartInstance) {
        chartInstance.destroy();
      }
    };
  }, []);

  const chartData = {
    labels: Data.map((data) => data.year),
    datasets: [
      {
        label: "Users Gained",
        data: Data.map((data) => data.userGain),
        backgroundColor: ["rgba(75, 192, 192, 0.6)"],
        borderWidth: 1,
      },
    ],
  };

  return (
    <div className="chart-container flex flex-col items-center shadow-lg gap-8 bg-white border rounded-lg p-4 md:px-8 shadow w-full lg:w-1/2">
      <h2 className="text-2xl font-semibold">Line Chart</h2>
      <Line
        ref={chartRef}
        data={chartData}
        options={{
          plugins: {
            title: {
              display: true,
              text: "Users Gained between 2016-2020",
            },
            legend: {
              display: false,
            },
          },
        }}
      />
      <span>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum quisquam
        esse sed iure, perferendis delectus magnam dolores vel hic vitae
        adipisci saepe beatae, perspiciatis facere inventore! Modi molestias hic
        et!
      </span>
    </div>
  );
}

export default LineChart;
