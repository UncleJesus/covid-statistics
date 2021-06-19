import React from 'react'

import './logo.css'
import logo from './logo.jpg'
const Logo = function () {
	return (
		<div className='Logo-container'>
			<img src={logo} className='Logo-img' />
			<h1 className='Logo-text'>STATISTIC</h1>
		</div>
	)
}

export default Logo
