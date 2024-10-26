import { BarChart3 } from 'components/icons/BarChart3'
import { TrendingUp } from 'components/icons/TrendingUp'
import { Users } from 'components/icons/Users'
import DashboardCard from './DashboardCard'
import HombreVSMujeres from './HombreVSMujeres'
import MedallasPorPais from './MedallasPorPais'
import PieMedallas from './MedallasPaisPie'
import MedallasPorOlimpiada from './MedallasTiempo'

export default function ChartsList() {
	return (
		<>
			<h2 className='text-xl font-semibold text-gray-700'>Tendencias Olímpicas</h2>
			<div className='grid grid-cols-1 gap-6 mt-6 sm:grid-cols-2 lg:grid-cols-3'>
				<DashboardCard
					titulo='Países con mas Medallas'
					icon={<TrendingUp className='w-6 h-6 text-gray-600' />}
				>
					<MedallasPorOlimpiada limite={5} />
				</DashboardCard>

				<DashboardCard
					titulo='Medallero por País'
					icon={<BarChart3 className='w-6 h-6 text-gray-600' />}
				>
					<MedallasPorPais countryName='United States' />
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
				>
					<PieMedallas eventName='football' />
				</DashboardCard>
			</div>
		</>
	)
}
