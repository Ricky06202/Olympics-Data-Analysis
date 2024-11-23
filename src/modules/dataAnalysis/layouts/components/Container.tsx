import { Menu } from 'components/icons/Menu'

interface Props {
	children: React.ReactNode
	titulo: string
}

export default function Container({ children, titulo }: Props) {
	return (
		<main className='flex-1 overflow-y-auto'>
			<header className='bg-white shadow-sm'>
				<div className='flex items-center justify-between px-4 py-3'></div>
			</header>

			<div className='p-6'>{children}</div>
		</main>
	)
}
