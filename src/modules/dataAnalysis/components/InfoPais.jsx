import { useEffect, useState, useRef } from 'react'
import CuadroMedalla from './CuadroMedallas'
import OlympicData from '@dataAnalysis/constants/Summer-Olympic-medals-1976-to-2008.json'
import DashboardCard from './DashboardCard'
import { BarChart3 } from 'components/icons/BarChart3'
import MedallasPorPais from './MedallasPorPais'
import DashBoardSection from './DashBoardSection'
import { ChevronDown } from 'components/icons/ChevronDown'

export default function InfoPais() {
	const [countrySelect, setCountrySelect] = useState('')
	const countries = OlympicData.reduce((acc, data) => {
		const country = data.Country
		acc[country] = acc[country] || {
			countryName: country,
		}
		return acc
	}, {})

	const countriesNames = Object.values(countries).map((country) => country.countryName)

	countriesNames.sort(function (a, b) {
		const nameA = a.toLowerCase()
		const nameB = b.toLowerCase()
		if (nameA < nameB) return -1
		if (nameA > nameB) return 1
		return 0
	})

	function selectionCountry(event) {
		setCountrySelect(event.target.value)
	}

	const [isOpen, setIsOpen] = useState(false)
	const dropdownRef = useRef(null)

	const toggleDropdown = () => setIsOpen(!isOpen)

	const handleSelectCountry = (country) => {
		selectionCountry({ target: { value: country } })
		setIsOpen(false)
	}

	useEffect(() => {
		const handleClickOutside = (event) => {
			if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
				setIsOpen(false)
			}
		}

		document.addEventListener('mousedown', handleClickOutside)
		return () => {
			document.removeEventListener('mousedown', handleClickOutside)
		}
	}, [])

	return (
		<DashBoardSection titulo='Información del Pais'>
			<div
				className='relative w-full max-w-xs mx-auto font-sans'
				ref={dropdownRef}
			>
				<button
					onClick={toggleDropdown}
					className='flex items-center justify-between w-full px-4 py-2 text-lg text-left text-gray-900 bg-white border border-gray-300 rounded-lg shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent'
					aria-haspopup='listbox'
					aria-expanded={isOpen}
				>
					<span>{countrySelect || 'Selecciona un país'}</span>
					<ChevronDown
						className={`w-5 h-5 text-gray-400 transition-transform duration-200 ${
							isOpen ? 'transform rotate-180' : ''
						}`}
					/>
				</button>
				{isOpen && (
					<ul
						className='absolute z-10 w-full mt-1 bg-white border border-gray-300 rounded-lg shadow-lg max-h-60 overflow-auto'
						role='listbox'
					>
						{countriesNames.map((country, index) => (
							<li
								key={index}
								className={`px-4 py-2 cursor-pointer hover:bg-blue-50 ${
									country === countrySelect ? 'bg-blue-100' : ''
								}`}
								onClick={() => handleSelectCountry(country)}
								role='option'
								aria-selected={country === countrySelect}
							>
								{country}
							</li>
						))}
					</ul>
				)}
			</div>
			<CuadroMedalla pais={countrySelect} />
			<DashboardCard
				titulo='Historial de Medallas'
				icon={<BarChart3 className='w-6 h-6 text-gray-600' />}
			>
				<MedallasPorPais countryName={countrySelect} />
			</DashboardCard>
		</DashBoardSection>
	)
}
