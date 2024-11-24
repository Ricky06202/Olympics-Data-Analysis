import React from 'react'
import type { SVGProps } from 'react'

export function Server(props: SVGProps<SVGSVGElement>) {
	return (
		<svg
			xmlns='http://www.w3.org/2000/svg'
			width='1em'
			height='1em'
			viewBox='0 0 24 24'
			{...props}
		>
			<g fill='none'>
				<rect
					width={18.5}
					height={7.5}
					x={2.75}
					y={2.751}
					stroke='currentColor'
					strokeLinecap='round'
					strokeLinejoin='round'
					strokeWidth={1.5}
					rx={2}
				></rect>
				<circle
					cx={6.25}
					cy={6.501}
					r={1.25}
					fill='currentColor'
				></circle>
				<circle
					cx={10.25}
					cy={6.501}
					r={1.25}
					fill='currentColor'
				></circle>
				<rect
					width={18.5}
					height={7.5}
					x={2.75}
					y={13.749}
					stroke='currentColor'
					strokeLinecap='round'
					strokeLinejoin='round'
					strokeWidth={1.5}
					rx={2}
				></rect>
				<circle
					cx={6.25}
					cy={17.499}
					r={1.25}
					fill='currentColor'
				></circle>
				<circle
					cx={10.25}
					cy={17.499}
					r={1.25}
					fill='currentColor'
				></circle>
			</g>
		</svg>
	)
}
