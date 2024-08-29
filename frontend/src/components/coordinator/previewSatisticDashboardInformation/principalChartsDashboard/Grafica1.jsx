import React from "react";
import { Chart } from "react-google-charts";

export const Grafica1 = () =>{

 const data = [
  ["Task", "Hours per Day"],
  ["Basico", 8],
  ["Tercer Ciclo", 10],
  ["Bachillerato", 12],
  
];

 const options = {
  title: "Votos de Nivel Academico",
  pieHole: 0.4,
  is3D: false,
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
      width="100%"
      height="400px"
      data={data}
      options={options}
    />
  );
}