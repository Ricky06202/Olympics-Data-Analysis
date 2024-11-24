import React from "react";
import { Chart as ChartJS, defaults } from "chart.js/auto";
import { Pie } from "react-chartjs-2";

import { useOlympicsData } from "modules/hooks/useOlympicsData";

export default function PieMedallas({ eventName }) {
  const olympicsData = useOlympicsData();

  if (!olympicsData) {
    return (
      <p className="flex justify-center items-center p-40 text-xl">Cargando</p>
    );
  }

  const goldMedalByCountry = olympicsData.reduce((acc, item) => {
    if (
      item.Medal === "Gold" &&
      item.Event.toLowerCase() === eventName.toLowerCase()
    ) {
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
        backgroundColor: [
          "red",
          "blue",
          "yellow",
          "orange",
          "green",
          "cyan",
          "magenta",
          "purple",
          "lime",
          "lightblue",
          "pink",
        ],
        borderWidth: 1,
      },
    ],
  };

  return (
    <Pie
      data={chartData}
      options={{ plugins: { legend: { display: false } } }}
    />
  );
}
