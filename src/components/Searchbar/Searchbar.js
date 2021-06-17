import React from 'react'
import searchSvg from './search.svg'
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
			<img className='Searchbar-svg' src={searchSvg} />
		</div>
	)
}

export default Searchbar
