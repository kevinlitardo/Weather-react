import React from 'react'
import Search from '../components/Search'
import CityName from '../components/CityName'
import CityTimezone from '../components/CityTimezone'
import CityWind from '../components/CityWind'
import CityTemp from '../components/CityTemp'

export default function CardsDashboard() {
	return (
		<section className='cardsDashBoard'>
			<Search />
			<div className='cardsDashBoard_cards'>
				<CityName />
				<CityTimezone />
				<CityWind />
				<CityTemp />
			</div>
		</section>
	)
}
