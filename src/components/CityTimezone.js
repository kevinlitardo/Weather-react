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
					<h3 className='cityTimezone_long_title'>Longitude</h3>
					<p className='cityTimezone_long'>
						<span className='cityTimezone_long_span'>
							<i className='fas fa-globe cityTimezone_long_icon'></i>
							{weather.coord.lon}
							<span className='cityTimezone_long_span_deg'>°</span>
						</span>
					</p>
					<h3 className='cityTimezone_lat_title'>Latitude</h3>
					<p className='cityTimezone_lat'>
						<span className='cityTimezone_lat_span'>
							<i className='fas fa-globe-europe cityTimezone_lat_icon'></i>
							{weather.coord.lat}
							<span className='cityTimezone_lat_span_deg'>°</span>
						</span>
					</p>
				</>
			)}
		</div>
	)
}
