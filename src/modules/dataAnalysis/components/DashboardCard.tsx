interface Props {
	children: React.ReactNode
	titulo: string
	icon: React.ReactNode
}
export default function DashboardCard({ children, titulo, icon }: Props) {
	return (
		<div className='p-4 bg-white rounded-lg shadow'>
			<div className='flex items-center gap-2 '>
				{icon}
				<h3 className='text-lg font-semibold text-gray-700'>{titulo}</h3>
			</div>
			<div className='mt-4 h-64 shadow rounded flex items-center justify-center p-4'>
				{children}
				{/* <Users className='w-16 h-16 text-gray-400' /> */}
				{/* <TrendingUp className='w-16 h-16 text-gray-400' /> */}
				{/* <BarChart3 className='w-16 h-16 text-gray-400' /> */}
			</div>
		</div>
	)
}
