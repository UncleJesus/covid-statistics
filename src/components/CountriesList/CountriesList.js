import React from 'react'
import './countriesList.css'
const CountriesList = function ({ countries, onOpenModal }) {
	return (
		<table className='Country-table'>
			<thead className='Country-table-head'>
				<tr className='Country-table-head-row'>
					<th className='Head-number'>№</th>
					<th className='Head-country'>Country</th>
					<th className='Head-cases'>Total Confirmed</th>
				</tr>
			</thead>
			<tbody className='Country-table-body '>
				{countries.map((country, index) => {
					return (
						<tr
							className='Country-row'
							key={country.ID}
							onClick={() => {
								onOpenModal({
									name: country.Country,
									totalConfirmed: country.TotalConfirmed,
									totalDeaths: country.TotalDeaths,
									totalRecovered: country.TotalRecovered,
								})
							}}
						>
							<td className='Country-number'>{index + 1}</td>
							<td className='Country-country'>{country.Country}</td>
							<td className='Country-cases'>{country.TotalConfirmed}</td>
						</tr>
					)
				})}
			</tbody>
		</table>
	)
}

export default CountriesList
