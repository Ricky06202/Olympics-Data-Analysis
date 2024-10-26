import React from 'react'
import { Chart as ChartJS, defaults } from 'chart.js/auto'
import { Pie } from 'react-chartjs-2'

import OlympicData from '@dataAnalysis/constants/Summer-Olympic-medals-1976-to-2008.json'

export default function PieMedallas({ eventName }) {
	const goldMedalByCountry = OlympicData.reduce((acc, item) => {
		if (item.Medal === 'Gold' && item.Event === eventName) {
			acc[item.Country] = (acc[item.Country] || 0) + 1
		}
		return acc
	}, {})

	const dataArray = Object.entries(goldMedalByCountry).map(([country, medals]) => ({
		country,
		medals,
	}))

	dataArray.sort((a, b) => b.medals - a.medals)

	const labels = dataArray.map((item) => item.country)
	const values = dataArray.map((item) => item.medals)

	const chartData = {
		labels,
		datasets: [
			{
				label: 'Medallas de Oro',
				data: values,
				backgroundColor: [
					'red',
					'blue',
					'yellow',
					'orange',
					'green',
					'cyan',
					'magenta',
					'purple',
					'lime',
					'lightblue',
					'pink',
				],
				borderWidth: 1,
			},
		],
	}

	return <Pie data={chartData} />
}
