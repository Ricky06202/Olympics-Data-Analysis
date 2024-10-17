import { Menu } from 'components/icons/Menu'

interface Props {
	children: React.ReactNode
	titulo: string
}

export default function Container({ children, titulo }: Props) {
	return (
		<main className='flex-1 overflow-y-auto'>
			<header className='bg-white shadow-sm'>
				<div className='flex items-center justify-between px-4 py-3'>
					<button className='text-gray-500 focus:outline-none lg:hidden'>
						<Menu className='w-6 h-6' />
					</button>
					<div className='relative w-64'>
						<input
							className='w-full py-2 pl-10 pr-4 text-gray-700 bg-gray-200 rounded-full focus:outline-none focus:bg-white focus:shadow'
							type='text'
							placeholder='Buscar...'
						/>
						<div className='absolute top-0 left-0 mt-2 ml-3'>
							<svg
								className='w-6 h-6 text-gray-400'
								viewBox='0 0 24 24'
								fill='none'
							>
								<path
									d='M21 21L15 15M17 10C17 13.866 13.866 17 10 17C6.13401 17 3 13.866 3 10C3 6.13401 6.13401 3 10 3C13.866 3 17 6.13401 17 10Z'
									stroke='currentColor'
									strokeWidth='2'
									strokeLinecap='round'
									strokeLinejoin='round'
								/>
							</svg>
						</div>
					</div>
				</div>
			</header>

			<div className='p-6'>{children}</div>
		</main>
	)
}
