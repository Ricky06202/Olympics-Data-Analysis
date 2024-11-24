import React from 'react'
import type { SVGProps } from 'react'

export function GithubIcon(props: SVGProps<SVGSVGElement>) {
	return (
		<svg
			xmlns='http://www.w3.org/2000/svg'
			width='1.03em'
			height='1em'
			viewBox='0 0 1536 1504'
			{...props}
		>
			<path
				fill='currentColor'
				d='M768 0q209 0 385.5 103T1433 382.5T1536 768q0 251-146.5 451.5T1011 1497q-27 5-40-7t-13-30q0-3 .5-76.5t.5-134.5q0-97-52-142q57-6 102.5-18t94-39t81-66.5t53-105T1258 728q0-119-79-206q37-91-8-204q-28-9-81 11t-92 44l-38 24q-93-26-192-26t-192 26q-16-11-42.5-27T450 331.5T365 318q-45 113-8 204q-79 87-79 206q0 85 20.5 150T351 983t80.5 67t94 39t102.5 18q-39 36-49 103q-21 10-45 15t-57 5t-65.5-21.5T356 1146q-19-32-48.5-52t-49.5-24l-20-3q-21 0-29 4.5t-5 11.5t9 14t13 12l7 5q22 10 43.5 38t31.5 51l10 23q13 38 44 61.5t67 30t69.5 7t55.5-3.5l23-4q0 38 .5 88.5t.5 54.5q0 18-13 30t-40 7q-232-77-378.5-277.5T0 768q0-209 103-385.5T382.5 103T768 0M291 1103q3-7-7-12q-10-3-13 2q-3 7 7 12q9 6 13-2m31 34q7-5-2-16q-10-9-16-3q-7 5 2 16q10 10 16 3m30 45q9-7 0-19q-8-13-17-6q-9 5 0 18t17 7m42 42q8-8-4-19q-12-12-20-3q-9 8 4 19q12 12 20 3m57 25q3-11-13-16q-15-4-19 7t13 15q15 6 19-6m63 5q0-13-17-11q-16 0-16 11q0 13 17 11q16 0 16-11m58-10q-2-11-18-9q-16 3-14 15t18 8t14-14'
			></path>
		</svg>
	)
}