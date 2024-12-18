import { TrendingUp } from 'components/icons/TrendingUp'
import { Users } from 'components/icons/Users'
import DashboardCard from './DashboardCard'
import HombreVSMujeres from './HombreVSMujeres'
import PieMedallas from './MedallasPaisPie'
import MedallasPorOlimpiada from './MedallasTiempo'
import DashBoardSection from './DashBoardSection'
import SelectorDeportes from './options/selectorDeportes'
import { useState } from 'react'

export default function ChartsList() {
	const [sportName, setSportName] = useState('Volleyball')
	return (
		<DashBoardSection titulo='Tendencias Olímpicas'>
			<div className='grid grid-cols-1 gap-6 mt-6 sm:grid-cols-2 lg:grid-cols-3'>
				<DashboardCard
					titulo='Países con mas Medallas'
					icon={<TrendingUp className='w-6 h-6 text-gray-600' />}
				>
					<MedallasPorOlimpiada limite={5} />
				</DashboardCard>

				<DashboardCard
					titulo='Tendencia por Genero'
					icon={<TrendingUp className='w-6 h-6 text-gray-600' />}
				>
					<HombreVSMujeres />
				</DashboardCard>

				<DashboardCard
					titulo='Destacados por Deporte'
					icon={<Users className='w-6 h-6 text-gray-600' />}
					filter={
						<SelectorDeportes
							value={sportName}
							onChange={(e: React.ChangeEvent<HTMLSelectElement>) => {
								setSportName(e.target.value)
							}}
						/>
					}
				>
					<PieMedallas eventName={sportName} />
				</DashboardCard>
			</div>
		</DashBoardSection>
	)
}
