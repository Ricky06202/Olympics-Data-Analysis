import React from 'react'
import type { SVGProps } from 'react'

export function ChevronRight(props: SVGProps<SVGSVGElement>) {
	return (
		<svg
			xmlns='http://www.w3.org/2000/svg'
			width='1em'
			height='1em'
			viewBox='0 0 20 20'
			{...props}
		>
			<path
				fill='currentColor'
				fillRule='evenodd'
				d='M7.293 14.707a1 1 0 0 1 0-1.414L10.586 10L7.293 6.707a1 1 0 0 1 1.414-1.414l4 4a1 1 0 0 1 0 1.414l-4 4a1 1 0 0 1-1.414 0'
				clipRule='evenodd'
			></path>
		</svg>
	)
}
