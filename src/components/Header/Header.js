import React from 'react'
import Searchbar from '../Searchbar/Searchbar'
function Header({ onFilter, value }) {
	return (
		<header>
			<Searchbar handleFilter={onFilter} value={value} />
		</header>
	)
}

export default Header
