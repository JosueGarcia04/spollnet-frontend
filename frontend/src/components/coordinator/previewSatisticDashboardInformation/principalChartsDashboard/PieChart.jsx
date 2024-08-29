import React  from "react";
import { Chart } from "react-google-charts";

export const PieChart = () => {

  const data = [
    ["Task", "Hours per Day"],
    ["Work", 11],
    ["Eat", 2],
    ["Commute", 2],
    ["Watch TV", 2],
    ["Sleep", 7],
  ];
  
  const options = {
    title: "Conteo de Partidos",
    is3D: true,
    backgroundColor: "#000",
    titleTextStyle: {
      color: 'white',
    },
    legend: {
      position: 'right',
      textStyle: {
        color: '#fff',
      }
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
