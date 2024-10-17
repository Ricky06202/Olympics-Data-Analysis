import { BarChart3 } from 'components/icons/BarChart3'
import { Globe } from 'components/icons/Globe'
import { Medal } from 'components/icons/Medal'
import { Users } from 'components/icons/Users'

export default function Sidebar() {
	return (
		<aside className='w-64 bg-white shadow-md'>
			<div className='p-4'>
				<h1 className='text-2xl font-bold text-blue-600'>Olimpiadas</h1>
			</div>
			<nav className='mt-6'>
				<a
					href='#'
					className='flex items-center px-4 py-2 text-gray-700 bg-gray-200'
				>
					<BarChart3 className='w-5 h-5 mr-3' />
					Dashboard
				</a>
				<a
					href='#'
					className='flex items-center px-4 py-2 text-gray-600 hover:bg-gray-200'
				>
					<Globe className='w-5 h-5 mr-3' />
					Países
				</a>
				<a
					href='#'
					className='flex items-center px-4 py-2 text-gray-600 hover:bg-gray-200'
				>
					<Users className='w-5 h-5 mr-3' />
					Atletas
				</a>
				<a
					href='#'
					className='flex items-center px-4 py-2 text-gray-600 hover:bg-gray-200'
				>
					<Medal className='w-5 h-5 mr-3' />
					Medallas
				</a>
			</nav>
		</aside>
	)
}
