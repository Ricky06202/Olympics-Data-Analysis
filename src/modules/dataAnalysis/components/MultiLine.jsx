import React from 'react';
import { Chart as ChartJS, defaults } from "chart.js/auto";
import {Line} from "react-chartjs-2";
// import {
//   Chart as ChartJS,
//   CategoryScale,
//   LinearScale,
//   PointElement,
//   LineElement,
//   Title,
//   Tooltip,
//   Legend
// } from "chart.js";
import OlimpycData from "../constants/Summer-Olympic-medals-1976-to-2008.json"

defaults.maintainAspectRatio = false;
defaults.responsive = true;

defaults.plugins.title.display = true;
defaults.plugins.title.align = "start";
defaults.plugins.title.font.size = 20;
defaults.plugins.title.color = "black";

function LineGraph(){
  return (
    <div>
      <h1>Mutli Líneas</h1>
      <Line 
      data = {{
        labels: OlimpycData.map((data)=> data.Year),
        datasets: [
          {
            label: "Hombres",
            data: OlimpycData.map((data)=> data.Gender == "Men"),
            backgroundColor: "#064FF0",
            borderColor: "#064FF0",
          },
          {
            label: "Mujeres",
            data: OlimpycData.map((data)=> data.Gender == "Women"),
            backgroundColor: "#FF3030",
            borderColor: "#FF3030",
          }
        ],
      }}
      option = {{
        elements: {
          line: {
            tension: 0.5,
          },
        },
        plugins: {
          title: {
            text: "Hombres vs Mujeres en Olimpiadas"
          }
        }
      }}
      />
    </div>
  );
}

export default LineGraph;