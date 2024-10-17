import type { SVGProps } from 'react'

export function TrendingUp(props: SVGProps<SVGSVGElement>) {
	return (
		<svg
			xmlns='http://www.w3.org/2000/svg'
			width='1em'
			height='1em'
			viewBox='0 0 24 24'
			{...props}
		>
			<g
				fill='none'
				stroke='currentColor'
				strokeLinecap='round'
				strokeLinejoin='round'
				strokeWidth={2}
			>
				<path d='m22 7l-8.5 8.5l-5-5L2 17'></path>
				<path d='M16 7h6v6'></path>
			</g>
		</svg>
	)
}
