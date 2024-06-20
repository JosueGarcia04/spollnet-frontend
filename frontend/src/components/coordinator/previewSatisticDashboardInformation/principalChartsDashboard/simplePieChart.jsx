import { Chart } from "react-google-charts";

export const SimplePieChart = () =>{
    const data = [
        ["Manuel", 11],
        ["Amilcarneta", 2],
        ["Carlos y leo", 2],
        ["picheeell", 2],
        ["paletaa", 7],
      ];
    const options = {
        backgroundColor: "#000",
        titleTextStyle: {
          color: 'white', 
        },
        legend: {
          textStyle: {
            color: '#fff', 
          },
        },
      }
    return(
        <Chart
            chartType="PieChart"
            data={data}
            options={options}
            width={"100%"}
            height={"400px"}
        />

    );
}