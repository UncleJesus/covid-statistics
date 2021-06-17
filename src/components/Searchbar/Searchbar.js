import React from 'react'

import './searchbar.css'

const Searchbar = function ({ handleFilter, value }) {
	return (
		<div className='Searchbar'>
			<input
				value={value}
				className='SearchForm-input'
				type='text'
				autoComplete='off'
				autoFocus
				placeholder='Search...'
				onChange={(e) => {
					handleFilter(e.target.value)
				}}
			/>
		</div>
	)
}

export default Searchbar
