import React from 'react'
import Search from '../components/Search'
import CityName from '../components/CityName'
import CityTimezone from '../components/CityTimezone'
import CityWind from '../components/CityWind'
import CityTemp from '../components/CityTemp'

// Contenedor de la parte central de la app
export default function CardsDashboard() {
	return (
		<section className='cardsDashBoard'>
			<Search />
			<div className='cardsDashBoard_cards'>
				{/* Componentes del dashboard */}
				<CityName />
				<CityTemp />
				<CityWind />
				<CityTimezone />
			</div>
		</section>
	)
}
