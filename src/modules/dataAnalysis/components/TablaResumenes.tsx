export default function TablaResumenes() {
	return (
		<div className='mt-8 bg-white rounded-lg shadow'>
			<div className='p-4'>
				<h3 className='text-lg font-semibold text-gray-700'>Resumen de Medallas</h3>
			</div>
			<div className='overflow-x-auto'>
				<table className='w-full table-auto'>
					<thead className='bg-gray-50'>
						<tr>
							<th className='px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider'>País</th>
							<th className='px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider'>Oro</th>
							<th className='px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider'>Plata</th>
							<th className='px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider'>Bronce</th>
							<th className='px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider'>Total</th>
						</tr>
					</thead>
					<tbody className='bg-white divide-y divide-gray-200'>
						{/* Filas de ejemplo */}
						<tr>
							<td className='px-6 py-4 whitespace-nowrap'>Estados Unidos</td>
							<td className='px-6 py-4 whitespace-nowrap'>39</td>
							<td className='px-6 py-4 whitespace-nowrap'>41</td>
							<td className='px-6 py-4 whitespace-nowrap'>33</td>
							<td className='px-6 py-4 whitespace-nowrap'>113</td>
						</tr>
						<tr>
							<td className='px-6 py-4 whitespace-nowrap'>China</td>
							<td className='px-6 py-4 whitespace-nowrap'>38</td>
							<td className='px-6 py-4 whitespace-nowrap'>32</td>
							<td className='px-6 py-4 whitespace-nowrap'>18</td>
							<td className='px-6 py-4 whitespace-nowrap'>88</td>
						</tr>
						{/* Agrega más filas según sea necesario */}
					</tbody>
				</table>
			</div>
		</div>
	)
}
