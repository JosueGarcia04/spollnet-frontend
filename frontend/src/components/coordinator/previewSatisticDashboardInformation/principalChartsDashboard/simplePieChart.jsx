import React, { useEffect, useRef, useState } from "react";
import { Chart } from "react-google-charts";

export const SimplePieChart = () => {
  const chartRef = useRef(null);
  const [chartOptions, setChartOptions] = useState({
    title: "Gráfica",
    backgroundColor: "#000",
    titleTextStyle: {
      color: 'white',
    },
    legend: {
      position: 'right', // Default position
      textStyle: {
        color: '#fff',
      },
    },
    pieSliceTextStyle: {
      color: 'white',
    },
  });

  const data = [
    ["Person", "Votes"],
    ["Manuel", 11],
    ["Amilcarneta", 2],
    ["Carlos y leo", 2],
    ["Picheeell", 2],
    ["Paletaa", 7],
  ];

  useEffect(() => {
    const handleResize = () => {
      const newOptions = { ...chartOptions };
      if (window.innerWidth < 768) {
        newOptions.legend.position = 'bottom';
      } else {
        newOptions.legend.position = 'right';
      }
      setChartOptions(newOptions);
    };

    window.addEventListener('resize', handleResize);
    handleResize(); // Call once to apply the correct styles on load

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div ref={chartRef} className="w-full relative">
      <Chart
        chartType="PieChart"
        data={data}
        options={chartOptions}
        width={"100%"}
        height={"400px"}
        className="simple-pie-chart"
      />
    </div>
  );
};
