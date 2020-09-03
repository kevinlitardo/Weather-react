import React, { useContext } from 'react'

import { WeatherContext } from '../context/WeatherContext'

export default function CityWind() {
	const { weather, loading } = useContext(WeatherContext)

	return (
		<div className='cityWind'>
			{!loading && (
				<>
					<h2 className='cityWind_title'>
						<i className='fas fa-wind cityWind_title_icon'></i>
						Wind
					</h2>
					<h3 className='cityWind_speed_title'>Speed</h3>
					<span className='cityWind_speed_span'>
						<i className='fas fa-tachometer-alt cityWind_speed_icon'></i>
						{weather.wind.speed}
					</span>
					<h3 className='cityWind_deg_title'>Degrees</h3>
					<span className='cityWind_deg_span'>
						<i className='fas fa-location-arrow cityWind_deg_icon'></i>
						{weather.wind.deg}
					</span>
				</>
			)}
		</div>
	)
}
