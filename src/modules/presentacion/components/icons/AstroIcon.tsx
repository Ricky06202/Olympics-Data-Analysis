import React from 'react'
import type { SVGProps } from 'react'

export function AstroIcon(props: SVGProps<SVGSVGElement>) {
	return (
		<svg
			xmlns='http://www.w3.org/2000/svg'
			width='1em'
			height='1em'
			viewBox='0 0 16 16'
			{...props}
		>
			<g
				fill='none'
				strokeLinecap='round'
				strokeLinejoin='round'
			>
				<path
					stroke='currentColor'
					d='M10.561 1.61L13.5 10.5c-.995-.517-2.395-1.298-3.5-1.493L8 3.5L6 9.007c-1.11.194-2.5.974-3.5 1.493l3.163-8.891c.121-.398.182-.597.302-.745A1 1 0 0 1 6.36.57c.176-.07.384-.07.8-.07h1.902c.416 0 .625 0 .801.071a1 1 0 0 1 .396.293c.12.148.18.347.301.746'
				></path>
				<path
					stroke='currentColor'
					d='M10.411 11.266c-.43.365-1.292.613-2.283.613c-1.217 0-2.237-.374-2.508-.879a2.8 2.8 0 0 0-.119.831s-.063 1.038.666 1.76c0-.374.307-.679.686-.679c.648 0 .648.561.647 1.016v.04c0 .691.426 1.282 1.032 1.532a1.4 1.4 0 0 1-.141-.61c0-.658.39-.903.845-1.188c.36-.227.761-.479 1.038-.985a1.84 1.84 0 0 0 .137-1.451'
				></path>
			</g>
		</svg>
	)
}
