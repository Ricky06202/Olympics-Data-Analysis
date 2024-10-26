import React from 'react'
import { Chart as ChartJS, defaults } from 'chart.js/auto'
import { Bar } from 'react-chartjs-2'

import OlympicData from '@dataAnalysis/constants/Summer-Olympic-medals-1976-to-2008.json'

function BarGraph({ limite }) {
	const goldMedalByCountry = OlympicData.reduce((acc, item) => {
		if (item.Medal === 'Gold') {
			acc[item.Country] = (acc[item.Country] || 0) + 1
		}
		return acc
	}, {})

	const dataArray = Object.entries(goldMedalByCountry).map(([country, medals]) => ({
		country,
		medals,
	}))

	dataArray.sort((a, b) => b.medals - a.medals)

	const limiteDataArray = dataArray.slice(0, limite)

	const labels = limiteDataArray.map((item) => item.country)
	const values = limiteDataArray.map((item) => item.medals)

	const chartData = {
		labels,
		datasets: [
			{
				label: 'Medallas de Oro',
				data: values,
				backgroundColor: ['rgba(43, 63, 229, 0.8)'],
				borderRadius: 5,
				fill: false,
			},
		],
	}

	return (
		<Bar
			data={chartData}
			options={{
				indexAxis: 'y', // <-- Esto cambia el eje de las etiquetas
				scales: {
					x: {
						beginAtZero: true,
					},
				},
			}}
		/>
	)
}

export default BarGraph
