import React from "react";
// import { Chart as ChartJS, defaults } from 'chart.js/auto'
// import { Line } from 'react-chartjs-2'
import OlympicData from "@dataAnalysis/constants/Summer-Olympic-medals-1976-to-2008.json";

export default function CantidadDatos() {
  var keyCount = Object.keys(OlympicData).length;

  return (
    <div>
      <h2>La cantidad de datos analizados es de: {keyCount}</h2>
    </div>
  );
}
