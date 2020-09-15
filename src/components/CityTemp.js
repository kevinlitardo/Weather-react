import React, { useContext } from 'react'

import { WeatherContext } from '../context/WeatherContext'

export default function CityTemp() {
	const { weather, loading } = useContext(WeatherContext)

	return (
		<div className='cityTemp'>
			{!loading && (
				<>
					<h2 className='cityTemp_title'>
						<i className='fas fa-temperature-low cityTemp_title_icon'></i>
						Temperature
					</h2>
					<div className='cityTemp_grid'>
						<h3 className='cityTemp_max_title'>Max Temp</h3>
						<p className='cityTemp_max'>
							<span className='cityTemp_max_span'>
								<i className='fas fa-thermometer-three-quarters cityTemp_max_icon'></i>
								{(weather.main.temp_max - 273.15).toFixed(2)}
								<span className='cityTemp_max_span_deg'>°C</span>
							</span>
						</p>
						<h3 className='cityTemp_min_title'>Min Temp</h3>
						<p className='cityTemp_min'>
							<span className='cityTemp_min_span'>
								<i className='fas fa-thermometer-quarter cityTemp_min_icon'></i>
								{(weather.main.temp_min - 273.15).toFixed(2)}
								<span className='cityTemp_min_span_deg'>°C</span>
							</span>
						</p>
						<h3 className='cityTemp_hum_title'>Humidity</h3>
						<p className='cityTemp_hum'>
							<i className='fas fa-water cityTemp_hum_icon'></i>
							<span className='cityTemp_hum_span'>
								{weather.main.humidity}
								<span className='cityTemp_hum_span_deg'>%</span>
							</span>
						</p>
					</div>
				</>
			)}
		</div>
	)
}
