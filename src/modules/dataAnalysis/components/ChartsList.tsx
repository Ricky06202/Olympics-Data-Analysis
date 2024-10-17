import { BarChart3 } from 'components/icons/BarChart3'
import { TrendingUp } from 'components/icons/TrendingUp'
import { Users } from 'components/icons/Users'
import DashboardCard from './DashboardCard'

export default function ChartsList() {
	return (
		<>
			<h2 className='text-xl font-semibold text-gray-700'>Tendencias Olímpicas</h2>
			<div className='grid grid-cols-1 gap-6 mt-6 sm:grid-cols-2 lg:grid-cols-3'>
				{/* Medallero por País */}
				<DashboardCard titulo='Medallero por País'>
					<BarChart3 className='w-16 h-16 text-gray-400' />
				</DashboardCard>

				{/* Tendencia de Medallas */}
				<DashboardCard titulo='Tendencia de Medallas'>
					<TrendingUp className='w-16 h-16 text-gray-400' />
				</DashboardCard>

				{/* Atletas Destacados */}
				<DashboardCard titulo='Atletas Destacados'>
					<Users className='w-16 h-16 text-gray-400' />
				</DashboardCard>
			</div>
		</>
	)
}
