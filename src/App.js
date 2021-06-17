import React, { Component } from 'react'
import axios from 'axios'

import Header from './components/Header/Header'
import CountriesList from './components/CountriesList/CountriesList'
import Modal from './components/Modal/Modal'

import './app.css'

class App extends Component {
	state = {
		countries: [],
		filter: '',
		showModal: false,
		selectedCountry: {},
	}

	componentDidMount() {
		axios.get('https://api.covid19api.com/summary').then((res) => {
			this.setState({
				countries: res.data.Countries,
			})
		})
	}

	handleFilter = (value) => {
		this.setState({
			filter: value,
		})
	}
	getFilteredCountries = () => {
		const { filter, countries } = this.state

		return countries.filter((country) =>
			country.Country.toLowerCase().includes(filter.toLowerCase())
		)
	}

	modalToggle = (country) => {
		this.setState((prevState) => ({
			showModal: !prevState.showModal,
			selectedCountry: { ...country },
		}))
	}

	render() {
		const { filter, showModal, selectedCountry, countries } = this.state
		const filteredCountries = this.getFilteredCountries()
		console.log(countries)
		return (
			<div className='Container'>
				<Header onFilter={this.handleFilter} value={filter}></Header>
				{showModal && (
					<Modal onClose={this.modalToggle} selectedCountry={selectedCountry} />
				)}
				<CountriesList
					countries={filteredCountries}
					onOpenModal={this.modalToggle}
				/>
			</div>
		)
	}
}

export default App
