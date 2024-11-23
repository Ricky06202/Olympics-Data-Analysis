import { useState, useEffect } from 'react'
import OlympicData from '@dataAnalysis/constants/Summer-Olympic-medals-1976-to-2008.json'
import InputPaises from '@dataAnalysis/components/options/inputPaises'

export default function TablaMedallasPaises() {
	const [countrySelect, setCountrySelect] = useState({})
	const [countryFilter, setCountryFilter] = useState('')

	useEffect(() => {
		setCountrySelect(
			OlympicData.reduce((acc, data) => {
				const country = data.Country
				acc[country] = acc[country] || {
					Country: country,
					gold: 0,
					silver: 0,
					bronze: 0,
					total: 0,
				}
				acc[country][data.Medal.toLowerCase()]++
				acc[country].total++
				return acc
			}, {})
		)
	}, [OlympicData])

	const filterCountries = Object.values(countrySelect).filter((countryData) => {
		if (countryData.Country) {
			return countryData.Country.toLowerCase().includes(countryFilter.toLowerCase())
		}
		return false
	})

	// {Object.entries(countrySelect).map(([country, medals]) => (
	// console.log(countrySelect.country);

	return (
		<div className='mt-8 bg-white rounded-lg shadow'>
			<InputPaises
				value={countryFilter}
				onChange={(e) => setCountryFilter(e.target.value.toLowerCase())}
			/>
			<div>
				<div className='p-4'>
					<h3 className='text-lg font-semibold text-gray-700'>Resumen de Medallas</h3>
				</div>
				<div className='overflow-x-auto'>
					<table className='w-full table-auto'>
						<thead className='bg-gray-50'>
							<tr>
								<th className='px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider'>País</th>
								<th className='px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider'>Oro</th>
								<th className='px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider'>
									Plata
								</th>
								<th className='px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider'>
									Bronce
								</th>
								<th className='px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider'>
									Total
								</th>
							</tr>
						</thead>
						<tbody className='bg-white divide-y divide-gray-200'>
							{filterCountries.map((countryData) => (
								<tr key={countryData.Country}>
									<td className='px-6 py-4 whitespace-nowrap'>{countryData.Country}</td>
									<td className='px-6 py-4 whitespace-nowrap'>{countryData.gold}</td>
									<td className='px-6 py-4 whitespace-nowrap'>{countryData.silver}</td>
									<td className='px-6 py-4 whitespace-nowrap'>{countryData.bronze}</td>
									<td className='px-6 py-4 whitespace-nowrap'>{countryData.total}</td>
								</tr>
							))}
						</tbody>
					</table>
				</div>
			</div>
		</div>
	)
}
