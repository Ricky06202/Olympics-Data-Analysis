import React from "react";
import { Chart as ChartJS, defaults } from "chart.js/auto";
import { Bar } from "react-chartjs-2";

import OlympicData from "@dataAnalysis/constants/Summer-Olympic-medals-1976-to-2008.json";

defaults.maintainAspectRatio = true;
defaults.responsive = true;

defaults.plugins.title.display = true;
defaults.plugins.title.align = "start";
defaults.plugins.title.font.size = 20;
defaults.plugins.title.color = "black";

function MedallasPorOlimpiada() {
  const goldMedalByCountry = OlympicData.reduce((acc, item) => {
    if (item.Medal === "Gold") {
      acc[item.Country] = (acc[item.Country] || 0) + 1;
    }
    return acc;
  }, {});

  const dataArray = Object.entries(goldMedalByCountry).map(
    ([country, medals]) => ({
      country,
      medals,
    })
  );

  dataArray.sort((a, b) => b.medals - a.medals);

  const labels = dataArray.map((item) => item.country);
  const values = dataArray.map((item) => item.medals);

  const chartData = {
    labels,
    datasets: [
      {
        label: "Medallas de Oro",
        data: values,
        backgroundColor: ["rgba(43, 63, 229, 0.8)"],
        borderRadius: 5,
        fill: false,
      },
    ],
  };

  return (
    <div>
      <h2>Medallas de oro ganados por países hasta el 2008</h2>
      <Bar
        data={chartData}
        options={{
          indexAxis: "y", // <-- Esto cambia el eje de las etiquetas
          scales: {
            x: {
              beginAtZero: true,
            },
          },
        }}
      />
    </div>
  );
}

export default MedallasPorOlimpiada;
