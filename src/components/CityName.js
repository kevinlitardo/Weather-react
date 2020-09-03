import React, { useContext } from 'react'

import { WeatherContext } from '../context/WeatherContext'

export default function CityName() {
	const { weather, loading } = useContext(WeatherContext)

	return (
		<div className='cityName'>
			{!loading && (
				<>
					<h1 className='cityName_title'>
						<i className='fas fa-globe-americas cityName_title_icon'></i>
						City & Country
					</h1>
					<div className='cityName_grid_contain'>
						<h3 className='cityName_city'>{weather.name}</h3>

						<h3 className='cityName_country'>{weather.sys.country}</h3>

						<h3 className='cityName_temp_title'>Temperature:</h3>
						<p className='cityName_temp'>
							<i className='fas fa-thermometer-full cityName_temp_icon'></i>

							<span className='cityName_temp_span'>
								{(weather.main.temp - 273.15).toFixed(2)}

								<span className='cityName_temp_span_deg'>°C</span>
							</span>
						</p>
						<h3 className='cityName_humidity_title'>Humidity:</h3>
						<p className='cityName_humidity'>
							<i className='fas fa-cloud-rain cityName_humidity_icon'></i>
							<span className='cityName_humidity_span'>
								{weather.main.humidity}
								<span className='cityName_humidity_span_porcentage'>%</span>
							</span>
						</p>
					</div>
				</>
			)}
		</div>
	)
}
