import { useOlympicsData } from '@dataAnalysis/hooks/useOlympicsData'
import { Bar } from 'react-chartjs-2'

function MedallasPorOlimpiada({ limite }) {
	const olympicsData = useOlympicsData()

	if (!olympicsData) {
		return <p className='flex justify-center items-center p-40 text-xl'>Cargando</p>
	}

	const goldMedalByCountry = olympicsData.reduce((acc, item) => {
		if (item.Medal === 'Gold') {
			acc[item.Country] = (acc[item.Country] || 0) + 1
		}
		return acc
	}, {})

	let dataArray = Object.entries(goldMedalByCountry).map(([country, medals]) => ({
		country,
		medals,
	}))

	dataArray.sort((a, b) => b.medals - a.medals)

	if (limite) {
		dataArray = dataArray.slice(0, limite)
	}

	const labels = dataArray.map((item) => item.country)
	const values = dataArray.map((item) => item.medals)

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

export default MedallasPorOlimpiada
