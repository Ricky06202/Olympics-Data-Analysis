import OlympicData from "@dataAnalysis/constants/Summer-Olympic-medals-1976-to-2008.json";
import { useOlympicsData } from "modules/hooks/useOlympicsData";
import { Line } from "react-chartjs-2";

export default function HombreVSMujeres() {
  const olympicsData = useOlympicsData();

  const groupedData = {};
  olympicsData.forEach((athlete) => {
    const year = athlete.Year;
    if (!year) return;
    const gender = athlete.Gender.toLowerCase();
    if (!groupedData[year]) groupedData[year] = { men: 0, women: 0 };
    groupedData[year][gender]++;
  });
  // Crear los conjuntos de datos para Chart.js
  const years = Object.keys(groupedData);
  const menData = years.map((year) => groupedData[year].men);
  const womenData = years.map((year) => groupedData[year].women);

  const chartData = {
    labels: years,
    datasets: [
      {
        label: "Hombres",
        data: menData,
        backgroundColor: "#064FF0",
        borderColor: "#064FF0",
        fill: false,
        tension: 0.4,
        pointRadius: 3,
      },
      {
        label: "Mujeres",
        data: womenData,
        backgroundColor: "#FF3030",
        borderColor: "#FF3030",
        fill: false,
        tension: 0.4,
        pointRadius: 3,
      },
    ],
  };

  return (
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
  );
}
