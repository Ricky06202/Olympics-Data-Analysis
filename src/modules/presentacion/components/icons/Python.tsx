import React from 'react'
import type { SVGProps } from 'react'

export function PythonIcon(props: SVGProps<SVGSVGElement>) {
	return (
		<svg
			xmlns='http://www.w3.org/2000/svg'
			width='1em'
			height='1em'
			viewBox='0 0 24 24'
			{...props}
		>
			<g fill='none'>
				<path
					stroke='currentColor'
					strokeLinecap='round'
					strokeLinejoin='round'
					strokeWidth={1.5}
					d='M12 7.5H7.5m4.5 9h4.5m0 0h1.521c.807 0 1.634-.188 2.13-.824c.531-.679 1.099-1.835 1.099-3.676c0-1.84-.568-2.997-1.098-3.676c-.497-.636-1.324-.824-2.13-.824H16.5m0 9v1.521c0 .807-.188 1.634-.824 2.13c-.679.531-1.835 1.099-3.676 1.099c-1.84 0-2.997-.568-3.676-1.098c-.636-.497-.824-1.324-.824-2.13V16.5m0-9H5.978c-.807 0-1.633.188-2.13.824c-.53.679-1.098 1.835-1.098 3.676c0 1.84.568 2.997 1.098 3.676c.497.636 1.323.824 2.13.824H7.5m0-9V5.978c0-.807.188-1.633.824-2.13c.679-.53 1.835-1.098 3.676-1.098c1.84 0 2.997.568 3.676 1.098c.636.497.824 1.323.824 2.13V7.5m-9 9V14a2 2 0 0 1 2-2h5a2 2 0 0 0 2-2V7.5'
				></path>
				<path
					fill='currentColor'
					d='M15 18.5a.75.75 0 1 1-1.5 0a.75.75 0 0 1 1.5 0m-6-13a.75.75 0 1 1 1.5 0a.75.75 0 0 1-1.5 0'
				></path>
			</g>
		</svg>
	)
}
