import React from 'react'
import Searchbar from '../Searchbar/Searchbar'
import Logo from '../Logo/Logo'
function Header({ onFilter, value }) {
	return (
		<header>
			<Logo />
			<Searchbar handleFilter={onFilter} value={value} />
		</header>
	)
}

export default Header
