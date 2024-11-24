import React from 'react'
import type { SVGProps } from 'react'

export function BarChart(props: SVGProps<SVGSVGElement>) {
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
				d='M12 20V10m6 10V4M6 20v-4'
			></path>
		</svg>
	)
}
