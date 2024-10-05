import React from 'react'
import { Chart as ChartJS, defaults } from 'chart.js/auto'
import { Line } from 'react-chartjs-2'
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
import OlimpycData from '../constants/Summer-Olympic-medals-1976-to-2008.json'

defaults.maintainAspectRatio = true
defaults.responsive = true

defaults.plugins.title.display = true
defaults.plugins.title.align = 'start'
defaults.plugins.title.font.size = 20
defaults.plugins.title.color = 'black'

function LineGraph() {
	const groupedData = {}
	OlimpycData.forEach((athlete) => {
		const year = athlete.Year
		const gender = athlete.Gender.toLowerCase()
		if (!groupedData[year]) {
			groupedData[year] = { men: 0, women: 0 }
		}

		groupedData[year][gender]++
	})
	// Crear los conjuntos de datos para Chart.js
	const years = Object.keys(groupedData)
	const menData = years.map((year) => groupedData[year].men)
	const womenData = years.map((year) => groupedData[year].women)

	const chartData = {
		labels: OlimpycData.map((data) => data.Year),
		datasets: [
			{
				label: 'Hombres',
				data: menData,
				backgroundColor: '#064FF0',
				borderColor: '#064FF0',
				fill: false,
				tension: 0.4,
				pointRadius: 3,
			},
			{
				label: 'Mujeres',
				data: womenData,
				backgroundColor: '#FF3030',
				borderColor: '#FF3030',
				fill: false,
				tension: 0.4,
				pointRadius: 3,
			},
		],
	}

	return (
		<div>
			<h1>Multi Líneas</h1>
			<h2>{''}</h2>
			<Line
				data={chartData}
				option={{
					responsive: true,
					title: {
						display: true,
						text: 'Participación de hombres y mujeres en las Olimpiadas',
					},
					scales: {
						xAxes: [
							{
								scaleLabel: {
									display: true,
									labelString: 'Año',
								},
							},
						],
						yAxes: [
							{
								scaleLabel: {
									display: true,
									labelString: 'Número de atletas',
								},
							},
						],
					},
				}}
			/>
		</div>
	)
}

export default LineGraph
