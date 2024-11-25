import { DashboardPages, type Page } from '@dataAnalysis/constants/DashboardPages'
import { object } from 'astro:schema'
import { BarChart3 } from 'components/icons/BarChart3'
import { Globe } from 'components/icons/Globe'
import { Medal } from 'components/icons/Medal'
import { Users } from 'components/icons/Users'
import { Award } from 'modules/presentacion/components/icons/Award'

interface Props {
	page: Page
}

export default function Sidebar({ page }: Props) {
	const isCurrentPage = (pageButton: String) => {
		if (pageButton === page.title) {
			return 'bg-gray-200'
		} else {
			return ''
		}
	}

	function getIcon(pageButton: String) {
		if (pageButton === 'Medallas') {
			return <Medal className='w-5 h-5 mr-3' />
		} else if (pageButton === 'Atletas') {
			return <Users className='w-5 h-5 mr-3' />
		} else if (pageButton === 'Paises') {
			return <Globe className='w-5 h-5 mr-3' />
		} else {
			return <BarChart3 className='w-5 h-5 mr-3' />
		}
	}

	return (
		<aside className='w-64 bg-white shadow-md'>
			<div className='flex items-center p-4'>
				<Award className='h-8 w-8 text-blue-600 mr-2' />
				<span className='text-2xl font-bold text-blue-600'>OlympiData</span>
			</div>
			<nav className='mt-6'>
				{Object.values(DashboardPages).map((button) => (
					<a
						href={button.url}
						className={'flex items-center px-4 py-2 text-gray-700 hover:bg-gray-200 ' + isCurrentPage(button.title)}
					>
						{getIcon(button.title)}
						{button.title}
					</a>
				))}
			</nav>
		</aside>
	)
}
