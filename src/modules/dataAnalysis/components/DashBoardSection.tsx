interface Props {
	children: React.ReactNode
	titulo: string
}
export default function DashBoardSection({ children, titulo }: Props) {
	return (
		<div className='flex flex-col gap-4'>
			<h2 className='text-xl font-semibold text-gray-700'>{titulo}</h2>
			{children}
		</div>
	)
}
