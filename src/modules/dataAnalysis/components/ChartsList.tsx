import { BarChart3 } from 'components/icons/BarChart3'
import { TrendingUp } from 'components/icons/TrendingUp'
import { Users } from 'components/icons/Users'
import DashboardCard from './DashboardCard'
import BarGraph from './Bar'
import LineGraph from './MultiLine'
import PieGraph from './Pie'

export default function ChartsList() {
	return (
		<>
			<h2 className='text-xl font-semibold text-gray-700'>Tendencias Olímpicas</h2>
			<div className='grid grid-cols-1 gap-6 mt-6 sm:grid-cols-2 lg:grid-cols-3'>
				{/* Medallero por País */}
				<DashboardCard
					titulo='Medallero por País'
					icon={<BarChart3 className='w-6 h-6 text-gray-600' />}
				>
					<BarGraph limite={5} />
				</DashboardCard>

				{/* Tendencia de Medallas */}
				<DashboardCard
					titulo='Tendencia de Medallas'
					icon={<TrendingUp className='w-6 h-6 text-gray-600' />}
				>
					<LineGraph />
				</DashboardCard>

				{/* Atletas Destacados */}
				<DashboardCard
					titulo='Atletas Destacados'
					icon={<Users className='w-6 h-6 text-gray-600' />}
				>
					<PieGraph eventName='football' />
				</DashboardCard>
			</div>
		</>
	)
}
