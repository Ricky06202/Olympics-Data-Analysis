interface Props {
	children: React.ReactNode
	titulo: string
}
export default function DashboardCard({ children, titulo }: Props) {
	return (
		<div className='p-4 bg-white rounded-lg shadow'>
			<h3 className='text-lg font-semibold text-gray-700'>{titulo}</h3>
			<div className='mt-4 h-64 bg-gray-200 rounded flex items-center justify-center'>
				{children}
				{/* <Users className='w-16 h-16 text-gray-400' /> */}
				{/* <TrendingUp className='w-16 h-16 text-gray-400' /> */}
				{/* <BarChart3 className='w-16 h-16 text-gray-400' /> */}
			</div>
		</div>
	)
}
