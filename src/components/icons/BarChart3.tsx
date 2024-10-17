import type { SVGProps } from 'react'

export function BarChart3(props: SVGProps<SVGSVGElement>) {
	return (
		<svg
			xmlns='http://www.w3.org/2000/svg'
			width='1em'
			height='1em'
			viewBox='0 0 24 24'
			{...props}
		>
			<path
				fill='none'
				stroke='currentColor'
				strokeLinecap='round'
				strokeLinejoin='round'
				strokeWidth={2}
				d='M3 3v16a2 2 0 0 0 2 2h16m-3-4V9m-5 8V5M8 17v-3'
			></path>
		</svg>
	)
}
