import React, { Component } from 'react'
import './modal.css'
class Modal extends Component {
	componentDidMount() {
		window.addEventListener('keydown', this.modalTogle)
	}
	componentWillUnmount() {
		window.removeEventListener('keydown', this.modalTogle)
	}

	modalTogle = (e) => {
		if (e.code === 'Escape') {
			this.props.onClose()
		}
	}

	render() {
		const { onClose, selectedCountry } = this.props
		return (
			<div className='Overlay'>
				<div className='Modal'>
					<h2 className='Modal-country-name'>{selectedCountry.name}</h2>
					<ul className='Modal-ul'>
						<li className='Modal-country-stat'>
							<span>Total Confirmed</span>{' '}
							<span>{selectedCountry.totalConfirmed}</span>
						</li>
						<li className='Modal-country-stat'>
							<span>Total Deaths</span>
							<span>{selectedCountry.totalDeaths}</span>
						</li>
						<li className='Modal-country-stat'>
							<span>Total Recovered</span>{' '}
							<span>{selectedCountry.totalRecovered}</span>
						</li>
					</ul>
					<button type='button' className='Modal-button' onClick={onClose}>
						<span className='Modal-button-text'>OK</span>
					</button>
				</div>
			</div>
		)
	}
}

export default Modal
