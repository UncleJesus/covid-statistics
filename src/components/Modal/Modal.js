import React, { Component } from 'react'

import './modal.css'
import medicalFileSvg from './file-medical.svg'
import skullSvg from './skull.svg'
import heartbeatSvg from './heartbeat.svg'

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
							<img src={heartbeatSvg} className='Modal-svg' />
							<div className='Modal-stat-text'>Total Confirmed</div>
							<div className='Modal-stat-number'>
								{selectedCountry.totalConfirmed}
							</div>
						</li>
						<li className='Modal-country-stat'>
							<img src={skullSvg} className='Modal-svg' />
							<div className='Modal-stat-text'>Total Deaths</div>
							<div className='Modal-stat-number'>
								{selectedCountry.totalDeaths}
							</div>
						</li>
						<li className='Modal-country-stat'>
							<img src={medicalFileSvg} className='Modal-svg' />
							<div className='Modal-stat-text'>Total Recovered</div>
							<div className='Modal-stat-number'>
								{selectedCountry.totalRecovered}
							</div>
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
