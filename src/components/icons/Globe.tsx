import type { SVGProps } from 'react'

export function Globe(props: SVGProps<SVGSVGElement>) {
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
				<circle
					cx={12}
					cy={12}
					r={10}
				></circle>
				<path d='M12 2a14.5 14.5 0 0 0 0 20a14.5 14.5 0 0 0 0-20M2 12h20'></path>
			</g>
		</svg>
	)
}
