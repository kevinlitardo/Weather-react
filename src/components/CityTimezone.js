import React, { useContext } from 'react'

import { WeatherContext } from '../context/WeatherContext'

export default function CityTimezone() {
	const { weather, loading } = useContext(WeatherContext)

	return (
		<div className='cityTimezone'>
			{!loading && (
				<>
					<h2 className='cityTimezone_title'>
						<i className='fas fa-calendar-day cityTimezone_title_icon'></i>
						Timezone
					</h2>
					<h3 className='cityTimezone_long'>Longitude</h3>
					<span className='cityTimezone_long_span'>
						<i className='fas fa-globe cityTimezone_long_span_icon'></i>
						{weather.coord.lon}
					</span>
					<h3 className='cityTimezone_lat'>Latitude</h3>
					<span className='cityTimezone_lat_span'>
						<i className='fas fa-globe-europe cityTimezone_lat_span_icon'></i>
						{weather.coord.lat}
					</span>
				</>
			)}
		</div>
	)
}
