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
					{/*TODO: Agregar icono o svg del clima <div> ICON </div> */}
					<div className='today_date_container'>
						<p className='today_date_number'>
							{(weather.main.temp - 273.15).toFixed(2)}
							<span className='today_date_number_span'>°C</span>
						</p>
						<p className='today_date_state'>{weather.weather[0].main}</p>
					</div>
				</div>
			)}
		</>
	)
}
