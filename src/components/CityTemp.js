import React, { useContext } from 'react'

import { WeatherContext } from '../context/WeatherContext'

export default function CityTemp() {
	const { weather, loading } = useContext(WeatherContext)

	return (
		<div className='cityTemp'>
			{!loading && (
				<>
					<h2 className='cityTemp_title'>Temperature</h2>
					<h3>Max Temp</h3>
					<span>{weather.main.temp_max}</span>
					<h3>Min Temp</h3>
					<span>{weather.main.temp_min}</span>
					<h3>Humidity</h3>
					<span>{weather.main.humidity}</span>
				</>
			)}
		</div>
	)
}
