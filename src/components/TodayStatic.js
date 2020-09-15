import React, { useContext } from 'react'

import { WeatherContext } from '../context/WeatherContext'

// Este componente ira a la derecha
export default function CityTemp() {
	const { weather, loading } = useContext(WeatherContext)

	return (
		<>
			{!loading && (
				<div className='today'>
					<h1 className='today_title'>Today</h1>
					<div className='today_temp-container'>
						<i className='fas fa-cloud-sun today_icon-temp'></i>
						<div className='today_date'>
							<p className='today_date_number'>
								{(weather.main.temp - 273.15).toFixed(0)}
								<span className='today_date_number_span'>°C</span>
							</p>
							<p className='today_date_state'>{weather.weather[0].main}</p>
						</div>
					</div>
				</div>
			)}
		</>
	)
}
