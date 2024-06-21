import React from "react";
import { Chart } from "react-google-charts";

export const SimplePieChart = () => {
  const data = [
    ["Person", "Votes"], // Encabezados de las columnas
    ["Manuel", 11],
    ["Amilcarneta", 2],
    ["Carlos y leo", 2],
    ["Picheeell", 2],
    ["Paletaa", 7],
  ];

  const options = {
    backgroundColor: "white",
    titleTextStyle: {
      color: 'white', 
    },
    legend: {
      textStyle: {
        color: '#fff', 
      },
    },
  };

  return (
    <Chart
      chartType="PieChart"
      data={data}
      options={options}
      width={"100%"}
      height={"400px"}
    />
  );
};
