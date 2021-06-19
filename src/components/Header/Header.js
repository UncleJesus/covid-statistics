import React from 'react'
import Searchbar from '../Searchbar/Searchbar'
import Logo from '../Logo/Logo'

import './header.css'
function Header({ onFilter, value }) {
	return (
		<header className='Header'>
			<Logo />
			<Searchbar handleFilter={onFilter} value={value} />
		</header>
	)
}

export default Header
