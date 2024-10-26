import React from "react";
import { Chart as ChartJS, defaults } from "chart.js/auto";
import { Line } from "react-chartjs-2";

import OlympicData from "@dataAnalysis/constants/Summer-Olympic-medals-1976-to-2008.json";

defaults.maintainAspectRatio = true;
defaults.responsive = true;

defaults.plugins.title.display = true;
defaults.plugins.title.align = "start";
defaults.plugins.title.font.size = 20;
defaults.plugins.title.color = "black";

export default function MedallasPorPais({ countryName }) {
  const groupedData = {};
  OlympicData.forEach((data) => {
    const year = data.Year;
    const countryMedal = data.Medal.toLowerCase();
    if (!groupedData[year]) {
      groupedData[year] = { gold: 0, silver: 0, bronze: 0 };
    }
    if (data.Country === countryName) {
      groupedData[year][countryMedal]++;
    }
  });
  const years = Object.keys(groupedData);
  const countryDataGold = years.map((year) => groupedData[year].gold);
  const countryDataSilver = years.map((year) => groupedData[year].silver);
  const countryDataBronze = years.map((year) => groupedData[year].bronze);

  const chartData = {
    labels: years,
    datasets: [
      {
        label: "Oro",
        data: countryDataGold,
        backgroundColor: "Yellow",
        borderColor: "#FFD700",
        fill: false,
        tension: 0.4,
        pointRadius: 3,
      },
      {
        label: "Plata",
        data: countryDataSilver,
        backgroundColor: "Gray",
        borderColor: "#C0C0C0",
        fill: false,
        tension: 0.4,
        pointRadius: 3,
      },
      {
        label: "Bronce",
        data: countryDataBronze,
        backgroundColor: "#804A00",
        borderColor: "#CD7F32",
        fill: false,
        tension: 0.4,
        pointRadius: 3,
      },
    ],
  };
  return (
    <div className="text-center">
      <h3> Medallas ganadas a través del tiempo por {countryName}</h3>
      <Line
        data={chartData}
        option={{
          responsive: true,
          title: {
            display: true,
            text: "Participación de hombres y mujeres en las Olimpiadas",
          },
          scales: {
            xAxes: [
              {
                scaleLabel: {
                  display: true,
                  labelString: "Año",
                },
              },
            ],
            yAxes: [
              {
                scaleLabel: {
                  display: true,
                  labelString: "Número de atletas",
                },
              },
            ],
          },
        }}
      />
    </div>
  );
}
