import React, { useContext } from 'react'

import { WeatherContext } from '../context/WeatherContext'

// Este componente ira a la derecha
export default function CityTemp() {
	const { weather, loading } = useContext(WeatherContext)

	return (
		<>
			{!loading && (
				<div className='cardsRight'>
					<div className='cardsRight_wind'>
						<i className='fas fa-wind cardsRight_wind_icon'></i>
						<p className='cardsRight_wind_text'>{weather.wind.speed}km/h</p>
					</div>
					<div className='cardsRight_humidity'>
						<i className='fas fa-tint cardsRight_humidity_icon'></i>
						<p className='cardsRight_humidity_text'>{weather.main.humidity}%</p>
					</div>
					<div className='cardsRight_rain'>
						<i className='fas fa-cloud-rain cardsRight_rain_icon'></i>
						<p className='cardsRight_rain_text'>{weather.clouds.all}%</p>
					</div>
				</div>
			)}
		</>
	)
}
