import React, { useContext } from 'react'

import { WeatherContext } from '../context/WeatherContext'

// Este componente ira a la derecha
export default function CityTemp() {
	const { weather, loading } = useContext(WeatherContext)

	// Obtener Fecha correctamente
	const miFechaActual = new Date()
	const date = miFechaActual.getDate()
	let month = miFechaActual.getMonth()
	let day = miFechaActual.getDay()

	// Dependiendo del numero de la semana nos da el dia
	switch (day) {
		case 1:
			day = 'Monday'
			break
		case 2:
			day = 'Tuesday'
			break
		case 3:
			day = 'Wednesday'
			break
		case 4:
			day = 'Thursday'
			break
		case 5:
			day = 'Friday'
			break
		case 6:
			day = 'Saturday'
			break
		case 7:
			day = 'Sunday'
			break
	}

	// Dependiendo del numero del mes nos da el mes
	// Empieza desde cero
	switch (month) {
		case 0:
			month = 'Jan'
			break
		case 1:
			month = 'Feb'
			break
		case 2:
			month = 'March'
			break
		case 3:
			month = 'April'
			break
		case 4:
			month = 'May'
			break
		case 5:
			month = 'June'
			break
		case 6:
			month = 'July'
			break
		case 7:
			month = 'Aug'
			break
		case 8:
			month = 'Sep'
			break
		case 9:
			month = 'Oct'
			break
		case 10:
			month = 'Nov'
			break
		case 11:
			month = 'Dec'
			break
	}

	// console.log(day, date, month);

	return (
		<>
			{!loading && (
				<div className='right_name'>
					<h2 className='right_name_title'>{weather.name}</h2>
					<h3 className='right_name_country'>{weather.sys.country}</h3>
					<h3 className='right_name_date'>{`${day}, ${date} ${month}`}</h3>
				</div>
			)}
		</>
	)
}
